# Every Career Speaks English — Kanakia Career Fair & Speech Lab

An interactive exhibition and AI voice laboratory designed for the Annual Career Exhibition (Class X-D, Kanakia International School, Mira Road).

## Core Capabilities

1. **AI Speech & Pronunciation Lab**: Real-time evaluation of cadence, fluency, words per minute (WPM), filler word elimination, and executive diction.
2. **Dynamic Vocabulary Elevation**: Automatically scans spoken transcripts for colloquial phrases (e.g. *think*, *make sure*, *good*, *help*, *try*) and provides elevated executive terminology (*hypothesize*, *substantiate*, *exemplary*, *facilitate*, *endeavor*).
3. **Continuous Executive Coaching**: Guarantees actionable coaching points across downward pitch modulation, intentional micro-pauses, and assertive signposting regardless of overall score.
4. **Authentic ElevenLabs Static Audio**: High-fidelity Indian English benchmark recordings for 6 professional personas and 5 executive words of the day with resilient Web Speech Synthesis fallback.
5. **Admin Portal (`careers2026`)**: Direct configuration for school titles, section visibility toggles, theme switching, and Google Gemini API key persistence (`portalConfig.geminiKey`).
6. **Live Exhibition QR Code**: Self-contained client-side QR generator (`qrcode-generator`) producing scan-ready stall posters and high-resolution downloads.
7. **Multi-Tier AI Resilience**: Seamless failover spanning Cloudflare Workers AI, Google Gemini 2.5, OpenAI-compatible endpoints, local tunnels, and zero-dependency on-device natural language heuristics.

## Tech Stack

- **Frontend**: Pure semantic HTML5, vanilla JavaScript, CSS custom properties, Syne / Outfit / Plus Jakarta Sans / JetBrains Mono typography.
- **Visuals**: HTML5 Canvas particle network, Web Audio API frequency visualizer, Chart.js radar analytics.
- **Backend**: Cloudflare Pages / Cloudflare Workers (`worker.js` and `functions/api/[[route]].js`).
- **Audio Assets**: Pre-rendered high-bitrate MP3 voice benchmarks generated with ElevenLabs Indian English model.
