/* Motion is decorative: the content is available without JavaScript. */
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try { if (sessionStorage.getItem('xlam-intro-seen')) return; sessionStorage.setItem('xlam-intro-seen', '1'); } catch (_) {}
  const intro = document.createElement('div');
  intro.className = 'launch-intro';
  intro.setAttribute('aria-hidden', 'true');
  intro.innerHTML = '<div class="launch-grid"></div><div class="launch-orbit launch-orbit-a"></div><div class="launch-orbit launch-orbit-b"></div><div class="launch-core"><div class="launch-mark">X</div><div class="launch-word">xlam<span>BOT</span></div><div class="launch-caption">ANDROID · BRAWL STARS</div><div class="launch-line"><i></i></div></div><div class="launch-flash"></div>';
  document.body.append(intro);
  intro.addEventListener('animationend', e => { if (e.target === intro) intro.remove(); });
  setTimeout(() => intro.remove(), 3600);
})();
