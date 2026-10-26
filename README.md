# Every Career Speaks English — Kanakia Career Fair & Speech Lab

An interactive exhibition and AI voice laboratory designed for Career Fair 2026 (Class X-D, Kanakia International School, Mira Road).

## Multi-Version Experience Suite

1. **v1 — Classic Pavilion (`index.html`)**: The flagship exhibition portal featuring the comprehensive 80+ role career directory, live AI Speech & Pronunciation Lab, Mock Interview Simulator, News Anchor Studio, Student Leaderboard, and Admin Console (`careers2026`).
2. **v2 — Verbum Premier (`v2.html`)**: Institutional executive dark theme with Syne / Outfit typography, C-Suite benchmarking, 5-tier AI failover telemetry, and speech spectrograms.
3. **v3 — Open Mic Lab (`v3.html` / `open-mic.html`)**: Warm editorial aesthetic with lilac, cream and bright amber accents, interactive cards, and speech workout studio.
4. **v4 — Alexandria Exec (`v4.html`)**: Mobile-first luxury editorial format with sliding drawer, Solar Gold / Cosmic Dark themes, and curated orator benchmarks.
5. **v5 — Sovereign Mobility (`v5.html`)**: International transit and global mobility theme with world flight vectors, diplomatic career maps, and executive diction training.
6. **v6 — Theatrical Suite (`v6.html` / `v6/index.html`)**: Five-act classical theatrical play with Three.js particle dynamics, Lenis smooth scrolling, curtain-parting prologue, 3D kinetic book pages for language history, revolving 3D ring for careers, horizontal film-strip reel for top Indian English universities, and 11 interactive games.

## Core Capabilities

1. **AI Speech & Pronunciation Lab**: Real-time evaluation of cadence, fluency, words per minute (WPM), filler word elimination, and executive diction.
2. **Dynamic Vocabulary Elevation**: Automatically scans spoken transcripts for colloquial phrases (e.g. *think*, *make sure*, *good*, *help*, *try*) and provides elevated executive terminology (*hypothesize*, *substantiate*, *exemplary*, *facilitate*, *endeavor*).
3. **Continuous Executive Coaching**: Guarantees actionable coaching points across downward pitch modulation, intentional micro-pauses, and assertive signposting regardless of overall score.
4. **Authentic ElevenLabs Static Audio**: High-fidelity Indian English benchmark recordings for 6 professional personas and 5 executive words of the day with resilient Web Speech Synthesis fallback.
5. **Admin Portal (`careers2026`)**: Direct configuration for school titles, section visibility toggles, theme switching, and Google Gemini API key persistence (`portalConfig.geminiKey`).
6. **Live Exhibition QR Code**: Self-contained client-side QR generator (`qrcode-generator`) producing scan-ready stall posters and high-resolution downloads.
7. **Multi-Tier AI Resilience**: Seamless failover spanning Cloudflare Workers AI, Google Gemini 2.5, OpenAI-compatible endpoints, local tunnels, and zero-dependency on-device natural language heuristics.

## Tech Stack

- **Frontend**: Pure semantic HTML5, vanilla JavaScript, CSS custom properties, Three.js, Lenis, Syne / Outfit / Plus Jakarta Sans / JetBrains Mono / Cinzel / EB Garamond typography.
- **Visuals**: HTML5 Canvas particle network, Web Audio API frequency visualizer, Chart.js radar analytics, WebGL floating parchment particles.
- **Backend**: Cloudflare Pages / Cloudflare Workers (`worker.js` and `functions/api/[[route]].js`).
- **Audio Assets**: Pre-rendered high-bitrate MP3 voice benchmarks generated with ElevenLabs Indian English model.
