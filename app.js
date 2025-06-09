/* ===================================================================
   app.js  – 2025-06 “multi-list + ハンバーガーメニュー” フル版
   =================================================================== */

/* ------------ 0. 収録リスト情報 ------------------------------ */
const LIST_INFO = {
  "1200": { src: "./words_1200.js", total: 1700 },
  "1900": { src: "./words_1900.js", total: 1900 },
  "pre1": { src: "./words_pre1.js" , total: 1900 }
};

/* ------------ 1. グローバル変数 ------------------------------ */
let words = [];
let MAX_NO = 0;
let filteredIndexes = [];
let indexPtr = 0;

/* ------------ 2. 設定 --------------------------------------- */
const SETTING_KEY_BASE  = "settings_";
const REMEMBER_KEY_BASE = "remembered_";

let settings = {
  whichList       : "1200",
  unrememberedOnly: false,
  rangeStart      : 1,
  rangeEnd        : LIST_INFO["1200"].total,
  showIPA         : false,
  voiceEnabled    : false,
  showWords       : true,
  showPhrases     : true
};
Object.assign(
  settings,
  JSON.parse(localStorage.getItem(SETTING_KEY_BASE + settings.whichList) || "{}")
);

let rememberKey = REMEMBER_KEY_BASE + settings.whichList;
let remembered  = JSON.parse(localStorage.getItem(rememberKey) || "{}");

/* ------------ 3. 単語ファイル読み込み ------------------------ */
async function loadWords(listId){
  const mod  = await import(LIST_INFO[listId].src);
  words      = mod.default;
  MAX_NO     = LIST_INFO[listId].total;

  /* 覚えたフラグの保存先キーを切替え */
  rememberKey = REMEMBER_KEY_BASE + listId;
  remembered  = JSON.parse(localStorage.getItem(rememberKey) || "{}");

  /* 範囲上限を自動補正 */
  if (settings.rangeEnd > MAX_NO) settings.rangeEnd = MAX_NO;

  filteredIndexes = calcFilteredIndexes();
  indexPtr = 0;
  renderCard();

  /* ヘッダー / Drawer セレクトを同期 */
  if (listSel)   listSel.value   = listId;
  drawerListSel.value = listId;
}

/* ------------ 4. DOM 要素取得 ------------------------------- */
const wordEl       = document.getElementById("word");
const meaningEl    = document.getElementById("meaning");
const showBtn      = document.getElementById("showBtn");
const randomBtn    = document.getElementById("randomBtn");
const rememberChk  = document.getElementById("rememberChk");

const prevBtn      = document.getElementById("prevBtn");
const nextBtn      = document.getElementById("nextBtn");
const counterEl    = document.getElementById("counter");

const prevPageBtn  = document.getElementById("prevPageBtn");
const nextPageBtn  = document.getElementById("nextPageBtn");
const pageCounter  = document.getElementById("pageCounter");

const summaryBtn   = document.getElementById("summaryBtn");
const summaryDlg   = document.getElementById("summaryDialog");
const summaryList  = document.getElementById("summaryList");
const closeSummary = document.getElementById("closeSummaryBtn");

/* --- ハンバーガーメニュー関連 --- */
const menuBtn       = document.getElementById("menuBtn");
const menuDrawer    = document.getElementById("menuDrawer");
const drawerSearch  = document.getElementById("drawerSearch");
const drawerSetting = document.getElementById("drawerSetting");
const drawerListSel = document.getElementById("drawerListSel");
const drawerClose   = document.getElementById("drawerClose");

/* --- 検索ダイアログ --- */
const searchDlg   = document.getElementById("searchDialog");
const searchInput = document.getElementById("searchInput");
const searchGo    = document.getElementById("searchGo");
const searchClose = document.getElementById("searchClose");

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

/* --- （削除済み）旧ヘッダーセレクト --- */
const listSel = document.getElementById("whichListSel");
if (listSel) {
  listSel.value = settings.whichList;
  listSel.onchange = () => changeList(listSel.value);
}

/* ------------ 5. 進捗バーを動的に挿入 ------------------------ */
const progressWrap = document.createElement("div");
progressWrap.id = "progressBarWrap";
progressWrap.innerHTML = '<div id="progressBar"></div>';
document.body.insertBefore(progressWrap, document.getElementById("card"));
const progressBar = document.getElementById("progressBar");

