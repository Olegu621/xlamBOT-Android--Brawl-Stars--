# Как помочь xlamBOT / Contributing

Этот репозиторий содержит APK, сайт и документацию. Исходники Android-приложения закрыты.

- **Ошибка или совместимость:** [заполни форму](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/issues/new/choose). Нужны модель, Android, версия APK, шаги, последние строки журнала и короткая запись. Отзывы «работает нормально» тоже полезны.
- **Идея:** опиши задачу пользователя и желаемое поведение в форме Feature request.
- **Сайт и перевод:** небольшие исправления текста, ссылок и доступности можно предложить через pull request. Не добавляй выдуманные отзывы, результаты матчей, гарантии совместимости или рейтинги.
- **Новая версия:** скачивай только APK из Releases или с сайта; установка поверх текущей версии сохраняет локальные данные. Не прикладывай чужие APK к отчётам.

Не публикуй в Issues токены, ключи, пароли и платёжные данные. Из журнала достаточно строк рядом с проблемой.

## Website documentation

Static pages are served from `docs/` by GitHub Pages. Edit the home page in `docs/index.html`; help-page content is maintained in `tools/build_guides.py`. Run `python tools/build_guides.py` to regenerate the four guides and sitemap. The generator uses only Python's standard library.

Keep canonical URLs and release links consistent. Preserve the Free/Plus distinction and manual renewal terms. The Android application, signing material, native symbols and models do not belong in this public repository.

Use the English device-report form if you prefer English. Reproducible reports and tested translations are welcome.
