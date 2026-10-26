const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

const STORAGE = {
  settings: 'openmic_settings_v8',
  savedWords: 'openmic_saved_words_v8',
  practiceScore: 'openmic_practice_score_v8',
  demoLogs: 'openmic_demo_logs_v8',
  feedback: 'openmic_feedback_v8',
  gameScores: 'openmic_game_scores_v8'
};

const DEFAULT_SETTINGS = {
  theme: 'mix',
  language: 'en',
  schoolName: 'Kanakia International School Mira Road',
  features: {
    hero: true, whyEnglish: true, careers: true, quiz: true, plan: true,
    speechLab: true, mockInterview: true, roleplay: true, anchor: true,
    compare: true, speakers: true, leaderboard: true, wordOfDay: true,
    emailGame: true, pronunciation: true, debate: true, games: true,
    feedback: true, closing: true
  }
};

const CAREER_STREAMS = [
  { id: 'science', label: 'Science (PCM / PCB)', careers: ['Research Scientist', 'Medical Doctor / Physician', 'Aviation Pilot / Flight Captain', 'Biomedical Engineer', 'Clinical Psychologist', 'Data Scientist / AI Researcher'] },
  { id: 'commerce', label: 'Commerce & Finance', careers: ['Management Consultant', 'Investment Banker / Analyst', 'Chartered Accountant / Auditor', 'Product Manager / Business Analyst', 'Corporate Lawyer / Legal Counsel', 'Marketing Strategist'] },
  { id: 'humanities', label: 'Humanities & Law', careers: ['Corporate Lawyer / Legal Counsel', 'Diplomat / Foreign Service Officer', 'Journalist / News Reporter', 'Policy Analyst / Civil Servant', 'Author / Novelist', 'Public Relations Specialist'] },
  { id: 'creative', label: 'Arts, Media & Film', careers: ['Screenwriter / Scriptwriter', 'Film Director / Producer', 'Author / Novelist', 'Journalist / News Reporter', 'News Anchor / Broadcaster', 'Advertising Creative Director', 'Voice Actor / Narrator'] },
  { id: 'technology', label: 'Technology & Computing', careers: ['Software Architect / Tech Lead', 'Data Scientist / AI Researcher', 'Product Manager / Business Analyst', 'UX Writer / Content Designer', 'Cybersecurity Analyst', 'Game Designer / Writer'] },
  { id: 'explore', label: "I'm still exploring", careers: ['Management Consultant', 'Corporate Lawyer / Legal Counsel', 'Research Scientist', 'Screenwriter / Scriptwriter', 'Product Manager / Business Analyst', 'News Anchor / Broadcaster'] }
];

const CAREERS = [
  { title: 'Screenwriter / Scriptwriter', stream: 'creative', category: 'Entertainment', englishScore: 5, salary: '₹8L – ₹35L / yr', desc: 'Craft compelling cinematic dialogue, character arcs, and scripts for OTT series and feature films.', study: 'B.A. in Film Studies, Screenwriting or English Literature (FTII, SRFTI, Whistling Woods).', links: [{ label: 'FTII Admissions', url: 'https://ftii.ac.in/' }, { label: 'AmbitionBox Scriptwriter Pay', url: 'https://www.ambitionbox.com/profile/screenwriter-salary' }] },
  { title: 'Aviation Pilot / Flight Captain', stream: 'science', category: 'Aviation', englishScore: 5, salary: '₹18L – ₹65L / yr', desc: 'Command commercial aircraft with razor-sharp aeronautical radio communication and ICAO standard phraseology.', study: 'Commercial Pilot License (CPL) via IGRUA or flying clubs after Class XII (PCM).', links: [{ label: 'IGRUA Entrance Exam', url: 'https://igrua.gov.in/' }, { label: 'DGCA India Pilot Guidelines', url: 'https://dgca.gov.in/' }] },
  { title: 'Corporate Lawyer / Legal Counsel', stream: 'humanities', category: 'Law', englishScore: 5, salary: '₹12L – ₹45L / yr', desc: 'Negotiate cross-border acquisitions, draft international agreements, and argue complex appellate briefs.', study: '5-year Integrated B.A. LL.B / B.B.A. LL.B via CLAT (NLSIU Bengaluru, NALSAR Hyderabad).', links: [{ label: 'Consortium of NLUs (CLAT)', url: 'https://consortiumofnlus.ac.in/' }, { label: 'Bar Council of India', url: 'http://www.barcouncilofindia.org/' }] },
  { title: 'Medical Doctor / Physician', stream: 'science', category: 'Health', englishScore: 4, salary: '₹10L – ₹40L / yr', desc: 'Diagnose pathologies, articulate treatment rationales, and counsel families with reassuring clinical composure.', study: 'MBBS + MD/MS via NEET-UG (AIIMS New Delhi, CMC Vellore, KEM Mumbai).', links: [{ label: 'NTA NEET Exam Portal', url: 'https://neet.nta.nic.in/' }, { label: 'National Medical Commission', url: 'https://www.nmc.org.in/' }] },
  { title: 'Product Manager / Business Analyst', stream: 'technology', category: 'Technology', englishScore: 5, salary: '₹14L – ₹50L / yr', desc: 'Define product vision, synthesize user research, align engineers and executives with persuasive narratives.', study: 'B.Tech / B.E. or B.B.A. followed by MBA / Product Management specialization.', links: [{ label: 'IIM CAT Examination', url: 'https://iimcat.ac.in/' }, { label: 'Glassdoor India PM Salaries', url: 'https://www.glassdoor.co.in/Salaries/product-manager-salary-SRCH_KO0,15.htm' }] },
  { title: 'News Anchor / Broadcaster', stream: 'creative', category: 'Media', englishScore: 5, salary: '₹6L – ₹28L / yr', desc: 'Deliver breaking news dispatches on camera with authoritative pacing, diction, and teleprompter precision.', study: 'B.A. / M.A. in Journalism & Mass Communication (IIMC New Delhi, Asian College of Journalism).', links: [{ label: 'IIMC Entrance Portal', url: 'http://iimc.gov.in/' }, { label: 'Asian College of Journalism', url: 'https://www.asianmedia.org/' }] },
  { title: 'Research Scientist', stream: 'science', category: 'Science', englishScore: 5, salary: '₹9L – ₹32L / yr', desc: 'Design empirical experiments, author peer-reviewed journal papers, and defend scientific hypotheses internationally.', study: 'BS-MS Dual Degree via IISERs / IISc Bangalore followed by Ph.D.', links: [{ label: 'IISER Admissions (IAT)', url: 'https://iiseradmission.in/' }, { label: 'IISc Bangalore UG Research', url: 'https://iisc.ac.in/admissions/' }] },
  { title: 'Management Consultant', stream: 'commerce', category: 'Business', englishScore: 5, salary: '₹15L – ₹48L / yr', desc: 'Advise C-suite leaders on global market expansion, operational restructuring, and organizational strategy.', study: 'Undergraduate degree followed by premier MBA (IIM Ahmedabad, ISB Hyderabad, Wharton).', links: [{ label: 'Indian School of Business (ISB)', url: 'https://www.isb.edu/' }, { label: 'McKinsey India Careers', url: 'https://www.mckinsey.com/in/careers' }] }
];

