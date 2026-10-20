'use strict';
const styles = {
  aggressive: {name: 'Ближе к экшену.', description: 'Активнее сближается с противником и давит, когда есть преимущество. Учитывает тип бойца и его рабочую дистанцию.', tempo: 'Высокий', priority: 'Давление в бою', approach: 'Сближение по ситуации', glyph: '↗'},
  balanced: {name: 'Держит баланс.', description: 'Сочетает атаку с осторожным движением. Подбирает дистанцию и меняет решение по обстановке, без постоянного напора.', tempo: 'Умеренный', priority: 'Атака и выживание', approach: 'По ситуации на поле', glyph: '⇄'},
  tactical: {name: 'Сначала позиция.', description: 'Осторожнее выбирает сближение, держит дистанцию и отходит при опасности. В центре внимания — безопасное положение на поле.', tempo: 'Осторожный', priority: 'Позиция и выживание', approach: 'Контроль дистанции', glyph: '◎'}
};
const tabs = [...document.querySelectorAll('[data-style]')];
function selectStyle(tab) {
  const style = styles[tab.dataset.style];
  tabs.forEach(item => { const active = item === tab; item.setAttribute('aria-selected', String(active)); item.tabIndex = active ? 0 : -1; });
  document.querySelector('#style-panel').setAttribute('aria-labelledby', tab.id);
  for (const [field, value] of Object.entries(style)) {
    const target = field === 'glyph' ? document.querySelector('.style-glyph') : document.querySelector(`#style-${field}`);
    if (target) target.textContent = value;
  }
}
tabs.forEach((tab,index) => {
  tab.addEventListener('click', () => selectStyle(tab));
  tab.addEventListener('keydown', event => {
    const offsets = {ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1};
    let next;
    if (event.key === 'Home') next = tabs[0];
    else if (event.key === 'End') next = tabs[tabs.length-1];
    else if (event.key in offsets) next = tabs[(index + offsets[event.key] + tabs.length) % tabs.length];
    if (next) { event.preventDefault(); selectStyle(next); next.focus(); }
  });
});
const dialog = document.querySelector('#video-dialog');
const video = document.querySelector('#game-video');
let videoTrigger;
document.querySelectorAll('[data-watch]').forEach(trigger => trigger.addEventListener('click', event => {
  if (typeof dialog.showModal !== 'function') return;
  event.preventDefault();
  videoTrigger = trigger;
  dialog.showModal();
  document.body.style.overflow = 'hidden';
  video.play().catch(() => {});
}));
document.querySelector('.close-video').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  video.pause();
  document.body.style.overflow = '';
  videoTrigger?.focus();
});
function revealAnchor() {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = id ? document.getElementById(id) : null;
  if (target?.matches('details')) { target.hidden = false; target.open = true; }
}
window.addEventListener('hashchange', revealAnchor);
revealAnchor();
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => { link.closest('details').open = false; }));
const faqSearch = document.querySelector('#faq-search');
faqSearch?.addEventListener('input', () => {
  const query = faqSearch.value.trim().toLocaleLowerCase('ru');
  let visible = 0;
  document.querySelectorAll('.faq').forEach(item => {
    item.hidden = !item.textContent.toLocaleLowerCase('ru').includes(query);
    if (!item.hidden) visible++;
  });
  document.querySelector('#faq-empty').hidden = visible > 0;
});
if ('IntersectionObserver' in window) {
  const sticky = document.querySelector('.mobile-download');
  const observed = new Set();
  new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? observed.add(entry.target.id) : observed.delete(entry.target.id));
    sticky.classList.toggle('hidden', observed.size > 0);
  }, {threshold: 0.12}).observe(document.querySelector('#download'));
}
