# Open Mic v8 — English for the work you want

Open Mic is a scroll-first English-practice and career-exploration site for a school career fair. This version builds on the v7 project and adds a feedback/support centre, more games, category and overall leaderboards, a newsroom media pipeline, and a guided career-planning chat.

## What's in v8

- **Stream-first Career Atlas:** Visitors choose Science, Commerce, Humanities, Arts & Media, Technology & Computing, or “I'm still exploring” before seeing a short list. They can search, filter and expand it. Career detail panels include suggested study routes, portfolios, admission/entrance information, realistic income models and current salary searches. Official starting points include FTII, SRFTI, IIMC, NID, National School of Drama, CLAT, NEET, UPSC, CTET, UGC-NET and the National Career Service. Check each authority's current eligibility, dates and fees before making decisions.
- **Career Quiz and My Plan:** A short quiz suggests career directions. The roadmap builder makes a practice plan from the student's chosen career and available time.
- **Career Guide Chat:** Collects the learner's school stage, preferred stream, location, budget and priorities. It can ask follow-up questions and, when a server AI provider is configured, use the conversation and profile to suggest course/college routes. Treat generated guidance as a starting point, not an admission guarantee.
- **Speech Lab:** Records or uploads audio, sends it to the configured transcription service, then analyses the transcript for useful English feedback. The practice score is read-only in the UI and derived from analysis; local fallback metrics do not claim to assess accent or pronunciation.
- **Interview Studio and Conversation Gym:** Career-specific interview practice, follow-up questions and situation roleplay.
- **Newsroom:** Teleprompter, recording and rendered headline/subheadline overlay. Before analysis, a recording must be explicitly consented and stored to the private R2 bucket. The server then tries transcription and a limited visual review of sampled frames for observable delivery elements such as framing, posture, gaze and gestures. It must not infer sensitive traits or offer medical diagnoses.
- **The Editor's Desk:** Email and sentence-editing practice, with a dedicated category leaderboard.
- **Games Arcade:** Wordle-style word guessing, word-to-meaning matching and correct-sentence selection with starter, growing and advanced vocabulary levels. A separate games leaderboard is included.
- **Leaderboards:** Participation is optional and requires clear opt-in. Students should use nicknames, not full names. Category scores cover Speech Lab, Editor's Desk, Newsroom, games, debate and interview practice. The server computes the final weighted score from submitted category scores; it does not make scores cheat-proof against a determined browser user.
- **Feedback and Support:** Replaces the former QR area. Students can submit feedback, report a problem, request support, suggest a feature or flag an accessibility issue. With D1 configured, feedback is saved on the server. Admin can export it as an `.xlsx` workbook; if the workbook library is blocked, an Excel-compatible CSV is downloaded instead.
- **Admin console:** Hidden `/#admin` route plus a five-click brand shortcut. Admin can toggle sections, choose a theme and language, configure the AI provider order, switch automatic fallback on/off, select a manual provider, manage server-side credentials, inspect metadata-only request logs, moderate leaderboard rows, review feedback and manage saved newsroom submissions.
- **Privacy and consent:** The privacy explanation is the final page section. Recordings are not uploaded until the user checks the consent box and starts analysis. Newsroom upload/analysis requires D1 and the private R2 bucket. Feedback is server-stored only after consent. Request logs do not store audio, transcripts, prompt text or API keys.

## Local preview

For a static layout preview, serve the project directory with any local web server. To use Pages Functions and test the server APIs locally, use Wrangler:

```sh
npm install
cp .dev.vars.example .dev.vars
npm run dev
```

Set real local values in `.dev.vars` before testing the admin session or encrypted settings. `.dev.vars` is ignored by Git. Never paste real keys into source files, public client code, screenshots or `.dev.vars.example`.

The browser-only demo may show a local mock login (`admin` / `careers2026`); it is for preview only. On deployment, configure `ADMIN_USER`, `ADMIN_PASSWORD` and `ADMIN_SESSION_SECRET`. Production does not rely on the demo credentials.

## Cloudflare Pages deployment

1. Copy the files into the root of `bhavyakumar-dev/careerfair`, review the diff and push through your Git client. Merge carefully if the repository contains work you need. This package has not been pushed automatically.
2. Create a Cloudflare Pages project connected to the repo. No frontend build step is required; `wrangler.toml` uses `.` as the Pages output directory.
3. Create a D1 database named `open-mic-career-lab` and replace `REPLACE_WITH_D1_DATABASE_ID` in `wrangler.toml` with its real ID.
4. Apply both included database migrations to the target database:

   ```sh
   npx wrangler d1 migrations apply open-mic-career-lab --remote
   ```

