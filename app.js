/* ===================================================================
   app.js   2025-05 “multi-list 対応・バグ修正 完全版”
   =================================================================== */

/* ---------------- 0. リスト情報 ---------------- */
const LIST_INFO = {
  "1200": { src: "./words_1200.js", total: 1700 },
  "1900": { src: "./words_1900.js", total: 1900 }
};

/* ---------------- 1. 変数 --------------------- */
let words = [];             // 現在ロードしている語彙配列
let MAX_NO = 0;             // 現在リストの語数（範囲上限）
let filteredIndexes = [];   // フィルタ後のインデックス集合
let indexPtr = 0;           // filteredIndexes 内のカーソル

/* ---------------- 2. 設定 --------------------- */
const settingKeyBase  = "settings_";
const rememberKeyBase = "remembered_";

let settings = Object.assign(
  {
    whichList       : "1200",        // ←初期はターゲット1200
    unrememberedOnly: false,
    rangeStart      : 1,
    rangeEnd        : LIST_INFO["1200"].total,
    showIPA         : false,
    voiceEnabled    : false,
    showWords       : true,
    showPhrases     : true
  },
  JSON.parse(localStorage.getItem(settingKeyBase + "1200") || "{}")
);

let rememberKey = rememberKeyBase + settings.whichList;
let remembered  = JSON.parse(localStorage.getItem(rememberKey) || "{}");

/* ---------------- 3. 語彙ファイルの読み込み ---- */
async function loadWords(listId){
  const mod   = await import(LIST_INFO[listId].src);
  words       = mod.default;
  MAX_NO      = LIST_INFO[listId].total;

  /* 範囲上限を自動補正 */
  if(settings.rangeEnd > MAX_NO) settings.rangeEnd = MAX_NO;

  /* 覚えたフラグのキーも切替え */
  rememberKey = rememberKeyBase + listId;
  remembered  = JSON.parse(localStorage.getItem(rememberKey) || "{}");

  filteredIndexes = calcFilteredIndexes();
  indexPtr = 0;
  renderCard();
}

/* ---------------- 4. 要素取得 ------------------ */
const wordEl      = document.getElementById('word');
const meaningEl   = document.getElementById('meaning');
const showBtn     = document.getElementById('showBtn');
const randomBtn   = document.getElementById('randomBtn');
const rememberChk = document.getElementById('rememberChk');

const prevBtn     = document.getElementById('prevBtn');
const nextBtn     = document.getElementById('nextBtn');
const counterEl   = document.getElementById('counter');

const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const pageCounter = document.getElementById('pageCounter');

const summaryBtn   = document.getElementById('summaryBtn');
const summaryDlg   = document.getElementById('summaryDialog');
const summaryList  = document.getElementById('summaryList');
const closeSummary = document.getElementById('closeSummaryBtn');

const searchBtn    = document.getElementById('searchBtn');
const searchDlg    = document.getElementById('searchDialog');
const searchInput  = document.getElementById('searchInput');
const searchGo     = document.getElementById('searchGo');
const searchClose  = document.getElementById('searchClose');

const settingBtn   = document.getElementById('settingBtn');
const settingDlg   = document.getElementById('settingDialog');
const optUnrem     = document.getElementById('optUnremembered');
const rangeStartEl = document.getElementById('rangeStart');
const rangeEndEl   = document.getElementById('rangeEnd');
const optIPA       = document.getElementById('optIPA');
const optVoice     = document.getElementById('optVoice');

const optWords     = document.getElementById('optWords');
const optPhrases   = document.getElementById('optPhrases');

const resetRangeBtn = document.getElementById('resetRangeBtn');
/* ★ NEW : リスト切替セレクト */
const listSel = document.getElementById('whichListSel');

/* ---------------- 5. 進捗バー ------------------ */
const progressWrap = document.createElement('div');
progressWrap.id    = 'progressBarWrap';
progressWrap.innerHTML = '<div id="progressBar"></div>';
document.body.insertBefore(progressWrap, document.getElementById('card'));
const progressBar  = document.getElementById('progressBar');

