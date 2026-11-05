/* The introduction uses actual gameplay and never blocks the site. */
(() => {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const replay = document.querySelector('#intro-replay');
  let currentIntro = null;

  function showIntro() {
    if (reducedMotion.matches || currentIntro) return;
    const intro = document.createElement('section');
    intro.className = 'launch-intro';
    intro.setAttribute('aria-label', 'Вступление: реальная запись игры xlamBOT');
    intro.innerHTML = `
      <div class="launch-atmosphere" aria-hidden="true"></div>
      <div class="launch-frame" aria-hidden="true">
        <video class="launch-video" muted autoplay playsinline loop preload="metadata" poster="assets/gameplay.webp"><source src="assets/intro-gameplay-v1.mp4" type="video/mp4"></video>
        <div class="launch-shade"></div><div class="launch-scan"></div>
        <div class="launch-target launch-target-one"></div><div class="launch-target launch-target-two"></div>
      </div>
      <div class="launch-top"><span class="launch-brand">xlam<span>BOT</span></span><span class="launch-live"><i></i> РЕАЛЬНАЯ ЗАПИСЬ ИГРЫ</span></div>
      <div class="launch-story" aria-hidden="true"><div class="launch-kicker">BRAWL STARS <span>×</span> ANDROID</div>
        <div class="launch-phrases"><strong>ВИДИТ ПОЛЕ.</strong><strong>РЕШАЕТ.</strong><strong>ИГРАЕТ САМ.</strong></div>
        <div class="launch-under">ТВОЯ ИГРА. ЕГО РЕШЕНИЯ.</div>
      </div>
      <div class="launch-bottom"><span>XLAMBOT / ANDROID</span><div class="launch-progress"><i></i></div><span>РЕАЛЬНЫЙ ГЕЙМПЛЕЙ</span></div>
      <button class="launch-skip" type="button" aria-label="Пропустить вступление">Пропустить <span aria-hidden="true">↗</span></button>`;
    currentIntro = intro;
    document.body.append(intro);
    const video = intro.querySelector('video');
    video.play().catch(() => {});
    let removalTimer;
    const close = () => {
      if (intro.classList.contains('is-closing')) return;
      intro.classList.add('is-closing');
      video.pause();
      clearTimeout(removalTimer);
      setTimeout(() => { intro.remove(); if (currentIntro === intro) currentIntro = null; }, 600);
    };
    intro.querySelector('.launch-skip').addEventListener('click', close);
    removalTimer = setTimeout(close, 5700);
  }

  if (replay && !reducedMotion.matches) {
    replay.hidden = false;
    replay.addEventListener('click', showIntro);
  }
  if (reducedMotion.matches) return;
  try {
    if (sessionStorage.getItem('xlam-intro-v2-seen')) return;
    sessionStorage.setItem('xlam-intro-v2-seen', '1');
  } catch (_) { /* Intro still has a timer if storage is unavailable. */ }
  showIntro();
})();