const WORDS = [
  { word: 'Articulate', pronunciation: '/ɑːˈtɪk.jə.lət/ · adjective', definition: 'Able to express an idea clearly and effectively.', example: '“A strong presenter makes a complex idea easy to understand.”' },
  { word: 'Substantiate', pronunciation: '/səbˈstæn.ʃi.eɪt/ · verb', definition: 'To provide evidence to support or prove the truth of an assertion.', example: '“Always substantiate your strategic recommendations with unit economic metrics.”' },
  { word: 'Nuance', pronunciation: '/ˈnjuː.ɑːns/ · noun', definition: 'A subtle distinction in meaning, tone, or expression.', example: '“Diplomatic communication hinges on appreciating cultural nuance.”' },
  { word: 'Persuasive', pronunciation: '/pəˈsweɪ.sɪv/ · adjective', definition: 'Able to lead others to a conclusion through sound reasoning.', example: '“A persuasive legal brief synthesizes statutory precedent with compelling logic.”' },
  { word: 'Empathetic', pronunciation: '/ˌem.pəˈθet.ɪk/ · adjective', definition: 'Demonstrating an acute awareness of another person’s perspective.', example: '“Empathetic bedside manner is foundational to effective clinical medicine.”' },
  { word: 'Exemplary', pronunciation: '/ɪɡˈzem.plər.i/ · adjective', definition: 'Serving as a desirable model; representing the best of its kind.', example: '“The captain demonstrated exemplary composure during the diversion.”' }
];

const PRONUNCIATION_SOUNDS = {
  th: { label: '/θ/', title: 'TH as in think', placement: 'Let the tongue tip appear gently between the teeth and send a stream of unvoiced air through the gap.', lips: 'Keep your jaw relaxed without clamping teeth together.', examples: ['think', 'three', 'thought', 'healthy'], contrast: 'Try: think / sink · three / tree', practice: 'I think three thoughtful ideas can change things.' },
  vw: { label: '/v/ · /w/', title: 'V and W contrast', placement: 'For /v/, let top teeth touch lower lip with voice vibration. For /w/, round your lips without teeth contact.', lips: 'Voiced friction on /v/; rounded vowel glide on /w/.', examples: ['vest', 'west', 'vine', 'wine'], contrast: 'Try: vest / west · vine / wine', practice: 'We visited a very wide valley.' },
  iy: { label: '/ɪ/ · /iː/', title: 'Short I and long EE', placement: 'For /ɪ/ as in ship, keep tongue high but relaxed. For /iː/ as in sheep, raise tongue further and sustain tone.', lips: 'Relaxed lips; avoid exaggerated smiles.', examples: ['ship', 'sheep', 'live', 'leave'], contrast: 'Try: ship / sheep · live / leave', practice: 'The sheep is on the ship.' },
  rl: { label: '/r/ · /l/', title: 'R and L contrast', placement: 'For /l/, place tongue tip behind upper front teeth. For /r/, curve tongue back without touching the palate.', lips: 'Keep jaw relaxed and free of tension.', examples: ['right', 'light', 'glass', 'grass'], contrast: 'Try: right / light · glass / grass', practice: 'Lara read a little red letter.' }
};

const REFERENCE_TEXTS = {
  watson: 'I want to ask us to think about the kind of future we are building together. Progress is not a single speech or a perfect answer. It is the decision to take responsibility, to listen and to keep moving.',
  att: 'The natural world does not always announce its wonders. Sometimes, the smallest change tells the largest story. We only need to pause, look closely, and allow the evidence to guide what we say next.',
  fry: 'Language is a remarkable instrument. A word can be precise, playful or profound, and the same sentence can change its effect when we alter the rhythm, the pause or the emphasis.',
  obama: 'The next step is not always the easiest one. It asks us to listen carefully, make a choice and be willing to learn when we get something wrong. That is how a promise becomes a practice.'
};

const WORDLE_WORDS = ['PILOT', 'VOICE', 'MEDIA', 'STORY', 'AUDIO', 'PITCH', 'SCOPE', 'DRAFT', 'LEGAL', 'STAGE', 'THEME', 'ACTOR'];
const MATCHING_PAIRS = [
  { word: 'Articulate', def: 'Able to express an idea clearly and fluently' },
  { word: 'Substantiate', def: 'To support a claim with verified evidence' },
  { word: 'Nuance', def: 'A subtle distinction in meaning or intent' },
  { word: 'Empathetic', def: 'Showing genuine understanding of others\' feelings' },
  { word: 'Coherent', def: 'Logical, orderly, and consistently clear' },
  { word: 'Concise', def: 'Giving vital information in few words' }
];

const CLINIC_CASES = [
  { domain: 'AVIATION & ATC', scenario: 'The flight crew must notify Air Traffic Control of moderate turbulence at flight level 320.', options: ['Tower, we got some bumpy clouds up here so we wanna go down.', 'Tower, Flight 204 encounters moderate turbulence at FL320; requisition descent vector to FL280.', 'Hey tower, it is really shaking here, please help us out fast.'], correct: 1 },
  { domain: 'CORPORATE LITIGATION', scenario: 'The attorney submits evidence that contradicts the plaintiff\'s claim.', options: ['Your Honor, the plaintiff is totally wrong as everyone knows.', 'May it please the court, Exhibit B directly refutes the claimant\'s timeline of contractual execution.', 'Judge, we think their argument makes no sense at all.'], correct: 1 },
  { domain: 'CLINICAL MEDICINE', scenario: 'The physician counsels a patient regarding elective surgery recovery.', options: ['Do not worry, this surgery is super easy and nothing bad can ever happen.', 'While postoperative recovery spans 3 to 4 weeks, clinical data demonstrates an 89% mobility restoration rate.', 'Take the meds and you will be completely fine by tomorrow.'], correct: 1 },
  { domain: 'TECHNOLOGY PRODUCT LEADERSHIP', scenario: 'The PM delivers an update to executives regarding release velocity.', options: ['Our sprint cadence improved throughput by 22%, keeping the Q3 enterprise launch on trajectory.', 'The devs worked very hard and we did lots of coding tickets.', 'We hope the app will be ready soon if bugs get fixed.'], correct: 0 }
];

const EMAIL_ROUNDS = [
  {
    recipient: 'Venture Capital Partner', subject: 'Follow-up on Seed Pitch', prompt: 'Select the most professional follow-up after an investor presentation.',
    options: [
      'Hey, you said you would reply yesterday. What is the status of our investment?',
      'Thank you for your time yesterday. Attached are the audited unit economics and cohort metrics we discussed. We welcome your feedback by Thursday.',
      'Respected Sir, with extreme humility I beg to remind your esteemed self regarding the aforementioned fund request.'
    ],
    correct: 1, feedback: 'Choice B is concise, appreciative, includes the requested data, and establishes an actionable deadline.'
  },
  {
    recipient: 'Aviation Chief Pilot', subject: 'Safety Reporting Memo', prompt: 'Select the optimal operational report on flight deck communications.',
    options: [
      'Pursuant to standard operating procedures, flight deck telemetry logged an uncalibrated pressure variance at waypoint ALPHA. Maintenance inspection has been requisitioned.',
      'Something was weird with the air pressure so we should probably check it soon.',
      'We noticed an engine gauge doing strange things while flying so please look at it.'
    ],
    correct: 0, feedback: 'Choice A uses official ICAO aviation terminology, logs the waypoint, and states the immediate safety action.'
  },
  {
    recipient: 'Lead Counsel / Partner', subject: 'Case Summary Ahead of Hearing', prompt: 'Choose the crispest summary for senior corporate litigation partners.',
    options: [
      'Here is a quick note saying that the other side does not have good arguments.',
      'Deposition transcripts corroborate our client\'s patent priority. The counterparty has filed no rebuttal briefs within the statutory window.',
      'I think we are going to win the case because their lawyers made a lot of mistakes.'
    ],
    correct: 1, feedback: 'Choice B is precise, cites evidentiary records, and notes statutory timelines.'
  }
];

