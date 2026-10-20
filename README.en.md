# xlamBOT — Brawl Stars Bot for Android

**Free Android APK with screen recognition, movement, attacks, three play styles and brawler queues.**

[Download and website](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/en/) · [Latest APK](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/releases/latest/download/xlamBOT.apk) · [Release notes](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/releases/latest) · [Русский](README.md)

[Watch actual gameplay](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/watch/) · [Version history (RU)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/updates/)

**[Full user manual (Russian)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/guide/)** — ten chapters covering setup, controls, capture, brawler queues, performance, Plus, troubleshooting and local data. Includes local search, shareable section links and browser print/PDF support.

[![xlamBOT running in Brawl Stars](docs/assets/social.jpg)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/en/)

xlamBOT reads the game screen and controls touches directly on Android. No root or permanently connected PC is required. Supports Android 8+, ARM64, ARMv7 and x86_64.

## Quick start

1. Download the APK from Releases. Install over the existing version when updating to preserve local settings and history.
2. Enable the xlamBOT Accessibility service and floating overlay.
3. Connect the game image source. Android 11+ supports Accessibility screenshots; Android 8–10 uses system screen sharing.
4. For your first test, use **English in Brawl Stars, Trio Showdown and default control positions**. Choose the correct brawler and style in xlamBOT.
5. Open regular Brawl Stars and start from the floating panel. Keep the game visible.

After updating, turn the Accessibility service off and on again. On supported Android 14+ systems, the screen-sharing picker can capture just Brawl Stars. This does not enable background or locked-screen play.

## Free and Plus

| Feature | Free | Plus |
| --- | :---: | :---: |
| Movement, attacks, abilities and three play styles | Yes | Yes |
| Basic dodging, brawler queues and match statistics | Yes | Yes |
| Improved dodging and optional predictive aiming | — | Yes |
| Direct GPU / adaptive NNAPI and 540p battle capture | — | Yes |
| Bush tactics, power-cube boxes and collection | — | Yes |
| Switch brawlers after a net +N trophy gain | — | Yes |
| Occasional pins during quiet moments | — | Yes |

**Plus costs 50 Telegram Stars for 30 days, renewed manually.** One free **72-hour trial per Telegram account**, without payment or automatic charges. Open **xlamBOT → Plus → Telegram**, activate access in [@xlambottt_bot](https://t.me/xlambottt_bot?start=plus), then return and refresh access. Requires 1.1.0 or newer.

Hardware acceleration depends on the device and drivers. Speed and recognition results are compared before keeping an accelerator, with CPU fallback when needed. No particular game FPS or trophy gain is promised.

## Support and device reports

[Open a device report](https://github.com/Olegu621/xlamBOT-Android--Brawl-Stars--/issues/new?template=bug-en.yml) with the model, Android version, xlamBOT version, capture source, brawler/mode, steps to reproduce, recent log lines and a short recording. Working-device reports are welcome too. Do not include passwords, tokens or payment data.

For Connection lost / RETRY LOGIN, install 1.1.2 or newer. For other problems, see the [help center (Russian)](https://olegu621.github.io/xlamBOT-Android--Brawl-Stars--/help/).

## Repository contents

This is the public **APK releases, documentation and GitHub Pages** repository. Android app sources, signing keys, model files and crash symbols are private. APK updates are manual. [Third-party notices](THIRD-PARTY-NOTICES.md).

Star the repository to bookmark it; use **Watch → Custom → Releases** for updates. Reproducible reports help improve compatibility.

Independent project. Not affiliated with Supercell. Game names and images belong to their respective owners.
