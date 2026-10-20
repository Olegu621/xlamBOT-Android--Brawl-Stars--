<div align="center">

# xlamBOT · Android

**Бот для Brawl Stars: выбирай стиль, составляй очередь и следи за результатом.**

[![Android 8+](https://img.shields.io/badge/Android-8%2B-3ddc84?logo=android&logoColor=white)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/)
[![Download APK](https://img.shields.io/badge/APK-1.1.2-8b5cf6)](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/releases/download/v1.1.2/xlamBOT.apk)
[![Telegram](https://img.shields.io/badge/Telegram-%40xlamModz-26a5e4?logo=telegram&logoColor=white)](https://t.me/xlamModz)

[**Скачать и настроить →**](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/) · [Что нового](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/releases/tag/v1.1.2) · [Сообщить об ошибке](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/issues/new/choose)

</div>

## Начать играть

1. Скачай APK с сайта и установи поверх старой версии. История и настройки сохранятся.
2. Включи службу xlamBOT в специальных возможностях. После обновления выключи и включи её снова.
3. Подключи изображение игры, открой обычный Brawl Stars, выбери нужного бойца и запусти бота.

Для первого запуска рекомендуем English в игре, стандартное управление и Trio Showdown — на этом режиме проверен полный цикл матчей.

Android 11+: снимки через специальные возможности. Android 8–10: системный запрос захвата экрана. Root и постоянно подключённый компьютер не нужны.

Захват только игры: в версии **1.1.1+** выбери **Настройки → Получение изображения → Трансляция экрана**, заново подключи изображение и выбери **«Одно приложение» → Brawl Stars**. Нужна поддерживаемая прошивка Android 14+. [Подробнее](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/#app-capture).

Если Android пишет «Доступ для приложения запрещён», смотри [инструкцию по ограниченным настройкам](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/#restricted-settings).

## Free и Plus

| Возможность | Free | Plus |
| --- | :---: | :---: |
| Три стиля, движение, атаки, базовое уклонение | ✓ | ✓ |
| Очередь по целям и количеству матчей, статистика | ✓ | ✓ |
| Усиленное уклонение и аимбот с упреждением | — | ✓ |
| Прямой GPU / адаптивный NNAPI и режим 540p | — | ✓ |
| Кусты с выходом при опасности, атака ящиков | — | ✓ |
| Смена бойца после чистого прироста +N кубков | — | ✓ |
| Редкие пины в спокойные моменты | — | ✓ |

**Plus: 50 Telegram Stars / 30 дней, продление вручную.** Бесплатная бета — 72 часа один раз на Telegram-аккаунт, без оплаты и автосписаний. Подключи телефон через **xlamBOT → Plus → Telegram**, активируй доступ в [боте](https://t.me/xlambottt_bot?start=plus), затем нажми «Обновить доступ». Нужна версия 1.1.0 или новее.

Ускорение выбирается после сравнения скорости и результатов распознавания. Прямой GPU работает через OpenCL/OpenGL; назначение NNAPI на NPU/GPU зависит от драйвера телефона. При ошибке или отсутствии выигрыша остаётся CPU. Снижение времени анализа не равно такому же росту FPS всей игры.

Для автовыбора создай «Мою очередь» и включи переключатель в Plus: +N считается от подтверждённого счётчика в начале текущего захода, включая потери в поражениях. Состояние сохраняется после перезапуска.

## Помоги с совместимостью

Напиши в [комментариях Telegram](https://t.me/xlamModz) или [создай issue](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/issues/new/choose). Отзывы нужны и от тех, у кого всё работает.

```text
Телефон и процессор:
Android и оболочка:
Версия xlamBOT:
Источник изображения / CPU, GPU или NNAPI:
Боец и режим игры:
Работает нормально / что случилось:
Через сколько времени, как повторить:
Последние строки журнала и короткое видео:
```

Не публикуй токены, пароли и платёжные данные. Список проверенных устройств пополняется по воспроизводимым проверкам; отзыв об одном телефоне не гарантирует работу на всех прошивках.

## About this repository

xlamBOT is an Android Brawl Stars automation app with screen recognition, three play styles, brawler queues and statistics. Download the APK from Releases; setup and support are available on the website and Telegram. This public repository hosts downloads, documentation and GitHub Pages. Android application source code, signing keys, crash symbols and raw model files are private.

Обновление APK — вручную с сайта. Этот репозиторий не содержит автообновлятор.

Самостоятельный проект, не связанный с Supercell. Названия и игровые изображения принадлежат правообладателям. [Сторонние компоненты](THIRD-PARTY-NOTICES.md).
