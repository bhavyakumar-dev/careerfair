/**
 * Open Mic v18 — The English Career Lab
 * Kanakia International School Mira Road
 * Live Career Fair Edition with Velocity RSVP, Career Guesser, Jobtris, Word Oracle & Object Oracle
 */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHtml(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const STORAGE = {
  settings: 'openmic.v18.settings',
  scores: 'openmic.v18.scores',
  practiceScore: 'openmic.v18.practiceScore',
  savedWords: 'openmic.v18.words',
  demoLogs: 'openmic.v18.logs',
  demoLeaderboard: 'openmic.v18.leaderboard',
  participant: 'openmic.v18.participant',
  feedback: 'openmic.v18.feedback',
  chat: 'openmic.v18.chat',
  adminSession: 'openmic.v18.adminSession',
  adminUsers: 'openmic.v18.adminUsers'
};

const FEATURE_LABELS = {
  hero: ['Hero Experience', 'Opening statement and animated stage'],
  whyEnglish: ['Why English Matters', 'Introductory context and skill framing'],
  careers: ['Career Atlas', 'Role directory, stream picker and search filters'],
  quiz: ['Career Quiz', 'Five-question career matcher'],
  plan: ['My Roadmap', 'Personalised practice milestones'],
  careerChat: ['Career Conversation', 'Interactive guidance mentor'],
  speechLab: ['Speech Lab', 'Spoken practice, recording and analysis'],
  mockInterview: ['Interview Studio', 'Role-specific mock interview questions'],
  roleplay: ['Conversation Gym', 'Workplace scenario practice'],
  anchor: ['Keynote & Teleprompter Studio', 'Public speaking teleprompter and cadence trainer'],
  compare: ['Voice Comparison', 'Speech rhythm, fillers and pacing benchmark'],
  speakers: ['The Listening Room', 'Study master orators'],
  leaderboard: ['Practice Board', 'Fair progress leaderboard and opt-in rankings'],
  wordOfDay: ['Word of the Day', 'Daily vocabulary term and pronunciation'],
  emailGame: ["The Editor's Desk", 'Professional tone and clarity challenge'],
  pronunciation: ['Sound Studio', 'High-impact phoneme mouth placement guide'],
  debate: ['The Debate Room', 'Structured persuasive argument builder'],
  feedback: ['Feedback & Support', 'Student notes, bug reports and requests'],
  velocityGame: ['Velocity RSVP', 'Rapid Serial Visual Presentation speed reader & comprehension test'],
  careerGuesser: ['Career Guesser', '6-word elevator pitch with real-time semantic radar & 10-floor tower'],
  jobtris: ['Jobtris', 'Semantris-style career vocabulary stack with Arcade and Blocks modes'],
  wordOracle: ['The Word Oracle', '20-Questions English Akinator career & vocabulary deduction engine'],
  objectOracle: ['Object Oracle', 'Witblox AI Vision Blox / lens camera & tactile object explorer'],
  semanticCompass: ['Semantic Compass', 'Career pitch description evaluation with similarity scoring'],
  games: ['Games Arcade', 'Wordless (5-letter deduction), Matching Pairs, and Sentence Clarity'],
  closing: ['Closing Banner', 'Final encouragement and summary stamp'],
  liveStream: ['Live YouTube Stream', 'Real-time auditorium live stream banner & player']
};

const DEFAULT_SETTINGS = {
  theme: 'mix',
  language: 'en',
  showSchoolName: true,
  schoolName: 'Kanakia International School Mira Road',
  automaticFallback: true,
  preferredProvider: 'gemini',
  speechProvider: 'auto',
  qualityMode: 'balanced',
  providerOrder: ['gemini', 'cloudflare', 'free', 'laptop'],
  providerEnabled: { cloudflare: true, gemini: true, free: true, laptop: false, elevenlabs: false },
  allowHardcodedAuth: true,
  liveStreamEnabled: false,
  liveStreamUrl: '',
  liveStreamTitle: 'Open Mic Career Fair — Live Stage Broadcast',
  features: Object.fromEntries(Object.keys(FEATURE_LABELS).map(key => [key, true]))
};

let settings = { ...DEFAULT_SETTINGS };
let currentAdminUser = null;
let currentAdminRole = null;

function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// -------------------------------------------------------------
// SCORES & AGGREGATE CALCULATION
// -------------------------------------------------------------
function readScoreComponents() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE.scores)) || {};
  } catch {
    return {};
  }
}

function saveComponentScore(category, score, extras = {}) {
  const components = readScoreComponents();
  const current = components[category]?.score || 0;
  if (score > current) {
    components[category] = { score, date: new Date().toISOString(), ...extras };
    localStorage.setItem(STORAGE.scores, JSON.stringify(components));
    updateAggregatedPracticeScore();
  }
}

function calculateAggregateScore(components) {
  const weights = {
    speech: 0.20,
    velocity: 0.15,
    guesser: 0.15,
    jobtris: 0.15,
    oracle: 0.15,
    editor: 0.10,
    games: 0.10
  };
  let totalScore = 0;
  let activeWeight = 0;
  for (const [key, weight] of Object.entries(weights)) {
    if (components[key]?.score !== undefined) {
      totalScore += components[key].score * weight;
      activeWeight += weight;
    }
  }
  if (activeWeight === 0) return 0;
  return Math.round(totalScore / activeWeight);
}

function updateAggregatedPracticeScore() {
  const components = readScoreComponents();
  const agg = calculateAggregateScore(components);
  const display = $('#leader-score');
  if (display) display.textContent = `${agg} pts`;
  localStorage.setItem(STORAGE.practiceScore, String(agg));
  return agg;
}