/* ---------------- 6. 保存ユーティリティ -------- */
function saveRemembered(){
  localStorage.setItem(rememberKey, JSON.stringify(remembered));
}
function saveSettings(){
  /* リスト毎に保存 */
  localStorage.setItem(
    settingKeyBase + settings.whichList,
    JSON.stringify(settings)
  );
}

/* ---------------- 7. 各種計算 ------------------ */
const PAGE_SIZE = 100;

function calcFilteredIndexes(){
  const arr = [];
  for(let i=0;i<words.length;i++){
    const w  = words[i];
    const no = i + 1;

    /* 範囲・未記憶・単語/熟語 の３フィルタ */
    if(no < settings.rangeStart || no > settings.rangeEnd)             continue;
    if(settings.unrememberedOnly && remembered[w.word])                continue;
    const isPhrase = /[ /]/.test(w.word);
    if( ( isPhrase && !settings.showPhrases) ||
        (!isPhrase && !settings.showWords) )                           continue;

    arr.push(i);
  }
  return arr.length ? arr : [0];   // 空だと表示できないので保険
}
function currentPageStart(){
  return Math.floor(indexPtr / PAGE_SIZE) * PAGE_SIZE;
}

/* ---------------- 8. 画面描画 ------------------ */
function renderCard(){
  const realIdx = filteredIndexes[indexPtr];
  const item    = words[realIdx];

  wordEl.textContent    = `${realIdx + 1}. ${item.word}`;
  meaningEl.textContent = item.meaning;
  meaningEl.classList.add('hidden');
  rememberChk.checked   = !!remembered[item.word];

  /* カウンタとページ情報 */
  counterEl.textContent = `${indexPtr + 1} / ${filteredIndexes.length}`;

  const pageStart = currentPageStart();
  const slice     = filteredIndexes.slice(pageStart, pageStart + PAGE_SIZE);
  const known     = slice.filter(i=>remembered[words[i].word]).length;
  progressBar.style.width = `${Math.round(known / slice.length * 100)}%`;

  pageCounter.textContent =
      `${pageStart / PAGE_SIZE + 1} / ${Math.ceil(filteredIndexes.length / PAGE_SIZE)}`;

  if(settings.voiceEnabled) speak(item.word);
}

/* ---------------- 9. イベント ------------------ */
/* 9-A 単語カード */
showBtn.onclick   = ()=>meaningEl.classList.toggle('hidden');
nextBtn.onclick   = ()=>{ if(indexPtr < filteredIndexes.length-1){ indexPtr++; renderCard(); } };
prevBtn.onclick   = ()=>{ if(indexPtr > 0){ indexPtr--; renderCard(); } };
nextPageBtn.onclick = ()=>{
  const p = indexPtr + PAGE_SIZE; if(p < filteredIndexes.length){ indexPtr = p; renderCard(); }
};
prevPageBtn.onclick = ()=>{
  const p = indexPtr - PAGE_SIZE; if(p >= 0){ indexPtr = p; renderCard(); }
};
randomBtn.onclick = ()=>{
  indexPtr = Math.floor(Math.random()*filteredIndexes.length);
  renderCard();
};

/* 9-B 覚えたチェック */
rememberChk.onchange = ()=>{
  const realIdx = filteredIndexes[indexPtr];
  remembered[words[realIdx].word] = rememberChk.checked;
  saveRemembered();

  if(settings.unrememberedOnly){
    filteredIndexes = calcFilteredIndexes();
    indexPtr = Math.min(indexPtr, filteredIndexes.length-1);
  }
  renderCard();
};