/* ------------ 6. 保存ユーティリティ ------------------------- */
function saveRemembered(){
  localStorage.setItem(rememberKey, JSON.stringify(remembered));
}
function saveSettings(){
  localStorage.setItem(
    SETTING_KEY_BASE + settings.whichList,
    JSON.stringify(settings)
  );
}

/* ------------ 7. フィルタなどの計算 ------------------------- */
const PAGE_SIZE = 100;

function calcFilteredIndexes(){
  const arr = [];
  for(let i = 0; i < words.length; i++){
    const w  = words[i];
    const no = i + 1;

    /* ① 範囲 */
    if (no < settings.rangeStart || no > settings.rangeEnd) continue;

    /* ② 未記憶のみ */
    if (settings.unrememberedOnly && remembered[w.word]) continue;

    /* ③ 単語 / 熟語 フィルタ */
    const isPhrase = /[ /]/.test(w.word);
    if ((isPhrase && !settings.showPhrases) ||
        (!isPhrase && !settings.showWords)) continue;

    arr.push(i);
  }
  return arr.length ? arr : [0];   // 空になるのを防止
}
function currentPageStart(){
  return Math.floor(indexPtr / PAGE_SIZE) * PAGE_SIZE;
}

/* ------------ 8. 画面描画 ------------------------------- */
function renderCard(){
  const realIdx = filteredIndexes[indexPtr];
  const item    = words[realIdx];

  wordEl.textContent    = `${realIdx + 1}. ${item.word}`;
  meaningEl.textContent = item.meaning;
  meaningEl.classList.add("hidden");
  rememberChk.checked   = !!remembered[item.word];

  /* カウンタとページ情報 */
  counterEl.textContent = `${indexPtr + 1} / ${filteredIndexes.length}`;

  const pageStart = currentPageStart();
  const slice     = filteredIndexes.slice(pageStart, pageStart + PAGE_SIZE);
  const known     = slice.filter(i => remembered[words[i].word]).length;
  progressBar.style.width =
      `${Math.round(known / slice.length * 100)}%`;

  pageCounter.textContent =
      `${pageStart / PAGE_SIZE + 1} / ${Math.ceil(filteredIndexes.length / PAGE_SIZE)}`;

  if (settings.voiceEnabled) speak(item.word);
}

/* ------------ 9. イベント ------------------------------- */
/* 9-A 単語カード操作 */
showBtn.onclick = () => meaningEl.classList.toggle("hidden");
nextBtn.onclick = () => { if(indexPtr < filteredIndexes.length-1){ indexPtr++; renderCard(); } };
prevBtn.onclick = () => { if(indexPtr > 0){ indexPtr--; renderCard(); } };
nextPageBtn.onclick = () => {
  const p = indexPtr + PAGE_SIZE;
  if (p < filteredIndexes.length){ indexPtr = p; renderCard(); }
};
prevPageBtn.onclick = () => {
  const p = indexPtr - PAGE_SIZE;
  if (p >= 0){ indexPtr = p; renderCard(); }
};
randomBtn.onclick = () => {
  indexPtr = Math.floor(Math.random() * filteredIndexes.length);
  renderCard();
};

/* 9-B 覚えたチェック */
rememberChk.onchange = () => {
  const realIdx = filteredIndexes[indexPtr];
  remembered[words[realIdx].word] = rememberChk.checked;
  saveRemembered();

  if (settings.unrememberedOnly){
    filteredIndexes = calcFilteredIndexes();
    indexPtr = Math.min(indexPtr, filteredIndexes.length - 1);
  }
  renderCard();
};

