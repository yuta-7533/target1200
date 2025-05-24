/* === app.js 2025-05 修正版 === */

/* ---------- 定数・状態 ---------- */
const PAGE_SIZE = 100;     // 1ページ＝100語

let index = 0;             // 現在表示している語インデックス
let pageStart = 0;         // 現ページの先頭インデックス（0,100,200…）

/* ---------- 要素取得 ---------- */
const wordEl       = document.getElementById('word');
const meaningEl    = document.getElementById('meaning');
const showBtn      = document.getElementById('showBtn');
const prevBtn      = document.getElementById('prevBtn');
const nextBtn      = document.getElementById('nextBtn');
const counterEl    = document.getElementById('counter');

const rememberChk  = document.getElementById('rememberChk');

const prevPageBtn  = document.getElementById('prevPageBtn');
const nextPageBtn  = document.getElementById('nextPageBtn');
const pageCounter  = document.getElementById('pageCounter');

const summaryBtn   = document.getElementById('summaryBtn');
const summaryDlg   = document.getElementById('summaryDialog');
const summaryList  = document.getElementById('summaryList');
const closeSummary = document.getElementById('closeSummaryBtn');

/* ---------- 進捗バー生成 ---------- */
const progressWrap = document.createElement('div');
progressWrap.id = 'progressBarWrap';
progressWrap.innerHTML = '<div id="progressBar"></div>';
document.body.insertBefore(progressWrap, document.getElementById('card'));
const progressBar = document.getElementById('progressBar');

/* ---------- localStorage：覚えたフラグ ---------- */
const key = 'remembered1200';
let remembered = JSON.parse(localStorage.getItem(key) || '{}'); // {word:true, …}

function saveRemembered() {
  localStorage.setItem(key, JSON.stringify(remembered));
}

/* ---------- 画面更新 ---------- */
function updateCard() {
  const item = words[index];
  wordEl.textContent    = item.word;
  meaningEl.textContent = item.meaning;
  meaningEl.classList.add('hidden');
  counterEl.textContent = `${index + 1} / ${words.length}`;
  rememberChk.checked   = !!remembered[item.word];

  // ページ番号表示
  const pageNo = pageStart / PAGE_SIZE + 1;
  const totalPages = Math.ceil(words.length / PAGE_SIZE);
  pageCounter.textContent = `ページ ${pageNo} / ${totalPages}`;

  // ページ進捗バー計算
  const slice = words.slice(pageStart, pageStart + PAGE_SIZE);
  const known = slice.filter(w => remembered[w.word]).length;
  const ratio = Math.round((known / slice.length) * 100);
  progressBar.style.width = `${ratio}%`;
}

/* ---------- 単語カード操作 ---------- */
showBtn.addEventListener('click', () => {
  meaningEl.classList.toggle('hidden');
});

nextBtn.addEventListener('click', () => {
  if (index < pageStart + PAGE_SIZE - 1 && index < words.length - 1) {
    index++;
    updateCard();
  }
});
prevBtn.addEventListener('click', () => {
  if (index > pageStart) {
    index--;
    updateCard();
  }
});

/* ---------- 覚えたチェック ---------- */
rememberChk.addEventListener('change', () => {
  remembered[words[index].word] = rememberChk.checked;
  saveRemembered();
  updateCard();                 // 進捗バーも即反映
});

/* ---------- 100語ページ送り ---------- */
nextPageBtn.addEventListener('click', () => {
  if (pageStart + PAGE_SIZE < words.length) {
    pageStart += PAGE_SIZE;
    index = pageStart;
    updateCard();
  }
});
prevPageBtn.addEventListener('click', () => {
  if (pageStart - PAGE_SIZE >= 0) {
    pageStart -= PAGE_SIZE;
    index = pageStart;
    updateCard();
  }
});

/* ---------- 一覧ダイアログ ---------- */
summaryBtn.addEventListener('click', () => {
  // 内容を毎回作り直す
  summaryList.innerHTML = '';
  const slice = words.slice(pageStart, pageStart + PAGE_SIZE);

  slice.forEach(w => {
    const id = 'chk_' + w.word;
    const checked = remembered[w.word] ? 'checked' : '';
    summaryList.insertAdjacentHTML(
      'beforeend',
      `<label><input type="checkbox" id="${id}" ${checked}> ${w.word}</label>`
    );
  });

  // チェックボックスにリスナー
  slice.forEach(w => {
    document.getElementById('chk_' + w.word).addEventListener('change', e => {
      remembered[w.word] = e.target.checked;
      saveRemembered();
      updateCard();
    });
  });

  summaryDlg.showModal();
});

closeSummary.addEventListener('click', () => summaryDlg.close());

/* ---------- 初期表示 ---------- */
updateCard();