/* 9-C 一覧ダイアログ */
summaryBtn.onclick = ()=>{
  summaryList.innerHTML='';
  const pageStart = currentPageStart();
  const slice     = filteredIndexes.slice(pageStart, pageStart + PAGE_SIZE);

  slice.forEach(i=>{
    const w  = words[i];
    const id = 'chk_'+w.word;
    summaryList.insertAdjacentHTML('beforeend',
      `<label class="summaryItem" data-idx="${i}">
         <input type="checkbox" id="${id}" ${remembered[w.word]?'checked':''}>
         <span class="summaryWord">${i+1}. ${w.word}</span>
       </label>`
    );
  });

  /* チェック監視 */
  slice.forEach(i=>{
    document.getElementById('chk_'+words[i].word).onchange = e=>{
      remembered[words[i].word] = e.target.checked;
      saveRemembered();
      renderCard();
    };
  });

  /* 単語クリックでジャンプ */
  summaryList.querySelectorAll('.summaryItem').forEach(el=>{
    el.onclick = e=>{
      if(e.target.tagName==='INPUT') return;
      indexPtr  = filteredIndexes.indexOf(Number(el.dataset.idx));
      renderCard();
      summaryDlg.close();
    };
  });

  summaryDlg.showModal();
};
closeSummary.onclick = ()=>summaryDlg.close();
/* ダイアログ外クリックで閉じる */
summaryDlg.addEventListener('click',e=>{ if(e.target===summaryDlg) summaryDlg.close(); });

/* 9-D 検索 */
searchBtn.onclick = ()=>{ searchInput.value=''; searchDlg.showModal(); };
searchGo.onclick  = ()=>{
  const q = searchInput.value.trim().toLowerCase();
  if(!q){ searchDlg.close(); return; }
  const realIdx = words.findIndex(w=>w.word.toLowerCase() === q);
  if(realIdx === -1){ alert('見つかりませんでした'); }
  else if(!filteredIndexes.includes(realIdx)){
    alert('現在の設定範囲外です');
  }else{
    indexPtr = filteredIndexes.indexOf(realIdx);
    renderCard();
  }
  searchDlg.close();
};
searchClose.onclick = ()=>searchDlg.close();

/* 9-E 設定ダイアログ */
settingBtn.onclick = ()=>{
  optUnrem.checked     = settings.unrememberedOnly;
  rangeStartEl.value   = settings.rangeStart;
  rangeEndEl.value     = settings.rangeEnd;
  optIPA.checked       = settings.showIPA;
  optVoice.checked     = settings.voiceEnabled;
  optWords.checked     = settings.showWords;
  optPhrases.checked   = settings.showPhrases;
  settingDlg.showModal();
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
settingClose.onclick = ()=>settingDlg.close();

/* 9-F 覚えた一括リセット */
resetRangeBtn.onclick = ()=>{
  const {rangeStart: s, rangeEnd: e} = settings;
  if(!confirm(`${s}〜${e} 番の「覚えた」をすべて外します。よろしいですか？`)) return;
  for(let i=s-1;i<e;i++){ delete remembered[words[i].word]; }
  saveRemembered();
  filteredIndexes = calcFilteredIndexes();
  indexPtr = 0;
  renderCard();
  alert('リセットしました！');
};

/* 9-G 語彙リスト切替 */
if(listSel){                     // ← HTML が無いと null になる対策
  listSel.value = settings.whichList;
  listSel.onchange = ()=>{
    settings.whichList = listSel.value;   // "1200" or "1900"
    saveSettings();
    loadWords(settings.whichList);        // ★ 語彙ファイルを読み替え
  };
}

/* ---------------- 10. 音声 --------------------- */
function speak(text){
  if(!window.speechSynthesis || !settings.voiceEnabled) return;
  const voices = window.speechSynthesis.getVoices();
  let enVoice  = voices.find(v=>v.lang.startsWith('en'));
  if(!enVoice && voices.length) enVoice = voices[0];
  const uttr = new SpeechSynthesisUtterance(text);
  uttr.lang  = 'en-US';
  if(enVoice) uttr.voice = enVoice;
  window.speechSynthesis.cancel();   // 連打対策
  window.speechSynthesis.speak(uttr);
}

/* ---------------- 11. 起動 --------------------- */
loadWords(settings.whichList);  // 最初に 1200 をロードして renderCard() まで実行
