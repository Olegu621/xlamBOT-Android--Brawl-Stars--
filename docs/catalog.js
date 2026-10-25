(() => {
  const input = document.querySelector('#brawler-query');
  if (!input) return;
  const items = [...document.querySelectorAll('[data-brawler]')];
  const count = document.querySelector('#brawler-count');
  const normalize = value => value.toLocaleLowerCase().replaceAll('ё', 'е').replace(/[\s._-]+/g, '');
  input.closest('label').hidden = false;
  input.addEventListener('input', () => {
    const query = normalize(input.value);
    let visible = 0;
    for (const item of items) {
      item.hidden = !normalize(item.dataset.brawler).includes(query);
      if (!item.hidden) visible++;
    }
    count.textContent = visible ? `Найдено: ${visible} из ${items.length}` : 'Боец не найден. Проверь написание имени.';
  });
})();