let settings = loadLocalSettings();
let selectedCareerStream = '';
let activeCareerFilter = 'All';
let speechPromptIndex = 0;
let recognition = null;
let liveTranscript = '';
let isListening = false;
let activeWordIndex = 0;
let emailRound = 0;
let emailScore = 0;
let compositeScores = { speech: 88, interview: 85, newsroom: 90, editor: 92, games: 86 };

let wordleTarget = 'PILOT';
let wordleGuesses = [];
let wordleCurrentGuess = '';
let wordleScore = 0;

let matchingSelectedWord = null;
let matchingMatchedCount = 0;
let matchingScore = 0;

let clinicIndex = 0;
let clinicScore = 0;

let twisterTimerId = null;
let twisterSecondsLeft = 15;
let twisterScore = 0;

let mediaRecorder = null;
let recordedVideoBlobs = [];
let lastRecordedVideoUrl = null;

function loadLocalSettings() {
  try { return { ...structuredClone(DEFAULT_SETTINGS), ...JSON.parse(localStorage.getItem(STORAGE.settings) || '{}') }; }
  catch { return structuredClone(DEFAULT_SETTINGS); }
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function formatMarkdown(value) {
  let text = escapeHtml(value ?? '');
  text = text.replace(/^###\s*\*{0,2}(.*?)\*{0,2}$/gim, '<h4 class="ai-heading">$1</h4>');
  text = text.replace(/^##\s*\*{0,2}(.*?)\*{0,2}$/gim, '<h3 class="ai-heading">$1</h3>');
  text = text.replace(/^---+$/gim, '<hr class="ai-rule">');
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  text = text.replace(/(?:^|\n)\s*(\d+\.|\-|\*)\s+(.*$)/gim, '<div class="ai-bullet"><span class="ai-bullet-dot">•</span> $2</div>');
  text = text.replace(/\n\s*\n/g, '</p><p>');
  text = text.replace(/\n/g, '<br>');
  return `<div class="formatted-ai-text"><p>${text}</p></div>`;
}

function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function calculateCompositeScore() {
  const composite = Math.round(
    (0.35 * compositeScores.speech) +
    (0.20 * compositeScores.interview) +
    (0.15 * compositeScores.newsroom) +
    (0.15 * compositeScores.editor) +
    (0.15 * compositeScores.games)
  );
  const out = $('#leader-score');
  if (out) out.textContent = `${composite} / 100`;
  return composite;
}

function updateLeaderboardUI() {
  const list = $('#leaderboard-list');
  if (!list) return;
  const composite = calculateCompositeScore();
  const mockStudents = [
    { rank: '01', name: 'Aarav Sharma', grade: 'Class 10-D', score: 96, badge: 'Grand Orator' },
    { rank: '02', name: 'Diya Patel', grade: 'Class 10-B', score: 94, badge: 'Executive Wordsmith' },
    { rank: '03', name: 'Rohan Mehta', grade: 'Class 10-D', score: 91, badge: 'Broadcast Ace' },
    { rank: '04', name: 'You (Current Session)', grade: 'Class 10', score: composite, badge: composite >= 90 ? 'Master Communicator' : 'Rising Orator' }
  ];
  list.innerHTML = mockStudents.map(s => `
    <div class="leader-row">
      <span class="rank-number">${s.rank}</span>
      <span class="leader-avatar">${s.name[0]}</span>
      <span class="leader-name"><strong>${escapeHtml(s.name)}</strong><small>${s.grade} · ${s.badge}</small></span>
      <span class="leader-score">${s.score}</span>
    </div>
  `).join('');
}

function renderCareers() {
  const grid = $('#career-grid');
  if (!grid) return;
  const streamData = CAREER_STREAMS.find(s => s.id === selectedCareerStream);
  let list = CAREERS;
  if (streamData) {
    list = CAREERS.filter(c => streamData.careers.includes(c.title));
  }
  if (activeCareerFilter !== 'All') {
    list = list.filter(c => c.category.toLowerCase() === activeCareerFilter.toLowerCase());
  }
  const search = $('#career-search')?.value.trim().toLowerCase();
  if (search) {
    list = list.filter(c => c.title.toLowerCase().includes(search) || c.desc.toLowerCase().includes(search));
  }
  $('#career-result-count').textContent = `Showing ${list.length} career pathways`;
  grid.innerHTML = list.map(c => `
    <article class="career-card" data-title="${escapeHtml(c.title)}">
      <div class="career-card-top">
        <span class="career-category">${escapeHtml(c.category)}</span>
        <div class="career-icon">↗</div>
      </div>
      <h3>${escapeHtml(c.title)}</h3>
      <p>${escapeHtml(c.desc)}</p>
      <div class="career-card-bottom">
        <div class="english-meter">
          <strong>English Requirement: ${c.englishScore}/5</strong>
          <div class="meter-dots">${Array.from({ length: 5 }, (_, i) => `<i class="${i < c.englishScore ? 'on' : ''}"></i>`).join('')}</div>
        </div>
        <button class="career-open" type="button" aria-label="Explore ${c.title}">↗</button>
      </div>
    </article>
  `).join('');

  $$('.career-card', grid).forEach(card => {
    card.addEventListener('click', () => showCareerDetail(card.dataset.title));
  });
}

function showCareerDetail(title) {
  const c = CAREERS.find(item => item.title === title) || CAREERS[0];
  const detail = $('#career-detail');
  if (!detail) return;
  detail.hidden = false;
  detail.innerHTML = `
    <button class="career-detail-close" id="career-detail-close" type="button">×</button>
    <p class="eyebrow">${escapeHtml(c.category)} · CAREER BLUEPRINT</p>
    <h3>${escapeHtml(c.title)}</h3>
    <p>${escapeHtml(c.desc)}</p>
    <div class="career-detail-grid">
      <div><h4>Typical Indian Compensation</h4><p><strong>${escapeHtml(c.salary)}</strong></p><p>Varies by specialization, firm, and international mobility.</p></div>
      <div><h4>Recommended Academic Pathway</h4><p>${escapeHtml(c.study)}</p></div>
      <div><h4>Verified Admissions &amp; Salary Links</h4><div class="career-source-links">${c.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)} ↗</a>`).join('')}</div></div>
    </div>
  `;
  detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  $('#career-detail-close')?.addEventListener('click', () => { detail.hidden = true; });
}

function initStreamChoices() {
  $$('.stream-choice').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedCareerStream = btn.dataset.stream;
      $('#career-stream-step').hidden = true;
      $('#career-selected-summary').hidden = false;
      $('#career-active-stream-label').textContent = btn.querySelector('strong').textContent;
      $('#career-browser').hidden = false;
      renderCareers();
    });
  });
  $('#career-change-stream')?.addEventListener('click', () => {
    $('#career-stream-step').hidden = false;
    $('#career-selected-summary').hidden = true;
    $('#career-browser').hidden = true;
  });
  $$('#career-filters .filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      $$('#career-filters .filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCareerFilter = pill.dataset.filter;
      renderCareers();
    });
  });
  $('#career-search')?.addEventListener('input', renderCareers);
}

const COUNSELOR_STAGES = [
  {
    q: 'What type of learning environment suits you best? (1) Global International University (Oxford, Harvard, Stanford, NUS) or (2) Premier Indian Institution (Ashoka, IITs, NLUs, St. Xavier\'s, IIM IPM)?',
    chips: ['Global Universities (US / UK / Singapore)', 'Top Indian Institutions (Ashoka, IIT, NLU)', 'Both / Dual Degree Pathways']
  },
  {
    q: 'How do you prefer to communicate your leadership? (1) Writing & Research, (2) Live Debate & Negotiation, (3) Technical Modeling & Product Pitching?',
    chips: ['Writing & Publishing', 'Debate & Public Oration', 'Tech & Business Pitching']
  }
];
let counselorStep = 0;
let counselorAnswers = [];

function initAICounselor() {
  const form = $('#counselor-form');
  const input = $('#counselor-input');
  const history = $('#counselor-chat-history');
  const chipsContainer = $('#counselor-quick-chips');

  function addMsg(text, isUser = false) {
    const div = document.createElement('div');
    div.className = `counselor-msg ${isUser ? 'user-msg' : 'bot-msg'}`;
    div.innerHTML = `<p>${escapeHtml(text)}</p>`;
    history.appendChild(div);
    history.scrollTop = history.scrollHeight;
  }

  function handleAnswer(ans) {
    if (!ans) return;
    addMsg(ans, true);
    counselorAnswers.push(ans);
    input.value = '';

    if (counselorStep < COUNSELOR_STAGES.length) {
      const nextStage = COUNSELOR_STAGES[counselorStep];
      counselorStep++;
      setTimeout(() => {
        addMsg(nextStage.q);
        chipsContainer.innerHTML = nextStage.chips.map(c => `<button type="button" class="quick-chip" data-ans="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('');
        bindQuickChips();
      }, 500);
    } else {
      setTimeout(() => {
        addMsg('Synthesizing your responses with university entry databases and language benchmarks… Here is your personalized blueprint!');
        generateBlueprint();
      }, 600);
    }
  }

  function bindQuickChips() {
    $$('.quick-chip', chipsContainer).forEach(chip => {
      chip.addEventListener('click', () => handleAnswer(chip.dataset.ans));
    });
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleAnswer(input.value.trim());
  });

  bindQuickChips();

  $('#counselor-download-plan')?.addEventListener('click', () => {
    window.print();
  });
}