5. Configure Cloudflare Pages bindings: D1 as `DB`, Workers AI as `AI`, and private R2 storage as `MEDIA` using the bucket `open-mic-private-media`. Create the R2 bucket before deploying newsroom recording features.
6. Configure these as server-side environment variables/secrets in the Pages project:

   - `ADMIN_USER`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`.
   - `CONFIG_ENCRYPTION_KEY`: base64 encoding of exactly 32 random bytes, used to encrypt provider keys that the admin saves to D1.
   - `GEMINI_API_KEYS`: optional comma- or newline-separated Gemini keys.
   - `GEMINI_MODEL` for text AI and `GEMINI_STT_MODEL=gemini-3.5-transcribe` for Google transcription.
   - `ELEVENLABS_API_KEY` for optional Scribe v2 transcription. This may use paid credits; check your ElevenLabs plan.
   - `CF_MODEL` and `WHISPER_MODEL` for Workers AI/Whisper where available.
   - `FREE_LLM_URL`, `FREE_LLM_KEY`, `FREE_LLM_MODEL` for an OpenAI-compatible service, if used.
   - `LAPTOP_URL`, `LAPTOP_TOKEN`, `LAPTOP_MODEL` if using your authenticated Ollama relay.
   - `GEMINI_VISION_MODEL` for video-frame review.

   Create strong secrets, for example:

   ```sh
   openssl rand -hex 32
   openssl rand -base64 32
   ```

   Use the hex value for the session secret and the base64 value for the encryption key. Do not commit either value.
7. Deploy. Open `https://YOUR-PAGES-DOMAIN/#admin`, log in with the production credentials and configure the features/provider routes. The key form does not show saved keys again.
8. Submit test feedback, export it, submit a consented test newsroom recording, and test every AI route on the deployed domain before inviting students.

Cloudflare supports D1 and R2 bindings in Pages Functions. See the [Cloudflare Pages Functions bindings guide](https://developers.cloudflare.com/pages/functions/bindings/).

## AI routing and transcription

The general AI router uses the saved provider order. Automatic fallback can be toggled off, in which case only the manually selected provider is tried before browser-side scoring for supported tasks. The transcription router can use ElevenLabs Scribe v2, Cloudflare Whisper and Gemini 3.5 Transcribe, depending on the configured mode and available keys. Audio/video provider availability, model access, file-size limits and pricing depend on the accounts and deployment bindings. These live provider calls have not been verified using your credentials in this package session.

Official API documentation: [Gemini audio transcription](https://ai.google.dev/gemini-api/docs/transcribe) and [ElevenLabs Speech-to-Text](https://elevenlabs.io/docs/api-reference/speech-to-text/convert).

No free tier is unlimited. If a Pages Functions invocation itself is unavailable, its server-side routing cannot call Gemini, ElevenLabs or your laptop; the browser can only use local fallbacks that do not require that endpoint.

## Optional laptop-hosted Ollama

The relay lets Pages Functions forward selected text-AI jobs to a small model on your own computer. It does not form a shared compute pool from school visitors' laptops.

1. Install Ollama and pull a small model:

   ```sh
   ollama pull llama3.2:3b
   ```
2. Set the same long random `LAPTOP_TOKEN` for the relay and Cloudflare secret.

   Windows PowerShell:

   ```powershell
   $env:LAPTOP_TOKEN = "replace-with-a-long-random-token"
   python laptop-host.py
   ```

   macOS/Linux:

   ```sh
   export LAPTOP_TOKEN="replace-with-a-long-random-token"
   python3 laptop-host.py
   ```
3. In another terminal expose the relay using Cloudflare Tunnel:

   ```sh
   cloudflared tunnel --url http://127.0.0.1:8765
   ```
4. Configure the resulting HTTPS tunnel URL as `LAPTOP_URL`, the matching token as `LAPTOP_TOKEN`, and `LAPTOP_MODEL=llama3.2:3b` in Pages secrets.

Keep the machine awake and the tunnel running. Stop the tunnel and rotate the token when it is no longer needed.

## Score formula

The overall practice score uses these category weights:

| Category | Weight |
| --- | ---: |
| Speech Lab | 30% |
| Editor's Desk | 15% |
| Newsroom | 20% |
| Word games | 15% |
| Debate | 10% |
| Interview practice | 10% |

Only categories with a recorded score are included. Their weights are re-normalised to sum to 100% for that participant, so students are not penalised just for not having tried every activity. This combines a server-calculated overall score with client-reported category scores; it is a practical classroom leaderboard, not a secure competitive scoring system.

## Privacy and classroom use

- Obtain school/parent approval before using the site with students and school branding.
- Leaderboard entries are optional, require consent and should use nicknames. Only submit a score after reviewing the permission notice.
- The newsroom upload requires consent and successful storage in a private R2 bucket before analysis starts. Saved clips can be reviewed or deleted from the admin panel.
- Feedback is kept in D1 after the visitor agrees to submit it. Admin exports can contain the message and an optional contact address; protect exported workbooks accordingly.
- AI audio, video and text are sent to whichever configured provider is selected. Check the provider's current privacy, retention and pricing terms before use with students.
- Recommendations are educational starting points, not guaranteed admissions, salaries, job outcomes or professional advice.

## Important files

- `index.html`, `styles.css`, `app.js`: website UI and interactions.
- `functions/api/ai.js`: AI router.
- `functions/api/speech.js`: audio/video transcription router.
- `functions/api/media.js`: consent-based private newsroom storage and status updates.
- `functions/api/feedback.js`: server-stored feedback submissions.
- `functions/api/leaderboard.js`: category and overall scores.
- `functions/api/admin/[[path]].js`: admin APIs.
- `functions/_shared.js`: shared configuration, sessions, encryption and request logging.
- `migrations/0001_init.sql`, `migrations/0002_v8.sql`: database schema.
- `laptop-host.py`: optional local Ollama relay.
- `STITCH_BRIEF.md`: short design brief.

## Validate before launch

```sh
npm test
```

The checks cover JavaScript syntax, required sections, career resource mappings, interaction handlers, scoring consistency, database/storage structure and accidental secret/comment patterns. Static checks are not proof that real Cloudflare bindings, external image URLs or real AI credentials work. Test those in your actual deployment before publishing the QR/link or inviting students.