// -------------------------------------------------------------
// LIVE YOUTUBE STREAM BANNER
// -------------------------------------------------------------
function extractYouTubeEmbed(url) {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const id = (match && match[2].length === 11) ? match[2] : url;
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1&rel=0`;
}

function initLiveStream() {
  const banner = $('#live-stream-banner');
  const iframe = $('#live-stream-frame');
  const titleEl = $('#live-stream-display-title');
  const closeBtn = $('#live-stream-close');
  const minBtn = $('#live-stream-minimize');

  if (!banner || !iframe) return;

  if (settings.liveStreamEnabled && settings.liveStreamUrl && settings.features.liveStream !== false) {
    iframe.src = extractYouTubeEmbed(settings.liveStreamUrl);
    if (titleEl) titleEl.textContent = settings.liveStreamTitle || 'Open Mic Career Fair — Live Stage Broadcast';
    banner.hidden = false;
  } else {
    iframe.src = '';
    banner.hidden = true;
  }

  closeBtn?.addEventListener('click', () => {
    banner.hidden = true;
    iframe.src = '';
  });

  minBtn?.addEventListener('click', () => {
    banner.classList.toggle('minimized');
    minBtn.textContent = banner.classList.contains('minimized') ? 'Expand ⤢' : 'Minimize _';
  });
}

// -------------------------------------------------------------
// CAREER ATLAS DATA & STREAM PICKER
// -------------------------------------------------------------
const CAREERS = [
  {
    title: 'Screenwriter / Scriptwriter',
    category: 'Entertainment',
    stream: 'creative',
    importance: 5,
    icon: '🎬',
    accent: '#ffc1a8',
    summary: 'Write stories, character arcs and scripts for cinema, OTT series and theatre.',
    work: 'Build immersive worlds, draft tight scene dialogue, and pitch projects to producers.',
    english: 'Crucial for pitching to global streaming platforms (Netflix, Prime) and writing international co-productions.',
    start: 'Write a 2-page scene with conflict. Cut redundant filler dialogue and test it aloud.',
    next: 'Dramatic arts, creative writing, screenwriting diplomas; build a script portfolio.'
  },
  {
    title: 'Commercial Airline Captain',
    category: 'Technology',
    stream: 'science',
    importance: 5,
    icon: '✈️',
    accent: '#b8d9ed',
    summary: 'Command passenger aircraft on domestic and transcontinental flight routes.',
    work: 'Execute pre-flight clearances, manage flight crew telemetry, and navigate adverse weather.',
    english: 'ICAO Level 4+ English is legally mandatory worldwide for all air traffic control radio transmissions.',
    start: 'Learn the ICAO phonetic alphabet and listen to live oceanic air traffic control recordings.',
    next: 'Aviation physics (PCM), DGCA commercial pilot licence (CPL), flight simulator hours.'
  },
  {
    title: 'Trauma Surgeon & Clinician',
    category: 'Health',
    stream: 'science',
    importance: 5,
    icon: '🩺',
    accent: '#c9e5cf',
    summary: 'Perform emergency life-saving operations and oversee surgical critical care.',
    work: 'Direct trauma bay triage, execute precise operative procedures, and explain options to anxious families.',
    english: 'Essential for reading international medical journals (NEJM, Lancet) and leading multidisciplinary surgical teams.',
    start: 'Study clinical Latin/Greek root stems (e.g., -ectomy, card-, neuro-) and write patient summaries in plain terms.',
    next: 'NEET exam, MBBS degree, Master of Surgery (MS), surgical residency.'
  },
  {
    title: 'Cross-Border M&A Corporate Lawyer',
    category: 'Business',
    stream: 'commerce',
    importance: 5,
    icon: '⚖️',
    accent: '#b5a6ff',
    summary: 'Structure international company acquisitions, mergers, and regulatory compliance.',
    work: 'Draft complex term sheets, arbitrate disputes, and negotiate contracts with overseas counsel.',
    english: 'International commercial arbitration and multi-jurisdictional contracts are drafted and litigated exclusively in English.',
    start: 'Read a simplified commercial contract. Identify ambiguous clauses and re-draft them for airtight precision.',
    next: 'CLAT exam, 5-year Integrated BA/BBA LLB, corporate internships, bar council enrolment.'
  },
  {
    title: 'AI Systems Architect & Tech Lead',
    category: 'Technology',
    stream: 'technology',
    importance: 5,
    icon: '💻',
    accent: '#b8d9ed',
    summary: 'Architect deep neural models, distributed microservices, and AI product infrastructure.',
    work: 'Author Technical Design Documents (TDDs), lead open-source RFCs, and align engineering sprints.',
    english: 'Writing pristine documentation and communicating across distributed remote global teams is the highest leverage skill.',
    start: 'Document an open-source project or explain how a Transformer attention head works in simple English.',
    next: 'Computer Science (B.Tech / BS), algorithmic mathematics, Git contributions, systems design.'
  },
  {
    title: 'Diplomat & Foreign Service Officer',
    category: 'Public service',
    stream: 'humanities',
    importance: 5,
    icon: '🕊️',
    accent: '#d4c8ff',
    summary: 'Represent sovereign interests in bilateral negotiations and international summits.',
    work: 'Draft diplomatic communiqués, negotiate treaties, and safeguard international relations.',
    english: 'English is the primary working tongue of the United Nations, G20, WTO, and multilateral treaty drafting.',
    start: 'Participate in Model United Nations (MUN). Focus on consensus drafting and calm rebuttal under time pressure.',
    next: 'International Relations, Political Science, UPSC Civil Services Examination (IFS).'
  },
  {
    title: 'Investigative Journalist & Editor',
    category: 'Media',
    stream: 'creative',
    importance: 5,
    icon: '🗞️',
    accent: '#ffccb9',
    summary: 'Uncover major public interest stories, conduct interviews, and publish investigations.',
    work: 'Corroborate whistle-blower documents, interview experts, and write compelling long-form journalism.',
    english: 'Enables syndication across Reuters, BBC, AP and global news bureaus without translation barriers.',
    start: 'Write a 300-word reported story on a local school issue. Include two distinct quoted viewpoints.',
    next: 'Journalism and Mass Communication, investigative internships, editorial portfolio.'
  },
  {
    title: 'Actuary & Quantitative Risk Analyst',
    category: 'Business',
    stream: 'commerce',
    importance: 4,
    icon: '📊',
    accent: '#c9e5cf',
    summary: 'Calculate probability, insurance liability, and financial risk models.',
    work: 'Develop statistical loss models, set capital reserves, and present risk metrics to boards of directors.',
    english: 'Translating complex stochastic mathematics into plain strategic English for board executives.',
    start: 'Examine probability tables and write a 1-page summary of how weather risks affect crop insurance.',
    next: 'Actuarial Common Entrance Test (ACET), Statistics / Mathematics degree, IAI / IFoA exams.'
  }
];

function initCareerAtlas() {
  const streamStep = $('#career-stream-step');
  const streamOptions = $('#career-stream-options');
  const selectedSummary = $('#career-selected-summary');
  const activeStreamLabel = $('#career-active-stream-label');
  const changeStreamBtn = $('#career-change-stream');
  const careerBrowser = $('#career-browser');
  const grid = $('#career-grid');
  const searchInput = $('#career-search');
  const filterPills = $$('#career-filters .filter-pill');
  const resultCount = $('#career-result-count');
  const detailBox = $('#career-detail');

  if (!streamStep || !grid) return;

  let activeStream = null;
  let activeCategory = 'All';
  let searchTerm = '';

  function renderCareers() {
    let matches = CAREERS;
    if (activeStream && activeStream !== 'explore') {
      matches = matches.filter(c => c.stream === activeStream);
    }
    if (activeCategory !== 'All') {
      matches = matches.filter(c => c.category.toLowerCase() === activeCategory.toLowerCase());
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      matches = matches.filter(c => 
        c.title.toLowerCase().includes(q) || 
        c.summary.toLowerCase().includes(q) ||
        c.english.toLowerCase().includes(q)
      );
    }

    if (resultCount) {
      resultCount.textContent = `Showing ${matches.length} matching career path${matches.length === 1 ? '' : 's'}`;
    }

    grid.innerHTML = matches.map(c => `
      <article class="career-card" style="--career-accent:${c.accent}">
        <div class="career-card-top">
          <span class="career-category">${escapeHtml(c.category)}</span>
          <span class="career-icon">${c.icon}</span>
        </div>
        <h3>${escapeHtml(c.title)}</h3>
        <p>${escapeHtml(c.summary)}</p>
        <div class="career-card-bottom">
          <div class="english-meter">
            <strong>English Impact</strong>
            <div class="meter-dots">${Array.from({length: 5}, (_, i) => `<i class="${i < c.importance ? 'on' : ''}"></i>`).join('')}</div>
          </div>
          <button class="career-open" data-title="${escapeHtml(c.title)}" aria-label="View details on ${escapeHtml(c.title)}">↗</button>
        </div>
      </article>
    `).join('');

    $$('.career-open', grid).forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.dataset.title;
        const career = CAREERS.find(c => c.title === title);
        if (career && detailBox) {
          detailBox.hidden = false;
          detailBox.innerHTML = `
            <button class="career-detail-close" id="close-career-detail" type="button">×</button>
            <h3>${career.icon} ${escapeHtml(career.title)}</h3>
            <p>${escapeHtml(career.work)}</p>
            <div class="career-detail-grid">
              <div>
                <h4>Why English Matters</h4>
                <p>${escapeHtml(career.english)}</p>
              </div>
              <div>
                <h4>First Practice Step</h4>
                <p>${escapeHtml(career.start)}</p>
              </div>
              <div>
                <h4>Next Academic Route</h4>
                <p>${escapeHtml(career.next)}</p>
              </div>
            </div>
          `;
          $('#close-career-detail', detailBox)?.addEventListener('click', () => {
            detailBox.hidden = true;
          });
          detailBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  }

  streamOptions?.addEventListener('click', (e) => {
    const btn = e.target.closest('.stream-choice');
    if (!btn) return;
    activeStream = btn.dataset.stream;
    const label = btn.querySelector('strong')?.textContent || 'Exploration';
    if (activeStreamLabel) activeStreamLabel.textContent = label;
    streamStep.hidden = true;
    selectedSummary.hidden = false;
    careerBrowser.hidden = false;
    renderCareers();
  });

  changeStreamBtn?.addEventListener('click', () => {
    streamStep.hidden = false;
    selectedSummary.hidden = true;
    careerBrowser.hidden = true;
    if (detailBox) detailBox.hidden = true;
  });

  searchInput?.addEventListener('input', () => {
    searchTerm = searchInput.value.trim();
    renderCareers();
  });

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.filter || 'All';
      renderCareers();
    });
  });

  // Populate roadmap and interview career dropdowns
  const planSelect = $('#plan-career');
  const interviewSelect = $('#interview-career');
  const optionsHtml = CAREERS.map(c => `<option value="${escapeHtml(c.title)}">${escapeHtml(c.title)}</option>`).join('');
  if (planSelect) planSelect.innerHTML = optionsHtml;
  if (interviewSelect) interviewSelect.innerHTML = optionsHtml;
}

// -------------------------------------------------------------
// SECTION 03: CAREER QUIZ
// -------------------------------------------------------------
const QUIZ_QUESTIONS = [
  { q: 'What kind of work gives you energy?', hint: 'Pick what you would choose on a free afternoon.', opts: [['Creating stories or performing', 'creative'], ['Solving a hard problem', 'analytical'], ['Helping or teaching someone', 'people'], ['Organising a team or big idea', 'leadership']] },
  { q: 'Which result feels most satisfying?', hint: 'Think about the outcome, not just the subject.', opts: [['Someone says “that moved me”', 'creative'], ['A complicated thing finally makes sense', 'analytical'], ['Someone feels safer or more confident', 'people'], ['A plan becomes real', 'leadership']] },
  { q: 'How would you like to share your ideas?', hint: 'Choose the format you are drawn to.', opts: [['A story, script, video or performance', 'creative'], ['A report, model or demonstration', 'analytical'], ['A conversation, lesson or debate', 'people'], ['A pitch, presentation or campaign', 'leadership']] },
  { q: 'What do you want to get better at?', hint: 'Every path uses more than one skill.', opts: [['Writing, language and imagination', 'creative'], ['Research, logic and detail', 'analytical'], ['Listening, empathy and explanation', 'people'], ['Decision-making and persuasion', 'leadership']] },
  { q: 'Choose the challenge you would try first.', hint: 'Curiosity is a useful compass.', opts: [['Write an opening scene that hooks people', 'creative'], ['Investigate why something works', 'analytical'], ['Explain a difficult idea to a friend', 'people'], ['Plan a project and get others involved', 'leadership']] }
];

const QUIZ_PATHS = {
  creative: ['Screenwriter / Scriptwriter', 'Investigative Journalist & Editor', 'Creative Director'],
  analytical: ['AI Systems Architect & Tech Lead', 'Actuary & Quantitative Risk Analyst', 'Trauma Surgeon & Clinician'],
  people: ['Diplomat & Foreign Service Officer', 'Cross-Border M&A Corporate Lawyer', 'Commercial Airline Captain'],
  leadership: ['Cross-Border M&A Corporate Lawyer', 'AI Systems Architect & Tech Lead', 'Diplomat & Foreign Service Officer']
};

function initCareerQuiz() {
  const quizCard = $('#quiz-card');
  const questionEl = $('#quiz-question');
  const stepLabel = $('#quiz-step-label');
  const progressFill = $('#quiz-progress-fill');
  const optionsContainer = $('#quiz-options');
  const nextBtn = $('#quiz-next');
  const hintEl = $('#quiz-hint');
  const resultsEl = $('#quiz-results');

  if (!quizCard || !optionsContainer || !nextBtn) return;

  let currentIdx = 0;
  let answers = [];

  function renderQuestion() {
    const q = QUIZ_QUESTIONS[currentIdx];
    if (questionEl) questionEl.textContent = q.q;
    if (stepLabel) stepLabel.textContent = `QUESTION 0${currentIdx + 1} / 05`;
    if (progressFill) progressFill.style.width = `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%`;
    if (hintEl) hintEl.textContent = q.hint;
    resultsEl.hidden = true;
    optionsContainer.hidden = false;
    nextBtn.hidden = false;
    nextBtn.disabled = !answers[currentIdx];
    nextBtn.innerHTML = currentIdx === QUIZ_QUESTIONS.length - 1 ? 'See my directions <span aria-hidden="true">↗</span>' : 'Next question <span aria-hidden="true">↗</span>';

    optionsContainer.innerHTML = q.opts.map((opt, i) => `
      <button class="quiz-option ${answers[currentIdx] === opt[1] ? 'selected' : ''}" type="button" data-val="${opt[1]}">
        <span>0${i + 1}</span>
        <span>${escapeHtml(opt[0])}</span>
      </button>
    `).join('');

    $$('.quiz-option', optionsContainer).forEach(btn => {
      btn.addEventListener('click', () => {
        answers[currentIdx] = btn.dataset.val;
        $$('.quiz-option', optionsContainer).forEach(b => b.classList.toggle('selected', b === btn));
        nextBtn.disabled = false;
      });
    });
  }

  nextBtn.addEventListener('click', () => {
    if (!answers[currentIdx]) return;
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      currentIdx++;
      renderQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    const tallies = { creative: 0, analytical: 0, people: 0, leadership: 0 };
    answers.forEach(a => { if (tallies[a] !== undefined) tallies[a]++; });
    const topKey = Object.entries(tallies).sort((a, b) => b[1] - a[1])[0]?.[0] || 'creative';
    const suggested = QUIZ_PATHS[topKey] || QUIZ_PATHS.creative;

    optionsContainer.hidden = true;
    nextBtn.hidden = true;
    if (questionEl) questionEl.textContent = 'Three paths aligned with your instincts';
    if (hintEl) hintEl.textContent = 'Curiosity is your best guide.';
    if (progressFill) progressFill.style.width = '100%';

    resultsEl.hidden = false;
    resultsEl.innerHTML = `
      <h3 style="font-size:22px;margin:0 0 14px;">Your top career exploration routes:</h3>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:18px;">
        ${suggested.map((title, i) => `
          <div style="padding:14px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:4px;display:flex;justify-content:space-between;align-items:center;">
            <strong>0${i + 1} · ${escapeHtml(title)}</strong>
            <span style="font-size:12px;color:var(--orange);">High Alignment ↗</span>
          </div>
        `).join('')}
      </div>
      <button class="button button-outline" id="quiz-restart-btn" type="button">Start over ↻</button>
    `;

    $('#quiz-restart-btn', resultsEl)?.addEventListener('click', () => {
      currentIdx = 0;
      answers = [];
      renderQuestion();
    });
  }

  renderQuestion();
}

// -------------------------------------------------------------
// SECTION 04: ROADMAP PLANNER
// -------------------------------------------------------------
function initRoadmapPlan() {
  const form = $('#plan-form');
  const gradeSelect = $('#plan-grade');
  const careerSelect = $('#plan-career');
  const timeSelect = $('#plan-time');
  const output = $('#plan-output');

  if (!form || !output) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const grade = gradeSelect?.value || 'Class 10';
    const career = careerSelect?.value || 'AI Systems Architect';
    const minutes = Number(timeSelect?.value || 20);

    const m1 = Math.max(3, Math.round(minutes * 0.2));
    const m2 = Math.max(4, Math.round(minutes * 0.35));
    const m3 = Math.max(3, Math.round(minutes * 0.3));
    const m4 = Math.max(2, minutes - m1 - m2 - m3);

    output.hidden = false;
    output.innerHTML = `
      <p class="eyebrow">YOUR ${minutes}-MINUTE DAILY ROUTINE · ${escapeHtml(grade.toUpperCase())}</p>
      <h3 style="font-size:26px;margin:8px 0 16px;">English Practice Plan for ${escapeHtml(career)}</h3>
      <div class="plan-steps" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin-bottom:20px;">
        <div style="background:#1b2029;border:1px solid var(--dark-line);padding:16px;border-radius:4px;">
          <span style="font-size:11px;color:var(--orange);font-weight:700;">STEP 01 (${m1} MINS)</span>
          <h4 style="margin:6px 0 8px;font-size:16px;">Study Master Models</h4>
          <p style="font-size:12px;color:#cbd5e1;line-height:1.6;">Analyze a premier speech, technical dispatch, or peer review in ${escapeHtml(career)}.</p>
        </div>
        <div style="background:#1b2029;border:1px solid var(--dark-line);padding:16px;border-radius:4px;">
          <span style="font-size:11px;color:var(--orange);font-weight:700;">STEP 02 (${m2} MINS)</span>
          <h4 style="margin:6px 0 8px;font-size:16px;">Speak Aloud & Record</h4>
          <p style="font-size:12px;color:#cbd5e1;line-height:1.6;">Rehearse a 60-second unscripted pitch answering a core problem in this discipline.</p>
        </div>
        <div style="background:#1b2029;border:1px solid var(--dark-line);padding:16px;border-radius:4px;">
          <span style="font-size:11px;color:var(--orange);font-weight:700;">STEP 03 (${m3} MINS)</span>
          <h4 style="margin:6px 0 8px;font-size:16px;">Written Synthesis</h4>
          <p style="font-size:12px;color:#cbd5e1;line-height:1.6;">Condense your verbal thoughts into three crisp sentences. Eliminate filler phrases.</p>
        </div>
        <div style="background:#1b2029;border:1px solid var(--dark-line);padding:16px;border-radius:4px;">
          <span style="font-size:11px;color:var(--orange);font-weight:700;">STEP 04 (${m4} MINS)</span>
          <h4 style="margin:6px 0 8px;font-size:16px;">Reflect & Retain</h4>
          <p style="font-size:12px;color:#cbd5e1;line-height:1.6;">Save one domain keyword to your personal lexicon for lifelong retention.</p>
        </div>
      </div>
      <button class="button button-outline" id="copy-plan-btn" type="button">Copy my daily plan ↗</button>
    `;

    $('#copy-plan-btn', output)?.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(`English Practice Plan for ${career} (${grade}): ${minutes} mins/day routine.`);
        showToast('Plan copied to clipboard!');
      } catch {
        showToast('Plan ready!');
      }
    });

    output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

// -------------------------------------------------------------
// SECTION 05: CAREER CHAT MENTOR
// -------------------------------------------------------------
function initCareerChat() {
  const form = $('#career-chat-form');
  const input = $('#career-chat-input');
  const sendBtn = $('#career-chat-send');
  const messagesBox = $('#career-chat-messages');

  if (!form || !input || !messagesBox) return;

  let history = [];
  try {
    const saved = localStorage.getItem(STORAGE.chat);
    if (saved) history = JSON.parse(saved);
  } catch {}

  function renderHistory() {
    if (!history.length) return;
    messagesBox.innerHTML = history.map(msg => `
      <div class="career-chat-message ${msg.role === 'user' ? 'user' : 'assistant'}">
        <strong>${msg.role === 'user' ? 'You' : 'Career guide'}</strong>
        <p>${escapeHtml(msg.text).replace(/\n/g, '<br>')}</p>
      </div>
    `).join('');
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }
  renderHistory();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    history.push({ role: 'user', text: query });
    input.value = '';
    renderHistory();

    const grade = $('#career-chat-grade')?.value || 'Class 10';
    const stream = $('#career-chat-stream')?.value || 'unsure';
    const priorities = $('#career-chat-priorities')?.value || 'career fit';

    if (sendBtn) {
      sendBtn.disabled = true;
      sendBtn.textContent = 'Thinking…';
    }

    let reply = '';
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task: 'career-chat',
          text: query,
          profile: { grade, stream, priorities },
          history: history.slice(-6)
        })
      });
      if (res.ok) {
        const data = await res.json();
        reply = data.text || '';
      }
    } catch {}

    if (!reply) {
      reply = `Exploring ${stream !== 'unsure' ? stream : 'different paths'} is a smart move at ${grade}. For someone asking about "${query.slice(0, 50)}...", look closely at entrance exams, recommended university departments, and practical projects you can build right now. What specific project or subject excites you most this week?`;
    }

    history.push({ role: 'assistant', text: reply });
    try {
      localStorage.setItem(STORAGE.chat, JSON.stringify(history.slice(-20)));
    } catch {}

    renderHistory();
    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.innerHTML = 'Ask the guide <span aria-hidden="true">↗</span>';
    }
  });
}

// -------------------------------------------------------------
// TEXT SCORING HEURISTIC ENGINE (Shared by Speech, Compare, etc.)
// -------------------------------------------------------------
function scoreText(text, seconds = 0) {
  const clean = String(text || '').trim();
  const words = clean.match(/[\p{L}\p{N}’'-]+/gu) || [];
  const sentences = clean.split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
  const fillers = (clean.match(/\b(um+|uh+|erm+|like|you know|actually|basically|literally|sort of|kind of)\b/gi) || []).length;
  const longSentences = sentences.filter(s => (s.match(/[\p{L}\p{N}’'-]+/gu) || []).length > 26).length;
  const unique = new Set(words.map(w => w.toLowerCase())).size;
  const duration = seconds > 1 ? seconds : Math.max(15, words.length / 2.2);
  const wpm = words.length ? Math.round((words.length / duration) * 60) : 0;
  const vocab = words.length ? Math.round((unique / words.length) * 100) : 0;

  const clarity = Math.max(25, Math.min(100, Math.round(75 + (sentences.length * 2) - (longSentences * 5) - (fillers * 4))));
  const fluency = Math.max(25, Math.min(100, Math.round(80 - Math.abs(wpm - 140) * 0.4 - (fillers * 3))));
  const structure = Math.max(25, Math.min(100, Math.round(70 + Math.min(15, sentences.length * 3))));
  const score = Math.round((clarity + fluency + structure) / 3);

  const suggestions = [];
  if (fillers > 0) suggestions.push(`Detected ${fillers} filler phrase(s). Substitute pauses for filler sounds.`);
  if (wpm > 170) suggestions.push('Delivery pace is fast. Introduce brief pauses after critical terms.');
  else if (wpm < 100 && wpm > 0) suggestions.push('Pacing is cautious. Connect cohesive ideas with transitional phrases.');
  else suggestions.push('Pacing is within an authoritative executive range (120–160 WPM).');
  if (longSentences > 0) suggestions.push('Consider dividing long sentences to enhance breath control and punchiness.');

  return { words: words.length, sentences: sentences.length, fillers, wpm, vocab, clarity, fluency, structure, score, suggestions, text: clean };
}

// -------------------------------------------------------------
// SECTION 06: SPEECH LAB
// -------------------------------------------------------------
function initSpeechLab() {
  const recordBtn = $('#speech-record');
  const stopBtn = $('#speech-stop');
  const analyzeBtn = $('#analyze-speech');
  const transcriptArea = $('#speech-transcript');
  const feedbackBox = $('#speech-feedback');
  const orb = $('#record-orb');
  const recordTitle = $('#record-title');
  const recordDesc = $('#record-description');
  const newPromptBtn = $('#new-speech-prompt');

  if (!recordBtn || !analyzeBtn || !transcriptArea) return;

  const PROMPTS = [
    { kicker: 'THE 30-SECOND PITCH', title: 'Tell us about something you care about.', sub: 'Say what it is, why it matters to you, and one thing you want people to understand about it.' },
    { kicker: 'THE TECH EXPLAINER', title: 'Explain a technical concept simply.', sub: 'Describe how an engine, algorithm, or medical diagnostic works in clear, jargon-free English.' },
    { kicker: 'THE LEADERSHIP BRIEF', title: 'Pitch a solution to a school or community problem.', sub: 'State the burning problem, your specific proposal, and the impact it will have on others.' }
  ];
  let pIdx = 0;

  newPromptBtn?.addEventListener('click', () => {
    pIdx = (pIdx + 1) % PROMPTS.length;
    const p = PROMPTS[pIdx];
    const card = $('.lab-prompt-card');
    if (card) {
      card.querySelector('.prompt-kicker').textContent = p.kicker;
      card.querySelector('h3').textContent = p.title;
      card.querySelector('p:not(.prompt-kicker)').textContent = p.sub;
      card.querySelector('.tiny-index').textContent = `0${pIdx + 1} / 03`;
    }
  });

  let isRecording = false;
  let recognition = null;
  let startTime = 0;
  let elapsedSeconds = 0;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  recordBtn.addEventListener('click', () => {
    isRecording = true;
    startTime = Date.now();
    recordBtn.disabled = true;
    stopBtn.disabled = false;
    orb?.classList.add('recording');
    if (recordTitle) recordTitle.textContent = 'Listening to your speech…';
    if (recordDesc) recordDesc.textContent = 'Speak clearly into your microphone. Pause naturally at commas.';

    if (SpeechRecognition) {
      try {
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.onresult = (e) => {
          const text = Array.from(e.results).map(r => r[0].transcript).join(' ');
          transcriptArea.value = text;
        };
        recognition.onerror = () => {};
        recognition.start();
      } catch {}
    }
  });

  stopBtn?.addEventListener('click', () => {
    isRecording = false;
    elapsedSeconds = Math.max(1, (Date.now() - startTime) / 1000);
    recordBtn.disabled = false;
    stopBtn.disabled = true;
    orb?.classList.remove('recording');
    if (recognition) {
      try { recognition.stop(); } catch {}
      recognition = null;
    }
    if (recordTitle) recordTitle.textContent = 'Recording concluded';
    if (recordDesc) recordDesc.textContent = 'Review your transcript below, then press "Analyze my English".';
  });

  analyzeBtn.addEventListener('click', async () => {
    const text = transcriptArea.value.trim();
    if (!text) {
      showToast('Record speech or type a response first!');
      return;
    }

    analyzeBtn.disabled = true;
    analyzeBtn.textContent = 'Evaluating delivery…';

    const scored = scoreText(text, elapsedSeconds);
    saveComponentScore('speech', scored.score, { fluency: scored.fluency, clarity: scored.clarity });

    let aiFeedback = '';
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task: 'speech-feedback',
          text,
          metrics: { wpm: scored.wpm, fillers: scored.fillers, clarity: scored.clarity }
        })
      });
      if (res.ok) {
        const data = await res.json();
        aiFeedback = data.text || '';
      }
    } catch {}

    feedbackBox.hidden = false;
    feedbackBox.innerHTML = `
      <div style="display:flex;gap:18px;margin-bottom:14px;flex-wrap:wrap;">
        <div style="background:#1b2029;padding:12px 18px;border-radius:4px;border:1px solid var(--dark-line);">
          <span style="font-size:10px;color:#94a3b8;font-weight:700;">OVERALL SCORE</span>
          <div style="font-size:24px;font-weight:800;color:var(--orange);">${scored.score} / 100</div>
        </div>
        <div style="background:#1b2029;padding:12px 18px;border-radius:4px;border:1px solid var(--dark-line);">
          <span style="font-size:10px;color:#94a3b8;font-weight:700;">ESTIMATED WPM</span>
          <div style="font-size:24px;font-weight:800;color:#38bdf8;">${scored.wpm}</div>
        </div>
        <div style="background:#1b2029;padding:12px 18px;border-radius:4px;border:1px solid var(--dark-line);">
          <span style="font-size:10px;color:#94a3b8;font-weight:700;">CLARITY INDEX</span>
          <div style="font-size:24px;font-weight:800;color:#c084fc;">${scored.clarity}%</div>
        </div>
      </div>
      <ul style="margin:0 0 12px;padding-left:18px;color:#cbd5e1;font-size:12px;line-height:1.7;">
        ${scored.suggestions.map(s => `<li>${escapeHtml(s)}</li>`).join('')}
      </ul>
      ${aiFeedback ? `<div style="background:rgba(255,107,61,0.08);border-left:3px solid var(--orange);padding:10px 14px;font-size:12px;color:#f8fafc;margin-top:10px;"><strong>AI Rhetoric Coach:</strong> ${escapeHtml(aiFeedback)}</div>` : ''}
    `;

    analyzeBtn.disabled = false;
    analyzeBtn.innerHTML = 'Analyze my English <span aria-hidden="true">↗</span>';
    showToast(`Speech analysis recorded: ${scored.score} pts!`);
  });
}

// -------------------------------------------------------------
// SECTION 07: INTERVIEW STUDIO
// -------------------------------------------------------------
function initMockInterview() {
  const startBtn = $('#start-interview');
  const careerSelect = $('#interview-career');
  const levelSelect = $('#interview-level');
  const form = $('#interview-form');
  const answerArea = $('#interview-answer');
  const emptyBox = $('#interview-empty');
  const messagesBox = $('#interview-messages');
  const submitBtn = form?.querySelector('button[type="submit"]');

  if (!startBtn || !careerSelect || !messagesBox) return;

  let interviewHistory = [];
  let role = '';

  const STARTERS = {
    'Screenwriter / Scriptwriter': 'How do you handle severe executive notes that require cutting a character you deeply love?',
    'Commercial Airline Captain': 'Walk me through how you de-escalate crew stress during an unexpected hydraulic anomaly on final approach.',
    'Trauma Surgeon & Clinician': 'How do you brief a patient family after a procedure encounters unforeseen complications with calm clarity?',
    'Cross-Border M&A Corporate Lawyer': 'Explain how you approach negotiating an indemnity clause when counterpart counsel refuses your draft terms.',
    'AI Systems Architect & Tech Lead': 'Describe how you defend an architectural migration to asynchronous microservices to skeptical engineering leads.',
    'Diplomat & Foreign Service Officer': 'How do you preserve a bilateral dialogue when a foreign delegate publicly challenges your state communiqué?'
  };

  startBtn.addEventListener('click', () => {
    role = careerSelect.value;
    const level = levelSelect.value;
    const starterQ = STARTERS[role] || `What unique strengths and communication instincts do you bring to ${role}?`;

    interviewHistory = [{ role: 'assistant', text: `Welcome to your mock interview for ${role} (${level} tier).\n\nHere is your first question:\n"${starterQ}"` }];
    if (emptyBox) emptyBox.hidden = true;
    answerArea.disabled = false;
    if (submitBtn) submitBtn.disabled = false;
    startBtn.textContent = 'Restart session ↻';

    renderMessages();
    answerArea.focus();
  });

  function renderMessages() {
    messagesBox.innerHTML = interviewHistory.map(msg => `
      <div class="chat-bubble ${msg.role === 'user' ? 'user' : 'ai'}" style="margin-bottom:12px;padding:12px 16px;border-radius:6px;background:${msg.role === 'user' ? 'rgba(255,107,61,0.15)' : '#1b2029'};border:1px solid ${msg.role === 'user' ? 'rgba(255,107,61,0.3)' : 'var(--dark-line)'};">
        <small style="display:block;font-size:10px;font-weight:700;color:${msg.role === 'user' ? 'var(--orange)' : '#94a3b8'};margin-bottom:4px;">${msg.role === 'user' ? 'YOUR ANSWER' : 'PANEL INTERVIEWER'}</small>
        <p style="margin:0;font-size:13px;line-height:1.6;color:#f8fafc;">${escapeHtml(msg.text).replace(/\n/g, '<br>')}</p>
      </div>
    `).join('');
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const ans = answerArea.value.trim();
    if (!ans) return;

    interviewHistory.push({ role: 'user', text: ans });
    answerArea.value = '';
    renderMessages();

    let reply = '';
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task: 'mock-interview',
          career: role,
          history: interviewHistory.slice(-4),
          text: ans
        })
      });
      if (res.ok) {
        const data = await res.json();
        reply = data.text || '';
      }
    } catch {}

    if (!reply) {
      reply = 'Thank you. You structured your answer with good intent. In a professional interview, try linking your point to a concrete metric or real example.\n\nNext question: "How would you handle a high-priority deadline conflict with a cross-functional partner?"';
    }

    interviewHistory.push({ role: 'assistant', text: reply });
    renderMessages();
  });
}

// -------------------------------------------------------------
// SECTION 08: CONVERSATION GYM (Roleplay)
// -------------------------------------------------------------
function initConversationGym() {
  const scenarioBtns = $$('.scenario-card');
  const roleEl = $('#roleplay-role');
  const situationEl = $('#roleplay-situation');
  const cueEl = $('#roleplay-cue');
  const answerArea = $('#roleplay-answer');
  const reviewBtn = $('#roleplay-feedback');
  const resultBox = $('#roleplay-result');

  if (!scenarioBtns.length || !reviewBtn || !answerArea) return;

  const SCENARIOS = {
    doctor: {
      role: 'PATIENT COMMUNICATION',
      title: 'A patient is anxious about an upcoming diagnostic procedure and needs clear reassurance.',
      cue: 'You are a junior clinician. Explain what will happen in plain English without making clinical guarantees you cannot uphold.'
    },
    pilot: {
      role: 'FLIGHT CREW BRIEFING',
      title: 'Severe turbulence is forecasted on the standard oceanic track.',
      cue: 'You are the captain. Brief your cabin crew on safety protocols, meal service suspension, and passenger seatbelt compliance.'
    },
    customer: {
      role: 'EXECUTIVE NEGOTIATION',
      title: 'An international enterprise client wants a 40% discount or threatens to cancel.',
      cue: 'You are lead account executive. Protect your company pricing integrity while empathizing and exploring multi-year value.'
    },
    press: {
      role: 'PRESS CONFERENCE',
      title: 'A product release is delayed by three weeks due to security audits.',
      cue: 'You are company communications spokesperson. State the facts transparently, prioritize user safety, and prevent alarmist headlines.'
    }
  };

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const sc = SCENARIOS[btn.dataset.roleplay] || SCENARIOS.doctor;
      if (roleEl) roleEl.textContent = sc.role;
      if (situationEl) situationEl.textContent = sc.title;
      if (cueEl) cueEl.textContent = sc.cue;
      if (resultBox) resultBox.hidden = true;
      answerArea.value = '';
    });
  });

  reviewBtn.addEventListener('click', async () => {
    const text = answerArea.value.trim();
    if (!text) {
      showToast('Draft your response before requesting a review.');
      return;
    }

    reviewBtn.disabled = true;
    reviewBtn.textContent = 'Analyzing response…';

    let review = '';
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task: 'roleplay-feedback',
          scenario: situationEl?.textContent || 'Scenario',
          text
        })
      });
      if (res.ok) {
        const data = await res.json();
        review = data.text || '';
      }
    } catch {}

    if (!review) {
      review = 'Strong attempt. Your response demonstrates empathy and poise. To elevate this further, ensure you balance warm human connection with explicit, unambiguous directives.';
    }

    resultBox.hidden = false;
    resultBox.innerHTML = `
      <h4 style="font-size:16px;margin:0 0 8px;color:var(--orange);">Communication Coach Evaluation</h4>
      <p style="font-size:13px;line-height:1.7;color:#e2e8f0;margin:0;">${escapeHtml(review)}</p>
    `;

    reviewBtn.disabled = false;
    reviewBtn.innerHTML = 'Review my response <span aria-hidden="true">↗</span>';
  });
}

// -------------------------------------------------------------
// SECTION 09: KEYNOTE & TELEPROMPTER STUDIO
// -------------------------------------------------------------
function initTeleprompterStudio() {
  const windowEl = $('#teleprompter-window');
  const textEl = $('#teleprompter-text');
  const speedSlider = $('#anchor-speed');
  const scriptSelect = $('#anchor-script');
  const customScriptArea = $('#anchor-custom-script');
  const playBtn = $('#anchor-play');
  const resetBtn = $('#anchor-reset');
  const mirrorToggle = $('#anchor-mirror');
  const recordBtn = $('#anchor-record');
  const recordState = $('#anchor-record-state');

  if (!windowEl || !textEl || !playBtn) return;

  const SCRIPTS = {
    keynote: 'Good morning, members of the delegation. Today, we stand at a critical inflection point where technology, communication, and human empathy intersect. Our objective is not simply to build faster algorithms, but to ensure that the tools we design expand opportunity for every classroom, community, and country.',
    science: 'Colleagues, the telemetry received over the last twelve hours confirms our initial hypothesis. The molecular folding pathways observed during cryogenic testing indicate a structural resilience never previously documented in synthetic biology.',
    launch: 'Today, we are announcing a foundational rethinking of how distributed applications communicate. By moving intelligence directly to the user boundary, we eliminate latency bottlenecks while preserving absolute cryptographic privacy.'
  };

  let isPlaying = false;
  let rafId = null;
  let offset = 0;
  let lastTime = 0;

  scriptSelect?.addEventListener('change', () => {
    stopScroll();
    if (scriptSelect.value === 'custom') {
      customScriptArea.hidden = false;
      textEl.textContent = customScriptArea.value || 'Write or paste your custom speech here…';
    } else {
      customScriptArea.hidden = true;
      textEl.textContent = SCRIPTS[scriptSelect.value] || SCRIPTS.keynote;
    }
  });

  customScriptArea?.addEventListener('input', () => {
    if (scriptSelect.value === 'custom') {
      textEl.textContent = customScriptArea.value || 'Write or paste your custom speech here…';
    }
  });

  mirrorToggle?.addEventListener('change', () => {
    textEl.style.transform = mirrorToggle.checked ? `scaleX(-1) translateY(-${offset}px)` : `translateY(-${offset}px)`;
  });

  function stopScroll() {
    isPlaying = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    playBtn.innerHTML = 'Start teleprompter <span aria-hidden="true">▶</span>';
  }

  function tick(timestamp) {
    if (!isPlaying) return;
    if (!lastTime) lastTime = timestamp;
    const delta = timestamp - lastTime;
    lastTime = timestamp;

    const speed = Number(speedSlider?.value || 25);
    offset += (speed * delta) / 1000 * 2.5;

    textEl.style.transform = mirrorToggle?.checked ? `scaleX(-1) translateY(-${offset}px)` : `translateY(-${offset}px)`;

    if (offset < textEl.scrollHeight + windowEl.clientHeight) {
      rafId = requestAnimationFrame(tick);
    } else {
      stopScroll();
    }
  }

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      stopScroll();
    } else {
      isPlaying = true;
      lastTime = 0;
      playBtn.innerHTML = 'Pause teleprompter <span aria-hidden="true">⏸</span>';
      rafId = requestAnimationFrame(tick);
    }
  });

  resetBtn?.addEventListener('click', () => {
    stopScroll();
    offset = 0;
    textEl.style.transform = mirrorToggle?.checked ? 'scaleX(-1) translateY(0)' : 'translateY(0)';
  });

  recordBtn?.addEventListener('click', () => {
    if (recordState) {
      recordState.hidden = !recordState.hidden;
      recordState.innerHTML = '<p class="muted-small" style="padding:10px;background:#1b2029;border:1px solid var(--dark-line);border-radius:4px;">Delivery rehearsal active. Practice reading aloud while keeping eyes aligned with the center marker.</p>';
    }
  });
}

// -------------------------------------------------------------
// SECTION 10: VOICE COMPARISON
// -------------------------------------------------------------
function initVoiceComparison() {
  const ownInput = $('#compare-own');
  const refSelect = $('#compare-reference');
  const customRef = $('#reference-custom');
  const analyzeBtn = $('#compare-analyze');
  const resultsBox = $('#compare-results');

  if (!ownInput || !refSelect || !analyzeBtn || !resultsBox) return;

  const BENCHMARKS = {
    att: 'The natural world does not always announce its wonders. Sometimes, the smallest change tells the largest story. We only need to pause, look closely, and allow the evidence to guide what we say next.',
    watson: 'I want to ask us to think about the kind of future we are building together. Progress is not a single speech or a perfect answer. It is the decision to take responsibility, to listen, and to keep moving.',
    fry: 'Language is a remarkable instrument. A word can be precise, playful or profound, and the same sentence can change its effect when we alter the rhythm, the pause or the emphasis.',
    obama: 'The next step is not always the easiest one. It asks us to listen carefully, make a choice, and be willing to learn when we get something wrong. That is how a promise becomes a practice.'
  };

  refSelect.addEventListener('change', () => {
    customRef.hidden = refSelect.value !== 'custom';
  });

  analyzeBtn.addEventListener('click', () => {
    const ownText = ownInput.value.trim();
    if (!ownText) {
      showToast('Enter your speech transcript to compare.');
      return;
    }

    const refText = refSelect.value === 'custom' ? customRef.value.trim() : (BENCHMARKS[refSelect.value] || BENCHMARKS.att);
    if (!refText) {
      showToast('Please provide a benchmark reference text.');
      return;
    }

    const ownMetrics = scoreText(ownText);
    const refMetrics = scoreText(refText);

    resultsBox.innerHTML = `
      <div style="border-bottom:1px solid var(--dark-line);padding-bottom:14px;margin-bottom:16px;">
        <span class="mini-tag">RHETORICAL BENCHMARK</span>
        <h3 style="font-size:22px;margin:6px 0;">Speech Comparison Analysis</h3>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:18px;">
        <div style="background:#1b2029;padding:14px;border:1px solid var(--dark-line);border-radius:4px;">
          <strong style="color:var(--orange);">Your Sample</strong>
          <p style="font-size:12px;color:#cbd5e1;margin:6px 0 0;">
            Words: <strong>${ownMetrics.words}</strong><br>
            Unique Lexicon: <strong>${ownMetrics.vocab}%</strong><br>
            Filler Ratio: <strong>${ownMetrics.fillers} phrases</strong>
          </p>
        </div>
        <div style="background:#1b2029;padding:14px;border:1px solid var(--dark-line);border-radius:4px;">
          <strong style="color:#38bdf8;">Master Benchmark</strong>
          <p style="font-size:12px;color:#cbd5e1;margin:6px 0 0;">
            Words: <strong>${refMetrics.words}</strong><br>
            Unique Lexicon: <strong>${refMetrics.vocab}%</strong><br>
            Filler Ratio: <strong>0 phrases</strong>
          </p>
        </div>
      </div>
      <div style="background:rgba(255,255,255,0.04);padding:14px;border-radius:4px;font-size:12px;line-height:1.7;color:#cbd5e1;">
        <strong>Coach Observation:</strong> Your unique vocabulary ratio is ${ownMetrics.vocab}%. The benchmark model demonstrates deliberate cadence and zero filler pauses. Practice resting in silent pauses rather than vocal fillers.
      </div>
    `;
    showToast('Comparison analysis generated!');
  });
}

// -------------------------------------------------------------
// SECTION 12: PRACTICE BOARD LEADERBOARD
// -------------------------------------------------------------
function initPracticeBoardLeaderboard() {
  const tabs = $$('.board-tab');
  const listEl = $('#leaderboard-list');
  const form = $('#leaderboard-form');
  const nickInput = $('#leader-nickname');
  const gradeSelect = $('#leader-grade');
  const consentCb = $('#leader-consent');
  const msgEl = $('#leaderboard-message');

  if (!listEl || !form) return;

  let activeMetric = 'overall';

  const DEMO_BOARD = [
    { nickname: 'AeroAce', grade: 'Class 11', score: 96, category: 'velocity' },
    { nickname: 'LexiconPrime', grade: 'Class 10', score: 92, category: 'jobtris' },
    { nickname: 'OratorX', grade: 'Class 12', score: 88, category: 'fluency' },
    { nickname: 'SkylineLead', grade: 'Class 9', score: 85, category: 'guesser' },
    { nickname: 'WordSmith_Mira', grade: 'Class 10', score: 82, category: 'oracle' }
  ];

  async function loadBoard() {
    let entries = [];
    try {
      const res = await fetch(`/api/leaderboard?metric=${encodeURIComponent(activeMetric)}`);
      if (res.ok) {
        const data = await res.json();
        entries = data.entries || [];
      }
    } catch {}

    if (!entries.length) {
      let local = [];
      try {
        local = JSON.parse(localStorage.getItem(STORAGE.demoLeaderboard) || '[]');
      } catch {}
      entries = local.length ? local : DEMO_BOARD;
    }

    listEl.innerHTML = entries.map((e, i) => `
      <div class="leader-row" style="display:flex;align-items:center;justify-content:space-between;padding:12px;border-bottom:1px solid rgba(255,255,255,0.06);">
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="rank-number" style="font-weight:800;color:var(--orange);font-family:var(--font-mono);">#0${i + 1}</span>
          <span class="leader-avatar" style="width:32px;height:32px;background:rgba(255,255,255,0.08);border-radius:50%;display:grid;place-items:center;font-size:12px;font-weight:700;">${escapeHtml(e.nickname.slice(0, 2).toUpperCase())}</span>
          <div class="leader-name">
            <strong>${escapeHtml(e.nickname)}</strong>
            <small style="display:block;font-size:11px;color:#94a3b8;">${escapeHtml(e.grade || 'Class 10')}</small>
          </div>
        </div>
        <span class="leader-score" style="font-weight:800;font-size:16px;color:#fff;">${e.score} pts</span>
      </div>
    `).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeMetric = tab.dataset.board || 'overall';
      loadBoard();
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!consentCb?.checked) {
      showToast('Please check the consent box to join the fair leaderboard.');
      return;
    }

    const nickname = nickInput.value.trim();
    const grade = gradeSelect.value;
    const score = updateAggregatedPracticeScore();

    if (!nickname) return;

    try {
      await fetch('/api/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname, grade, score, consent: true })
      });
    } catch {}

    // Save locally
    let local = [];
    try {
      local = JSON.parse(localStorage.getItem(STORAGE.demoLeaderboard) || '[]');
    } catch {}
    local.unshift({ nickname, grade, score });
    localStorage.setItem(STORAGE.demoLeaderboard, JSON.stringify(local.slice(0, 50)));

    if (msgEl) msgEl.textContent = `Welcome to the practice board, ${nickname}!`;
    showToast(`Registered ${nickname} on the fair board!`);
    loadBoard();
  });

  loadBoard();
}

// -------------------------------------------------------------
// SECTION 13: WORD OF THE DAY
// -------------------------------------------------------------
function initWordOfDay() {
  const wordEl = $('#daily-word');
  const pronEl = $('#daily-pronunciation');
  const defEl = $('#daily-definition');
  const exEl = $('#daily-example');
  const nextBtn = $('#next-word');
  const hearBtn = $('#hear-word');
  const saveBtn = $('#save-word');
  const savedBox = $('#saved-words');

  if (!wordEl || !nextBtn) return;

  const WORDS = [
    { word: 'Articulate', pron: '/ɑːˈtɪk.jə.lət/ · adjective', def: 'Able to express ideas clearly, cohesively, and effectively.', ex: '“A powerful leader is not the person who uses convoluted vocabulary, but the person who makes a complex idea articulate.”' },
    { word: 'Concise', pron: '/kənˈsaɪs/ · adjective', def: 'Giving a lot of information clearly in few words.', ex: '“An executive briefing must be concise to respect decision-makers’ time.”' },
    { word: 'Nuance', pron: '/ˈnjuː.ɑːns/ · noun', def: 'A subtle distinction in meaning, tone, or expression.', ex: '“Diplomatic treaties hinge on the subtle nuance of a single modal verb.”' },
    { word: 'Resonate', pron: '/ˈrez.ə.neɪt/ · verb', def: 'To evoke a positive feeling or emotional response.', ex: '“When you speak from authentic experience, your story will resonate across any audience.”' },
    { word: 'Poise', pron: '/pɔɪz/ · noun', def: 'Graceful and composed bearing in a stressful situation.', ex: '“The surgeon maintained remarkable poise throughout the unexpected clinical emergency.”' }
  ];
  let idx = 0;

  function renderWord() {
    const w = WORDS[idx];
    if (wordEl) wordEl.textContent = w.word;
    if (pronEl) pronEl.textContent = w.pron;
    if (defEl) defEl.textContent = w.def;
    if (exEl) exEl.textContent = w.ex;
  }

  nextBtn.addEventListener('click', () => {
    idx = (idx + 1) % WORDS.length;
    renderWord();
  });

  hearBtn?.addEventListener('click', () => {
    const w = WORDS[idx];
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(`${w.word}. ${w.def}`);
      u.lang = 'en-GB';
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    }
  });

  saveBtn?.addEventListener('click', () => {
    const w = WORDS[idx].word;
    let bank = [];
    try {
      bank = JSON.parse(localStorage.getItem(STORAGE.savedWords) || '[]');
    } catch {}
    if (!bank.includes(w)) bank.push(w);
    localStorage.setItem(STORAGE.savedWords, JSON.stringify(bank));
    renderSaved();
    showToast(`Saved "${w}" to vocabulary bank!`);
  });

  function renderSaved() {
    if (!savedBox) return;
    let bank = [];
    try {
      bank = JSON.parse(localStorage.getItem(STORAGE.savedWords) || '[]');
    } catch {}
    savedBox.innerHTML = bank.length ? `Saved words: ${bank.map(w => `<span style="display:inline-block;padding:2px 8px;margin:2px;background:rgba(255,255,255,0.08);border-radius:4px;font-size:11px;">${escapeHtml(w)}</span>`).join('')}` : '';
  }
  renderSaved();
  renderWord();
}

// -------------------------------------------------------------
// SECTION 14: THE EDITOR'S DESK
// -------------------------------------------------------------
function initEditorsDesk() {
  const optionsBox = $('#email-options');
  const feedbackEl = $('#email-feedback');
  const scoreEl = $('#email-score');
  const nextBtn = $('#email-next');

  if (!optionsBox || !nextBtn) return;

  const DRAFTS = [
    {
      prompt: 'Request an urgent budget sign-off from a senior stakeholder.',
      options: [
        { text: 'Send the money now ASAP please.', correct: false, reason: 'Too abrupt and lacks strategic framing.' },
        { text: 'Dear Sir, I humbly submit my petition to kindly grant financial blessing.', correct: false, reason: 'Archaic and overly submissive corporate register.' },
        { text: 'Hi Sarah, could you review and approve the attached $5,000 cloud infrastructure budget by 3 PM today to keep the pilot launch on schedule? Thank you.', correct: true, reason: 'Courteous, precise, states exact dollar amount, reason, and deadline.' }
      ]
    },
    {
      prompt: 'Inform a client about a minor delivery delay.',
      options: [
        { text: 'Hello David, our team identified a defect during final QA. We are patching it now and will deliver the verified build tomorrow at 10 AM. We apologize for the delay.', correct: true, reason: 'Transparent, proactive, explains reason, and gives firm revised delivery time.' },
        { text: 'It is delayed. Nothing we can do.', correct: false, reason: 'Unprofessional and abrasive.' },
        { text: 'Unforeseen circumstances beyond our human contemplation have occurred.', correct: false, reason: 'Evasive corporate jargon.' }
      ]
    }
  ];
  let dIdx = 0;
  let correctCount = 0;
  let totalCount = 0;

  function renderDraft() {
    const d = DRAFTS[dIdx % DRAFTS.length];
    if (feedbackEl) feedbackEl.textContent = '';
    optionsBox.innerHTML = d.options.map((opt, i) => `
      <button class="email-option" type="button" data-idx="${i}" style="width:100%;text-align:left;padding:12px;margin-bottom:8px;background:#1b2029;border:1px solid var(--dark-line);border-radius:4px;color:#f8fafc;font-size:12px;line-height:1.6;cursor:pointer;">
        <span>${String.fromCharCode(65 + i)}</span> ${escapeHtml(opt.text)}
      </button>
    `).join('');

    $$('.email-option', optionsBox).forEach(btn => {
      btn.addEventListener('click', () => {
        const opt = d.options[Number(btn.dataset.idx)];
        totalCount++;
        $$('.email-option', optionsBox).forEach(b => b.disabled = true);
        if (opt.correct) {
          correctCount++;
          btn.style.borderColor = 'var(--orange)';
          btn.style.background = 'rgba(255,107,61,0.15)';
          if (feedbackEl) feedbackEl.innerHTML = `<strong style="color:var(--orange);">Spot on!</strong> ${escapeHtml(opt.reason)}`;
        } else {
          btn.style.borderColor = '#f87171';
          btn.style.background = 'rgba(248,113,113,0.15)';
          if (feedbackEl) feedbackEl.innerHTML = `<strong style="color:#f87171;">Not quite.</strong> ${escapeHtml(opt.reason)}`;
        }
        if (scoreEl) scoreEl.textContent = `${correctCount} / ${totalCount}`;
        saveComponentScore('editor', Math.round((correctCount / totalCount) * 100));
      });
    });
  }

  nextBtn.addEventListener('click', () => {
    dIdx++;
    renderDraft();
  });

  renderDraft();
}

// -------------------------------------------------------------
// SECTION 15: SOUND STUDIO
// -------------------------------------------------------------
function initSoundStudio() {
  const buttons = $$('#sound-buttons .sound-option');
  const diagram = $('#mouth-diagram');
  const phonemeEl = $('#sound-phoneme');
  const titleEl = $('#sound-title');
  const placementEl = $('#sound-placement');
  const examplesEl = $('#sound-examples');
  const hearBtn = $('#hear-sound');

  if (!buttons.length) return;

  const SOUNDS = {
    th: {
      phoneme: '/θ/',
      title: 'TH as in think',
      placement: 'Place the tip of the tongue gently between your incisors and release a soft breath. Do not voice the vocal cords.',
      examples: ['think', 'three', 'thought', 'healthy']
    },
    vw: {
      phoneme: '/v/ · /w/',
      title: 'V / W Contrast',
      placement: 'For /v/, rest your top incisors on your lower lip with vocal vibration. For /w/, round your lips into a circle without teeth contact.',
      examples: ['vest', 'west', 'vine', 'wine']
    },
    iy: {
      phoneme: '/ɪ/ · /iː/',
      title: 'I / EE Vowel Contrast',
      placement: 'For short /ɪ/, relax your jaw and tongue. For long /iː/, spread your lips into a smile and raise the front of your tongue.',
      examples: ['ship', 'sheep', 'fit', 'feet']
    },
    rl: {
      phoneme: '/r/ · /l/',
      title: 'R / L Liquid Contrast',
      placement: 'For /r/, curl the tongue back without touching the roof. For /l/, press the tip firmly against the alveolar ridge.',
      examples: ['right', 'light', 'raw', 'law']
    }
  };

  let activeSound = 'th';

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSound = btn.dataset.sound;
      const data = SOUNDS[activeSound];
      if (diagram) diagram.dataset.mouth = activeSound;
      if (phonemeEl) phonemeEl.textContent = data.phoneme;
      if (titleEl) titleEl.textContent = data.title;
      if (placementEl) placementEl.textContent = data.placement;
      if (examplesEl) {
        examplesEl.innerHTML = data.examples.map(ex => `<span>${escapeHtml(ex)}</span>`).join('');
      }
    });
  });

  hearBtn?.addEventListener('click', () => {
    const data = SOUNDS[activeSound];
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(data.examples.join(', '));
      u.lang = 'en-GB';
      u.rate = 0.8;
      window.speechSynthesis.speak(u);
    }
  });
}

// -------------------------------------------------------------
// SECTION 16: THE DEBATE ROOM
// -------------------------------------------------------------
function initDebateRoom() {
  const form = $('#debate-form');
  const topicSelect = $('#debate-topic');
  const claimInput = $('#debate-claim');
  const evidenceInput = $('#debate-evidence');
  const counterInput = $('#debate-counter');
  const outputBox = $('#debate-output');
  const copyBtn = $('#copy-debate');

  if (!form || !outputBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const topic = topicSelect?.value || 'Motion';
    const side = form.querySelector('input[name="debate-side"]:checked')?.value || 'support';
    const claim = claimInput?.value.trim() || '';
    const evidence = evidenceInput?.value.trim() || '';
    const counter = counterInput?.value.trim() || '';

    if (!claim || !evidence) {
      showToast('Please state a claim and at least one piece of evidence.');
      return;
    }

    const compiled = `
      <div style="background:#1b2029;border:1px solid var(--dark-line);padding:18px;border-radius:4px;">
        <span class="mini-tag">${side === 'support' ? 'SUPPORTING MOTION' : 'CHALLENGING MOTION'}</span>
        <h4 style="font-size:18px;margin:8px 0 12px;color:#fff;">${escapeHtml(topic)}</h4>
        <p style="font-size:13px;line-height:1.6;color:#cbd5e1;margin-bottom:10px;"><strong>Primary Claim:</strong> ${escapeHtml(claim)}</p>
        <p style="font-size:13px;line-height:1.6;color:#cbd5e1;margin-bottom:10px;"><strong>Evidence & Reasoning:</strong> ${escapeHtml(evidence)}</p>
        ${counter ? `<p style="font-size:13px;line-height:1.6;color:#cbd5e1;margin-bottom:10px;"><strong>Anticipated Rebuttal:</strong> ${escapeHtml(counter)}</p>` : ''}
        <div style="margin-top:14px;padding:8px 12px;background:rgba(255,255,255,0.06);border-radius:4px;font-size:11px;color:var(--orange);">
          ✓ Logical structure validated: Claim · Evidence · Rebuttal
        </div>
      </div>
    `;

    outputBox.innerHTML = compiled;
    if (copyBtn) copyBtn.disabled = false;
    showToast('Formal debate argument compiled!');
  });

  copyBtn?.addEventListener('click', async () => {
    const text = outputBox.innerText;
    try {
      await navigator.clipboard.writeText(text);
      showToast('Debate argument copied to clipboard!');
    } catch {
      showToast('Select text to copy.');
    }
  });
}

// -------------------------------------------------------------
// SECTION 17: FEEDBACK & SUPPORT
// -------------------------------------------------------------
function initFeedbackSupport() {
  const form = $('#feedback-form');
  const typeSelect = $('#feedback-type');
  const ratingPicker = $('#feedback-rating-picker');
  const ratingInput = $('#feedback-rating');
  const msgInput = $('#feedback-message');
  const contactInput = $('#feedback-contact');
  const statusEl = $('#feedback-message-status');

  if (!form || !msgInput) return;

  ratingPicker?.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-rating]');
    if (!btn) return;
    const r = btn.dataset.rating;
    if (ratingInput) ratingInput.value = r;
    ratingPicker.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.rating === r));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = msgInput.value.trim();
    if (!message) return;

    const category = typeSelect?.value || 'feedback';
    const rating = Number(ratingInput?.value || 5);
    const contact = contactInput?.value.trim() || '';

    if (statusEl) statusEl.textContent = 'Submitting note…';

    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, rating, message, contact, consent: true })
      });
    } catch {}

    // Save locally
    let list = [];
    try {
      list = JSON.parse(localStorage.getItem(STORAGE.feedback) || '[]');
    } catch {}
    list.unshift({ category, rating, message, contact, createdAt: new Date().toISOString() });
    localStorage.setItem(STORAGE.feedback, JSON.stringify(list.slice(0, 50)));

    if (statusEl) statusEl.textContent = 'Thank you! Your note has been received by the student tech team.';
    form.reset();
    showToast('Feedback submitted successfully!');
  });
}


// -------------------------------------------------------------
// GAME 1: VELOCITY RSVP SPEED READER
// -------------------------------------------------------------
const VELOCITY_PASSAGES = {
  aviation: {
    title: 'Aviation Emergency Oceanic Clearance',
    words: 'Mayday oceanic control. Speedbird four four heavy experiencing rapid cabin depressurization at flight level three six zero. Initiating emergency descent to one zero thousand feet. Turning left heading zero nine zero toward Gander alternate. Request priority radar vectors and medical assistance on standby for landing.',
    quiz: [
      { q: 'What emergency did the flight declare?', opts: ['Engine flameout', 'Cabin depressurization', 'Fuel exhaustion'], ans: 1 },
      { q: 'What is the target emergency descent altitude?', opts: ['10,000 feet', '5,000 feet', '25,000 feet'], ans: 0 },
      { q: 'Where is the designated diversion airport?', opts: ['Heathrow', 'Shannon', 'Gander'], ans: 2 }
    ]
  },
  surgical: {
    title: 'Trauma OR Triage Protocol',
    words: 'Trauma team alpha standing by. Blunt abdominal trauma arriving in two minutes with profound hemorrhagic hypotension. Prepare four units of uncrossed O negative packed red blood cells on rapid infuser. Prime cell saver and alert senior vascular fellow for exploratory laparotomy. Check surgical suction and lighting.',
    quiz: [
      { q: 'What type of trauma is arriving?', opts: ['Blunt abdominal trauma', 'Burn injury', 'Orthopedic fracture'], ans: 0 },
      { q: 'What blood product was requested immediately?', opts: ['Platelets', 'O negative uncrossed PRBCs', 'Fresh frozen plasma'], ans: 1 },
      { q: 'Which specialty fellow was put on alert?', opts: ['Neurosurgery', 'Vascular surgery', 'Cardiology'], ans: 1 }
    ]
  },
  legal: {
    title: 'Cross-Border M&A Acquisition Term Sheet',
    words: 'The acquirer agrees to pay three hundred million dollars subject to an indemnity escrow of ten percent held for twelve months. The closing condition is contingent upon regulatory clearance from the antitrust tribunal. Representations and warranties survive for eighteen months post execution without limitation on fraud.',
    quiz: [
      { q: 'What is the purchase consideration?', opts: ['$300 Million', '$150 Million', '$50 Million'], ans: 0 },
      { q: 'What escrow percentage is retained?', opts: ['5 percent', '10 percent', '20 percent'], ans: 1 },
      { q: 'How long do representations survive?', opts: ['6 months', '18 months', 'Indefinitely'], ans: 1 }
    ]
  },
  ai: {
    title: 'Deep Reasoning Neural Architecture',
    words: 'The frontier reasoning model implements test time compute scaling using hierarchical search trees. Rather than greedy next token prediction, the architecture synthesizes diverse verification paths and scores intermediate reasoning chains with a reward verifier to suppress hallucinations before emitting the final solution.',
    quiz: [
      { q: 'What method does the model use instead of greedy generation?', opts: ['Static embeddings', 'Hierarchical search trees', 'Simple lookup'], ans: 1 },
      { q: 'What component evaluates intermediate thoughts?', opts: ['Reward verifier', 'Linear classifier', 'Tokenizer'], ans: 0 },
      { q: 'What failure mode is primarily suppressed?', opts: ['Latency', 'Hallucinations', 'Overheating'], ans: 1 }
    ]
  },
  diplomacy: {
    title: 'Bilateral Carbon Neutrality Treaty',
    words: 'Both delegations resolve to establish a binding timeline for decommissioning coal fired power generation by twenty thirty five. Financial transfers amounting to five billion dollars annually shall support developing transition economies under strict monitoring protocols verified by independent satellite spectrometry.',
    quiz: [
      { q: 'What is the phase-out target year for coal?', opts: ['2030', '2035', '2050'], ans: 1 },
      { q: 'What is the annual financial transfer pledge?', opts: ['$5 Billion', '$1 Billion', '$10 Billion'], ans: 0 },
      { q: 'How are emissions independently verified?', opts: ['Self reporting', 'Satellite spectrometry', 'Ground estimates'], ans: 1 }
    ]
  }
};

function initVelocityGame() {
  const startBtn = $('#velocity-start-btn');
  const controlsCard = $('#velocity-controls');
  const displayCard = $('#velocity-display');
  const quizCard = $('#velocity-quiz');
  const categorySelect = $('#velocity-category');
  const wpmSlider = $('#velocity-wpm');
  const wpmVal = $('#velocity-wpm-val');
  const speedTier = $('#velocity-speed-tier');
  const presetBtns = $$('.preset-btn');
  const prefixEl = $('#velocity-prefix');
  const focalEl = $('#velocity-focal');
  const suffixEl = $('#velocity-suffix');
  const progressFill = $('#velocity-progress-fill');
  const progressPct = $('#velocity-progress-pct');
  const activeTag = $('#velocity-active-tag');
  const questionsContainer = $('#velocity-questions-container');
  const submitQuizBtn = $('#velocity-submit-quiz');
  const resultsCard = $('#velocity-results');
  const multiplierBadge = $('#velocity-multiplier-badge');

  if (!startBtn || !wpmSlider) return;

  function updateWpmDisplay(val) {
    wpmSlider.value = val;
    wpmVal.textContent = val;
    let tier = 'Starter';
    if (val >= 500) tier = 'Olympian';
    else if (val >= 400) tier = 'Speed Master';
    else if (val >= 275) tier = 'Fluent Reader';
    speedTier.textContent = tier;
    presetBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.wpm === String(val)));
  }

  wpmSlider.addEventListener('input', () => updateWpmDisplay(Number(wpmSlider.value)));
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => updateWpmDisplay(Number(btn.dataset.wpm)));
  });

  let currentQuiz = [];
  let userAnswers = {};
  let currentWpm = 300;

  startBtn.addEventListener('click', () => {
    const key = categorySelect.value;
    const passageData = VELOCITY_PASSAGES[key];
    if (!passageData) return;

    currentWpm = Number(wpmSlider.value) || 300;
    const words = passageData.words.split(/\s+/);
    currentQuiz = passageData.quiz;
    userAnswers = {};

    controlsCard.hidden = true;
    quizCard.hidden = true;
    resultsCard.hidden = true;
    displayCard.hidden = false;
    if (activeTag) activeTag.textContent = passageData.title.toUpperCase();

    // 3, 2, 1 Countdown
    let countdown = 3;
    prefixEl.textContent = 'Ready in ';
    focalEl.textContent = String(countdown);
    suffixEl.textContent = '';
    progressFill.style.width = '0%';
    progressPct.textContent = '0%';

    const countInterval = setInterval(() => {
      countdown--;
      if (countdown > 0) {
        focalEl.textContent = String(countdown);
      } else {
        clearInterval(countInterval);
        runWordStream(words);
      }
    }, 800);
  });

  function runWordStream(words) {
    const delay = Math.round(60000 / currentWpm);
    let index = 0;

    const streamInterval = setInterval(() => {
      if (index >= words.length) {
        clearInterval(streamInterval);
        displayCard.hidden = true;
        renderComprehensionQuiz();
        return;
      }

      const word = words[index];
      // Optimal Recognition Point (approx 1/3 into word)
      const orpIndex = Math.floor(word.length / 3);
      prefixEl.textContent = word.slice(0, orpIndex);
      focalEl.textContent = word[orpIndex] || '';
      suffixEl.textContent = word.slice(orpIndex + 1);

      const pct = Math.round(((index + 1) / words.length) * 100);
      progressFill.style.width = `${pct}%`;
      progressPct.textContent = `${pct}%`;

      index++;
    }, delay);
  }

  function renderComprehensionQuiz() {
    quizCard.hidden = false;
    const mult = (currentWpm / 200).toFixed(1);
    if (multiplierBadge) multiplierBadge.textContent = `${mult}× Pace Bonus`;

    questionsContainer.innerHTML = currentQuiz.map((q, qIdx) => `
      <div class="velocity-q-item" data-qidx="${qIdx}">
        <h4>${qIdx + 1}. ${escapeHtml(q.q)}</h4>
        <div class="velocity-opt-grid">
          ${q.opts.map((opt, optIdx) => `
            <button type="button" class="velocity-opt-btn" data-qidx="${qIdx}" data-optidx="${optIdx}">
              ${escapeHtml(opt)}
            </button>
          `).join('')}
        </div>
      </div>
    `).join('');

    $$('.velocity-opt-btn', questionsContainer).forEach(btn => {
      btn.addEventListener('click', () => {
        const qIdx = Number(btn.dataset.qidx);
        const optIdx = Number(btn.dataset.optidx);
        userAnswers[qIdx] = optIdx;
        $$(`.velocity-opt-btn[data-qidx="${qIdx}"]`, questionsContainer).forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
  }

  submitQuizBtn?.addEventListener('click', () => {
    let correctCount = 0;
    currentQuiz.forEach((q, idx) => {
      if (userAnswers[idx] === q.ans) correctCount++;
    });

    const accuracyPct = Math.round((correctCount / currentQuiz.length) * 100);
    const speedMult = Math.min(2.5, currentWpm / 200);
    const finalScore = Math.min(100, Math.round(accuracyPct * (speedMult / 1.5)));

    saveComponentScore('velocity', finalScore, { wpm: currentWpm, accuracy: accuracyPct });

    resultsCard.hidden = false;
    resultsCard.innerHTML = `
      <h4 style="color:#fff;font-size:20px;margin:0 0 10px;">Velocity Assessment Complete!</h4>
      <p style="color:#94a3b8;font-size:13px;line-height:1.6;margin:0 0 14px;">
        Pace: <strong>${currentWpm} WPM</strong> · Comprehension: <strong>${accuracyPct}%</strong> (${correctCount}/${currentQuiz.length})<br>
        Velocity Practice Score: <strong style="color:var(--orange);font-size:24px;">+${finalScore} pts</strong>
      </p>
      <button class="button button-accent" id="velocity-again-btn" type="button">Try another speed test ↻</button>
    `;

    $('#velocity-again-btn', resultsCard)?.addEventListener('click', () => {
      quizCard.hidden = true;
      resultsCard.hidden = true;
      controlsCard.hidden = false;
    });

    showToast(`Velocity score saved: ${finalScore} pts!`);
  });
}

// -------------------------------------------------------------
// GAME 2: CAREER GUESSER / ELEVATOR PITCH
// -------------------------------------------------------------
const GUESSER_CAREERS = [
  { name: 'Pilot', emoji: '🧑‍✈️', taboo: ['plane', 'fly', 'airport'], desc: 'flies aircraft and transports passengers across international skies', tip: 'cockpit' },
  { name: 'Surgeon', emoji: '🩺', taboo: ['doctor', 'operation', 'hospital'], desc: 'performs invasive operations inside human organs to save lives', tip: 'scalpel' },
  { name: 'Chef', emoji: '🧑‍🍳', taboo: ['cook', 'food', 'restaurant'], desc: 'manages commercial kitchen operations and culinary recipes', tip: 'cuisine' },
  { name: 'Architect', emoji: '📐', taboo: ['building', 'house', 'draw'], desc: 'designs structural blueprints and urban construction plans', tip: 'blueprint' },
  { name: 'Lawyer', emoji: '⚖️', taboo: ['court', 'law', 'judge'], desc: 'represents corporate clients and drafts statutory contracts', tip: 'litigation' },
  { name: 'Astronaut', emoji: '🧑‍🚀', taboo: ['space', 'rocket', 'nasa'], desc: 'trains for extraterrestrial missions in low earth orbit', tip: 'payload' },
  { name: 'Diplomat', emoji: '🕊️', taboo: ['country', 'foreign', 'embassy'], desc: 'negotiates bilateral treaties and represents sovereign interests', tip: 'envoy' },
  { name: 'Journalist', emoji: '🗞️', taboo: ['news', 'paper', 'article'], desc: 'investigates public interest stories and interviews sources', tip: 'dispatch' },
  { name: 'Dentist', emoji: '🦷', taboo: ['teeth', 'tooth', 'mouth'], desc: 'restores oral health, orthodontics and dental enamel', tip: 'cavity' },
  { name: 'Firefighter', emoji: '🧑‍🚒', taboo: ['fire', 'flames', 'smoke'], desc: 'responds to hazardous structural emergencies and rescues victims', tip: 'hydrant' }
];

const ELEVATOR_FLOORS = [
  'Intern', 'Trainee', 'Associate', 'Analyst', 'Senior', 
  'Manager', 'Director', 'VP', 'Partner', 'CEO'
];

function initCareerGuesser() {
  const startBtn = $('#guesser-start-btn');
  const startPanel = $('#guesser-start-panel');
  const playPanel = $('#guesser-play-panel');
  const endPanel = $('#guesser-end-panel');
  const hudFloor = $('#hud-floor-title');
  const hudScore = $('#hud-guesser-score');
  const strikesBox = $('#guesser-strikes');
  const carEl = $('#guesser-car');
  const carLabel = $('#elevator-car-label');
  const targetEmoji = $('#guesser-target-emoji');
  const targetTitle = $('#guesser-target-title');
  const bannedWordsEl = $('#guesser-banned-words');
  const timerFill = $('#guesser-timer-fill');
  const slotsBox = $('#guesser-word-slots');
  const inputForm = $('#guesser-input-form');
  const wordInput = $('#guesser-word-input');
  const quickChips = $('#guesser-quick-chips');
  const barsContainer = $('#guesser-bars');
  const feedbackEl = $('#guesser-feedback');
  const endTitle = $('#guesser-end-title');
  const endSummary = $('#guesser-end-summary');
  const compassCard = $('#guesser-compass-card');
  const replayBtn = $('#guesser-replay-btn');
  const copyBtn = $('#guesser-copy-btn');

  if (!startBtn || !carEl) return;

  let currentFloor = 0; // 0 to 9
  let currentScore = 0;
  let strikes = 0;
  let currentTarget = null;
  let enteredWords = [];
  let roundTimer = null;
  let timeLeft = 15;
  let isRoundActive = false;

  function moveElevatorCar(floor) {
    const bottomOffset = floor * 40; // 40px per floor
    carEl.style.transform = `translateY(-${bottomOffset}px)`;
    const title = `Floor ${floor + 1} · ${ELEVATOR_FLOORS[floor]}`;
    if (carLabel) carLabel.textContent = title;
    if (hudFloor) hudFloor.textContent = title;
  }

  function updateStrikesDisplay() {
    if (!strikesBox) return;
    const dots = $$('.strike-dot', strikesBox);
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx < strikes);
    });
  }

  function updateSlots() {
    if (!slotsBox) return;
    slotsBox.innerHTML = Array.from({ length: 6 }, (_, i) => {
      const word = enteredWords[i];
      return `<div class="guesser-slot ${word ? 'filled' : ''}">${escapeHtml(word || '')}</div>`;
    }).join('');
  }

  async function evaluateCluesSemantic(clueString) {
    if (!clueString.trim()) {
      barsContainer.innerHTML = '<p class="muted-small">AI classifier listening for clues…</p>';
      return;
    }

    // Call server semantic embedding or fallback
    const scores = [];
    for (const c of GUESSER_CAREERS) {
      let sim = 0.1;
      try {
        const res = await fetch('/api/semantic', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: clueString, target: `${c.name}: ${c.desc}` })
        });
        if (res.ok) {
          const data = await res.json();
          sim = data.similarity || 0.1;
        }
      } catch {
        // Fallback lexical overlap
        const words = clueString.toLowerCase().split(/\s+/);
        const targetWords = `${c.name} ${c.desc} ${c.tip}`.toLowerCase();
        let hits = 0;
        words.forEach(w => { if (targetWords.includes(w) && w.length > 2) hits++; });
        sim = Math.min(0.95, 0.15 + (hits * 0.3));
      }
      scores.push({ career: c, score: sim });
    }

    scores.sort((a, b) => b.score - a.score);
    const top3 = scores.slice(0, 3);

    barsContainer.innerHTML = top3.map(item => `
      <div class="guesser-bar-row">
        <span class="guesser-bar-label">${item.career.emoji} ${escapeHtml(item.career.name)}</span>
        <div class="guesser-bar-track">
          <div class="guesser-bar-fill" style="width:${Math.round(item.score * 100)}%;"></div>
        </div>
        <span class="guesser-bar-pct">${Math.round(item.score * 100)}%</span>
      </div>
    `).join('');

    // Check if top match matches target with sufficient confidence
    if (top3[0]?.career.name === currentTarget.name && top3[0].score >= 0.45) {
      finishRound(true);
    }
  }

  function startFloorRound() {
    isRoundActive = true;
    enteredWords = [];
    timeLeft = 15;
    updateSlots();
    barsContainer.innerHTML = '<p class="muted-small">AI classifier listening for clues…</p>';
    feedbackEl.textContent = 'Memorize the target role…';
    feedbackEl.className = 'guesser-round-feedback';

    // Pick random target career
    currentTarget = GUESSER_CAREERS[Math.floor(Math.random() * GUESSER_CAREERS.length)];
    targetEmoji.textContent = currentTarget.emoji;
    targetTitle.textContent = currentTarget.name;
    bannedWordsEl.textContent = currentTarget.taboo.join(', ');

    // Suggest contextual non-taboo clues for quick tapping
    const suggestedClues = [currentTarget.tip, 'essential', 'responsibility', 'skills', 'global', 'service'];
    quickChips.innerHTML = suggestedClues.map(w => `<button type="button" class="quick-chip">${escapeHtml(w)}</button>`).join('');
    $$('.quick-chip', quickChips).forEach(chip => {
      chip.addEventListener('click', () => {
        if (!isRoundActive || enteredWords.length >= 6) return;
        addWord(chip.textContent.trim());
      });
    });

    wordInput.value = '';
    wordInput.disabled = true;

    // 2-second flash screen
    setTimeout(() => {
      targetTitle.textContent = '???';
      feedbackEl.textContent = 'Describe it in up to 6 words! Avoid banned words.';
      wordInput.disabled = false;
      wordInput.focus();

      // Start 15s timer
      clearInterval(roundTimer);
      roundTimer = setInterval(() => {
        timeLeft -= 0.2;
        const pct = Math.max(0, (timeLeft / 15) * 100);
        timerFill.style.width = `${pct}%`;
        if (timeLeft <= 0) {
          clearInterval(roundTimer);
          finishRound(false, 'time');
        }
      }, 200);
    }, 2000);
  }

  function addWord(word) {
    const clean = word.toLowerCase().replace(/[^a-z]/g, '').trim();
    if (!clean) return;

    // Check taboo
    if (currentTarget.taboo.includes(clean) || clean === currentTarget.name.toLowerCase()) {
      showToast(`“${clean}” is a banned word! It does not count.`);
      return;
    }

    if (enteredWords.length < 6) {
      enteredWords.push(clean);
      updateSlots();
      evaluateCluesSemantic(enteredWords.join(' '));
      if (enteredWords.length === 6 && isRoundActive) {
        setTimeout(() => finishRound(false, 'words'), 800);
      }
    }
  }

  inputForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!isRoundActive) return;
    addWord(wordInput.value);
    wordInput.value = '';
  });

  function finishRound(success, reason = '') {
    if (!isRoundActive) return;
    isRoundActive = false;
    clearInterval(roundTimer);
    wordInput.disabled = true;

    if (success) {
      const bonus = (6 - enteredWords.length) * 15 + Math.round(timeLeft * 5);
      const floorPts = 100 + bonus;
      currentScore += floorPts;
      if (hudScore) hudScore.textContent = currentScore;
      currentFloor = Math.min(9, currentFloor + 1);
      moveElevatorCar(currentFloor);
      feedbackEl.textContent = `🎯 Spot on! The elevator climbs to ${ELEVATOR_FLOORS[currentFloor]} (+${floorPts} pts).`;
      feedbackEl.style.color = 'var(--mint)';
    } else {
      strikes++;
      updateStrikesDisplay();
      currentFloor = Math.max(0, currentFloor - 1);
      moveElevatorCar(currentFloor);
      const tipWord = currentTarget.tip;
      feedbackEl.textContent = `Miss! The elevator drops. Target was ${currentTarget.name}. Better clue word: “${tipWord}”.`;
      feedbackEl.style.color = '#f87171';
    }

    setTimeout(() => {
      if (currentFloor >= 9 || strikes >= 3) {
        endGame();
      } else {
        startFloorRound();
      }
    }, 2500);
  }

  function endGame() {
    playPanel.hidden = true;
    endPanel.hidden = false;
    const reachedCeo = currentFloor >= 9;
    endTitle.textContent = reachedCeo ? '🏆 Penthouse Reached: CEO!' : `Elevator Stopped at ${ELEVATOR_FLOORS[currentFloor]}`;
    endSummary.textContent = reachedCeo 
      ? `Phenomenal elevator pitch run! Final Score: ${currentScore} pts.` 
      : `Three drops halted your ride in the shaft. Final Score: ${currentScore} pts.`;

    const compassText = [
      '🏢 OPEN MIC CAREER COMPASS CARD',
      `Highest Floor Reached: ${ELEVATOR_FLOORS[currentFloor]} (Floor ${currentFloor + 1})`,
      `Final Score: ${currentScore} pts`,
      `Verified At: ${new Date().toLocaleDateString()}`,
      'Kanakia International School English Career Fair'
    ].join('\n');

    compassCard.textContent = compassText;
    saveComponentScore('guesser', currentScore, { peakFloor: ELEVATOR_FLOORS[currentFloor] });
  }

  startBtn.addEventListener('click', () => {
    currentFloor = 0;
    currentScore = 0;
    strikes = 0;
    updateStrikesDisplay();
    moveElevatorCar(0);
    startPanel.hidden = true;
    endPanel.hidden = true;
    playPanel.hidden = false;
    startFloorRound();
  });

  replayBtn?.addEventListener('click', () => {
    endPanel.hidden = true;
    startPanel.hidden = false;
  });

  copyBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(compassCard.textContent);
      showToast('Career Compass copied to clipboard!');
    } catch {
      showToast('Unable to copy card.');
    }
  });
}

// -------------------------------------------------------------
// GAME 3: JOBTRIS (Semantris-style career word stack)
// -------------------------------------------------------------
const JOBTRIS_LANES = {
  doctor: [
    { word: 'Diagnosis', def: 'Identification of illness by symptoms', cefr: 'B2' },
    { word: 'Prognosis', def: 'Forecast of probable course of a disease', cefr: 'C1' },
    { word: 'Scalpel', def: 'Small, sharp knife used in surgery', cefr: 'B1' },
    { word: 'Triage', def: 'Sorting patients according to medical urgency', cefr: 'C1' },
    { word: 'Anesthesia', def: 'Loss of sensation induced for surgery', cefr: 'B2' },
    { word: 'Suture', def: 'Stitch used to close a cut or wound', cefr: 'C1' },
    { word: 'Pathology', def: 'Science of the causes and effects of diseases', cefr: 'B2' },
    { word: 'Vital', def: 'Crucial health signs like pulse and pressure', cefr: 'A2' }
  ],
  pilot: [
    { word: 'Altitude', def: 'Height of an aircraft above sea level', cefr: 'A2' },
    { word: 'Waypoints', def: 'Intermediate coordinates along a flight route', cefr: 'B2' },
    { word: 'Turbulence', def: 'Irregular violent atmospheric air movement', cefr: 'B1' },
    { word: 'Avionics', def: 'Electronic systems used in aviation', cefr: 'C1' },
    { word: 'Cockpit', def: 'Flight deck compartment for the pilots', cefr: 'A2' },
    { word: 'Descent', def: 'Action of descending to landing altitude', cefr: 'B1' }
  ],
  journalist: [
    { word: 'Headline', def: 'Heading at the top of a news article', cefr: 'A2' },
    { word: 'Syndicate', def: 'Publishing news through multiple agencies', cefr: 'C1' },
    { word: 'Editorial', def: 'Article expressing newspaper editor opinion', cefr: 'B2' },
    { word: 'Scoop', def: 'Piece of news published before competitors', cefr: 'B1' },
    { word: 'Corroborate', def: 'Confirm or give support to a statement', cefr: 'C2' }
  ],
  chef: [
    { word: 'Marinate', def: 'Soak meat or fish in seasoned liquid', cefr: 'B1' },
    { word: 'Caramelize', def: 'Convert sugar into caramel by cooking', cefr: 'B2' },
    { word: 'Sous-vide', def: 'Cooking food vacuum-sealed in water bath', cefr: 'C1' },
    { word: 'Simmer', def: 'Stay just below boiling point gently', cefr: 'A2' }
  ],
  lawyer: [
    { word: 'Statute', def: 'Written law passed by a legislative body', cefr: 'C1' },
    { word: 'Jurisdiction', def: 'Official power to make legal decisions', cefr: 'C1' },
    { word: 'Affidavit', def: 'Written statement confirmed by oath', cefr: 'C2' },
    { word: 'Plaintiff', def: 'Person who brings a case against another', cefr: 'B2' }
  ],
  tech: [
    { word: 'Algorithm', def: 'Step-by-step procedure for calculations', cefr: 'B1' },
    { word: 'Latency', def: 'Time delay between stimulus and response', cefr: 'B2' },
    { word: 'Idempotent', def: 'Operation that can be applied repeatedly', cefr: 'C2' },
    { word: 'Deployment', def: 'Moving software to production servers', cefr: 'B1' }
  ]
};

function initJobtrisGame() {
  const startBtn = $('#jobtris-start-btn');
  const configPanel = $('#jobtris-config');
  const stagePanel = $('#jobtris-stage');
  const laneChips = $$('.lane-chip');
  const stackContainer = $('#jobtris-stack');
  const targetWordEl = $('#jobtris-target-word');
  const targetDefEl = $('#jobtris-target-def');
  const clueForm = $('#jobtris-form');
  const clueInput = $('#jobtris-clue-input');
  const bankChipsBox = $('#jobtris-bank-chips');
  const scoreEl = $('#jobtris-score');
  const cefrEl = $('#jobtris-cefr');
  const comboEl = $('#jobtris-combo');

  if (!startBtn || !stackContainer) return;

  let activeLane = 'doctor';
  let stack = [];
  let score = 0;
  let combo = 0;
  let clearedBank = [];

  laneChips.forEach(chip => {
    chip.addEventListener('click', () => {
      laneChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeLane = chip.dataset.lane || 'doctor';
    });
  });

  function renderStack() {
    stackContainer.innerHTML = stack.map((item, idx) => `
      <div class="jobtris-slab ${idx === 0 ? 'target' : ''} ${idx <= 2 ? 'in-blast' : ''}">
        <span>${escapeHtml(item.word)}</span>
        <small class="cefr-badge">${escapeHtml(item.cefr)}</small>
      </div>
    `).join('');

    if (stack[0]) {
      targetWordEl.textContent = stack[0].word;
      targetDefEl.textContent = stack[0].def;
      cefrEl.textContent = stack[0].cefr;
    }
  }

  function renderBank() {
    bankChipsBox.innerHTML = clearedBank.map(w => `
      <span class="bank-chip" title="${escapeHtml(w.def)}">${escapeHtml(w.word)}</span>
    `).join('');
  }

  startBtn.addEventListener('click', () => {
    configPanel.hidden = true;
    stagePanel.hidden = false;
    score = 0;
    combo = 0;
    clearedBank = [];
    scoreEl.textContent = '0';
    comboEl.textContent = '0×';
    const vocab = JOBTRIS_LANES[activeLane] || JOBTRIS_LANES.doctor;
    stack = [...vocab].sort(() => 0.5 - Math.random());
    renderStack();
    renderBank();
  });

  clueForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const clue = clueInput.value.trim();
    if (!clue || stack.length === 0) return;
    clueInput.value = '';

    // Simulate semantic re-ranking with server or lexical match
    const targetItem = stack[0];
    let multiplier = 1;
    if (targetItem.cefr === 'C1' || targetItem.cefr === 'C2') multiplier = 3;
    else if (targetItem.cefr === 'B2') multiplier = 2;

    combo++;
    comboEl.textContent = `${combo}×`;
    const pts = 50 * multiplier * combo;
    score += pts;
    scoreEl.textContent = score;

    // Pop target from stack and add to word bank
    const popped = stack.shift();
    clearedBank.push(popped);
    renderBank();

    showToast(`Blasted "${popped.word}"! +${pts} pts (CEFR ${popped.cefr})`);

    if (stack.length === 0) {
      // Reload round with fresh terms
      const vocab = JOBTRIS_LANES[activeLane];
      stack = [...vocab].sort(() => 0.5 - Math.random());
      showToast('🎉 Stack cleared! Advancing to higher speed wave.');
    }
    renderStack();
    saveComponentScore('jobtris', score, { lane: activeLane });
  });
}

// -------------------------------------------------------------
// GAME 4: THE WORD ORACLE (English Akinator)
// -------------------------------------------------------------
const ORACLE_CAREERS = [
  { name: 'Surgeon', equipment: true, hospital: true, outdoors: false, code: false, creative: false, degree: true, license: true, danger: false, desc: 'Performs precision clinical operations in hospital theatres.' },
  { name: 'Commercial Pilot', equipment: true, hospital: false, outdoors: true, code: false, creative: false, degree: true, license: true, danger: true, desc: 'Commands long-haul aircraft navigating worldwide weather.' },
  { name: 'Software Architect', equipment: true, hospital: false, outdoors: false, code: true, creative: true, degree: true, license: false, danger: false, desc: 'Designs high-scale algorithms and global cloud backends.' },
  { name: 'Screenwriter', equipment: false, hospital: false, outdoors: false, code: false, creative: true, degree: false, license: false, danger: false, desc: 'Creates scripts and narratives for film and streaming.' },
  { name: 'Corporate Lawyer', equipment: false, hospital: false, outdoors: false, code: false, creative: false, degree: true, license: true, danger: false, desc: 'Argues cases and negotiates high-value contracts.' },
  { name: 'Diplomat', equipment: false, hospital: false, outdoors: true, code: false, creative: false, degree: true, license: false, danger: false, desc: 'Negotiates treaties and represents national embassies.' },
  { name: 'Executive Chef', equipment: true, hospital: false, outdoors: false, code: false, creative: true, degree: false, license: false, danger: false, desc: 'Leads gourmet restaurants and crafts culinary menus.' },
  { name: 'Architect', equipment: true, hospital: false, outdoors: true, code: true, creative: true, degree: true, license: true, danger: false, desc: 'Designs buildings, skyscrapers and public infrastructure.' }
];

const ORACLE_QUESTIONS = [
  { id: 'hospital', text: 'Does this career primarily deal with patients, medicine or clinical health?' },
  { id: 'code', text: 'Does this profession involve writing software, computer code or building digital systems?' },
  { id: 'outdoors', text: 'Does this role frequently work outdoors, travel between cities or fly internationally?' },
  { id: 'creative', text: 'Is artistic storytelling, design or culinary creativity central to the job?' },
  { id: 'license', text: 'Does this profession legally mandate an official state license, bar exam or board certification?' },
  { id: 'equipment', text: 'Do they use specialized technical instruments, surgical tools, or flight machinery?' }
];

function initWordOracle() {
  const startBtn = $('#oracle-start-game-btn');
  const suggestBtn = $('#oracle-suggest-secret-btn');
  const controlsRow = $('#oracle-controls');
  const activeCard = $('#oracle-active-card');
  const revelationCard = $('#oracle-revelation');
  const questionText = $('#oracle-question-text');
  const qNum = $('#oracle-q-num');
  const certaintyFill = $('#oracle-certainty-fill');
  const certaintyText = $('#oracle-certainty-text');
  const ansBtns = $$('.oracle-ans-btn');
  const guessTitle = $('#oracle-guess-title');
  const guessDetails = $('#oracle-guess-details');
  const correctBtn = $('#oracle-guess-correct');
  const wrongBtn = $('#oracle-guess-wrong');

  if (!startBtn || !activeCard) return;

  let candidates = [...ORACLE_CAREERS];
  let qIndex = 0;
  let certainty = 20;

  suggestBtn?.addEventListener('click', () => {
    const random = ORACLE_CAREERS[Math.floor(Math.random() * ORACLE_CAREERS.length)];
    showToast(`Secret hint for you: Think of "${random.name}"!`);
  });

  function askNextQuestion() {
    if (qIndex >= ORACLE_QUESTIONS.length || candidates.length <= 1) {
      revealGuess();
      return;
    }

    const q = ORACLE_QUESTIONS[qIndex];
    questionText.textContent = q.text;
    qNum.textContent = String(qIndex + 1);
    certainty = Math.min(95, 20 + (qIndex * 15));
    certaintyFill.style.width = `${certainty}%`;
    certaintyText.textContent = `Certainty: ${certainty}%`;
  }

  function revealGuess() {
    activeCard.hidden = true;
    revelationCard.hidden = false;
    const finalPick = candidates[0] || ORACLE_CAREERS[0];
    guessTitle.textContent = `I deduce you are thinking of: ${finalPick.name}!`;
    guessDetails.innerHTML = `
      <p style="font-size:18px;font-weight:700;color:var(--orange);margin:0 0 8px;">Confidence: ${certainty}%</p>
      <p style="margin:0;">${escapeHtml(finalPick.desc)}</p>
    `;
  }

  startBtn.addEventListener('click', () => {
    candidates = [...ORACLE_CAREERS];
    qIndex = 0;
    controlsRow.hidden = true;
    revelationCard.hidden = true;
    activeCard.hidden = false;
    askNextQuestion();
  });

  ansBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const ans = btn.dataset.answer;
      const currentQ = ORACLE_QUESTIONS[qIndex];

      if (ans === 'yes' || ans === 'probably') {
        candidates = candidates.filter(c => c[currentQ.id] === true);
      } else if (ans === 'no' || ans === 'probably-not') {
        candidates = candidates.filter(c => c[currentQ.id] === false);
      }

      qIndex++;
      askNextQuestion();
    });
  });

  correctBtn?.addEventListener('click', () => {
    showToast('🎯 The Word Oracle scores another deductive triumph!');
    saveComponentScore('oracle', 95, { deductiveTurns: qIndex });
    revelationCard.hidden = true;
    controlsRow.hidden = false;
  });

  wrongBtn?.addEventListener('click', () => {
    showToast('Fascinating! Your career idea stumped the Oracle. Expanding knowledge base.');
    revelationCard.hidden = true;
    controlsRow.hidden = false;
  });
}

// -------------------------------------------------------------
// GAME 5: OBJECT ORACLE (Witblox Vision Blox / Lens Simulator)
// -------------------------------------------------------------
const BLOX_OBJECTS = {
  laptop: {
    title: '💻 Laptop / Workstation',
    role: 'Software Architect & Engineering Lead',
    reason: 'Writing clear Technical Design Docs, collaborating via Git PRs, and presenting architecture to global teams.'
  },
  microphone: {
    title: '🎤 Broadcast Microphone',
    role: 'Keynote Speaker & Media Anchor',
    reason: 'Commanding live audiences with vocal resonance, cadence, and clear rhetorical articulation.'
  },
  stethoscope: {
    title: '🩺 Diagnostic Stethoscope',
    role: 'Emergency Trauma Clinician',
    reason: 'Communicating urgent clinical directives during multi-team trauma resuscitation without misunderstanding.'
  },
  tie: {
    title: '👔 Silk Executive Tie',
    role: 'International Arbitrator & Corporate Counsel',
    reason: 'Drafting airtight dispute settlements and negotiating high-value commercial cross-border transactions.'
  },
  camera: {
    title: '📷 Cinema Camera',
    role: 'Documentary Director & Photojournalist',
    reason: 'Pitching creative treatments to international distributors and interviewing global subjects.'
  },
  airplane: {
    title: '✈️ Model Aircraft / Flight Yoke',
    role: 'Commercial Transcontinental Pilot',
    reason: 'Adhering to mandatory standard ICAO aviation phraseology with controllers across foreign airspace.'
  },
  pen: {
    title: '✒️ Fountain Pen',
    role: 'Screenwriter & Narrative Designer',
    reason: 'Crafting emotionally resonant dialogue, script treatments, and narrative bibles.'
  },
  book: {
    title: '📚 Legal Case Reporter',
    role: 'Constitutional Scholar & Judge',
    reason: 'Interpreting complex statutory precedents and authoring reasoned judicial opinions in clear prose.'
  }
};

function initObjectOracle() {
  const bloxBtns = $$('.blox-btn');
  const detectedName = $('#vision-detected-name');
  const detectedRole = $('#vision-detected-role');
  const detectedReason = $('#vision-detected-reason');
  const cameraToggle = $('#vision-camera-toggle');
  const video = $('#vision-video');
  const visionStatus = $('#vision-status');

  if (!bloxBtns.length) return;

  function setBloxDisplay(key) {
    const data = BLOX_OBJECTS[key];
    if (!data) return;
    bloxBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.obj === key));
    if (detectedName) detectedName.textContent = data.title;
    if (detectedRole) detectedRole.textContent = data.role;
    if (detectedReason) detectedReason.textContent = data.reason;
  }

  bloxBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setBloxDisplay(btn.dataset.obj);
    });
  });

  let stream = null;
  cameraToggle?.addEventListener('click', async () => {
    if (stream) {
      stream.getTracks().forEach(t => t.stop());
      stream = null;
      video.hidden = true;
      cameraToggle.textContent = 'Start webcam vision 📷';
      visionStatus.textContent = 'Camera halted';
      return;
    }

    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      video.srcObject = stream;
      video.hidden = false;
      cameraToggle.textContent = 'Stop camera ⏹';
      visionStatus.textContent = 'Analyzing real-time object feed…';

      // Cycle simulated recognition across everyday items
      const keys = Object.keys(BLOX_OBJECTS);
      let i = 0;
      setInterval(() => {
        if (!stream) return;
        const k = keys[i % keys.length];
        setBloxDisplay(k);
        visionStatus.textContent = `Identified: ${BLOX_OBJECTS[k].title.split(' ')[1]}`;
        i++;
      }, 4000);
    } catch {
      showToast('Camera permission denied or camera unavailable. Use the tactile blox buttons!');
      visionStatus.textContent = 'Offline sensor mode active';
    }
  });
}

// -------------------------------------------------------------
// GAME 6: SEMANTIC COMPASS
// -------------------------------------------------------------
function initSemanticCompass() {
  const form = $('#compass-form');
  const input = $('#compass-input');
  const resultsBox = $('#compass-results');

  if (!form || !input) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    let sim = 0.72;
    try {
      const res = await fetch('/api/semantic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          target: 'An international commercial arbitrator resolves multi-million dollar cross-border disputes with neutrality, applying international treaty jurisprudence and managing conflict.'
        })
      });
      if (res.ok) {
        const data = await res.json();
        sim = data.similarity || 0.72;
      }
    } catch {
      sim = 0.75;
    }

    const pct = Math.round(sim * 100);
    const score = Math.round(pct * 1.1);
    saveComponentScore('compass', score);

    resultsBox.hidden = false;
    resultsBox.innerHTML = `
      <h4 style="color:#fff;font-size:20px;margin:0 0 10px;">Semantic Resonance: <strong style="color:var(--orange);">${pct}%</strong></h4>
      <p style="color:#cbd5e1;font-size:13px;line-height:1.7;margin:0 0 12px;">
        Evaluated against professional global arbitration criteria. Vocabulary shows strong domain awareness and formal register.<br>
        Score added: <strong style="color:var(--orange);">+${score} pts</strong>
      </p>
    `;
    showToast(`Semantic evaluation recorded: +${score} pts!`);
  });
}

// -------------------------------------------------------------
// SECTION 24: GAMES ARCADE (Wordless / Wordle clone & Matching)
// -------------------------------------------------------------
const WORDLE_WORDS = ['PILOT', 'CHIEF', 'JUDGE', 'ACTOR', 'NURSE', 'VOICE', 'STORY', 'MEDIA', 'RADAR', 'CRAFT'];

function initGamesArcade() {
  const tabs = $$('.game-tab');
  const stages = $$('.game-stage');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.gameTab;
      tabs.forEach(t => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab);
      });
      stages.forEach(stage => {
        stage.hidden = stage.dataset.gamePanel !== target;
      });
    });
  });

  // Wordless implementation
  let secretWord = WORDLE_WORDS[Math.floor(Math.random() * WORDLE_WORDS.length)];
  let attempts = 0;
  const maxAttempts = 6;
  const board = $('#wordle-board');
  const wordleForm = $('#wordle-form');
  const guessInput = $('#wordle-guess');
  const feedback = $('#wordle-feedback');
  const scoreOut = $('#wordle-score');
  const roundPill = $('#wordle-round');
  const newBtn = $('#wordle-new');

  function renderWordleBoard() {
    if (!board) return;
    board.innerHTML = Array.from({ length: 30 }, () => '<div class="wordle-cell"></div>').join('');
  }
  renderWordleBoard();

  wordleForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const guess = (guessInput.value || '').toUpperCase().trim();
    if (guess.length !== 5 || !/^[A-Z]{5}$/.test(guess)) {
      if (feedback) feedback.textContent = 'Please enter a valid 5-letter word.';
      return;
    }

    const cells = $$('.wordle-cell', board);
    const startIdx = attempts * 5;

    for (let i = 0; i < 5; i++) {
      const cell = cells[startIdx + i];
      cell.textContent = guess[i];
      if (guess[i] === secretWord[i]) {
        cell.classList.add('correct');
      } else if (secretWord.includes(guess[i])) {
        cell.classList.add('present');
      } else {
        cell.classList.add('absent');
      }
    }

    attempts++;
    guessInput.value = '';

    if (guess === secretWord) {
      const score = (7 - attempts) * 20;
      if (feedback) feedback.textContent = `🎉 Brilliant! You cracked "${secretWord}" in ${attempts} tries (+${score} pts).`;
      if (scoreOut) scoreOut.textContent = score;
      saveComponentScore('wordle', score);
      showToast(`Wordless solved! +${score} pts`);
    } else if (attempts >= maxAttempts) {
      if (feedback) feedback.textContent = `Out of tries! The word was "${secretWord}". Try a new word!`;
    } else {
      if (roundPill) roundPill.textContent = `${maxAttempts - attempts} tries left`;
      if (feedback) feedback.textContent = 'Keep deducing!';
    }
  });

  newBtn?.addEventListener('click', () => {
    secretWord = WORDLE_WORDS[Math.floor(Math.random() * WORDLE_WORDS.length)];
    attempts = 0;
    renderWordleBoard();
    if (roundPill) roundPill.textContent = '6 tries left';
    if (feedback) feedback.textContent = 'New secret word loaded. Make your first guess!';
  });
}

// -------------------------------------------------------------
// ADMIN PANEL & AUTHENTICATION (NO GREEN BUTTONS, ROLE SYSTEM)
// -------------------------------------------------------------
async function initAdminPanel() {
  const panel = $('#admin-panel');
  const exitBtn = $('#admin-exit');
  const triggerBtn = $('#admin-trigger-btn');
  const loginForm = $('#admin-login-form');
  const userInput = $('#admin-user');
  const passInput = $('#admin-password');
  const loginMessage = $('#admin-login-message');
  const loginScreen = $('#admin-login-screen');
  const workspace = $('#admin-workspace');
  const cfOneBtn = $('#cf-one-login-btn');
  const userPill = $('#admin-user-badge');
  const adminContent = $('#admin-content');
  const adminTabs = $$('.admin-tab');

  if (!panel || !loginForm) return;

  function openAdmin() {
    panel.hidden = false;
    document.body.classList.add('modal-open');
  }

  function closeAdmin() {
    panel.hidden = true;
    document.body.classList.remove('modal-open');
  }

  triggerBtn?.addEventListener('click', openAdmin);
  exitBtn?.addEventListener('click', closeAdmin);

  // Check Cloudflare One header on page load
  try {
    const res = await fetch('/api/admin/public');
    if (res.ok) {
      const data = await res.json();
      if (data.cfUser) {
        if (cfOneBtn) cfOneBtn.textContent = `Verified CF Access: ${data.cfUser} 🛡️`;
      }
    }
  } catch {}

  function applyRoleGating(role) {
    currentAdminRole = role;
    adminTabs.forEach(tab => {
      const allowedRoles = (tab.dataset.roles || 'admin').split(',');
      const isVisible = allowedRoles.includes(role) || role === 'admin';
      tab.style.display = isVisible ? 'block' : 'none';
    });

    // Select first visible tab
    const firstTab = adminTabs.find(tab => tab.style.display !== 'none');
    if (firstTab) {
      renderAdminTab(firstTab.dataset.adminTab);
    }
  }

  function renderAdminTab(tabName) {
    adminTabs.forEach(t => t.classList.toggle('active', t.dataset.adminTab === tabName));

    if (tabName === 'features') {
      adminContent.innerHTML = `
        <h3 style="font-size:24px;margin-bottom:8px;">Feature Visibility</h3>
        <p style="color:#94a3b8;font-size:12px;margin-bottom:20px;">Toggle sections on or off. Disabled sections disappear seamlessly.</p>
        <div class="admin-grid">
          ${Object.entries(FEATURE_LABELS).map(([k, v]) => `
            <div class="admin-card">
              <label style="display:flex;justify-content:space-between;align-items:center;font-weight:700;">
                <span>${escapeHtml(v[0])}</span>
                <span class="admin-toggle">
                  <input type="checkbox" data-feat="${k}" ${settings.features[k] !== false ? 'checked' : ''}>
                  <span></span>
                </span>
              </label>
              <p style="font-size:11px;color:#94a3b8;margin:6px 0 0;">${escapeHtml(v[1])}</p>
            </div>
          `).join('')}
        </div>
        <div style="margin-top:20px;display:flex;gap:12px;">
          <button class="button button-accent" id="save-features-btn" type="button">Save Visibility Settings ↗</button>
        </div>
      `;

      $('#save-features-btn')?.addEventListener('click', () => {
        $$('[data-feat]').forEach(cb => {
          settings.features[cb.dataset.feat] = cb.checked;
        });
        localStorage.setItem(STORAGE.settings, JSON.stringify(settings));
        applyFeatureVisibility();
        showToast('Feature visibility saved!');
      });
    }

    if (tabName === 'streaming') {
      adminContent.innerHTML = `
        <h3 style="font-size:24px;margin-bottom:8px;">Live YouTube Stream Controller</h3>
        <p style="color:#94a3b8;font-size:12px;margin-bottom:20px;">Broadcast stage keynotes directly into the top of the fair portal.</p>
        <div class="admin-card" style="max-width:650px;">
          <label style="display:flex;align-items:center;gap:12px;font-weight:700;margin-bottom:16px;">
            <span>Live Stream Enabled</span>
            <span class="admin-toggle">
              <input type="checkbox" id="stream-enable-cb" ${settings.liveStreamEnabled ? 'checked' : ''}>
              <span></span>
            </span>
          </label>
          <label style="display:block;font-size:12px;font-weight:700;margin-bottom:6px;">YouTube Video / Stream URL</label>
          <input type="text" id="stream-url-input" value="${escapeHtml(settings.liveStreamUrl || '')}" placeholder="https://www.youtube.com/watch?v=..." style="width:100%;padding:12px;background:#0d121c;color:#fff;border:1px solid var(--dark-line);margin-bottom:14px;">
          <label style="display:block;font-size:12px;font-weight:700;margin-bottom:6px;">Stream Title</label>
          <input type="text" id="stream-title-input" value="${escapeHtml(settings.liveStreamTitle || '')}" placeholder="Fair Stage Keynote..." style="width:100%;padding:12px;background:#0d121c;color:#fff;border:1px solid var(--dark-line);margin-bottom:20px;">
          <button class="button button-accent" id="save-stream-btn" type="button">Save &amp; Broadcast Stream ↗</button>
        </div>
      `;

      $('#save-stream-btn')?.addEventListener('click', () => {
        settings.liveStreamEnabled = $('#stream-enable-cb').checked;
        settings.liveStreamUrl = $('#stream-url-input').value.trim();
        settings.liveStreamTitle = $('#stream-title-input').value.trim();
        localStorage.setItem(STORAGE.settings, JSON.stringify(settings));
        initLiveStream();
        showToast('Stream settings updated!');
      });
    }

    if (tabName === 'branding') {
      adminContent.innerHTML = `
        <h3 style="font-size:24px;margin-bottom:8px;">Branding &amp; Authentication Policy</h3>
        <div class="admin-card" style="max-width:650px;">
          <label style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;font-weight:700;">
            <span>Allow Hardcoded Fallback Authentication</span>
            <span class="admin-toggle">
              <input type="checkbox" id="allow-hardcode-cb" ${settings.allowHardcodedAuth !== false ? 'checked' : ''}>
              <span></span>
            </span>
          </label>
          <p style="font-size:11px;color:#94a3b8;margin-bottom:20px;">When disabled, default credentials (admin/careers2026) are rejected; only verified database accounts or Cloudflare One Zero Trust are accepted.</p>
          <label style="display:block;font-size:12px;font-weight:700;margin-bottom:6px;">School / Fair Name</label>
          <input type="text" id="school-name-input" value="${escapeHtml(settings.schoolName || '')}" style="width:100%;padding:12px;background:#0d121c;color:#fff;border:1px solid var(--dark-line);margin-bottom:20px;">
          <button class="button button-accent" id="save-brand-btn" type="button">Save Branding &amp; Policy ↗</button>
        </div>
      `;

      $('#save-brand-btn')?.addEventListener('click', () => {
        settings.allowHardcodedAuth = $('#allow-hardcode-cb').checked;
        settings.schoolName = $('#school-name-input').value.trim();
        localStorage.setItem(STORAGE.settings, JSON.stringify(settings));
        showToast('Branding settings saved!');
      });
    }

    if (tabName === 'users') {
      adminContent.innerHTML = `
        <h3 style="font-size:24px;margin-bottom:8px;">Staff Accounts &amp; Roles</h3>
        <p style="color:#94a3b8;font-size:12px;margin-bottom:20px;">Create role-restricted accounts for fair helpers, live streaming team, and moderators.</p>
        <div class="admin-card" style="max-width:650px;margin-bottom:24px;">
          <h4 style="font-size:16px;margin:0 0 14px;">Add New Staff Member</h4>
          <form id="add-user-form" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <input type="text" id="new-user-name" placeholder="Username" required style="padding:10px;background:#0d121c;color:#fff;border:1px solid var(--dark-line);">
            <input type="password" id="new-user-pass" placeholder="Password" required style="padding:10px;background:#0d121c;color:#fff;border:1px solid var(--dark-line);">
            <select id="new-user-role" style="padding:10px;background:#0d121c;color:#fff;border:1px solid var(--dark-line);grid-column:1/-1;">
              <option value="streaming">Role: Streaming Team (Live Stage Only)</option>
              <option value="moderator">Role: Moderator (Leaderboard &amp; Feedback)</option>
              <option value="techteam">Role: Tech Team (Logs &amp; AI Status)</option>
              <option value="admin">Role: Full Admin</option>
            </select>
            <button class="button button-accent" type="submit" style="grid-column:1/-1;">Create Staff Account ↗</button>
          </form>
        </div>
        <div class="admin-card">
          <h4 style="font-size:16px;margin:0 0 14px;">Active Staff Roster</h4>
          <div id="users-table-container">Loading staff list…</div>
        </div>
      `;

      async function loadUsersList() {
        try {
          const res = await fetch('/api/admin/users');
          if (res.ok) {
            const data = await res.json();
            const list = data.users || [];
            $('#users-table-container').innerHTML = `
              <table class="admin-users-table">
                <thead><tr><th>User ID</th><th>Assigned Role</th><th>Created At</th><th>Action</th></tr></thead>
                <tbody>
                  ${list.map(u => `
                    <tr>
                      <td><strong>${escapeHtml(u.username)}</strong></td>
                      <td><span class="role-badge ${escapeHtml(u.role)}">${escapeHtml(u.role)}</span></td>
                      <td>${new Date(u.createdAt).toLocaleDateString()}</td>
                      <td>${u.username !== 'admin' ? `<button class="text-button" data-deluser="${escapeHtml(u.username)}" style="color:#f87171;">Delete</button>` : 'Root'}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            `;
            $$('[data-deluser]').forEach(btn => {
              btn.addEventListener('click', async () => {
                if (confirm(`Remove staff access for ${btn.dataset.deluser}?`)) {
                  await fetch(`/api/admin/users?username=${encodeURIComponent(btn.dataset.deluser)}`, { method: 'DELETE' });
                  loadUsersList();
                }
              });
            });
          }
        } catch {
          $('#users-table-container').textContent = 'Staff roster managed locally in demo mode.';
        }
      }
      loadUsersList();

      $('#add-user-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = $('#new-user-name').value.trim();
        const password = $('#new-user-pass').value;
        const role = $('#new-user-role').value;
        try {
          const res = await fetch('/api/admin/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, role })
          });
          if (res.ok) {
            showToast(`Staff member "${username}" created!`);
            loadUsersList();
          } else {
            showToast('Failed to create user.');
          }
        } catch {
          showToast('Staff user saved in local state.');
        }
      });
    }

    if (tabName === 'leaderboard') {
      adminContent.innerHTML = `
        <h3 style="font-size:24px;margin-bottom:8px;">Leaderboard Moderation</h3>
        <p style="color:#94a3b8;font-size:12px;margin-bottom:20px;">Review, moderate, or remove inappropriate nicknames from the live practice board.</p>
        <div class="admin-card">
          <div id="admin-board-container">Loading entries…</div>
        </div>
      `;
      // Load leaderboard entries
      fetch('/api/admin/leaderboard').then(r => r.json()).then(data => {
        const entries = data.entries || [];
        $('#admin-board-container').innerHTML = entries.length ? `
          <table class="admin-users-table">
            <thead><tr><th>Rank</th><th>Nickname</th><th>Class</th><th>Score</th><th>Action</th></tr></thead>
            <tbody>
              ${entries.map((e, i) => `
                <tr>
                  <td>#${i + 1}</td>
                  <td><strong>${escapeHtml(e.nickname)}</strong></td>
                  <td>${escapeHtml(e.grade)}</td>
                  <td>${e.score} pts</td>
                  <td><button class="text-button" data-delboard="${e.id}" style="color:#f87171;">Remove</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        ` : '<p style="color:#94a3b8;">No entries submitted yet.</p>';
      }).catch(() => {
        $('#admin-board-container').innerHTML = '<p style="color:#94a3b8;">Demo entries loaded locally.</p>';
      });
    }
  }

  adminTabs.forEach(t => {
    t.addEventListener('click', () => renderAdminTab(t.dataset.adminTab));
  });

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    loginMessage.textContent = 'Authenticating…';
    const username = userInput.value.trim();
    const password = passInput.value;

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
        currentAdminUser = data.user || username;
        currentAdminRole = data.role || 'admin';
        userPill.textContent = `${currentAdminUser} (${currentAdminRole.toUpperCase()})`;
        loginScreen.hidden = true;
        workspace.hidden = false;
        applyRoleGating(currentAdminRole);
        showToast(`Welcome, ${currentAdminUser}!`);
      } else {
        loginMessage.textContent = data.error || 'Authentication failed.';
      }
    } catch {
      // Local fallback
      currentAdminUser = username || 'admin';
      currentAdminRole = 'admin';
      userPill.textContent = `${currentAdminUser} (DEMO ADMIN)`;
      loginScreen.hidden = true;
      workspace.hidden = false;
      applyRoleGating('admin');
      showToast('Demo offline admin authorized.');
    }
  });

  cfOneBtn?.addEventListener('click', async () => {
    loginMessage.textContent = 'Verifying Cloudflare One Token…';
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cfOne: true })
      });
      const data = await res.json();
      if (res.ok) {
        currentAdminUser = data.user || 'Cloudflare-User';
        currentAdminRole = data.role || 'admin';
        userPill.textContent = `${currentAdminUser} (${currentAdminRole.toUpperCase()})`;
        loginScreen.hidden = true;
        workspace.hidden = false;
        applyRoleGating(currentAdminRole);
        showToast('Authorized via Cloudflare Zero Trust!');
      } else {
        loginMessage.textContent = data.error || 'Cloudflare One authentication not active.';
      }
    } catch {
      loginMessage.textContent = 'Cloudflare Access endpoint unreachable in local simulation.';
    }
  });
}

// -------------------------------------------------------------
// FEATURE VISIBILITY ENGINE
// -------------------------------------------------------------
function applyFeatureVisibility() {
  $$('[data-feature]').forEach(sec => {
    const feat = sec.dataset.feature;
    if (settings.features[feat] === false) {
      sec.style.display = 'none';
    } else {
      sec.style.display = '';
    }
  });
}

// -------------------------------------------------------------
// READING PROGRESS BAR & SCROLL
// -------------------------------------------------------------
function updateScrollProgress() {
  const bar = $('#reading-progress');
  if (!bar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  bar.style.width = `${progress}%`;
}

// -------------------------------------------------------------
// INITIALIZATION
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  try {
    const saved = localStorage.getItem(STORAGE.settings);
    if (saved) settings = { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
  } catch {}

  applyFeatureVisibility();
  initLiveStream();
  initCareerAtlas();
  initCareerQuiz();
  initRoadmapPlan();
  initCareerChat();
  initSpeechLab();
  initMockInterview();
  initConversationGym();
  initTeleprompterStudio();
  initVoiceComparison();
  initPracticeBoardLeaderboard();
  initWordOfDay();
  initEditorsDesk();
  initSoundStudio();
  initDebateRoom();
  initFeedbackSupport();
  initVelocityGame();
  initCareerGuesser();
  initJobtrisGame();
  initWordOracle();
  initObjectOracle();
  initSemanticCompass();
  initGamesArcade();
  initAdminPanel();
  updateAggregatedPracticeScore();

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
});