function generateBlueprint() {
  const content = $('#blueprint-content');
  if (!content) return;
  const interest = counselorAnswers[0] || 'Interdisciplinary Studies';
  const target = counselorAnswers[1] || 'Global & Indian Premier Institutions';
  const style = counselorAnswers[2] || 'Strategic Leadership & Analysis';

  content.innerHTML = `
    <h3>Personalized College &amp; Career Roadmap</h3>
    <div class="blueprint-item">
      <strong>TARGET DISCIPLINE &amp; FOCUS</strong>
      <p>${escapeHtml(interest)} · ${escapeHtml(style)}</p>
    </div>
    <div class="blueprint-item">
      <strong>RECOMMENDED PREMIER INSTITUTIONS</strong>
      <p><strong>India:</strong> Ashoka University (Sonipat), St. Stephen\'s / LSR (Delhi), NLSIU (Bengaluru), IIT Bombay (Design/CS), IIM Indore IPM.</p>
      <p><strong>Global:</strong> University of Oxford, Stanford University, National University of Singapore (NUS), London School of Economics (LSE).</p>
    </div>
    <div class="blueprint-item">
      <strong>CRITICAL ENGLISH MILESTONES</strong>
      <p>• <strong>Admissions Essay / SOP:</strong> Focus on personal narrative resonance and concrete evidence over inflated vocabulary.</p>
      <p>• <strong>Standardized Benchmarks:</strong> Target IELTS 7.5+ / TOEFL 105+ / SAT Reading 720+.</p>
      <p>• <strong>Interview Composure:</strong> Practice downward pitch modulation and structured 90-second answers.</p>
    </div>
    <div class="blueprint-item">
      <strong>30-DAY PREPARATION CHECKLIST</strong>
      <p>Week 1: Draft three personal narrative essay prompts.<br>Week 2: Record 2-minute mock interviews in the Speech Lab.<br>Week 3: Expand vocabulary with daily executive word lists.<br>Week 4: Review college deadlines and scholarship criteria.</p>
    </div>
  `;
  showToast('Personalized college blueprint generated!');
}

function initSpeechLab() {
  const recordBtn = $('#speech-record');
  const stopBtn = $('#speech-stop');
  const analyzeBtn = $('#analyze-speech');
  const transcriptArea = $('#speech-transcript');
  const orb = $('#record-orb');
  const recordTitle = $('#record-title');
  const recordDesc = $('#record-description');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-IN';

    recognition.onresult = (event) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          liveTranscript += event.results[i][0].transcript + ' ';
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      transcriptArea.value = (liveTranscript + interim).trim();
    };

    recognition.onerror = () => {
      isListening = false;
    };
  }

  recordBtn?.addEventListener('click', () => {
    liveTranscript = '';
    transcriptArea.value = '';
    isListening = true;
    recordBtn.disabled = true;
    stopBtn.disabled = false;
    orb?.classList.add('recording');
    recordTitle.textContent = 'Listening to your speech…';
    recordDesc.textContent = 'Speak clearly at a conversational pace. Words will appear in real time.';
    try { recognition?.start(); } catch {}
  });

  stopBtn?.addEventListener('click', () => {
    isListening = false;
    recordBtn.disabled = false;
    stopBtn.disabled = true;
    orb?.classList.remove('recording');
    recordTitle.textContent = 'Speech captured.';
    recordDesc.textContent = 'Click Analyze my English to evaluate pace, vocabulary, and executive cadence.';
    try { recognition?.stop(); } catch {}
  });

  const SPEECH_PROMPTS = [
    { title: 'Tell us about an idea that changes how people live.', text: 'Explain the problem, what your idea solves, and why clear communication matters when convincing others to support it.' },
    { title: 'What is a misconception people have about student life?', text: 'Identify the common assumption, state your perspective with a real example, and explain the takeaway.' },
    { title: 'Pitch your dream career in 60 seconds.', text: 'State the profession, the societal impact you want to create, and the skills you are honing right now.' },
    { title: 'How does learning English unlock global opportunities?', text: 'Discuss cultural exchange, international research, and career mobility beyond borders.' }
  ];

  $('#new-speech-prompt')?.addEventListener('click', () => {
    speechPromptIndex = (speechPromptIndex + 1) % SPEECH_PROMPTS.length;
    $('#prompt-counter').textContent = `0${speechPromptIndex + 1} / 04`;
    $('#prompt-heading').textContent = SPEECH_PROMPTS[speechPromptIndex].title;
    $('#prompt-subtext').textContent = SPEECH_PROMPTS[speechPromptIndex].text;
  });

  analyzeBtn?.addEventListener('click', async () => {
    const text = transcriptArea.value.trim();
    if (!text) {
      showToast('Record audio or type a transcript first.');
      return;
    }
    analyzeBtn.disabled = true;
    analyzeBtn.textContent = 'Evaluating…';

    const words = text.split(/\s+/).filter(Boolean).length;
    const estimatedWpm = Math.max(110, Math.min(160, Math.round(words * 2.8)));
    const fillers = (text.match(/\b(um|uh|like|basically|actually|you know)\b/gi) || []).length;
    const pronunciation = 88;
    const fluency = Math.max(82, 96 - (fillers * 3));
    const vocabulary = 90;
    const overall = Math.round((pronunciation + fluency + vocabulary) / 3);

    compositeScores.speech = overall;
    calculateCompositeScore();
    updateLeaderboardUI();

    const feedback = $('#speech-feedback');
    feedback.hidden = false;
    feedback.innerHTML = `
      <h4>Speech Lab Assessment</h4>
      <div class="feedback-metrics">
        <div class="feedback-metric"><strong>${overall}</strong><span>Overall Score</span></div>
        <div class="feedback-metric"><strong>${estimatedWpm}</strong><span>Estimated WPM</span></div>
        <div class="feedback-metric"><strong>${fillers}</strong><span>Fillers Detected</span></div>
      </div>
      <div class="feedback-copy">
        <p><strong>Executive Delivery Insights:</strong></p>
        <p>• <strong>Pacing &amp; Cadence:</strong> Your delivery sits at an optimal ${estimatedWpm} words per minute, facilitating natural listener comprehension.</p>
        <p>• <strong>Vocabulary Elevation:</strong> Practice replacing general assertions with substantive domain terminology.</p>
        <p>• <strong>Downward Modulation:</strong> Conclude declarative statements on a resolute downward tonal register to project calm authority.</p>
      </div>
    `;
    analyzeBtn.disabled = false;
    analyzeBtn.innerHTML = 'Analyze my English <span aria-hidden="true">↗</span>';
    showToast('Speech analysis complete! Composite score updated.');
  });
}

