# Career Fair Project: All User Prompts & Grill-Me Answers

> Consolidated archive of all user prompts and interactive `/grill-me` Q&A sessions across the Career Fair project lifecycle.

## Table of Contents

- [1. Grill-Me Interactive Q&A Sessions](#1-grill-me-interactive-qa-sessions)
  - [Session 1: Project Architecture & Requirements Discovery (11 Questions)](#session-1-project-architecture--requirements-discovery)
  - [Session 2: Feature Staging, OBS & Version Architecture (4 Questions)](#session-2-feature-staging-obs--version-architecture)
- [2. Chronological Log of All User Prompts](#2-chronological-log-of-all-user-prompts)
  - [Conversation A: Initial Discovery & Foundation (7 Prompts)](#conversation-a-initial-discovery--foundation)
  - [Conversation B: Continuing Previous Task (21 Prompts)](#conversation-b-continuing-previous-task)
  - [Conversation C: Upload Project To GitHub (1 Prompt)](#conversation-c-upload-project-to-github)
  - [Conversation D: Add GitHub Repository As V6 & Staging (38 Prompts)](#conversation-d-add-github-repository-as-v6--staging)

---

## 1. Grill-Me Interactive Q&A Sessions

### Session 1: Project Architecture & Requirements Discovery

- **Source Conversation:** [749edff6-cdcc-46a0-a4e4-51fb1e17f5a4](conversation://749edff6-cdcc-46a0-a4e4-51fb1e17f5a4)
- **Date:** October 25, 2026

#### Q1: What's the exact date of your career fair? This affects how much time we have and which features to prioritize.
**Options Presented:** `It's this week (within 3 days)`, `It's next week`, `It's in 2+ weeks`, `I'm not sure yet`
**💬 User's Choice / Answer:**
> **"All featujres i want in least time"**

#### Q2: How many students/parents do you expect to visit your stall and scan the QR code?
**Options Presented:** `Under 50 people`, `50-150 people`, `150-500 people`, `500+ people`
**💬 User's Choice / Answer:**
> **"50-500"**

#### Q3: Do you already have a Gemini API key (from Google AI Studio at aistudio.google.com)?
**Options Presented:** `Yes, I have one ready`, `No, but I can get one now`, `I don't know what that is`
**💬 User's Choice / Answer:**
> **"I have multiple add a router in admin panel also"**

#### Q4: For hosting, you mentioned Cloudflare Pages. Do you already have a Cloudflare account, and have you deployed anything before?
**Options Presented:** `Yes, I have a Cloudflare account and know how to deploy`, `I have an account but never deployed a website`, `I don't have a Cloudflare account yet`, `I'd prefer step-by-step deployment instructions`
**💬 User's Choice / Answer:**
> **"I don't have a Cloudflare account yet"**

#### Q5: Which visual direction feels right for the career fair website? Remember, parents and Class X students will use this.
**Options Presented:** `Dark, cinematic, space-like (like igloo.inc - black background, glowing accents)`, `Vibrant, colorful, energetic (bright colors, playful, festival-like)`, `Professional, clean, corporate-like (white background, neat cards)`, `Mix of dark hero + colorful career sections`
**💬 User's Choice / Answer:**
> **"Make all 4 options 1, 2, 3, 4 (Dark cinematic, Vibrant colorful, Professional clean, Mix of dark hero + colorful) togglable from admin panel"**

#### Q6: Which features are MUST-HAVES for launch day? I'll build these first and add others later.
**Options Presented:** `Speech Lab`, `AI Mock Interview`, `News Anchor Mode`, `Career Quiz`, `Career Directory`, `Leaderboard`
**💬 User's Choice / Answer:**
> **"Speech Lab (record & analyze pronunciation, fluency, fillers), AI Mock Interview (career-specific interview practice), News Anchor Mode (teleprompter + video recording), AI Conversation Roleplay (doctor, pilot, angry customer scenarios), Career Quiz (5 questions → top 3 career matches), Career Directory (12+ careers with colleges, packages, exams), Leaderboard (school-wide rankings), My Plan (enter class + career → get roadmap), Word of the Day, Fix the Email game, Great Speakers showcase. Make features togglable like if on it shows if off, the ui is smooth and it feels as if it was never there"**

#### Q7: For uploading to your GitHub repo (bhavyakumar-dev/careerfair), can you use Git?
**Options Presented:** `Yes, I know git commands`, `I prefer you push directly`, `I'll upload manually`
**💬 User's Choice / Answer:**
> **"U can push"**

#### Q8: Should the website show your school name, or keep it generic for the SUPW project?
**Options Presented:** `Show school name`, `Keep it generic`, `Configurable in settings`
**💬 User's Choice / Answer:**
> **"Kanakia International School Mira Poad, keep this also toggable and also add that copyright symbol"**

#### Q9: You said you have multiple API keys. How many Gemini API keys do you have, and do you also have keys for other services (Groq, OpenRouter, etc.)?
**Options Presented:** `Yes, I have multiple Gemini API keys ready to paste`, `I have Groq/OpenRouter keys`, `Only one key`
**💬 User's Choice / Answer:**
> **"Yes, I have multiple Gemini API keys ready to paste"**

#### Q10: Should the website be in English only, or should it support Hindi too (for parents who might be more comfortable in Hindi)?
**Options Presented:** `English only`, `English with Hindi toggle in admin`, `Bilingual everywhere`
**💬 User's Choice / Answer:**
> **"English, with Hindi toggle in admin"**

#### Q11: Are you ready for me to create the full implementation plan and start building? Or do you have more requirements?
**Options Presented:** `Just build it, I trust your judgment on the remaining details`, `Let me review the plan first`, `I have more requirements`
**💬 User's Choice / Answer:**
> **"Just build it, I trust your judgment on the remaining details"**

---

### Session 2: Feature Staging, OBS & Version Architecture

- **Source Conversation:** [ab81d7af-9cfd-44c9-be0b-d5e3cd2bed73](conversation://ab81d7af-9cfd-44c9-be0b-d5e3cd2bed73)
- **Date:** October 26, 2026

#### Q1: How would you like the OBS Studio live feed to be connected into the Interview section?
**Options Presented:**
- `(Recommended) Hybrid: Support OBS Virtual Camera (direct webcam feed) plus a configurable local stream/embed URL (HLS / YouTube Live / RTSP / laptop relay).`
- `OBS Virtual Camera only: Just select OBS as the video camera input directly in the browser.`
- `Local HTTP/HLS or YouTube Live embed URL only: Paste the stream URL or embed link in the interface.`
**💬 User's Choice / Answer:**
> **"(Recommended) Hybrid: Support OBS Virtual Camera (direct webcam feed) plus a configurable local stream/embed URL (HLS / YouTube Live / RTSP / laptop relay)."**

#### Q2: How would you prefer the AI chat responses to stream onto the screen?
**Options Presented:**
- `(Recommended) Progressive word-by-word typewriter streaming with an active typing indicator and 40s timeout cushion so students see live typing immediately without timeout errors.`
- `Raw instant render: Return text as soon as ready with just a loading skeleton and longer timeout.`
**💬 User's Choice / Answer:**
> **"(Recommended) Progressive word-by-word typewriter streaming with an active typing indicator and 40s timeout cushion so students see live typing immediately without timeout errors."**

#### Q3: How should the 'Two speakers on one device' debate mode be structured?
**Options Presented:**
- `(Recommended) Turn-based Stage: Speaker 1 (Proposition) and Speaker 2 (Opposition) take turns with speech/audio recording, live countdown, and side-by-side scorecard.`
- `Simultaneous split-screen: Both speakers view their side-by-side prompt cards with separate audio record buttons on one screen.`
**💬 User's Choice / Answer:**
> **"(Recommended) Turn-based Stage: Speaker 1 (Proposition) and Speaker 2 (Opposition) take turns with speech/audio recording, live countdown, and side-by-side scorecard."**

#### Q4: How should the features be staged between Version 9 and Version 10?
**Options Presented:**
- `(Recommended) v9 includes all fixes (Wordle 6x5 grid, anchor seat v7 layout, debate audio + two-speaker mode, orange closing screen, class 8 & below, join board fix, AI typewriter) + admin testimonial approval. v10 adds the OBS live stage feed, audio waveforms, and advanced AI feedback synthesis.`
- `Include OBS live feed and testimonial showcase in both v9 and v10, with v10 having additional experimental visual upgrades.`
**💬 User's Choice / Answer:**
> **"(Recommended) v9 includes all fixes (Wordle 6x5 grid, anchor seat v7 layout, debate audio + two-speaker mode, orange closing screen, class 8 & below, join board fix, Al typewriter) + admin testimonial approval. v10 adds the OBS live stage feed, audio waveforms, and advanced Al feedback synthesis. v11 wuth experimental visual upgrades horizontal scroll extra features etc."**


================================================================================


## 2. Chronological Log of All User Prompts

### Conversation A: Initial Discovery & Foundation

- **Conversation ID:** `749edff6-cdcc-46a0-a4e4-51fb1e17f5a4` ([Open in Antigravity](conversation://749edff6-cdcc-46a0-a4e4-51fb1e17f5a4))

#### Prompt 1 | 2026-10-25T11:33:46Z

<details><summary><b>Large Prompt Payload (click to expand)</b></summary>

```html
> From: https://claude.ai/chat/14865b15-0314-4e82-84aa-b619da967a88

# you asked

message time: 2026-10-23 12:48:35

Yeah, so I have a career fair activity and the topic is how English proficiency can improve career choices, like in career, help in career. So for that I want you to suggest some game ideas and some also online game ideas. Like for example, I'm giving one, we can host a website where the user tries to pronounce a word and we all like or say a sentence and we like analyze how good it is, like pronunciation, etc. Then or we can also like ask the user to say a speech and then make a video of them, like an anchor or something, or like show some graphs or some. So finally there's some game ideas, some online website game ideas and some things to incorporate in website to make it the best. It's for SUPW. Thanks. It should be the best in the world.

---

# claude response

Here's a plan that ties every activity back to your message: **English opens more career doors.**

**Offline games (stall or stage)**
- **Career Roulette:** Spin a wheel to get a job (pilot, RJ, doctor, lawyer). The player gives a 30-second pitch in English, and the audience scores it.
- **Interview Hot Seat:** Three quick mock interview questions, scored on clarity, confidence, and vocabulary.
- **Who Gets Hired?:** Show two candidates with the same skills, one with polished English and one without. Visitors vote, then see why.
- **Jargon Match:** Match professional terms (prognosis, invoice, turbulence) to careers.
- **Fix the Email:** Spot the errors in a badly written work email in 2 minutes.
- **Career Ladder:** Answer English questions to climb from intern to CEO on a big floor or wall chart.

**Online games (website)**
- **Pronunciation Challenge (your idea):** Say tricky career words and sentences, and get an instant score.
- **News Anchor Mode:** The user reads a teleprompter script on camera. The site records them, adds a news-style lower third ("Breaking News: [Name]"), and shows graphs of speaking pace, clarity, and filler words.
- **AI Mock Interview:** An AI interviewer asks questions and gives feedback on answers.
- **Career Unlock Simulator:** The user's English score unlocks careers on a map. A low score shows few options, and a higher score opens more. This is your core message in one screen.

**Features that make it stand out**
- A report card with a radar chart (pronunciation, fluency, vocabulary, grammar, confidence)
- A filler-word counter ("um", "like") and words-per-minute meter
- A "Your English suits these careers" result at the end
- A downloadable certificate or shareable video clip
- A live leaderboard on a big screen
- A QR code so visitors can play on their phones
- Quick stats like "Jobs requiring English communication skills" between rounds

**Tech tip:** The browser's built-in Web Speech API handles speech recognition for free in Chrome. Add MediaRecorder for video and Chart.js for graphs.

To win, keep it simple, fast (under 2 minutes per player), and visual. Judges remember a clear message and a "wow" moment, like the anchor video.

Want me to build the website for you? I can make the pronunciation game plus the anchor mode as one working page.

---

# you asked

message time: 2026-10-23 12:50:33

Alos add career choices in it

---

# claude response

Add a **"Choose Your Career" screen at the start**, so every game adapts to the career the player picks.

**Career options and their English challenge**
- **Pilot:** Read air traffic instructions ("Request clearance for takeoff")
- **Doctor:** Explain a diagnosis to a patient in simple words
- **News Anchor/Journalist:** Read a breaking-news script on camera
- **Software Engineer:** Explain a bug to an international client
- **Lawyer:** Argue a 30-second case
- **Hotel/Tourism Manager:** Handle a foreign guest's complaint
- **Entrepreneur:** Pitch a startup idea to investors
- **Civil Servant (IAS/IFS):** Deliver a short speech or interview answer
- **Teacher:** Explain a concept clearly to a class
- **Customer Support:** Calm an upset customer politely

**How career choice plugs into each game**
- **Pronunciation Challenge:** Words change by career (*prognosis* for doctors, *itinerary* for tourism).
- **Mock Interview:** Questions are career-specific ("Why should we hire you as a pilot?").
- **Anchor Mode:** The script and the on-screen title match the career ("Dr. [Name], Chief Surgeon").
- **Career Unlock Map:** All careers show as locked, and the player's English score unlocks them one by one. A higher score unlocks more.

**Result screen**
- "Your English fits: Doctor 85%, Pilot 78%, Lawyer 60%"
- A career card for each match showing how English helps, the skills needed, and typical roles
- A "Next step" tip, like "Practice formal vocabulary to unlock Lawyer"
- A certificate: "[Name], Future [Career]"

Want me to build this as one working website with the career selector, pronunciation game, and anchor mode?

---

# you asked

message time: 2026-10-23 12:51:36

No, you're not getting my idea. You have to list all the career choices in it along with colleges, packages, etc. It's to show the... It's important to show the career choices, and it's not a competition something. It's like we have to show all the parents who are coming with career choices for community work.

---

# claude response

Got it, this is a **career directory for parents**, with English shown as the skill that helps in every career. I've assumed India and yearly packages in ₹. These are approximate fresher ranges, so check the latest placement reports before printing.

**1. Doctor:** NEET-UG, then AIIMS, JIPMER, AFMC, CMC Vellore. ₹8-15L early on, ₹20L+ as a specialist. *English:* patient communication, medical journals, PLAB/USMLE abroad.

**2. Pilot:** DGCA path, IGRUA, Indian Aviation Academy, approved flying schools. ₹12-30L as first officer, ₹40L+ as captain. *English:* ICAO English proficiency is mandatory.

**3. Software Engineer:** JEE, then IITs, NITs, IIIT-Hyderabad, or BITS Pilani via BITSAT. ₹4-12L typical, ₹20L+ at top campuses. *English:* client calls, documentation, global teams.

**4. Lawyer:** CLAT, then NLSIU Bengaluru, NALSAR, NLU Delhi. ₹6-12L average, ₹15-20L+ at top firms. *English:* drafting, court arguments, contracts.

**5. Civil Servant (IAS/IPS/IFS):** UPSC CSE (any graduate), trained at LBSNAA. ₹56,100 basic per month plus allowances. *English:* Mains English paper, interview, official drafting.

**6. Defence Officer:** NDA or CDS, then NDA Khadakwasla, IMA, OTA. Lieutenant starts at ₹56,100 basic plus allowances. *English:* SSB interview, leading and briefing teams.

**7. Journalist / News Anchor:** IIMC Delhi, ACJ Chennai, Symbiosis Pune, Jamia MCRC. ₹3-8L entry, ₹15L+ for established anchors. *English:* scripts, interviews, reaching global audiences.

**8. Hotel, Tourism & Cabin Crew:** NCHM JEE, then IHM Pusa, Mumbai, Bangalore, or Welcomgroup (Manipal). ₹3-8L entry, ₹25L+ at general manager level. *English:* handling foreign guests and complaints.

**9. MBA / Entrepreneur:** CAT, then IIM A/B/C, XLRI, FMS Delhi, ISB. ₹25-35L average at top IIMs. *English:* pitching to investors, negotiation.

**10. Chartered Accountant / Finance:** ICAI exams, with commerce at SRCC or St. Xavier's. ₹7-12L when newly qualified. *English:* reports, global clients.

**11. Teacher / Professor:** DU, JNU, EFLU Hyderabad, RIE for B.Ed, NET for professorship. ₹4-8L in schools, ₹10-25L for professors. *English:* classroom teaching, IELTS/ELT training.

**12. Customer Support / Global Business Services:** any graduate. ₹2.5-5L, ₹8-12L at team lead level. *English:* international voice processes usually pay more.

Want me to build this as a website, with a card for each career showing colleges, package, and a "How English helps" strip? I can add a small optional English demo on each card for visitors.

---

# you asked

message time: 2026-10-23 12:53:16

Can you think of some innovative game online ideas or offline, like, so that we can make our stall something unique and best?

---

# claude response

Since your audience is parents, the best ideas make them and their kids talk about careers together.

**Offline (stall)**
- **Parent vs Child Dream Match:** The parent writes the career they want for their child, and the child writes their own on a card. Reveal both together, then show the matching career card with colleges and packages. It sparks the most conversation.
- **Guess the Package:** Parents flip a card to guess a career's starting salary, then see the real range. The reveals surprise people.
- **Career Passport:** Each career corner stamps the visitor's passport and gives one "How English helps" tip. A full passport wins a small gift.
- **Mystery Box:** Visitors pull out a prop (stethoscope, headset, gavel, pilot cap), guess the career, and say one sentence in English as that professional.
- **Pathway Floor Game:** A giant floor board from Class 10 to exam to college to job, where visitors walk the path with a dice roll.
- **Future Photo Booth:** Visitors pose in a cutout frame for a "Future Doctor" or "Breaking News" photo with their name, printed or sent by QR.

**Online (website)**
- **Career Match Quiz:** Five quick questions give top 3 careers, with colleges, exams, and packages.
- **Anchor Mode:** The visitor reads a teleprompter script, and the site records them with a news-style title and shows pace and filler-word graphs.
- **Roadmap Generator:** Pick a class and a career to get a timeline of exams and colleges.
- **Future Business Card:** Enter a name and career to get a shareable card, e.g. "Dr. Ananya, Cardiologist".

**My top 3 for a unique stall:** Parent vs Child Dream Match, Anchor Mode, and the Future Photo Booth. Together they are emotional, visual, and photogenic.

Want me to build the website with the career directory, quiz, and anchor mode in one page?

---

# you asked

message time: 2026-10-23 12:57:37

add features so that the user, so that the website can analyze the user's speech and then suggest what can be improved. Use an AI API, whatever you want, free Google API. And like I was, what I was thinking, also had a feedback section in the this thing, what you know, yeah, website. And like, yeah, cool, then what to do? Yeah, and like, you know, you should make it cinematic, like it's a $1 million website. I spent like $1 million on it. I'm Mr. Beast basically. So make sure that it meets its standard. I just want you to make a plan, you know, and then compile all the ideas in this whole chat and then write it in this response. And then yeah, and for that thing, whatever, you know, that speech thing, give users option to what to imitate, doctor, news anchor, etc. And then like count the filler words, use AI for everything. Use count the number of filler words, UHMMS, etc. You know, and then that pronunciation one also add, and then like say, tell them, like, you know, Google Translate has that lip sync thing, they tell how to lip sync that word, so add that also in that. And yeah, that also, like, you know, 10 more online game and like what else to show ideas, which can make it the best. On the website also add career options, packages and colleges, and some good photos. It should be cinematic. I should also be working on phone, since most will scan a QR code and it will be phone like, but I can scroll it nicely on phone and it like it is animations, you know, something very good. You know that you can also use web3js and web3g or whatever, you know. And you know that igloo.inc website is excellent, you know, learn something from that also, add something like that. And then you can remember, it's all the best. And you can also add some that photo shoot also, no, you decide. Stop.

---

# claude response

Here's the full plan, compiled from everything we've discussed.

## 1. Concept
**"Every career speaks English."** It's a cinematic career showcase for parents, with careers, colleges and packages, plus an AI Speech Lab where kids try a career's English. There's no competition, only discovery.

## 2. Cinematic experience (learning from igloo.inc)
Igloo Inc is the parent company of Pudgy Penguins, and its landing page was built with Three.js, GSAP and WebGL, with even the UI effects done in WebGL. It won Awwwards Site of the Year 2024. What we copy:
- **Few sections, deep interaction:** scrolling moves a 3D camera through "doors," one per career cluster.
- **Dark, premium look:** one accent colour, glowing particles, shader glitch on titles.
- **Touch ripples:** a fluid effect follows the finger on phones.
- **Flow:** intro line, then the Career Doors, then career cards, then the Speech Lab, then the result and feedback.

## 3. Core features
- **Career directory:** 12+ careers. Each has a full-screen photo, exams, colleges, package range, and a "How English helps" tip. Swipe on phones.
- **Speech Lab:** the user picks a role (Doctor, News Anchor, Pilot, Lawyer, Entrepreneur, Teacher, Hotel Manager) and gets a script or situation, then records.
- **AI analysis (Gemini):** scores for pronunciation, fluency, clarity, vocabulary and confidence. It also gives a filler-word count (um, uh, like, you know), words per minute, the top 3 improvements, and a "say it better" rewrite.
- **Anchor/role overlay:** the recorded video gets a role overlay, e.g. a news lower third or "Dr. Ananya, Cardiologist."
- **Pronunciation Lab:** hear the word slowly, see an animated mouth guide with phonemes, record, get a score, retry.
- **Result card:** a radar chart, "Your English fits these careers," and a shareable card.
- **Feedback section:** emoji rating, 3 quick questions, and a comment box, saved to a Google Sheet.

## 4. Ten more online games
1. **Accent Twin:** compare your sentence's waveform with a pro voice.
2. **Tongue Twister Rush:** career-themed twisters scored on speed and accuracy.
3. **Mayday Roleplay:** an AI voice plays a pilot, ER or angry customer, and you respond.
4. **Boardroom Debate:** the AI argues, and you counter in 20 seconds.
5. **Guess the Package:** swipe cards, then see the real salary.
6. **Fix the Email:** spot the errors, then the AI rewrites it.
7. **Jargon Chain:** a timed word chain of career terms.
8. **Dubbing Studio:** voice an original animated scene.
9. **2040 Me:** enter your class and dream, and the AI writes your future profile and timeline.
10. **Parent vs Child Match:** each picks a career, and the site shows where they overlap.

## 5. Stall ideas
Future Photo Booth, Parent vs Child cards, Career Passport stamps, Mystery Prop Box, a floor-path game, and a big screen showing live results.

## 6. Tech stack
- **Visuals:** Three.js + GSAP ScrollTrigger.
- **AI:** Gemini API (free tier) with audio input.
- **Hosting:** Netlify or Vercel with a small serverless function.
- **Extras:** MediaRecorder, Chart.js, and a QR code.
- **Images:** free Unsplash/Pexels photos, compressed.

## 7. Honest notes
- **Web3:** I think you mean **Three.js/WebGL**. Web3.js is blockchain, which we don't need.
- **Lip-sync:** I'm not aware of Google Translate showing lip movement. We'd build our own mouth-shape animation guide instead.
- **Filler words:** the browser's speech recognition often hides "um," so send the audio to Gemini with a "transcribe verbatim" instruction.
- **API key:** keep it on the server, never in the page.
- **Rate limits:** the free tier limits requests, so many people scanning the QR at once could hit it. Add a queue and a simple fallback score.
- **Phones:** cap 3D quality, keep the page under about 3 MB, and add a lite mode.
- **Privacy:** show "recordings aren't saved," since kids' voices and videos are involved.
- **Salaries:** double-check the figures before printing.

## 8. Build order
1. Career directory with cinematic scroll
2. Speech Lab with AI feedback
3. Pronunciation Lab
4. Feedback and share card
5. Extra games

Want me to start building step 1 and 2 as a working page?

---

# you asked

message time: 2026-10-23 13:01:38

And your website should be very responsive, like, you know, I am scrolling for half an hour and it moves like some little, like, you know, some old people use it, and then, like, it should be very responsive, as responsive as the Amazon site, and very interactive also. Like, anyone can use it basically, just as easy as ordering something on Amazon or watching Insta. You know, these companies themselves try to make the app simple but excellent in UI, and some animations really good so that, you know, users stay hooked. And yeah, make sure that use that website editing skill, that it has that part which says how to make it not look AI like. Use various colors, blue, yellow, green, etc., orange, etc. Yeah, make sure you use every free API you want. I can provide multiple APIs, or I will provide you the or you can also enable a router, combine a router in the website in the backend. You also give choices for hosting, like should I host on Firebase or GitHub Pages or Vercel.app or Cloudflare also. Next, current activity is a good idea. Speech lab is also a good idea. Okay. Yeah, a result card should be best. It should have the result card, should have the AI analysis, the, you know, feedback section, emoji card, etc. Yeah, you can also add a, you know, conversation, like another person is talking, a doctor or a pilot or an angry customer or a CEO in a meeting, and you do. Yeah, that debate one is also good. The guest package is cool, but I guess it will be more better offline or online, you tell. Email one is also good, fixed email. Offline also you can do that. That career option, like you enter the class and your career aim, and it lists all the colleges, exams and tips and tricks. But make sure it's most absolutely free. Cool. And good.

---

# claude response

I'll build this as files you can host yourself, since the AI needs a small backend to keep your keys private. First I'm reading the design skill you mentioned.

I built the first version: index.html is the site, and analyze.js is the AI router that goes in an `api` folder next to it. I haven't tested it on a real phone yet. It has the Home hero, the Careers tab (12 careers with colleges and packages), My Plan (class + career aim gives a roadmap), and the Speech Lab. The Speech Lab covers 8 roles with scored analysis and a result card showing radar chart, filler words, tips, and emoji feedback. Without the backend it still works, using on-device scoring.

**Hosting**
- **Vercel (my pick):** the `api` folder works as-is, and it's free for a school project.
- **Cloudflare Pages:** also free and fast, but analyze.js needs a small rewrite.
- **GitHub Pages:** it has no backend, so your API keys would be exposed. I'd avoid it.
- **Firebase:** its server functions need a billing plan, so it isn't fully free.

Add `GEMINI_API_KEY` in Vercel's settings. For the router, you can also add `GROQ_API_KEY` and `OPENROUTER_API_KEY`, and each key can hold several keys separated by commas. If one provider is busy, it tries the next, and the page falls back to on-device scoring if all fail.

**Online or offline**
- **Guess the Package:** offline. Parents flipping cards and arguing with their kids works better in person.
- **Fix the Email:** both. Print it for the stall, and I can add an online version where the AI rewrites the email.
- **Career planner:** online, as built.

I left out the 3D scene, the AI conversation roleplays (angry customer, CEO), the debate game, the anchor video mode, and the photos, to keep this first build fast. Photos need licensed images saved in the folder. Tell me which to add next.

---

# you asked

message time: 2026-10-23 13:07:09

tested on the phone, an Android phone, tested on an Android SM8356E/DS or something phone with the same specs, and test if it works. And your voicemail APIs run out very fast. Use Cloud for pages only. But does it have unlimited writes? Like, you know, in voicemail, if I change the code, it uses so many tokens. test on my phone, add some more features, some more qualities, some more details, some more things, everything, and make it the best. Use API for voice.

---

# claude response

Quick update: both files pass my checks, so I'm handing them over now.

I can't run anything on your phone, so please test the mic on your Samsung. I checked the page's JavaScript and ran all five server operations against mock AI responses, and they pass. I have not tested real Cloudflare AI calls or real audio recorded on a phone.

**Cloudflare only**
- **AI and voice:** it now uses Cloudflare Workers AI, so there are no API keys at all. The free allowance is 10,000 Neurons per day. Speech-to-text costs about 47 Neurons per audio minute and text-to-speech about 19. That is roughly 200 minutes of listening a day, so your stall should stay free. If it runs out, requests fail and the site falls back to its own on-device scoring.
- **Writes and updates:** the limit isn't unlimited. The Free plan allows 500 builds per month, and each Git push triggers one. That's plenty. Static traffic is unmetered, but server functions share a 100,000 requests/day quota.
- **Code changes:** the code is now split into separate files, and I edit with small patches instead of rewriting everything, so changes use few tokens.

**New in this version**
- **Whisper listening:** it records your voice and sends it to Whisper. This works inside QR-scanner browsers, where the browser's own speech recognition often fails.
- **Talk tab:** five AI roleplays: angry customer, CEO meeting, worried patient, air traffic controller and interviewer. The AI replies out loud, and Get my score uses the same result card.
- **Hear it:** a button on the result card reads your improved sentence aloud.

**To deploy**
1. Put the folder in a GitHub repo.
2. In Cloudflare, create a Pages project from that repo.
3. Go to Settings, then Bindings, add Workers AI, and name it `AI`.

I'd use GitHub rather than drag-and-drop upload, so the `functions` folder is sure to deploy.

**Not done yet:** the 3D scene, the mouth-shape pronunciation guide, photos, the debate game and the anchor video mode. Whisper may still hide some "um"s even with my prompt, and Cloudflare retires models over time. If one stops working, set `LLM_MODEL` in your project settings.

Which should I build next: pronunciation lab, anchor video, or debate?

---

# you asked

message time: 2026-10-23 13:13:29

No, no, no. If Cloudflare runs out, add a router that routes through. that routes to first Gemini APIs, then a free LLM API GitHub repo by Tasfin someone. Yeah, that API, and if that also gets over, then fall back to on-device scoring. Add an admin page so I can see the request and then decide if I should give them which one, best one, worst one. Yeah. And yeah, if something AI can work on 16 GB laptop with Ryzen 7 U version, then you can use my laptop as a host and for the things to run. You see, it should be free basically. And yeah, add everything about that thing, like which all career options are there and some famous personalities who had very good British, and like comparison of your English with another person's English, either their voice you can upload or like some famous personality. And next, give me the website with all the features all together in one. All the features, rewrite it full from scratch, everything, each and everything, include every feature and admin page with mock password and user ID, like it should be hidden. Yeah, and also QR code for it. The QR code should be artistic, like it should be, the QR code should be scannable, but it should have a logo and a design behind it, you know, like these things to made AI. Make it the best. Also add a leaderboard for all the people's English in the school who have participated, their rankings, the comparisons, etc. Take permission for that, like, you know, you understand better than me. Make it most feature-rich, and in that, admin add a function to disable features, so you can add all the features you would think of now, all the features, even features you invent yourself, innovate now while thinking. Spend all the time and make it, and add a function so that I can disable it. Okay, so

---

# you asked

message time: 2026-10-23 13:14:45

No, no, no. If Cloudflare runs out, add a router that routes through. that routes to first Gemini APIs, then a free LLM API GitHub repo by Tasfin someone. Yeah, that API, and if that also gets over, then fall back to on-device scoring. Add an admin page so I can see the request and then decide if I should give them which one, best one, worst one. Yeah. And yeah, if something AI can work on 16 GB laptop with Ryzen 7 U version, then you can use my laptop as a host and for the things to run. You see, it should be free basically. And yeah, add everything about that thing, like which all career options are there and some famous personalities who had very good British, and like comparison of your English with another person's English, either their voice you can upload or like some famous personality. And next, give me the website with all the features all together in one. All the features, rewrite it full from scratch, everything, each and everything, include every feature and admin page with mock password and user ID, like it should be hidden. Yeah, and also QR code for it. The QR code should be artistic, like it should be, the QR code should be scannable, but it should have a logo and a design behind it, you know, like these things to made AI. Make it the best. Also add a leaderboard for all the people's English in the school who have participated, their rankings, the comparisons, etc. Take permission for that, like, you know, you understand better than me. Make it most feature-rich, and in that, admin add a function to disable features, so you can add all the features you would think of now, all the features, even features you invent yourself, innovate now while thinking. Spend all the time and make it, and add a function so that I can disable it. Okay, so The hosting will be on Cloudflare only, just for that compute. If that quota runs out, take use compute of my laptop, send it to Cloudflare, and then do everything you want, like Cloudflare data, audio to my laptop, then the computing happens and goes back. Or you can also add a feature when, like, you know, you make a website and then multiple people log into the website, and the all the laptops specs and configure the RAM and CPU are used, so that we can pool the data and resources we have together. Make it the best, you know, the best.

---

# you asked

message time: 2026-10-24 08:33:21

Continue

---

# claude response

Quick update: all tests pass, so I'm doing a last visual check of the QR design before handing over.

Everything is now in one site: index.html, with the router and admin backend in ai.js. I extended the existing code instead of rewriting it from scratch, so the working parts stayed intact.

**What's in it**
- **Router:** Cloudflare AI, then Gemini, then your free LLM, then your laptop, then on-device scoring. Gemini also handles speech-to-text if Cloudflare runs out.
- **Free LLM slot:** I couldn't identify the "Tasfin" repo from a quick search. The slot takes any OpenAI-style endpoint (`FREE_LLM_URL`, `FREE_LLM_KEY`, `FREE_LLM_MODEL`). Send me the repo link and I'll fit it.
- **Your laptop:** run `ollama pull llama3.2:3b` and `cloudflared tunnel --url http://localhost:11434`, then set `LAPTOP_URL`. A small model like that should fit your 16 GB Ryzen, but expect a few seconds per reply. Laptop audio is optional, via `LAPTOP_STT_URL`.
- **Hidden admin:** tap the big headline 5 times, or open `/#admin`. The demo login is `admin` / `careers2026`, and the demo password sits in the code, so change it with `ADMIN_USER` and `ADMIN_PASS`. Admin shows every request and which provider answered, plus 9 on/off switches. I took your "best one, worst one" to mean a quality mode (Best, Balanced, Saver). If you meant approving individual requests, tell me.
- **New features:** Career Quiz, Word of the Day, Great speakers (6 articulate public figures with links to their speeches, no clips bundled), and Compare voices. In Compare you record yourself, then upload a clip under 4 MB or paste their words, and it compares pace, fillers, and vocabulary.
- **Leaderboard:** it saves a nickname, class, and score only if the student ticks a permission box, and never saves voice or words. You can delete entries in admin. I'd also get school or parent permission first.
- **QR code:** it's in More, then Share, and it has a logo, colour art, and a PNG download. I decoded it with a real QR reader at three sizes and it scanned every time. Please still test it with your phone, and use a short link.

**Setup:** deploy through GitHub, then add two bindings in Cloudflare Pages: Workers AI named `AI` and a D1 database named `DB`. D1 powers the shared leaderboard, the request log, and saved switches.

**Tested:** I ran an automated pass through the whole page and the fallback order, and everything passed. I haven't tested real Cloudflare or Gemini calls, or your phone.

**Not built:** pooling many people's laptops. It needs a job queue, and it would send kids' voices to strangers' machines, so I'd skip it. Also left out: the 3D scene, photos, the mouth-shape guide, the debate game, and the anchor video.

Which should I add next?

---

# you asked

message time: 2026-10-24 09:43:58

Use all related skills and regrate ui so there are no bottom options it's features come as u scroll down.

---

# claude response

Quick update: the bottom menu is gone and the page now scrolls as one story, so I'm running the end-to-end test again.

The bottom menu is gone, and index.html is now one long scroll. The order is hero, careers, plan, quiz, Speech Lab, Talk, Compare, great speakers, leaderboard, word of the day, then QR. The only fixed element is a thin progress line at the very top. Each section pops in as you reach it, and the page background shifts colour from section to section. The admin switches still hide whole sections, and admin stays hidden (5 taps on the headline, or `/#admin`). ai.js is unchanged.

**Changes from the design skills**
- **Design:** I cut the typical AI-page habits: the highlighted word in the headline, all-caps labels, arrows on buttons, and fade-ins on every element.
- **Copy:** I rewrote it in plain, specific language.
- **Code:** I removed the old menu code.

I ran 19 automated checks in a simulated browser and all passed, but I haven't tried it on a real phone. Scroll it on your Samsung and tell me if any section feels heavy.

One privacy point: Google's free Gemini tier may use inputs to improve its products. Check its terms before kids' voices go there, or leave `GEMINI_API_KEY` unset to keep Gemini out.

Next I can add career photos or a 3D hero scene. /plan /grill-me  and make ui best do research. also use stitch mcp upload to https://github.com/bhavyakumar-dev/careerfair and while uplaoding ensure no comments and secret keys.
```
</details>

#### Prompt 2 | 2026-10-25T11:41:49Z

```text
nooo , just descrube what all u want not too detailed info of ui to sstitch , its good. justa ttach all related skill content /web-artifacts-builder /frontend-design etc /frontend-dev-guidelines
```

#### Prompt 3 | 2026-10-25T12:08:40Z

```text
add toggle for ai fallbck manual also there make sure professions require enGlish more imp example:in entertainment:Screenwriter / scriptwriter: films, web series, OTT shows
Novelist / fiction author: adventure, fantasy, YA, adapted into films or series
Narrative designer / game writer: dialogue, lore, and branching stories in games
Lyricist / songwriter
Journalist / entertainment critic: film, music, and book reviews
Copywriter / content writer: trailers, taglines, ad campaigns
Scriptwriter for YouTube/podcasts: explainers, storytelling channels
Dialogue writer / story editor: polishes scripts for studios
Voice actor / narrator: audiobooks, animation, documentaries
Dubbing / subtitle translator and localizer: English ↔ Indian languages for streaming
Radio jockey / podcast host / anchor / emcee
Stand-up comedian / comedy writer
Publishing editor / literary agent: acquiring books and film rights
Casting or script reader / development executive: choosing which stories get made
Theatre playwright / director etc..........................................
```

#### Prompt 4 | 2026-10-26T13:54:27Z

<details><summary><b>Large Prompt Payload (click to expand)</b></summary>

```html
continue and maske this a v8 file addition. ---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
license: Complete terms in LICENSE.txt
---

# Frontend Design

Approach this as the design lead at a design studio known for giving every client a distinct visual identity that is not mistaken for anyone else's. This client has already rejected proposals that felt cliché or templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take aesthetic risk if justified.

## Ground your designs in the subject matter

If the brief does not identify what the product or subject matter is, identify it yourself before designing, and confirm with the client. You can come up with one concrete subject, the design's audience, and the design's primary job, as a proposal. If there's any information in your memory about the client's preferences or context about what they're building, use that as a hint. The subject's industry, subject matter, materials, and vernacular are where distinctive visual choices come from — a design for a toy for girls aged 8–11 will be very aesthetically different from a dashboard for financial analysts. Build with the brief's real content and subject matter throughout.

## Design principles

For web designs, the hero is the first thing viewers will see. Open with the most characteristic thing in the subject's world, in the form that is most appropriate: a headline, an image, an animation, a live demo, an interactive moment, or other treatments. Be deliberate with your choice: a big number with a small label, supporting stats, and a gradient accent is the default treatment, so only use it if that's truly the best option.

Typography carries the personality of the page. You don't need a different typeface for display or headline text and body content: use one family or two, and if two, make them clearly distinct.

Choose your typefaces deliberately, not the default families you would reach for on any other project, and set a clear type scale following the default guidance of The Elements of Typographic Style with intentional weights, widths, and spacing. When type is used as a headline or visual element, use the type treatment itself as an active part of the design, not a neutral delivery vehicle for the content.

Default to line lengths of less than 80 characters. Serif typefaces can have slightly longer line lengths; give serif body text slightly more line-height than a sans-serif.

Avoid these default typographic treatments; they are the commonest tells of a generated page:
- Accenting just a single word or phrase in a headline, like putting one word in italic/bold or a different color.
- Using all caps for labels.
- Adding unnecessary typographic labels above content.

Visual structure is information. Structural devices like outlines, borders, numbering, eyebrows, dividers, labels, etc., encode useful information about the content rather than decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence — like a stepped process or a timeline. Before adding numbered markers, check the content really is a sequence.

Use non-user-triggered motion sparingly and deliberately, only to draw attention. A single orchestrated moment — one page-load sequence or one reveal — lands better than scattered effects; fade-and-slide-up entrances on each section and hover transitions on every card are the generic default and read as AI-generated. Motion that answers a person's action (opening, expanding, confirming) is welcome when it shows what changed.

Consider written content carefully. Often a design brief may not contain real content, and it's up to you to come up with copy and placeholder content. Copy can make a design feel as templated as the design itself. See the below section on writing for more guidance.

## Process: plan, review against the brief, build, critique

For calibration, AI-generated design right now clusters around some traits:
1. a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta or warm-clay accent (often near #D97757 — Anthropic's own Claude-interaction accent, so on a user's brief it reads as a tell);
2. a near-black background with a single bright acid-green or vermilion accent;
3. a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns;
4. the SaaS-card kit: content chopped into identical rounded cards, one border-radius on everything regardless of hierarchy, the same soft grey shadow (rgba(0,0,0,.1)) under each, and gradient washes as decoration;
5. template chrome that appears whatever the subject: a tracked-out ALL-CAPS eyebrow label above every heading; meta strings joined with middle dots ('A · B · C'); labels built as 'WORD — fragment' with a spaced em dash; tinted near-black (#0B0B0B, #111) standing in for black; a monospace face for small data labels; a '→' appended to link and button text.

All traits are legitimate for some briefs, but they are defaults rather than choices, and they appear regardless of subject. Where the brief pins down a visual direction, follow it exactly — the brief's own words always win, including when it asks for one of these looks. Where it leaves an axis free, don't spend that freedom on one of these defaults. As with a hired human designer, there's often a careful balance between doing what you're good at and taking each project as a chance to experiment and learn.

Work in two passes. First, brainstorm a short design plan based on the client's design brief: create a compact token system with color, type, layout, and principles.
- Color: describe the core base palette as 4–6 named hex values.
- Type: the typefaces and their roles.
- Layout: a layout concept, using one-sentence prose descriptions and ASCII wireframes to ideate and compare. Include alignment guidance; should the content be left aligned, center aligned, justified?
- Principles: the high-level guidance for what makes this page unique.

Then review that plan against the brief before building: if any part of it reads like the generic default you would produce for any similar page (work through a similar prompt to see if you arrive somewhere similar) rather than a choice made for this specific brief — revise that part, say what you changed and why. Only after you've confirmed the relative uniqueness of your design plan should you start to write the code, following the revised plan.

When writing the code, be careful of structuring your CSS selector specificities. It's easy to generate CSS classes that cancel each other out (especially with a type-based selector like .section and an element-based selector like .cta). This can happen often with padding/margin between sections.

## Restraint and self-critique

Spend your boldness in one place. Let one element be the memorable thing, keep everything around it quiet and disciplined, and cut any decoration that does not serve the brief. Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected, visually accessible, harmonious color palettes. Critique your own work as you build, taking screenshots to review if your environment supports it — a picture is worth 1000 tokens. Consider Chanel's advice: before leaving the house, take a look in the mirror and remove one accessory. Human creatives have memory and always try to do something new, so if you have a space to quickly jot down notes about what you've tried, it can help you in future passes.

## More on writing in design

Words appear in a design for one reason: to make it easier to understand and use. They are design content, not decoration. Bring the same intentionality and minimalism to copywriting that you would bring to spacing and color. Before writing anything, ask what the design needs to say, and how it can best be said to help the person navigate the experience.

Write from the end user's perspective. Name things by what users will understand in simple language, not by how the system is built. A user manages notifications, not webhook config. Describe what something is or does in plain terms rather than selling it. Being specific and legible to new users is always better than being clever.

Use active voice as default. A CTA says exactly what happens when it is used: "Save changes," not "Submit." An action keeps the same name through the whole flow, so the button that says "Publish" produces a toast that says "Published." The vocabulary of an interface is the signposting for someone navigating the product. Cohesion and consistency are how people learn their way around.

Treat failure and emptiness as moments for direction, not mood. Explain what went wrong and how to fix it, in the interface's voice rather than a person's. Errors don't apologize, and they are never vague about what happened. An empty screen is an invitation to act.

Keep the tone conversational: plain verbs, sentence case, no filler, with tone matched to the brand and the audience. Let each written element do exactly one job.
```
</details>

#### Prompt 5 | 2026-10-26T13:55:31Z

```text
noom , therr are multiple versions of websites , this is 8th versionso , on main wensite when clicked on 8 this will open just analyze eveyrthing present there
```

#### Prompt 6 | 2026-10-26T13:55:41Z

```text
noom , therr are multiple versions of websites , this is 8th versionso , on main wensite when clicked on 8 this will open just analyze eveyrthing present there pls dont dedete anything
```

#### Prompt 7 | 2026-10-26T13:59:43Z

```text
see v3 its the best
```


---

### Conversation B: Continuing Previous Task

- **Conversation ID:** `de24df81-5688-48d6-85ca-54e6a6592ead` ([Open in Antigravity](conversation://de24df81-5688-48d6-85ca-54e6a6592ead))

#### Prompt 1 | 2026-10-25T12:37:43Z

```text
COntinue
```

#### Prompt 2 | 2026-10-25T13:16:13Z

```text
runnpx wrangler deploy next ime , niw i run
```

#### Prompt 3 | 2026-10-25T13:16:38Z

```text
18:46:18.347
 ⛅️ wrangler 4.152.0
18:46:18.351
────────────────────
18:46:18.488
18:46:18.488
Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
18:46:18.490
18:46:18.636
✘ [ERROR] Could not detect a directory containing static files (e.g. html, css and js) for the project
18:46:18.636
18:46:18.636
18:46:18.691
🪵  Logs were written to "/opt/buildhome/.config/.wrangler/logs/wrangler-2026-10-25_13-16-17_667.log"
18:46:18.830
Failed: error occurred while running deploy command
```

#### Prompt 4 | 2026-10-25T13:18:11Z

```text
upload to https://github.com/bhavyakumar-dev/careerfair
```

#### Prompt 5 | 2026-10-25T13:18:36Z

```text
18:46:18.347
 ⛅️ wrangler 4.152.0
18:46:18.351
────────────────────
18:46:18.488
18:46:18.488
Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
18:46:18.490
18:46:18.636
✘ [ERROR] Could not detect a directory containing static files (e.g. html, css and js) for the project
18:46:18.636
18:46:18.636
18:46:18.691
🪵  Logs were written to "/opt/buildhome/.config/.wrangler/logs/wrangler-2026-10-25_13-16-17_667.log"
18:46:18.830
Failed: error occurred while running deploy commandupload to https://github.com/bhavyakumar-dev/careerfair
```

#### Prompt 6 | 2026-10-25T13:24:09Z

```text
do not write supw there , use more vivid coloers /web-artifacts-builder /frontend-design /frontend-dev-guidelines /generative_ui /webapp-testing /boost
```

#### Prompt 7 | 2026-10-25T13:25:23Z

```text
do not write supw there , use more vivid coloers /web-artifacts-builder /frontend-design /frontend-dev-guidelines /generative_ui /webapp-testing /boost  make it  bestter , use better custom font working qr code not on website , admin button in footer.
```

#### Prompt 8 | 2026-10-25T13:28:52Z

```text
Add ElevenLabs to my project: run `npx -y @elevenlabs/cli@latest onboard init` and follow what it prints. uk like generate audio for static olnce and store it and use wisely/.
```

#### Prompt 9 | 2026-10-25T13:33:06Z

```text
DONT FORGIT GITIGNORE tell deepcoder to use this for aud generation. indiaqn english authentic voice...
```

#### Prompt 10 | 2026-10-25T13:37:19Z

```text
make sue there are no placeholder what is ti Strengths

    Excellent elimination of conversational filler words like 'um' and 'like'.
    High vocabulary variation showing linguistic flexibility.
    Ideal conversational cadence around 130 words per minute.
    Naturally integrated technical and formal vocabulary suited for professional dialogue.

Target Improvements

Executive Vocabulary Upgrades
Colloquial Phrase	Executive Upgrade
think 	hypothesize / deduce
make sure 	verify / substantiate where o add gemini api  key ijn admin?
```

#### Prompt 11 | 2026-10-25T13:58:07Z

```text
continue /boost  /frontend-design /claude-fable-5 /claude-deep-reasoning /Claude-Design-Sys-Prompt /frontend-design /frontend-dev-guidelines /web-artifacts-builder
```

#### Prompt 12 | 2026-10-25T16:41:09Z

```text
continue
```

#### Prompt 13 | 2026-10-25T16:48:51Z

<details><summary><b>Large Prompt Payload (click to expand)</b></summary>

```html
use better font search web how to make aestetic 3d website not genereric or ai slop /dev-browser  and use all skills related to it better colour palate like yellow aesthetic , not ai like <!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>VERBUM PREMIER | The Global Career Architecture Platform</title>
<!-- Fonts & Google Icons -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS CDN with container queries & forms -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Configuration matching design tokens -->
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "on-primary-fixed": "#001551",
            "on-tertiary-fixed": "#25005a",
            "primary-container": "#1d4ed8",
            "surface-dim": "#10131a",
            "primary": "#b7c4ff",
            "tertiary": "#d2bbff",
            "error": "#ffb4ab",
            "surface-bright": "#363941",
            "inverse-primary": "#2151da",
            "surface-container-high": "#272a32",
            "inverse-surface": "#e1e2ec",
            "primary-fixed-dim": "#b7c4ff",
            "surface": "#10131a",
            "tertiary-fixed-dim": "#d2bbff",
            "on-primary": "#002682",
            "on-secondary": "#003825",
            "on-primary-container": "#cad3ff",
            "secondary-fixed": "#85f8c4",
            "outline-variant": "#434655",
            "surface-variant": "#32353d",
            "background": "#10131a",
            "on-error-container": "#ffdad6",
            "secondary": "#68dba9",
            "surface-tint": "#b7c4ff",
            "on-secondary-container": "#00311f",
            "on-error": "#690005",
            "on-background": "#e1e2ec",
            "inverse-on-surface": "#2d3038",
            "on-surface": "#e1e2ec",
            "secondary-container": "#25a475",
            "on-tertiary-container": "#dfccff",
            "surface-container-low": "#191b23",
            "tertiary-container": "#712ae2",
            "on-secondary-fixed": "#002114",
            "surface-container-highest": "#32353d",
            "on-tertiary-fixed-variant": "#5a00c6",
            "surface-container-lowest": "#0b0e15",
            "on-surface-variant": "#c4c5d7",
            "on-tertiary": "#3f008e",
            "on-secondary-fixed-variant": "#005137",
            "secondary-fixed-dim": "#68dba9",
            "primary-fixed": "#dce1ff",
            "on-primary-fixed-variant": "#0039b5",
            "error-container": "#93000a",
            "outline": "#8e90a0",
            "surface-container": "#1d1f27",
            "tertiary-fixed": "#eaddff"
          },
          borderRadius: {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
          spacing: {
            "space-xs": "0.25rem",
            "space-sm": "0.5rem",
            "margin": "3rem",
            "space-xl": "2.5rem",
            "margin-tablet": "2rem",
            "margin-mobile": "1.25rem",
            "space-lg": "1.5rem",
            "gutter": "1.5rem",
            "gutter-sm": "1rem",
            "space-md": "1rem"
          },
          fontFamily: {
            "body-sm": ["Inter"],
            "headline-md": ["Plus Jakarta Sans"],
            "display-xl": ["Plus Jakarta Sans"],
            "body-md": ["Inter"],
            "label-sm": ["Inter"],
            "body-lg": ["Inter"],
            "headline-lg": ["Plus Jakarta Sans"],
            "headline-lg-mobile": ["Plus Jakarta Sans"],
            "display-xl-mobile": ["Plus Jakarta Sans"],
            "label-md": ["Inter"],
            "headline-sm": ["Plus Jakarta Sans"]
          },
          fontSize: {
            "body-sm": ["13px", { lineHeight: "20px", letterSpacing: "0.005em", fontWeight: "400" }],
            "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "600" }],
            "display-xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "800" }],
            "body-md": ["15px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
            "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "500" }],
            "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "400" }],
            "headline-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
            "headline-lg-mobile": ["28px", { lineHeight: "34px", letterSpacing: "-0.015em", fontWeight: "700" }],
            "display-xl-mobile": ["38px", { lineHeight: "44px", letterSpacing: "-0.025em", fontWeight: "800" }],
            "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" }],
            "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }]
          }
        }
      }
    }
  </script>
<style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
    }
    html {
      scroll-behavior: smooth;
    }
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #0b0e15;
    }
    ::-webkit-scrollbar-thumb {
      background: #272a32;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #434655;
    }
    .obsidian-frost {
      background: rgba(17, 22, 34, 0.72);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    .subtle-ring {
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
    }
  </style>
</head>
<body class="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-white min-h-screen relative overflow-x-hidden">
<!-- Live Top Scroll Progress Indicator -->
<div class="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-[60] w-0 transition-all duration-75" id="scroll-progress-bar"></div>
<!-- TOP APP BAR (Shared Components JSON Anchor) -->
<header class="bg-surface-dim/80 dark:bg-surface-dim/80 backdrop-blur-md docked full-width top-0 fixed z-50 border-b border-outline-variant/30 flat no shadows">
<div class="w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto flex items-center justify-between h-16">
<!-- Brand & Seal (Interactive 5-Click Admin Trigger) -->
<div class="flex items-center gap-space-sm cursor-pointer select-none" id="brand-logo-seal" title="Institutional Seal">
<div class="w-9 h-9 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary relative overflow-hidden group">
<span class="material-symbols-outlined text-[20px]">shield</span>
<div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div>
<span class="text-headline-sm font-headline-md font-bold tracking-tight text-on-surface dark:text-on-surface flex items-center gap-2">
            VERBUM PREMIER
            <span class="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-primary-container/20 text-primary border border-primary/30 font-semibold hidden sm:inline-block">Institutional</span>
</span>
</div>
</div>
<!-- Navigation Links from JSON Anchor -->
<nav class="hidden md:flex items-center space-x-6 text-label-md font-label-md">
<a class="text-primary dark:text-primary border-b-2 border-primary dark:border-primary pb-1 font-semibold" href="#sectors">Sectors</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#speech-lab">Speech Lab</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#roleplay">Roleplay</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#benchmarking">Benchmarking</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#roadmap">Roadmap</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#telemetry">Telemetry</a>
</nav>
<!-- Trailing Action Cluster -->
<div class="flex items-center gap-space-sm">
<!-- Theme Switcher Pill -->
<div class="flex items-center bg-surface-container-low rounded-lg p-0.5 border border-outline-variant/30 text-xs text-on-surface-variant">
<button class="px-2 py-1 rounded bg-surface-container-high text-on-surface font-medium transition-all" id="theme-btn-cosmic" onclick="switchTheme('cosmic')" title="Cosmic Dark">Cosmic</button>
<button class="px-2 py-1 rounded hover:text-on-surface transition-all" id="theme-btn-emerald" onclick="switchTheme('emerald')" title="Emerald Bio">Bio</button>
<button class="px-2 py-1 rounded hover:text-on-surface transition-all" id="theme-btn-solar" onclick="switchTheme('solar')" title="Solar Gold">Solar</button>
</div>
<!-- Trailing Icon Actions from JSON -->
<button class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high/50 hover:text-on-surface transition-all active:scale-95" id="admin-modal-trigger" title="Admin Console">
<span class="material-symbols-outlined text-[20px]">tune</span>
</button>
<button class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high/50 hover:text-on-surface transition-all active:scale-95 relative" title="Notifications">
<span class="material-symbols-outlined text-[20px]">notifications</span>
<span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary"></span>
</button>
<!-- Primary Action Button from JSON -->
<a class="hidden sm:inline-flex items-center justify-center bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-4 py-2 rounded-lg active:scale-95 transition-all shadow-[0_0_16px_rgba(29,78,216,0.35)]" href="#speech-lab">
          Launch Simulation
        </a>
</div>
</div>
</header>
<!-- MAIN CANVAS -->
<main class="relative pt-16">
<!-- ========================================== -->
<!-- SECTION 1: HERO & MISSION WITH WEBGL SHADER -->
<!-- ========================================== -->
<section class="relative min-h-[942px] flex items-center justify-center overflow-hidden border-b border-outline-variant/20 px-margin-mobile md:px-margin-tablet lg:px-margin py-20">
<!-- Shader Background Tag (Injected exactly per specification) -->
<!-- STITCH_SHADER_START:ANIMATION_2 class="absolute inset-0 w-full h-full opacity-60 pointer-events-none" -->
<div class="absolute inset-0 w-full h-full opacity-60 pointer-events-none" style="display:block;">
<canvas id="shader-canvas-ANIMATION_2" style="display:block;width:100%;height:100%"></canvas>
<script>
(function() {
  const canvas = document.getElementById('shader-canvas-ANIMATION_2');

  // Sync the WebGL drawing-buffer size with the CSS-driven layout size.
  // This fires on initial layout and whenever the element is resized.
  function syncSize() {
    const w = canvas.clientWidth  || 1280;
    const h = canvas.clientHeight || 720;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width  = w;
      canvas.height = h;
    }
  }
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(syncSize).observe(canvas);
  }
  syncSize();

  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) return;
  const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
  const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
               mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 4; ++i) {
        v += a * noise(p);
        p = rot * p * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    vec2 mouse = u_mouse / u_resolution;
    p += (mouse - 0.5) * 0.3;

    float t = u_time * 0.15;
    
    vec2 q = vec2(0.0);
    q.x = fbm(p + 0.1 * t);
    q.y = fbm(p + vec2(1.0));

    vec2 r = vec2(0.0);
    r.x = fbm(p + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
    r.y = fbm(p + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);

    float f = fbm(p + r);

    // Deep cosmic palette with luminous cyan, royal cobalt, and magenta-violet
    vec3 col = mix(vec3(0.04, 0.06, 0.10), vec3(0.08, 0.12, 0.22), clamp(f * f * 2.5, 0.0, 1.0));
    col = mix(col, vec3(0.12, 0.38, 0.72), clamp(length(q), 0.0, 1.0) * 0.45);
    col = mix(col, vec3(0.05, 0.75, 0.70), clamp(length(r.x), 0.0, 1.0) * 0.35);
    col = mix(col, vec3(0.55, 0.20, 0.85), clamp(f * 0.8, 0.0, 1.0) * 0.25);

    // Subtle star dust shimmer
    float n = hash(uv * 400.0 + fract(u_time * 0.02));
    if (n > 0.994) {
        col += vec3(0.6, 0.8, 1.0) * fract(sin(u_time * 2.0 + uv.x * 50.0) * 0.5 + 0.5) * 0.4;
    }

    // Subtle edge vignette
    float vig = 1.0 - smoothstep(0.4, 1.4, length(uv - 0.5) * 1.3);
    col *= vig;

    gl_FragColor = vec4(col, 0.92);
}`;
  function cs(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const pos = gl.getAttribLocation(prog, 'a_position');
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
  const uTime = gl.getUniformLocation(prog, 'u_time');
  const uRes = gl.getUniformLocation(prog, 'u_resolution');
  const uMouse = gl.getUniformLocation(prog, 'u_mouse');

  // u_mouse is in pixel coordinates matching u_resolution (ShaderToy convention).
  // Shaders that need normalized coords should use: u_mouse / u_resolution.
  let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
  window.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width && rect.height) {
      const nx = (event.clientX - rect.left) / rect.width;
      const ny = 1.0 - (event.clientY - rect.top) / rect.height;
      mouse.x = nx * canvas.width;
      mouse.y = ny * canvas.height;
    }
  });

  function render(t) {
    if (typeof ResizeObserver === 'undefined') syncSize();
    gl.viewport(0, 0, canvas.width, canvas.height);
    if (uTime) gl.uniform1f(uTime, t * 0.001);
    if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
    if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }
  render(0);
})();
</script>
</div>
<!-- STITCH_SHADER_END:ANIMATION_2 -->
<!-- Atmospheric Gradient Overlays -->
<div class="absolute inset-0 bg-gradient-to-b from-surface-dim/40 via-surface/60 to-surface-container-lowest pointer-events-none"></div>
<div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
<!-- Hero Content -->
<div class="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
<!-- Live Benchmark Badge -->
<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container/80 border border-primary/30 backdrop-blur-md mb-6 animate-pulse">
<span class="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
<span class="text-label-sm font-label-sm text-primary tracking-widest uppercase">Global Career Architecture Platform</span>
</div>
<!-- Headline -->
<h1 class="text-display-xl-mobile md:text-display-xl font-display-xl text-on-surface font-extrabold tracking-tight max-w-4xl text-balance">
          The Sovereign Voice: <br class="hidden md:inline"/>How English Mastery Commands the World's Highest-Value Careers
        </h1>
<!-- Subtitle -->
<p class="mt-6 text-body-md md:text-body-lg font-body-lg text-on-surface-variant max-w-3xl text-balance">
          Beyond conventional fluency — explore how linguistic precision, narrative authority, and international cadence drive multimillion-dollar careers in media, creative arts, high-tech, and global diplomacy.
        </p>
<!-- Stat Chips / Value Propositions -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 my-10 w-full max-w-3xl">
<div class="p-4 rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-[24px]">payments</span>
<div>
<div class="text-headline-sm font-headline-sm font-bold text-on-surface">₹18L - ₹1.4Cr+</div>
<div class="text-label-sm text-on-surface-variant">Global Compensation Range</div>
</div>
</div>
<div class="p-4 rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left flex items-start gap-3">
<span class="material-symbols-outlined text-secondary text-[24px]">workspace_premium</span>
<div>
<div class="text-headline-sm font-headline-sm font-bold text-on-surface">16+ High-Impact</div>
<div class="text-label-sm text-on-surface-variant">Sovereign Professions</div>
</div>
</div>
<div class="p-4 rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left flex items-start gap-3">
<span class="material-symbols-outlined text-tertiary text-[24px]">neurology</span>
<div>
<div class="text-headline-sm font-headline-sm font-bold text-on-surface">5-Tier Adaptive</div>
<div class="text-label-sm text-on-surface-variant">AI Latency Architecture</div>
</div>
</div>
</div>
<!-- CTA Buttons -->
<div class="flex flex-wrap items-center justify-center gap-4">
<a class="inline-flex items-center gap-2 bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-body-md px-6 py-3.5 rounded-lg shadow-[0_0_24px_rgba(29,78,216,0.45)] transition-all active:scale-95" href="#sectors">
<span class="material-symbols-outlined text-[20px]">explore</span>
            Explore Career Matrices
          </a>
<a class="inline-flex items-center gap-2 bg-surface-container-high/70 hover:bg-surface-container-high border border-outline-variant text-on-surface font-semibold text-body-md px-6 py-3.5 rounded-lg backdrop-blur-md transition-all active:scale-95" href="#speech-lab">
<span class="material-symbols-outlined text-[20px]">mic</span>
            Launch Speech Benchmarking
          </a>
<a class="inline-flex items-center gap-2 bg-transparent hover:bg-surface-container/40 border border-outline-variant/40 text-on-surface-variant hover:text-on-surface font-medium text-body-md px-4 py-3.5 rounded-lg transition-all" href="#qr-portal">
<span class="material-symbols-outlined text-[20px]">qr_code_2</span>
            Scan Mobile QR
          </a>
</div>
</div>
</section>
<!-- ======================================================== -->
<!-- SECTION 2: THE DEFINITIVE CAREER DIRECTORY (BENTO GRID) -->
<!-- ======================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="sectors">
<!-- Section Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">domain</span>
            Career Architecture Matrix
          </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight">
            High-Stakes Disciplines Built on Articulation
          </h2>
<p class="text-body-md text-on-surface-variant max-w-2xl mt-2">
            Fluency is no longer remedial. In high-value international economies, vocal authority and syntactic precision dictate compensation tier and room command.
          </p>
</div>
<!-- Filter Tabs -->
<div class="flex flex-wrap items-center bg-surface-container-lowest p-1 rounded-xl border border-outline-variant/30 gap-1" id="career-filter-tabs">
<button class="filter-btn active px-3.5 py-1.5 rounded-lg text-label-md font-label-md bg-surface-container-high text-on-surface transition-all" onclick="filterCareers('all')">All Sectors</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('entertainment')">Entertainment &amp; Media</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('narrative')">Writing &amp; Narrative</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('tech')">Tech &amp; Aviation</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('corporate')">Corporate &amp; Law</button>
</div>
</div>
<!-- Career Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="career-grid">
<!-- Card 1: Screenwriter / OTT Scriptwriter -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹12L - ₹65L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Screenwriter / OTT Scriptwriter</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Dialogue cadence, subtext mastery &amp; international pitch rooms for global streaming platforms like Netflix &amp; HBO.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">FTII / SRFTI / NYU Tisch</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">JET / Creative Portfolio / SAT</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Subtext architecture, dramatic tension, and pitching to US/UK showrunners.</span>
</div>
</div>
</div>
<!-- Card 2: Narrative Designer & Game Writer -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="narrative">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Writing &amp; Narrative</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹15L - ₹80L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Narrative Designer &amp; Game Writer</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">World-building lore, branching dialogue trees &amp; interactive rhetoric for AAA studios and transmedia universes.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">DigiPen / NID / BITS Pilani</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">NID DAT / Interactive Portfolios</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Complex conditional logic phrased in sharp, emotional English dialogue.</span>
</div>
</div>
</div>
<!-- Card 3: Novelist & Fiction Author -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="narrative">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Writing &amp; Narrative</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹10L - ₹1Cr+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Novelist &amp; Fiction Author</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Syntax rhythm, narrative tension &amp; international literary syndication across London and New York publishing houses.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">Iowa Writers' / Ashoka / Columbia</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">Ashoka AAT / Literary Manuscripts</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Global cultural currency and licensing IP rights internationally.</span>
</div>
</div>
</div>
<!-- Card 4: Lyricist & Songwriter -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹8L - ₹50L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Lyricist &amp; Songwriter</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Poetic prosody, phonetic rhythm &amp; cross-cultural resonance for international music labels and synchronizations.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">Berklee / KM Music Conservatory</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">Audition Portfolios / AP Music</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Linguistic meter, assonance, and cross-border emotional resonance.</span>
</div>
</div>
</div>
<!-- Card 5: Voice Actor & Audiobook Narrator -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹12L - ₹45L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Voice Actor &amp; Audiobook Narrator</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Vocal coloration, Received Pronunciation (RP) &amp; dialect agility for Audible, BBC audiobooks, and video game characters.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">NSD / Barry John / LAMDA</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">Acoustic Auditions / Voice Reels</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Precision articulation, phoneme control, and vocal endurance.</span>
</div>
</div>
</div>
<!-- Card 6: Radio Jockey & Podcast Host -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹9L - ₹35L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Radio Jockey &amp; Podcast Host</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Impromptu articulation, acoustic pacing &amp; charismatic presence commanding syndicated multi-million-listen streams.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">Jamia MCRC / IIMC / London Met</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">JMI Entrance / Studio Pilots</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Real-time conversational agility and rapid lexical retrieval.</span>
</div>
</div>
</div>
<!-- Card 7: Dubbing, Subtitle Translator & Localizer -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="narrative">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Writing &amp; Narrative</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹8L - ₹28L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Dubbing &amp; Subtitle Localizer</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Cultural idioms, colloquial nuance &amp; lip-flap synchronization bridging Asian &amp; Western global entertainment pipelines.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">EFLU / JNU / SOAS London</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">CUET-PG / Translation Portfolios</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Preserving comedic timing, subtext, and syllabic cadence across languages.</span>
</div>
</div>
</div>
<!-- Card 8: Corporate Lawyer & International Arbitrator -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="corporate">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/15 border border-tertiary/30 text-tertiary">Corporate &amp; Law</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹18L - ₹1.2Cr+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Corporate Lawyer &amp; Arbitrator</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Statutory interpretation, precision contract drafting &amp; high-pressure verbal cross-examinations in Geneva and London tribunals.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">NLSIU / Oxford / Harvard Law</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">CLAT / LSAT / LNAT</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Single misplaced prepositions swing multi-million-dollar arbitration liabilities.</span>
</div>
</div>
</div>
<!-- Card 9: Commercial Airline Pilot / Captain -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="tech">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Tech &amp; Aviation</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹24L - ₹85L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Commercial Airline Pilot / Captain</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Standard ICAO radiotelephony, non-ambiguous situational commands &amp; crisis assertiveness in saturated transatlantic air corridors.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">IGRUA / CAE / Oxford Aviation</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">DGCA CPL / ICAO English Level 6</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Absolute acoustic clarity eliminates runway incursions and mid-air risk.</span>
</div>
</div>
</div>
<!-- Card 10: AI Prompt Engineer & NLP Researcher -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="tech">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Tech &amp; Aviation</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹20L - ₹95L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">AI Prompt Engineer &amp; NLP Lead</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Semantic ambiguity resolution, few-shot synthetic reasoning &amp; high-parameter alignment steering generative frontier models.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">IIT Bombay / Stanford / CMU</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">JEE Advanced / GRE / GitHub Research</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Precise linguistic constraints steer billion-dollar autonomous compute fleets.</span>
</div>
</div>
</div>
</div>
</section>
<!-- ============================================================== -->
<!-- SECTION 3: THE VERBUM AI SPEECH LAB & ACOUSTIC TELEPROMPTER -->
<!-- ============================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="speech-lab">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-secondary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">equalizer</span>
          Real-Time Phonetic Analysis
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">The Verbum AI Speech Lab</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Simulate high-stakes acoustic conditions. Train rhythm, cadential variation, and lexical authority with real-time waveform telemetry.
        </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Left 7 Cols: Teleprompter & Live Waveform -->
<div class="lg:col-span-7 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8 flex flex-col justify-between h-full">
<div>
<!-- Teleprompter Header -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant/20">
<div>
<span class="text-label-sm uppercase tracking-wider text-on-surface-variant">Selected Script Protocol</span>
<h4 class="text-headline-sm font-headline-sm text-on-surface font-semibold" id="script-title-display">Hollywood Pitch: Sci-Fi Pilot</h4>
</div>
<!-- Script Selector Dropdown -->
<select class="bg-surface-container-high border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary focus:outline-none" id="teleprompter-script-selector" onchange="updateTeleprompterScript(this.value)">
<option value="hollywood">Hollywood Pitch (Sci-Fi Pilot)</option>
<option value="aviation">Aviation Emergency Clearance</option>
<option value="court">Supreme Court Oral Argument</option>
<option value="boardroom">Transnational M&amp;A Defense</option>
</select>
</div>
<!-- Teleprompter Reading Box -->
<div class="my-6 p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/20 min-h-[140px] flex items-center">
<p class="text-body-lg text-on-surface font-medium leading-relaxed transition-all duration-300" id="teleprompter-text">
                "Ladies and gentlemen of the network room: The series begins in 2088 inside orbital salvage bay nine. What appears to be an abandoned cryo-vessel is essentially carrying the sole uncorrupted neural seed of humanity. We are not selling a space opera; we are selling the final legal trial of biological consciousness."
              </p>
</div>
<!-- Waveform Canvas -->
<div class="relative w-full h-24 bg-surface-container-lowest rounded-xl border border-outline-variant/20 overflow-hidden flex items-center justify-center">
<canvas class="w-full h-full" id="waveform-canvas"></canvas>
<div class="absolute inset-0 flex items-center justify-center text-label-sm text-on-surface-variant/50 pointer-events-none" id="recording-status-overlay">
                Ready for acoustic input. Press 'Record Voice Sample'.
              </div>
</div>
</div>
<!-- Controls -->
<div class="mt-6 pt-6 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-4">
<div class="flex items-center gap-3">
<button class="inline-flex items-center gap-2 bg-error hover:bg-error/90 text-on-error font-semibold text-label-md px-5 py-2.5 rounded-lg transition-all active:scale-95 shadow-[0_0_12px_rgba(255,180,171,0.2)]" id="record-btn" onclick="toggleRecording()">
<span class="material-symbols-outlined text-[18px]" id="record-icon">mic</span>
<span id="record-text">Record Voice Sample</span>
</button>
<button class="inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-semibold text-label-md px-4 py-2.5 rounded-lg transition-all active:scale-95" onclick="runAcousticAnalysis()">
<span class="material-symbols-outlined text-[18px]">neurology</span>
                Analyze Cadence
              </button>
</div>
<button class="text-label-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1" onclick="resetSpeechLab()">
<span class="material-symbols-outlined text-[16px]">restart_alt</span> Reset Teleprompter
            </button>
</div>
</div>
<!-- Right 5 Cols: Real-Time Feedback Telemetry Dashboard -->
<div class="lg:col-span-5 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8">
<div class="flex items-center justify-between mb-6">
<h4 class="text-headline-sm font-headline-sm text-on-surface font-bold flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[22px]">analytics</span>
              Acoustic Telemetry
            </h4>
<span class="text-label-sm font-mono text-secondary px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20">LIVE ENGINE</span>
</div>
<!-- Metric 1: Fluency Index -->
<div class="mb-5">
<div class="flex justify-between items-center mb-1.5 text-label-md">
<span class="text-on-surface-variant">Fluency Index</span>
<span class="font-bold text-primary font-mono" id="val-fluency">94 / 100</span>
</div>
<div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div class="bg-primary h-full rounded-full transition-all duration-700" id="bar-fluency" style="width: 94%"></div>
</div>
<span class="text-[11px] text-on-surface-variant/70 mt-1 inline-block">Unbroken prosody, native sentence pitch architecture</span>
</div>
<!-- Metric 2: Filler Word Counter -->
<div class="mb-5 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-between">
<div>
<div class="text-label-md text-on-surface-variant">Filler Words Flagged</div>
<div class="text-[12px] text-error font-medium" id="filler-detected-label">1 detected: <span class="underline">"essentially"</span></div>
</div>
<div class="w-10 h-10 rounded-lg bg-error/10 border border-error/20 flex items-center justify-center text-error font-mono font-bold text-lg" id="val-fillers">
              1
            </div>
</div>
<!-- Metric 3: Words Per Minute -->
<div class="mb-5">
<div class="flex justify-between items-center mb-1.5 text-label-md">
<span class="text-on-surface-variant">Speech Rate (WPM)</span>
<span class="font-bold text-secondary font-mono" id="val-wpm">138 WPM</span>
</div>
<div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full transition-all duration-700" id="bar-wpm" style="width: 76%"></div>
</div>
<span class="text-[11px] text-on-surface-variant/70 mt-1 inline-block">Target executive benchmark: 130 – 145 WPM</span>
</div>
<!-- Metric 4: Lexical Density -->
<div class="mb-5">
<div class="flex justify-between items-center mb-1.5 text-label-md">
<span class="text-on-surface-variant">Lexical Density (Advanced Vocabulary)</span>
<span class="font-bold text-tertiary font-mono" id="val-lexical">88%</span>
</div>
<div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div class="bg-tertiary h-full rounded-full transition-all duration-700" id="bar-lexical" style="width: 88%"></div>
</div>
<span class="text-[11px] text-on-surface-variant/70 mt-1 inline-block">Sophisticated tier-3 nomenclature dominance</span>
</div>
<!-- Phonetic Clarity Badge -->
<div class="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-body-sm text-on-surface-variant">Phonetic Articulation</span>
<span class="px-2.5 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-label-sm font-semibold flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              98.2% Received Clear
            </span>
</div>
</div>
</div>
</section>
<!-- ====================================================== -->
<!-- SECTION 4: CONVERSATIONAL ROLEPLAY MATRIX -->
<!-- ====================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="roleplay">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">forum</span>
          High-Pressure Dialogue Sandbox
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Conversational Roleplay Matrix</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Test real-time diplomatic de-escalation, rapid venture capital persuasion, and aviation emergency assertiveness against institutional AI personas.
        </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Persona Selector (3 Cols) -->
<div class="lg:col-span-4 space-y-3">
<h4 class="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mb-2">Select Simulation Scenario</h4>
<!-- Persona 1 -->
<div class="p-4 rounded-xl bg-surface-container-high border-2 border-primary cursor-pointer transition-all" id="persona-founder" onclick="selectPersona('founder')">
<div class="flex items-center justify-between">
<span class="font-headline-sm font-semibold text-on-surface">Tech Founder Seed Pitch</span>
<span class="material-symbols-outlined text-primary text-[20px]">rocket_launch</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Skeptical Silicon Valley partner interrogating your unit economics &amp; moat.</p>
</div>
<!-- Persona 2 -->
<div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-outline cursor-pointer transition-all" id="persona-boardroom" onclick="selectPersona('boardroom')">
<div class="flex items-center justify-between">
<span class="font-headline-sm font-semibold text-on-surface">Hostile Boardroom Stakeholder</span>
<span class="material-symbols-outlined text-tertiary text-[20px]">gavel</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Interrogating a sovereign compliance breach during transnational merger.</p>
</div>
<!-- Persona 3 -->
<div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-outline cursor-pointer transition-all" id="persona-aviation" onclick="selectPersona('aviation')">
<div class="flex items-center justify-between">
<span class="font-headline-sm font-semibold text-on-surface">Anxious International Passenger</span>
<span class="material-symbols-outlined text-secondary text-[20px]">flight_takeoff</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Mid-air turbulence crisis de-escalation using authoritative reassurance.</p>
</div>
</div>
<!-- Chat Sandbox (8 Cols) -->
<div class="lg:col-span-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 flex flex-col justify-between h-[480px]">
<!-- Sandbox Header -->
<div class="flex items-center justify-between pb-4 border-b border-outline-variant/20">
<div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-secondary"></div>
<div>
<div class="text-body-md font-semibold text-on-surface" id="active-persona-name">Marc Andreessen Protocol (Venture Partner)</div>
<div class="text-label-sm text-on-surface-variant" id="active-persona-status">Strict tone: Expects tight narrative structure without fluff.</div>
</div>
</div>
<span class="text-label-sm font-mono text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20">Active Node</span>
</div>
<!-- Message History -->
<div class="flex-1 overflow-y-auto space-y-4 py-4 pr-2" id="roleplay-messages">
<!-- Persona message -->
<div class="flex items-start gap-3">
<div class="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined text-[18px]">smart_toy</span>
</div>
<div class="bg-surface-container p-3.5 rounded-xl border border-outline-variant/30 max-w-xl text-body-sm text-on-surface leading-relaxed">
                "We’ve reviewed your slide on synthetic language telemetry. Every founder uses the word 'revolutionary'. Exactly what linguistic moat protects your model against frontier open-weights when deployed in cross-border arbitration?"
              </div>
</div>
</div>
<!-- Suggested Quick Responses & Input -->
<div>
<div class="flex flex-wrap gap-2 mb-3" id="roleplay-suggestions">
<button class="text-label-sm bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface-variant hover:text-on-surface px-2.5 py-1 rounded transition-colors" onclick="fillRoleplayPrompt('Our proprietary value is not raw compute; it is the 400,000 verified jurisdictional arbitration transcripts we parsed under strict legal privilege.')">
                "Our value is in the 400k verified jurisdictional transcripts..."
              </button>
<button class="text-label-sm bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface-variant hover:text-on-surface px-2.5 py-1 rounded transition-colors" onclick="fillRoleplayPrompt('Open weights hallucinate under statutory ambiguity; our architecture guarantees zero semantic drift.')">
                "Open weights drift under statutory ambiguity..."
              </button>
</div>
<!-- Input bar -->
<div class="flex items-center gap-2">
<input class="flex-1 bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-on-surface-variant/40 text-body-sm rounded-lg px-4 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" id="roleplay-input" placeholder="Type your strategic verbal argument or use speech-to-text..." type="text"/>
<button class="bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-4 py-2.5 rounded-lg transition-all active:scale-95 flex items-center gap-1.5 shrink-0" onclick="sendRoleplayMessage()">
<span>Deliver</span>
<span class="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</div>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- SECTION 5: BRITISH RECEIVED PRONUNCIATION & MASTER ORATOR BENCHMARK -->
<!-- ========================================================================= -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="benchmarking">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-tertiary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">record_voice_over</span>
          Acoustic Gold Standards
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Master Orator &amp; Received Pronunciation Benchmark</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Study the cadence, vowel placement, and rhythmic suspension of the world's most captivating public speakers. Contrast your voiceprint against timeless standards.
        </p>
</div>
<!-- Orators Grid (6 Profiles) -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<!-- Orator 1: David Attenborough -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-secondary">Naturalist &amp; Broadcaster</span>
<span class="text-label-sm font-mono text-on-surface-variant">112 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Sir David Attenborough</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Reverent pauses, breath modulation &amp; dramatic sibilance creating universal intimacy.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Suspended Wonder</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('attenborough')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 2: Winston Churchill -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-primary">Statesman &amp; Nobel Laureate</span>
<span class="text-label-sm font-mono text-on-surface-variant">124 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Winston Churchill</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Alliterative heavy beats, Anglo-Saxon monosyllables &amp; martial rhetorical climaxes.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Sovereign Defiance</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('churchill')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div> /boost 
</div>
<!-- Orator 3: Dame Maggie Smith -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-tertiary">Classical Stage Dame</span>
<span class="text-label-sm font-mono text-on-surface-variant">130 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Dame Maggie Smith</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Dry ironic inflection, razor-sharp dental stops &amp; supreme Received Pronunciation (RP).</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Aristocratic Wit</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('maggie')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 4: Christopher Hitchens -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-primary">Polemicist &amp; Essayist</span>
<span class="text-label-sm font-mono text-on-surface-variant">148 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Christopher Hitchens</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Uninterrupted periodic syntax, spontaneous Latinate clauses &amp; combative dialectic speed.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Dialectical Precision</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('hitchens')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 5: Shashi Tharoor -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-secondary">Diplomat &amp; Parliamentarian</span>
<span class="text-label-sm font-mono text-on-surface-variant">142 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Dr. Shashi Tharoor</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Exuberant sesquipedalian lexicon, mellifluous Indian-RP hybrid cadence &amp; diplomatic panache.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Lexical Flourish</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('tharoor')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 6: Rowan Atkinson -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-tertiary">Comedic Satirist &amp; Orator</span>
<span class="text-label-sm font-mono text-on-surface-variant">126 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Rowan Atkinson</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Hyper-articulated plosives (P, B, T, K), theatrical timing &amp; clinical comic delivery.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Plosive Mastery</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('atkinson')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
</div>
<!-- Compare Your Own Cadence Bench -->
<div class="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30">
<div class="max-w-2xl mb-6">
<h4 class="text-headline-sm font-headline-sm text-on-surface font-semibold">Contrast Your Audio Stream Against the Masters</h4>
<p class="text-body-sm text-on-surface-variant mt-1">Upload a short recording (under 4MB) or paste your verbatim transcript to calculate your lexical rhythm similarity vector.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="border-2 border-dashed border-outline-variant/40 hover:border-primary/60 p-6 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-surface-container-low/40">
<span class="material-symbols-outlined text-primary text-[32px] mb-2">cloud_upload</span>
<span class="text-body-sm font-medium text-on-surface">Upload Voice File (.mp3, .wav under 4MB)</span>
<span class="text-label-sm text-on-surface-variant/70 mt-1">Audio is transiently processed in RAM and discarded immediately.</span>
</div>
<div class="flex flex-col gap-2">
<textarea class="w-full h-24 bg-surface-container-low border border-outline-variant/30 rounded-xl p-3 text-body-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none" placeholder="Or paste 30-60 seconds of your spoken transcript here to compare cadential entropy..."></textarea>
<button class="self-end bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-semibold text-label-md px-4 py-2 rounded-lg transition-all active:scale-95" onclick="simulateMasterComparison()">
              Compute Acoustic Distance
            </button>
</div>
</div>
<div class="hidden mt-6 p-4 rounded-xl bg-surface-container border border-primary/30 flex items-center justify-between text-body-sm" id="comparison-result">
<span class="text-on-surface">Acoustic resonance calculated: <strong>81.4% match to Received Pronunciation standard</strong>. Minimal glottal stops detected.</span>
<span class="text-secondary font-mono font-bold">Passed Level 6 ICAO/BBC Metric</span>
</div>
</div>
</section>
<!-- ============================================================== -->
<!-- SECTION 6: PERSONALIZED CLASS-TO-CAREER STRATEGIC ROADMAP -->
<!-- ============================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="roadmap">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">alt_route</span>
          Strategic Trajectory Planner
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Class-to-Career Strategic Roadmap</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Map foundational linguistic milestones directly to international universities and institutional peak compensation.
        </p>
</div>
<!-- Roadmap Form Selector -->
<div class="max-w-3xl mx-auto p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 mb-10">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label class="block text-label-sm uppercase tracking-wider text-on-surface-variant mb-1.5">Current Academic Cohort</label>
<select class="w-full bg-surface-container-high border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" id="cohort-selector" onchange="generateRoadmap()">
<option value="class8">Class 8</option>
<option value="class9">Class 9</option>
<option selected="" value="class10">Class 10</option>
<option value="class11">Class 11</option>
<option value="class12">Class 12</option>
<option value="undergrad">Undergraduate Scholar</option>
</select>
</div>
<div>
<label class="block text-label-sm uppercase tracking-wider text-on-surface-variant mb-1.5">Target Sovereign Trajectory</label>
<select class="w-full bg-surface-container-high border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" id="trajectory-selector" onchange="generateRoadmap()">
<option value="screenwriter">Screenwriter &amp; Showrunner (OTT)</option>
<option selected="" value="lawyer">Corporate Lawyer &amp; Global Arbitrator</option>
<option value="pilot">Commercial Airline Captain</option>
<option value="narrative">AAA Narrative Game Designer</option>
<option value="diplomat">International Envoy &amp; Public Orator</option>
</select>
</div>
</div>
</div>
<!-- Dynamic 4-Phase Milestone Display -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative" id="roadmap-milestones">
<!-- Phase 1 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-label-md mb-4">1</div>
<span class="text-label-sm text-primary uppercase tracking-wider font-semibold">Phase 1: Vocabulary &amp; Syntax</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase1-title">Legal Latinate Lexicon</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase1-desc">
            Master 1,200 jurisdictional Latin roots, statutory disambiguation, and active analytical parsing.
          </p>
</div>
<!-- Phase 2 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-label-md mb-4 border border-outline-variant">2</div>
<span class="text-label-sm text-secondary uppercase tracking-wider font-semibold">Phase 2: Standardized Testing</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase2-title">CLAT / LNAT Mastery</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase2-desc">
            Target 99.8th percentile in reading comprehension and critical logic under strict timing constraints.
          </p>
</div>
<!-- Phase 3 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-label-md mb-4 border border-outline-variant">3</div>
<span class="text-label-sm text-tertiary uppercase tracking-wider font-semibold">Phase 3: University Specialization</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase3-title">NLSIU / Oxford BCL</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase3-desc">
            Premier moot court representation, international maritime law briefs, and journal publication.
          </p>
</div>
<!-- Phase 4 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-bold text-label-md mb-4 border border-secondary/40">4</div>
<span class="text-label-sm text-secondary uppercase tracking-wider font-semibold">Phase 4: Sovereign Career</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase4-title">International Partner</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase4-desc">
            Command ₹1.2Cr+ partner retainer presiding over transnational commercial disputes in London &amp; Singapore.
          </p>
</div>
</div>
</section>
<!-- ================================================================= -->
<!-- SECTION 7: INTERACTIVE MINI-CHALLENGES (FIX-EMAIL & WORD-OF-DAY) -->
<!-- ================================================================= -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-secondary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">psychology</span>
          Executive Polish Challenges
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Precision Drills: Micro-Refactoring</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Instantaneous executive transformation: Elevate colloquial drafts into razor-sharp institutional memorandums.
        </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Challenge 1: Fix-the-Email Simulator (7 Cols) -->
<div class="lg:col-span-7 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-4">
<span class="text-label-md font-semibold text-on-surface flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">mark_email_read</span>
                Drill: Executive Email Refactor
              </span>
<span class="text-label-sm text-on-surface-variant">Click to identify weak prose</span>
</div>
<!-- Unpolished Email Box -->
<div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-body-sm space-y-3 font-mono">
<div class="text-on-surface-variant/70 text-[12px]">Subject: Hey, about the funding contract we spoke about earlier...</div>
<div class="text-on-surface leading-relaxed" id="email-body-text">
                "Hey Marc, <br/><br/>
                Just wanted to <span class="bg-error/20 text-error px-1 rounded cursor-pointer" title="Colloquial padding">touch base real quick</span> regarding the seed term sheet. We were kind of thinking maybe the valuation cap was <span class="bg-error/20 text-error px-1 rounded cursor-pointer" title="Hesitant qualifier">a bit too low for us</span> given that we are working super hard on this model. Can we chat tomorrow if you have some free time? <br/><br/>
                Thanks a ton,<br/>
                Alex"
              </div>
</div>
<!-- Refactored AI Output Box (Hidden until action) -->
<div class="hidden mt-4 p-5 rounded-xl bg-surface-container border border-secondary/40 text-body-sm space-y-2 animate-fadeIn" id="email-refactored-box">
<div class="text-secondary text-[12px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">verified</span>
                Institutional C-Suite Version
              </div>
<div class="text-on-surface leading-relaxed">
                "Dear Marc,<br/><br/>
                Following our term sheet review, our advisory board has assessed the initial pre-money valuation against our synthetic model’s validated 4x retention. We request aligning the capital cap at ₹35Cr to mirror our Q3 enterprise pipeline. <br/><br/>
                I welcome a brief 10-minute briefing tomorrow at 14:00 UTC.<br/><br/>
                Respectfully,<br/>
                Alexander Vance"
              </div>
</div>
</div>
<div class="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-label-sm text-on-surface-variant">Eliminates 3 passive hedges &amp; 2 conversational diminutives.</span>
<button class="bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-4 py-2.5 rounded-lg transition-all active:scale-95 flex items-center gap-2" id="refactor-btn" onclick="refactorEmail()">
<span class="material-symbols-outlined text-[18px]">auto_fix_high</span>
              AI Refactor
            </button>
</div>
</div>
<!-- Challenge 2: Word-of-the-Day Institutional Lexicon (5 Cols) -->
<div class="lg:col-span-5 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-4">
<span class="text-label-md font-semibold text-tertiary flex items-center gap-2">
<span class="material-symbols-outlined text-[20px]">auto_stories</span>
                Institutional Lexicon
              </span>
<span class="text-label-sm font-mono text-on-surface-variant">Daily C-Suite Entry</span>
</div>
<div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
<div class="flex items-baseline justify-between">
<h3 class="text-headline-lg font-headline-lg font-bold text-on-surface" id="wod-word">Perspicacious</h3>
<span class="text-label-sm font-mono text-primary" id="wod-ipa">/ˌpɜː.spɪˈkeɪ.ʃəs/</span>
</div>
<div class="text-label-sm text-on-surface-variant mt-1" id="wod-pos">Adjective • Latin <em>perspicax</em> (sharp-sighted)</div>
<div class="mt-4 pt-3 border-t border-outline-variant/20">
<div class="text-label-sm font-semibold text-on-surface">Definition:</div>
<p class="text-body-sm text-on-surface-variant mt-0.5" id="wod-def">
                  Having a ready insight into and understanding of complex sovereign or financial affairs.
                </p>
</div>
<div class="mt-4 pt-3 border-t border-outline-variant/20">
<div class="text-label-sm font-semibold text-secondary">Boardroom Application:</div>
<p class="text-body-sm text-on-surface-variant/90 italic mt-0.5" id="wod-example">
                  "The general counsel made a perspicacious intervention, identifying the ambiguous indemnity loophole before contract execution."
                </p>
</div>
</div>
</div>
<!-- Lexicon Cycle Button -->
<div class="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-label-sm text-on-surface-variant">Tier-3 Executive Lexicon</span>
<button class="text-label-md text-primary hover:text-primary-container font-semibold flex items-center gap-1 transition-colors" onclick="cycleWordOfDay()">
              Next Entry <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- SECTION 8: SCHOOL-WIDE SPEECH LEADERBOARD & PRIVACY GOVERNANCE -->
<!-- ========================================================================= -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="telemetry">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">leaderboard</span>
          Articulation Telemetry
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Consortium Speech Leaderboard</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Anonymized articulation benchmarking measuring cadence stability, lexical density, and zero-filler eloquence across secondary cohorts.
        </p>
</div>
<!-- Leaderboard Table -->
<div class="overflow-x-auto rounded-2xl border border-outline-variant/30 bg-surface-container-low mb-8">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-outline-variant/20 text-label-sm uppercase tracking-wider text-on-surface-variant bg-surface-container">
<th class="py-4 px-6">Rank</th>
<th class="py-4 px-6">Delegate Alias</th>
<th class="py-4 px-6">Cohort</th>
<th class="py-4 px-6">Specialized Discipline</th>
<th class="py-4 px-6 text-right">Articulation Score</th>
<th class="py-4 px-6 text-center">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/10 text-body-sm font-medium">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-secondary">01</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-secondary/10 border border-secondary/30 text-secondary flex items-center justify-center text-label-sm font-mono font-bold">AV</span>
                Delegate Orion-9
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 12</td>
<td class="py-4 px-6 text-on-surface">International Arbitration</td>
<td class="py-4 px-6 text-right font-mono font-bold text-secondary">98.4 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-secondary/10 border border-secondary/30 text-secondary font-semibold">Exemplary</span>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-on-surface-variant">02</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center text-label-sm font-mono font-bold">KS</span>
                Delegate Zephyr-4
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 11</td>
<td class="py-4 px-6 text-on-surface">Screenplay &amp; OTT Pitch</td>
<td class="py-4 px-6 text-right font-mono font-bold text-primary">97.1 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-primary/10 border border-primary/30 text-primary font-semibold">Exemplary</span>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-on-surface-variant">03</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary flex items-center justify-center text-label-sm font-mono font-bold">MR</span>
                Delegate Callisto-7
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 10</td>
<td class="py-4 px-6 text-on-surface">Aviation Radiotelephony</td>
<td class="py-4 px-6 text-right font-mono font-bold text-on-surface">95.8 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-surface-container-high text-on-surface-variant border border-outline-variant/30 font-semibold">Verified</span>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-on-surface-variant">04</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center text-label-sm font-mono font-bold">TL</span>
                Delegate Aurora-1
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 12</td>
<td class="py-4 px-6 text-on-surface">Transnational Diplomacy</td>
<td class="py-4 px-6 text-right font-mono font-bold text-on-surface">94.9 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-surface-container-high text-on-surface-variant border border-outline-variant/30 font-semibold">Verified</span>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Verified Privacy Governance Banner -->
<div class="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary text-[26px]">verified_user</span>
<div>
<div class="text-body-sm font-semibold text-on-surface">Transient Audio Governance &amp; Data Protection</div>
<div class="text-label-sm text-on-surface-variant">
              All voice data processed transiently in compliance with strict privacy protocols. No audio is stored permanently.
            </div>
</div>
</div>
<span class="text-label-sm font-mono text-secondary px-3 py-1 rounded bg-secondary/10 border border-secondary/30 shrink-0">
          ISO / Zero-Log Enforced
        </span>
</div>
</section>
<!-- =============================================== -->
<!-- SECTION 9: ARTISTIC AI QR CODE PORTAL -->
<!-- =============================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="qr-portal">
<div class="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-surface-container-low border border-outline-variant/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
<!-- Ambient Radial Light -->
<div class="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
<!-- Left Column: Copy & Actions -->
<div class="max-w-lg">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-secondary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">devices</span>
            Direct Mobile Stall Gateway
          </div>
<h3 class="text-headline-lg font-headline-lg font-bold text-on-surface">Experience Verbum Premier on Personal Devices</h3>
<p class="text-body-md text-on-surface-variant mt-3 leading-relaxed">
            Scan to initiate instantaneous microphone calibration, acoustic telemetry benchmark tests, and personalized career roadmaps directly on your smartphone.
          </p>
<div class="mt-8 flex flex-wrap items-center gap-4">
<button class="inline-flex items-center gap-2 bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-5 py-3 rounded-lg transition-all active:scale-95 shadow-[0_0_16px_rgba(29,78,216,0.3)]" onclick="downloadVectorQr()">
<span class="material-symbols-outlined text-[20px]">download</span>
              Download Vector PNG
            </button>
<div class="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span class="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span>Ultra-low latency web app</span>
</div>
</div>
</div>
<!-- Right Column: Artistic Styled QR Code with Neon Frame -->
<div class="relative shrink-0 p-5 rounded-2xl bg-surface-container-lowest border-2 border-primary/40 shadow-[0_0_30px_rgba(29,78,216,0.25)] flex flex-col items-center">
<!-- Circuit pattern corners -->
<div class="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary"></div>
<div class="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary"></div>
<div class="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary"></div>
<div class="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary"></div>
<!-- Stylized High-Density QR Canvas -->
<div class="w-48 h-48 bg-white p-3 rounded-xl flex items-center justify-center relative overflow-hidden">
<!-- Simulated QR Visual pattern -->
<div class="w-full h-full bg-slate-900 rounded grid grid-cols-6 grid-rows-6 gap-1 p-2 relative">
<div class="bg-white col-span-2 row-span-2 rounded-sm p-1 flex items-center justify-center">
<div class="w-full h-full bg-slate-900 rounded-xs"></div>
</div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2 row-span-2 rounded-sm p-1 flex items-center justify-center">
<div class="w-full h-full bg-slate-900 rounded-xs"></div>
</div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2 row-span-2 rounded-sm p-1 flex items-center justify-center">
<div class="w-full h-full bg-slate-900 rounded-xs"></div>
</div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-4"></div>
<!-- Center Emblem -->
<div class="absolute inset-0 flex items-center justify-center">
<div class="w-9 h-9 rounded-full bg-primary-container border-2 border-white flex items-center justify-center shadow-lg">
<span class="text-white font-bold text-[12px] font-headline-md tracking-tighter">VP</span>
</div>
</div>
</div>
</div>
<span class="text-label-sm font-mono text-primary mt-3 tracking-widest uppercase font-semibold">VERBUM.CONSORTIUM</span>
</div>
</div>
</section>
</main>
<!-- ============================================================= -->
<!-- SECTION 10: HIDDEN EXECUTIVE ADMIN CONSOLE & 5-TIER AI ROUTER -->
<!-- (Toggleable via click seal or hotkey Ctrl+Shift+A) -->
<!-- ============================================================= -->
<div class="fixed inset-0 z-[100] bg-surface-dim/80 backdrop-blur-xl flex items-center justify-center p-4 hidden" id="admin-modal">
<div class="w-full max-w-4xl bg-surface-container-low border border-outline-variant rounded-2xl shadow-2xl p-6 sm:p-8 relative max-h-[921px] overflow-y-auto">
<!-- Close Button -->
<button class="absolute top-6 right-6 p-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all" onclick="toggleAdminModal()">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
<!-- Admin Header -->
<div class="flex items-center gap-3 pb-6 border-b border-outline-variant/20">
<div class="w-10 h-10 rounded-xl bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[24px]">terminal</span>
</div>
<div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Institutional Router &amp; Infrastructure Console</h3>
<p class="text-label-sm text-on-surface-variant">5-Tier Autonomous Redundancy Orchestrator &amp; Feature Toggles</p>
</div>
</div>
<!-- 5-Tier AI Router Status -->
<div class="my-6">
<div class="flex items-center justify-between mb-3">
<h4 class="text-label-md font-semibold text-on-surface uppercase tracking-wider">5-Tier Failover Telemetry</h4>
<span class="text-label-sm font-mono text-secondary">Zero-Downtime Pipeline</span>
</div>
<div class="space-y-3 font-mono text-body-sm">
<!-- Tier 1 -->
<div class="p-3.5 rounded-xl bg-surface-container border border-secondary/40 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
<div>
<span class="text-on-surface font-semibold">Tier 1: Cloudflare Workers AI</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Primary edge serverless compute (10,000 Neurons/day pool)</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-secondary/15 text-secondary font-bold">ACTIVE (14ms)</span>
</div>
<!-- Tier 2 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
<div>
<span class="text-on-surface font-semibold">Tier 2: Gemini Multi-Key Gateway</span>
<span class="text-label-sm text-on-surface-variant block font-sans">3 API keys pooled in round-robin fallback</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-primary/10 text-primary font-bold">HOT STANDBY</span>
</div>
<!-- Tier 3 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-outline"></span>
<div>
<span class="text-on-surface font-semibold">Tier 3: Tasfin Free LLM Endpoint</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Community distributed backup cluster</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-bold">READY</span>
</div>
<!-- Tier 4 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<div>
<span class="text-on-surface font-semibold">Tier 4: Local Ryzen 7 16GB Host Node</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Ollama Llama-3.2 3B tunnel for offline stall environments</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-tertiary/10 text-tertiary font-bold">TUNNELED</span>
</div>
<!-- Tier 5 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
<div>
<span class="text-on-surface font-semibold">Tier 5: Client On-Device WebSpeech &amp; Rule Engine</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Browser-local zero-network fallback synthesis</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-surface-container text-secondary-fixed-dim font-bold">READY</span>
</div>
</div>
</div>
<!-- Manual Router Override Selector -->
<div class="p-4 rounded-xl bg-surface-container border border-outline-variant/30 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<span class="text-body-sm font-semibold text-on-surface">Manual AI Routing Override</span>
<span class="text-label-sm text-on-surface-variant block">Force traffic to specific nodes during network congestion</span>
</div>
<select class="bg-surface-container-highest border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary focus:outline-none" id="router-override-select">
<option value="auto">Autonomous Dynamic Failover</option>
<option value="force-gemini">Force Gemini Pool</option>
<option value="force-local">Force Local Ryzen Node</option>
<option value="force-client">Force Client WebSpeech</option>
</select>
</div>
<!-- Modular Feature Kill-Switches -->
<div class="border-t border-outline-variant/20 pt-6">
<h4 class="text-label-md font-semibold text-on-surface uppercase tracking-wider mb-4">Modular Feature Kill-Switches</h4>
<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Speech Lab</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Leaderboard</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Roleplay Sandbox</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">QR Portal</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Roadmaps</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">School Banner</span>
</label>
</div>
</div>
</div>
</div>
<!-- ============================================== -->
<!-- FOOTER (Shared Components JSON Anchor & School) -->
<!-- ============================================== -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest docked full-width bottom border-t border-outline-variant/20 flat no shadows mt-20">
<div class="w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto py-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
<!-- Copyright from JSON Anchor & Toggleable School Badge -->
<div class="flex flex-col items-start gap-1">
<span class="text-label-sm font-label-sm text-on-surface-variant dark:text-on-surface-variant">
          © 2025 Verbum Sovereign Career Consortium. High-Stakes Institutional Communication Benchmarking.
        </span>
<!-- Official Copyright Badge from Prompt Requirement -->
<div class="flex items-center gap-2 mt-1">
<span class="text-label-sm font-semibold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
            © Kanakia International School Mira Road
          </span>
<span class="text-[11px] text-on-surface-variant/60">Official Institutional Pavilion Showcase</span>
</div>
</div>
<!-- Footer Navigation Links from JSON Anchor -->
<div class="flex flex-wrap items-center gap-4 text-label-sm font-label-sm text-on-surface-variant dark:text-on-surface-variant">
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#roadmap">Sovereign Protocol</a>
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#benchmarking">Neural Latency Benchmark</a>
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#sectors">Sector Clearance Matrix</a>
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#telemetry">Telemetry Consent</a>
<button class="hover:text-primary dark:hover:text-primary transition-colors duration-150 cursor-pointer" onclick="toggleAdminModal()">Admin Routing</button>
</div>
</div>
</footer>
<!-- INLINE VANILLA JAVASCRIPT LOGIC FOR REAL-TIME INTERACTION -->
<script>
    // 1. Scroll Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('scroll-progress-bar').style.width = scrolled + '%';
    });

    // 2. Filter Careers in Section 2
    function filterCareers(category) {
      const cards = document.querySelectorAll('.career-card');
      const buttons = document.querySelectorAll('#career-filter-tabs .filter-btn');
      
      buttons.forEach(btn => {
        btn.classList.remove('bg-surface-container-high', 'text-on-surface');
        btn.classList.add('text-on-surface-variant');
      });
      event.target.classList.add('bg-surface-container-high', 'text-on-surface');
      event.target.classList.remove('text-on-surface-variant');

      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-sector') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // 3. Teleprompter Script Selector
    const scripts = {
      hollywood: {
        title: "Hollywood Pitch: Sci-Fi Pilot",
        text: "\"Ladies and gentlemen of the network room: The series begins in 2088 inside orbital salvage bay nine. What appears to be an abandoned cryo-vessel is essentially carrying the sole uncorrupted neural seed of humanity. We are not selling a space opera; we are selling the final legal trial of biological consciousness.\""
      },
      aviation: {
        title: "Aviation Emergency Clearance",
        text: "\"Pan-Pan, Pan-Pan, Pan-Pan. London Control, Speedbird 118 heavy. Descending flight level 100, established on direct vector for runway 27 Right. Multiple hydraulic telemetry deviations; request non-standard separation and full rollout priority on arrival.\""
      },
      court: {
        title: "Supreme Court Oral Argument",
        text: "\"May it please the Court: The sovereign treaty of 1994 does not admit of bilateral ambiguity. If this bench construes clause twelve to permit unilateral tariff suspensions, it overturns thirty years of maritime trade consensus without statutory warrant.\""
      },
      boardroom: {
        title: "Transnational M&A Defense",
        text: "\"Members of the board: A hostile takeover at a fifteen percent premium fails to reflect our sovereign defense patents. Our recommendation is immediate poison pill activation coupled with a Singapore arbitration injunction.\""
      }
    };

    function updateTeleprompterScript(key) {
      const item = scripts[key];
      if (item) {
        document.getElementById('script-title-display').innerText = item.title;
        document.getElementById('teleprompter-text').innerText = item.text;
      }
    }

    // 4. Waveform Audio Simulator
    const canvas = document.getElementById('waveform-canvas');
    const ctx = canvas.getContext('2d');
    let isRecording = false;
    let animFrame;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function drawIdleWaveform() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(183, 196, 255, 0.2)';
      ctx.lineWidth = 2;
      const centerY = canvas.height / 2;
      ctx.moveTo(0, centerY);
      for (let x = 0; x < canvas.width; x += 10) {
        ctx.lineTo(x, centerY + Math.sin(x * 0.03) * 3);
      }
      ctx.stroke();
    }
    drawIdleWaveform();

    function drawActiveWaveform() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const bars = Math.floor(canvas.width / 8);
      for (let i = 0; i < bars; i++) {
        const height = Math.random() * (canvas.height * 0.75);
        const x = i * 8;
        const y = (canvas.height - height) / 2;
        ctx.fillStyle = '#68dba9';
        ctx.fillRect(x, y, 4, height);
      }
      if (isRecording) {
        animFrame = requestAnimationFrame(drawActiveWaveform);
      }
    }

    function toggleRecording() {
      isRecording = !isRecording;
      const btn = document.getElementById('record-btn');
      const text = document.getElementById('record-text');
      const icon = document.getElementById('record-icon');
      const overlay = document.getElementById('recording-status-overlay');

      if (isRecording) {
        btn.classList.remove('bg-error');
        btn.classList.add('bg-secondary-container');
        text.innerText = "Listening...";
        icon.innerText = "graphic_eq";
        overlay.classList.add('hidden');
        drawActiveWaveform();
      } else {
        btn.classList.add('bg-error');
        btn.classList.remove('bg-secondary-container');
        text.innerText = "Record Voice Sample";
        icon.innerText = "mic";
        cancelAnimationFrame(animFrame);
        drawIdleWaveform();
        overlay.classList.remove('hidden');
        overlay.innerText = "Audio captured. Calculating phonetic vectors...";
        setTimeout(runAcousticAnalysis, 600);
      }
    }

    function runAcousticAnalysis() {
      const fluency = Math.floor(Math.random() * 6) + 93;
      const wpm = Math.floor(Math.random() * 10) + 134;
      document.getElementById('val-fluency').innerText = fluency + " / 100";
      document.getElementById('bar-fluency').style.width = fluency + "%";
      document.getElementById('val-wpm').innerText = wpm + " WPM";
      document.getElementById('recording-status-overlay').innerText = "Telemetry synchronized. Acoustic report generated.";
    }

    function resetSpeechLab() {
      if (isRecording) toggleRecording();
      document.getElementById('teleprompter-script-selector').value = 'hollywood';
      updateTeleprompterScript('hollywood');
      drawIdleWaveform();
      document.getElementById('recording-status-overlay').innerText = "Ready for acoustic input. Press 'Record Voice Sample'.";
    }

    // 5. Conversational Roleplay Logic
    const personas = {
      founder: {
        name: "Marc Andreessen Protocol (Venture Partner)",
        status: "Strict tone: Expects tight narrative structure without fluff.",
        initial: "\"We’ve reviewed your slide on synthetic language telemetry. Every founder uses the word 'revolutionary'. Exactly what linguistic moat protects your model against frontier open-weights when deployed in cross-border arbitration?\""
      },
      boardroom: {
        name: "Hostile Stakeholder (Global M&A Council)",
        status: "Interrogative: Zero tolerance for vague compliance hedges.",
        initial: "\"Counselor, you are telling this board that European anti-trust clearance is 'likely'. On what statutory authority can we risk eight hundred million euros on a probability?\""
      },
      aviation: {
        name: "First Officer Vance (Cockpit Emergency)",
        status: "Aviation Assertiveness: Requires unambiguous standard phraseology.",
        initial: "\"Captain, we have contradictory pitch trim alerts and crosswind shear at two hundred feet. Are you executing the go-around protocol or continuing approach?\""
      }
    };

    function selectPersona(key) {
      document.querySelectorAll('[id^="persona-"]').forEach(el => {
        el.classList.remove('border-primary', 'border-2', 'bg-surface-container-high');
        el.classList.add('border-outline-variant/30', 'bg-surface-container-low');
      });
      const selected = document.getElementById('persona-' + key);
      selected.classList.add('border-primary', 'border-2', 'bg-surface-container-high');
      selected.classList.remove('bg-surface-container-low');

      const data = personas[key];
      document.getElementById('active-persona-name').innerText = data.name;
      document.getElementById('active-persona-status').innerText = data.status;
      
      const msgContainer = document.getElementById('roleplay-messages');
      msgContainer.innerHTML = `
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
            <span class="material-symbols-outlined text-[18px]">smart_toy</span>
          </div>
          <div class="bg-surface-container p-3.5 rounded-xl border border-outline-variant/30 max-w-xl text-body-sm text-on-surface leading-relaxed">
            ${data.initial}
          </div>
        </div>
      `;
    }

    function fillRoleplayPrompt(text) {
      document.getElementById('roleplay-input').value = text;
    }

    function sendRoleplayMessage() {
      const input = document.getElementById('roleplay-input');
      const val = input.value.trim();
      if (!val) return;

      const msgContainer = document.getElementById('roleplay-messages');
      // User message
      msgContainer.innerHTML += `
        <div class="flex items-start gap-3 justify-end">
          <div class="bg-primary-container text-white p-3.5 rounded-xl max-w-xl text-body-sm leading-relaxed shadow-sm">
            ${val}
          </div>
          <div class="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-label-sm shrink-0">
            YOU
          </div>
        </div>
      `;
      input.value = '';
      msgContainer.scrollTop = msgContainer.scrollHeight;

      // Simulated AI counter response
      setTimeout(() => {
        msgContainer.innerHTML += `
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
              <span class="material-symbols-outlined text-[18px]">smart_toy</span>
            </div>
            <div class="bg-surface-container p-3.5 rounded-xl border border-outline-variant/30 max-w-xl text-body-sm text-on-surface leading-relaxed">
              "Noted. That answers the structural concern with proper gravitas. Your cadence index scored in the 96th percentile for assertiveness."
            </div>
          </div>
        `;
        msgContainer.scrollTop = msgContainer.scrollHeight;
      }, 700);
    }

    // 6. Master Orator Sample Simulator
    function playSampleAcoustic(speaker) {
      alert("Acoustic sample loaded for " + speaker.toUpperCase() + ". Playing 10-second reference RP segment with live formant visualizer.");
    }

    function simulateMasterComparison() {
      const res = document.getElementById('comparison-result');
      res.classList.remove('hidden');
    }

    // 7. Dynamic Roadmap Generator
    const roadmaps = {
      lawyer: {
        p1: ["Legal Latinate Lexicon", "Master 1,200 jurisdictional Latin roots, statutory disambiguation, and active analytical parsing."],
        p2: ["CLAT / LNAT Mastery", "Target 99.8th percentile in reading comprehension and critical logic under strict timing constraints."],
        p3: ["NLSIU / Oxford BCL", "Premier moot court representation, international maritime law briefs, and journal publication."],
        p4: ["International Partner", "Command ₹1.2Cr+ partner retainer presiding over transnational commercial disputes in London & Singapore."]
      },
      screenwriter: {
        p1: ["Dramatic Prosody & Syntax", "Deconstruct 50 classical theatrical scripts for dialogue rhythm, subtextual irony, and character voice."],
        p2: ["Portfolio & Showrunner Reels", "Complete 2 spec teleplays for international festival circulation; submit to FTII/NYU pitch pipelines."],
        p3: ["NYU Tisch / FTII Direction", "Master multi-character arc orchestration and European co-production pitching labs."],
        p4: ["Lead Showrunner (OTT)", "Command ₹65L+ per season package helming international original series for streaming conglomerates."]
      },
      pilot: {
        p1: ["ICAO Standard Phraseology", "Flawless elimination of colloquial hesitations; mastering phonetic alphabet and rapid readback cadence."],
        p2: ["DGCA & Commercial License", "Command flight simulator instrument conditions with calm verbal authority during simulated turbine failure."],
        p3: ["Type Rating & Fleet Command", "Induction on Boeing 787 / Airbus A350 widebody international oceanic routes."],
        p4: ["International Captain", "Command ₹85L+ compensation as senior transatlantic line training captain."]
      },
      narrative: {
        p1: ["Interactive Rhetoric & World-building", "Design branching character dialogue graphs with distinct socio-linguistic registers."],
        p2: ["DigiPen / NID Portfolio", "Develop playable text-parser prototypes showcasing conditional narrative delivery."],
        p3: ["Senior Game Studio Writer", "Lead narrative lore and voice actor direction for multi-platform AAA video games."],
        p4: ["Creative Franchise Director", "Command ₹80L+ shaping transmedia intellectual properties spanning games, film, and literature."]
      },
      diplomat: {
        p1: ["Bilateral Rhetoric & Treaty English", "Parsing UN security council resolutions and ambiguity containment strategies."],
        p2: ["UPSC IFS / Oxford Diplomatic Studies", "Flawless oral interview defense and geopolitical argumentation under intense panel scrutiny."],
        p3: ["Permanent Mission Counselor", "Drafting bilateral agreements and delivering sovereign interventions at Geneva assemblies."],
        p4: ["Ambassador & Special Envoy", "Represent sovereign interests in multilateral security pacts and trade treaty negotiations."]
      }
    };

    function generateRoadmap() {
      const trajectory = document.getElementById('trajectory-selector').value;
      const data = roadmaps[trajectory] || roadmaps.lawyer;

      document.getElementById('phase1-title').innerText = data.p1[0];
      document.getElementById('phase1-desc').innerText = data.p1[1];
      document.getElementById('phase2-title').innerText = data.p2[0];
      document.getElementById('phase2-desc').innerText = data.p2[1];
      document.getElementById('phase3-title').innerText = data.p3[0];
      document.getElementById('phase3-desc').innerText = data.p3[1];
      document.getElementById('phase4-title').innerText = data.p4[0];
      document.getElementById('phase4-desc').innerText = data.p4[1];
    }

    // 8. Fix-the-Email Drill
    function refactorEmail() {
      const refactoredBox = document.getElementById('email-refactored-box');
      refactoredBox.classList.remove('hidden');
      document.getElementById('refactor-btn').classList.add('bg-secondary-container');
      document.getElementById('refactor-btn').innerText = "Refactored";
    }

    // 9. Word of the Day Cycle
    const words = [
      {
        word: "Perspicacious",
        ipa: "/ˌpɜː.spɪˈkeɪ.ʃəs/",
        pos: "Adjective • Latin perspicax (sharp-sighted)",
        def: "Having a ready insight into and understanding of complex sovereign or financial affairs.",
        ex: "\"The general counsel made a perspicacious intervention, identifying the ambiguous indemnity loophole before contract execution.\""
      },
      {
        word: "Equivocate",
        ipa: "/ɪˈkwɪv.ə.keɪt/",
        pos: "Verb • Latin aequivocus (equal voice)",
        def: "To use ambiguous language to conceal truth or avoid committing oneself in high-stakes negotiations.",
        ex: "\"A seasoned diplomat never equivocates under oath; they deploy precise statutory reservations instead.\""
      },
      {
        word: "Grandiloquent",
        ipa: "/ɡrænˈdɪl.ə.kwənt/",
        pos: "Adjective • Latin grandis (great) + loqui (speak)",
        def: "Pompous or extravagant in language, style, or manner; style lacking executive substance.",
        ex: "\"The board dismissed the pitch deck as grandiloquent rhetoric unsupported by audited balance sheets.\""
      }
    ];
    let wordIdx = 0;
    function cycleWordOfDay() {
      wordIdx = (wordIdx + 1) % words.length;
      const w = words[wordIdx];
      document.getElementById('wod-word').innerText = w.word;
      document.getElementById('wod-ipa').innerText = w.ipa;
      document.getElementById('wod-pos').innerHTML = w.pos;
      document.getElementById('wod-def').innerText = w.def;
      document.getElementById('wod-example').innerText = w.ex;
    }

    // 10. QR Vector PNG Download Action
    function downloadVectorQr() {
      alert("Vector QR Package (High-Resolution 3000x3000px PNG + SVG with Kanakia Pavilion metadata) initiated for print display.");
    }

    // 11. Hidden Admin Modal Trigger (5-Click Seal or Shortcut)
    let sealClicks = 0;
    document.getElementById('brand-logo-seal').addEventListener('click', () => {
      sealClicks++;
      if (sealClicks >= 5) {
        toggleAdminModal();
        sealClicks = 0;
      }
    });
    document.getElementById('admin-modal-trigger').addEventListener('click', toggleAdminModal);

    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        toggleAdminModal();
      }
    });

    function toggleAdminModal() {
      const modal = document.getElementById('admin-modal');
      modal.classList.toggle('hidden');
    }

    // 12. Theme Switcher Pill
    function switchTheme(theme) {
      const cosmic = document.getElementById('theme-btn-cosmic');
      const emerald = document.getElementById('theme-btn-emerald');
      const solar = document.getElementById('theme-btn-solar');

      [cosmic, emerald, solar].forEach(b => {
        b.classList.remove('bg-surface-container-high', 'text-on-surface', 'font-medium');
        b.classList.add('text-on-surface-variant');
      });

      if (theme === 'cosmic') {
        cosmic.classList.add('bg-surface-container-high', 'text-on-surface', 'font-medium');
        document.documentElement.style.setProperty('--tw-bg-opacity', '1');
      } else if (theme === 'emerald') {
        emerald.classList.add('bg-surface-container-high', 'text-on-surface', 'font-medium');
      } else if (theme === 'solar') {
        solar.classList.add('bg-surface-container-high', 'text-on-surface', 'font-medium');
      }
    }
  </script>
</body></html> add this in v2 and set up so it can be toggaled to this page from admin console
```
</details>

#### Prompt 14 | 2026-10-25T16:52:22Z

<details><summary><b>Large Prompt Payload (click to expand)</b></summary>

```html
Build command
None
Deploy command
npx wrangler deploy
Root directory
/
Build token

careerswithenglish build token
Build variables

Noneuse better font search web how to make aestetic 3d website not genereric or ai slop /dev-browser  and use all skills related to it better colour palate like yellow aesthetic , not ai like <!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>VERBUM PREMIER | The Global Career Architecture Platform</title>
<!-- Fonts & Google Icons -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS CDN with container queries & forms -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Configuration matching design tokens -->
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "on-primary-fixed": "#001551",
            "on-tertiary-fixed": "#25005a",
            "primary-container": "#1d4ed8",
            "surface-dim": "#10131a",
            "primary": "#b7c4ff",
            "tertiary": "#d2bbff",
            "error": "#ffb4ab",
            "surface-bright": "#363941",
            "inverse-primary": "#2151da",
            "surface-container-high": "#272a32",
            "inverse-surface": "#e1e2ec",
            "primary-fixed-dim": "#b7c4ff",
            "surface": "#10131a",
            "tertiary-fixed-dim": "#d2bbff",
            "on-primary": "#002682",
            "on-secondary": "#003825",
            "on-primary-container": "#cad3ff",
            "secondary-fixed": "#85f8c4",
            "outline-variant": "#434655",
            "surface-variant": "#32353d",
            "background": "#10131a",
            "on-error-container": "#ffdad6",
            "secondary": "#68dba9",
            "surface-tint": "#b7c4ff",
            "on-secondary-container": "#00311f",
            "on-error": "#690005",
            "on-background": "#e1e2ec",
            "inverse-on-surface": "#2d3038",
            "on-surface": "#e1e2ec",
            "secondary-container": "#25a475",
            "on-tertiary-container": "#dfccff",
            "surface-container-low": "#191b23",
            "tertiary-container": "#712ae2",
            "on-secondary-fixed": "#002114",
            "surface-container-highest": "#32353d",
            "on-tertiary-fixed-variant": "#5a00c6",
            "surface-container-lowest": "#0b0e15",
            "on-surface-variant": "#c4c5d7",
            "on-tertiary": "#3f008e",
            "on-secondary-fixed-variant": "#005137",
            "secondary-fixed-dim": "#68dba9",
            "primary-fixed": "#dce1ff",
            "on-primary-fixed-variant": "#0039b5",
            "error-container": "#93000a",
            "outline": "#8e90a0",
            "surface-container": "#1d1f27",
            "tertiary-fixed": "#eaddff"
          },
          borderRadius: {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
          spacing: {
            "space-xs": "0.25rem",
            "space-sm": "0.5rem",
            "margin": "3rem",
            "space-xl": "2.5rem",
            "margin-tablet": "2rem",
            "margin-mobile": "1.25rem",
            "space-lg": "1.5rem",
            "gutter": "1.5rem",
            "gutter-sm": "1rem",
            "space-md": "1rem"
          },
          fontFamily: {
            "body-sm": ["Inter"],
            "headline-md": ["Plus Jakarta Sans"],
            "display-xl": ["Plus Jakarta Sans"],
            "body-md": ["Inter"],
            "label-sm": ["Inter"],
            "body-lg": ["Inter"],
            "headline-lg": ["Plus Jakarta Sans"],
            "headline-lg-mobile": ["Plus Jakarta Sans"],
            "display-xl-mobile": ["Plus Jakarta Sans"],
            "label-md": ["Inter"],
            "headline-sm": ["Plus Jakarta Sans"]
          },
          fontSize: {
            "body-sm": ["13px", { lineHeight: "20px", letterSpacing: "0.005em", fontWeight: "400" }],
            "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "600" }],
            "display-xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "800" }],
            "body-md": ["15px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
            "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "500" }],
            "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "400" }],
            "headline-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
            "headline-lg-mobile": ["28px", { lineHeight: "34px", letterSpacing: "-0.015em", fontWeight: "700" }],
            "display-xl-mobile": ["38px", { lineHeight: "44px", letterSpacing: "-0.025em", fontWeight: "800" }],
            "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" }],
            "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }]
          }
        }
      }
    }
  </script>
<style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
    }
    html {
      scroll-behavior: smooth;
    }
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #0b0e15;
    }
    ::-webkit-scrollbar-thumb {
      background: #272a32;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #434655;
    }
    .obsidian-frost {
      background: rgba(17, 22, 34, 0.72);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    .subtle-ring {
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
    }
  </style>
</head>
<body class="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-white min-h-screen relative overflow-x-hidden">
<!-- Live Top Scroll Progress Indicator -->
<div class="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-[60] w-0 transition-all duration-75" id="scroll-progress-bar"></div>
<!-- TOP APP BAR (Shared Components JSON Anchor) -->
<header class="bg-surface-dim/80 dark:bg-surface-dim/80 backdrop-blur-md docked full-width top-0 fixed z-50 border-b border-outline-variant/30 flat no shadows">
<div class="w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto flex items-center justify-between h-16">
<!-- Brand & Seal (Interactive 5-Click Admin Trigger) -->
<div class="flex items-center gap-space-sm cursor-pointer select-none" id="brand-logo-seal" title="Institutional Seal">
<div class="w-9 h-9 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary relative overflow-hidden group">
<span class="material-symbols-outlined text-[20px]">shield</span>
<div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div>
<span class="text-headline-sm font-headline-md font-bold tracking-tight text-on-surface dark:text-on-surface flex items-center gap-2">
            VERBUM PREMIER
            <span class="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-primary-container/20 text-primary border border-primary/30 font-semibold hidden sm:inline-block">Institutional</span>
</span>
</div>
</div>
<!-- Navigation Links from JSON Anchor -->
<nav class="hidden md:flex items-center space-x-6 text-label-md font-label-md">
<a class="text-primary dark:text-primary border-b-2 border-primary dark:border-primary pb-1 font-semibold" href="#sectors">Sectors</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#speech-lab">Speech Lab</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#roleplay">Roleplay</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#benchmarking">Benchmarking</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#roadmap">Roadmap</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#telemetry">Telemetry</a>
</nav>
<!-- Trailing Action Cluster -->
<div class="flex items-center gap-space-sm">
<!-- Theme Switcher Pill -->
<div class="flex items-center bg-surface-container-low rounded-lg p-0.5 border border-outline-variant/30 text-xs text-on-surface-variant">
<button class="px-2 py-1 rounded bg-surface-container-high text-on-surface font-medium transition-all" id="theme-btn-cosmic" onclick="switchTheme('cosmic')" title="Cosmic Dark">Cosmic</button>
<button class="px-2 py-1 rounded hover:text-on-surface transition-all" id="theme-btn-emerald" onclick="switchTheme('emerald')" title="Emerald Bio">Bio</button>
<button class="px-2 py-1 rounded hover:text-on-surface transition-all" id="theme-btn-solar" onclick="switchTheme('solar')" title="Solar Gold">Solar</button>
</div>
<!-- Trailing Icon Actions from JSON -->
<button class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high/50 hover:text-on-surface transition-all active:scale-95" id="admin-modal-trigger" title="Admin Console">
<span class="material-symbols-outlined text-[20px]">tune</span>
</button>
<button class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high/50 hover:text-on-surface transition-all active:scale-95 relative" title="Notifications">
<span class="material-symbols-outlined text-[20px]">notifications</span>
<span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary"></span>
</button>
<!-- Primary Action Button from JSON -->
<a class="hidden sm:inline-flex items-center justify-center bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-4 py-2 rounded-lg active:scale-95 transition-all shadow-[0_0_16px_rgba(29,78,216,0.35)]" href="#speech-lab">
          Launch Simulation
        </a>
</div>
</div>
</header>
<!-- MAIN CANVAS -->
<main class="relative pt-16">
<!-- ========================================== -->
<!-- SECTION 1: HERO & MISSION WITH WEBGL SHADER -->
<!-- ========================================== -->
<section class="relative min-h-[942px] flex items-center justify-center overflow-hidden border-b border-outline-variant/20 px-margin-mobile md:px-margin-tablet lg:px-margin py-20">
<!-- Shader Background Tag (Injected exactly per specification) -->
<!-- STITCH_SHADER_START:ANIMATION_2 class="absolute inset-0 w-full h-full opacity-60 pointer-events-none" -->
<div class="absolute inset-0 w-full h-full opacity-60 pointer-events-none" style="display:block;">
<canvas id="shader-canvas-ANIMATION_2" style="display:block;width:100%;height:100%"></canvas>
<script>
(function() {
  const canvas = document.getElementById('shader-canvas-ANIMATION_2');

  // Sync the WebGL drawing-buffer size with the CSS-driven layout size.
  // This fires on initial layout and whenever the element is resized.
  function syncSize() {
    const w = canvas.clientWidth  || 1280;
    const h = canvas.clientHeight || 720;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width  = w;
      canvas.height = h;
    }
  }
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(syncSize).observe(canvas);
  }
  syncSize();

  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) return;
  const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
  const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
               mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 4; ++i) {
        v += a * noise(p);
        p = rot * p * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    vec2 mouse = u_mouse / u_resolution;
    p += (mouse - 0.5) * 0.3;

    float t = u_time * 0.15;
    
    vec2 q = vec2(0.0);
    q.x = fbm(p + 0.1 * t);
    q.y = fbm(p + vec2(1.0));

    vec2 r = vec2(0.0);
    r.x = fbm(p + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
    r.y = fbm(p + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);

    float f = fbm(p + r);

    // Deep cosmic palette with luminous cyan, royal cobalt, and magenta-violet
    vec3 col = mix(vec3(0.04, 0.06, 0.10), vec3(0.08, 0.12, 0.22), clamp(f * f * 2.5, 0.0, 1.0));
    col = mix(col, vec3(0.12, 0.38, 0.72), clamp(length(q), 0.0, 1.0) * 0.45);
    col = mix(col, vec3(0.05, 0.75, 0.70), clamp(length(r.x), 0.0, 1.0) * 0.35);
    col = mix(col, vec3(0.55, 0.20, 0.85), clamp(f * 0.8, 0.0, 1.0) * 0.25);

    // Subtle star dust shimmer
    float n = hash(uv * 400.0 + fract(u_time * 0.02));
    if (n > 0.994) {
        col += vec3(0.6, 0.8, 1.0) * fract(sin(u_time * 2.0 + uv.x * 50.0) * 0.5 + 0.5) * 0.4;
    }

    // Subtle edge vignette
    float vig = 1.0 - smoothstep(0.4, 1.4, length(uv - 0.5) * 1.3);
    col *= vig;

    gl_FragColor = vec4(col, 0.92);
}`;
  function cs(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const pos = gl.getAttribLocation(prog, 'a_position');
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
  const uTime = gl.getUniformLocation(prog, 'u_time');
  const uRes = gl.getUniformLocation(prog, 'u_resolution');
  const uMouse = gl.getUniformLocation(prog, 'u_mouse');

  // u_mouse is in pixel coordinates matching u_resolution (ShaderToy convention).
  // Shaders that need normalized coords should use: u_mouse / u_resolution.
  let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
  window.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width && rect.height) {
      const nx = (event.clientX - rect.left) / rect.width;
      const ny = 1.0 - (event.clientY - rect.top) / rect.height;
      mouse.x = nx * canvas.width;
      mouse.y = ny * canvas.height;
    }
  });

  function render(t) {
    if (typeof ResizeObserver === 'undefined') syncSize();
    gl.viewport(0, 0, canvas.width, canvas.height);
    if (uTime) gl.uniform1f(uTime, t * 0.001);
    if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
    if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }
  render(0);
})();
</script>
</div>
<!-- STITCH_SHADER_END:ANIMATION_2 -->
<!-- Atmospheric Gradient Overlays -->
<div class="absolute inset-0 bg-gradient-to-b from-surface-dim/40 via-surface/60 to-surface-container-lowest pointer-events-none"></div>
<div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
<!-- Hero Content -->
<div class="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
<!-- Live Benchmark Badge -->
<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container/80 border border-primary/30 backdrop-blur-md mb-6 animate-pulse">
<span class="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
<span class="text-label-sm font-label-sm text-primary tracking-widest uppercase">Global Career Architecture Platform</span>
</div>
<!-- Headline -->
<h1 class="text-display-xl-mobile md:text-display-xl font-display-xl text-on-surface font-extrabold tracking-tight max-w-4xl text-balance">
          The Sovereign Voice: <br class="hidden md:inline"/>How English Mastery Commands the World's Highest-Value Careers
        </h1>
<!-- Subtitle -->
<p class="mt-6 text-body-md md:text-body-lg font-body-lg text-on-surface-variant max-w-3xl text-balance">
          Beyond conventional fluency — explore how linguistic precision, narrative authority, and international cadence drive multimillion-dollar careers in media, creative arts, high-tech, and global diplomacy.
        </p>
<!-- Stat Chips / Value Propositions -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 my-10 w-full max-w-3xl">
<div class="p-4 rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-[24px]">payments</span>
<div>
<div class="text-headline-sm font-headline-sm font-bold text-on-surface">₹18L - ₹1.4Cr+</div>
<div class="text-label-sm text-on-surface-variant">Global Compensation Range</div>
</div>
</div>
<div class="p-4 rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left flex items-start gap-3">
<span class="material-symbols-outlined text-secondary text-[24px]">workspace_premium</span>
<div>
<div class="text-headline-sm font-headline-sm font-bold text-on-surface">16+ High-Impact</div>
<div class="text-label-sm text-on-surface-variant">Sovereign Professions</div>
</div>
</div>
<div class="p-4 rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left flex items-start gap-3">
<span class="material-symbols-outlined text-tertiary text-[24px]">neurology</span>
<div>
<div class="text-headline-sm font-headline-sm font-bold text-on-surface">5-Tier Adaptive</div>
<div class="text-label-sm text-on-surface-variant">AI Latency Architecture</div>
</div>
</div>
</div>
<!-- CTA Buttons -->
<div class="flex flex-wrap items-center justify-center gap-4">
<a class="inline-flex items-center gap-2 bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-body-md px-6 py-3.5 rounded-lg shadow-[0_0_24px_rgba(29,78,216,0.45)] transition-all active:scale-95" href="#sectors">
<span class="material-symbols-outlined text-[20px]">explore</span>
            Explore Career Matrices
          </a>
<a class="inline-flex items-center gap-2 bg-surface-container-high/70 hover:bg-surface-container-high border border-outline-variant text-on-surface font-semibold text-body-md px-6 py-3.5 rounded-lg backdrop-blur-md transition-all active:scale-95" href="#speech-lab">
<span class="material-symbols-outlined text-[20px]">mic</span>
            Launch Speech Benchmarking
          </a>
<a class="inline-flex items-center gap-2 bg-transparent hover:bg-surface-container/40 border border-outline-variant/40 text-on-surface-variant hover:text-on-surface font-medium text-body-md px-4 py-3.5 rounded-lg transition-all" href="#qr-portal">
<span class="material-symbols-outlined text-[20px]">qr_code_2</span>
            Scan Mobile QR
          </a>
</div>
</div>
</section>
<!-- ======================================================== -->
<!-- SECTION 2: THE DEFINITIVE CAREER DIRECTORY (BENTO GRID) -->
<!-- ======================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="sectors">
<!-- Section Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">domain</span>
            Career Architecture Matrix
          </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight">
            High-Stakes Disciplines Built on Articulation
          </h2>
<p class="text-body-md text-on-surface-variant max-w-2xl mt-2">
            Fluency is no longer remedial. In high-value international economies, vocal authority and syntactic precision dictate compensation tier and room command.
          </p>
</div>
<!-- Filter Tabs -->
<div class="flex flex-wrap items-center bg-surface-container-lowest p-1 rounded-xl border border-outline-variant/30 gap-1" id="career-filter-tabs">
<button class="filter-btn active px-3.5 py-1.5 rounded-lg text-label-md font-label-md bg-surface-container-high text-on-surface transition-all" onclick="filterCareers('all')">All Sectors</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('entertainment')">Entertainment &amp; Media</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('narrative')">Writing &amp; Narrative</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('tech')">Tech &amp; Aviation</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('corporate')">Corporate &amp; Law</button>
</div>
</div>
<!-- Career Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="career-grid">
<!-- Card 1: Screenwriter / OTT Scriptwriter -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹12L - ₹65L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Screenwriter / OTT Scriptwriter</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Dialogue cadence, subtext mastery &amp; international pitch rooms for global streaming platforms like Netflix &amp; HBO.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">FTII / SRFTI / NYU Tisch</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">JET / Creative Portfolio / SAT</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Subtext architecture, dramatic tension, and pitching to US/UK showrunners.</span>
</div>
</div>
</div>
<!-- Card 2: Narrative Designer & Game Writer -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="narrative">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Writing &amp; Narrative</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹15L - ₹80L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Narrative Designer &amp; Game Writer</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">World-building lore, branching dialogue trees &amp; interactive rhetoric for AAA studios and transmedia universes.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">DigiPen / NID / BITS Pilani</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">NID DAT / Interactive Portfolios</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Complex conditional logic phrased in sharp, emotional English dialogue.</span>
</div>
</div>
</div>
<!-- Card 3: Novelist & Fiction Author -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="narrative">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Writing &amp; Narrative</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹10L - ₹1Cr+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Novelist &amp; Fiction Author</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Syntax rhythm, narrative tension &amp; international literary syndication across London and New York publishing houses.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">Iowa Writers' / Ashoka / Columbia</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">Ashoka AAT / Literary Manuscripts</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Global cultural currency and licensing IP rights internationally.</span>
</div>
</div>
</div>
<!-- Card 4: Lyricist & Songwriter -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹8L - ₹50L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Lyricist &amp; Songwriter</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Poetic prosody, phonetic rhythm &amp; cross-cultural resonance for international music labels and synchronizations.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">Berklee / KM Music Conservatory</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">Audition Portfolios / AP Music</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Linguistic meter, assonance, and cross-border emotional resonance.</span>
</div>
</div>
</div>
<!-- Card 5: Voice Actor & Audiobook Narrator -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹12L - ₹45L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Voice Actor &amp; Audiobook Narrator</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Vocal coloration, Received Pronunciation (RP) &amp; dialect agility for Audible, BBC audiobooks, and video game characters.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">NSD / Barry John / LAMDA</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">Acoustic Auditions / Voice Reels</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Precision articulation, phoneme control, and vocal endurance.</span>
</div>
</div>
</div>
<!-- Card 6: Radio Jockey & Podcast Host -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹9L - ₹35L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Radio Jockey &amp; Podcast Host</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Impromptu articulation, acoustic pacing &amp; charismatic presence commanding syndicated multi-million-listen streams.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">Jamia MCRC / IIMC / London Met</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">JMI Entrance / Studio Pilots</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Real-time conversational agility and rapid lexical retrieval.</span>
</div>
</div>
</div>
<!-- Card 7: Dubbing, Subtitle Translator & Localizer -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="narrative">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Writing &amp; Narrative</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹8L - ₹28L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Dubbing &amp; Subtitle Localizer</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Cultural idioms, colloquial nuance &amp; lip-flap synchronization bridging Asian &amp; Western global entertainment pipelines.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">EFLU / JNU / SOAS London</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">CUET-PG / Translation Portfolios</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Preserving comedic timing, subtext, and syllabic cadence across languages.</span>
</div>
</div>
</div>
<!-- Card 8: Corporate Lawyer & International Arbitrator -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="corporate">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/15 border border-tertiary/30 text-tertiary">Corporate &amp; Law</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹18L - ₹1.2Cr+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Corporate Lawyer &amp; Arbitrator</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Statutory interpretation, precision contract drafting &amp; high-pressure verbal cross-examinations in Geneva and London tribunals.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">NLSIU / Oxford / Harvard Law</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">CLAT / LSAT / LNAT</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Single misplaced prepositions swing multi-million-dollar arbitration liabilities.</span>
</div>
</div>
</div>
<!-- Card 9: Commercial Airline Pilot / Captain -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="tech">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Tech &amp; Aviation</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹24L - ₹85L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Commercial Airline Pilot / Captain</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Standard ICAO radiotelephony, non-ambiguous situational commands &amp; crisis assertiveness in saturated transatlantic air corridors.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">IGRUA / CAE / Oxford Aviation</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">DGCA CPL / ICAO English Level 6</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Absolute acoustic clarity eliminates runway incursions and mid-air risk.</span>
</div>
</div>
</div>
<!-- Card 10: AI Prompt Engineer & NLP Researcher -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="tech">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Tech &amp; Aviation</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹20L - ₹95L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">AI Prompt Engineer &amp; NLP Lead</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Semantic ambiguity resolution, few-shot synthetic reasoning &amp; high-parameter alignment steering generative frontier models.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">IIT Bombay / Stanford / CMU</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">JEE Advanced / GRE / GitHub Research</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Precise linguistic constraints steer billion-dollar autonomous compute fleets.</span>
</div>
</div>
</div>
</div>
</section>
<!-- ============================================================== -->
<!-- SECTION 3: THE VERBUM AI SPEECH LAB & ACOUSTIC TELEPROMPTER -->
<!-- ============================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="speech-lab">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-secondary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">equalizer</span>
          Real-Time Phonetic Analysis
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">The Verbum AI Speech Lab</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Simulate high-stakes acoustic conditions. Train rhythm, cadential variation, and lexical authority with real-time waveform telemetry.
        </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Left 7 Cols: Teleprompter & Live Waveform -->
<div class="lg:col-span-7 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8 flex flex-col justify-between h-full">
<div>
<!-- Teleprompter Header -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant/20">
<div>
<span class="text-label-sm uppercase tracking-wider text-on-surface-variant">Selected Script Protocol</span>
<h4 class="text-headline-sm font-headline-sm text-on-surface font-semibold" id="script-title-display">Hollywood Pitch: Sci-Fi Pilot</h4>
</div>
<!-- Script Selector Dropdown -->
<select class="bg-surface-container-high border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary focus:outline-none" id="teleprompter-script-selector" onchange="updateTeleprompterScript(this.value)">
<option value="hollywood">Hollywood Pitch (Sci-Fi Pilot)</option>
<option value="aviation">Aviation Emergency Clearance</option>
<option value="court">Supreme Court Oral Argument</option>
<option value="boardroom">Transnational M&amp;A Defense</option>
</select>
</div>
<!-- Teleprompter Reading Box -->
<div class="my-6 p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/20 min-h-[140px] flex items-center">
<p class="text-body-lg text-on-surface font-medium leading-relaxed transition-all duration-300" id="teleprompter-text">
                "Ladies and gentlemen of the network room: The series begins in 2088 inside orbital salvage bay nine. What appears to be an abandoned cryo-vessel is essentially carrying the sole uncorrupted neural seed of humanity. We are not selling a space opera; we are selling the final legal trial of biological consciousness."
              </p>
</div>
<!-- Waveform Canvas -->
<div class="relative w-full h-24 bg-surface-container-lowest rounded-xl border border-outline-variant/20 overflow-hidden flex items-center justify-center">
<canvas class="w-full h-full" id="waveform-canvas"></canvas>
<div class="absolute inset-0 flex items-center justify-center text-label-sm text-on-surface-variant/50 pointer-events-none" id="recording-status-overlay">
                Ready for acoustic input. Press 'Record Voice Sample'.
              </div>
</div>
</div>
<!-- Controls -->
<div class="mt-6 pt-6 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-4">
<div class="flex items-center gap-3">
<button class="inline-flex items-center gap-2 bg-error hover:bg-error/90 text-on-error font-semibold text-label-md px-5 py-2.5 rounded-lg transition-all active:scale-95 shadow-[0_0_12px_rgba(255,180,171,0.2)]" id="record-btn" onclick="toggleRecording()">
<span class="material-symbols-outlined text-[18px]" id="record-icon">mic</span>
<span id="record-text">Record Voice Sample</span>
</button>
<button class="inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-semibold text-label-md px-4 py-2.5 rounded-lg transition-all active:scale-95" onclick="runAcousticAnalysis()">
<span class="material-symbols-outlined text-[18px]">neurology</span>
                Analyze Cadence
              </button>
</div>
<button class="text-label-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1" onclick="resetSpeechLab()">
<span class="material-symbols-outlined text-[16px]">restart_alt</span> Reset Teleprompter
            </button>
</div>
</div>
<!-- Right 5 Cols: Real-Time Feedback Telemetry Dashboard -->
<div class="lg:col-span-5 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8">
<div class="flex items-center justify-between mb-6">
<h4 class="text-headline-sm font-headline-sm text-on-surface font-bold flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[22px]">analytics</span>
              Acoustic Telemetry
            </h4>
<span class="text-label-sm font-mono text-secondary px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20">LIVE ENGINE</span>
</div>
<!-- Metric 1: Fluency Index -->
<div class="mb-5">
<div class="flex justify-between items-center mb-1.5 text-label-md">
<span class="text-on-surface-variant">Fluency Index</span>
<span class="font-bold text-primary font-mono" id="val-fluency">94 / 100</span>
</div>
<div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div class="bg-primary h-full rounded-full transition-all duration-700" id="bar-fluency" style="width: 94%"></div>
</div>
<span class="text-[11px] text-on-surface-variant/70 mt-1 inline-block">Unbroken prosody, native sentence pitch architecture</span>
</div>
<!-- Metric 2: Filler Word Counter -->
<div class="mb-5 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-between">
<div>
<div class="text-label-md text-on-surface-variant">Filler Words Flagged</div>
<div class="text-[12px] text-error font-medium" id="filler-detected-label">1 detected: <span class="underline">"essentially"</span></div>
</div>
<div class="w-10 h-10 rounded-lg bg-error/10 border border-error/20 flex items-center justify-center text-error font-mono font-bold text-lg" id="val-fillers">
              1
            </div>
</div>
<!-- Metric 3: Words Per Minute -->
<div class="mb-5">
<div class="flex justify-between items-center mb-1.5 text-label-md">
<span class="text-on-surface-variant">Speech Rate (WPM)</span>
<span class="font-bold text-secondary font-mono" id="val-wpm">138 WPM</span>
</div>
<div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full transition-all duration-700" id="bar-wpm" style="width: 76%"></div>
</div>
<span class="text-[11px] text-on-surface-variant/70 mt-1 inline-block">Target executive benchmark: 130 – 145 WPM</span>
</div>
<!-- Metric 4: Lexical Density -->
<div class="mb-5">
<div class="flex justify-between items-center mb-1.5 text-label-md">
<span class="text-on-surface-variant">Lexical Density (Advanced Vocabulary)</span>
<span class="font-bold text-tertiary font-mono" id="val-lexical">88%</span>
</div>
<div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div class="bg-tertiary h-full rounded-full transition-all duration-700" id="bar-lexical" style="width: 88%"></div>
</div>
<span class="text-[11px] text-on-surface-variant/70 mt-1 inline-block">Sophisticated tier-3 nomenclature dominance</span>
</div>
<!-- Phonetic Clarity Badge -->
<div class="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-body-sm text-on-surface-variant">Phonetic Articulation</span>
<span class="px-2.5 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-label-sm font-semibold flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              98.2% Received Clear
            </span>
</div>
</div>
</div>
</section>
<!-- ====================================================== -->
<!-- SECTION 4: CONVERSATIONAL ROLEPLAY MATRIX -->
<!-- ====================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="roleplay">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">forum</span>
          High-Pressure Dialogue Sandbox
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Conversational Roleplay Matrix</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Test real-time diplomatic de-escalation, rapid venture capital persuasion, and aviation emergency assertiveness against institutional AI personas.
        </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Persona Selector (3 Cols) -->
<div class="lg:col-span-4 space-y-3">
<h4 class="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mb-2">Select Simulation Scenario</h4>
<!-- Persona 1 -->
<div class="p-4 rounded-xl bg-surface-container-high border-2 border-primary cursor-pointer transition-all" id="persona-founder" onclick="selectPersona('founder')">
<div class="flex items-center justify-between">
<span class="font-headline-sm font-semibold text-on-surface">Tech Founder Seed Pitch</span>
<span class="material-symbols-outlined text-primary text-[20px]">rocket_launch</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Skeptical Silicon Valley partner interrogating your unit economics &amp; moat.</p>
</div>
<!-- Persona 2 -->
<div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-outline cursor-pointer transition-all" id="persona-boardroom" onclick="selectPersona('boardroom')">
<div class="flex items-center justify-between">
<span class="font-headline-sm font-semibold text-on-surface">Hostile Boardroom Stakeholder</span>
<span class="material-symbols-outlined text-tertiary text-[20px]">gavel</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Interrogating a sovereign compliance breach during transnational merger.</p>
</div>
<!-- Persona 3 -->
<div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-outline cursor-pointer transition-all" id="persona-aviation" onclick="selectPersona('aviation')">
<div class="flex items-center justify-between">
<span class="font-headline-sm font-semibold text-on-surface">Anxious International Passenger</span>
<span class="material-symbols-outlined text-secondary text-[20px]">flight_takeoff</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Mid-air turbulence crisis de-escalation using authoritative reassurance.</p>
</div>
</div>
<!-- Chat Sandbox (8 Cols) -->
<div class="lg:col-span-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 flex flex-col justify-between h-[480px]">
<!-- Sandbox Header -->
<div class="flex items-center justify-between pb-4 border-b border-outline-variant/20">
<div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-secondary"></div>
<div>
<div class="text-body-md font-semibold text-on-surface" id="active-persona-name">Marc Andreessen Protocol (Venture Partner)</div>
<div class="text-label-sm text-on-surface-variant" id="active-persona-status">Strict tone: Expects tight narrative structure without fluff.</div>
</div>
</div>
<span class="text-label-sm font-mono text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20">Active Node</span>
</div>
<!-- Message History -->
<div class="flex-1 overflow-y-auto space-y-4 py-4 pr-2" id="roleplay-messages">
<!-- Persona message -->
<div class="flex items-start gap-3">
<div class="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined text-[18px]">smart_toy</span>
</div>
<div class="bg-surface-container p-3.5 rounded-xl border border-outline-variant/30 max-w-xl text-body-sm text-on-surface leading-relaxed">
                "We’ve reviewed your slide on synthetic language telemetry. Every founder uses the word 'revolutionary'. Exactly what linguistic moat protects your model against frontier open-weights when deployed in cross-border arbitration?"
              </div>
</div>
</div>
<!-- Suggested Quick Responses & Input -->
<div>
<div class="flex flex-wrap gap-2 mb-3" id="roleplay-suggestions">
<button class="text-label-sm bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface-variant hover:text-on-surface px-2.5 py-1 rounded transition-colors" onclick="fillRoleplayPrompt('Our proprietary value is not raw compute; it is the 400,000 verified jurisdictional arbitration transcripts we parsed under strict legal privilege.')">
                "Our value is in the 400k verified jurisdictional transcripts..."
              </button>
<button class="text-label-sm bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface-variant hover:text-on-surface px-2.5 py-1 rounded transition-colors" onclick="fillRoleplayPrompt('Open weights hallucinate under statutory ambiguity; our architecture guarantees zero semantic drift.')">
                "Open weights drift under statutory ambiguity..."
              </button>
</div>
<!-- Input bar -->
<div class="flex items-center gap-2">
<input class="flex-1 bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-on-surface-variant/40 text-body-sm rounded-lg px-4 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" id="roleplay-input" placeholder="Type your strategic verbal argument or use speech-to-text..." type="text"/>
<button class="bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-4 py-2.5 rounded-lg transition-all active:scale-95 flex items-center gap-1.5 shrink-0" onclick="sendRoleplayMessage()">
<span>Deliver</span>
<span class="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</div>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- SECTION 5: BRITISH RECEIVED PRONUNCIATION & MASTER ORATOR BENCHMARK -->
<!-- ========================================================================= -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="benchmarking">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-tertiary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">record_voice_over</span>
          Acoustic Gold Standards
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Master Orator &amp; Received Pronunciation Benchmark</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Study the cadence, vowel placement, and rhythmic suspension of the world's most captivating public speakers. Contrast your voiceprint against timeless standards.
        </p>
</div>
<!-- Orators Grid (6 Profiles) -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<!-- Orator 1: David Attenborough -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-secondary">Naturalist &amp; Broadcaster</span>
<span class="text-label-sm font-mono text-on-surface-variant">112 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Sir David Attenborough</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Reverent pauses, breath modulation &amp; dramatic sibilance creating universal intimacy.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Suspended Wonder</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('attenborough')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 2: Winston Churchill -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-primary">Statesman &amp; Nobel Laureate</span>
<span class="text-label-sm font-mono text-on-surface-variant">124 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Winston Churchill</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Alliterative heavy beats, Anglo-Saxon monosyllables &amp; martial rhetorical climaxes.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Sovereign Defiance</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('churchill')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div> /boost 
</div>
<!-- Orator 3: Dame Maggie Smith -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-tertiary">Classical Stage Dame</span>
<span class="text-label-sm font-mono text-on-surface-variant">130 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Dame Maggie Smith</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Dry ironic inflection, razor-sharp dental stops &amp; supreme Received Pronunciation (RP).</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Aristocratic Wit</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('maggie')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 4: Christopher Hitchens -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-primary">Polemicist &amp; Essayist</span>
<span class="text-label-sm font-mono text-on-surface-variant">148 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Christopher Hitchens</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Uninterrupted periodic syntax, spontaneous Latinate clauses &amp; combative dialectic speed.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Dialectical Precision</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('hitchens')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 5: Shashi Tharoor -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-secondary">Diplomat &amp; Parliamentarian</span>
<span class="text-label-sm font-mono text-on-surface-variant">142 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Dr. Shashi Tharoor</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Exuberant sesquipedalian lexicon, mellifluous Indian-RP hybrid cadence &amp; diplomatic panache.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Lexical Flourish</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('tharoor')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 6: Rowan Atkinson -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-tertiary">Comedic Satirist &amp; Orator</span>
<span class="text-label-sm font-mono text-on-surface-variant">126 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Rowan Atkinson</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Hyper-articulated plosives (P, B, T, K), theatrical timing &amp; clinical comic delivery.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Plosive Mastery</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('atkinson')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
</div>
<!-- Compare Your Own Cadence Bench -->
<div class="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30">
<div class="max-w-2xl mb-6">
<h4 class="text-headline-sm font-headline-sm text-on-surface font-semibold">Contrast Your Audio Stream Against the Masters</h4>
<p class="text-body-sm text-on-surface-variant mt-1">Upload a short recording (under 4MB) or paste your verbatim transcript to calculate your lexical rhythm similarity vector.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="border-2 border-dashed border-outline-variant/40 hover:border-primary/60 p-6 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-surface-container-low/40">
<span class="material-symbols-outlined text-primary text-[32px] mb-2">cloud_upload</span>
<span class="text-body-sm font-medium text-on-surface">Upload Voice File (.mp3, .wav under 4MB)</span>
<span class="text-label-sm text-on-surface-variant/70 mt-1">Audio is transiently processed in RAM and discarded immediately.</span>
</div>
<div class="flex flex-col gap-2">
<textarea class="w-full h-24 bg-surface-container-low border border-outline-variant/30 rounded-xl p-3 text-body-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none" placeholder="Or paste 30-60 seconds of your spoken transcript here to compare cadential entropy..."></textarea>
<button class="self-end bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-semibold text-label-md px-4 py-2 rounded-lg transition-all active:scale-95" onclick="simulateMasterComparison()">
              Compute Acoustic Distance
            </button>
</div>
</div>
<div class="hidden mt-6 p-4 rounded-xl bg-surface-container border border-primary/30 flex items-center justify-between text-body-sm" id="comparison-result">
<span class="text-on-surface">Acoustic resonance calculated: <strong>81.4% match to Received Pronunciation standard</strong>. Minimal glottal stops detected.</span>
<span class="text-secondary font-mono font-bold">Passed Level 6 ICAO/BBC Metric</span>
</div>
</div>
</section>
<!-- ============================================================== -->
<!-- SECTION 6: PERSONALIZED CLASS-TO-CAREER STRATEGIC ROADMAP -->
<!-- ============================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="roadmap">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">alt_route</span>
          Strategic Trajectory Planner
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Class-to-Career Strategic Roadmap</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Map foundational linguistic milestones directly to international universities and institutional peak compensation.
        </p>
</div>
<!-- Roadmap Form Selector -->
<div class="max-w-3xl mx-auto p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 mb-10">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label class="block text-label-sm uppercase tracking-wider text-on-surface-variant mb-1.5">Current Academic Cohort</label>
<select class="w-full bg-surface-container-high border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" id="cohort-selector" onchange="generateRoadmap()">
<option value="class8">Class 8</option>
<option value="class9">Class 9</option>
<option selected="" value="class10">Class 10</option>
<option value="class11">Class 11</option>
<option value="class12">Class 12</option>
<option value="undergrad">Undergraduate Scholar</option>
</select>
</div>
<div>
<label class="block text-label-sm uppercase tracking-wider text-on-surface-variant mb-1.5">Target Sovereign Trajectory</label>
<select class="w-full bg-surface-container-high border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" id="trajectory-selector" onchange="generateRoadmap()">
<option value="screenwriter">Screenwriter &amp; Showrunner (OTT)</option>
<option selected="" value="lawyer">Corporate Lawyer &amp; Global Arbitrator</option>
<option value="pilot">Commercial Airline Captain</option>
<option value="narrative">AAA Narrative Game Designer</option>
<option value="diplomat">International Envoy &amp; Public Orator</option>
</select>
</div>
</div>
</div>
<!-- Dynamic 4-Phase Milestone Display -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative" id="roadmap-milestones">
<!-- Phase 1 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-label-md mb-4">1</div>
<span class="text-label-sm text-primary uppercase tracking-wider font-semibold">Phase 1: Vocabulary &amp; Syntax</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase1-title">Legal Latinate Lexicon</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase1-desc">
            Master 1,200 jurisdictional Latin roots, statutory disambiguation, and active analytical parsing.
          </p>
</div>
<!-- Phase 2 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-label-md mb-4 border border-outline-variant">2</div>
<span class="text-label-sm text-secondary uppercase tracking-wider font-semibold">Phase 2: Standardized Testing</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase2-title">CLAT / LNAT Mastery</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase2-desc">
            Target 99.8th percentile in reading comprehension and critical logic under strict timing constraints.
          </p>
</div>
<!-- Phase 3 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-label-md mb-4 border border-outline-variant">3</div>
<span class="text-label-sm text-tertiary uppercase tracking-wider font-semibold">Phase 3: University Specialization</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase3-title">NLSIU / Oxford BCL</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase3-desc">
            Premier moot court representation, international maritime law briefs, and journal publication.
          </p>
</div>
<!-- Phase 4 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-bold text-label-md mb-4 border border-secondary/40">4</div>
<span class="text-label-sm text-secondary uppercase tracking-wider font-semibold">Phase 4: Sovereign Career</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase4-title">International Partner</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase4-desc">
            Command ₹1.2Cr+ partner retainer presiding over transnational commercial disputes in London &amp; Singapore.
          </p>
</div>
</div>
</section>
<!-- ================================================================= -->
<!-- SECTION 7: INTERACTIVE MINI-CHALLENGES (FIX-EMAIL & WORD-OF-DAY) -->
<!-- ================================================================= -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-secondary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">psychology</span>
          Executive Polish Challenges
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Precision Drills: Micro-Refactoring</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Instantaneous executive transformation: Elevate colloquial drafts into razor-sharp institutional memorandums.
        </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Challenge 1: Fix-the-Email Simulator (7 Cols) -->
<div class="lg:col-span-7 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-4">
<span class="text-label-md font-semibold text-on-surface flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">mark_email_read</span>
                Drill: Executive Email Refactor
              </span>
<span class="text-label-sm text-on-surface-variant">Click to identify weak prose</span>
</div>
<!-- Unpolished Email Box -->
<div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-body-sm space-y-3 font-mono">
<div class="text-on-surface-variant/70 text-[12px]">Subject: Hey, about the funding contract we spoke about earlier...</div>
<div class="text-on-surface leading-relaxed" id="email-body-text">
                "Hey Marc, <br/><br/>
                Just wanted to <span class="bg-error/20 text-error px-1 rounded cursor-pointer" title="Colloquial padding">touch base real quick</span> regarding the seed term sheet. We were kind of thinking maybe the valuation cap was <span class="bg-error/20 text-error px-1 rounded cursor-pointer" title="Hesitant qualifier">a bit too low for us</span> given that we are working super hard on this model. Can we chat tomorrow if you have some free time? <br/><br/>
                Thanks a ton,<br/>
                Alex"
              </div>
</div>
<!-- Refactored AI Output Box (Hidden until action) -->
<div class="hidden mt-4 p-5 rounded-xl bg-surface-container border border-secondary/40 text-body-sm space-y-2 animate-fadeIn" id="email-refactored-box">
<div class="text-secondary text-[12px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">verified</span>
                Institutional C-Suite Version
              </div>
<div class="text-on-surface leading-relaxed">
                "Dear Marc,<br/><br/>
                Following our term sheet review, our advisory board has assessed the initial pre-money valuation against our synthetic model’s validated 4x retention. We request aligning the capital cap at ₹35Cr to mirror our Q3 enterprise pipeline. <br/><br/>
                I welcome a brief 10-minute briefing tomorrow at 14:00 UTC.<br/><br/>
                Respectfully,<br/>
                Alexander Vance"
              </div>
</div>
</div>
<div class="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-label-sm text-on-surface-variant">Eliminates 3 passive hedges &amp; 2 conversational diminutives.</span>
<button class="bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-4 py-2.5 rounded-lg transition-all active:scale-95 flex items-center gap-2" id="refactor-btn" onclick="refactorEmail()">
<span class="material-symbols-outlined text-[18px]">auto_fix_high</span>
              AI Refactor
            </button>
</div>
</div>
<!-- Challenge 2: Word-of-the-Day Institutional Lexicon (5 Cols) -->
<div class="lg:col-span-5 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-4">
<span class="text-label-md font-semibold text-tertiary flex items-center gap-2">
<span class="material-symbols-outlined text-[20px]">auto_stories</span>
                Institutional Lexicon
              </span>
<span class="text-label-sm font-mono text-on-surface-variant">Daily C-Suite Entry</span>
</div>
<div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
<div class="flex items-baseline justify-between">
<h3 class="text-headline-lg font-headline-lg font-bold text-on-surface" id="wod-word">Perspicacious</h3>
<span class="text-label-sm font-mono text-primary" id="wod-ipa">/ˌpɜː.spɪˈkeɪ.ʃəs/</span>
</div>
<div class="text-label-sm text-on-surface-variant mt-1" id="wod-pos">Adjective • Latin <em>perspicax</em> (sharp-sighted)</div>
<div class="mt-4 pt-3 border-t border-outline-variant/20">
<div class="text-label-sm font-semibold text-on-surface">Definition:</div>
<p class="text-body-sm text-on-surface-variant mt-0.5" id="wod-def">
                  Having a ready insight into and understanding of complex sovereign or financial affairs.
                </p>
</div>
<div class="mt-4 pt-3 border-t border-outline-variant/20">
<div class="text-label-sm font-semibold text-secondary">Boardroom Application:</div>
<p class="text-body-sm text-on-surface-variant/90 italic mt-0.5" id="wod-example">
                  "The general counsel made a perspicacious intervention, identifying the ambiguous indemnity loophole before contract execution."
                </p>
</div>
</div>
</div>
<!-- Lexicon Cycle Button -->
<div class="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-label-sm text-on-surface-variant">Tier-3 Executive Lexicon</span>
<button class="text-label-md text-primary hover:text-primary-container font-semibold flex items-center gap-1 transition-colors" onclick="cycleWordOfDay()">
              Next Entry <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- SECTION 8: SCHOOL-WIDE SPEECH LEADERBOARD & PRIVACY GOVERNANCE -->
<!-- ========================================================================= -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="telemetry">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">leaderboard</span>
          Articulation Telemetry
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Consortium Speech Leaderboard</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Anonymized articulation benchmarking measuring cadence stability, lexical density, and zero-filler eloquence across secondary cohorts.
        </p>
</div>
<!-- Leaderboard Table -->
<div class="overflow-x-auto rounded-2xl border border-outline-variant/30 bg-surface-container-low mb-8">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-outline-variant/20 text-label-sm uppercase tracking-wider text-on-surface-variant bg-surface-container">
<th class="py-4 px-6">Rank</th>
<th class="py-4 px-6">Delegate Alias</th>
<th class="py-4 px-6">Cohort</th>
<th class="py-4 px-6">Specialized Discipline</th>
<th class="py-4 px-6 text-right">Articulation Score</th>
<th class="py-4 px-6 text-center">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/10 text-body-sm font-medium">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-secondary">01</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-secondary/10 border border-secondary/30 text-secondary flex items-center justify-center text-label-sm font-mono font-bold">AV</span>
                Delegate Orion-9
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 12</td>
<td class="py-4 px-6 text-on-surface">International Arbitration</td>
<td class="py-4 px-6 text-right font-mono font-bold text-secondary">98.4 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-secondary/10 border border-secondary/30 text-secondary font-semibold">Exemplary</span>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-on-surface-variant">02</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center text-label-sm font-mono font-bold">KS</span>
                Delegate Zephyr-4
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 11</td>
<td class="py-4 px-6 text-on-surface">Screenplay &amp; OTT Pitch</td>
<td class="py-4 px-6 text-right font-mono font-bold text-primary">97.1 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-primary/10 border border-primary/30 text-primary font-semibold">Exemplary</span>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-on-surface-variant">03</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary flex items-center justify-center text-label-sm font-mono font-bold">MR</span>
                Delegate Callisto-7
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 10</td>
<td class="py-4 px-6 text-on-surface">Aviation Radiotelephony</td>
<td class="py-4 px-6 text-right font-mono font-bold text-on-surface">95.8 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-surface-container-high text-on-surface-variant border border-outline-variant/30 font-semibold">Verified</span>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-on-surface-variant">04</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center text-label-sm font-mono font-bold">TL</span>
                Delegate Aurora-1
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 12</td>
<td class="py-4 px-6 text-on-surface">Transnational Diplomacy</td>
<td class="py-4 px-6 text-right font-mono font-bold text-on-surface">94.9 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-surface-container-high text-on-surface-variant border border-outline-variant/30 font-semibold">Verified</span>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Verified Privacy Governance Banner -->
<div class="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary text-[26px]">verified_user</span>
<div>
<div class="text-body-sm font-semibold text-on-surface">Transient Audio Governance &amp; Data Protection</div>
<div class="text-label-sm text-on-surface-variant">
              All voice data processed transiently in compliance with strict privacy protocols. No audio is stored permanently.
            </div>
</div>
</div>
<span class="text-label-sm font-mono text-secondary px-3 py-1 rounded bg-secondary/10 border border-secondary/30 shrink-0">
          ISO / Zero-Log Enforced
        </span>
</div>
</section>
<!-- =============================================== -->
<!-- SECTION 9: ARTISTIC AI QR CODE PORTAL -->
<!-- =============================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="qr-portal">
<div class="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-surface-container-low border border-outline-variant/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
<!-- Ambient Radial Light -->
<div class="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
<!-- Left Column: Copy & Actions -->
<div class="max-w-lg">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-secondary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">devices</span>
            Direct Mobile Stall Gateway
          </div>
<h3 class="text-headline-lg font-headline-lg font-bold text-on-surface">Experience Verbum Premier on Personal Devices</h3>
<p class="text-body-md text-on-surface-variant mt-3 leading-relaxed">
            Scan to initiate instantaneous microphone calibration, acoustic telemetry benchmark tests, and personalized career roadmaps directly on your smartphone.
          </p>
<div class="mt-8 flex flex-wrap items-center gap-4">
<button class="inline-flex items-center gap-2 bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-5 py-3 rounded-lg transition-all active:scale-95 shadow-[0_0_16px_rgba(29,78,216,0.3)]" onclick="downloadVectorQr()">
<span class="material-symbols-outlined text-[20px]">download</span>
              Download Vector PNG
            </button>
<div class="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span class="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span>Ultra-low latency web app</span>
</div>
</div>
</div>
<!-- Right Column: Artistic Styled QR Code with Neon Frame -->
<div class="relative shrink-0 p-5 rounded-2xl bg-surface-container-lowest border-2 border-primary/40 shadow-[0_0_30px_rgba(29,78,216,0.25)] flex flex-col items-center">
<!-- Circuit pattern corners -->
<div class="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary"></div>
<div class="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary"></div>
<div class="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary"></div>
<div class="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary"></div>
<!-- Stylized High-Density QR Canvas -->
<div class="w-48 h-48 bg-white p-3 rounded-xl flex items-center justify-center relative overflow-hidden">
<!-- Simulated QR Visual pattern -->
<div class="w-full h-full bg-slate-900 rounded grid grid-cols-6 grid-rows-6 gap-1 p-2 relative">
<div class="bg-white col-span-2 row-span-2 rounded-sm p-1 flex items-center justify-center">
<div class="w-full h-full bg-slate-900 rounded-xs"></div>
</div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2 row-span-2 rounded-sm p-1 flex items-center justify-center">
<div class="w-full h-full bg-slate-900 rounded-xs"></div>
</div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2 row-span-2 rounded-sm p-1 flex items-center justify-center">
<div class="w-full h-full bg-slate-900 rounded-xs"></div>
</div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-4"></div>
<!-- Center Emblem -->
<div class="absolute inset-0 flex items-center justify-center">
<div class="w-9 h-9 rounded-full bg-primary-container border-2 border-white flex items-center justify-center shadow-lg">
<span class="text-white font-bold text-[12px] font-headline-md tracking-tighter">VP</span>
</div>
</div>
</div>
</div>
<span class="text-label-sm font-mono text-primary mt-3 tracking-widest uppercase font-semibold">VERBUM.CONSORTIUM</span>
</div>
</div>
</section>
</main>
<!-- ============================================================= -->
<!-- SECTION 10: HIDDEN EXECUTIVE ADMIN CONSOLE & 5-TIER AI ROUTER -->
<!-- (Toggleable via click seal or hotkey Ctrl+Shift+A) -->
<!-- ============================================================= -->
<div class="fixed inset-0 z-[100] bg-surface-dim/80 backdrop-blur-xl flex items-center justify-center p-4 hidden" id="admin-modal">
<div class="w-full max-w-4xl bg-surface-container-low border border-outline-variant rounded-2xl shadow-2xl p-6 sm:p-8 relative max-h-[921px] overflow-y-auto">
<!-- Close Button -->
<button class="absolute top-6 right-6 p-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all" onclick="toggleAdminModal()">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
<!-- Admin Header -->
<div class="flex items-center gap-3 pb-6 border-b border-outline-variant/20">
<div class="w-10 h-10 rounded-xl bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[24px]">terminal</span>
</div>
<div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Institutional Router &amp; Infrastructure Console</h3>
<p class="text-label-sm text-on-surface-variant">5-Tier Autonomous Redundancy Orchestrator &amp; Feature Toggles</p>
</div>
</div>
<!-- 5-Tier AI Router Status -->
<div class="my-6">
<div class="flex items-center justify-between mb-3">
<h4 class="text-label-md font-semibold text-on-surface uppercase tracking-wider">5-Tier Failover Telemetry</h4>
<span class="text-label-sm font-mono text-secondary">Zero-Downtime Pipeline</span>
</div>
<div class="space-y-3 font-mono text-body-sm">
<!-- Tier 1 -->
<div class="p-3.5 rounded-xl bg-surface-container border border-secondary/40 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
<div>
<span class="text-on-surface font-semibold">Tier 1: Cloudflare Workers AI</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Primary edge serverless compute (10,000 Neurons/day pool)</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-secondary/15 text-secondary font-bold">ACTIVE (14ms)</span>
</div>
<!-- Tier 2 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
<div>
<span class="text-on-surface font-semibold">Tier 2: Gemini Multi-Key Gateway</span>
<span class="text-label-sm text-on-surface-variant block font-sans">3 API keys pooled in round-robin fallback</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-primary/10 text-primary font-bold">HOT STANDBY</span>
</div>
<!-- Tier 3 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-outline"></span>
<div>
<span class="text-on-surface font-semibold">Tier 3: Tasfin Free LLM Endpoint</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Community distributed backup cluster</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-bold">READY</span>
</div>
<!-- Tier 4 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<div>
<span class="text-on-surface font-semibold">Tier 4: Local Ryzen 7 16GB Host Node</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Ollama Llama-3.2 3B tunnel for offline stall environments</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-tertiary/10 text-tertiary font-bold">TUNNELED</span>
</div>
<!-- Tier 5 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
<div>
<span class="text-on-surface font-semibold">Tier 5: Client On-Device WebSpeech &amp; Rule Engine</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Browser-local zero-network fallback synthesis</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-surface-container text-secondary-fixed-dim font-bold">READY</span>
</div>
</div>
</div>
<!-- Manual Router Override Selector -->
<div class="p-4 rounded-xl bg-surface-container border border-outline-variant/30 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<span class="text-body-sm font-semibold text-on-surface">Manual AI Routing Override</span>
<span class="text-label-sm text-on-surface-variant block">Force traffic to specific nodes during network congestion</span>
</div>
<select class="bg-surface-container-highest border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary focus:outline-none" id="router-override-select">
<option value="auto">Autonomous Dynamic Failover</option>
<option value="force-gemini">Force Gemini Pool</option>
<option value="force-local">Force Local Ryzen Node</option>
<option value="force-client">Force Client WebSpeech</option>
</select>
</div>
<!-- Modular Feature Kill-Switches -->
<div class="border-t border-outline-variant/20 pt-6">
<h4 class="text-label-md font-semibold text-on-surface uppercase tracking-wider mb-4">Modular Feature Kill-Switches</h4>
<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Speech Lab</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Leaderboard</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Roleplay Sandbox</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">QR Portal</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Roadmaps</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">School Banner</span>
</label>
</div>
</div>
</div>
</div>
<!-- ============================================== -->
<!-- FOOTER (Shared Components JSON Anchor & School) -->
<!-- ============================================== -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest docked full-width bottom border-t border-outline-variant/20 flat no shadows mt-20">
<div class="w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto py-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
<!-- Copyright from JSON Anchor & Toggleable School Badge -->
<div class="flex flex-col items-start gap-1">
<span class="text-label-sm font-label-sm text-on-surface-variant dark:text-on-surface-variant">
          © 2025 Verbum Sovereign Career Consortium. High-Stakes Institutional Communication Benchmarking.
        </span>
<!-- Official Copyright Badge from Prompt Requirement -->
<div class="flex items-center gap-2 mt-1">
<span class="text-label-sm font-semibold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
            © Kanakia International School Mira Road
          </span>
<span class="text-[11px] text-on-surface-variant/60">Official Institutional Pavilion Showcase</span>
</div>
</div>
<!-- Footer Navigation Links from JSON Anchor -->
<div class="flex flex-wrap items-center gap-4 text-label-sm font-label-sm text-on-surface-variant dark:text-on-surface-variant">
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#roadmap">Sovereign Protocol</a>
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#benchmarking">Neural Latency Benchmark</a>
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#sectors">Sector Clearance Matrix</a>
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#telemetry">Telemetry Consent</a>
<button class="hover:text-primary dark:hover:text-primary transition-colors duration-150 cursor-pointer" onclick="toggleAdminModal()">Admin Routing</button>
</div>
</div>
</footer>
<!-- INLINE VANILLA JAVASCRIPT LOGIC FOR REAL-TIME INTERACTION -->
<script>
    // 1. Scroll Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('scroll-progress-bar').style.width = scrolled + '%';
    });

    // 2. Filter Careers in Section 2
    function filterCareers(category) {
      const cards = document.querySelectorAll('.career-card');
      const buttons = document.querySelectorAll('#career-filter-tabs .filter-btn');
      
      buttons.forEach(btn => {
        btn.classList.remove('bg-surface-container-high', 'text-on-surface');
        btn.classList.add('text-on-surface-variant');
      });
      event.target.classList.add('bg-surface-container-high', 'text-on-surface');
      event.target.classList.remove('text-on-surface-variant');

      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-sector') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // 3. Teleprompter Script Selector
    const scripts = {
      hollywood: {
        title: "Hollywood Pitch: Sci-Fi Pilot",
        text: "\"Ladies and gentlemen of the network room: The series begins in 2088 inside orbital salvage bay nine. What appears to be an abandoned cryo-vessel is essentially carrying the sole uncorrupted neural seed of humanity. We are not selling a space opera; we are selling the final legal trial of biological consciousness.\""
      },
      aviation: {
        title: "Aviation Emergency Clearance",
        text: "\"Pan-Pan, Pan-Pan, Pan-Pan. London Control, Speedbird 118 heavy. Descending flight level 100, established on direct vector for runway 27 Right. Multiple hydraulic telemetry deviations; request non-standard separation and full rollout priority on arrival.\""
      },
      court: {
        title: "Supreme Court Oral Argument",
        text: "\"May it please the Court: The sovereign treaty of 1994 does not admit of bilateral ambiguity. If this bench construes clause twelve to permit unilateral tariff suspensions, it overturns thirty years of maritime trade consensus without statutory warrant.\""
      },
      boardroom: {
        title: "Transnational M&A Defense",
        text: "\"Members of the board: A hostile takeover at a fifteen percent premium fails to reflect our sovereign defense patents. Our recommendation is immediate poison pill activation coupled with a Singapore arbitration injunction.\""
      }
    };

    function updateTeleprompterScript(key) {
      const item = scripts[key];
      if (item) {
        document.getElementById('script-title-display').innerText = item.title;
        document.getElementById('teleprompter-text').innerText = item.text;
      }
    }

    // 4. Waveform Audio Simulator
    const canvas = document.getElementById('waveform-canvas');
    const ctx = canvas.getContext('2d');
    let isRecording = false;
    let animFrame;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function drawIdleWaveform() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(183, 196, 255, 0.2)';
      ctx.lineWidth = 2;
      const centerY = canvas.height / 2;
      ctx.moveTo(0, centerY);
      for (let x = 0; x < canvas.width; x += 10) {
        ctx.lineTo(x, centerY + Math.sin(x * 0.03) * 3);
      }
      ctx.stroke();
    }
    drawIdleWaveform();

    function drawActiveWaveform() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const bars = Math.floor(canvas.width / 8);
      for (let i = 0; i < bars; i++) {
        const height = Math.random() * (canvas.height * 0.75);
        const x = i * 8;
        const y = (canvas.height - height) / 2;
        ctx.fillStyle = '#68dba9';
        ctx.fillRect(x, y, 4, height);
      }
      if (isRecording) {
        animFrame = requestAnimationFrame(drawActiveWaveform);
      }
    }

    function toggleRecording() {
      isRecording = !isRecording;
      const btn = document.getElementById('record-btn');
      const text = document.getElementById('record-text');
      const icon = document.getElementById('record-icon');
      const overlay = document.getElementById('recording-status-overlay');

      if (isRecording) {
        btn.classList.remove('bg-error');
        btn.classList.add('bg-secondary-container');
        text.innerText = "Listening...";
        icon.innerText = "graphic_eq";
        overlay.classList.add('hidden');
        drawActiveWaveform();
      } else {
        btn.classList.add('bg-error');
        btn.classList.remove('bg-secondary-container');
        text.innerText = "Record Voice Sample";
        icon.innerText = "mic";
        cancelAnimationFrame(animFrame);
        drawIdleWaveform();
        overlay.classList.remove('hidden');
        overlay.innerText = "Audio captured. Calculating phonetic vectors...";
        setTimeout(runAcousticAnalysis, 600);
      }
    }

    function runAcousticAnalysis() {
      const fluency = Math.floor(Math.random() * 6) + 93;
      const wpm = Math.floor(Math.random() * 10) + 134;
      document.getElementById('val-fluency').innerText = fluency + " / 100";
      document.getElementById('bar-fluency').style.width = fluency + "%";
      document.getElementById('val-wpm').innerText = wpm + " WPM";
      document.getElementById('recording-status-overlay').innerText = "Telemetry synchronized. Acoustic report generated.";
    }

    function resetSpeechLab() {
      if (isRecording) toggleRecording();
      document.getElementById('teleprompter-script-selector').value = 'hollywood';
      updateTeleprompterScript('hollywood');
      drawIdleWaveform();
      document.getElementById('recording-status-overlay').innerText = "Ready for acoustic input. Press 'Record Voice Sample'.";
    }

    // 5. Conversational Roleplay Logic
    const personas = {
      founder: {
        name: "Marc Andreessen Protocol (Venture Partner)",
        status: "Strict tone: Expects tight narrative structure without fluff.",
        initial: "\"We’ve reviewed your slide on synthetic language telemetry. Every founder uses the word 'revolutionary'. Exactly what linguistic moat protects your model against frontier open-weights when deployed in cross-border arbitration?\""
      },
      boardroom: {
        name: "Hostile Stakeholder (Global M&A Council)",
        status: "Interrogative: Zero tolerance for vague compliance hedges.",
        initial: "\"Counselor, you are telling this board that European anti-trust clearance is 'likely'. On what statutory authority can we risk eight hundred million euros on a probability?\""
      },
      aviation: {
        name: "First Officer Vance (Cockpit Emergency)",
        status: "Aviation Assertiveness: Requires unambiguous standard phraseology.",
        initial: "\"Captain, we have contradictory pitch trim alerts and crosswind shear at two hundred feet. Are you executing the go-around protocol or continuing approach?\""
      }
    };

    function selectPersona(key) {
      document.querySelectorAll('[id^="persona-"]').forEach(el => {
        el.classList.remove('border-primary', 'border-2', 'bg-surface-container-high');
        el.classList.add('border-outline-variant/30', 'bg-surface-container-low');
      });
      const selected = document.getElementById('persona-' + key);
      selected.classList.add('border-primary', 'border-2', 'bg-surface-container-high');
      selected.classList.remove('bg-surface-container-low');

      const data = personas[key];
      document.getElementById('active-persona-name').innerText = data.name;
      document.getElementById('active-persona-status').innerText = data.status;
      
      const msgContainer = document.getElementById('roleplay-messages');
      msgContainer.innerHTML = `
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
            <span class="material-symbols-outlined text-[18px]">smart_toy</span>
          </div>
          <div class="bg-surface-container p-3.5 rounded-xl border border-outline-variant/30 max-w-xl text-body-sm text-on-surface leading-relaxed">
            ${data.initial}
          </div>
        </div>
      `;
    }

    function fillRoleplayPrompt(text) {
      document.getElementById('roleplay-input').value = text;
    }

    function sendRoleplayMessage() {
      const input = document.getElementById('roleplay-input');
      const val = input.value.trim();
      if (!val) return;

      const msgContainer = document.getElementById('roleplay-messages');
      // User message
      msgContainer.innerHTML += `
        <div class="flex items-start gap-3 justify-end">
          <div class="bg-primary-container text-white p-3.5 rounded-xl max-w-xl text-body-sm leading-relaxed shadow-sm">
            ${val}
          </div>
          <div class="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-label-sm shrink-0">
            YOU
          </div>
        </div>
      `;
      input.value = '';
      msgContainer.scrollTop = msgContainer.scrollHeight;

      // Simulated AI counter response
      setTimeout(() => {
        msgContainer.innerHTML += `
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
              <span class="material-symbols-outlined text-[18px]">smart_toy</span>
            </div>
            <div class="bg-surface-container p-3.5 rounded-xl border border-outline-variant/30 max-w-xl text-body-sm text-on-surface leading-relaxed">
              "Noted. That answers the structural concern with proper gravitas. Your cadence index scored in the 96th percentile for assertiveness."
            </div>
          </div>
        `;
        msgContainer.scrollTop = msgContainer.scrollHeight;
      }, 700);
    }

    // 6. Master Orator Sample Simulator
    function playSampleAcoustic(speaker) {
      alert("Acoustic sample loaded for " + speaker.toUpperCase() + ". Playing 10-second reference RP segment with live formant visualizer.");
    }

    function simulateMasterComparison() {
      const res = document.getElementById('comparison-result');
      res.classList.remove('hidden');
    }

    // 7. Dynamic Roadmap Generator
    const roadmaps = {
      lawyer: {
        p1: ["Legal Latinate Lexicon", "Master 1,200 jurisdictional Latin roots, statutory disambiguation, and active analytical parsing."],
        p2: ["CLAT / LNAT Mastery", "Target 99.8th percentile in reading comprehension and critical logic under strict timing constraints."],
        p3: ["NLSIU / Oxford BCL", "Premier moot court representation, international maritime law briefs, and journal publication."],
        p4: ["International Partner", "Command ₹1.2Cr+ partner retainer presiding over transnational commercial disputes in London & Singapore."]
      },
      screenwriter: {
        p1: ["Dramatic Prosody & Syntax", "Deconstruct 50 classical theatrical scripts for dialogue rhythm, subtextual irony, and character voice."],
        p2: ["Portfolio & Showrunner Reels", "Complete 2 spec teleplays for international festival circulation; submit to FTII/NYU pitch pipelines."],
        p3: ["NYU Tisch / FTII Direction", "Master multi-character arc orchestration and European co-production pitching labs."],
        p4: ["Lead Showrunner (OTT)", "Command ₹65L+ per season package helming international original series for streaming conglomerates."]
      },
      pilot: {
        p1: ["ICAO Standard Phraseology", "Flawless elimination of colloquial hesitations; mastering phonetic alphabet and rapid readback cadence."],
        p2: ["DGCA & Commercial License", "Command flight simulator instrument conditions with calm verbal authority during simulated turbine failure."],
        p3: ["Type Rating & Fleet Command", "Induction on Boeing 787 / Airbus A350 widebody international oceanic routes."],
        p4: ["International Captain", "Command ₹85L+ compensation as senior transatlantic line training captain."]
      },
      narrative: {
        p1: ["Interactive Rhetoric & World-building", "Design branching character dialogue graphs with distinct socio-linguistic registers."],
        p2: ["DigiPen / NID Portfolio", "Develop playable text-parser prototypes showcasing conditional narrative delivery."],
        p3: ["Senior Game Studio Writer", "Lead narrative lore and voice actor direction for multi-platform AAA video games."],
        p4: ["Creative Franchise Director", "Command ₹80L+ shaping transmedia intellectual properties spanning games, film, and literature."]
      },
      diplomat: {
        p1: ["Bilateral Rhetoric & Treaty English", "Parsing UN security council resolutions and ambiguity containment strategies."],
        p2: ["UPSC IFS / Oxford Diplomatic Studies", "Flawless oral interview defense and geopolitical argumentation under intense panel scrutiny."],
        p3: ["Permanent Mission Counselor", "Drafting bilateral agreements and delivering sovereign interventions at Geneva assemblies."],
        p4: ["Ambassador & Special Envoy", "Represent sovereign interests in multilateral security pacts and trade treaty negotiations."]
      }
    };

    function generateRoadmap() {
      const trajectory = document.getElementById('trajectory-selector').value;
      const data = roadmaps[trajectory] || roadmaps.lawyer;

      document.getElementById('phase1-title').innerText = data.p1[0];
      document.getElementById('phase1-desc').innerText = data.p1[1];
      document.getElementById('phase2-title').innerText = data.p2[0];
      document.getElementById('phase2-desc').innerText = data.p2[1];
      document.getElementById('phase3-title').innerText = data.p3[0];
      document.getElementById('phase3-desc').innerText = data.p3[1];
      document.getElementById('phase4-title').innerText = data.p4[0];
      document.getElementById('phase4-desc').innerText = data.p4[1];
    }

    // 8. Fix-the-Email Drill
    function refactorEmail() {
      const refactoredBox = document.getElementById('email-refactored-box');
      refactoredBox.classList.remove('hidden');
      document.getElementById('refactor-btn').classList.add('bg-secondary-container');
      document.getElementById('refactor-btn').innerText = "Refactored";
    }

    // 9. Word of the Day Cycle
    const words = [
      {
        word: "Perspicacious",
        ipa: "/ˌpɜː.spɪˈkeɪ.ʃəs/",
        pos: "Adjective • Latin perspicax (sharp-sighted)",
        def: "Having a ready insight into and understanding of complex sovereign or financial affairs.",
        ex: "\"The general counsel made a perspicacious intervention, identifying the ambiguous indemnity loophole before contract execution.\""
      },
      {
        word: "Equivocate",
        ipa: "/ɪˈkwɪv.ə.keɪt/",
        pos: "Verb • Latin aequivocus (equal voice)",
        def: "To use ambiguous language to conceal truth or avoid committing oneself in high-stakes negotiations.",
        ex: "\"A seasoned diplomat never equivocates under oath; they deploy precise statutory reservations instead.\""
      },
      {
        word: "Grandiloquent",
        ipa: "/ɡrænˈdɪl.ə.kwənt/",
        pos: "Adjective • Latin grandis (great) + loqui (speak)",
        def: "Pompous or extravagant in language, style, or manner; style lacking executive substance.",
        ex: "\"The board dismissed the pitch deck as grandiloquent rhetoric unsupported by audited balance sheets.\""
      }
    ];
    let wordIdx = 0;
    function cycleWordOfDay() {
      wordIdx = (wordIdx + 1) % words.length;
      const w = words[wordIdx];
      document.getElementById('wod-word').innerText = w.word;
      document.getElementById('wod-ipa').innerText = w.ipa;
      document.getElementById('wod-pos').innerHTML = w.pos;
      document.getElementById('wod-def').innerText = w.def;
      document.getElementById('wod-example').innerText = w.ex;
    }

    // 10. QR Vector PNG Download Action
    function downloadVectorQr() {
      alert("Vector QR Package (High-Resolution 3000x3000px PNG + SVG with Kanakia Pavilion metadata) initiated for print display.");
    }

    // 11. Hidden Admin Modal Trigger (5-Click Seal or Shortcut)
    let sealClicks = 0;
    document.getElementById('brand-logo-seal').addEventListener('click', () => {
      sealClicks++;
      if (sealClicks >= 5) {
        toggleAdminModal();
        sealClicks = 0;
      }
    });
    document.getElementById('admin-modal-trigger').addEventListener('click', toggleAdminModal);

    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        toggleAdminModal();
      }
    });

    function toggleAdminModal() {
      const modal = document.getElementById('admin-modal');
      modal.classList.toggle('hidden');
    }

    // 12. Theme Switcher Pill
    function switchTheme(theme) {
      const cosmic = document.getElementById('theme-btn-cosmic');
      const emerald = document.getElementById('theme-btn-emerald');
      const solar = document.getElementById('theme-btn-solar');

      [cosmic, emerald, solar].forEach(b => {
        b.classList.remove('bg-surface-container-high', 'text-on-surface', 'font-medium');
        b.classList.add('text-on-surface-variant');
      });

      if (theme === 'cosmic') {
        cosmic.classList.add('bg-surface-container-high', 'text-on-surface', 'font-medium');
        document.documentElement.style.setProperty('--tw-bg-opacity', '1');
      } else if (theme === 'emerald') {
        emerald.classList.add('bg-surface-container-high', 'text-on-surface', 'font-medium');
      } else if (theme === 'solar') {
        solar.classList.add('bg-surface-container-high', 'text-on-surface', 'font-medium');
      }
    }
  </script>
</body></html> add this in v2 and set up so it can be toggaled to this page from admin console and push it generate 5 different website eaCH wifh diff features. also add v3 as attached set it up."C:\Users\hp\Downloads\open-mic-careerfair.zip"
```
</details>

#### Prompt 15 | 2026-10-25T16:53:49Z

<details><summary><b>Large Prompt Payload (click to expand)</b></summary>

```html
v4 is <!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Verbum Premier — Global Career Architecture</title>
<!-- Material Symbols & Typography -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400;1,600&amp;family=Public+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
            "surface-container-lowest": "#ffffff",
            "primary-fixed": "#d9e2ff",
            "tertiary-fixed": "#f9e37a",
            "on-tertiary-fixed-variant": "#524600",
            "on-primary": "#ffffff",
            "error": "#ba1a1a",
            "on-tertiary-fixed": "#211b00",
            "error-container": "#ffdad6",
            "background": "#faf9fa",
            "on-secondary-fixed-variant": "#42474b",
            "surface-bright": "#faf9fa",
            "on-surface": "#1b1c1d",
            "surface-variant": "#e3e2e3",
            "secondary-fixed": "#dfe3e8",
            "on-primary-fixed": "#001946",
            "secondary": "#5a5f63",
            "on-secondary-fixed": "#171c20",
            "on-primary-fixed-variant": "#00419d",
            "inverse-surface": "#303031",
            "primary-fixed-dim": "#b1c5ff",
            "inverse-on-surface": "#f2f0f1",
            "on-tertiary": "#ffffff",
            "tertiary": "#6d5e00",
            "on-error": "#ffffff",
            "on-error-container": "#93000a",
            "primary": "#094cb2",
            "secondary-fixed-dim": "#c2c7cc",
            "surface-tint": "#2259bf",
            "on-primary-container": "#e7ebff",
            "primary-container": "#3366cc",
            "surface-container-low": "#f5f3f4",
            "secondary-container": "#dfe3e8",
            "surface-container": "#efedee",
            "surface-dim": "#dbdadb",
            "surface-container-high": "#e9e8e9",
            "on-secondary-container": "#606569",
            "on-background": "#1b1c1d",
            "tertiary-fixed-dim": "#dcc661",
            "surface": "#faf9fa",
            "tertiary-container": "#bfab49",
            "on-tertiary-container": "#4a3f00",
            "on-surface-variant": "#434653",
            "outline-variant": "#c3c6d5",
            "outline": "#737784",
            "inverse-primary": "#b1c5ff",
            "surface-container-highest": "#e3e2e3",
            "on-secondary": "#ffffff"
          },
          "borderRadius": {
            "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
          },
          "fontFamily": {
            "headline": ["Noto Serif", "serif"],
            "display": ["Noto Serif", "serif"],
            "body": ["Inter", "sans-serif"],
            "label": ["Public Sans", "sans-serif"]
          }
        }
      }
    }
  </script>
<style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
    }
    .custom-scroll::-webkit-scrollbar {
      display: none;
    }
    .custom-scroll {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    @keyframes wavePulse {
      0%, 100% { height: 6px; }
      50% { height: 28px; }
    }
    .waveform-bar {
      animation: wavePulse 1.2s ease-in-out infinite;
    }
  </style>
</head>
<body class="bg-background text-on-surface font-body antialiased selection:bg-tertiary-fixed selection:text-on-tertiary-fixed pb-24">
<!-- Mobile Max-Width Container -->
<div class="max-w-md mx-auto min-h-screen bg-surface-bright relative shadow-2xl overflow-x-hidden flex flex-col">
<!-- Top Navigation Anchor (Shared Component: TopAppBar with Exec Casing) -->
<header class="bg-surface/80 dark:bg-surface/80 backdrop-blur-md shadow-none docked full-width top-0 sticky z-40">
<div class="flex justify-between items-center w-full px-4 py-3 max-w-md mx-auto">
<div class="flex items-center gap-3">
<button aria-label="Toggle menu" class="p-2 -ml-2 rounded-lg text-on-surface hover:bg-surface-container-high transition-colors active:opacity-80 transition-opacity duration-150" id="drawerToggle">
<span class="material-symbols-outlined text-2xl">menu</span>
</button>
<div class="flex items-center gap-1.5">
<span class="font-headline text-lg tracking-normal font-semibold text-on-surface">Alexandria Exec</span>
<span class="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-pulse"></span>
</div>
</div>
<div class="flex items-center gap-2">
<div class="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-low text-[10px] font-label font-medium text-on-surface-variant">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>AI Gateway Online</span>
</div>
<button class="p-2 -mr-2 rounded-lg text-primary hover:bg-surface-container-high transition-colors active:opacity-80 transition-opacity duration-150">
<span class="material-symbols-outlined text-xl">graphic_eq</span>
</button>
</div>
</div>
<!-- Curated Theme Pill Filters -->
<div class="px-4 pb-2.5 pt-0.5 flex gap-1.5 overflow-x-auto custom-scroll text-xs">
<button class="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label font-semibold whitespace-nowrap shadow-sm">Solar Gold</button>
<button class="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label whitespace-nowrap">Cosmic Dark</button>
<button class="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label whitespace-nowrap">Emerald Bio</button>
<button class="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label whitespace-nowrap">Cyber Violet</button>
</div>
</header>
<!-- Side Drawer Navigation Modal (Shared Component: NavigationDrawer) -->
<div class="fixed inset-0 bg-inverse-surface/40 backdrop-blur-xs z-50 hidden transition-opacity" id="drawerOverlay">
<div class="docked full-height left-0 w-4/5 max-w-xs bg-surface-container-low shadow-2xl shadow-on-surface/5 flex flex-col h-full p-6 justify-between transform -translate-x-full transition-transform duration-300" id="drawerContent">
<div>
<!-- Header Profile -->
<div class="flex items-center justify-between pb-6">
<div class="flex items-center gap-3">
<div class="w-11 h-11 rounded-full bg-surface-dim overflow-hidden flex items-center justify-center border-2 border-tertiary-fixed">
<span class="material-symbols-outlined text-tertiary text-2xl">account_circle</span>
</div>
<div>
<h4 class="font-headline text-base tracking-normal font-semibold text-on-surface">Julian Vance</h4>
<p class="text-xs text-on-surface-variant">Chief Communications Officer</p>
<p class="text-[10px] font-label text-tertiary font-semibold uppercase mt-0.5">Vocal Presence: 98th Percentile</p>
</div>
</div>
<button class="p-1 rounded text-on-surface-variant hover:bg-surface-container-highest" id="drawerClose">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<!-- Drawer Navigation List -->
<nav class="space-y-1 pt-2">
<a class="flex items-center gap-3 bg-tertiary-fixed/40 text-tertiary px-4 py-3 rounded-lg font-medium active:scale-[0.99] transition-transform duration-150" href="#speech-lab">
<span class="material-symbols-outlined">graphic_eq</span>
<span>Speech Lab</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant px-4 py-3 rounded-lg hover:bg-surface-container-highest active:scale-[0.99] transition-all" href="#roleplay">
<span class="material-symbols-outlined">record_voice_over</span>
<span>Roleplay Simulations</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant px-4 py-3 rounded-lg hover:bg-surface-container-highest active:scale-[0.99] transition-all" href="#executive-roster">
<span class="material-symbols-outlined">workspace_premium</span>
<span>Executive Roster</span>
</a>
<a class="flex items-center gap-3 text-on-surface-variant px-4 py-3 rounded-lg hover:bg-surface-container-highest active:scale-[0.99] transition-all" href="#archival-library">
<span class="material-symbols-outlined">local_library</span>
<span>Archival Library</span>
</a>
</nav>
</div>
<div class="pt-6 bg-surface-container-lowest/50 p-3 rounded-xl">
<p class="text-xs font-label text-on-surface-variant">Verbum Premier Global Architecture</p>
<p class="text-[10px] text-outline mt-1">High-Stakes Cadence Engine v4.2</p>
</div>
</div>
</div>
<!-- Main Content Canvas -->
<main class="flex-1 px-4 pt-3 pb-8 space-y-6">
<!-- SECTION 1: HERO & 3D INTERACTIVE ACOUSTIC CRYSTAL -->
<section class="space-y-4">
<!-- Eyebrow Pill -->
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-label font-bold tracking-wide">
<span class="material-symbols-outlined text-xs">auto_awesome</span>
<span>HIGH-STAKES VOCAL ARCHITECTURE</span>
</div>
<!-- Authoritative Serif Headline -->
<h1 class="font-headline text-3xl sm:text-4xl leading-[1.18] font-bold tracking-tight text-on-surface">
          How Articulate English Commands Global High-Value Careers
        </h1>
<!-- Editorial Standfirst -->
<p class="text-sm font-body text-on-surface-variant leading-relaxed">
          From multi-million dollar cross-border M&amp;A arbitrations to visionary Hollywood writers’ rooms, vocal authority is the ultimate structural leverage.
        </p>
<!-- 3D Three.js Interactive Hero Canvas -->
<div class="relative w-full h-72 rounded-2xl overflow-hidden bg-surface-container-highest/60 flex items-center justify-center p-2">
<!-- STITCH_THREEJS_START:ANIMATION_6 class="w-full h-72 rounded-3xl bg-transparent" -->
<div class="w-full h-72 rounded-3xl bg-transparent" style="display:block;">
<script src="https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js"></script>
<div id="threejs-container-ANIMATION_6" style="width:100%;height:100%"></div>
<script>
(function() {
  const container = document.getElementById('threejs-container-ANIMATION_6');
  const devicePixelRatio = window.devicePixelRatio || 1;
  const width = container.clientWidth || window.innerWidth || 390;
const height = container.clientHeight || 320;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.z = 4.2;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
container.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xfacc15, 2.5, 50); // Vibrant Solar Yellow
pointLight1.position.set(3, 4, 3);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0x38bdf8, 2.0, 50); // Cyan rim light
pointLight2.position.set(-3, -3, 2);
scene.add(pointLight2);

// Central group for speech / audio acoustic resonance 3D sphere
const group = new THREE.Group();
scene.add(group);

// 3D Core Golden Crystal/Icosahedron
const coreGeo = new THREE.IcosahedronGeometry(1.0, 2);
const coreMat = new THREE.MeshPhongMaterial({
  color: 0x0f172a,
  emissive: 0xca8a04,
  specular: 0xfef08a,
  shininess: 90,
  wireframe: true,
  transparent: true,
  opacity: 0.85
});
const coreMesh = new THREE.Mesh(coreGeo, coreMat);
group.add(coreMesh);

// Glowing solid inner nucleus
const nucleusGeo = new THREE.SphereGeometry(0.55, 32, 32);
const nucleusMat = new THREE.MeshPhongMaterial({
  color: 0xeab308,
  emissive: 0xfacc15,
  shininess: 100
});
const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
group.add(nucleusMesh);

// Orbiting Rings representing audio frequencies / global articulation orbits
const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xfacc15, wireframe: true, transparent: true, opacity: 0.7 });
const ringGeo1 = new THREE.TorusGeometry(1.6, 0.02, 16, 100);
const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
ring1.rotation.x = Math.PI / 3;
group.add(ring1);

const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.5 });
const ringGeo2 = new THREE.TorusGeometry(1.9, 0.015, 16, 100);
const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
ring2.rotation.y = Math.PI / 4;
group.add(ring2);

// Surrounding floating particle audio frequencies
const partCount = 80;
const partGeo = new THREE.BufferGeometry();
const positions = new Float32Array(partCount * 3);
for (let i = 0; i < partCount * 3; i += 3) {
  positions[i] = (Math.random() - 0.5) * 5;
  positions[i + 1] = (Math.random() - 0.5) * 5;
  positions[i + 2] = (Math.random() - 0.5) * 3;
}
partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const partMat = new THREE.PointsMaterial({ color: 0xfef08a, size: 0.05, transparent: true, opacity: 0.9 });
const particles = new THREE.Points(partGeo, partMat);
scene.add(particles);

let mouseX = 0;
let mouseY = 0;
window.addEventListener('touchmove', (e) => {
  if (e.touches.length > 0) {
    mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2;
  }
}, { passive: true });

window.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

function onResize() {
  const w = container.clientWidth || window.innerWidth || 390;
  const h = container.clientHeight || 320;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}
window.addEventListener('resize', onResize);

let clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const elapsedTime = clock.getElapsedTime();
  
  group.rotation.y = elapsedTime * 0.4 + mouseX * 0.5;
  group.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2 + mouseY * 0.3;
  
  ring1.rotation.z = elapsedTime * 0.25;
  ring2.rotation.x = elapsedTime * 0.35;
  
  const scale = 1.0 + Math.sin(elapsedTime * 2.5) * 0.05;
  nucleusMesh.scale.set(scale, scale, scale);
  
  particles.rotation.y = elapsedTime * 0.08;
  
  renderer.render(scene, camera);
}
animate();

})();
</script>
</div>
<!-- STITCH_THREEJS_END:ANIMATION_6 -->
<div class="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-label text-on-surface">
<span class="flex items-center gap-1 text-tertiary font-semibold">
<span class="material-symbols-outlined text-sm">waves</span> 3D Harmonic Model
            </span>
<span class="text-on-surface-variant">Touch &amp; Drag to Orbit</span>
</div>
</div>
<!-- Swipeable Dynamic Metrics -->
<div class="flex gap-2.5 overflow-x-auto custom-scroll pt-1 pb-1">
<div class="flex-shrink-0 w-36 bg-surface-container-lowest p-3 rounded-xl">
<span class="text-[10px] font-label uppercase text-outline">Compensation</span>
<div class="font-headline text-base font-bold text-on-surface mt-0.5">₹18L - ₹1.4Cr+</div>
<div class="text-[10px] text-tertiary font-medium">Top Tier Global Roles</div>
</div>
<div class="flex-shrink-0 w-36 bg-surface-container-lowest p-3 rounded-xl">
<span class="text-[10px] font-label uppercase text-outline">Curated Arenas</span>
<div class="font-headline text-base font-bold text-on-surface mt-0.5">16+ High-Impact</div>
<div class="text-[10px] text-primary font-medium">Aviation to Arbitrage</div>
</div>
<div class="flex-shrink-0 w-36 bg-surface-container-lowest p-3 rounded-xl">
<span class="text-[10px] font-label uppercase text-outline">Neural Engine</span>
<div class="font-headline text-base font-bold text-on-surface mt-0.5">5-Tier AI Latency</div>
<div class="text-[10px] text-emerald-600 font-medium">32ms Feedback Loop</div>
</div>
</div>
<!-- CTAs -->
<div class="grid grid-cols-2 gap-3 pt-1">
<a class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed font-label font-bold text-xs uppercase tracking-wider text-center shadow-md active:scale-95 transition-transform" href="#speech-lab">
<span class="material-symbols-outlined text-base">mic</span>
<span>Launch Speech Lab</span>
</a>
<a class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-surface-container text-on-surface font-label font-semibold text-xs tracking-wide text-center hover:bg-surface-container-high active:scale-95 transition-transform" href="#career-architecture">
<span>Explore Careers</span>
<span class="material-symbols-outlined text-base">north_east</span>
</a>
</div>
</section>
<!-- SECTION 2: INTERACTIVE MOBILE SPEECH LAB & TELEPROMPTER -->
<section class="bg-surface-container-low p-4 rounded-2xl space-y-4" id="speech-lab">
<div class="flex items-center justify-between">
<div>
<span class="text-[10px] font-label uppercase tracking-widest text-tertiary font-bold">Acoustic Teleprompter &amp; Diagnostics</span>
<h2 class="font-headline text-xl font-bold text-on-surface mt-0.5">Executive Cadence Studio</h2>
</div>
<span class="p-2 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed">
<span class="material-symbols-outlined text-lg">graphic_eq</span>
</span>
</div>
<!-- Script Scenario Selector -->
<div>
<label class="block text-xs font-label text-on-surface-variant mb-1.5 font-medium">Simulation Scenario</label>
<div class="relative">
<select class="w-full bg-surface-container-lowest text-on-surface text-xs rounded-xl py-2.5 pl-3 pr-8 appearance-none focus:ring-1 focus:ring-primary" id="scenarioSelector">
<option value="mna">Boardroom M&amp;A: Hostile Takeover Defense</option>
<option value="pilot">Aviation Mayday: Crosswind Emergency at Heathrow</option>
<option value="hollywood">Sci-Fi Pilot: The Cygnus Discovery Pitch</option>
</select>
<span class="material-symbols-outlined absolute right-2.5 top-2.5 pointer-events-none text-on-surface-variant text-lg">expand_more</span>
</div>
</div>
<!-- Microphone Visual & Dynamic Waveform -->
<div class="relative rounded-xl overflow-hidden bg-surface-container-lowest p-3">
<div class="flex items-center gap-3">
<div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-dim relative">
<img alt="Gold Broadcast Microphone in Acoustic Studio" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmd2Vthhd-AomSEqy_eaZsxgN4Zq2xD40sLBya6a7jPBbZHJmWdh-qiMkf0TjKpq8_BopCjRJ-TReAY0mn74O3HKzqWvyBXQjPC1HmYEsxttPCZnhKWraz3nNYnaZuwTIaNzj_mNwUfwQz9IzbsJwbd52IFRgurOe6Da5CkVS3sEZPTKph3vW2tW2xAKKGWVT3T3rfthFMxDsSaxFgFrHJlGZEa39MmCeD4D4t1K6wUj4vBR1VMzVH"/>
</div>
<div class="flex-1 space-y-2">
<div class="flex items-center justify-between text-xs">
<span class="font-label font-semibold text-on-surface">Dynamic Input</span>
<span class="text-tertiary font-mono text-[11px] font-bold">48kHz / 24-bit</span>
</div>
<!-- Waveform bars -->
<div class="flex items-end gap-1 h-8 px-1">
<span class="waveform-bar w-1 bg-tertiary-fixed-dim rounded-full" style="animation-delay: 0.1s"></span>
<span class="waveform-bar w-1 bg-tertiary rounded-full" style="animation-delay: 0.4s"></span>
<span class="waveform-bar w-1 bg-tertiary-fixed rounded-full" style="animation-delay: 0.2s"></span>
<span class="waveform-bar w-1 bg-primary rounded-full" style="animation-delay: 0.6s"></span>
<span class="waveform-bar w-1 bg-tertiary rounded-full" style="animation-delay: 0.3s"></span>
<span class="waveform-bar w-1 bg-tertiary-fixed rounded-full" style="animation-delay: 0.5s"></span>
<span class="waveform-bar w-1 bg-primary-container rounded-full" style="animation-delay: 0.2s"></span>
<span class="waveform-bar w-1 bg-tertiary rounded-full" style="animation-delay: 0.7s"></span>
<span class="waveform-bar w-1 bg-tertiary-fixed rounded-full" style="animation-delay: 0.35s"></span>
<span class="waveform-bar w-1 bg-outline rounded-full" style="animation-delay: 0.15s"></span>
</div>
</div>
</div>
</div>
<!-- Teleprompter Script Card -->
<div class="bg-surface-container-lowest p-3.5 rounded-xl space-y-2">
<div class="flex justify-between items-center text-[10px] font-label text-outline uppercase">
<span>Teleprompter Script</span>
<span class="text-tertiary font-bold">Measured Cadence: 130 WPM</span>
</div>
<p class="font-headline text-sm text-on-surface leading-relaxed italic" id="teleprompterText">
            "Gentlemen, the valuation is non-negotiable. Our intellectual architecture and liquidity reserves establish irrevocable priority. We hold the defensive covenants."
          </p>
</div>
<!-- Interactive Teleprompter Action -->
<div class="flex items-center justify-between pt-1">
<button class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed font-label font-bold text-xs uppercase tracking-wider active:scale-95 transition-transform shadow-sm" id="recordBtn">
<span class="material-symbols-outlined text-base" id="recordIcon">mic</span>
<span id="recordStatus">Tap to Record</span>
</button>
<div class="flex items-center gap-3">
<div class="text-right">
<span class="block text-[9px] font-label uppercase text-outline">Fluency Score</span>
<span class="font-headline text-base font-bold text-on-surface">94<span class="text-xs text-outline">/100</span></span>
</div>
<div class="w-px h-6 bg-surface-dim"></div>
<div class="text-right">
<span class="block text-[9px] font-label uppercase text-outline">Cadence</span>
<span class="font-headline text-base font-bold text-on-surface">138 <span class="text-[10px] font-normal text-on-surface-variant">WPM</span></span>
</div>
<div class="w-px h-6 bg-surface-dim"></div>
<div class="text-right">
<span class="block text-[9px] font-label uppercase text-outline">Fillers</span>
<span class="font-headline text-base font-bold text-tertiary">1</span>
</div>
</div>
</div>
</section>
<!-- SECTION 3: CURATED CAREER ARCHITECTURE (HIGH-STAKES TIERS) -->
<section class="space-y-4" id="career-architecture">
<div>
<span class="text-[10px] font-label uppercase tracking-widest text-tertiary font-bold">Valuation Ecosystem</span>
<h2 class="font-headline text-2xl font-bold text-on-surface">Curated Career Architecture</h2>
<p class="text-xs text-on-surface-variant mt-1 leading-normal">
            Precision diction, rhetorical poise, and global diplomatic English directly dictate international package benchmarks.
          </p>
</div>
<!-- Career Segment Toggle -->
<div class="flex bg-surface-container rounded-xl p-1 text-xs font-label">
<button class="flex-1 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-semibold shadow-xs" id="catCreativeBtn">Creative &amp; OTT</button>
<button class="flex-1 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-medium" id="catInstitutionalBtn">Institutional &amp; C-Suite</button>
</div>
<!-- Career Cards Container -->
<div class="space-y-3" id="creativeRoles">
<!-- Card 1 -->
<div class="bg-surface-container-lowest p-4 rounded-xl space-y-2.5 transition-all">
<div class="flex justify-between items-start">
<div>
<span class="text-[10px] font-label font-bold text-tertiary uppercase">Entertainment Architecture</span>
<h3 class="font-headline text-base font-bold text-on-surface">Screenwriter &amp; OTT Showrunner</h3>
</div>
<span class="px-2.5 py-1 rounded-full bg-surface-container-low text-xs font-headline font-bold text-on-surface">₹12L – ₹65L</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
              Crafting pilot bibles, character cadence, and pitching show concepts to Netflix, HBO, and Amazon Studios globally.
            </p>
<div class="p-2.5 rounded-lg bg-surface-container-low text-xs">
<span class="font-semibold text-tertiary block mb-0.5 text-[11px]">Why English is Leverage:</span>
<span class="text-on-surface-variant text-[11px]">Subtextual dialogue tension, cultural localization, and persuasive narrative room command.</span>
</div>
<div class="flex items-center justify-between text-[11px] font-label text-outline pt-1">
<span>Pathways: FTII Pune, USC Cinema, Tisch NYU</span>
<span class="text-primary font-medium flex items-center">Roadmap <span class="material-symbols-outlined text-xs">chevron_right</span></span>
</div>
</div>
<!-- Card 2 -->
<div class="bg-surface-container-lowest p-4 rounded-xl space-y-2.5">
<div class="flex justify-between items-start">
<div>
<span class="text-[10px] font-label font-bold text-tertiary uppercase">Interactive Worldbuilding</span>
<h3 class="font-headline text-base font-bold text-on-surface">Narrative Game Designer</h3>
</div>
<span class="px-2.5 py-1 rounded-full bg-surface-container-low text-xs font-headline font-bold text-on-surface">₹15L – ₹80L</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
              Architecting non-linear character dialogue trees, quest lore, and voice-director guides for AAA gaming franchises.
            </p>
<div class="p-2.5 rounded-lg bg-surface-container-low text-xs">
<span class="font-semibold text-tertiary block mb-0.5 text-[11px]">Why English is Leverage:</span>
<span class="text-on-surface-variant text-[11px]">Writing evocative environmental lore and concise systemic instructions for global design teams.</span>
</div>
<div class="flex items-center justify-between text-[11px] font-label text-outline pt-1">
<span>Pathways: DigiPen, Abertay, Carnegie Mellon ETC</span>
<span class="text-primary font-medium flex items-center">Roadmap <span class="material-symbols-outlined text-xs">chevron_right</span></span>
</div>
</div>
<!-- Card 3 -->
<div class="bg-surface-container-lowest p-4 rounded-xl space-y-2.5">
<div class="flex justify-between items-start">
<div>
<span class="text-[10px] font-label font-bold text-tertiary uppercase">Acoustic Arts</span>
<h3 class="font-headline text-base font-bold text-on-surface">Voice Actor &amp; International Narrator</h3>
</div>
<span class="px-2.5 py-1 rounded-full bg-surface-container-low text-xs font-headline font-bold text-on-surface">₹12L – ₹45L</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
              Audiobook narration for Penguin Random House, prestige video game character voicing, and BBC documentary voiceovers.
            </p>
<div class="p-2.5 rounded-lg bg-surface-container-low text-xs">
<span class="font-semibold text-tertiary block mb-0.5 text-[11px]">Why English is Leverage:</span>
<span class="text-on-surface-variant text-[11px]">Mastery over Received Pronunciation (RP), mid-Atlantic modulation, and emotional vocal cadence.</span>
</div>
<div class="flex items-center justify-between text-[11px] font-label text-outline pt-1">
<span>Pathways: RADA London, Guildhall, Voice One SF</span>
<span class="text-primary font-medium flex items-center">Roadmap <span class="material-symbols-outlined text-xs">chevron_right</span></span>
</div>
</div>
<!-- Card 4 & 5 Compact Stack -->
<div class="grid grid-cols-2 gap-2.5">
<div class="bg-surface-container-lowest p-3 rounded-xl space-y-1">
<span class="text-[9px] font-label uppercase text-tertiary font-bold">Poetics &amp; Audio</span>
<h4 class="font-headline text-xs font-bold text-on-surface">Lyricist &amp; Songwriter</h4>
<p class="text-[11px] text-outline font-semibold">₹8L – ₹50L</p>
<p class="text-[10px] text-on-surface-variant line-clamp-2">Rhyme schemes, metric stress, and crossover pop hooks.</p>
<div class="text-[10px] text-tertiary font-medium pt-1">Berklee / Royal Academy</div>
</div>
<div class="bg-surface-container-lowest p-3 rounded-xl space-y-1">
<span class="text-[9px] font-label uppercase text-tertiary font-bold">Linguistic Adaptation</span>
<h4 class="font-headline text-xs font-bold text-on-surface">Dubbing &amp; Localizer</h4>
<p class="text-[11px] text-outline font-semibold">₹8L – ₹28L</p>
<p class="text-[10px] text-on-surface-variant line-clamp-2">Lip-sync syllable mapping &amp; transnational cultural idioms.</p>
<div class="text-[10px] text-tertiary font-medium pt-1">JNU SLLCS / SOAS London</div>
</div>
</div>
</div>
<!-- Institutional Roles (Hidden by default, toggled via JS) -->
<div class="space-y-3 hidden" id="institutionalRoles">
<!-- Institutional 1 -->
<div class="bg-surface-container-lowest p-4 rounded-xl space-y-2.5">
<div class="flex justify-between items-start">
<div>
<span class="text-[10px] font-label font-bold text-tertiary uppercase">International Jurisprudence</span>
<h3 class="font-headline text-base font-bold text-on-surface">Corporate Arbitrator &amp; Cross-Border Counsel</h3>
</div>
<span class="px-2.5 py-1 rounded-full bg-surface-container-low text-xs font-headline font-bold text-on-surface">₹18L – ₹1.2Cr</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
              Representing sovereign funds and tech conglomerates at Singapore International Arbitration Centre (SIAC) &amp; London (LCIA).
            </p>
<div class="p-2.5 rounded-lg bg-surface-container-low text-xs">
<span class="font-semibold text-tertiary block mb-0.5 text-[11px]">Why English is Leverage:</span>
<span class="text-on-surface-variant text-[11px]">Flawless syntactical drafting eliminates contractual ambiguities worth hundreds of millions.</span>
</div>
<div class="flex items-center justify-between text-[11px] font-label text-outline pt-1">
<span>Pathways: NLSIU Bengaluru, Oxford BCL, Harvard Law</span>
<span class="text-primary font-medium flex items-center">Roadmap <span class="material-symbols-outlined text-xs">chevron_right</span></span>
</div>
</div>
<!-- Institutional 2 -->
<div class="bg-surface-container-lowest p-4 rounded-xl space-y-2.5">
<div class="flex justify-between items-start">
<div>
<span class="text-[10px] font-label font-bold text-tertiary uppercase">Commercial Aviation</span>
<h3 class="font-headline text-base font-bold text-on-surface">Commercial Airline Commander (ICAO Level 6)</h3>
</div>
<span class="px-2.5 py-1 rounded-full bg-surface-container-low text-xs font-headline font-bold text-on-surface">₹24L – ₹85L</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
              Standardized aeronautical radiotelephony and CRM phraseology for trans-Atlantic and Pacific commercial wide-body flights.
            </p>
<div class="p-2.5 rounded-lg bg-surface-container-low text-xs">
<span class="font-semibold text-tertiary block mb-0.5 text-[11px]">Why English is Leverage:</span>
<span class="text-on-surface-variant text-[11px]">Split-second precision in voice transmissions under high-stress weather crises prevents catastrophic misunderstanding.</span>
</div>
<div class="flex items-center justify-between text-[11px] font-label text-outline pt-1">
<span>Pathways: IGRUA Rae Bareli, CAE Oxford, Embry-Riddle</span>
<span class="text-primary font-medium flex items-center">Roadmap <span class="material-symbols-outlined text-xs">chevron_right</span></span>
</div>
</div>
<!-- Institutional 3 -->
<div class="bg-surface-container-lowest p-4 rounded-xl space-y-2.5">
<div class="flex justify-between items-start">
<div>
<span class="text-[10px] font-label font-bold text-tertiary uppercase">Generative Frontier</span>
<h3 class="font-headline text-base font-bold text-on-surface">AI Prompt Architect &amp; NLP Cognitive Stylist</h3>
</div>
<span class="px-2.5 py-1 rounded-full bg-surface-container-low text-xs font-headline font-bold text-on-surface">₹20L – ₹95L</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
              Refining large language model alignment, chain-of-thought system prompts, and semantic truthfulness for frontier AI labs.
            </p>
<div class="p-2.5 rounded-lg bg-surface-container-low text-xs">
<span class="font-semibold text-tertiary block mb-0.5 text-[11px]">Why English is Leverage:</span>
<span class="text-on-surface-variant text-[11px]">Linguistic taxonomy, epistemological precision, and rhetorical constraints directly dictate model output accuracy.</span>
</div>
<div class="flex items-center justify-between text-[11px] font-label text-outline pt-1">
<span>Pathways: IIT Madras / Delhi, Stanford Symbolic Systems, Edinburgh Informatics</span>
<span class="text-primary font-medium flex items-center">Roadmap <span class="material-symbols-outlined text-xs">chevron_right</span></span>
</div>
</div>
</div>
</section>
<!-- SECTION 4: BRITISH PRONUNCIATION & ORATOR BENCHMARK -->
<section class="bg-surface-container-low p-4 rounded-2xl space-y-3.5">
<div class="flex justify-between items-start">
<div>
<span class="text-[10px] font-label uppercase tracking-widest text-tertiary font-bold">Articulatory Standards</span>
<h2 class="font-headline text-xl font-bold text-on-surface">Master Orator Benchmarks</h2>
</div>
<span class="material-symbols-outlined text-tertiary text-2xl">workspace_premium</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
          Listen to micro-excerpts of world-class resonance, pause control, and phonetic gravitas.
        </p>
<!-- Benchmark Cards Grid -->
<div class="grid grid-cols-2 gap-2.5">
<!-- Orator 1 -->
<div class="bg-surface-container-lowest p-3 rounded-xl space-y-1.5 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="text-[9px] font-label uppercase text-tertiary font-bold">Naturalist Diction</span>
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>
<h4 class="font-headline text-xs font-bold text-on-surface mt-1">Sir David Attenborough</h4>
<p class="text-[10px] text-on-surface-variant">Cadence: Whispered authority &amp; deliberate pause syntax.</p>
</div>
<button class="w-full mt-2 py-1.5 rounded-lg bg-surface-container-low text-[11px] font-label font-semibold text-on-surface flex items-center justify-center gap-1 active:bg-tertiary-fixed" onclick="playSample('Attenborough')">
<span class="material-symbols-outlined text-xs">play_arrow</span> Listen RP Cadence
            </button>
</div>
<!-- Orator 2 -->
<div class="bg-surface-container-lowest p-3 rounded-xl space-y-1.5 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="text-[9px] font-label uppercase text-tertiary font-bold">Parliamentary Stride</span>
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>
<h4 class="font-headline text-xs font-bold text-on-surface mt-1">Dr. Shashi Tharoor</h4>
<p class="text-[10px] text-on-surface-variant">Cadence: Oxford Union rhetorical polysyllabic momentum.</p>
</div>
<button class="w-full mt-2 py-1.5 rounded-lg bg-surface-container-low text-[11px] font-label font-semibold text-on-surface flex items-center justify-center gap-1 active:bg-tertiary-fixed" onclick="playSample('Tharoor')">
<span class="material-symbols-outlined text-xs">play_arrow</span> Listen Rhetoric
            </button>
</div>
<!-- Orator 3 -->
<div class="bg-surface-container-lowest p-3 rounded-xl space-y-1.5 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="text-[9px] font-label uppercase text-tertiary font-bold">Theatrical Stature</span>
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>
<h4 class="font-headline text-xs font-bold text-on-surface mt-1">Dame Maggie Smith</h4>
<p class="text-[10px] text-on-surface-variant">Cadence: Razor-sharp plosives and dry aristocratic irony.</p>
</div>
<button class="w-full mt-2 py-1.5 rounded-lg bg-surface-container-low text-[11px] font-label font-semibold text-on-surface flex items-center justify-center gap-1 active:bg-tertiary-fixed" onclick="playSample('Smith')">
<span class="material-symbols-outlined text-xs">play_arrow</span> Listen Precision
            </button>
</div>
<!-- Orator 4 -->
<div class="bg-surface-container-lowest p-3 rounded-xl space-y-1.5 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between">
<span class="text-[9px] font-label uppercase text-tertiary font-bold">Historical Resolve</span>
<span class="w-2 h-2 rounded-full bg-emerald-500"></span>
</div>
<h4 class="font-headline text-xs font-bold text-on-surface mt-1">Winston Churchill</h4>
<p class="text-[10px] text-on-surface-variant">Cadence: Heavy trochaic beat and resolute gravitas.</p>
</div>
<button class="w-full mt-2 py-1.5 rounded-lg bg-surface-container-low text-[11px] font-label font-semibold text-on-surface flex items-center justify-center gap-1 active:bg-tertiary-fixed" onclick="playSample('Churchill')">
<span class="material-symbols-outlined text-xs">play_arrow</span> Listen Gravitas
            </button>
</div>
</div>
<div class="hidden bg-surface-container-lowest text-xs font-label p-2.5 rounded-xl border border-tertiary-fixed flex items-center gap-2" id="audioToast">
<span class="material-symbols-outlined text-tertiary text-sm">volume_up</span>
<span class="text-on-surface" id="toastMsg">Synthesizing benchmark phonetics...</span>
</div>
</section>
<!-- SECTION 5: INTERACTIVE DRILL ('FIX-THE-EMAIL' DIPLOMATIC PROSE) -->
<section class="bg-surface-container-low p-4 rounded-2xl space-y-3">
<div class="flex items-center justify-between">
<div>
<span class="text-[10px] font-label uppercase tracking-widest text-tertiary font-bold">Cognitive Refactoring</span>
<h2 class="font-headline text-xl font-bold text-on-surface">The Executive Polish Drill</h2>
</div>
<span class="material-symbols-outlined text-primary text-xl">auto_fix_high</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
          Watch a passive, insecure message transform into razor-sharp institutional diplomacy with a single gesture.
        </p>
<!-- Dynamic Before / After Toggle Container -->
<div class="bg-surface-container-lowest p-3.5 rounded-xl space-y-2">
<div class="flex items-center justify-between">
<span class="text-[10px] font-label font-bold text-error uppercase" id="emailStateLabel">Before: Passive &amp; Insecure</span>
<span class="text-[10px] font-mono text-outline">Internal Memo</span>
</div>
<div class="p-3 rounded-lg bg-surface-container-low text-xs leading-relaxed font-body transition-all" id="emailContentBox">
            "Hey team, just wanted to check in and see if maybe anyone has looked at the contract? Sorry to bother, but we really need it done soon or we might get in trouble with the client."
          </div>
<div class="pt-1 flex items-center justify-between">
<button class="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label font-bold text-xs uppercase tracking-wider active:scale-95 transition-transform" id="refactorBtn">
<span class="material-symbols-outlined text-sm">magic_button</span>
<span>Refactor Diplomatic</span>
</button>
<span class="text-[11px] text-tertiary font-semibold" id="toneMetric">Confidence: 38% → 96%</span>
</div>
</div>
</section>
<!-- SECTION 6: INSTITUTIONAL SCHOOL & PRIVACY GATEWAY FOOTER -->
<footer class="pt-6 pb-4 space-y-4 text-center">
<div class="flex justify-center items-center gap-2">
<span class="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span class="text-xs font-label uppercase tracking-widest text-outline">Verbum Premier Global Faculty</span>
<span class="w-2 h-2 rounded-full bg-tertiary-container"></span>
</div>
<!-- 5-Tap Gateway on the Institutional School Name -->
<p class="text-xs text-on-surface-variant font-label max-w-xs mx-auto leading-relaxed">
          Curated under the Academic Rigor of
          <button class="font-semibold text-on-surface underline decoration-dotted underline-offset-4 cursor-pointer focus:outline-none select-none" id="secretAdminTap">
            © Kanakia International School Mira Road
          </button>
</p>
<!-- Hidden Admin & 5-Tier AI Router Drawer (revealed after 5 quick taps) -->
<div class="hidden bg-surface-container-lowest p-3 rounded-xl border border-tertiary text-left text-xs space-y-2" id="adminPortal">
<div class="flex justify-between items-center">
<span class="font-headline font-bold text-on-surface text-[11px]">Hidden Admin &amp; 5-Tier AI Router</span>
<span class="px-2 py-0.5 rounded bg-tertiary-fixed text-[10px] font-bold">Authorized</span>
</div>
<div class="space-y-1 text-[11px] text-on-surface-variant font-mono">
<div>• Tier-1: Gemini 1.5 Flash (Acoustic Phonetics)</div>
<div>• Tier-2: Claude 3.5 Sonnet (Diplomatic Syntax)</div>
<div>• Tier-3: Whisper v3 Large (Cadence &amp; WPM)</div>
<div>• Tier-4: Fine-tuned Llama-3-70B (Valuation Benchmarks)</div>
<div>• Tier-5: Local Edge Neural Cache (0-Latency Feedback)</div>
</div>
</div>
<p class="text-[10px] text-outline font-label">
          Strictly Confidential Portfolio Architecture. Unauthorized distribution prohibited.
        </p>
</footer>
</main>
<!-- Bottom Navigation Bar (Shared Component: BottomNavBar) -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-3 py-2 max-w-md mx-auto bg-surface-container-lowest/90 backdrop-blur-lg shadow-none">
<!-- Item 1: Studio (Active: Primary intent aligns with speech lab) -->
<a class="flex flex-col items-center justify-center text-on-tertiary-fixed bg-tertiary-fixed rounded-xl px-3 py-1 font-semibold active:scale-95 transition-transform duration-150" href="#speech-lab">
<span class="material-symbols-outlined text-lg" data-weight="fill" style="font-variation-settings: 'FILL' 1;">mic</span>
<span class="font-label text-[10px] uppercase tracking-widest mt-0.5">Studio</span>
</a>
<!-- Item 2: Roles -->
<a class="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:text-primary transition-colors active:scale-95 transition-transform duration-150" href="#career-architecture">
<span class="material-symbols-outlined text-lg">psychology</span>
<span class="font-label text-[10px] uppercase tracking-widest mt-0.5">Roles</span>
</a>
<!-- Item 3: Insights -->
<a class="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:text-primary transition-colors active:scale-95 transition-transform duration-150" href="#career-architecture">
<span class="material-symbols-outlined text-lg">insights</span>
<span class="font-label text-[10px] uppercase tracking-widest mt-0.5">Insights</span>
</a>
<!-- Item 4: Profile -->
<button class="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:text-primary transition-colors active:scale-95 transition-transform duration-150" id="profileNavBtn">
<span class="material-symbols-outlined text-lg">account_circle</span>
<span class="font-label text-[10px] uppercase tracking-widest mt-0.5">Profile</span>
</button>
</nav>
</div>
<!-- Interactive Logic Scripts -->
<script>
    // Navigation Drawer Toggle Logic
    const drawerToggle = document.getElementById('drawerToggle');
    const drawerClose = document.getElementById('drawerClose');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerContent = document.getElementById('drawerContent');
    const profileNavBtn = document.getElementById('profileNavBtn');

    function openDrawer() {
      drawerOverlay.classList.remove('hidden');
      setTimeout(() => {
        drawerContent.classList.remove('-translate-x-full');
      }, 10);
    }

    function closeDrawer() {
      drawerContent.classList.add('-translate-x-full');
      setTimeout(() => {
        drawerOverlay.classList.add('hidden');
      }, 250);
    }

    drawerToggle.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    profileNavBtn.addEventListener('click', openDrawer);
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) closeDrawer();
    });

    // Scenario Script Selector
    const scenarioSelector = document.getElementById('scenarioSelector');
    const teleprompterText = document.getElementById('teleprompterText');

    const scripts = {
      mna: `"Gentlemen, the valuation is non-negotiable. Our intellectual architecture and liquidity reserves establish irrevocable priority. We hold the defensive covenants."`,
      pilot: `"Heathrow Tower, Speedbird 149. Unstabilized approach on outer marker, windshear alert 45 knots. Initiating immediate go-around to hold at Ockham."`,
      hollywood: `"In the silence between the pulsars, the ship didn’t just broadcast a distress call—it was reciting Shakespeare in binary. We weren't invited; we were summoned."`
    };

    scenarioSelector.addEventListener('change', (e) => {
      teleprompterText.textContent = scripts[e.target.value] || scripts.mna;
    });

    // Speech Lab Interactive Record Button
    const recordBtn = document.getElementById('recordBtn');
    const recordIcon = document.getElementById('recordIcon');
    const recordStatus = document.getElementById('recordStatus');
    let isRecording = false;

    recordBtn.addEventListener('click', () => {
      isRecording = !isRecording;
      if (isRecording) {
        recordBtn.classList.remove('bg-tertiary-fixed', 'text-on-tertiary-fixed');
        recordBtn.classList.add('bg-error', 'text-on-error');
        recordIcon.textContent = 'stop_circle';
        recordStatus.textContent = 'Listening...';
      } else {
        recordBtn.classList.add('bg-tertiary-fixed', 'text-on-tertiary-fixed');
        recordBtn.classList.remove('bg-error', 'text-on-error');
        recordIcon.textContent = 'mic';
        recordStatus.textContent = 'Recorded: 94/100';
      }
    });

    // Career Category Filter (Creative vs Institutional)
    const catCreativeBtn = document.getElementById('catCreativeBtn');
    const catInstitutionalBtn = document.getElementById('catInstitutionalBtn');
    const creativeRoles = document.getElementById('creativeRoles');
    const institutionalRoles = document.getElementById('institutionalRoles');

    catCreativeBtn.addEventListener('click', () => {
      catCreativeBtn.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-xs');
      catCreativeBtn.classList.remove('text-on-surface-variant');
      catInstitutionalBtn.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'shadow-xs');
      catInstitutionalBtn.classList.add('text-on-surface-variant');
      creativeRoles.classList.remove('hidden');
      institutionalRoles.classList.add('hidden');
    });

    catInstitutionalBtn.addEventListener('click', () => {
      catInstitutionalBtn.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-xs');
      catInstitutionalBtn.classList.remove('text-on-surface-variant');
      catCreativeBtn.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'shadow-xs');
      catCreativeBtn.classList.add('text-on-surface-variant');
      institutionalRoles.classList.remove('hidden');
      creativeRoles.classList.add('hidden');
    });

    // Orator Audio Benchmarks Micro-Player
    function playSample(orator) {
      const toast = document.getElementById('audioToast');
      const msg = document.getElementById('toastMsg');
      toast.classList.remove('hidden');
      msg.textContent = `Streaming ${orator} phonetics stream... (Cadence synced)`;
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);
    }

    // Refactoring Drill Toggle (Fix-the-Email)
    const refactorBtn = document.getElementById('refactorBtn');
    const emailContentBox = document.getElementById('emailContentBox');
    const emailStateLabel = document.getElementById('emailStateLabel');
    const toneMetric = document.getElementById('toneMetric');
    let isRefactored = false;

    refactorBtn.addEventListener('click', () => {
      isRefactored = !isRefactored;
      if (isRefactored) {
        emailStateLabel.textContent = "After: Diplomatic & Authoritative";
        emailStateLabel.classList.remove('text-error');
        emailStateLabel.classList.add('text-tertiary');
        emailContentBox.textContent = `"Team, please prioritize the contractual review scheduled for closure today. Client alignment hinges on our timely execution of the finalized provisions."`;
        emailContentBox.classList.add('bg-tertiary-fixed/20');
        toneMetric.textContent = "Confidence: 96% (Executive)";
        refactorBtn.querySelector('span:last-child').textContent = "Revert Raw";
      } else {
        emailStateLabel.textContent = "Before: Passive & Insecure";
        emailStateLabel.classList.add('text-error');
        emailStateLabel.classList.remove('text-tertiary');
        emailContentBox.textContent = `"Hey team, just wanted to check in and see if maybe anyone has looked at the contract? Sorry to bother, but we really need it done soon or we might get in trouble with the client."`;
        emailContentBox.classList.remove('bg-tertiary-fixed/20');
        toneMetric.textContent = "Confidence: 38% (Submissive)";
        refactorBtn.querySelector('span:last-child').textContent = "Refactor Diplomatic";
      }
    });

    // 5-Tap Hidden Admin & 5-Tier AI Router Gateway
    let tapCount = 0;
    let tapTimer;
    const secretTap = document.getElementById('secretAdminTap');
    const adminPortal = document.getElementById('adminPortal');

    secretTap.addEventListener('click', () => {
      tapCount++;
      clearTimeout(tapTimer);
      tapTimer = setTimeout(() => { tapCount = 0; }, 1200);

      if (tapCount >= 5) {
        adminPortal.classList.toggle('hidden');
        tapCount = 0;
      }
    });
  </script>
</body></html>Build command
None
Deploy command
npx wrangler deploy
Root directory
/
Build token

careerswithenglish build token
Build variables

Noneuse better font search web how to make aestetic 3d website not genereric or ai slop /dev-browser  and use all skills related to it better colour palate like yellow aesthetic , not ai like <!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>VERBUM PREMIER | The Global Career Architecture Platform</title>
<!-- Fonts & Google Icons -->
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<!-- Tailwind CSS CDN with container queries & forms -->
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<!-- Tailwind Configuration matching design tokens -->
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "on-primary-fixed": "#001551",
            "on-tertiary-fixed": "#25005a",
            "primary-container": "#1d4ed8",
            "surface-dim": "#10131a",
            "primary": "#b7c4ff",
            "tertiary": "#d2bbff",
            "error": "#ffb4ab",
            "surface-bright": "#363941",
            "inverse-primary": "#2151da",
            "surface-container-high": "#272a32",
            "inverse-surface": "#e1e2ec",
            "primary-fixed-dim": "#b7c4ff",
            "surface": "#10131a",
            "tertiary-fixed-dim": "#d2bbff",
            "on-primary": "#002682",
            "on-secondary": "#003825",
            "on-primary-container": "#cad3ff",
            "secondary-fixed": "#85f8c4",
            "outline-variant": "#434655",
            "surface-variant": "#32353d",
            "background": "#10131a",
            "on-error-container": "#ffdad6",
            "secondary": "#68dba9",
            "surface-tint": "#b7c4ff",
            "on-secondary-container": "#00311f",
            "on-error": "#690005",
            "on-background": "#e1e2ec",
            "inverse-on-surface": "#2d3038",
            "on-surface": "#e1e2ec",
            "secondary-container": "#25a475",
            "on-tertiary-container": "#dfccff",
            "surface-container-low": "#191b23",
            "tertiary-container": "#712ae2",
            "on-secondary-fixed": "#002114",
            "surface-container-highest": "#32353d",
            "on-tertiary-fixed-variant": "#5a00c6",
            "surface-container-lowest": "#0b0e15",
            "on-surface-variant": "#c4c5d7",
            "on-tertiary": "#3f008e",
            "on-secondary-fixed-variant": "#005137",
            "secondary-fixed-dim": "#68dba9",
            "primary-fixed": "#dce1ff",
            "on-primary-fixed-variant": "#0039b5",
            "error-container": "#93000a",
            "outline": "#8e90a0",
            "surface-container": "#1d1f27",
            "tertiary-fixed": "#eaddff"
          },
          borderRadius: {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
          spacing: {
            "space-xs": "0.25rem",
            "space-sm": "0.5rem",
            "margin": "3rem",
            "space-xl": "2.5rem",
            "margin-tablet": "2rem",
            "margin-mobile": "1.25rem",
            "space-lg": "1.5rem",
            "gutter": "1.5rem",
            "gutter-sm": "1rem",
            "space-md": "1rem"
          },
          fontFamily: {
            "body-sm": ["Inter"],
            "headline-md": ["Plus Jakarta Sans"],
            "display-xl": ["Plus Jakarta Sans"],
            "body-md": ["Inter"],
            "label-sm": ["Inter"],
            "body-lg": ["Inter"],
            "headline-lg": ["Plus Jakarta Sans"],
            "headline-lg-mobile": ["Plus Jakarta Sans"],
            "display-xl-mobile": ["Plus Jakarta Sans"],
            "label-md": ["Inter"],
            "headline-sm": ["Plus Jakarta Sans"]
          },
          fontSize: {
            "body-sm": ["13px", { lineHeight: "20px", letterSpacing: "0.005em", fontWeight: "400" }],
            "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.015em", fontWeight: "600" }],
            "display-xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.03em", fontWeight: "800" }],
            "body-md": ["15px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
            "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "500" }],
            "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "400" }],
            "headline-lg": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
            "headline-lg-mobile": ["28px", { lineHeight: "34px", letterSpacing: "-0.015em", fontWeight: "700" }],
            "display-xl-mobile": ["38px", { lineHeight: "44px", letterSpacing: "-0.025em", fontWeight: "800" }],
            "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "600" }],
            "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }]
          }
        }
      }
    }
  </script>
<style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
    }
    html {
      scroll-behavior: smooth;
    }
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #0b0e15;
    }
    ::-webkit-scrollbar-thumb {
      background: #272a32;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #434655;
    }
    .obsidian-frost {
      background: rgba(17, 22, 34, 0.72);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
    .subtle-ring {
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
    }
  </style>
</head>
<body class="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-white min-h-screen relative overflow-x-hidden">
<!-- Live Top Scroll Progress Indicator -->
<div class="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-[60] w-0 transition-all duration-75" id="scroll-progress-bar"></div>
<!-- TOP APP BAR (Shared Components JSON Anchor) -->
<header class="bg-surface-dim/80 dark:bg-surface-dim/80 backdrop-blur-md docked full-width top-0 fixed z-50 border-b border-outline-variant/30 flat no shadows">
<div class="w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto flex items-center justify-between h-16">
<!-- Brand & Seal (Interactive 5-Click Admin Trigger) -->
<div class="flex items-center gap-space-sm cursor-pointer select-none" id="brand-logo-seal" title="Institutional Seal">
<div class="w-9 h-9 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary relative overflow-hidden group">
<span class="material-symbols-outlined text-[20px]">shield</span>
<div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div>
<span class="text-headline-sm font-headline-md font-bold tracking-tight text-on-surface dark:text-on-surface flex items-center gap-2">
            VERBUM PREMIER
            <span class="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-primary-container/20 text-primary border border-primary/30 font-semibold hidden sm:inline-block">Institutional</span>
</span>
</div>
</div>
<!-- Navigation Links from JSON Anchor -->
<nav class="hidden md:flex items-center space-x-6 text-label-md font-label-md">
<a class="text-primary dark:text-primary border-b-2 border-primary dark:border-primary pb-1 font-semibold" href="#sectors">Sectors</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#speech-lab">Speech Lab</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#roleplay">Roleplay</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#benchmarking">Benchmarking</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#roadmap">Roadmap</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface pb-1 transition-colors" href="#telemetry">Telemetry</a>
</nav>
<!-- Trailing Action Cluster -->
<div class="flex items-center gap-space-sm">
<!-- Theme Switcher Pill -->
<div class="flex items-center bg-surface-container-low rounded-lg p-0.5 border border-outline-variant/30 text-xs text-on-surface-variant">
<button class="px-2 py-1 rounded bg-surface-container-high text-on-surface font-medium transition-all" id="theme-btn-cosmic" onclick="switchTheme('cosmic')" title="Cosmic Dark">Cosmic</button>
<button class="px-2 py-1 rounded hover:text-on-surface transition-all" id="theme-btn-emerald" onclick="switchTheme('emerald')" title="Emerald Bio">Bio</button>
<button class="px-2 py-1 rounded hover:text-on-surface transition-all" id="theme-btn-solar" onclick="switchTheme('solar')" title="Solar Gold">Solar</button>
</div>
<!-- Trailing Icon Actions from JSON -->
<button class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high/50 hover:text-on-surface transition-all active:scale-95" id="admin-modal-trigger" title="Admin Console">
<span class="material-symbols-outlined text-[20px]">tune</span>
</button>
<button class="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high/50 hover:text-on-surface transition-all active:scale-95 relative" title="Notifications">
<span class="material-symbols-outlined text-[20px]">notifications</span>
<span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary"></span>
</button>
<!-- Primary Action Button from JSON -->
<a class="hidden sm:inline-flex items-center justify-center bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-4 py-2 rounded-lg active:scale-95 transition-all shadow-[0_0_16px_rgba(29,78,216,0.35)]" href="#speech-lab">
          Launch Simulation
        </a>
</div>
</div>
</header>
<!-- MAIN CANVAS -->
<main class="relative pt-16">
<!-- ========================================== -->
<!-- SECTION 1: HERO & MISSION WITH WEBGL SHADER -->
<!-- ========================================== -->
<section class="relative min-h-[942px] flex items-center justify-center overflow-hidden border-b border-outline-variant/20 px-margin-mobile md:px-margin-tablet lg:px-margin py-20">
<!-- Shader Background Tag (Injected exactly per specification) -->
<!-- STITCH_SHADER_START:ANIMATION_2 class="absolute inset-0 w-full h-full opacity-60 pointer-events-none" -->
<div class="absolute inset-0 w-full h-full opacity-60 pointer-events-none" style="display:block;">
<canvas id="shader-canvas-ANIMATION_2" style="display:block;width:100%;height:100%"></canvas>
<script>
(function() {
  const canvas = document.getElementById('shader-canvas-ANIMATION_2');

  // Sync the WebGL drawing-buffer size with the CSS-driven layout size.
  // This fires on initial layout and whenever the element is resized.
  function syncSize() {
    const w = canvas.clientWidth  || 1280;
    const h = canvas.clientHeight || 720;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width  = w;
      canvas.height = h;
    }
  }
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(syncSize).observe(canvas);
  }
  syncSize();

  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) return;
  const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;
  const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
               mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), u.y);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 4; ++i) {
        v += a * noise(p);
        p = rot * p * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    
    vec2 mouse = u_mouse / u_resolution;
    p += (mouse - 0.5) * 0.3;

    float t = u_time * 0.15;
    
    vec2 q = vec2(0.0);
    q.x = fbm(p + 0.1 * t);
    q.y = fbm(p + vec2(1.0));

    vec2 r = vec2(0.0);
    r.x = fbm(p + 1.0 * q + vec2(1.7, 9.2) + 0.15 * t);
    r.y = fbm(p + 1.0 * q + vec2(8.3, 2.8) + 0.126 * t);

    float f = fbm(p + r);

    // Deep cosmic palette with luminous cyan, royal cobalt, and magenta-violet
    vec3 col = mix(vec3(0.04, 0.06, 0.10), vec3(0.08, 0.12, 0.22), clamp(f * f * 2.5, 0.0, 1.0));
    col = mix(col, vec3(0.12, 0.38, 0.72), clamp(length(q), 0.0, 1.0) * 0.45);
    col = mix(col, vec3(0.05, 0.75, 0.70), clamp(length(r.x), 0.0, 1.0) * 0.35);
    col = mix(col, vec3(0.55, 0.20, 0.85), clamp(f * 0.8, 0.0, 1.0) * 0.25);

    // Subtle star dust shimmer
    float n = hash(uv * 400.0 + fract(u_time * 0.02));
    if (n > 0.994) {
        col += vec3(0.6, 0.8, 1.0) * fract(sin(u_time * 2.0 + uv.x * 50.0) * 0.5 + 0.5) * 0.4;
    }

    // Subtle edge vignette
    float vig = 1.0 - smoothstep(0.4, 1.4, length(uv - 0.5) * 1.3);
    col *= vig;

    gl_FragColor = vec4(col, 0.92);
}`;
  function cs(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const pos = gl.getAttribLocation(prog, 'a_position');
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
  const uTime = gl.getUniformLocation(prog, 'u_time');
  const uRes = gl.getUniformLocation(prog, 'u_resolution');
  const uMouse = gl.getUniformLocation(prog, 'u_mouse');

  // u_mouse is in pixel coordinates matching u_resolution (ShaderToy convention).
  // Shaders that need normalized coords should use: u_mouse / u_resolution.
  let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
  window.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width && rect.height) {
      const nx = (event.clientX - rect.left) / rect.width;
      const ny = 1.0 - (event.clientY - rect.top) / rect.height;
      mouse.x = nx * canvas.width;
      mouse.y = ny * canvas.height;
    }
  });

  function render(t) {
    if (typeof ResizeObserver === 'undefined') syncSize();
    gl.viewport(0, 0, canvas.width, canvas.height);
    if (uTime) gl.uniform1f(uTime, t * 0.001);
    if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
    if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }
  render(0);
})();
</script>
</div>
<!-- STITCH_SHADER_END:ANIMATION_2 -->
<!-- Atmospheric Gradient Overlays -->
<div class="absolute inset-0 bg-gradient-to-b from-surface-dim/40 via-surface/60 to-surface-container-lowest pointer-events-none"></div>
<div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
<!-- Hero Content -->
<div class="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
<!-- Live Benchmark Badge -->
<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container/80 border border-primary/30 backdrop-blur-md mb-6 animate-pulse">
<span class="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
<span class="text-label-sm font-label-sm text-primary tracking-widest uppercase">Global Career Architecture Platform</span>
</div>
<!-- Headline -->
<h1 class="text-display-xl-mobile md:text-display-xl font-display-xl text-on-surface font-extrabold tracking-tight max-w-4xl text-balance">
          The Sovereign Voice: <br class="hidden md:inline"/>How English Mastery Commands the World's Highest-Value Careers
        </h1>
<!-- Subtitle -->
<p class="mt-6 text-body-md md:text-body-lg font-body-lg text-on-surface-variant max-w-3xl text-balance">
          Beyond conventional fluency — explore how linguistic precision, narrative authority, and international cadence drive multimillion-dollar careers in media, creative arts, high-tech, and global diplomacy.
        </p>
<!-- Stat Chips / Value Propositions -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 my-10 w-full max-w-3xl">
<div class="p-4 rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-[24px]">payments</span>
<div>
<div class="text-headline-sm font-headline-sm font-bold text-on-surface">₹18L - ₹1.4Cr+</div>
<div class="text-label-sm text-on-surface-variant">Global Compensation Range</div>
</div>
</div>
<div class="p-4 rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left flex items-start gap-3">
<span class="material-symbols-outlined text-secondary text-[24px]">workspace_premium</span>
<div>
<div class="text-headline-sm font-headline-sm font-bold text-on-surface">16+ High-Impact</div>
<div class="text-label-sm text-on-surface-variant">Sovereign Professions</div>
</div>
</div>
<div class="p-4 rounded-xl bg-surface-container/70 border border-outline-variant/30 backdrop-blur-md text-left flex items-start gap-3">
<span class="material-symbols-outlined text-tertiary text-[24px]">neurology</span>
<div>
<div class="text-headline-sm font-headline-sm font-bold text-on-surface">5-Tier Adaptive</div>
<div class="text-label-sm text-on-surface-variant">AI Latency Architecture</div>
</div>
</div>
</div>
<!-- CTA Buttons -->
<div class="flex flex-wrap items-center justify-center gap-4">
<a class="inline-flex items-center gap-2 bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-body-md px-6 py-3.5 rounded-lg shadow-[0_0_24px_rgba(29,78,216,0.45)] transition-all active:scale-95" href="#sectors">
<span class="material-symbols-outlined text-[20px]">explore</span>
            Explore Career Matrices
          </a>
<a class="inline-flex items-center gap-2 bg-surface-container-high/70 hover:bg-surface-container-high border border-outline-variant text-on-surface font-semibold text-body-md px-6 py-3.5 rounded-lg backdrop-blur-md transition-all active:scale-95" href="#speech-lab">
<span class="material-symbols-outlined text-[20px]">mic</span>
            Launch Speech Benchmarking
          </a>
<a class="inline-flex items-center gap-2 bg-transparent hover:bg-surface-container/40 border border-outline-variant/40 text-on-surface-variant hover:text-on-surface font-medium text-body-md px-4 py-3.5 rounded-lg transition-all" href="#qr-portal">
<span class="material-symbols-outlined text-[20px]">qr_code_2</span>
            Scan Mobile QR
          </a>
</div>
</div>
</section>
<!-- ======================================================== -->
<!-- SECTION 2: THE DEFINITIVE CAREER DIRECTORY (BENTO GRID) -->
<!-- ======================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="sectors">
<!-- Section Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">domain</span>
            Career Architecture Matrix
          </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold tracking-tight">
            High-Stakes Disciplines Built on Articulation
          </h2>
<p class="text-body-md text-on-surface-variant max-w-2xl mt-2">
            Fluency is no longer remedial. In high-value international economies, vocal authority and syntactic precision dictate compensation tier and room command.
          </p>
</div>
<!-- Filter Tabs -->
<div class="flex flex-wrap items-center bg-surface-container-lowest p-1 rounded-xl border border-outline-variant/30 gap-1" id="career-filter-tabs">
<button class="filter-btn active px-3.5 py-1.5 rounded-lg text-label-md font-label-md bg-surface-container-high text-on-surface transition-all" onclick="filterCareers('all')">All Sectors</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('entertainment')">Entertainment &amp; Media</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('narrative')">Writing &amp; Narrative</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('tech')">Tech &amp; Aviation</button>
<button class="filter-btn px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all" onclick="filterCareers('corporate')">Corporate &amp; Law</button>
</div>
</div>
<!-- Career Cards Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="career-grid">
<!-- Card 1: Screenwriter / OTT Scriptwriter -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹12L - ₹65L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Screenwriter / OTT Scriptwriter</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Dialogue cadence, subtext mastery &amp; international pitch rooms for global streaming platforms like Netflix &amp; HBO.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">FTII / SRFTI / NYU Tisch</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">JET / Creative Portfolio / SAT</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Subtext architecture, dramatic tension, and pitching to US/UK showrunners.</span>
</div>
</div>
</div>
<!-- Card 2: Narrative Designer & Game Writer -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="narrative">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Writing &amp; Narrative</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹15L - ₹80L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Narrative Designer &amp; Game Writer</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">World-building lore, branching dialogue trees &amp; interactive rhetoric for AAA studios and transmedia universes.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">DigiPen / NID / BITS Pilani</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">NID DAT / Interactive Portfolios</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Complex conditional logic phrased in sharp, emotional English dialogue.</span>
</div>
</div>
</div>
<!-- Card 3: Novelist & Fiction Author -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="narrative">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Writing &amp; Narrative</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹10L - ₹1Cr+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Novelist &amp; Fiction Author</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Syntax rhythm, narrative tension &amp; international literary syndication across London and New York publishing houses.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">Iowa Writers' / Ashoka / Columbia</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">Ashoka AAT / Literary Manuscripts</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Global cultural currency and licensing IP rights internationally.</span>
</div>
</div>
</div>
<!-- Card 4: Lyricist & Songwriter -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹8L - ₹50L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Lyricist &amp; Songwriter</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Poetic prosody, phonetic rhythm &amp; cross-cultural resonance for international music labels and synchronizations.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">Berklee / KM Music Conservatory</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">Audition Portfolios / AP Music</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Linguistic meter, assonance, and cross-border emotional resonance.</span>
</div>
</div>
</div>
<!-- Card 5: Voice Actor & Audiobook Narrator -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹12L - ₹45L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Voice Actor &amp; Audiobook Narrator</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Vocal coloration, Received Pronunciation (RP) &amp; dialect agility for Audible, BBC audiobooks, and video game characters.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">NSD / Barry John / LAMDA</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">Acoustic Auditions / Voice Reels</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Precision articulation, phoneme control, and vocal endurance.</span>
</div>
</div>
</div>
<!-- Card 6: Radio Jockey & Podcast Host -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="entertainment">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/10 border border-tertiary/30 text-tertiary">Entertainment &amp; Media</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹9L - ₹35L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Radio Jockey &amp; Podcast Host</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Impromptu articulation, acoustic pacing &amp; charismatic presence commanding syndicated multi-million-listen streams.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">Jamia MCRC / IIMC / London Met</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">JMI Entrance / Studio Pilots</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Real-time conversational agility and rapid lexical retrieval.</span>
</div>
</div>
</div>
<!-- Card 7: Dubbing, Subtitle Translator & Localizer -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="narrative">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Writing &amp; Narrative</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹8L - ₹28L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Dubbing &amp; Subtitle Localizer</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Cultural idioms, colloquial nuance &amp; lip-flap synchronization bridging Asian &amp; Western global entertainment pipelines.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">EFLU / JNU / SOAS London</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">CUET-PG / Translation Portfolios</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Preserving comedic timing, subtext, and syllabic cadence across languages.</span>
</div>
</div>
</div>
<!-- Card 8: Corporate Lawyer & International Arbitrator -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="corporate">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-tertiary/15 border border-tertiary/30 text-tertiary">Corporate &amp; Law</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹18L - ₹1.2Cr+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Corporate Lawyer &amp; Arbitrator</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Statutory interpretation, precision contract drafting &amp; high-pressure verbal cross-examinations in Geneva and London tribunals.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">NLSIU / Oxford / Harvard Law</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">CLAT / LSAT / LNAT</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Single misplaced prepositions swing multi-million-dollar arbitration liabilities.</span>
</div>
</div>
</div>
<!-- Card 9: Commercial Airline Pilot / Captain -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="tech">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Tech &amp; Aviation</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹24L - ₹85L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Commercial Airline Pilot / Captain</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Standard ICAO radiotelephony, non-ambiguous situational commands &amp; crisis assertiveness in saturated transatlantic air corridors.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">IGRUA / CAE / Oxford Aviation</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">DGCA CPL / ICAO English Level 6</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Absolute acoustic clarity eliminates runway incursions and mid-air risk.</span>
</div>
</div>
</div>
<!-- Card 10: AI Prompt Engineer & NLP Researcher -->
<div class="career-card group p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between" data-sector="tech">
<div>
<div class="flex items-center justify-between mb-4">
<span class="px-2.5 py-1 rounded-full text-label-sm font-label-sm uppercase bg-primary/10 border border-primary/30 text-primary">Tech &amp; Aviation</span>
<span class="text-headline-sm font-headline-sm font-bold text-secondary">₹20L - ₹95L+</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">AI Prompt Engineer &amp; NLP Lead</h3>
<p class="text-body-sm text-on-surface-variant mt-2 mb-4">Semantic ambiguity resolution, few-shot synthetic reasoning &amp; high-parameter alignment steering generative frontier models.</p>
<div class="space-y-2 text-label-sm">
<div class="flex items-center justify-between text-on-surface-variant/80 border-t border-outline-variant/10 pt-2">
<span>Top Academies:</span>
<span class="text-on-surface font-medium">IIT Bombay / Stanford / CMU</span>
</div>
<div class="flex items-center justify-between text-on-surface-variant/80">
<span>Exam Pathways:</span>
<span class="text-on-surface font-medium">JEE Advanced / GRE / GitHub Research</span>
</div>
</div>
</div>
<div class="mt-6 pt-3 border-t border-outline-variant/20">
<div class="p-2.5 rounded-lg bg-surface-container text-body-sm text-primary flex items-start gap-2">
<span class="material-symbols-outlined text-[18px] shrink-0 mt-0.5">key</span>
<span><strong>The Leverage:</strong> Precise linguistic constraints steer billion-dollar autonomous compute fleets.</span>
</div>
</div>
</div>
</div>
</section>
<!-- ============================================================== -->
<!-- SECTION 3: THE VERBUM AI SPEECH LAB & ACOUSTIC TELEPROMPTER -->
<!-- ============================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="speech-lab">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-secondary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">equalizer</span>
          Real-Time Phonetic Analysis
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">The Verbum AI Speech Lab</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Simulate high-stakes acoustic conditions. Train rhythm, cadential variation, and lexical authority with real-time waveform telemetry.
        </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Left 7 Cols: Teleprompter & Live Waveform -->
<div class="lg:col-span-7 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8 flex flex-col justify-between h-full">
<div>
<!-- Teleprompter Header -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-outline-variant/20">
<div>
<span class="text-label-sm uppercase tracking-wider text-on-surface-variant">Selected Script Protocol</span>
<h4 class="text-headline-sm font-headline-sm text-on-surface font-semibold" id="script-title-display">Hollywood Pitch: Sci-Fi Pilot</h4>
</div>
<!-- Script Selector Dropdown -->
<select class="bg-surface-container-high border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary focus:outline-none" id="teleprompter-script-selector" onchange="updateTeleprompterScript(this.value)">
<option value="hollywood">Hollywood Pitch (Sci-Fi Pilot)</option>
<option value="aviation">Aviation Emergency Clearance</option>
<option value="court">Supreme Court Oral Argument</option>
<option value="boardroom">Transnational M&amp;A Defense</option>
</select>
</div>
<!-- Teleprompter Reading Box -->
<div class="my-6 p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/20 min-h-[140px] flex items-center">
<p class="text-body-lg text-on-surface font-medium leading-relaxed transition-all duration-300" id="teleprompter-text">
                "Ladies and gentlemen of the network room: The series begins in 2088 inside orbital salvage bay nine. What appears to be an abandoned cryo-vessel is essentially carrying the sole uncorrupted neural seed of humanity. We are not selling a space opera; we are selling the final legal trial of biological consciousness."
              </p>
</div>
<!-- Waveform Canvas -->
<div class="relative w-full h-24 bg-surface-container-lowest rounded-xl border border-outline-variant/20 overflow-hidden flex items-center justify-center">
<canvas class="w-full h-full" id="waveform-canvas"></canvas>
<div class="absolute inset-0 flex items-center justify-center text-label-sm text-on-surface-variant/50 pointer-events-none" id="recording-status-overlay">
                Ready for acoustic input. Press 'Record Voice Sample'.
              </div>
</div>
</div>
<!-- Controls -->
<div class="mt-6 pt-6 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-4">
<div class="flex items-center gap-3">
<button class="inline-flex items-center gap-2 bg-error hover:bg-error/90 text-on-error font-semibold text-label-md px-5 py-2.5 rounded-lg transition-all active:scale-95 shadow-[0_0_12px_rgba(255,180,171,0.2)]" id="record-btn" onclick="toggleRecording()">
<span class="material-symbols-outlined text-[18px]" id="record-icon">mic</span>
<span id="record-text">Record Voice Sample</span>
</button>
<button class="inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-semibold text-label-md px-4 py-2.5 rounded-lg transition-all active:scale-95" onclick="runAcousticAnalysis()">
<span class="material-symbols-outlined text-[18px]">neurology</span>
                Analyze Cadence
              </button>
</div>
<button class="text-label-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1" onclick="resetSpeechLab()">
<span class="material-symbols-outlined text-[16px]">restart_alt</span> Reset Teleprompter
            </button>
</div>
</div>
<!-- Right 5 Cols: Real-Time Feedback Telemetry Dashboard -->
<div class="lg:col-span-5 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8">
<div class="flex items-center justify-between mb-6">
<h4 class="text-headline-sm font-headline-sm text-on-surface font-bold flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[22px]">analytics</span>
              Acoustic Telemetry
            </h4>
<span class="text-label-sm font-mono text-secondary px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20">LIVE ENGINE</span>
</div>
<!-- Metric 1: Fluency Index -->
<div class="mb-5">
<div class="flex justify-between items-center mb-1.5 text-label-md">
<span class="text-on-surface-variant">Fluency Index</span>
<span class="font-bold text-primary font-mono" id="val-fluency">94 / 100</span>
</div>
<div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div class="bg-primary h-full rounded-full transition-all duration-700" id="bar-fluency" style="width: 94%"></div>
</div>
<span class="text-[11px] text-on-surface-variant/70 mt-1 inline-block">Unbroken prosody, native sentence pitch architecture</span>
</div>
<!-- Metric 2: Filler Word Counter -->
<div class="mb-5 p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-between">
<div>
<div class="text-label-md text-on-surface-variant">Filler Words Flagged</div>
<div class="text-[12px] text-error font-medium" id="filler-detected-label">1 detected: <span class="underline">"essentially"</span></div>
</div>
<div class="w-10 h-10 rounded-lg bg-error/10 border border-error/20 flex items-center justify-center text-error font-mono font-bold text-lg" id="val-fillers">
              1
            </div>
</div>
<!-- Metric 3: Words Per Minute -->
<div class="mb-5">
<div class="flex justify-between items-center mb-1.5 text-label-md">
<span class="text-on-surface-variant">Speech Rate (WPM)</span>
<span class="font-bold text-secondary font-mono" id="val-wpm">138 WPM</span>
</div>
<div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div class="bg-secondary h-full rounded-full transition-all duration-700" id="bar-wpm" style="width: 76%"></div>
</div>
<span class="text-[11px] text-on-surface-variant/70 mt-1 inline-block">Target executive benchmark: 130 – 145 WPM</span>
</div>
<!-- Metric 4: Lexical Density -->
<div class="mb-5">
<div class="flex justify-between items-center mb-1.5 text-label-md">
<span class="text-on-surface-variant">Lexical Density (Advanced Vocabulary)</span>
<span class="font-bold text-tertiary font-mono" id="val-lexical">88%</span>
</div>
<div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div class="bg-tertiary h-full rounded-full transition-all duration-700" id="bar-lexical" style="width: 88%"></div>
</div>
<span class="text-[11px] text-on-surface-variant/70 mt-1 inline-block">Sophisticated tier-3 nomenclature dominance</span>
</div>
<!-- Phonetic Clarity Badge -->
<div class="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-body-sm text-on-surface-variant">Phonetic Articulation</span>
<span class="px-2.5 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-label-sm font-semibold flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              98.2% Received Clear
            </span>
</div>
</div>
</div>
</section>
<!-- ====================================================== -->
<!-- SECTION 4: CONVERSATIONAL ROLEPLAY MATRIX -->
<!-- ====================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="roleplay">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">forum</span>
          High-Pressure Dialogue Sandbox
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Conversational Roleplay Matrix</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Test real-time diplomatic de-escalation, rapid venture capital persuasion, and aviation emergency assertiveness against institutional AI personas.
        </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Persona Selector (3 Cols) -->
<div class="lg:col-span-4 space-y-3">
<h4 class="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mb-2">Select Simulation Scenario</h4>
<!-- Persona 1 -->
<div class="p-4 rounded-xl bg-surface-container-high border-2 border-primary cursor-pointer transition-all" id="persona-founder" onclick="selectPersona('founder')">
<div class="flex items-center justify-between">
<span class="font-headline-sm font-semibold text-on-surface">Tech Founder Seed Pitch</span>
<span class="material-symbols-outlined text-primary text-[20px]">rocket_launch</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Skeptical Silicon Valley partner interrogating your unit economics &amp; moat.</p>
</div>
<!-- Persona 2 -->
<div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-outline cursor-pointer transition-all" id="persona-boardroom" onclick="selectPersona('boardroom')">
<div class="flex items-center justify-between">
<span class="font-headline-sm font-semibold text-on-surface">Hostile Boardroom Stakeholder</span>
<span class="material-symbols-outlined text-tertiary text-[20px]">gavel</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Interrogating a sovereign compliance breach during transnational merger.</p>
</div>
<!-- Persona 3 -->
<div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-outline cursor-pointer transition-all" id="persona-aviation" onclick="selectPersona('aviation')">
<div class="flex items-center justify-between">
<span class="font-headline-sm font-semibold text-on-surface">Anxious International Passenger</span>
<span class="material-symbols-outlined text-secondary text-[20px]">flight_takeoff</span>
</div>
<p class="text-body-sm text-on-surface-variant mt-1">Mid-air turbulence crisis de-escalation using authoritative reassurance.</p>
</div>
</div>
<!-- Chat Sandbox (8 Cols) -->
<div class="lg:col-span-8 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 flex flex-col justify-between h-[480px]">
<!-- Sandbox Header -->
<div class="flex items-center justify-between pb-4 border-b border-outline-variant/20">
<div class="flex items-center gap-3">
<div class="w-3 h-3 rounded-full bg-secondary"></div>
<div>
<div class="text-body-md font-semibold text-on-surface" id="active-persona-name">Marc Andreessen Protocol (Venture Partner)</div>
<div class="text-label-sm text-on-surface-variant" id="active-persona-status">Strict tone: Expects tight narrative structure without fluff.</div>
</div>
</div>
<span class="text-label-sm font-mono text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/20">Active Node</span>
</div>
<!-- Message History -->
<div class="flex-1 overflow-y-auto space-y-4 py-4 pr-2" id="roleplay-messages">
<!-- Persona message -->
<div class="flex items-start gap-3">
<div class="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined text-[18px]">smart_toy</span>
</div>
<div class="bg-surface-container p-3.5 rounded-xl border border-outline-variant/30 max-w-xl text-body-sm text-on-surface leading-relaxed">
                "We’ve reviewed your slide on synthetic language telemetry. Every founder uses the word 'revolutionary'. Exactly what linguistic moat protects your model against frontier open-weights when deployed in cross-border arbitration?"
              </div>
</div>
</div>
<!-- Suggested Quick Responses & Input -->
<div>
<div class="flex flex-wrap gap-2 mb-3" id="roleplay-suggestions">
<button class="text-label-sm bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface-variant hover:text-on-surface px-2.5 py-1 rounded transition-colors" onclick="fillRoleplayPrompt('Our proprietary value is not raw compute; it is the 400,000 verified jurisdictional arbitration transcripts we parsed under strict legal privilege.')">
                "Our value is in the 400k verified jurisdictional transcripts..."
              </button>
<button class="text-label-sm bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface-variant hover:text-on-surface px-2.5 py-1 rounded transition-colors" onclick="fillRoleplayPrompt('Open weights hallucinate under statutory ambiguity; our architecture guarantees zero semantic drift.')">
                "Open weights drift under statutory ambiguity..."
              </button>
</div>
<!-- Input bar -->
<div class="flex items-center gap-2">
<input class="flex-1 bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-on-surface-variant/40 text-body-sm rounded-lg px-4 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" id="roleplay-input" placeholder="Type your strategic verbal argument or use speech-to-text..." type="text"/>
<button class="bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-4 py-2.5 rounded-lg transition-all active:scale-95 flex items-center gap-1.5 shrink-0" onclick="sendRoleplayMessage()">
<span>Deliver</span>
<span class="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</div>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- SECTION 5: BRITISH RECEIVED PRONUNCIATION & MASTER ORATOR BENCHMARK -->
<!-- ========================================================================= -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="benchmarking">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-tertiary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">record_voice_over</span>
          Acoustic Gold Standards
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Master Orator &amp; Received Pronunciation Benchmark</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Study the cadence, vowel placement, and rhythmic suspension of the world's most captivating public speakers. Contrast your voiceprint against timeless standards.
        </p>
</div>
<!-- Orators Grid (6 Profiles) -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<!-- Orator 1: David Attenborough -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-secondary">Naturalist &amp; Broadcaster</span>
<span class="text-label-sm font-mono text-on-surface-variant">112 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Sir David Attenborough</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Reverent pauses, breath modulation &amp; dramatic sibilance creating universal intimacy.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Suspended Wonder</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('attenborough')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 2: Winston Churchill -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-primary">Statesman &amp; Nobel Laureate</span>
<span class="text-label-sm font-mono text-on-surface-variant">124 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Winston Churchill</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Alliterative heavy beats, Anglo-Saxon monosyllables &amp; martial rhetorical climaxes.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Sovereign Defiance</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('churchill')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div> /boost 
</div>
<!-- Orator 3: Dame Maggie Smith -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-tertiary">Classical Stage Dame</span>
<span class="text-label-sm font-mono text-on-surface-variant">130 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Dame Maggie Smith</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Dry ironic inflection, razor-sharp dental stops &amp; supreme Received Pronunciation (RP).</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Aristocratic Wit</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('maggie')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 4: Christopher Hitchens -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-primary">Polemicist &amp; Essayist</span>
<span class="text-label-sm font-mono text-on-surface-variant">148 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Christopher Hitchens</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Uninterrupted periodic syntax, spontaneous Latinate clauses &amp; combative dialectic speed.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Dialectical Precision</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('hitchens')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 5: Shashi Tharoor -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-secondary">Diplomat &amp; Parliamentarian</span>
<span class="text-label-sm font-mono text-on-surface-variant">142 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Dr. Shashi Tharoor</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Exuberant sesquipedalian lexicon, mellifluous Indian-RP hybrid cadence &amp; diplomatic panache.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Lexical Flourish</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('tharoor')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
<!-- Orator 6: Rowan Atkinson -->
<div class="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 transition-all flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-3">
<span class="text-label-sm font-semibold uppercase tracking-wider text-tertiary">Comedic Satirist &amp; Orator</span>
<span class="text-label-sm font-mono text-on-surface-variant">126 WPM</span>
</div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Rowan Atkinson</h3>
<p class="text-body-sm text-on-surface-variant mt-2">Hyper-articulated plosives (P, B, T, K), theatrical timing &amp; clinical comic delivery.</p>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-[12px] text-primary">Acoustic Archetype: Plosive Mastery</span>
<button class="p-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary transition-all text-on-surface" onclick="playSampleAcoustic('atkinson')">
<span class="material-symbols-outlined text-[20px]">volume_up</span>
</button>
</div>
</div>
</div>
<!-- Compare Your Own Cadence Bench -->
<div class="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30">
<div class="max-w-2xl mb-6">
<h4 class="text-headline-sm font-headline-sm text-on-surface font-semibold">Contrast Your Audio Stream Against the Masters</h4>
<p class="text-body-sm text-on-surface-variant mt-1">Upload a short recording (under 4MB) or paste your verbatim transcript to calculate your lexical rhythm similarity vector.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="border-2 border-dashed border-outline-variant/40 hover:border-primary/60 p-6 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-surface-container-low/40">
<span class="material-symbols-outlined text-primary text-[32px] mb-2">cloud_upload</span>
<span class="text-body-sm font-medium text-on-surface">Upload Voice File (.mp3, .wav under 4MB)</span>
<span class="text-label-sm text-on-surface-variant/70 mt-1">Audio is transiently processed in RAM and discarded immediately.</span>
</div>
<div class="flex flex-col gap-2">
<textarea class="w-full h-24 bg-surface-container-low border border-outline-variant/30 rounded-xl p-3 text-body-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none resize-none" placeholder="Or paste 30-60 seconds of your spoken transcript here to compare cadential entropy..."></textarea>
<button class="self-end bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-semibold text-label-md px-4 py-2 rounded-lg transition-all active:scale-95" onclick="simulateMasterComparison()">
              Compute Acoustic Distance
            </button>
</div>
</div>
<div class="hidden mt-6 p-4 rounded-xl bg-surface-container border border-primary/30 flex items-center justify-between text-body-sm" id="comparison-result">
<span class="text-on-surface">Acoustic resonance calculated: <strong>81.4% match to Received Pronunciation standard</strong>. Minimal glottal stops detected.</span>
<span class="text-secondary font-mono font-bold">Passed Level 6 ICAO/BBC Metric</span>
</div>
</div>
</section>
<!-- ============================================================== -->
<!-- SECTION 6: PERSONALIZED CLASS-TO-CAREER STRATEGIC ROADMAP -->
<!-- ============================================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="roadmap">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">alt_route</span>
          Strategic Trajectory Planner
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Class-to-Career Strategic Roadmap</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Map foundational linguistic milestones directly to international universities and institutional peak compensation.
        </p>
</div>
<!-- Roadmap Form Selector -->
<div class="max-w-3xl mx-auto p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 mb-10">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label class="block text-label-sm uppercase tracking-wider text-on-surface-variant mb-1.5">Current Academic Cohort</label>
<select class="w-full bg-surface-container-high border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" id="cohort-selector" onchange="generateRoadmap()">
<option value="class8">Class 8</option>
<option value="class9">Class 9</option>
<option selected="" value="class10">Class 10</option>
<option value="class11">Class 11</option>
<option value="class12">Class 12</option>
<option value="undergrad">Undergraduate Scholar</option>
</select>
</div>
<div>
<label class="block text-label-sm uppercase tracking-wider text-on-surface-variant mb-1.5">Target Sovereign Trajectory</label>
<select class="w-full bg-surface-container-high border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2.5 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none" id="trajectory-selector" onchange="generateRoadmap()">
<option value="screenwriter">Screenwriter &amp; Showrunner (OTT)</option>
<option selected="" value="lawyer">Corporate Lawyer &amp; Global Arbitrator</option>
<option value="pilot">Commercial Airline Captain</option>
<option value="narrative">AAA Narrative Game Designer</option>
<option value="diplomat">International Envoy &amp; Public Orator</option>
</select>
</div>
</div>
</div>
<!-- Dynamic 4-Phase Milestone Display -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative" id="roadmap-milestones">
<!-- Phase 1 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-label-md mb-4">1</div>
<span class="text-label-sm text-primary uppercase tracking-wider font-semibold">Phase 1: Vocabulary &amp; Syntax</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase1-title">Legal Latinate Lexicon</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase1-desc">
            Master 1,200 jurisdictional Latin roots, statutory disambiguation, and active analytical parsing.
          </p>
</div>
<!-- Phase 2 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-label-md mb-4 border border-outline-variant">2</div>
<span class="text-label-sm text-secondary uppercase tracking-wider font-semibold">Phase 2: Standardized Testing</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase2-title">CLAT / LNAT Mastery</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase2-desc">
            Target 99.8th percentile in reading comprehension and critical logic under strict timing constraints.
          </p>
</div>
<!-- Phase 3 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-bold text-label-md mb-4 border border-outline-variant">3</div>
<span class="text-label-sm text-tertiary uppercase tracking-wider font-semibold">Phase 3: University Specialization</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase3-title">NLSIU / Oxford BCL</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase3-desc">
            Premier moot court representation, international maritime law briefs, and journal publication.
          </p>
</div>
<!-- Phase 4 -->
<div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 relative">
<div class="w-8 h-8 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-bold text-label-md mb-4 border border-secondary/40">4</div>
<span class="text-label-sm text-secondary uppercase tracking-wider font-semibold">Phase 4: Sovereign Career</span>
<h4 class="text-headline-sm font-headline-sm font-semibold text-on-surface mt-1" id="phase4-title">International Partner</h4>
<p class="text-body-sm text-on-surface-variant mt-2" id="phase4-desc">
            Command ₹1.2Cr+ partner retainer presiding over transnational commercial disputes in London &amp; Singapore.
          </p>
</div>
</div>
</section>
<!-- ================================================================= -->
<!-- SECTION 7: INTERACTIVE MINI-CHALLENGES (FIX-EMAIL & WORD-OF-DAY) -->
<!-- ================================================================= -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-secondary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">psychology</span>
          Executive Polish Challenges
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Precision Drills: Micro-Refactoring</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Instantaneous executive transformation: Elevate colloquial drafts into razor-sharp institutional memorandums.
        </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Challenge 1: Fix-the-Email Simulator (7 Cols) -->
<div class="lg:col-span-7 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-4">
<span class="text-label-md font-semibold text-on-surface flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">mark_email_read</span>
                Drill: Executive Email Refactor
              </span>
<span class="text-label-sm text-on-surface-variant">Click to identify weak prose</span>
</div>
<!-- Unpolished Email Box -->
<div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-body-sm space-y-3 font-mono">
<div class="text-on-surface-variant/70 text-[12px]">Subject: Hey, about the funding contract we spoke about earlier...</div>
<div class="text-on-surface leading-relaxed" id="email-body-text">
                "Hey Marc, <br/><br/>
                Just wanted to <span class="bg-error/20 text-error px-1 rounded cursor-pointer" title="Colloquial padding">touch base real quick</span> regarding the seed term sheet. We were kind of thinking maybe the valuation cap was <span class="bg-error/20 text-error px-1 rounded cursor-pointer" title="Hesitant qualifier">a bit too low for us</span> given that we are working super hard on this model. Can we chat tomorrow if you have some free time? <br/><br/>
                Thanks a ton,<br/>
                Alex"
              </div>
</div>
<!-- Refactored AI Output Box (Hidden until action) -->
<div class="hidden mt-4 p-5 rounded-xl bg-surface-container border border-secondary/40 text-body-sm space-y-2 animate-fadeIn" id="email-refactored-box">
<div class="text-secondary text-[12px] font-semibold uppercase tracking-wider flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">verified</span>
                Institutional C-Suite Version
              </div>
<div class="text-on-surface leading-relaxed">
                "Dear Marc,<br/><br/>
                Following our term sheet review, our advisory board has assessed the initial pre-money valuation against our synthetic model’s validated 4x retention. We request aligning the capital cap at ₹35Cr to mirror our Q3 enterprise pipeline. <br/><br/>
                I welcome a brief 10-minute briefing tomorrow at 14:00 UTC.<br/><br/>
                Respectfully,<br/>
                Alexander Vance"
              </div>
</div>
</div>
<div class="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-label-sm text-on-surface-variant">Eliminates 3 passive hedges &amp; 2 conversational diminutives.</span>
<button class="bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-4 py-2.5 rounded-lg transition-all active:scale-95 flex items-center gap-2" id="refactor-btn" onclick="refactorEmail()">
<span class="material-symbols-outlined text-[18px]">auto_fix_high</span>
              AI Refactor
            </button>
</div>
</div>
<!-- Challenge 2: Word-of-the-Day Institutional Lexicon (5 Cols) -->
<div class="lg:col-span-5 bg-surface-container-low rounded-2xl border border-outline-variant/30 p-6 sm:p-8 flex flex-col justify-between">
<div>
<div class="flex items-center justify-between mb-4">
<span class="text-label-md font-semibold text-tertiary flex items-center gap-2">
<span class="material-symbols-outlined text-[20px]">auto_stories</span>
                Institutional Lexicon
              </span>
<span class="text-label-sm font-mono text-on-surface-variant">Daily C-Suite Entry</span>
</div>
<div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
<div class="flex items-baseline justify-between">
<h3 class="text-headline-lg font-headline-lg font-bold text-on-surface" id="wod-word">Perspicacious</h3>
<span class="text-label-sm font-mono text-primary" id="wod-ipa">/ˌpɜː.spɪˈkeɪ.ʃəs/</span>
</div>
<div class="text-label-sm text-on-surface-variant mt-1" id="wod-pos">Adjective • Latin <em>perspicax</em> (sharp-sighted)</div>
<div class="mt-4 pt-3 border-t border-outline-variant/20">
<div class="text-label-sm font-semibold text-on-surface">Definition:</div>
<p class="text-body-sm text-on-surface-variant mt-0.5" id="wod-def">
                  Having a ready insight into and understanding of complex sovereign or financial affairs.
                </p>
</div>
<div class="mt-4 pt-3 border-t border-outline-variant/20">
<div class="text-label-sm font-semibold text-secondary">Boardroom Application:</div>
<p class="text-body-sm text-on-surface-variant/90 italic mt-0.5" id="wod-example">
                  "The general counsel made a perspicacious intervention, identifying the ambiguous indemnity loophole before contract execution."
                </p>
</div>
</div>
</div>
<!-- Lexicon Cycle Button -->
<div class="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<span class="text-label-sm text-on-surface-variant">Tier-3 Executive Lexicon</span>
<button class="text-label-md text-primary hover:text-primary-container font-semibold flex items-center gap-1 transition-colors" onclick="cycleWordOfDay()">
              Next Entry <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
<!-- ========================================================================= -->
<!-- SECTION 8: SCHOOL-WIDE SPEECH LEADERBOARD & PRIVACY GOVERNANCE -->
<!-- ========================================================================= -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="telemetry">
<div class="text-center max-w-3xl mx-auto mb-14">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-primary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">leaderboard</span>
          Articulation Telemetry
        </div>
<h2 class="text-headline-lg font-headline-lg text-on-surface font-bold">Consortium Speech Leaderboard</h2>
<p class="text-body-md text-on-surface-variant mt-2">
          Anonymized articulation benchmarking measuring cadence stability, lexical density, and zero-filler eloquence across secondary cohorts.
        </p>
</div>
<!-- Leaderboard Table -->
<div class="overflow-x-auto rounded-2xl border border-outline-variant/30 bg-surface-container-low mb-8">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-outline-variant/20 text-label-sm uppercase tracking-wider text-on-surface-variant bg-surface-container">
<th class="py-4 px-6">Rank</th>
<th class="py-4 px-6">Delegate Alias</th>
<th class="py-4 px-6">Cohort</th>
<th class="py-4 px-6">Specialized Discipline</th>
<th class="py-4 px-6 text-right">Articulation Score</th>
<th class="py-4 px-6 text-center">Status</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/10 text-body-sm font-medium">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-secondary">01</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-secondary/10 border border-secondary/30 text-secondary flex items-center justify-center text-label-sm font-mono font-bold">AV</span>
                Delegate Orion-9
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 12</td>
<td class="py-4 px-6 text-on-surface">International Arbitration</td>
<td class="py-4 px-6 text-right font-mono font-bold text-secondary">98.4 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-secondary/10 border border-secondary/30 text-secondary font-semibold">Exemplary</span>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-on-surface-variant">02</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center text-label-sm font-mono font-bold">KS</span>
                Delegate Zephyr-4
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 11</td>
<td class="py-4 px-6 text-on-surface">Screenplay &amp; OTT Pitch</td>
<td class="py-4 px-6 text-right font-mono font-bold text-primary">97.1 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-primary/10 border border-primary/30 text-primary font-semibold">Exemplary</span>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-on-surface-variant">03</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary flex items-center justify-center text-label-sm font-mono font-bold">MR</span>
                Delegate Callisto-7
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 10</td>
<td class="py-4 px-6 text-on-surface">Aviation Radiotelephony</td>
<td class="py-4 px-6 text-right font-mono font-bold text-on-surface">95.8 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-surface-container-high text-on-surface-variant border border-outline-variant/30 font-semibold">Verified</span>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-high/40 transition-colors">
<td class="py-4 px-6 font-mono font-bold text-on-surface-variant">04</td>
<td class="py-4 px-6 text-on-surface flex items-center gap-2">
<span class="w-7 h-7 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center text-label-sm font-mono font-bold">TL</span>
                Delegate Aurora-1
              </td>
<td class="py-4 px-6 text-on-surface-variant">Class 12</td>
<td class="py-4 px-6 text-on-surface">Transnational Diplomacy</td>
<td class="py-4 px-6 text-right font-mono font-bold text-on-surface">94.9 / 100</td>
<td class="py-4 px-6 text-center">
<span class="px-2 py-0.5 rounded text-[11px] bg-surface-container-high text-on-surface-variant border border-outline-variant/30 font-semibold">Verified</span>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Verified Privacy Governance Banner -->
<div class="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary text-[26px]">verified_user</span>
<div>
<div class="text-body-sm font-semibold text-on-surface">Transient Audio Governance &amp; Data Protection</div>
<div class="text-label-sm text-on-surface-variant">
              All voice data processed transiently in compliance with strict privacy protocols. No audio is stored permanently.
            </div>
</div>
</div>
<span class="text-label-sm font-mono text-secondary px-3 py-1 rounded bg-secondary/10 border border-secondary/30 shrink-0">
          ISO / Zero-Log Enforced
        </span>
</div>
</section>
<!-- =============================================== -->
<!-- SECTION 9: ARTISTIC AI QR CODE PORTAL -->
<!-- =============================================== -->
<section class="py-24 px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto border-b border-outline-variant/20" id="qr-portal">
<div class="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-surface-container-low border border-outline-variant/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
<!-- Ambient Radial Light -->
<div class="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
<!-- Left Column: Copy & Actions -->
<div class="max-w-lg">
<div class="inline-flex items-center gap-2 text-label-sm font-label-sm text-secondary tracking-widest uppercase mb-2">
<span class="material-symbols-outlined text-[16px]">devices</span>
            Direct Mobile Stall Gateway
          </div>
<h3 class="text-headline-lg font-headline-lg font-bold text-on-surface">Experience Verbum Premier on Personal Devices</h3>
<p class="text-body-md text-on-surface-variant mt-3 leading-relaxed">
            Scan to initiate instantaneous microphone calibration, acoustic telemetry benchmark tests, and personalized career roadmaps directly on your smartphone.
          </p>
<div class="mt-8 flex flex-wrap items-center gap-4">
<button class="inline-flex items-center gap-2 bg-primary-container hover:bg-primary-container/90 text-white font-semibold text-label-md px-5 py-3 rounded-lg transition-all active:scale-95 shadow-[0_0_16px_rgba(29,78,216,0.3)]" onclick="downloadVectorQr()">
<span class="material-symbols-outlined text-[20px]">download</span>
              Download Vector PNG
            </button>
<div class="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span class="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span>Ultra-low latency web app</span>
</div>
</div>
</div>
<!-- Right Column: Artistic Styled QR Code with Neon Frame -->
<div class="relative shrink-0 p-5 rounded-2xl bg-surface-container-lowest border-2 border-primary/40 shadow-[0_0_30px_rgba(29,78,216,0.25)] flex flex-col items-center">
<!-- Circuit pattern corners -->
<div class="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary"></div>
<div class="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary"></div>
<div class="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary"></div>
<div class="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary"></div>
<!-- Stylized High-Density QR Canvas -->
<div class="w-48 h-48 bg-white p-3 rounded-xl flex items-center justify-center relative overflow-hidden">
<!-- Simulated QR Visual pattern -->
<div class="w-full h-full bg-slate-900 rounded grid grid-cols-6 grid-rows-6 gap-1 p-2 relative">
<div class="bg-white col-span-2 row-span-2 rounded-sm p-1 flex items-center justify-center">
<div class="w-full h-full bg-slate-900 rounded-xs"></div>
</div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2 row-span-2 rounded-sm p-1 flex items-center justify-center">
<div class="w-full h-full bg-slate-900 rounded-xs"></div>
</div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2 row-span-2 rounded-sm p-1 flex items-center justify-center">
<div class="w-full h-full bg-slate-900 rounded-xs"></div>
</div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-2"></div>
<div class="bg-white col-span-4"></div>
<!-- Center Emblem -->
<div class="absolute inset-0 flex items-center justify-center">
<div class="w-9 h-9 rounded-full bg-primary-container border-2 border-white flex items-center justify-center shadow-lg">
<span class="text-white font-bold text-[12px] font-headline-md tracking-tighter">VP</span>
</div>
</div>
</div>
</div>
<span class="text-label-sm font-mono text-primary mt-3 tracking-widest uppercase font-semibold">VERBUM.CONSORTIUM</span>
</div>
</div>
</section>
</main>
<!-- ============================================================= -->
<!-- SECTION 10: HIDDEN EXECUTIVE ADMIN CONSOLE & 5-TIER AI ROUTER -->
<!-- (Toggleable via click seal or hotkey Ctrl+Shift+A) -->
<!-- ============================================================= -->
<div class="fixed inset-0 z-[100] bg-surface-dim/80 backdrop-blur-xl flex items-center justify-center p-4 hidden" id="admin-modal">
<div class="w-full max-w-4xl bg-surface-container-low border border-outline-variant rounded-2xl shadow-2xl p-6 sm:p-8 relative max-h-[921px] overflow-y-auto">
<!-- Close Button -->
<button class="absolute top-6 right-6 p-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface transition-all" onclick="toggleAdminModal()">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
<!-- Admin Header -->
<div class="flex items-center gap-3 pb-6 border-b border-outline-variant/20">
<div class="w-10 h-10 rounded-xl bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[24px]">terminal</span>
</div>
<div>
<h3 class="text-headline-sm font-headline-sm font-bold text-on-surface">Institutional Router &amp; Infrastructure Console</h3>
<p class="text-label-sm text-on-surface-variant">5-Tier Autonomous Redundancy Orchestrator &amp; Feature Toggles</p>
</div>
</div>
<!-- 5-Tier AI Router Status -->
<div class="my-6">
<div class="flex items-center justify-between mb-3">
<h4 class="text-label-md font-semibold text-on-surface uppercase tracking-wider">5-Tier Failover Telemetry</h4>
<span class="text-label-sm font-mono text-secondary">Zero-Downtime Pipeline</span>
</div>
<div class="space-y-3 font-mono text-body-sm">
<!-- Tier 1 -->
<div class="p-3.5 rounded-xl bg-surface-container border border-secondary/40 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
<div>
<span class="text-on-surface font-semibold">Tier 1: Cloudflare Workers AI</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Primary edge serverless compute (10,000 Neurons/day pool)</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-secondary/15 text-secondary font-bold">ACTIVE (14ms)</span>
</div>
<!-- Tier 2 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
<div>
<span class="text-on-surface font-semibold">Tier 2: Gemini Multi-Key Gateway</span>
<span class="text-label-sm text-on-surface-variant block font-sans">3 API keys pooled in round-robin fallback</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-primary/10 text-primary font-bold">HOT STANDBY</span>
</div>
<!-- Tier 3 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-outline"></span>
<div>
<span class="text-on-surface font-semibold">Tier 3: Tasfin Free LLM Endpoint</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Community distributed backup cluster</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-bold">READY</span>
</div>
<!-- Tier 4 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<div>
<span class="text-on-surface font-semibold">Tier 4: Local Ryzen 7 16GB Host Node</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Ollama Llama-3.2 3B tunnel for offline stall environments</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-tertiary/10 text-tertiary font-bold">TUNNELED</span>
</div>
<!-- Tier 5 -->
<div class="p-3.5 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
<div>
<span class="text-on-surface font-semibold">Tier 5: Client On-Device WebSpeech &amp; Rule Engine</span>
<span class="text-label-sm text-on-surface-variant block font-sans">Browser-local zero-network fallback synthesis</span>
</div>
</div>
<span class="text-label-sm px-2.5 py-1 rounded bg-surface-container text-secondary-fixed-dim font-bold">READY</span>
</div>
</div>
</div>
<!-- Manual Router Override Selector -->
<div class="p-4 rounded-xl bg-surface-container border border-outline-variant/30 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<span class="text-body-sm font-semibold text-on-surface">Manual AI Routing Override</span>
<span class="text-label-sm text-on-surface-variant block">Force traffic to specific nodes during network congestion</span>
</div>
<select class="bg-surface-container-highest border border-outline-variant text-on-surface text-body-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary focus:outline-none" id="router-override-select">
<option value="auto">Autonomous Dynamic Failover</option>
<option value="force-gemini">Force Gemini Pool</option>
<option value="force-local">Force Local Ryzen Node</option>
<option value="force-client">Force Client WebSpeech</option>
</select>
</div>
<!-- Modular Feature Kill-Switches -->
<div class="border-t border-outline-variant/20 pt-6">
<h4 class="text-label-md font-semibold text-on-surface uppercase tracking-wider mb-4">Modular Feature Kill-Switches</h4>
<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Speech Lab</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Leaderboard</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Roleplay Sandbox</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">QR Portal</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">Roadmaps</span>
</label>
<label class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input checked="" class="rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-lowest" type="checkbox"/>
<span class="text-body-sm text-on-surface">School Banner</span>
</label>
</div>
</div>
</div>
</div>
<!-- ============================================== -->
<!-- FOOTER (Shared Components JSON Anchor & School) -->
<!-- ============================================== -->
<footer class="bg-surface-container-lowest dark:bg-surface-container-lowest docked full-width bottom border-t border-outline-variant/20 flat no shadows mt-20">
<div class="w-full px-margin-mobile md:px-margin-tablet lg:px-margin max-w-7xl mx-auto py-space-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
<!-- Copyright from JSON Anchor & Toggleable School Badge -->
<div class="flex flex-col items-start gap-1">
<span class="text-label-sm font-label-sm text-on-surface-variant dark:text-on-surface-variant">
          © 2025 Verbum Sovereign Career Consortium. High-Stakes Institutional Communication Benchmarking.
        </span>
<!-- Official Copyright Badge from Prompt Requirement -->
<div class="flex items-center gap-2 mt-1">
<span class="text-label-sm font-semibold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
            © Kanakia International School Mira Road
          </span>
<span class="text-[11px] text-on-surface-variant/60">Official Institutional Pavilion Showcase</span>
</div>
</div>
<!-- Footer Navigation Links from JSON Anchor -->
<div class="flex flex-wrap items-center gap-4 text-label-sm font-label-sm text-on-surface-variant dark:text-on-surface-variant">
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#roadmap">Sovereign Protocol</a>
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#benchmarking">Neural Latency Benchmark</a>
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#sectors">Sector Clearance Matrix</a>
<a class="hover:text-primary dark:hover:text-primary transition-colors duration-150" href="#telemetry">Telemetry Consent</a>
<button class="hover:text-primary dark:hover:text-primary transition-colors duration-150 cursor-pointer" onclick="toggleAdminModal()">Admin Routing</button>
</div>
</div>
</footer>
<!-- INLINE VANILLA JAVASCRIPT LOGIC FOR REAL-TIME INTERACTION -->
<script>
    // 1. Scroll Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('scroll-progress-bar').style.width = scrolled + '%';
    });

    // 2. Filter Careers in Section 2
    function filterCareers(category) {
      const cards = document.querySelectorAll('.career-card');
      const buttons = document.querySelectorAll('#career-filter-tabs .filter-btn');
      
      buttons.forEach(btn => {
        btn.classList.remove('bg-surface-container-high', 'text-on-surface');
        btn.classList.add('text-on-surface-variant');
      });
      event.target.classList.add('bg-surface-container-high', 'text-on-surface');
      event.target.classList.remove('text-on-surface-variant');

      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-sector') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // 3. Teleprompter Script Selector
    const scripts = {
      hollywood: {
        title: "Hollywood Pitch: Sci-Fi Pilot",
        text: "\"Ladies and gentlemen of the network room: The series begins in 2088 inside orbital salvage bay nine. What appears to be an abandoned cryo-vessel is essentially carrying the sole uncorrupted neural seed of humanity. We are not selling a space opera; we are selling the final legal trial of biological consciousness.\""
      },
      aviation: {
        title: "Aviation Emergency Clearance",
        text: "\"Pan-Pan, Pan-Pan, Pan-Pan. London Control, Speedbird 118 heavy. Descending flight level 100, established on direct vector for runway 27 Right. Multiple hydraulic telemetry deviations; request non-standard separation and full rollout priority on arrival.\""
      },
      court: {
        title: "Supreme Court Oral Argument",
        text: "\"May it please the Court: The sovereign treaty of 1994 does not admit of bilateral ambiguity. If this bench construes clause twelve to permit unilateral tariff suspensions, it overturns thirty years of maritime trade consensus without statutory warrant.\""
      },
      boardroom: {
        title: "Transnational M&A Defense",
        text: "\"Members of the board: A hostile takeover at a fifteen percent premium fails to reflect our sovereign defense patents. Our recommendation is immediate poison pill activation coupled with a Singapore arbitration injunction.\""
      }
    };

    function updateTeleprompterScript(key) {
      const item = scripts[key];
      if (item) {
        document.getElementById('script-title-display').innerText = item.title;
        document.getElementById('teleprompter-text').innerText = item.text;
      }
    }

    // 4. Waveform Audio Simulator
    const canvas = document.getElementById('waveform-canvas');
    const ctx = canvas.getContext('2d');
    let isRecording = false;
    let animFrame;

    function resizeCanvas() {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function drawIdleWaveform() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(183, 196, 255, 0.2)';
      ctx.lineWidth = 2;
      const centerY = canvas.height / 2;
      ctx.moveTo(0, centerY);
      for (let x = 0; x < canvas.width; x += 10) {
        ctx.lineTo(x, centerY + Math.sin(x * 0.03) * 3);
      }
      ctx.stroke();
    }
    drawIdleWaveform();

    function drawActiveWaveform() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const bars = Math.floor(canvas.width / 8);
      for (let i = 0; i < bars; i++) {
        const height = Math.random() * (canvas.height * 0.75);
        const x = i * 8;
        const y = (canvas.height - height) / 2;
        ctx.fillStyle = '#68dba9';
        ctx.fillRect(x, y, 4, height);
      }
      if (isRecording) {
        animFrame = requestAnimationFrame(drawActiveWaveform);
      }
    }

    function toggleRecording() {
      isRecording = !isRecording;
      const btn = document.getElementById('record-btn');
      const text = document.getElementById('record-text');
      const icon = document.getElementById('record-icon');
      const overlay = document.getElementById('recording-status-overlay');

      if (isRecording) {
        btn.classList.remove('bg-error');
        btn.classList.add('bg-secondary-container');
        text.innerText = "Listening...";
        icon.innerText = "graphic_eq";
        overlay.classList.add('hidden');
        drawActiveWaveform();
      } else {
        btn.classList.add('bg-error');
        btn.classList.remove('bg-secondary-container');
        text.innerText = "Record Voice Sample";
        icon.innerText = "mic";
        cancelAnimationFrame(animFrame);
        drawIdleWaveform();
        overlay.classList.remove('hidden');
        overlay.innerText = "Audio captured. Calculating phonetic vectors...";
        setTimeout(runAcousticAnalysis, 600);
      }
    }

    function runAcousticAnalysis() {
      const fluency = Math.floor(Math.random() * 6) + 93;
      const wpm = Math.floor(Math.random() * 10) + 134;
      document.getElementById('val-fluency').innerText = fluency + " / 100";
      document.getElementById('bar-fluency').style.width = fluency + "%";
      document.getElementById('val-wpm').innerText = wpm + " WPM";
      document.getElementById('recording-status-overlay').innerText = "Telemetry synchronized. Acoustic report generated.";
    }

    function resetSpeechLab() {
      if (isRecording) toggleRecording();
      document.getElementById('teleprompter-script-selector').value = 'hollywood';
      updateTeleprompterScript('hollywood');
      drawIdleWaveform();
      document.getElementById('recording-status-overlay').innerText = "Ready for acoustic input. Press 'Record Voice Sample'.";
    }

    // 5. Conversational Roleplay Logic
    const personas = {
      founder: {
        name: "Marc Andreessen Protocol (Venture Partner)",
        status: "Strict tone: Expects tight narrative structure without fluff.",
        initial: "\"We’ve reviewed your slide on synthetic language telemetry. Every founder uses the word 'revolutionary'. Exactly what linguistic moat protects your model against frontier open-weights when deployed in cross-border arbitration?\""
      },
      boardroom: {
        name: "Hostile Stakeholder (Global M&A Council)",
        status: "Interrogative: Zero tolerance for vague compliance hedges.",
        initial: "\"Counselor, you are telling this board that European anti-trust clearance is 'likely'. On what statutory authority can we risk eight hundred million euros on a probability?\""
      },
      aviation: {
        name: "First Officer Vance (Cockpit Emergency)",
        status: "Aviation Assertiveness: Requires unambiguous standard phraseology.",
        initial: "\"Captain, we have contradictory pitch trim alerts and crosswind shear at two hundred feet. Are you executing the go-around protocol or continuing approach?\""
      }
    };

    function selectPersona(key) {
      document.querySelectorAll('[id^="persona-"]').forEach(el => {
        el.classList.remove('border-primary', 'border-2', 'bg-surface-container-high');
        el.classList.add('border-outline-variant/30', 'bg-surface-container-low');
      });
      const selected = document.getElementById('persona-' + key);
      selected.classList.add('border-primary', 'border-2', 'bg-surface-container-high');
      selected.classList.remove('bg-surface-container-low');

      const data = personas[key];
      document.getElementById('active-persona-name').innerText = data.name;
      document.getElementById('active-persona-status').innerText = data.status;
      
      const msgContainer = document.getElementById('roleplay-messages');
      msgContainer.innerHTML = `
        <div class="flex items-start gap-3">
          <div class="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
            <span class="material-symbols-outlined text-[18px]">smart_toy</span>
          </div>
          <div class="bg-surface-container p-3.5 rounded-xl border border-outline-variant/30 max-w-xl text-body-sm text-on-surface leading-relaxed">
            ${data.initial}
          </div>
        </div>
      `;
    }

    function fillRoleplayPrompt(text) {
      document.getElementById('roleplay-input').value = text;
    }

    function sendRoleplayMessage() {
      const input = document.getElementById('roleplay-input');
      const val = input.value.trim();
      if (!val) return;

      const msgContainer = document.getElementById('roleplay-messages');
      // User message
      msgContainer.innerHTML += `
        <div class="flex items-start gap-3 justify-end">
          <div class="bg-primary-container text-white p-3.5 rounded-xl max-w-xl text-body-sm leading-relaxed shadow-sm">
            ${val}
          </div>
          <div class="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-label-sm shrink-0">
            YOU
          </div>
        </div>
      `;
      input.value = '';
      msgContainer.scrollTop = msgContainer.scrollHeight;

      // Simulated AI counter response
      setTimeout(() => {
        msgContainer.innerHTML += `
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary shrink-0">
              <span class="material-symbols-outlined text-[18px]">smart_toy</span>
            </div>
            <div class="bg-surface-container p-3.5 rounded-xl border border-outline-variant/30 max-w-xl text-body-sm text-on-surface leading-relaxed">
              "Noted. That answers the structural concern with proper gravitas. Your cadence index scored in the 96th percentile for assertiveness."
            </div>
          </div>
        `;
        msgContainer.scrollTop = msgContainer.scrollHeight;
      }, 700);
    }

    // 6. Master Orator Sample Simulator
    function playSampleAcoustic(speaker) {
      alert("Acoustic sample loaded for " + speaker.toUpperCase() + ". Playing 10-second reference RP segment with live formant visualizer.");
    }

    function simulateMasterComparison() {
      const res = document.getElementById('comparison-result');
      res.classList.remove('hidden');
    }

    // 7. Dynamic Roadmap Generator
    const roadmaps = {
      lawyer: {
        p1: ["Legal Latinate Lexicon", "Master 1,200 jurisdictional Latin roots, statutory disambiguation, and active analytical parsing."],
        p2: ["CLAT / LNAT Mastery", "Target 99.8th percentile in reading comprehension and critical logic under strict timing constraints."],
        p3: ["NLSIU / Oxford BCL", "Premier moot court representation, international maritime law briefs, and journal publication."],
        p4: ["International Partner", "Command ₹1.2Cr+ partner retainer presiding over transnational commercial disputes in London & Singapore."]
      },
      screenwriter: {
        p1: ["Dramatic Prosody & Syntax", "Deconstruct 50 classical theatrical scripts for dialogue rhythm, subtextual irony, and character voice."],
        p2: ["Portfolio & Showrunner Reels", "Complete 2 spec teleplays for international festival circulation; submit to FTII/NYU pitch pipelines."],
        p3: ["NYU Tisch / FTII Direction", "Master multi-character arc orchestration and European co-production pitching labs."],
        p4: ["Lead Showrunner (OTT)", "Command ₹65L+ per season package helming international original series for streaming conglomerates."]
      },
      pilot: {
        p1: ["ICAO Standard Phraseology", "Flawless elimination of colloquial hesitations; mastering phonetic alphabet and rapid readback cadence."],
        p2: ["DGCA & Commercial License", "Command flight simulator instrument conditions with calm verbal authority during simulated turbine failure."],
        p3: ["Type Rating & Fleet Command", "Induction on Boeing 787 / Airbus A350 widebody international oceanic routes."],
        p4: ["International Captain", "Command ₹85L+ compensation as senior transatlantic line training captain."]
      },
      narrative: {
        p1: ["Interactive Rhetoric & World-building", "Design branching character dialogue graphs with distinct socio-linguistic registers."],
        p2: ["DigiPen / NID Portfolio", "Develop playable text-parser prototypes showcasing conditional narrative delivery."],
        p3: ["Senior Game Studio Writer", "Lead narrative lore and voice actor direction for multi-platform AAA video games."],
        p4: ["Creative Franchise Director", "Command ₹80L+ shaping transmedia intellectual properties spanning games, film, and literature."]
      },
      diplomat: {
        p1: ["Bilateral Rhetoric & Treaty English", "Parsing UN security council resolutions and ambiguity containment strategies."],
        p2: ["UPSC IFS / Oxford Diplomatic Studies", "Flawless oral interview defense and geopolitical argumentation under intense panel scrutiny."],
        p3: ["Permanent Mission Counselor", "Drafting bilateral agreements and delivering sovereign interventions at Geneva assemblies."],
        p4: ["Ambassador & Special Envoy", "Represent sovereign interests in multilateral security pacts and trade treaty negotiations."]
      }
    };

    function generateRoadmap() {
      const trajectory = document.getElementById('trajectory-selector').value;
      const data = roadmaps[trajectory] || roadmaps.lawyer;

      document.getElementById('phase1-title').innerText = data.p1[0];
      document.getElementById('phase1-desc').innerText = data.p1[1];
      document.getElementById('phase2-title').innerText = data.p2[0];
      document.getElementById('phase2-desc').innerText = data.p2[1];
      document.getElementById('phase3-title').innerText = data.p3[0];
      document.getElementById('phase3-desc').innerText = data.p3[1];
      document.getElementById('phase4-title').innerText = data.p4[0];
      document.getElementById('phase4-desc').innerText = data.p4[1];
    }

    // 8. Fix-the-Email Drill
    function refactorEmail() {
      const refactoredBox = document.getElementById('email-refactored-box');
      refactoredBox.classList.remove('hidden');
      document.getElementById('refactor-btn').classList.add('bg-secondary-container');
      document.getElementById('refactor-btn').innerText = "Refactored";
    }

    // 9. Word of the Day Cycle
    const words = [
      {
        word: "Perspicacious",
        ipa: "/ˌpɜː.spɪˈkeɪ.ʃəs/",
        pos: "Adjective • Latin perspicax (sharp-sighted)",
        def: "Having a ready insight into and understanding of complex sovereign or financial affairs.",
        ex: "\"The general counsel made a perspicacious intervention, identifying the ambiguous indemnity loophole before contract execution.\""
      },
      {
        word: "Equivocate",
        ipa: "/ɪˈkwɪv.ə.keɪt/",
        pos: "Verb • Latin aequivocus (equal voice)",
        def: "To use ambiguous language to conceal truth or avoid committing oneself in high-stakes negotiations.",
        ex: "\"A seasoned diplomat never equivocates under oath; they deploy precise statutory reservations instead.\""
      },
      {
        word: "Grandiloquent",
        ipa: "/ɡrænˈdɪl.ə.kwənt/",
        pos: "Adjective • Latin grandis (great) + loqui (speak)",
        def: "Pompous or extravagant in language, style, or manner; style lacking executive substance.",
        ex: "\"The board dismissed the pitch deck as grandiloquent rhetoric unsupported by audited balance sheets.\""
      }
    ];
    let wordIdx = 0;
    function cycleWordOfDay() {
      wordIdx = (wordIdx + 1) % words.length;
      const w = words[wordIdx];
      document.getElementById('wod-word').innerText = w.word;
      document.getElementById('wod-ipa').innerText = w.ipa;
      document.getElementById('wod-pos').innerHTML = w.pos;
      document.getElementById('wod-def').innerText = w.def;
      document.getElementById('wod-example').innerText = w.ex;
    }

    // 10. QR Vector PNG Download Action
    function downloadVectorQr() {
      alert("Vector QR Package (High-Resolution 3000x3000px PNG + SVG with Kanakia Pavilion metadata) initiated for print display.");
    }

    // 11. Hidden Admin Modal Trigger (5-Click Seal or Shortcut)
    let sealClicks = 0;
    document.getElementById('brand-logo-seal').addEventListener('click', () => {
      sealClicks++;
      if (sealClicks >= 5) {
        toggleAdminModal();
        sealClicks = 0;
      }
    });
    document.getElementById('admin-modal-trigger').addEventListener('click', toggleAdminModal);

    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        toggleAdminModal();
      }
    });

    function toggleAdminModal() {
      const modal = document.getElementById('admin-modal');
      modal.classList.toggle('hidden');
    }

    // 12. Theme Switcher Pill
    function switchTheme(theme) {
      const cosmic = document.getElementById('theme-btn-cosmic');
      const emerald = document.getElementById('theme-btn-emerald');
      const solar = document.getElementById('theme-btn-solar');

      [cosmic, emerald, solar].forEach(b => {
        b.classList.remove('bg-surface-container-high', 'text-on-surface', 'font-medium');
        b.classList.add('text-on-surface-variant');
      });

      if (theme === 'cosmic') {
        cosmic.classList.add('bg-surface-container-high', 'text-on-surface', 'font-medium');
        document.documentElement.style.setProperty('--tw-bg-opacity', '1');
      } else if (theme === 'emerald') {
        emerald.classList.add('bg-surface-container-high', 'text-on-surface', 'font-medium');
      } else if (theme === 'solar') {
        solar.classList.add('bg-surface-container-high', 'text-on-surface', 'font-medium');
      }
    }
  </script>
</body></html> add this in v2 and set up so it can be toggaled to this page from admin console and push it generate 5 different website eaCH wifh diff features. also add v3 as attached set it up."C:\Users\hp\Downloads\open-mic-careerfair.zip"
```
</details>

#### Prompt 16 | 2026-10-26T12:51:30Z

<details><summary><b>Large Prompt Payload (click to expand)</b></summary>

```html
use alexarenadia , ---
name: web-artifacts-builder
description: Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). Use for complex artifacts requiring state management, routing, or shadcn/ui components - not for simple single-file HTML/JSX artifacts.
license: Complete terms in LICENSE.txt
---

# Web Artifacts Builder

To build powerful frontend claude.ai artifacts, follow these steps:
1. Initialize the frontend repo using `scripts/init-artifact.sh`
2. Develop your artifact by editing the generated code
3. Bundle all code into a single HTML file using `scripts/bundle-artifact.sh`
4. Display artifact to user
5. (Optional) Test the artifact

**Stack**: React 18 + TypeScript + Vite + Parcel (bundling) + Tailwind CSS + shadcn/ui

## Design & Style Guidelines

VERY IMPORTANT: To avoid what is often referred to as "AI slop", avoid using excessive centered layouts, purple gradients, uniform rounded corners, and Inter font.

## Quick Start

### Step 1: Initialize Project

Run the initialization script to create a new React project:
```bash
bash scripts/init-artifact.sh <project-name>
cd <project-name>
```

This creates a fully configured project with:
- ✅ React + TypeScript (via Vite)
- ✅ Tailwind CSS 3.4.1 with shadcn/ui theming system
- ✅ Path aliases (`@/`) configured
- ✅ 40+ shadcn/ui components pre-installed
- ✅ All Radix UI dependencies included
- ✅ Parcel configured for bundling (via .parcelrc)
- ✅ Node 18+ compatibility (auto-detects and pins Vite version)

### Step 2: Develop Your Artifact

To build the artifact, edit the generated files. See **Common Development Tasks** below for guidance.

### Step 3: Bundle to Single HTML File

To bundle the React app into a single HTML artifact:
```bash
bash scripts/bundle-artifact.sh
```

This creates `bundle.html` - a self-contained artifact with all JavaScript, CSS, and dependencies inlined. This file can be directly shared in Claude conversations as an artifact.

**Requirements**: Your project must have an `index.html` in the root directory.

**What the script does**:
- Installs bundling dependencies (parcel, @parcel/config-default, parcel-resolver-tspaths, html-inline)
- Creates `.parcelrc` config with path alias support
- Builds with Parcel (no source maps)
- Inlines all assets into single HTML using html-inline

### Step 4: Share Artifact with User

Finally, share the bundled HTML file in conversation with the user so they can view it as an artifact.

### Step 5: Testing/Visualizing the Artifact (Optional)

Note: This is a completely optional step. Only perform if necessary or requested.

To test/visualize the artifact, use available tools (including other Skills or built-in tools like Playwright or Puppeteer). In general, avoid testing the artifact upfront as it adds latency between the request and when the finished artifact can be seen. Test later, after presenting the artifact, if requested or if issues arise.

## Reference

- **shadcn/ui components**: https://ui.shadcn.com/docs/components and ---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
license: Complete terms in LICENSE.txt
---

# Frontend Design

Approach this as the design lead at a design studio known for giving every client a distinct visual identity that is not mistaken for anyone else's. This client has already rejected proposals that felt cliché or templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take aesthetic risk if justified.

## Ground your designs in the subject matter

If the brief does not identify what the product or subject matter is, identify it yourself before designing, and confirm with the client. You can come up with one concrete subject, the design's audience, and the design's primary job, as a proposal. If there's any information in your memory about the client's preferences or context about what they're building, use that as a hint. The subject's industry, subject matter, materials, and vernacular are where distinctive visual choices come from — a design for a toy for girls aged 8–11 will be very aesthetically different from a dashboard for financial analysts. Build with the brief's real content and subject matter throughout.

## Design principles

For web designs, the hero is the first thing viewers will see. Open with the most characteristic thing in the subject's world, in the form that is most appropriate: a headline, an image, an animation, a live demo, an interactive moment, or other treatments. Be deliberate with your choice: a big number with a small label, supporting stats, and a gradient accent is the default treatment, so only use it if that's truly the best option.

Typography carries the personality of the page. You don't need a different typeface for display or headline text and body content: use one family or two, and if two, make them clearly distinct.

Choose your typefaces deliberately, not the default families you would reach for on any other project, and set a clear type scale following the default guidance of The Elements of Typographic Style with intentional weights, widths, and spacing. When type is used as a headline or visual element, use the type treatment itself as an active part of the design, not a neutral delivery vehicle for the content.

Default to line lengths of less than 80 characters. Serif typefaces can have slightly longer line lengths; give serif body text slightly more line-height than a sans-serif.

Avoid these default typographic treatments; they are the commonest tells of a generated page:
- Accenting just a single word or phrase in a headline, like putting one word in italic/bold or a different color.
- Using all caps for labels.
- Adding unnecessary typographic labels above content.

Visual structure is information. Structural devices like outlines, borders, numbering, eyebrows, dividers, labels, etc., encode useful information about the content rather than decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence — like a stepped process or a timeline. Before adding numbered markers, check the content really is a sequence.

Use non-user-triggered motion sparingly and deliberately, only to draw attention. A single orchestrated moment — one page-load sequence or one reveal — lands better than scattered effects; fade-and-slide-up entrances on each section and hover transitions on every card are the generic default and read as AI-generated. Motion that answers a person's action (opening, expanding, confirming) is welcome when it shows what changed.

Consider written content carefully. Often a design brief may not contain real content, and it's up to you to come up with copy and placeholder content. Copy can make a design feel as templated as the design itself. See the below section on writing for more guidance.

## Process: plan, review against the brief, build, critique

For calibration, AI-generated design right now clusters around some traits:
1. a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta or warm-clay accent (often near #D97757 — Anthropic's own Claude-interaction accent, so on a user's brief it reads as a tell);
2. a near-black background with a single bright acid-green or vermilion accent;
3. a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns;
4. the SaaS-card kit: content chopped into identical rounded cards, one border-radius on everything regardless of hierarchy, the same soft grey shadow (rgba(0,0,0,.1)) under each, and gradient washes as decoration;
5. template chrome that appears whatever the subject: a tracked-out ALL-CAPS eyebrow label above every heading; meta strings joined with middle dots ('A · B · C'); labels built as 'WORD — fragment' with a spaced em dash; tinted near-black (#0B0B0B, #111) standing in for black; a monospace face for small data labels; a '→' appended to link and button text.

All traits are legitimate for some briefs, but they are defaults rather than choices, and they appear regardless of subject. Where the brief pins down a visual direction, follow it exactly — the brief's own words always win, including when it asks for one of these looks. Where it leaves an axis free, don't spend that freedom on one of these defaults. As with a hired human designer, there's often a careful balance between doing what you're good at and taking each project as a chance to experiment and learn.

Work in two passes. First, brainstorm a short design plan based on the client's design brief: create a compact token system with color, type, layout, and principles.
- Color: describe the core base palette as 4–6 named hex values.
- Type: the typefaces and their roles.
- Layout: a layout concept, using one-sentence prose descriptions and ASCII wireframes to ideate and compare. Include alignment guidance; should the content be left aligned, center aligned, justified?
- Principles: the high-level guidance for what makes this page unique.

Then review that plan against the brief before building: if any part of it reads like the generic default you would produce for any similar page (work through a similar prompt to see if you arrive somewhere similar) rather than a choice made for this specific brief — revise that part, say what you changed and why. Only after you've confirmed the relative uniqueness of your design plan should you start to write the code, following the revised plan.

When writing the code, be careful of structuring your CSS selector specificities. It's easy to generate CSS classes that cancel each other out (especially with a type-based selector like .section and an element-based selector like .cta). This can happen often with padding/margin between sections.

## Restraint and self-critique

Spend your boldness in one place. Let one element be the memorable thing, keep everything around it quiet and disciplined, and cut any decoration that does not serve the brief. Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected, visually accessible, harmonious color palettes. Critique your own work as you build, taking screenshots to review if your environment supports it — a picture is worth 1000 tokens. Consider Chanel's advice: before leaving the house, take a look in the mirror and remove one accessory. Human creatives have memory and always try to do something new, so if you have a space to quickly jot down notes about what you've tried, it can help you in future passes.

## More on writing in design

Words appear in a design for one reason: to make it easier to understand and use. They are design content, not decoration. Bring the same intentionality and minimalism to copywriting that you would bring to spacing and color. Before writing anything, ask what the design needs to say, and how it can best be said to help the person navigate the experience.

Write from the end user's perspective. Name things by what users will understand in simple language, not by how the system is built. A user manages notifications, not webhook config. Describe what something is or does in plain terms rather than selling it. Being specific and legible to new users is always better than being clever.

Use active voice as default. A CTA says exactly what happens when it is used: "Save changes," not "Submit." An action keeps the same name through the whole flow, so the button that says "Publish" produces a toast that says "Published." The vocabulary of an interface is the signposting for someone navigating the product. Cohesion and consistency are how people learn their way around.

Treat failure and emptiness as moments for direction, not mood. Explain what went wrong and how to fix it, in the interface's voice rather than a person's. Errors don't apologize, and they are never vague about what happened. An empty screen is an invitation to act.

Keep the tone conversational: plain verbs, sentence case, no filler, with tone matched to the brand and the audience. Let each written element do exactly one job.
```
</details>

#### Prompt 17 | 2026-10-26T13:11:47Z

```text
did u analyse read.me of everyine and did accordongly set up ?
```

#### Prompt 18 | 2026-10-26T13:19:13Z

```text
not annual career exhibion and open mic not setup correctly.
```

#### Prompt 19 | 2026-10-26T13:36:18Z

```text
in v6 , add some games suiting that theme and make it better , dont change them e
```

#### Prompt 20 | 2026-10-26T13:37:10Z

<details><summary><b>Large Prompt Payload (click to expand)</b></summary>

```html
in v6 , add some games suiting that theme and make it better , dont change them euse 
description: Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). Use for complex artifacts requiring state management, routing, or shadcn/ui components - not for simple single-file HTML/JSX artifacts.
license: Complete terms in LICENSE.txt
---

# Web Artifacts Builder

To build powerful frontend claude.ai artifacts, follow these steps:
1. Initialize the frontend repo using `scripts/init-artifact.sh`
2. Develop your artifact by editing the generated code
3. Bundle all code into a single HTML file using `scripts/bundle-artifact.sh`
4. Display artifact to user
5. (Optional) Test the artifact

**Stack**: React 18 + TypeScript + Vite + Parcel (bundling) + Tailwind CSS + shadcn/ui

## Design & Style Guidelines

VERY IMPORTANT: To avoid what is often referred to as "AI slop", avoid using excessive centered layouts, purple gradients, uniform rounded corners, and Inter font.

## Quick Start

### Step 1: Initialize Project

Run the initialization script to create a new React project:
```bash
bash scripts/init-artifact.sh <project-name>
cd <project-name>
```

This creates a fully configured project with:
- ✅ React + TypeScript (via Vite)
- ✅ Tailwind CSS 3.4.1 with shadcn/ui theming system
- ✅ Path aliases (`@/`) configured
- ✅ 40+ shadcn/ui components pre-installed
- ✅ All Radix UI dependencies included
- ✅ Parcel configured for bundling (via .parcelrc)
- ✅ Node 18+ compatibility (auto-detects and pins Vite version)

### Step 2: Develop Your Artifact

To build the artifact, edit the generated files. See **Common Development Tasks** below for guidance.

### Step 3: Bundle to Single HTML File

To bundle the React app into a single HTML artifact:
```bash
bash scripts/bundle-artifact.sh
```

This creates `bundle.html` - a self-contained artifact with all JavaScript, CSS, and dependencies inlined. This file can be directly shared in Claude conversations as an artifact.

**Requirements**: Your project must have an `index.html` in the root directory.

**What the script does**:
- Installs bundling dependencies (parcel, @parcel/config-default, parcel-resolver-tspaths, html-inline)
- Creates `.parcelrc` config with path alias support
- Builds with Parcel (no source maps)
- Inlines all assets into single HTML using html-inline

### Step 4: Share Artifact with User

Finally, share the bundled HTML file in conversation with the user so they can view it as an artifact.

### Step 5: Testing/Visualizing the Artifact (Optional)

Note: This is a completely optional step. Only perform if necessary or requested.

To test/visualize the artifact, use available tools (including other Skills or built-in tools like Playwright or Puppeteer). In general, avoid testing the artifact upfront as it adds latency between the request and when the finished artifact can be seen. Test later, after presenting the artifact, if requested or if issues arise.

## Reference

- **shadcn/ui components**: https://ui.shadcn.com/docs/components and ---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
license: Complete terms in LICENSE.txt
---

# Frontend Design

Approach this as the design lead at a design studio known for giving every client a distinct visual identity that is not mistaken for anyone else's. This client has already rejected proposals that felt cliché or templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take aesthetic risk if justified.

## Ground your designs in the subject matter

If the brief does not identify what the product or subject matter is, identify it yourself before designing, and confirm with the client. You can come up with one concrete subject, the design's audience, and the design's primary job, as a proposal. If there's any information in your memory about the client's preferences or context about what they're building, use that as a hint. The subject's industry, subject matter, materials, and vernacular are where distinctive visual choices come from — a design for a toy for girls aged 8–11 will be very aesthetically different from a dashboard for financial analysts. Build with the brief's real content and subject matter throughout.

## Design principles

For web designs, the hero is the first thing viewers will see. Open with the most characteristic thing in the subject's world, in the form that is most appropriate: a headline, an image, an animation, a live demo, an interactive moment, or other treatments. Be deliberate with your choice: a big number with a small label, supporting stats, and a gradient accent is the default treatment, so only use it if that's truly the best option.

Typography carries the personality of the page. You don't need a different typeface for display or headline text and body content: use one family or two, and if two, make them clearly distinct.

Choose your typefaces deliberately, not the default families you would reach for on any other project, and set a clear type scale following the default guidance of The Elements of Typographic Style with intentional weights, widths, and spacing. When type is used as a headline or visual element, use the type treatment itself as an active part of the design, not a neutral delivery vehicle for the content.

Default to line lengths of less than 80 characters. Serif typefaces can have slightly longer line lengths; give serif body text slightly more line-height than a sans-serif.

Avoid these default typographic treatments; they are the commonest tells of a generated page:
- Accenting just a single word or phrase in a headline, like putting one word in italic/bold or a different color.
- Using all caps for labels.
- Adding unnecessary typographic labels above content.

Visual structure is information. Structural devices like outlines, borders, numbering, eyebrows, dividers, labels, etc., encode useful information about the content rather than decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence — like a stepped process or a timeline. Before adding numbered markers, check the content really is a sequence.

Use non-user-triggered motion sparingly and deliberately, only to draw attention. A single orchestrated moment — one page-load sequence or one reveal — lands better than scattered effects; fade-and-slide-up entrances on each section and hover transitions on every card are the generic default and read as AI-generated. Motion that answers a person's action (opening, expanding, confirming) is welcome when it shows what changed.

Consider written content carefully. Often a design brief may not contain real content, and it's up to you to come up with copy and placeholder content. Copy can make a design feel as templated as the design itself. See the below section on writing for more guidance.

## Process: plan, review against the brief, build, critique

For calibration, AI-generated design right now clusters around some traits:
1. a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta or warm-clay accent (often near #D97757 — Anthropic's own Claude-interaction accent, so on a user's brief it reads as a tell);
2. a near-black background with a single bright acid-green or vermilion accent;
3. a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns;
4. the SaaS-card kit: content chopped into identical rounded cards, one border-radius on everything regardless of hierarchy, the same soft grey shadow (rgba(0,0,0,.1)) under each, and gradient washes as decoration;
5. template chrome that appears whatever the subject: a tracked-out ALL-CAPS eyebrow label above every heading; meta strings joined with middle dots ('A · B · C'); labels built as 'WORD — fragment' with a spaced em dash; tinted near-black (#0B0B0B, #111) standing in for black; a monospace face for small data labels; a '→' appended to link and button text.

All traits are legitimate for some briefs, but they are defaults rather than choices, and they appear regardless of subject. Where the brief pins down a visual direction, follow it exactly — the brief's own words always win, including when it asks for one of these looks. Where it leaves an axis free, don't spend that freedom on one of these defaults. As with a hired human designer, there's often a careful balance between doing what you're good at and taking each project as a chance to experiment and learn.

Work in two passes. First, brainstorm a short design plan based on the client's design brief: create a compact token system with color, type, layout, and principles.
- Color: describe the core base palette as 4–6 named hex values.
- Type: the typefaces and their roles.
- Layout: a layout concept, using one-sentence prose descriptions and ASCII wireframes to ideate and compare. Include alignment guidance; should the content be left aligned, center aligned, justified?
- Principles: the high-level guidance for what makes this page unique.

Then review that plan against the brief before building: if any part of it reads like the generic default you would produce for any similar page (work through a similar prompt to see if you arrive somewhere similar) rather than a choice made for this specific brief — revise that part, say what you changed and why. Only after you've confirmed the relative uniqueness of your design plan should you start to write the code, following the revised plan.

When writing the code, be careful of structuring your CSS selector specificities. It's easy to generate CSS classes that cancel each other out (especially with a type-based selector like .section and an element-based selector like .cta). This can happen often with padding/margin between sections.

## Restraint and self-critique

Spend your boldness in one place. Let one element be the memorable thing, keep everything around it quiet and disciplined, and cut any decoration that does not serve the brief. Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected, visually accessible, harmonious color palettes. Critique your own work as you build, taking screenshots to review if your environment supports it — a picture is worth 1000 tokens. Consider Chanel's advice: before leaving the house, take a look in the mirror and remove one accessory. Human creatives have memory and always try to do something new, so if you have a space to quickly jot down notes about what you've tried, it can help you in future passes.

## More on writing in design

Words appear in a design for one reason: to make it easier to understand and use. They are design content, not decoration. Bring the same intentionality and minimalism to copywriting that you would bring to spacing and color. Before writing anything, ask what the design needs to say, and how it can best be said to help the person navigate the experience.

Write from the end user's perspective. Name things by what users will understand in simple language, not by how the system is built. A user manages notifications, not webhook config. Describe what something is or does in plain terms rather than selling it. Being specific and legible to new users is always better than being clever.

Use active voice as default. A CTA says exactly what happens when it is used: "Save changes," not "Submit." An action keeps the same name through the whole flow, so the button that says "Publish" produces a toast that says "Published." The vocabulary of an interface is the signposting for someone navigating the product. Cohesion and consistency are how people learn their way around.

Treat failure and emptiness as moments for direction, not mood. Explain what went wrong and how to fix it, in the interface's voice rather than a person's. Errors don't apologize, and they are never vague about what happened. An empty screen is an invitation to act.

Keep the tone conversational: plain verbs, sentence case, no filler, with tone matched to the brand and the audience. Let each written element do exactly one job. an djust forgot that singile file requirement , multi file i want best./boost /frontend-design
```
</details>

#### Prompt 21 | 2026-10-26T13:38:21Z

<details><summary><b>Large Prompt Payload (click to expand)</b></summary>

```html
there are some changes in v6 also C:\Users\hp\Downloads\OpenMic-CareerFair-Updatedin v6 , add some games suiting that theme and make it better , dont change them euse 
description: Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui). Use for complex artifacts requiring state management, routing, or shadcn/ui components - not for simple single-file HTML/JSX artifacts.
license: Complete terms in LICENSE.txt
---

# Web Artifacts Builder

To build powerful frontend claude.ai artifacts, follow these steps:
1. Initialize the frontend repo using `scripts/init-artifact.sh`
2. Develop your artifact by editing the generated code
3. Bundle all code into a single HTML file using `scripts/bundle-artifact.sh`
4. Display artifact to user
5. (Optional) Test the artifact

**Stack**: React 18 + TypeScript + Vite + Parcel (bundling) + Tailwind CSS + shadcn/ui

## Design & Style Guidelines

VERY IMPORTANT: To avoid what is often referred to as "AI slop", avoid using excessive centered layouts, purple gradients, uniform rounded corners, and Inter font.

## Quick Start

### Step 1: Initialize Project

Run the initialization script to create a new React project:
```bash
bash scripts/init-artifact.sh <project-name>
cd <project-name>
```

This creates a fully configured project with:
- ✅ React + TypeScript (via Vite)
- ✅ Tailwind CSS 3.4.1 with shadcn/ui theming system
- ✅ Path aliases (`@/`) configured
- ✅ 40+ shadcn/ui components pre-installed
- ✅ All Radix UI dependencies included
- ✅ Parcel configured for bundling (via .parcelrc)
- ✅ Node 18+ compatibility (auto-detects and pins Vite version)

### Step 2: Develop Your Artifact

To build the artifact, edit the generated files. See **Common Development Tasks** below for guidance.

### Step 3: Bundle to Single HTML File

To bundle the React app into a single HTML artifact:
```bash
bash scripts/bundle-artifact.sh
```

This creates `bundle.html` - a self-contained artifact with all JavaScript, CSS, and dependencies inlined. This file can be directly shared in Claude conversations as an artifact.

**Requirements**: Your project must have an `index.html` in the root directory.

**What the script does**:
- Installs bundling dependencies (parcel, @parcel/config-default, parcel-resolver-tspaths, html-inline)
- Creates `.parcelrc` config with path alias support
- Builds with Parcel (no source maps)
- Inlines all assets into single HTML using html-inline

### Step 4: Share Artifact with User

Finally, share the bundled HTML file in conversation with the user so they can view it as an artifact.

### Step 5: Testing/Visualizing the Artifact (Optional)

Note: This is a completely optional step. Only perform if necessary or requested.

To test/visualize the artifact, use available tools (including other Skills or built-in tools like Playwright or Puppeteer). In general, avoid testing the artifact upfront as it adds latency between the request and when the finished artifact can be seen. Test later, after presenting the artifact, if requested or if issues arise.

## Reference

- **shadcn/ui components**: https://ui.shadcn.com/docs/components and ---
name: frontend-design
description: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.
license: Complete terms in LICENSE.txt
---

# Frontend Design

Approach this as the design lead at a design studio known for giving every client a distinct visual identity that is not mistaken for anyone else's. This client has already rejected proposals that felt cliché or templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take aesthetic risk if justified.

## Ground your designs in the subject matter

If the brief does not identify what the product or subject matter is, identify it yourself before designing, and confirm with the client. You can come up with one concrete subject, the design's audience, and the design's primary job, as a proposal. If there's any information in your memory about the client's preferences or context about what they're building, use that as a hint. The subject's industry, subject matter, materials, and vernacular are where distinctive visual choices come from — a design for a toy for girls aged 8–11 will be very aesthetically different from a dashboard for financial analysts. Build with the brief's real content and subject matter throughout.

## Design principles

For web designs, the hero is the first thing viewers will see. Open with the most characteristic thing in the subject's world, in the form that is most appropriate: a headline, an image, an animation, a live demo, an interactive moment, or other treatments. Be deliberate with your choice: a big number with a small label, supporting stats, and a gradient accent is the default treatment, so only use it if that's truly the best option.

Typography carries the personality of the page. You don't need a different typeface for display or headline text and body content: use one family or two, and if two, make them clearly distinct.

Choose your typefaces deliberately, not the default families you would reach for on any other project, and set a clear type scale following the default guidance of The Elements of Typographic Style with intentional weights, widths, and spacing. When type is used as a headline or visual element, use the type treatment itself as an active part of the design, not a neutral delivery vehicle for the content.

Default to line lengths of less than 80 characters. Serif typefaces can have slightly longer line lengths; give serif body text slightly more line-height than a sans-serif.

Avoid these default typographic treatments; they are the commonest tells of a generated page:
- Accenting just a single word or phrase in a headline, like putting one word in italic/bold or a different color.
- Using all caps for labels.
- Adding unnecessary typographic labels above content.

Visual structure is information. Structural devices like outlines, borders, numbering, eyebrows, dividers, labels, etc., encode useful information about the content rather than decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence — like a stepped process or a timeline. Before adding numbered markers, check the content really is a sequence.

Use non-user-triggered motion sparingly and deliberately, only to draw attention. A single orchestrated moment — one page-load sequence or one reveal — lands better than scattered effects; fade-and-slide-up entrances on each section and hover transitions on every card are the generic default and read as AI-generated. Motion that answers a person's action (opening, expanding, confirming) is welcome when it shows what changed.

Consider written content carefully. Often a design brief may not contain real content, and it's up to you to come up with copy and placeholder content. Copy can make a design feel as templated as the design itself. See the below section on writing for more guidance.

## Process: plan, review against the brief, build, critique

For calibration, AI-generated design right now clusters around some traits:
1. a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta or warm-clay accent (often near #D97757 — Anthropic's own Claude-interaction accent, so on a user's brief it reads as a tell);
2. a near-black background with a single bright acid-green or vermilion accent;
3. a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns;
4. the SaaS-card kit: content chopped into identical rounded cards, one border-radius on everything regardless of hierarchy, the same soft grey shadow (rgba(0,0,0,.1)) under each, and gradient washes as decoration;
5. template chrome that appears whatever the subject: a tracked-out ALL-CAPS eyebrow label above every heading; meta strings joined with middle dots ('A · B · C'); labels built as 'WORD — fragment' with a spaced em dash; tinted near-black (#0B0B0B, #111) standing in for black; a monospace face for small data labels; a '→' appended to link and button text.

All traits are legitimate for some briefs, but they are defaults rather than choices, and they appear regardless of subject. Where the brief pins down a visual direction, follow it exactly — the brief's own words always win, including when it asks for one of these looks. Where it leaves an axis free, don't spend that freedom on one of these defaults. As with a hired human designer, there's often a careful balance between doing what you're good at and taking each project as a chance to experiment and learn.

Work in two passes. First, brainstorm a short design plan based on the client's design brief: create a compact token system with color, type, layout, and principles.
- Color: describe the core base palette as 4–6 named hex values.
- Type: the typefaces and their roles.
- Layout: a layout concept, using one-sentence prose descriptions and ASCII wireframes to ideate and compare. Include alignment guidance; should the content be left aligned, center aligned, justified?
- Principles: the high-level guidance for what makes this page unique.

Then review that plan against the brief before building: if any part of it reads like the generic default you would produce for any similar page (work through a similar prompt to see if you arrive somewhere similar) rather than a choice made for this specific brief — revise that part, say what you changed and why. Only after you've confirmed the relative uniqueness of your design plan should you start to write the code, following the revised plan.

When writing the code, be careful of structuring your CSS selector specificities. It's easy to generate CSS classes that cancel each other out (especially with a type-based selector like .section and an element-based selector like .cta). This can happen often with padding/margin between sections.

## Restraint and self-critique

Spend your boldness in one place. Let one element be the memorable thing, keep everything around it quiet and disciplined, and cut any decoration that does not serve the brief. Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected, visually accessible, harmonious color palettes. Critique your own work as you build, taking screenshots to review if your environment supports it — a picture is worth 1000 tokens. Consider Chanel's advice: before leaving the house, take a look in the mirror and remove one accessory. Human creatives have memory and always try to do something new, so if you have a space to quickly jot down notes about what you've tried, it can help you in future passes.

## More on writing in design

Words appear in a design for one reason: to make it easier to understand and use. They are design content, not decoration. Bring the same intentionality and minimalism to copywriting that you would bring to spacing and color. Before writing anything, ask what the design needs to say, and how it can best be said to help the person navigate the experience.

Write from the end user's perspective. Name things by what users will understand in simple language, not by how the system is built. A user manages notifications, not webhook config. Describe what something is or does in plain terms rather than selling it. Being specific and legible to new users is always better than being clever.

Use active voice as default. A CTA says exactly what happens when it is used: "Save changes," not "Submit." An action keeps the same name through the whole flow, so the button that says "Publish" produces a toast that says "Published." The vocabulary of an interface is the signposting for someone navigating the product. Cohesion and consistency are how people learn their way around.

Treat failure and emptiness as moments for direction, not mood. Explain what went wrong and how to fix it, in the interface's voice rather than a person's. Errors don't apologize, and they are never vague about what happened. An empty screen is an invitation to act.

Keep the tone conversational: plain verbs, sentence case, no filler, with tone matched to the brand and the audience. Let each written element do exactly one job. an djust forgot that singile file requirement , multi file i want best./boost /frontend-design
```
</details>


---

### Conversation C: Upload Project To GitHub

- **Conversation ID:** `22729e22-a6c3-4213-aa8f-a7bf58be2a4a` ([Open in Antigravity](conversation://22729e22-a6c3-4213-aa8f-a7bf58be2a4a))

#### Prompt 1 | 2026-10-26T16:49:37Z

```text
upoad C:\Users\hp\Downloads\OpenMic-CareerFair-v8(2)\openmic-v8 to https://github.com/bhavyakumar-dev/openmic
```


---

### Conversation D: Add GitHub Repository As V6 & Staging

- **Conversation ID:** `ab81d7af-9cfd-44c9-be0b-d5e3cd2bed73` ([Open in Antigravity](conversation://ab81d7af-9cfd-44c9-be0b-d5e3cd2bed73))

#### Prompt 1 | 2026-10-26T13:30:19Z

```text
add https://github.com/bhavyakumar-dev/English-Career-Fair-Om/ as v6
```

#### Prompt 2 | 2026-10-26T13:53:00Z

```text
2026-10-26T13:51:44.871Z	Initializing build environment...
2026-10-26T13:51:46.773Z	Success: Finished initializing build environment
2026-10-26T13:51:47.314Z	Cloning repository...
2026-10-26T13:51:55.069Z	Restoring from dependencies cache
2026-10-26T13:51:55.071Z	Restoring from build output cache
2026-10-26T13:51:55.075Z	Detected the following tools from environment: npm@10.9.2, nodejs@24.22.1
2026-10-26T13:52:02.205Z	Success: Dependencies restored from build cache.
2026-10-26T13:52:02.207Z	Installing project dependencies: npm clean-install --progress=false
2026-10-26T13:52:13.616Z	npm warn deprecated elevenlabs@1.59.0: This package has moved to @elevenlabs/elevenlabs-js
2026-10-26T13:52:40.474Z	
2026-10-26T13:52:40.474Z	added 64 packages in 32s
2026-10-26T13:52:40.475Z	
2026-10-26T13:52:40.477Z	20 packages are looking for funding
2026-10-26T13:52:40.477Z	  run `npm fund` for details
2026-10-26T13:52:40.945Z	Executing user deploy command: npx wrangler deploy
2026-10-26T13:52:43.857Z	
2026-10-26T13:52:43.857Z	 ⛅️ wrangler 4.152.0
2026-10-26T13:52:43.857Z	────────────────────
2026-10-26T13:52:44.097Z	▲ [WARNING] Failed to match Worker name. Your config file is using the Worker name "career-fair", but the CI system expected "careerswithenglish". Overriding using the CI provided Worker name. Workers Builds connected builds will attempt to open a pull request to resolve this config name mismatch.
2026-10-26T13:52:44.097Z	
2026-10-26T13:52:44.098Z	
2026-10-26T13:52:45.253Z	🌀 Building list of assets...
2026-10-26T13:52:45.256Z	✨ Read 36 files from the assets directory /opt/buildhome/repo/public
2026-10-26T13:52:45.304Z	🌀 Starting asset upload...
2026-10-26T13:52:46.584Z	No updated asset files to upload. Proceeding with deployment...
2026-10-26T13:52:46.591Z	Total Upload: 65.92 KiB / gzip: 18.42 KiB
2026-10-26T13:52:48.353Z	Your Worker has access to the following bindings:
2026-10-26T13:52:48.353Z	Binding            Resource      
2026-10-26T13:52:48.353Z	env.AI             AI            
2026-10-26T13:52:48.353Z	env.ASSETS         Assets        
2026-10-26T13:52:48.353Z	
2026-10-26T13:52:48.353Z	Uploaded careerswithenglish (3.35 sec)
2026-10-26T13:52:48.737Z	Deployed careerswithenglish triggers (0.39 sec)
2026-10-26T13:52:48.737Z	  https://careerswithenglish.bhavyakumar.workers.dev
2026-10-26T13:52:48.737Z	Current Version ID: 92ecee0d-b6c2-4572-94d7-ed6f67981c4a
2026-10-26T13:52:48.740Z	
2026-10-26T13:52:48.741Z	Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
2026-10-26T13:52:48.837Z	Success: Deploy command completed
2026-10-26T13:52:48.841Z	Skipping build output cache as it's not supported for your project
2026-10-26T13:52:48.934Z	✨ Success! Build completed.
```

#### Prompt 3 | 2026-10-26T14:01:29Z

```text
check and tell me why most button  an features in v3 not working. jsut tell
```

#### Prompt 4 | 2026-10-26T14:24:39Z

```text
ok
```

#### Prompt 5 | 2026-10-26T14:25:56Z

```text
done in C:\Users\hp\Downloads\OpenMic-CareerFair-Fixed
```

#### Prompt 6 | 2026-10-26T14:26:15Z

```text
done in C:\Users\hp\Downloads\OpenMic-CareerFair-Fixed add this as v7 and push
```

#### Prompt 7 | 2026-10-26T14:37:21Z

```text
where and how to upload api keys and is it using cloudflare workers ai , show me and anaylyse readme.md
```

#### Prompt 8 | 2026-10-26T14:42:11Z

```text
openssl not recognized
```

#### Prompt 9 | 2026-10-26T14:53:50Z

```text
runtime Variables and Secrets or build Variables and Secrets
```

#### Prompt 10 | 2026-10-26T14:55:19Z

```text
push v7
```

#### Prompt 11 | 2026-10-26T14:56:23Z

```text
Initializing since the last 20 minutes, is it okay?
```

#### Prompt 12 | 2026-10-26T14:58:21Z

```text
Again, cross-site scripting alert.
```

#### Prompt 13 | 2026-10-26T14:58:28Z

```text
Again, it crossed one minute initializing.
```

#### Prompt 14 | 2026-10-26T15:01:53Z

```text
Crossed four minutes and on initializing and no alert is there. It was a transcription error.
```

#### Prompt 15 | 2026-10-26T15:07:44Z

```text
still
```

#### Prompt 16 | 2026-10-26T15:11:12Z

```text
npm error code EBUSY
npm error syscall copyfile
npm error path C:\Users\hp\AppData\Local\npm-cache\_npx\32026684e21afda6\node_modules\@cloudflare\workerd-windows-64\bin\workerd.exe
npm error dest C:\Users\hp\AppData\Local\npm-cache\_npx\32026684e21afda6\node_modules\@cloudflare\.workerd-windows-64-698Vgirq\bin\workerd.exe
npm error errno -4082
npm error EBUSY: resource busy or locked, copyfile 'C:\Users\hp\AppData\Local\npm-cache\_npx\32026684e21afda6\node_modules\@cloudflare\workerd-windows-64\bin\workerd.exe' -> 'C:\Users\hp\AppData\Local\npm-cache\_npx\32026684e21afda6\node_modules\@cloudflare\.workerd-windows-64-698Vgirq\bin\workerd.exe'

npm error A complete log of this run can be found in: C:\Users\hp\AppData\Local\npm-cache\_logs\2026-10-26T15_10_48_652Z-debug-0.log
```

#### Prompt 17 | 2026-10-26T15:17:49Z

```text
A delayed flight means passengers are anxious and your team needs a clear update.

You are leading a crew briefing. Give a calm update, explain the immediate plan and invite essential questions.
Your response
Focus: clarity · empathy · next steps
Review my response ↗
Communication review

Hello there! It is great to have you stepping up to lead the crew briefing. Handling a delayed flight and anxious passengers is a big responsibility, so let's practice how to make your update clear and reassuring. Here is some feedback on your starting greeting: ### **Strengths:** 1. **Friendly tone:** Saying "hello" is a welcoming and polite way to get your team's attention before you start speaking. 2. **Readiness:** You are present and ready to take on the challenge of leading the briefing! --- ### **Improvement Suggestions:** 1. **Set the scene right away:** Instead of just saying "hello," jump straight into your leadership role by addressing the crew directly (for example: *"Good morning, team. Let's gather for a quick update on our delayed flight."*). 2. **State the purpose:** Give a quick hint about what the meeting is about so the crew knows you are focused on the passengers' needs. --- ### **Next Steps:** Let's try the opening line again! Imagine your crew is standing in front of you, waiting for news about the delay. How would you greet them and get straight to the point? Try writing your next response starting with something like: *"Alright team, I know everyone is feeling the pressure..."* You've got this!

Provider: gemini why s there aserisks etc in  v7
```

#### Prompt 18 | 2026-10-26T15:29:46Z

```text
exchange qr artwork with Feedback section which is like the format and doesnt feel odd , like follow theme add some games at last , games in v6 add , changede it to normal english , add WoRDLE , word with meaning matching etc. identify correct sentence with doff, words for evetruone etaderboartd for that aldso , add a support option and save feedback in excel sheet.in the newsroom , n the final video add some headline etc... and analyze that audio and posture body lang , video also and save it to server compulsory and change that provacy one at last and ask persion to put into leaderboadrd EMMA watson img she isnt visible , make sure leaderboard is updated nicely.use elevenlabs for audio if u can. THE EDITOR'S DESK also leaderboard , and make a formula that comnbines all scores for final leadeboard AI transcription is not available yet: No enabled audio-transcription provider is available under the current routing mode. Use browser speech recognition or type a transcript. The uploaded audio was not saved.. Check the deployed speech endpoint and provider settings, or try recording on a supported browser. use ai chat that can ask qs and make more personalised career college plan. make it  v8
```

#### Prompt 19 | 2026-10-26T15:30:02Z

```text
exchange qr artwork with Feedback section which is like the format and doesnt feel odd , like follow theme add some games at last , games in v6 add , changede it to normal english , add WoRDLE , word with meaning matching etc. identify correct sentence with doff, words for evetruone etaderboartd for that aldso , add a support option and save feedback in excel sheet.in the newsroom , n the final video add some headline etc... and analyze that audio and posture body lang , video also and save it to server compulsory and change that provacy one at last and ask persion to put into leaderboadrd EMMA watson img she isnt visible , make sure leaderboard is updated nicely.use elevenlabs for audio if u can. THE EDITOR'S DESK also leaderboard , and make a formula that comnbines all scores for final leadeboard AI transcription is not available yet: No enabled audio-transcription provider is available under the current routing mode. Use browser speech recognition or type a transcript. The uploaded audio was not saved.. Check the deployed speech endpoint and provider settings, or try recording on a supported browser. use ai chat that can ask qs and make more personalised career college plan. copy full v7 bmake it  v8 and do changes
```

#### Prompt 20 | 2026-10-26T15:46:31Z

```text
why is this so shit
```

#### Prompt 21 | 2026-10-26T16:28:49Z

```text
C:\Users\hp\Downloads\OpenMic-CareerFair-v8(1) add this v8 set it up acc. readme fiole and tell me if any action req. on my side
```

#### Prompt 22 | 2026-10-26T16:32:44Z

```text
dobne
```

#### Prompt 23 | 2026-10-26T16:49:22Z

```text
its asking creditcard
```

#### Prompt 24 | 2026-10-26T16:52:13Z

```text
how to store the assets but?
```

#### Prompt 25 | 2026-10-26T16:54:56Z

```text
can u do like i run admin panel and videos are automatically ndownlaoded pon my running laptop?
```

#### Prompt 26 | 2026-10-26T17:15:14Z

```text
wats use of ELEVENLABS_API_KEY is it enough 10k tokens fr 400 people? and yeah in classes add (class 8 and below) option also I can keep helping, but the live AI service is not available right now (The operation timed out.). To personalise the next step, tell me: what subjects do you enjoy, what kind of work sounds exciting, and do you prefer practical projects or academic study? When the AI provider is configured, this chat can build a tailored comparison despit it working in v7 and cant u do like txt is displayed as it is comming so it feels like its typing , otherwise wait too long.in v8 anchors seat put same code of v7 , join on board nt wroking , two speaker on one device , no audio option , add audio option in  argument builder and make sure that chooseing bx ui matches , the ui for live shared room and other is not proper , topic is down not good.in wordle , make it all row column one after other like actual wordle , in interview one , add option to view livw interview being fed into websote from obs studio running on one laptop. /grill-me put orange screen at last see in 3rd img how white box is making ui bad ,  and add ai summaried feedback and testimonials when approved by admin page.
```

#### Prompt 27 | 2026-10-26T17:17:08Z

```text
wats use of ELEVENLABS_API_KEY is it enough 10k tokens fr 400 people? and yeah in classes add (class 8 and below) option also I can keep helping, but the live AI service is not available right now (The operation timed out.). To personalise the next step, tell me: what subjects do you enjoy, what kind of work sounds exciting, and do you prefer practical projects or academic study? When the AI provider is configured, this chat can build a tailored comparison despit it working in v7 and cant u do like txt is displayed as it is comming so it feels like its typing , otherwise wait too long.in v8 anchors seat put same code of v7 , join on board nt wroking , two speaker on one device , no audio option , add audio option in  argument builder and make sure that chooseing bx ui matches , the ui for live shared room and other is not proper , topic is down not good.in wordle , make it all row column one after other like actual wordle , in interview one , add option to view livw interview being fed into websote from obs studio running on one laptop. /grill-me put orange screen at last see in 3rd img how white box is making ui bad ,  and add ai summaried feedback and testimonials when approved by admin page.makke this 9 and make another versionw ith improvements 10
```

#### Prompt 28 | 2026-10-26T17:17:35Z

```text
wats use of ELEVENLABS_API_KEY is it enough 10k tokens fr 400 people? and yeah in classes add (class 8 and below) option also I can keep helping, but the live AI service is not available right now (The operation timed out.). To personalise the next step, tell me: what subjects do you enjoy, what kind of work sounds exciting, and do you prefer practical projects or academic study? When the AI provider is configured, this chat can build a tailored comparison despit it working in v7 and cant u do like txt is displayed as it is comming so it feels like its typing , otherwise wait too long.in v8 anchors seat put same code of v7 , join on board nt wroking , two speaker on one device , no audio option , add audio option in  argument builder and make sure that chooseing bx ui matches , the ui for live shared room and other is not proper , topic is down not good.in wordle , make it all row column one after other like actual wordle , in interview one , add option to view livw interview being fed into websote from obs studio running on one laptop. /grill-me put orange screen at last see in 3rd img how white box is making ui bad ,  and add ai summaried feedback and testimonials when approved by admin page.makke this 9 and make another versionw ith improvements 10 dont change or delete other v files
```

#### Prompt 29 | 2026-10-26T17:24:02Z

```text
add telegram and chunk vid files and other files to stor in a diff. repo on github in my acc.in \v12
```

#### Prompt 30 | 2026-10-26T17:50:57Z

```text
in everyne , first use gemini api then workers api or whichever is best suited to serve many people in admin portal add option to toggable each provier on or off. also in admin option to ban ip or re,jmove from leaderboard etc.........add option in admin panel to change to Cartesia SonicOpenAI TTSDeepgram AuraKokoro-82M then elevenlabs
```

#### Prompt 31 | 2026-10-26T18:11:10Z

```text
what all to be configured y me? how to see ip of student found using unapropriate language or using ai deliberatley many times? in admin remoe to enter credentials since i cnat configure in wvery browsrr.
```

#### Prompt 32 | 2026-10-26T18:24:28Z

```text
how to get
```

#### Prompt 33 | 2026-10-26T18:24:45Z

```text
how to ge (GITHUB_VAULT_TOKEN, GITHUB_VAULT_REPO). where to set elevn lab api ket
```

#### Prompt 34 | 2026-10-26T18:33:00Z

```text
what ot put for github secrets
```

#### Prompt 35 | 2026-10-26T18:44:30Z

```text
is v9 added?
```

#### Prompt 36 | 2026-10-26T18:45:24Z

```text
on v8 add v9 and further option
```

#### Prompt 37 | 2026-10-26T18:49:57Z

```text
in v9 images are not properly oriented , video gneration overlay not working news reporter. make chanes in v9 onmly.in leaderboard class dropdown , bgcolor of row and color of text is same.leaderoard test ,use /dev-browser to test all websites completely , careerswithenglish.bhavyakumar.workers.dev,careerfair.bhavyakumar.workers.dev,rai.bhavyakumar.workers.dev each and every thing test....... and push test video in labelled chunks to a git repo
```

#### Prompt 38 | 2026-10-26T18:51:15Z

```text
in v9 images are not properly oriented , video gneration overlay not working news reporter. make chanes in v9 onmly.in leaderboard class dropdown , bgcolor of row and color of text is same.leaderoard test ,use /dev-browser to test all websites completely , careerswithenglish.bhavyakumar.workers.dev,careerfair.bhavyakumar.workers.dev,rai.bhavyakumar.workers.dev each and every thing test....... and push test video in labelled chunks to a git repo make it v14 skip 13
```


---
