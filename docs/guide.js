'use strict';
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => { link.closest('details').open = false; }));
const copy = document.querySelector('[data-copy-report]');
copy?.addEventListener('click', async () => {
  const text = document.querySelector('#report-template').textContent;
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText(text); status.textContent = ' Шаблон скопирован'; }
  catch { const range = document.createRange(); range.selectNodeContents(document.querySelector('#report-template')); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); status.textContent = ' Текст выделен — скопируй его вручную'; }
});

// The complete manual stays readable when scripting is unavailable.
document.querySelectorAll('[data-manual-tools]').forEach(tools => { tools.hidden = false; });
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());

const manualSearch = document.querySelector('[data-manual-search]');
if (manualSearch) {
  manualSearch.hidden = false;
  const query = manualSearch.querySelector('input');
  const list = manualSearch.querySelector('#manual-results');
  const status = manualSearch.querySelector('#manual-search-status');
  const normalize = text => text.toLocaleLowerCase('ru').replaceAll('ё', 'е').replace(/\s+/g, ' ').trim();
  const entries = [...list.querySelectorAll('[data-manual-entry]')].map(item => ({item, text: normalize(item.textContent)}));
  const filter = () => {
    const words = normalize(query.value).split(' ').filter(Boolean);
    let count = 0;
    entries.forEach(({item, text}) => {
      const matches = words.length > 0 && words.every(word => text.includes(word));
      item.hidden = !matches;
      if (matches) count++;
    });
    list.hidden = !words.length || count === 0;
    status.textContent = !words.length ? '' : count ? `Найдено разделов: ${count}` : 'Ничего не найдено. Попробуй другое слово или выбери главу ниже.';
    const url = new URL(location.href);
    if (query.value.trim()) url.searchParams.set('q', query.value.trim());
    else url.searchParams.delete('q');
    history.replaceState(null, '', url);
  };
  query.addEventListener('input', filter);
  manualSearch.querySelector('[data-clear-search]').addEventListener('click', () => {
    query.value = '';
    filter();
    query.focus();
  });
  query.value = new URLSearchParams(location.search).get('q') || '';
  filter();
}

document.querySelectorAll('.manual-section[id] > h2').forEach(heading => {
  const title = heading.textContent;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'manual-anchor';
  button.textContent = '#';
  button.setAttribute('aria-label', `Скопировать ссылку: ${title}`);
  button.title = 'Скопировать ссылку на раздел';
  button.addEventListener('click', async () => {
    const url = new URL(location.href);
    url.hash = heading.parentElement.id;
    const status = document.querySelector('#manual-copy-status');
    try {
      await navigator.clipboard.writeText(url.href);
      status.textContent = 'Ссылка на раздел скопирована';
      button.textContent = '✓';
      button.title = 'Ссылка скопирована';
      setTimeout(() => { button.textContent = '#'; button.title = 'Скопировать ссылку на раздел'; }, 2000);
    } catch {
      status.textContent = `Скопируй ссылку: ${url.href}`;
    }
  });
  heading.append(button);
});