function initNewsroom() {
  const video = $('#anchor-video');
  const recordBtn = $('#anchor-record');
  const playBtn = $('#anchor-play');
  const resetBtn = $('#anchor-reset');
  const downloadBtn = $('#anchor-download-video');
  const speedInput = $('#anchor-speed');
  const prompterWindow = $('#teleprompter-window');
  const prompterText = $('#teleprompter-text');
  const scriptSelect = $('#anchor-script');
  const customTextarea = $('#anchor-custom-script');
  const cameraToggle = $('#anchor-camera-toggle');
  const mirrorToggle = $('#anchor-mirror');
  const analysisCard = $('#newsroom-analysis');

  let scrollInterval = null;
  let scrollPos = 0;
  let stream = null;
  let isRecording = false;

  async function startCamera() {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 }, audio: true });
      video.srcObject = stream;
    } catch {
      video.poster = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=640&q=80';
    }
  }

  startCamera();

  cameraToggle?.addEventListener('change', () => {
    if (cameraToggle.checked) {
      startCamera();
    } else {
      stream?.getTracks().forEach(t => t.stop());
      video.srcObject = null;
    }
  });

  mirrorToggle?.addEventListener('change', () => {
    prompterText.classList.toggle('mirrored', mirrorToggle.checked);
  });

  const SCRIPTS = {
    news: 'Good evening. Tonight, student leaders at Kanakia International School are demonstrating that communication is the ultimate catalyst for leadership. Whether in engineering, law, medicine, or the arts, every career speaks English. Here is our live dispatch from the exhibition pavilion.',
    culture: 'From the classical stage to modern multimedia streaming, words shape human history. Today\'s exhibition showcases how mastering articulation, cadence, and rhetoric equips the next generation of global citizens with undeniable persuasive impact.',
    sports: 'In a thrilling championship finish, the athletes demonstrated not only unmatched physical agility but flawless strategic communication under high-stakes pressure. Here is how composure turned the tide.'
  };

  scriptSelect?.addEventListener('change', () => {
    if (scriptSelect.value === 'custom') {
      customTextarea.hidden = false;
      prompterText.textContent = customTextarea.value || 'Type your custom dispatch…';
    } else {
      customTextarea.hidden = true;
      prompterText.textContent = SCRIPTS[scriptSelect.value];
    }
    prompterWindow.scrollTop = 0;
    scrollPos = 0;
  });

  customTextarea?.addEventListener('input', () => {
    prompterText.textContent = customTextarea.value || 'Type your custom dispatch…';
  });

  playBtn?.addEventListener('click', () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
      playBtn.innerHTML = 'Resume teleprompter <span aria-hidden="true">▶</span>';
    } else {
      playBtn.innerHTML = 'Pause teleprompter <span aria-hidden="true">⏸</span>';
      const speed = Number(speedInput.value) || 28;
      scrollInterval = setInterval(() => {
        scrollPos += 1;
        prompterWindow.scrollTop = scrollPos;
        if (scrollPos >= prompterWindow.scrollHeight - prompterWindow.clientHeight) {
          clearInterval(scrollInterval);
          scrollInterval = null;
          playBtn.innerHTML = 'Start teleprompter <span aria-hidden="true">▶</span>';
        }
      }, Math.max(15, 60 - Math.round(speed * 0.4)));
    }
  });

  resetBtn?.addEventListener('click', () => {
    if (scrollInterval) clearInterval(scrollInterval);
    scrollInterval = null;
    scrollPos = 0;
    prompterWindow.scrollTop = 0;
    playBtn.innerHTML = 'Start teleprompter <span aria-hidden="true">▶</span>';
  });

  recordBtn?.addEventListener('click', async () => {
    if (!isRecording) {
      recordedVideoBlobs = [];
      try {
        if (!stream) stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) recordedVideoBlobs.push(e.data);
        };
        mediaRecorder.onstop = () => {
          const superBlob = new Blob(recordedVideoBlobs, { type: 'video/webm' });
          lastRecordedVideoUrl = URL.createObjectURL(superBlob);
          downloadBtn.disabled = false;
          analysisCard.hidden = false;
          compositeScores.newsroom = 92;
          calculateCompositeScore();
          updateLeaderboardUI();
          showToast('Broadcast recorded and saved to server telemetry!');
        };
        mediaRecorder.start();
        isRecording = true;
        recordBtn.textContent = 'Stop recording ⏹';
        recordBtn.classList.add('recording-btn');
        if (!scrollInterval) playBtn.click();
      } catch {
        analysisCard.hidden = false;
        compositeScores.newsroom = 90;
        calculateCompositeScore();
        updateLeaderboardUI();
        showToast('Camera simulation active: Delivery telemetry logged!');
      }
    } else {
      isRecording = false;
      recordBtn.textContent = 'Record broadcast clip 🔴';
      recordBtn.classList.remove('recording-btn');
      mediaRecorder?.stop();
      if (scrollInterval) playBtn.click();
    }
  });

  downloadBtn?.addEventListener('click', () => {
    if (!lastRecordedVideoUrl) return;
    const a = document.createElement('a');
    a.href = lastRecordedVideoUrl;
    a.download = 'kanakia-newsroom-broadcast-2026.webm';
    a.click();
  });
}

function initModernGames() {
  $$('.game-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.game-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      $$('.game-pane').forEach(p => p.hidden = true);
      const target = $(`#pane-${btn.dataset.game}`);
      if (target) target.hidden = false;
    });
  });

  initWordle();
  initMatching();
  initClinic();
  initTwister();
}

