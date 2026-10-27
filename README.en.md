# xlamBOT — Brawl Stars Bot for Android

**Free Android APK with screen recognition, movement, attacks, three play styles and brawler queues.**

[Download APK](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/releases/latest/download/xlamBOT.apk) · [Website](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/en/) · [Latest release](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/releases/latest) · [Русский](README.md)

[![Actual xlamBOT gameplay — click to watch](docs/assets/gameplay.webp)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/watch/)

**[▶ Watch 17 seconds of actual gameplay](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/watch/)** — a recorded example, not a guaranteed result. No root or permanently connected PC is required. Keep Brawl Stars visible.

## Current release: 1.2.6

Screen recognition starts on CPU. Optional GPU/NNAPI preparation runs separately after gameplay begins; preparation exceeding ten seconds keeps CPU active. Stop no longer waits for driver preparation, and repeated starts do not queue more preparations. The recognition and movement fixes from 1.2.5 are included.

Validation: 290 automated tests, build checks, five APK protection checks and the original signing certificate. Full in-game validation of 1.2.6 is not yet complete.

[Release notes](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/updates/#v126) · [Real gameplay, screenshots and creator materials](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/media/).

[▶ Version 1.2.5 playing a real match — a vertical clip without music](docs/assets/promo-125.mp4).

The Free APK includes basic gameplay, three styles, queues and these fixes. Optional Plus is sold separately in Telegram. Native emulator checks do not establish compatibility with every phone.

## Quick start

1. Install the APK from Releases. Update over the existing version to preserve settings, queues and history.
2. Enable xlamBOT Accessibility and the floating overlay.
3. Connect the image source. Android 11+ supports Accessibility screenshots; Android 8–10 uses system screen sharing. Supported Android 14+ systems can capture one app.
4. First test: **English in Brawl Stars, Trio Showdown and default controls**. Select the same brawler in xlamBOT and use the balanced style.
5. Open regular Brawl Stars, start the bot and check movement, attacks and the next match.

After updating, switch the Accessibility service off/on and reconnect the image source if needed. APK supports Android 8+, ARM64, ARMv7 and x86_64; actual compatibility depends on the device. [Setup guide (RU)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/install/).

## Free and Plus

| Feature | Free | Plus |
| --- | :---: | :---: |
| Movement, attacks, abilities and three play styles | Yes | Yes |
| Normal Autododge, gas avoidance, queues and statistics | Yes | Yes |
| Switch after matches or a net +N trophy gain | Yes | Yes |
| Enhanced Autododge and optional predictive AutoAim | — | Yes |
| Bush tactics, attacking boxes and collecting power cubes | — | Yes |
| Faster reaction, optional GPU / NNAPI on supported devices | — | Yes |
| Occasional pins in quiet moments | — | Yes |

**Plus: 50 Telegram Stars for 30 days**, renewed manually with no automatic charges. No trial. Each five new qualified referrals earn the inviter ten additional Plus days. Link your phone and manage Plus in [@xlambottt_bot](https://t.me/xlambottt_bot?start=plus). [Terms and instructions (RU)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/guide-plus/).

Hardware acceleration is device/driver-dependent, with CPU fallback. Background and locked-screen play are not supported. Android gameplay does not require Telegram channel membership.

## Documentation and support

- [Full manual with search (RU)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/guide/)
- [Device compatibility and test evidence (RU)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/compatibility/)
- [Capture and Android permissions (RU)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/guide-capture/)
- [unknown, disconnects and brawler selection (RU)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/guide-errors/)
- [Open an English device report](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/issues/new?template=bug-en.yml)

Include phone model, Android/firmware, xlamBOT version, capture source, brawler/mode, reproduction steps and recent logs. Working-device reports are welcome. Do not include passwords, tokens or payment details.

## About this repository

Public **APK releases, documentation and GitHub Pages** for xlamBOT by Olegu621. Android application sources, signing keys, models and crash symbols are private. Updates are manual.

Star to bookmark; **Watch → Custom → Releases** for APK updates. Independent project, not affiliated with Supercell. Game names and artwork belong to their respective owners. [Third-party notices](THIRD-PARTY-NOTICES.md).
