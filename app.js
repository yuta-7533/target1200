/* ===== app.js  v2  ================================================= */
/* 2025-05 仕様: ランダム・検索・設定・フィルタ・音声 =================*/

/* ---------- 定数 ---------- */
const PAGE_SIZE = 100;                         // 100 語ごとに 1 ページ
const rememberKey = 'remembered1200';
const settingKey  = 'settings1200';

/* ---------- 状態 ---------- */
let remembered = JSON.parse(localStorage.getItem(rememberKey) || '{}'); // {word:true}
let settings   = Object.assign({
  unrememberedOnly:false,
  rangeStart:1,
  rangeEnd:1700,
  showIPA:false,
  voiceEnabled:false
}, JSON.parse(localStorage.getItem(settingKey) || '{}'));

let filteredIndexes = calcFilteredIndexes();   // 条件を満たす語番号の配列
let indexPtr = 0;                              // filteredIndexes 内の位置

/* ---------- 要素取得 ---------- */
const wordEl      = document.getElementById('word');
const meaningEl   = document.getElementById('meaning');
const showBtn     = document.getElementById('showBtn');
const randomBtn   = document.getElementById('randomBtn');
const rememberChk = document.getElementById('rememberChk');

const prevBtn   = document.getElementById('prevBtn');
const nextBtn   = document.getElementById('nextBtn');
const counterEl = document.getElementById('counter');

const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const pageCounter = document.getElementById('pageCounter');

const summaryBtn   = document.getElementById('summaryBtn');
const summaryDlg   = document.getElementById('summaryDialog');
const summaryList  = document.getElementById('summaryList');
const closeSummary = document.getElementById('closeSummaryBtn');

const searchBtn   = document.getElementById('searchBtn');
const searchDlg   = document.getElementById('searchDialog');
const searchInput = document.getElementById('searchInput');
const searchGo    = document.getElementById('searchGo');
const searchClose = document.getElementById('searchClose');

const settingBtn   = document.getElementById('settingBtn');
const settingDlg   = document.getElementById('settingDialog');
const optUnrem     = document.getElementById('optUnremembered');
const rangeStartEl = document.getElementById('rangeStart');
const rangeEndEl   = document.getElementById('rangeEnd');
const optIPA       = document.getElementById('optIPA');
const optVoice     = document.getElementById('optVoice');
const settingSave  = document.getElementById('settingSave');
const settingClose = document.getElementById('settingClose');

/* ---------- 進捗バー ---------- */
const progressWrap = document.createElement('div');
progressWrap.id = 'progressBarWrap';
progressWrap.innerHTML = '<div id="progressBar"></div>';
document.body.insertBefore(progressWrap, document.getElementById('card'));
const progressBar = document.getElementById('progressBar');

/* =================================================================== */
/*                           ユーティリティ                            */
/* =================================================================== */
function saveRemembered(){ localStorage.setItem(rememberKey, JSON.stringify(remembered)); }
function saveSettings()  { localStorage.setItem(settingKey , JSON.stringify(settings));   }

/* 抽出集合を計算 */
function calcFilteredIndexes(){
  const arr=[];
  for(let i=0;i<words.length;i++){
    const no = i+1;
    if(no < settings.rangeStart || no > settings.rangeEnd) continue;
    if(settings.unrememberedOnly && remembered[words[i].word]) continue;
    arr.push(i);
  }
  return arr.length ? arr : [0];          // 空になるのを防ぐ
}

/* 現在の 100 語ページ開始位置（filtered 内）*/
function currentPageStart(){
  return Math.floor(indexPtr / PAGE_SIZE) * PAGE_SIZE;
}

/* =================================================================== */
/*                          画面レンダリング                            */
/* =================================================================== */
function renderCard(){
  const realIdx = filteredIndexes[indexPtr];
  const item = words[realIdx];

  wordEl.textContent = item.word;
  meaningEl.textContent = item.meaning;
  meaningEl.classList.add('hidden');
  rememberChk.checked = !!remembered[item.word];

  /* カウンタ */
  counterEl.textContent = `${indexPtr+1} / ${filteredIndexes.length}`;

  /* 進捗バー */
  const pageStart = currentPageStart();
  const slice = filteredIndexes.slice(pageStart, pageStart + PAGE_SIZE);
  const known = slice.filter(i=>remembered[words[i].word]).length;
  const ratio = Math.round((known / slice.length) * 100);
  progressBar.style.width = `${ratio}%`;

  /* ページナビ表示 */
  const pageNo = pageStart / PAGE_SIZE + 1;
  const totalPages = Math.ceil(filteredIndexes.length / PAGE_SIZE);
  pageCounter.textContent = `${pageNo} / ${totalPages}`;
}

/* =================================================================== */
/*                              イベント                               */
/* =================================================================== */
/* 意味表示 */
showBtn.onclick = ()=>meaningEl.classList.toggle('hidden');