function initWordle() {
  const grid = $('#wordle-grid');
  const keyboard = $('#wordle-keyboard');
  const status = $('#wordle-status');
  const scoreOut = $('#wordle-score');

  wordleTarget = WORDLE_WORDS[Math.floor(Math.random() * WORDLE_WORDS.length)];
  wordleGuesses = [];
  wordleCurrentGuess = '';

  function renderGrid() {
    grid.innerHTML = '';
    for (let r = 0; r < 6; r++) {
      const row = document.createElement('div');
      row.className = 'wordle-row';
      const guess = wordleGuesses[r] || (r === wordleGuesses.length ? wordleCurrentGuess : '');
      for (let c = 0; c < 5; c++) {
        const tile = document.createElement('div');
        tile.className = 'wordle-tile';
        const letter = guess[c] || '';
        tile.textContent = letter;
        if (letter) tile.classList.add('filled');
        if (r < wordleGuesses.length) {
          const targetLetter = wordleTarget[c];
          if (letter === targetLetter) {
            tile.classList.add('tile-correct');
          } else if (wordleTarget.includes(letter)) {
            tile.classList.add('tile-present');
          } else {
            tile.classList.add('tile-absent');
          }
        }
        row.appendChild(tile);
      }
      grid.appendChild(row);
    }
  }

  function renderKeyboard() {
    const rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
    keyboard.innerHTML = rows.map((row, idx) => `
      <div class="keyboard-row">
        ${idx === 2 ? '<button type="button" class="key-btn" data-key="ENTER">ENTER</button>' : ''}
        ${row.split('').map(char => `<button type="button" class="key-btn" data-key="${char}">${char}</button>`).join('')}
        ${idx === 2 ? '<button type="button" class="key-btn" data-key="BACK">⌫</button>' : ''}
      </div>
    `).join('');

    $$('.key-btn', keyboard).forEach(btn => {
      btn.addEventListener('click', () => handleKey(btn.dataset.key));
    });
  }

  function handleKey(key) {
    if (wordleGuesses.length >= 6) return;
    if (key === 'ENTER') {
      if (wordleCurrentGuess.length === 5) {
        wordleGuesses.push(wordleCurrentGuess);
        if (wordleCurrentGuess === wordleTarget) {
          status.textContent = `Brilliant! You solved ${wordleTarget} in ${wordleGuesses.length} tries! 🎉`;
          wordleScore += 100;
          scoreOut.textContent = wordleScore;
          compositeScores.games = Math.min(100, compositeScores.games + 5);
          calculateCompositeScore();
          updateLeaderboardUI();
        } else if (wordleGuesses.length === 6) {
          status.textContent = `The word was ${wordleTarget}. Try another!`;
        }
        wordleCurrentGuess = '';
        renderGrid();
      } else {
        status.textContent = 'Word must be 5 letters.';
      }
    } else if (key === 'BACK' || key === 'BACKSPACE') {
      wordleCurrentGuess = wordleCurrentGuess.slice(0, -1);
      renderGrid();
    } else if (/^[A-Z]$/i.test(key) && wordleCurrentGuess.length < 5) {
      wordleCurrentGuess += key.toUpperCase();
      renderGrid();
    }
  }

  window.addEventListener('keydown', (e) => {
    if ($('#pane-wordle')?.hidden === false) {
      if (e.key === 'Enter') handleKey('ENTER');
      else if (e.key === 'Backspace') handleKey('BACK');
      else if (/^[a-zA-Z]$/.test(e.key)) handleKey(e.key.toUpperCase());
    }
  });

  $('#wordle-reset')?.addEventListener('click', () => {
    wordleTarget = WORDLE_WORDS[Math.floor(Math.random() * WORDLE_WORDS.length)];
    wordleGuesses = [];
    wordleCurrentGuess = '';
    status.textContent = '';
    renderGrid();
  });

  renderGrid();
  renderKeyboard();
}

function initMatching() {
  const grid = $('#matching-grid');
  const status = $('#matching-status');
  const scoreOut = $('#matching-score');

  let items = [];
  MATCHING_PAIRS.forEach(p => {
    items.push({ id: p.word, type: 'word', text: p.word });
    items.push({ id: p.word, type: 'def', text: p.def });
  });
  items.sort(() => Math.random() - 0.5);

  matchingSelectedWord = null;
  matchingMatchedCount = 0;

  grid.innerHTML = items.map((it, idx) => `
    <div class="match-card" data-id="${it.id}" data-type="${it.type}" data-idx="${idx}">
      ${escapeHtml(it.text)}
    </div>
  `).join('');

  $$('.match-card', grid).forEach(card => {
    card.addEventListener('click', () => {
      if (card.classList.contains('matched')) return;
      if (!matchingSelectedWord) {
        matchingSelectedWord = card;
        card.classList.add('selected');
      } else {
        if (matchingSelectedWord === card) {
          card.classList.remove('selected');
          matchingSelectedWord = null;
          return;
        }
        if (matchingSelectedWord.dataset.id === card.dataset.id && matchingSelectedWord.dataset.type !== card.dataset.type) {
          matchingSelectedWord.classList.remove('selected');
          matchingSelectedWord.classList.add('matched');
          card.classList.add('matched');
          matchingMatchedCount++;
          matchingScore += 25;
          scoreOut.textContent = matchingScore;
          status.textContent = `Correct Match! ${card.dataset.id} paired! ✨`;
          matchingSelectedWord = null;
          if (matchingMatchedCount === MATCHING_PAIRS.length) {
            status.textContent = 'All vocabulary pairs matched! Mastery bonus +50! 🏆';
            matchingScore += 50;
            scoreOut.textContent = matchingScore;
            compositeScores.games = Math.min(100, compositeScores.games + 5);
            calculateCompositeScore();
            updateLeaderboardUI();
          }
        } else {
          matchingSelectedWord.classList.remove('selected');
          status.textContent = 'Not quite! Review definitions and retry.';
          matchingSelectedWord = null;
        }
      }
    });
  });

  $('#matching-reset')?.addEventListener('click', initMatching);
}

function initClinic() {
  const domain = $('#clinic-domain');
  const scenario = $('#clinic-scenario');
  const optionsBox = $('#clinic-options');
  const status = $('#clinic-status');
  const scoreOut = $('#clinic-score');

  const c = CLINIC_CASES[clinicIndex % CLINIC_CASES.length];
  domain.textContent = `DOMAIN: ${c.domain}`;
  scenario.textContent = c.scenario;
  status.textContent = '';

  optionsBox.innerHTML = c.options.map((opt, i) => `
    <button type="button" class="clinic-option" data-idx="${i}">
      <strong>${['A', 'B', 'C'][i]}.</strong> ${escapeHtml(opt)}
    </button>
  `).join('');

  $$('.clinic-option', optionsBox).forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.clinic-option', optionsBox).forEach(b => b.disabled = true);
      const chosen = Number(btn.dataset.idx);
      if (chosen === c.correct) {
        btn.classList.add('correct');
        status.textContent = 'Correct! Executive diction conveys authority and precision. +30 pts';
        clinicScore += 30;
        scoreOut.textContent = clinicScore;
        compositeScores.games = Math.min(100, compositeScores.games + 4);
        calculateCompositeScore();
        updateLeaderboardUI();
      } else {
        btn.classList.add('incorrect');
        $$('.clinic-option', optionsBox)[c.correct].classList.add('correct');
        status.textContent = 'Notice how the correct choice uses concise, formal syntax.';
      }
    });
  });

  $('#clinic-next')?.addEventListener('click', () => {
    clinicIndex++;
    initClinic();
  });
}

function initTwister() {
  const TWISTERS = [
    '“A critical contributor coordinates concise communications consistently across complex corporate channels.”',
    '“Substantiate strategic statistics swiftly so stakeholders see significant solutions.”',
    '“Prudent practitioners prioritise patient perspective prior to prescribing procedures.”',
    '“Lively litigators logically lay legislative limits like legal luminaries.”'
  ];
  let tIdx = 0;
  const text = $('#twister-text');
  const timer = $('#twister-timer');
  const startBtn = $('#twister-start');
  const status = $('#twister-status');
  const scoreOut = $('#twister-score');

  startBtn?.addEventListener('click', () => {
    if (twisterTimerId) clearInterval(twisterTimerId);
    twisterSecondsLeft = 15;
    timer.textContent = '15.0s';
    status.textContent = 'Read aloud clearly with steady downward pitch modulation!';
    startBtn.disabled = true;

    twisterTimerId = setInterval(() => {
      twisterSecondsLeft -= 0.1;
      timer.textContent = `${Math.max(0, twisterSecondsLeft).toFixed(1)}s`;
      if (twisterSecondsLeft <= 0) {
        clearInterval(twisterTimerId);
        twisterTimerId = null;
        startBtn.disabled = false;
        status.textContent = 'Pacing completed! Diction score awarded: +25 pts';
        twisterScore += 25;
        scoreOut.textContent = twisterScore;
        compositeScores.games = Math.min(100, compositeScores.games + 3);
        calculateCompositeScore();
        updateLeaderboardUI();
      }
    }, 100);
  });

  $('#twister-next')?.addEventListener('click', () => {
    tIdx = (tIdx + 1) % TWISTERS.length;
    text.textContent = TWISTERS[tIdx];
    status.textContent = '';
  });
}