/* 9-C 一覧ダイアログ */
summaryBtn.onclick = () => {
  summaryList.innerHTML = "";
  const pageStart = currentPageStart();
  const slice = filteredIndexes.slice(pageStart, pageStart + PAGE_SIZE);

  slice.forEach(i => {
    const w = words[i];
    const id = "chk_" + w.word;
    summaryList.insertAdjacentHTML("beforeend",
      `<label class="summaryItem" data-idx="${i}">
         <input type="checkbox" id="${id}" ${remembered[w.word] ? "checked":""}>
         <span class="summaryWord">${i + 1}. ${w.word}</span>
       </label>`
    );
  });

  slice.forEach(i => {
    document.getElementById("chk_" + words[i].word).onchange = e => {
      remembered[words[i].word] = e.target.checked;
      saveRemembered();
      renderCard();
    };
  });

  summaryList.querySelectorAll(".summaryItem").forEach(el => {
    el.onclick = e => {
      if(e.target.tagName === "INPUT") return;
      indexPtr = filteredIndexes.indexOf(Number(el.dataset.idx));
      renderCard();
      summaryDlg.close();
    };
  });

  summaryDlg.showModal();
};
closeSummary.onclick = () => summaryDlg.close();
summaryDlg.addEventListener("click", e => {
  if(e.target === summaryDlg) summaryDlg.close();
});

/* 9-D 検索 */
drawerSearch.onclick = () => {
  menuDrawer.close();
  searchInput.value = "";
  searchDlg.showModal();
};
searchGo.onclick = () => {
  const q = searchInput.value.trim().toLowerCase();
  if(!q){ searchDlg.close(); return; }

  const realIdx = words.findIndex(w => w.word.toLowerCase() === q);
  if(realIdx === -1){ alert("見つかりませんでした"); }
  else if(!filteredIndexes.includes(realIdx)){
    alert("現在の設定範囲外です");
  }else{
    indexPtr = filteredIndexes.indexOf(realIdx);
    renderCard();
  }
  searchDlg.close();
};
searchClose.onclick = () => searchDlg.close();

/* 9-E 設定 */
drawerSetting.onclick = () => {
  menuDrawer.close();
  openSettingDlg();
};
function openSettingDlg(){
  optUnrem.checked    = settings.unrememberedOnly;
  rangeStartEl.value  = settings.rangeStart;
  rangeEndEl.value    = settings.rangeEnd;
  optIPA.checked      = settings.showIPA;
  optVoice.checked    = settings.voiceEnabled;
  optWords.checked    = settings.showWords;
  optPhrases.checked  = settings.showPhrases;
  settingDlg.showModal();
}
settingSave.onclick = () => {
  settings.unrememberedOnly = optUnrem.checked;
  settings.rangeStart       = Number(rangeStartEl.value) || 1;
  settings.rangeEnd         = Number(rangeEndEl.value)   || MAX_NO;
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
settingClose.onclick = () => settingDlg.close();

/* 9-F 覚えた一括リセット */
resetRangeBtn.onclick = () => {
  const {rangeStart: s, rangeEnd: e} = settings;
  if(!confirm(`${s}〜${e} 番の「覚えた」をすべて外します。よろしいですか？`)) return;
  for(let i = s-1; i < e; i++){ delete remembered[words[i].word]; }
  saveRemembered();
  filteredIndexes = calcFilteredIndexes();
  indexPtr = 0;
  renderCard();
  alert("リセットしました！");
};

/* 9-G ハンバーガーメニュー本体 */
menuBtn.onclick   = () => menuDrawer.showModal();
drawerClose.onclick = () => menuDrawer.close();

/* 9-H リスト切替（Drawer ＆ 旧ヘッダー） */
function changeList(newId){
  if(newId === settings.whichList) return;
  settings.whichList = newId;
  saveSettings();
  loadWords(newId);
}
drawerListSel.onchange = () => {
  changeList(drawerListSel.value);
  menuDrawer.close();
};
if (listSel) {
  listSel.onchange = () => changeList(listSel.value);
}

/* ------------ 10. 音声読み上げ --------------------------- */
function speak(text){
  if(!window.speechSynthesis || !settings.voiceEnabled) return;
  const voices = window.speechSynthesis.getVoices();
  let enVoice  = voices.find(v => v.lang.startsWith("en"));
  if(!enVoice && voices.length) enVoice = voices[0];
  const uttr = new SpeechSynthesisUtterance(text);
  uttr.lang  = "en-US";
  if(enVoice) uttr.voice = enVoice;
  window.speechSynthesis.cancel();   // 連打対策
  window.speechSynthesis.speak(uttr);
}

/* ------------ 11. 起動 ------------------------------------ */
loadWords(settings.whichList);