/* 前後 1 語 */
nextBtn.onclick = ()=>{
  if(indexPtr < filteredIndexes.length-1){ indexPtr++; renderCard(); }
};
prevBtn.onclick = ()=>{
  if(indexPtr > 0){ indexPtr--; renderCard(); }
};

/* 前後ページ(100語単位) */
nextPageBtn.onclick=()=>{
  const newPtr = indexPtr + PAGE_SIZE;
  if(newPtr < filteredIndexes.length){ indexPtr = newPtr; renderCard(); }
};
prevPageBtn.onclick=()=>{
  const newPtr = indexPtr - PAGE_SIZE;
  if(newPtr >= 0){ indexPtr = newPtr; renderCard(); }
};

/* 覚えたトグル */
rememberChk.onchange = ()=>{
  const realIdx = filteredIndexes[indexPtr];
  remembered[words[realIdx].word] = rememberChk.checked;
  saveRemembered();
  /* フィルタが未記憶のみの場合、再計算して位置調整 */
  if(settings.unrememberedOnly){
     filteredIndexes = calcFilteredIndexes();
     indexPtr = Math.min(indexPtr, filteredIndexes.length-1);
  }
  renderCard();
};

/* 🎲 ランダム */
randomBtn.onclick = ()=>{
  indexPtr = Math.floor(Math.random() * filteredIndexes.length);
  renderCard();
  if(settings.voiceEnabled) speak(words[filteredIndexes[indexPtr]].word);
};

/* 一覧ダイアログ */
summaryBtn.onclick = ()=>{
  summaryList.innerHTML='';
  const pageStart = currentPageStart();
  const slice = filteredIndexes.slice(pageStart, pageStart+PAGE_SIZE);

  slice.forEach(i=>{
    const w = words[i];
    const id='chk_'+w.word;
    const checked=remembered[w.word]?'checked':'';
    summaryList.insertAdjacentHTML('beforeend',
      `<label class="summaryItem" data-idx="${i}">
         <input type="checkbox" id="${id}" ${checked}>
         <span class="summaryWord">${w.word}</span>
       </label>`
    );
  });

  /* チェック listener */
  slice.forEach(i=>{
    const w=words[i];
    document.getElementById('chk_'+w.word).onchange=e=>{
      remembered[w.word]=e.target.checked;
      saveRemembered();
      renderCard();
    };
  });

  /* 単語クリック → ジャンプ */
  document.querySelectorAll('.summaryItem').forEach(el=>{
    el.onclick = e=>{
      if(e.target.tagName==='INPUT') return;       // チェック操作は無視
      const real = Number(el.dataset.idx);
      indexPtr = filteredIndexes.indexOf(real);
      renderCard();
      summaryDlg.close();
    };
  });

  summaryDlg.showModal();
};
closeSummary.onclick = ()=>summaryDlg.close();

/* 検索ダイアログ */
searchBtn.onclick = ()=>{ searchInput.value=''; searchDlg.showModal(); };
searchGo.onclick = ()=>{
  const q = searchInput.value.trim().toLowerCase();
  if(!q){ searchDlg.close(); return; }
  const realIdx = words.findIndex(w=>w.word.toLowerCase()===q);
  if(realIdx !== -1){
    /* フィルタ対象内か確認 */
    if(!filteredIndexes.includes(realIdx)){
      alert('現在の設定範囲には含まれていません');  // 簡易
    }else{
      indexPtr = filteredIndexes.indexOf(realIdx);
      renderCard();
    }
  }
  searchDlg.close();
};
searchClose.onclick = ()=>searchDlg.close();

/* 設定ダイアログ（値を表示） */
settingBtn.onclick = ()=>{
  optUnrem.checked       = settings.unrememberedOnly;
  rangeStartEl.value     = settings.rangeStart;
  rangeEndEl.value       = settings.rangeEnd;
  optIPA.checked         = settings.showIPA;
  optVoice.checked       = settings.voiceEnabled;
  settingDlg.showModal();
};

settingSave.onclick = ()=>{
  settings.unrememberedOnly = optUnrem.checked;
  settings.rangeStart = Number(rangeStartEl.value)||1;
  settings.rangeEnd   = Number(rangeEndEl.value)||words.length;
  settings.showIPA    = optIPA.checked;
  settings.voiceEnabled = optVoice.checked;
  saveSettings();

  filteredIndexes = calcFilteredIndexes();
  indexPtr = 0;
  renderCard();
  settingDlg.close();
};
settingClose.onclick = ()=>settingDlg.close();

/* ---------- 音声 ---------- */
function speak(text){
  if(!window.speechSynthesis || !settings.voiceEnabled) return;
  const uttr = new SpeechSynthesisUtterance(text);
  uttr.lang = 'en-US';
  speechSynthesis.cancel();  // 連打対策
  speechSynthesis.speak(uttr);
}

/* ---------- 初期表示 ---------- */
renderCard();