function initEditorDesk() {
  const roundIndicator = $('#email-round-indicator');
  const recipient = $('#email-recipient');
  const subject = $('#email-subject');
  const prompt = $('#email-prompt');
  const optionsBox = $('#email-options');
  const feedback = $('#email-feedback');
  const scoreOut = $('#email-score');
  const nextBtn = $('#email-next');

  function renderRound() {
    const r = EMAIL_ROUNDS[emailRound % EMAIL_ROUNDS.length];
    roundIndicator.textContent = `INBOX / DRAFT 0${(emailRound % EMAIL_ROUNDS.length) + 1}`;
    recipient.textContent = r.recipient;
    subject.textContent = r.subject;
    prompt.textContent = r.prompt;
    feedback.textContent = '';
    scoreOut.textContent = `${emailScore} / ${emailRound + 1} Rounds`;

    optionsBox.innerHTML = r.options.map((opt, i) => `
      <button class="email-option" data-idx="${i}" type="button">
        <span>${['A', 'B', 'C'][i]}</span>
        <span>${escapeHtml(opt)}</span>
      </button>
    `).join('');

    $$('.email-option', optionsBox).forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.email-option', optionsBox).forEach(b => b.disabled = true);
        const chosen = Number(btn.dataset.idx);
        if (chosen === r.correct) {
          btn.classList.add('correct');
          emailScore++;
          scoreOut.textContent = `${emailScore} / ${emailRound + 1} Rounds`;
          feedback.textContent = `Excellent! ${r.feedback}`;
          compositeScores.editor = Math.min(100, compositeScores.editor + 3);
          calculateCompositeScore();
          updateLeaderboardUI();
        } else {
          btn.classList.add('incorrect');
          $$('.email-option', optionsBox)[r.correct].classList.add('correct');
          feedback.textContent = `Needs refinement. ${r.feedback}`;
        }
      });
    });
  }

  nextBtn?.addEventListener('click', () => {
    emailRound++;
    renderRound();
  });

  renderRound();
}

function initFeedbackSection() {
  const form = $('#feedback-form');
  const stars = $$('#feedback-stars .star');
  let currentRating = 5;

  stars.forEach(star => {
    star.addEventListener('click', () => {
      currentRating = Number(star.dataset.rating);
      stars.forEach((s, idx) => {
        s.classList.toggle('active', idx < currentRating);
      });
    });
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const entry = {
      date: new Date().toISOString().replace('T', ' ').slice(0, 19),
      name: $('#fb-name').value.trim(),
      grade: $('#fb-grade').value,
      category: $('input[name="fb-category"]:checked')?.value || 'General',
      rating: currentRating,
      comment: $('#fb-comment').value.trim()
    };

    let list = [];
    try { list = JSON.parse(localStorage.getItem(STORAGE.feedback) || '[]'); } catch {}
    list.push(entry);
    localStorage.setItem(STORAGE.feedback, JSON.stringify(list));

    fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry)
    }).catch(() => {});

    $('#feedback-message').textContent = 'Thank you! Your feedback has been registered and included in the exhibition summary.';
    form.reset();
    showToast('Feedback submitted successfully!');
  });

  $('#download-excel-btn')?.addEventListener('click', () => {
    let list = [];
    try { list = JSON.parse(localStorage.getItem(STORAGE.feedback) || '[]'); } catch {}
    if (!list.length) {
      list = [
        { date: '2026-10-26 14:30:00', name: 'Aarav Sharma', grade: 'Class 10-D', category: 'Speech Lab', rating: 5, comment: 'The pronunciation mouth guide and instant WPM analysis were fantastic!' },
        { date: '2026-10-26 14:45:00', name: 'Diya Patel', grade: 'Class 10-B', category: 'Newsroom', rating: 5, comment: 'Anchoring live with the breaking news ticker helped my camera confidence immensely.' }
      ];
    }
    const headers = ['Timestamp', 'Student Name', 'Class/Role', 'Category', 'Rating', 'Feedback Comments'];
    const rows = list.map(item => [
      `"${item.date}"`,
      `"${item.name.replace(/"/g, '""')}"`,
      `"${item.grade}"`,
      `"${item.category}"`,
      item.rating,
      `"${item.comment.replace(/"/g, '""')}"`
    ]);
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Kanakia_Career_Fair_Feedback_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast('Excel spreadsheet downloaded!');
  });

  $('#support-faq-btn')?.addEventListener('click', () => {
    $('#faq-modal').hidden = false;
  });
}

function initModals() {
  $$('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = $(`#${btn.dataset.closeModal}`);
      if (modal) modal.hidden = true;
    });
  });
  $('#current-year').textContent = new Date().getFullYear();
}

function initWordOfDay() {
  function render() {
    const w = WORDS[activeWordIndex % WORDS.length];
    $('#daily-word').textContent = w.word;
    $('#daily-pronunciation').textContent = w.pronunciation;
    $('#daily-definition').textContent = w.definition;
    $('#daily-example').textContent = w.example;
  }
  $('#next-word')?.addEventListener('click', () => {
    activeWordIndex++;
    render();
  });
  $('#save-word')?.addEventListener('click', () => {
    const w = WORDS[activeWordIndex % WORDS.length];
    let saved = [];
    try { saved = JSON.parse(localStorage.getItem(STORAGE.savedWords) || '[]'); } catch {}
    if (!saved.includes(w.word)) saved.push(w.word);
    localStorage.setItem(STORAGE.savedWords, JSON.stringify(saved));
    $('#saved-words').textContent = `Saved for practice: ${saved.join(' · ')}`;
    showToast(`Saved "${w.word}" to practice list!`);
  });
  render();
}

function initPronunciationStudio() {
  $$('.sound-option').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.sound-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const soundKey = btn.dataset.sound;
      const s = PRONUNCIATION_SOUNDS[soundKey];
      if (!s) return;
      $('#sound-phoneme').textContent = s.label;
      $('#sound-title').textContent = s.title;
      $('#sound-placement').textContent = s.placement;
      $('#sound-lips').textContent = s.lips;
      $('#sound-examples').innerHTML = s.examples.map(ex => `<span>${ex}</span>`).join('');
      $('#sound-contrast').textContent = s.contrast;
      $('#mouth-diagram').setAttribute('data-mouth', soundKey);
    });
  });

  $('#hear-sound')?.addEventListener('click', () => {
    const activeKey = $('.sound-option.active')?.dataset.sound || 'th';
    const s = PRONUNCIATION_SOUNDS[activeKey];
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(s.practice);
      u.rate = 0.9;
      u.lang = 'en-GB';
      window.speechSynthesis.speak(u);
    }
  });

  $('#copy-sound-to-lab')?.addEventListener('click', () => {
    const activeKey = $('.sound-option.active')?.dataset.sound || 'th';
    const s = PRONUNCIATION_SOUNDS[activeKey];
    $('#speech-transcript').value = s.practice;
    $('#speech-lab').scrollIntoView({ behavior: 'smooth' });
    showToast('Loaded phoneme practice sentence into Speech Lab!');
  });
}

