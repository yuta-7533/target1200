/* ===================================================================
   app.js  – 2025-05 “multi-list + ハンバーガーメニュー” 完成版
   =================================================================== */

/* ------------ 0. 収録リスト情報（ここへ追加すれば拡張可） ------------ */
const LIST_INFO = {
  "1200": { src: "./words_1200.js", total: 1700 },
  "1900": { src: "./words_1900.js", total: 1900 },
  "pre1": { src: "./words_pre1.js", total: 1900 }
};

/* ------------ 1. グローバル変数 ------------------------------ */
let words            = [];      // いま表示している単語配列
let MAX_NO           = 0;       // 現リストの総語数
let filteredIndexes  = [];      // フィルタ後インデックス
let indexPtr         = 0;       // filteredIndexes 内のカーソル

/* ------------ 2. 設定・保存キー ------------------------------ */
const SETTING_KEY_BASE  = "settings_";
const REMEMBER_KEY_BASE = "remembered_";

/* 既読フラグ ＆ 設定（リスト毎に保存する） */
let settings = {
  whichList       : "1200",
  unrememberedOnly: false,
  rangeStart      : 1,
  rangeEnd        : LIST_INFO["1200"].total,
  showIPA         : false,
  voiceEnabled    : false,
  showWords       : true,   // 単語を表示
  showPhrases     : true    // 熟語を表示
};
Object.assign(
  settings,
  JSON.parse(localStorage.getItem(SETTING_KEY_BASE + settings.whichList) || "{}")
);

let rememberKey = REMEMBER_KEY_BASE + settings.whichList;
let remembered  = JSON.parse(localStorage.getItem(rememberKey) || "{}");

/* ------------ 3. 単語ファイル読み込み ------------------------- */
async function loadWords(listId){
  const mod  = await import(LIST_INFO[listId].src);
  words      = mod.default;
  MAX_NO     = LIST_INFO[listId].total;

  /* 設定・覚えたフラグのキーを切替え */
  rememberKey = REMEMBER_KEY_BASE + listId;
  remembered  = JSON.parse(localStorage.getItem(rememberKey) || "{}");

  /* 範囲上限を自動補正（別リストに変えた直後に out-of-range にならないよう） */
  if(settings.rangeEnd > MAX_NO) settings.rangeEnd = MAX_NO;

  filteredIndexes = calcFilteredIndexes();
  indexPtr = 0;
  renderCard();
  /* 2つのセレクトを同期 */
  listSel.value        = listId;
  drawerListSel.value  = listId;
}

/* ------------ 4. DOM 要素取得 ------------------------------- */
const wordEl        = document.getElementById("word");
const meaningEl     = document.getElementById("meaning");
const showBtn       = document.getElementById("showBtn");
const randomBtn     = document.getElementById("randomBtn");
const rememberChk   = document.getElementById("rememberChk");

const prevBtn       = document.getElementById("prevBtn");
const nextBtn       = document.getElementById("nextBtn");
const counterEl     = document.getElementById("counter");

const prevPageBtn   = document.getElementById("prevPageBtn");
const nextPageBtn   = document.getElementById("nextPageBtn");
const pageCounter   = document.getElementById("pageCounter");

const summaryBtn    = document.getElementById("summaryBtn");
const summaryDlg    = document.getElementById("summaryDialog");
const summaryList   = document.getElementById("summaryList");
const closeSummary  = document.getElementById("closeSummaryBtn");

/* --- ハンバーガーメニュー関連 --- */
const menuBtn       = document.getElementById("menuBtn");
const menuDrawer    = document.getElementById("menuDrawer");
const drawerSearch  = document.getElementById("drawerSearch");
const drawerSetting = document.getElementById("drawerSetting");
const drawerListSel = document.getElementById("drawerListSel");
const drawerClose   = document.getElementById("drawerClose");

/* --- 検索ダイアログ ---*/
const searchDlg     = document.getElementById("searchDialog");
const searchInput   = document.getElementById("searchInput");
const searchGo      = document.getElementById("searchGo");
const searchClose   = document.getElementById("searchClose");

/* --- 設定ダイアログ --- */
const settingDlg    = document.getElementById("settingDialog");
const optUnrem      = document.getElementById("optUnremembered");
const rangeStartEl  = document.getElementById("rangeStart");
const rangeEndEl    = document.getElementById("rangeEnd");
const optIPA        = document.getElementById("optIPA");
const optVoice      = document.getElementById("optVoice");
const optWords      = document.getElementById("optWords");
const optPhrases    = document.getElementById("optPhrases");
const settingSave   = document.getElementById("settingSave");
const settingClose  = document.getElementById("settingClose");
const resetRangeBtn = document.getElementById("resetRangeBtn");

