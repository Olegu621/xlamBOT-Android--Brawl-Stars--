# Как помочь xlamBOT / Contributing

Этот репозиторий содержит APK, сайт и документацию. Исходники Android-приложения закрыты.

- **Ошибка или совместимость:** [заполни форму](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/issues/new/choose). Нужны модель, Android, версия APK, шаги, последние строки журнала и короткая запись. Отзывы «работает нормально» тоже полезны.
- **Идея:** опиши задачу пользователя и желаемое поведение в форме Feature request.
- **Сайт и перевод:** небольшие исправления текста, ссылок и доступности можно предложить через pull request. Не добавляй выдуманные отзывы, результаты матчей, гарантии совместимости или рейтинги.
- **Новая версия:** скачивай только APK из Releases или с сайта; установка поверх текущей версии сохраняет локальные данные. Не прикладывай чужие APK к отчётам.

Не публикуй в Issues токены, ключи, пароли и платёжные данные. Из журнала достаточно строк рядом с проблемой.

## Website documentation

Static pages are served from `docs/` by GitHub Pages. Edit the home page in `docs/index.html`; guide, video and update-page content is maintained in `tools/build_guides.py`. Run `python tools/build_guides.py` to regenerate the six guides, shared `site.css`, home-page structured data and video sitemap. The generator uses only Python's standard library. Edit `style.css`, `guide.css` or `assets/fonts/fonts.css` as sources; `site.css` is generated.

The site serves its fonts locally, with original OFL licenses. Preserve the owner's Google verification tag. Keep `lastmod` and visible update dates tied to actual changes; do not bump them on every build. The video upload date is the first asset commit and its duration comes from the actual file. No ratings or reviews are fabricated for structured data.

Keep canonical URLs and release links consistent. Preserve the Free/Plus distinction and manual renewal terms. The Android application, signing material, native symbols and models do not belong in this public repository.

Use the English device-report form if you prefer English. Reproducible reports and tested translations are welcome.