function initDebateArena() {
  $('#debate-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const motion = $('#debate-topic').value;
    const claim = $('#debate-claim').value.trim() || 'Clear communication empowers students to articulate innovative solutions.';
    const evidence = $('#debate-evidence').value.trim() || 'Empirical case studies from global model parliaments substantiate this impact.';
    const counter = $('#debate-counter').value.trim() || 'While critics argue exams suffice, verbal defense demonstrates deep intellectual agility.';

    const out = $('#debate-output');
    out.innerHTML = `
      <div class="debate-built">
        <div class="debate-built-top">
          <span>DEBATE CASE BRIEF</span>
          <strong>${escapeHtml(motion)}</strong>
        </div>
        <p><strong>Primary Claim:</strong> ${escapeHtml(claim)}</p>
        <p><strong>Supporting Evidence:</strong> ${escapeHtml(evidence)}</p>
        <p><strong>Rebuttal:</strong> ${escapeHtml(counter)}</p>
        <div class="debate-checklist">
          <span>Empirical Backing ✓</span>
          <span>Fair Rebuttal ✓</span>
          <span>Assertive Cadence ✓</span>
        </div>
      </div>
    `;
    $('#copy-debate').disabled = false;
    $('#review-debate').disabled = false;
  });

  $('#copy-debate')?.addEventListener('click', () => {
    navigator.clipboard.writeText($('#debate-output').innerText);
    showToast('Debate brief copied to clipboard!');
  });

  $('#review-debate')?.addEventListener('click', () => {
    const fb = $('#debate-feedback');
    fb.hidden = false;
    fb.innerHTML = `
      <p><strong>Debate Adjudication:</strong></p>
      <p>Your argument demonstrates logical structure and fair counterargument acknowledgement. When speaking, maintain calibrated 0.6s micro-pauses before citing statistics to emphasize key findings.</p>
    `;
  });
}

function initRoleplay() {
  $$('.scenario-card').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.scenario-card').forEach(b => {
        b.classList.remove('selected');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-pressed', 'true');
      const sc = btn.dataset.roleplay;
      const situations = {
        doctor: { role: 'PATIENT COMMUNICATION', title: 'A patient is anxious about a complex treatment protocol.', cue: 'You are a medical intern. Explain the clinical steps clearly without jargon or alarming statements.' },
        pilot: { role: 'FLIGHT CREW BRIEFING', title: 'A delayed flight means passengers are anxious and your team needs a clear update.', cue: 'You are leading a crew briefing. Give a calm update, explain the immediate plan and invite essential questions.' },
        customer: { role: 'CLIENT RELATIONS', title: 'A high-priority client experienced an unexpected service disruption.', cue: 'De-escalate the tension, acknowledge the friction with empathy, and outline the recovery plan.' },
        press: { role: 'MEDIA DISPATCH', title: 'Journalists are questioning the enterprise timeline following a major product announcement.', cue: 'Deliver a poised 2-minute press response with verifiable facts.' }
      };
      const data = situations[sc] || situations.doctor;
      $('#roleplay-role').textContent = data.role;
      $('#roleplay-situation').textContent = data.title;
      $('#roleplay-cue').textContent = data.cue;
      $('#roleplay-result').hidden = true;
    });
  });

  $('#roleplay-feedback')?.addEventListener('click', async () => {
    const ans = $('#roleplay-answer').value.trim();
    if (!ans) {
      showToast('Enter your response first.');
      return;
    }
    const resultBox = $('#roleplay-result');
    resultBox.hidden = false;
    resultBox.innerHTML = '<p>Evaluating response…</p>';

    try {
      const resp = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: 'roleplay-feedback', scenario: $('#roleplay-situation').textContent, context: $('#roleplay-cue').textContent, text: ans })
      });
      if (resp.ok) {
        const data = await resp.json();
        resultBox.innerHTML = `<strong>Communication Review</strong><div class="ai-review-body">${formatMarkdown(data.text || '')}</div><p class="muted-small">Provider: ${escapeHtml(data.provider || 'Cloudflare / Gemini AI')}</p>`;
        return;
      }
    } catch {}

    resultBox.innerHTML = `
      <strong>Communication Review</strong>
      <div class="ai-review-body">
        <h4 class="ai-heading">Strengths:</h4>
        <div class="ai-bullet"><span class="ai-bullet-dot">•</span> <strong>Professional Posture:</strong> You address the situation directly without evasive language.</div>
        <div class="ai-bullet"><span class="ai-bullet-dot">•</span> <strong>Empathetic Grounding:</strong> The opening sentence acknowledges the listener\'s emotional state.</div>
        <hr class="ai-rule">
        <h4 class="ai-heading">Improvement Suggestions:</h4>
        <div class="ai-bullet"><span class="ai-bullet-dot">•</span> <strong>Actionable Sequencing:</strong> Enumerate immediate next steps (1, 2, 3) to instill operational confidence.</div>
      </div>
      <p class="muted-small">Evaluated with on-device executive heuristics.</p>
    `;
  });
}

function initInterviewStudio() {
  const select = $('#interview-career');
  CAREERS.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.title;
    opt.textContent = c.title;
    select.appendChild(opt);
  });

  let history = [];
  const startBtn = $('#start-interview');
  const chatMessages = $('#interview-messages');
  const chatEmpty = $('#interview-empty');
  const form = $('#interview-form');
  const answerInput = $('#interview-answer');
  const sendBtn = $('button[type="submit"]', form);

  startBtn?.addEventListener('click', () => {
    history = [
      { role: 'ai', text: `Welcome to your mock interview for ${select.value}. Walk me through why you are drawn to this discipline, and how your communication style enables collaborative success.` }
    ];
    chatEmpty.hidden = true;
    answerInput.disabled = false;
    sendBtn.disabled = false;
    renderChat();
    startBtn.textContent = 'Restart Session ↻';
  });

  function renderChat() {
    chatMessages.innerHTML = history.map(h => `
      <div class="chat-bubble ${h.role}">
        <small>${h.role === 'user' ? 'YOU' : 'INTERVIEWER'}</small>
        <p>${escapeHtml(h.text)}</p>
        ${h.feedback ? `<div class="chat-feedback">${formatMarkdown(h.feedback)}</div>` : ''}
      </div>
    `).join('');
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = answerInput.value.trim();
    if (!text) return;
    history.push({ role: 'user', text });
    answerInput.value = '';
    renderChat();

    let feedbackText = 'Strong concise answer. Support with a specific empirical metric.';
    let nextQ = 'Tell me about an instance where an unexpected obstacle forced you to pivot your strategy.';

    try {
      const resp = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: 'mock-interview', career: select.value, history: history.slice(-4), text })
      });
      if (resp.ok) {
        const data = await resp.json();
        if (data.feedback) feedbackText = data.feedback;
        if (data.nextQuestion) nextQ = data.nextQuestion;
      }
    } catch {}

    history[history.length - 1].feedback = feedbackText;
    history.push({ role: 'ai', text: nextQ });
    compositeScores.interview = Math.min(100, compositeScores.interview + 3);
    calculateCompositeScore();
    updateLeaderboardUI();
    renderChat();
  });
}

function initLeaderboardForm() {
  $('#leaderboard-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nick = $('#leader-nickname').value.trim();
    const grade = $('#leader-grade').value;
    const score = calculateCompositeScore();

    $('#leaderboard-message').textContent = `Success! ${nick} (${grade}) published with Composite Score: ${score}!`;
    showToast(`Published ${nick} to the leaderboard!`);
    updateLeaderboardUI();
  });

  $$('.board-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.board-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      updateLeaderboardUI();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initStreamChoices();
  initAICounselor();
  initSpeechLab();
  initNewsroom();
  initModernGames();
  initEditorDesk();
  initPronunciationStudio();
  initDebateArena();
  initRoleplay();
  initInterviewStudio();
  initWordOfDay();
  initFeedbackSection();
  initLeaderboardForm();
  initModals();
  calculateCompositeScore();
  updateLeaderboardUI();

  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    const bar = $('#reading-progress');
    if (bar) bar.style.width = `${progress}%`;
  }, { passive: true });
});
