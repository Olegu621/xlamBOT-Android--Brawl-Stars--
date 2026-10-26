'use strict';
const shareButton = document.querySelector('[data-share-site]');
if (shareButton && navigator.share) {
  shareButton.hidden = false;
  shareButton.addEventListener('click', async () => {
    const status = document.querySelector('[data-share-status]');
    try {
      await navigator.share({title: 'xlamBOT для Brawl Stars на Android', text: 'Посмотри реальную игру xlamBOT. Free можно скачать бесплатно.', url: 'https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/'});
      status.textContent = '';
    } catch (error) {
      status.textContent = error.name === 'AbortError' ? '' : 'Используй кнопку Telegram или скопируй ссылку из адресной строки.';
    }
  });
}
