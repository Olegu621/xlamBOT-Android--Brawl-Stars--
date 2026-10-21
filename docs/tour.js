'use strict';
const tourSlides = {
  battle: {
    image:'assets/screens/battle.webp', alt:'Боец на карте Brawl Stars и плавающая панель xlamBOT с кнопкой Стоп',
    tag:'01 / В БОЮ', title:'Игра на экране. Бот за управлением.',
    description:'xlamBOT получает изображение игры и выбирает движение, дистанцию и атаки. Тебе не нужно держать джойстик.',
    caption:'Настоящий кадр боя. Плавающая панель остаётся поверх игры.',
    notes:[['Боец и обстановка','Положение, противники, препятствия и газ влияют на следующее действие.',50,50],['Остановить — в одно касание','Кнопка «Стоп» и текущий статус доступны поверх игры.',78,17]],
    guide:'guide-gameplay/', link:'Как устроено управление ↗'
  },
  panel: {
    image:'assets/screens/panel.webp', alt:'Главная панель xlamBOT с выбранным бойцом, навигацией и кнопкой подключения изображения',
    tag:'02 / ТВОЯ ПАНЕЛЬ', title:'Всё важное — на одном экране.',
    description:'Главная показывает состояние сессии и выбранного бойца. Если не хватает разрешения или изображения, основная кнопка подскажет следующий шаг.',
    caption:'Главная панель: боец, подготовка и переходы к очереди, статистике, настройкам и журналу.',
    notes:[['Выбранный боец','Укажи того, кем играешь сейчас. Нажатие открывает выбор и поиск.',62,66],['Разделы приложения','Очередь, статистика и настройки доступны из бокового или нижнего меню.',13,44]],
    guide:'guide-panel/', link:'Разобраться с панелью ↗'
  },
  brawler: {
    image:'assets/screens/brawler.webp', alt:'Поиск Larry в окне выбора бойца xlamBOT',
    tag:'03 / ВЫБОР БОЙЦА', title:'Найти своего. За пару касаний.',
    description:'Открой карточку бойца и начни вводить его имя. Выбранный персонаж помогает боту учитывать дистанцию атаки и особенности боя.',
    caption:'Пример поиска Larrylawrie в окне выбора персонажа. Снимок интерфейса предыдущей версии.',
    notes:[['Поиск по имени','Фильтруй список, чтобы не прокручивать всех бойцов.',50,44],['Подтверждение выбора','Нажми нужную карточку. Выбор должен соответствовать бойцу в игре.',51,59]],
    guide:'guide-queue/', link:'Бойцы и очередь: полное руководство ↗'
  },
  plus: {
    image:'assets/screens/plus.webp', alt:'Экран Plus с кнопками Подключить Telegram и Обновить доступ',
    tag:'04 / ПОДКЛЮЧЕНИЕ PLUS', title:'Plus привязан к тебе.',
    description:'Подключи свой Telegram-аккаунт, подтверди устройство и обнови доступ в приложении. Бот и мини-апп покажут статус подписки.',
    caption:'Экран подключения Plus в 1.1.5. На снимке доступ ещё не активирован.',
    notes:[['Подключить Telegram','Откроется @xlambottt_bot для подтверждения аккаунта и телефона.',50,46],['Обновить доступ','После подключения вернись сюда и получи подтверждённый статус.',50,60]],
    guide:'guide-plus/', link:'Активация и условия Plus ↗'
  }
};
const tourTabs = [...document.querySelectorAll('[data-tour]')];
function selectTour(tab) {
  const slide=tourSlides[tab.dataset.tour];
  if(!slide)return;
  tourTabs.forEach(item=>{const active=item===tab;item.setAttribute('aria-selected',String(active));item.tabIndex=active?0:-1;});
  const panel=document.getElementById('tour-panel');panel.setAttribute('aria-labelledby',tab.id);
  const photo=document.getElementById('tour-image');photo.src=slide.image;photo.alt=slide.alt;
  const full=document.getElementById('tour-full');full.href=slide.image;full.dataset.image=slide.image;full.dataset.caption=slide.caption;
  for(const field of ['tag','title','description','caption'])document.getElementById('tour-'+field).textContent=slide[field];
  document.getElementById('tour-count').textContent=String(tourTabs.indexOf(tab)+1).padStart(2,'0')+' / 04';
  slide.notes.forEach(([title,note,x,y],index)=>{
    document.getElementById('tour-note-title-'+(index+1)).textContent=title;
    document.getElementById('tour-note-'+(index+1)).textContent=note;
    const point=document.getElementById('tour-point-'+(index+1));point.style.left=x+'%';point.style.top=y+'%';
  });
  const guide=document.getElementById('tour-guide');guide.href=slide.guide;guide.textContent=slide.link;
}
tourTabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectTour(tab));
  tab.addEventListener('keydown',event=>{
    const movement={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1};let next;
    if(event.key==='Home')next=tourTabs[0];
    else if(event.key==='End')next=tourTabs.at(-1);
    else if(Object.hasOwn(movement,event.key))next=tourTabs[(index+movement[event.key]+tourTabs.length)%tourTabs.length];
    if(next){event.preventDefault();selectTour(next);next.focus();}
  });
});

const imageDialog=document.getElementById('image-dialog');
let imageTrigger,previousOverflow='';
document.addEventListener('click',event=>{
  const trigger=event.target.closest('[data-image]');
  if(!trigger||!imageDialog||typeof imageDialog.showModal!=='function')return;
  event.preventDefault();
  imageTrigger=trigger;
  const photo=document.getElementById('image-full'),source=trigger.querySelector('img');
  photo.src=trigger.dataset.image;photo.alt=source?.alt||trigger.dataset.caption||'Скриншот xlamBOT';
  photo.width=Number(source?.getAttribute('width'))||1280;photo.height=Number(source?.getAttribute('height'))||720;
  document.getElementById('image-title').textContent=trigger.dataset.caption||'Скриншот xlamBOT';
  document.getElementById('image-caption').textContent='Реальный снимок. Для увеличения деталей открой оригинал и используй масштаб браузера.';
  document.getElementById('image-original').href=trigger.dataset.image;
  previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
  imageDialog.showModal();
});
imageDialog?.querySelector('.image-close').addEventListener('click',()=>imageDialog.close());
imageDialog?.addEventListener('click',event=>{
  const box=imageDialog.getBoundingClientRect();
  if(event.target===imageDialog&&(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom))imageDialog.close();
});
imageDialog?.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;imageTrigger?.focus({preventScroll:true});});
