'use strict';
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => { link.closest('details').open = false; }));
const copy = document.querySelector('[data-copy-report]');
copy?.addEventListener('click', async () => {
  const text = document.querySelector('#report-template').textContent;
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText(text); status.textContent = ' Шаблон скопирован'; }
  catch { const range = document.createRange(); range.selectNodeContents(document.querySelector('#report-template')); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); status.textContent = ' Текст выделен — скопируй его вручную'; }
});