/* --- ヘッダー右側のリスト切替セレクト --- */
const listSel       = document.getElementById("whichListSel");

/* ------------ 5. 進捗バー（動的に挿入） ---------------------- */
const progressWrap = document.createElement("div");
progressWrap.id    = "progressBarWrap";
progressWrap.innerHTML = '<div id="progressBar"></div>';
document.body.insertBefore(progressWrap, document.getElementById("card"));
const progressBar  = document.getElementById("progressBar");

/* ------------ 6. ユーティリティ ------------------------------ */
function saveRemembered(){
  localStorage.setItem(rememberKey, JSON.stringify(remembered));
}
function saveSettings(){
  localStorage.setItem(
    SETTING_KEY_BASE + settings.whichList,
    JSON.stringify(settings)
  );
}

/* ------ フィルタ用インデックスを作る ------ */
const PAGE_SIZE = 100;
function calcFilteredIndexes(){
  const out = [];
  for(let i=0;i<words.length;i++){
    const w  = words[i];
    const no = i + 1;

    /* 範囲 */
    if(no < settings.rangeStart || no > settings.rangeEnd) continue;
    /* 未記憶のみ */
    if(settings.unrememberedOnly && remembered[w.word])    continue;
    /* 単語／熟語フィルタ */
    const phrase = /[ /]/.test(w.word);
    if( ( phrase && !settings.showPhrases ) ||
        (!phrase && !settings.showWords) )                 continue;

    out.push(i);
  }
  return out.length ? out : [0];   // 空対策
}
const currentPageStart = ()=> Math.floor(indexPtr/PAGE_SIZE)*PAGE_SIZE;

/* ------------ 7. 画面描写 ------------------------------ */
function renderCard(){
  const realIdx = filteredIndexes[indexPtr];
  const item    = words[realIdx];

  /* 単語表示 */
  wordEl.textContent    = `${realIdx+1}. ${item.word}`;
  meaningEl.textContent = item.meaning;
  meaningEl.classList.add("hidden");
  rememberChk.checked   = !!remembered[item.word];

  /* カウンタ */
  counterEl.textContent = `${indexPtr+1} / ${filteredIndexes.length}`;

  /* 進捗バー */
  const pStart = currentPageStart();
  const slice  = filteredIndexes.slice(pStart, pStart+PAGE_SIZE);
  const known  = slice.filter(i=>remembered[words[i].word]).length;
  progressBar.style.width = `${Math.round(known/slice.length*100)}%`;

  /* ページカウンタ */
  pageCounter.textContent =
       `${pStart/PAGE_SIZE+1} / ${Math.ceil(filteredIndexes.length/PAGE_SIZE)}`;

  /* 発声 */
  if(settings.voiceEnabled) speak(item.word);
}

/* =========================================================
   8. イベントハンドラ
   ========================================================= */
/* ---- 8-A 単語カード周り ---- */
showBtn.onclick = ()=> meaningEl.classList.toggle("hidden");
nextBtn.onclick = ()=>{ if(indexPtr<filteredIndexes.length-1){ indexPtr++;renderCard(); } };
prevBtn.onclick = ()=>{ if(indexPtr>0){ indexPtr--;renderCard(); } };
nextPageBtn.onclick = ()=>{
  const p=indexPtr+PAGE_SIZE; if(p<filteredIndexes.length){ indexPtr=p; renderCard(); }
};
prevPageBtn.onclick = ()=>{
  const p=indexPtr-PAGE_SIZE; if(p>=0){ indexPtr=p; renderCard(); }
};
randomBtn.onclick = ()=>{
  indexPtr = Math.floor(Math.random()*filteredIndexes.length);
  renderCard();
};

/* ---- 8-B 覚えたチェック ---- */
rememberChk.onchange = ()=>{
  const realIdx = filteredIndexes[indexPtr];
  remembered[words[realIdx].word] = rememberChk.checked;
  saveRemembered();

  /* “未記憶のみ” の場合はリスト再構築 */
  if(settings.unrememberedOnly){
    filteredIndexes = calcFilteredIndexes();
    indexPtr = Math.min(indexPtr, filteredIndexes.length-1);
  }
  renderCard();
};

/* ---- 8-C 一覧ダイアログ ---- */
summaryBtn.onclick = ()=>{
  summaryList.innerHTML = "";
  const pStart = currentPageStart();
  const slice  = filteredIndexes.slice(pStart, pStart+PAGE_SIZE);

  slice.forEach(i=>{
    const w = words[i];
    summaryList.insertAdjacentHTML("beforeend",
      `<label class="summaryItem" data-idx="${i}">
         <input type="checkbox" ${remembered[w.word]?"checked":""}>
         <span class="summaryWord">${i+1}. ${w.word}</span>
       </label>`
    );
  });

  /* チェック変更即反映 */
  summaryList.querySelectorAll("input[type=checkbox]").forEach((chk,idx)=>{
    chk.onchange = e=>{
      const real = slice[idx];
      remembered[words[real].word] = e.target.checked;
      saveRemembered();
      renderCard();
    };
  });

  /* 単語クリックでジャンプ */
  summaryList.querySelectorAll(".summaryItem").forEach(el=>{
    el.onclick = e=>{
      if(e.target.tagName==="INPUT") return;
      indexPtr = filteredIndexes.indexOf(Number(el.dataset.idx));
      renderCard();
      summaryDlg.close();
    };
  });

  summaryDlg.showModal();
};
closeSummary.onclick = ()=> summaryDlg.close();
summaryDlg.addEventListener("click",e=>{
  if(e.target === summaryDlg) summaryDlg.close();
});

/* ---- 8-D 検索 ---- */
function openSearchDialog(){
  searchInput.value = "";
  searchDlg.showModal();
}
drawerSearch.onclick = ()=>{
  menuDrawer.close();
  openSearchDialog();
};
searchGo.onclick = ()=>{
  const q = searchInput.value.trim().toLowerCase();
  if(!q){ searchDlg.close(); return; }
  const realIdx = words.findIndex(w=>w.word.toLowerCase()===q);
  if(realIdx === -1)       alert("見つかりませんでした");
  else if(!filteredIndexes.includes(realIdx)) alert("現在の設定範囲外です");
  else { indexPtr = filteredIndexes.indexOf(realIdx); renderCard(); }
  searchDlg.close();
};
searchClose.onclick = ()=> searchDlg.close();

/* ---- 8-E 設定 ---- */
function openSettingDialog(){
  /* 現在値を反映 */
  optUnrem.checked     = settings.unrememberedOnly;
  rangeStartEl.value   = settings.rangeStart;
  rangeEndEl.value     = settings.rangeEnd;
  optIPA.checked       = settings.showIPA;
  optVoice.checked     = settings.voiceEnabled;
  optWords.checked     = settings.showWords;
  optPhrases.checked   = settings.showPhrases;
  settingDlg.showModal();
}
drawerSetting.onclick = ()=>{
  menuDrawer.close();
  openSettingDialog();
};
settingSave.onclick = ()=>{
  settings.unrememberedOnly = optUnrem.checked;
  settings.rangeStart       = Number(rangeStartEl.value)||1;
  settings.rangeEnd         = Number(rangeEndEl.value)||MAX_NO;
  settings.showIPA          = optIPA.checked;
  settings.voiceEnabled     = optVoice.checked;
  settings.showWords        = optWords.checked;
  settings.showPhrases      = optPhrases.checked;
  saveSettings();

  filteredIndexes = calcFilteredIndexes();
  indexPtr = 0;
  renderCard();
  settingDlg.close();
};
settingClose.onclick = ()=> settingDlg.close();

/* ---- 8-F 覚えた一括リセット (設定内ボタン) ---- */
resetRangeBtn.onclick = ()=>{
  const {rangeStart:s, rangeEnd:e} = settings;
  if(!confirm(`${s}〜${e} 番の「覚えた」をすべて外します。よろしいですか？`)) return;
  for(let i=s-1;i<e;i++){ delete remembered[words[i].word]; }
  saveRemembered();
  filteredIndexes = calcFilteredIndexes();
  indexPtr = 0;
  renderCard();
  alert("リセットしました！");
};

/* ---- 8-G リスト切替（ヘッダーと Drawer 両対応） ---- */
function changeList(newId){
  if(newId === settings.whichList) return;
  settings.whichList = newId;
  saveSettings();
  loadWords(newId);
}
listSel.onchange      = ()=> changeList(listSel.value);
drawerListSel.onchange= ()=>{ changeList(drawerListSel.value); menuDrawer.close(); };

/* ---- 8-H ハンバーガー制御 ---- */
menuBtn.onclick   = ()=> menuDrawer.showModal();
drawerClose.onclick = ()=> menuDrawer.close();

/* ------------ 9. 音声合成 ------------------------------ */
function speak(text){
  if(!window.speechSynthesis || !settings.voiceEnabled) return;
  const voices = window.speechSynthesis.getVoices();
  let enVoice = voices.find(v=>v.lang.startsWith("en"));
  if(!enVoice && voices[0]) enVoice = voices[0];

  const uttr  = new SpeechSynthesisUtterance(text);
  uttr.lang   = "en-US";
  if(enVoice) uttr.voice = enVoice;

  window.speechSynthesis.cancel();  // 連打対策
  window.speechSynthesis.speak(uttr);
}

/* ------------ 10. 起動 ------------------------------- */
await loadWords(settings.whichList);   // 1200 をロード → renderCard 実行
