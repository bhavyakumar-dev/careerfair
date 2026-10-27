const DUEL_DATA = {
  col1: ["artless", "bawdy", "beslubbering", "bootless", "churlish", "clouted", "craven", "currish", "dankish", "dissembling", "droning", "errant", "fawning", "fobbing", "froward", "frothy", "gleeking", "gorbellied", "impertinent", "infectious", "jarring", "loggerheaded", "lumpish", "mammering", "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish", "saucy", "spleeny", "spongy", "surly", "tottering", "unmuzzled", "vain", "venomed", "villainous", "warped", "wayward", "weeden", "yeasty"],
  col2: ["base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained", "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned", "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-griping", "half-faced", "hasty-witted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "knotty-pated", "milk-livered", "motley-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rude-growing", "rump-fed", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "unchin-snouted", "weather-bitten"],
  col3: ["apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish", "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian", "giglet", "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead", "lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion", "ratsbane", "scut", "skainsmate", "strumpet", "varlet", "vassal", "whey-face", "wagtail"],
  praise1: ["radiant", "peerless", "golden-tongued", "sovereign", "magnanimous", "virtuous", "illustrious", "celestial", "gracious", "bounteous"],
  praise2: ["honey-sweet", "star-crowned", "noble-hearted", "true-judging", "crystal-clear", "fair-faced", "quick-witted", "lion-spirited"],
  praise3: ["paragon", "monarch", "jewel", "orator", "phoenix", "beacon", "champion", "luminary", "scholar", "patron"]
};

let currentDuelText = "Thou artless, beef-witted barnacle!";

window.initDuel = () => {
  const c1 = document.getElementById("duel-col-1");
  const c2 = document.getElementById("duel-col-2");
  const c3 = document.getElementById("duel-col-3");
  if (!c1 || !c2 || !c3) return;
  c1.innerHTML = DUEL_DATA.col1.slice(0, 15).map(w => `<button class="duel-opt" onclick="selectDuelWord(1, '${w}', this)">${w}</button>`).join("");
  c2.innerHTML = DUEL_DATA.col2.slice(0, 15).map(w => `<button class="duel-opt" onclick="selectDuelWord(2, '${w}', this)">${w}</button>`).join("");
  c3.innerHTML = DUEL_DATA.col3.slice(0, 15).map(w => `<button class="duel-opt" onclick="selectDuelWord(3, '${w}', this)">${w}</button>`).join("");
};

let selectedDuelWords = ["artless", "beef-witted", "barnacle"];

window.selectDuelWord = (col, word, btn) => {
  selectedDuelWords[col - 1] = word;
  const parent = btn.parentElement;
  parent.querySelectorAll(".duel-opt").forEach(b => b.classList.remove("selected"));
  btn.classList.add("selected");
  currentDuelText = `Thou ${selectedDuelWords[0]}, ${selectedDuelWords[1]} ${selectedDuelWords[2]}!`;
  const out = document.getElementById("duel-output");
  if (out) out.textContent = currentDuelText;
};

window.generateRandomInsult = () => {
  const w1 = DUEL_DATA.col1[Math.floor(Math.random() * DUEL_DATA.col1.length)];
  const w2 = DUEL_DATA.col2[Math.floor(Math.random() * DUEL_DATA.col2.length)];
  const w3 = DUEL_DATA.col3[Math.floor(Math.random() * DUEL_DATA.col3.length)];
  selectedDuelWords = [w1, w2, w3];
  currentDuelText = `Thou ${w1}, ${w2} ${w3}!`;
  const out = document.getElementById("duel-output");
  if (out) out.textContent = currentDuelText;
};

window.generateRandomPraise = () => {
  const p1 = DUEL_DATA.praise1[Math.floor(Math.random() * DUEL_DATA.praise1.length)];
  const p2 = DUEL_DATA.praise2[Math.floor(Math.random() * DUEL_DATA.praise2.length)];
  const p3 = DUEL_DATA.praise3[Math.floor(Math.random() * DUEL_DATA.praise3.length)];
  currentDuelText = `Thou ${p1}, ${p2} ${p3}!`;
  const out = document.getElementById("duel-output");
  if (out) out.textContent = currentDuelText;
};

window.reciteDuelText = () => {
  if ("speechSynthesis" in window) {
    const u = new SpeechSynthesisUtterance(currentDuelText);
    u.rate = 0.88;
    u.pitch = 1.1;
    window.speechSynthesis.speak(u);
  } else {
    alert("Speech Synthesis not available in browser.");
  }
};

window.copyDuelText = () => {
  navigator.clipboard.writeText(currentDuelText).then(() => {
    alert("Copied to clipboard: " + currentDuelText);
  }).catch(() => {
    alert(currentDuelText);
  });
};

const SOLILOQUIES = {
  hamlet: {
    title: "Hamlet — Act III, Scene 1",
    line: "To be, or not to be, that is the question:",
    feet: [
      { u: "To", s: "be," },
      { u: "or", s: "not" },
      { u: "to", s: "be," },
      { u: "that", s: "is" },
      { u: "the", s: "ques-tion" }
    ],
    note: "Notice the 11th unstressed feminine ending syllable ('-tion'), reflecting Hamlet's existential doubt."
  },
  henryv: {
    title: "Henry V — Act III, Scene 1",
    line: "Once more unto the breach, dear friends, once more;",
    feet: [
      { u: "Once", s: "more" },
      { u: "un-", s: "to" },
      { u: "the", s: "breach," },
      { u: "dear", s: "friends," },
      { u: "once", s: "more" }
    ],
    note: "Heroic martial cadence driving forward into battle with forceful iambic momentum."
  },
  portia: {
    title: "The Merchant of Venice — Act IV, Scene 1",
    line: "The quality of mercy is not strained,",
    feet: [
      { u: "The", s: "qual-" },
      { u: "i-", s: "ty" },
      { u: "of", s: "mer-" },
      { u: "cy", s: "is" },
      { u: "not", s: "strained" }
    ],
    note: "Portia's judicial rhetoric flows like the gentle rain from heaven, balancing logic and grace."
  },
  macbeth: {
    title: "Macbeth — Act V, Scene 5",
    line: "Tomorrow, and tomorrow, and tomorrow,",
    feet: [
      { u: "To-", s: "mor-" },
      { u: "row,", s: "and" },
      { u: "to-", s: "mor-" },
      { u: "row,", s: "and" },
      { u: "to-", s: "mor-row" }
    ],
    note: "Repetitive rhythmic cadence evoking the relentless, weary tick of futile time."
  },
  romeo: {
    title: "Romeo and Juliet — Act II, Scene 2",
    line: "But, soft! what light through yonder window breaks?",
    feet: [
      { u: "But,", s: "soft!" },
      { u: "what", s: "light" },
      { u: "through", s: "yon-" },
      { u: "der", s: "win-" },
      { u: "dow", s: "breaks?" }
    ],
    note: "Classic regular iambic pentameter celebrating sunrise and sudden wonder."
  }
};

let currentSoliloquyKey = "hamlet";
let meterTaps = 0;

window.initMeter = () => {
  window.loadSoliloquy("hamlet");
};

window.loadSoliloquy = (key) => {
  currentSoliloquyKey = key;
  const data = SOLILOQUIES[key] || SOLILOQUIES.hamlet;
  const verseBox = document.getElementById("meter-verse");
  const feetBox = document.getElementById("meter-feet-display");
  if (!verseBox || !feetBox) return;
  verseBox.innerHTML = `<h4 style="color:#e8c872;font-family:Cinzel,serif;margin-bottom:.5rem;">${data.title}</h4><div class="meter-verse-text">"${data.line}"</div><p style="font-size:0.9rem;color:#f1e3c8;opacity:0.85;">${data.note}</p>`;
  feetBox.innerHTML = data.feet.map((f, i) => `
    <div class="meter-foot">
      <div class="meter-syllable meter-unstressed" title="Foot ${i + 1}: Unstressed (da)">${f.u}</div>
      <div class="meter-syllable meter-stressed" title="Foot ${i + 1}: Stressed (DUM)">${f.s}</div>
    </div>
  `).join("");
};

window.reciteSoliloquy = () => {
  const data = SOLILOQUIES[currentSoliloquyKey];
  if (!data) return;
  if ("speechSynthesis" in window) {
    const u = new SpeechSynthesisUtterance(data.line);
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }
};

window.tapMeterRhythm = () => {
  meterTaps++;
  const c = document.getElementById("meter-taps-count");
  if (c) c.textContent = `Meter Beats Tapped: ${meterTaps}`;
  const feet = document.querySelectorAll(".meter-foot");
  const target = feet[meterTaps % feet.length];
  if (target) {
    target.style.transform = "scale(1.15)";
    setTimeout(() => { target.style.transform = "none"; }, 180);
  }
};

const RHETORIC_QUESTIONS = [
  {
    speech: '"Friends, Romans, countrymen, lend me your ears; I come to bury Caesar, not to praise him."',
    speaker: 'Mark Antony in Shakespeare\'s Julius Caesar',
    correct: 'Ethos & Captatio Benevolentiae',
    options: ['Ethos & Captatio Benevolentiae', 'Pure Logos', 'Chiasmus', 'Tautology'],
    explanation: 'Antony establishes shared kinship and modesty (Ethos) to disarm an antagonistic Roman crowd before subverting Brutus.'
  },
  {
    speech: '"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets..."',
    speaker: 'Winston Churchill (June 4, 1940)',
    correct: 'Anaphora',
    options: ['Anaphora', 'Oxymoron', 'Hyperbaton', 'Synecdoche'],
    explanation: 'Anaphora is the deliberate repetition of a word or phrase at the beginning of successive clauses for cumulative rhetorical urgency.'
  },
  {
    speech: '"Ask not what your country can do for you — ask what you can do for your country."',
    speaker: 'John F. Kennedy (Inaugural Address, 1961)',
    correct: 'Chiasmus & Antimetabole',
    options: ['Chiasmus & Antimetabole', 'Litotes', 'Apostrophe', 'Zeugma'],
    explanation: 'Chiasmus reverses grammatical structures in successive phrases (ABBA pattern: country do you / you do country).'
  },
  {
    speech: '"Speech is silvern, but silence is golden."',
    speaker: 'Traditional Proverb / Thomas Carlyle',
    correct: 'Antithesis',
    options: ['Antithesis', 'Anadiplosis', 'Pleonasm', 'Metonymy'],
    explanation: 'Antithesis juxtaposes sharply contrasting ideas within balanced parallel grammatical structures.'
  }
];

let currentRhetoricIdx = 0;
let rhetoricScore = 0;

window.initRhetoric = () => {
  currentRhetoricIdx = 0;
  rhetoricScore = 0;
  renderRhetoricQuestion();
};

function renderRhetoricQuestion() {
  const container = document.getElementById("rhetoric-container");
  if (!container) return;
  if (currentRhetoricIdx >= RHETORIC_QUESTIONS.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:1.5rem;">
        <h3 style="font-family:Cinzel,serif;color:#7a1f2b;font-size:1.8rem;margin-bottom:1rem;">Rhetorical Ordeal Complete</h3>
        <p style="font-size:1.2rem;font-weight:bold;margin-bottom:1rem;">Your Score: ${rhetoricScore} / ${RHETORIC_QUESTIONS.length}</p>
        <p style="font-size:1rem;line-height:1.6;margin-bottom:1.5rem;">You possess the discerning ear of a classical parliamentary orator. Aristotle and Quintilian would approve.</p>
        <button class="game-btn" onclick="initRhetoric()">Retake Ordeal</button>
      </div>
    `;
    return;
  }
  const q = RHETORIC_QUESTIONS[currentRhetoricIdx];
  container.innerHTML = `
    <div style="background:#23140c;color:#e8c872;padding:1.4rem;border-radius:4px;margin-bottom:1.2rem;border:1px solid rgba(232,200,114,.35);">
      <p style="font:italic 1.25rem/1.6 'IM Fell English',serif;margin-bottom:.5rem;">${q.speech}</p>
      <span style="font:.78rem 'Work Sans',sans-serif;color:#f1e3c8;opacity:.8;display:block;">— ${q.speaker}</span>
    </div>
    <p style="font-weight:bold;color:#7a1f2b;margin-bottom:1rem;">Identify the master rhetorical device:</p>
    <div>
      ${q.options.map(opt => `<button class="quiz-opt-btn" onclick="evalRhetoric('${opt}')">${opt}</button>`).join("")}
    </div>
    <div id="rhetoric-feedback" style="margin-top:1rem;font-size:.95rem;"></div>
  `;
}

window.evalRhetoric = (selected) => {
  const q = RHETORIC_QUESTIONS[currentRhetoricIdx];
  const fb = document.getElementById("rhetoric-feedback");
  if (!fb) return;
  if (selected === q.correct) {
    rhetoricScore++;
    fb.innerHTML = `<p style="color:#2d5a37;font-weight:bold;margin-bottom:.5rem;">✓ Correct! ${q.correct}</p><p style="color:#352014;">${q.explanation}</p>`;
  } else {
    fb.innerHTML = `<p style="color:#7a1f2b;font-weight:bold;margin-bottom:.5rem;">✗ Not quite. The figure is ${q.correct}.</p><p style="color:#352014;">${q.explanation}</p>`;
  }
  setTimeout(() => {
    currentRhetoricIdx++;
    renderRhetoricQuestion();
  }, 2200);
};

const ETYM_DATA = {
  juggernaut: {
    word: "Juggernaut",
    journey: ["Sanskrit: Jagannātha (Lord of the World)", "14th-Century Odia / Puri Temple Chariots", "19th-Century British English Metaphor"],
    desc: "Refers to the colossal Rath Yatra temple chariots in Puri, Odisha. Early British travellers marveled at their immense unstoppable weight, introducing the term to describe any massive, inexorable force or institution."
  },
  bungalow: {
    word: "Bungalow",
    journey: ["Hindi / Gujarati: Bangla (बँगला)", "Meaning 'in the Bengal style'", "1670s East India Company records", "Global Architectural Standard"],
    desc: "Originally denoted thatched single-storey cottages built in Bengal for travellers and administrators. Adopted worldwide to mean a spacious detached single-storey dwelling."
  },
  avatar: {
    word: "Avatar",
    journey: ["Sanskrit: Avatāra (अवतार - descent)", "Classical Hindu Theology (divine incarnation)", "1980s Computer Gaming & VR", "Digital Persona Worldwide"],
    desc: "From 'ava' (down) and 'tarati' (crosses over) — the descent of a deity to the terrestrial plane. Today omnipresent in computing to signify one's digital manifestation."
  },
  shampoo: {
    word: "Shampoo",
    journey: ["Hindi / Urdu: Chāmpo (चाँपो - to knead/press)", "Vedic Root: Capayati", "1762 Indian Bathhouses in Brighton", "Modern Cosmetic Standard"],
    desc: "Introduced by Sake Dean Mahomed in Brighton, England, who opened 'Mahomed's Baths' offering steam massages ('shampooing'). Later shifted from therapeutic massage to liquid hair wash."
  },
  veranda: {
    word: "Veranda",
    journey: ["Portuguese / Spanish: Varanda (railing)", "Adopted in Indian English: Verandah (बरामदा)", "Colonial Tropical Architecture", "Global English Living Spaces"],
    desc: "A shaded, pillared roofed gallery along the exterior of an Indian residence, vital for tropical climate ventilation and communal gathering."
  },
  pundit: {
    word: "Pundit",
    journey: ["Sanskrit: Pandita (पण्डित - learned scholar)", "Kashmiri & Sanskrit Traditions", "19th-Century English Political & Media Discourse"],
    desc: "Revered title for an authority on philosophy, law, and literature. Absorbed into global English to denote an authoritative commentator, columnist, or political analyst."
  }
};

window.initEtymology = (key) => {
  const bar = document.getElementById("etym-buttons-bar");
  const disp = document.getElementById("etym-display");
  if (!bar || !disp) return;
  const keys = Object.keys(ETYM_DATA);
  bar.innerHTML = keys.map(k => `
    <button class="game-btn ${k === key ? '' : 'game-btn-secondary'}" onclick="initEtymology('${k}')">${ETYM_DATA[k].word}</button>
  `).join("");
  const item = ETYM_DATA[key] || ETYM_DATA.juggernaut;
  disp.innerHTML = `
    <div class="etym-card">
      <h3 style="font-family:Cinzel,serif;color:#7a1f2b;font-size:1.6rem;margin-bottom:.4rem;">${item.word}</h3>
      <div class="etym-journey">
        ${item.journey.map((step, i) => `
          <span class="etym-step">${step}</span>
          ${i < item.journey.length - 1 ? '<span class="etym-arrow">➔</span>' : ''}
        `).join("")}
      </div>
      <p style="margin-top:1rem;line-height:1.7;">${item.desc}</p>
    </div>
  `;
};

let chainWords = ["ENGLISH"];
let chainTimer = 45;
let chainScore = 0;
let chainStreak = 0;
let chainInterval = null;

const LEXICON = ["RHETORIC", "CHAUCER", "SHAKESPEARE", "EVIDENCE", "EXECUTIVE", "ELOCUTION", "NARRATIVE", "EVALUATE", "EXEMPLARY", "YIELD", "DICTION", "NOVEL", "LANGUAGE", "ENDEAVOR", "RESOLUTE", "EUPHONY", "YARN", "NOBLE", "EMPATHY", "YESTERDAY"];

window.initWordChain = () => {
  chainWords = ["ENGLISH"];
  chainTimer = 45;
  chainScore = 0;
  chainStreak = 0;
  if (chainInterval) clearInterval(chainInterval);
  renderChainState();
  const input = document.getElementById("chain-input");
  if (input) {
    input.value = "";
    input.focus();
  }
  chainInterval = setInterval(() => {
    chainTimer--;
    const t = document.getElementById("chain-timer");
    if (t) t.textContent = `Time: ${chainTimer}s`;
    if (chainTimer <= 0) {
      clearInterval(chainInterval);
      const msg = document.getElementById("chain-msg");
      if (msg) msg.textContent = `Hourglass empty! Final Score: ${chainScore}. Well played!`;
    }
  }, 1000);
};

function renderChainState() {
  const disp = document.getElementById("chain-display");
  const s = document.getElementById("chain-score");
  const str = document.getElementById("chain-streak");
  const hint = document.getElementById("chain-hint");
  if (!disp) return;
  disp.innerHTML = chainWords.map(w => `<span class="chain-pill">${w}</span>`).join(" ➔ ");
  if (s) s.textContent = `Score: ${chainScore}`;
  if (str) str.textContent = `Streak: ${chainStreak}`;
  const last = chainWords[chainWords.length - 1];
  const req = last.charAt(last.length - 1);
  if (hint) hint.textContent = `Next word must commence with the letter "${req}".`;
}

window.submitChainWord = () => {
  if (chainTimer <= 0) return;
  const input = document.getElementById("chain-input");
  const msg = document.getElementById("chain-msg");
  if (!input || !msg) return;
  const val = input.value.trim().toUpperCase();
  if (val.length < 3) {
    msg.textContent = "Word must be at least 3 letters long.";
    return;
  }
  const last = chainWords[chainWords.length - 1];
  const req = last.charAt(last.length - 1);
  if (val.charAt(0) !== req) {
    msg.textContent = `Word must start with "${req}".`;
    chainStreak = 0;
    renderChainState();
    return;
  }
  if (chainWords.includes(val)) {
    msg.textContent = "Word has already been entered into the chain!";
    return;
  }
  chainWords.push(val);
  chainScore += val.length * 10;
  chainStreak++;
  input.value = "";
  msg.textContent = "Word recorded! The King's scribe is contemplating...";
  renderChainState();
  setTimeout(() => {
    const term = val.charAt(val.length - 1);
    const candidate = LEXICON.find(w => w.charAt(0) === term && !chainWords.includes(w)) || (term === "E" ? "EPISTLE" : term + "TIQUETTE");
    chainWords.push(candidate);
    msg.textContent = `The Scribe played "${candidate}". Your turn!`;
    renderChainState();
  }, 600);
};

const QUOTES = [
  {
    text: '"Whan that Aprill with his shoures soote / The droghte of March hath perced to the roote..."',
    author: "Geoffrey Chaucer",
    work: "The Canterbury Tales (General Prologue, c. 1387)",
    era: "Middle English",
    options: ["Geoffrey Chaucer", "The Pearl Poet", "John Gower", "William Langland"]
  },
  {
    text: '"What a piece of work is a man! How noble in reason, how infinite in faculty..."',
    author: "William Shakespeare",
    work: "Hamlet (Act II, Scene 2, c. 1601)",
    era: "Early Modern English",
    options: ["William Shakespeare", "Christopher Marlowe", "Ben Jonson", "John Webster"]
  },
  {
    text: '"Where the mind is without fear and the head is held high; Where knowledge is free..."',
    author: "Rabindranath Tagore",
    work: "Gitanjali (Song 35, 1910)",
    era: "Late Modern / Indian English",
    options: ["Rabindranath Tagore", "Sarojini Naidu", "Sri Aurobindo", "Toru Dutt"]
  },
  {
    text: '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
    author: "Jane Austen",
    work: "Pride and Prejudice (1813)",
    era: "Regency / Late Modern English",
    options: ["Jane Austen", "Charlotte Brontë", "Mary Shelley", "George Eliot"]
  },
  {
    text: '"Memory has its own special kind of art. A shadow is a strange thing to throw upon the world."',
    author: "Salman Rushdie",
    work: "Midnight's Children (1981)",
    era: "Contemporary Postcolonial English",
    options: ["Salman Rushdie", "Arundhati Roy", "Amitav Ghosh", "R.K. Narayan"]
  }
];

let quoteIdx = 0;
let quoteScore = 0;

window.initQuoteQuiz = () => {
  quoteIdx = 0;
  quoteScore = 0;
  renderQuoteQuiz();
};

function renderQuoteQuiz() {
  const container = document.getElementById("quote-container");
  if (!container) return;
  if (quoteIdx >= QUOTES.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:1.5rem;">
        <h3 style="font-family:Cinzel,serif;color:#7a1f2b;font-size:1.8rem;margin-bottom:1rem;">Golden Folio Closed</h3>
        <p style="font-size:1.2rem;font-weight:bold;margin-bottom:1rem;">Final Score: ${quoteScore} / ${QUOTES.length}</p>
        <p style="font-size:1rem;line-height:1.6;margin-bottom:1.5rem;">Your familiarity with the canonical landmarks of world English is exemplary.</p>
        <button class="game-btn" onclick="initQuoteQuiz()">Consult Folio Again</button>
      </div>
    `;
    return;
  }
  const q = QUOTES[quoteIdx];
  container.innerHTML = `
    <div style="background:#23140c;color:#e8c872;padding:1.4rem;border-radius:4px;margin-bottom:1.2rem;border:1px solid rgba(232,200,114,.35);">
      <p style="font:italic 1.25rem/1.6 'IM Fell English',serif;margin-bottom:.5rem;">${q.text}</p>
      <span style="font:.78rem 'Work Sans',sans-serif;color:#f1e3c8;opacity:.8;display:block;">Epoch: ${q.era}</span>
    </div>
    <p style="font-weight:bold;color:#7a1f2b;margin-bottom:1rem;">Identify the author of this passage:</p>
    <div>
      ${q.options.map(opt => `<button class="quiz-opt-btn" onclick="evalQuoteQuiz('${opt}')">${opt}</button>`).join("")}
    </div>
    <div id="quote-feedback" style="margin-top:1rem;font-size:.95rem;"></div>
  `;
}

window.evalQuoteQuiz = (selected) => {
  const q = QUOTES[quoteIdx];
  const fb = document.getElementById("quote-feedback");
  if (!fb) return;
  if (selected === q.author) {
    quoteScore++;
    fb.innerHTML = `<p style="color:#2d5a37;font-weight:bold;margin-bottom:.5rem;">✓ Splendid! ${q.author}</p><p style="color:#352014;">From <em>${q.work}</em>.</p>`;
  } else {
    fb.innerHTML = `<p style="color:#7a1f2b;font-weight:bold;margin-bottom:.5rem;">✗ Penned by ${q.author}.</p><p style="color:#352014;">From <em>${q.work}</em>.</p>`;
  }
  setTimeout(() => {
    quoteIdx++;
    renderQuoteQuiz();
  }, 2000);
};

const CAREER_SCENARIOS = [
  {
    prompt: "A heated diplomatic controversy threatens to derail an international climate treaty. How do you intervene?",
    options: [
      { text: "Draft an airtight bilateral compromise clause balancing legal liability with sovereign carbon limits.", track: "law" },
      { text: "Publish an investigative report uncovering behind-the-scenes financial conflicts of interest.", track: "media" },
      { text: "Design a high-impact narrative campaign with emotional speeches that sway global public sentiment.", track: "pr" },
      { text: "Fine-tune the multilingual translation prompts on the summit's live AI summarization models.", track: "tech" }
    ]
  },
  {
    prompt: "You are entrusted with creating the definitive publication of a previously undiscovered manuscript. Your primary focus is:",
    options: [
      { text: "Painstakingly annotating historical idioms and verifying provenance across rare archives.", track: "academia" },
      { text: "Curating a prestigious commercial launch, securing reviews in international literary supplements.", track: "publishing" },
      { text: "Securing global copyright protection and intellectual property syndication licenses.", track: "law" },
      { text: "Adapting the manuscript's world-building into an interactive narrative game engine.", track: "tech" }
    ]
  },
  {
    prompt: "When speaking in front of an amphitheatre of 500 sceptics, your greatest weapon is:",
    options: [
      { text: "Syllogistic logic, statutory precedent, and unshakeable cross-examination instincts.", track: "law" },
      { text: "Incisive journalistic facts corroborated by verifiable on-the-ground reporting.", track: "media" },
      { text: "Hypnotic vocal cadence, downward inflection, and evocative classical metaphors.", track: "pr" },
      { text: "Clear conceptual pedagogy that makes complex abstractions intuitive to every listener.", track: "academia" }
    ]
  }
];

let careerStep = 0;
let careerScores = { law: 0, media: 0, pr: 0, tech: 0, academia: 0, publishing: 0 };

window.initCareerQuiz = () => {
  careerStep = 0;
  careerScores = { law: 0, media: 0, pr: 0, tech: 0, academia: 0, publishing: 0 };
  renderCareerStep();
};

function renderCareerStep() {
  const container = document.getElementById("quiz-container");
  if (!container) return;
  if (careerStep >= CAREER_SCENARIOS.length) {
    const highest = Object.keys(careerScores).reduce((a, b) => careerScores[a] >= careerScores[b] ? a : b);
    const profiles = {
      law: { title: "The Master Advocate / Senior Jurist", desc: "Your analytical precision and rhetoric suit you for Supreme Court litigation, constitutional policy, and international treaties." },
      media: { title: "The Investigative Editor / Chief Correspondent", desc: "You have an instinct for uncovering hidden truths, rigorous fact-checking, and narrative storytelling under pressure." },
      pr: { title: "The Director of Executive Communications / Speechwriter", desc: "You possess the rare gift of commanding public sentiment, framing crisis narratives, and coaching statesmen." },
      tech: { title: "The AI Semantic Architect & Prompt Strategist", desc: "You bridge human language and machine intelligence, authoring prompt systems and synthetic conversational models." },
      academia: { title: "The University Dean & Critical Theorist", desc: "Your passion lies in literary research, archival discovery, and shaping the intellectual curriculum of the next generation." },
      publishing: { title: "The Editorial Director & Publisher", desc: "You shape literary culture, discovering new voices and transforming raw manuscripts into immortal books." }
    };
    const res = profiles[highest] || profiles.law;
    container.innerHTML = `
      <div style="text-align:center;padding:1rem;">
        <span class="game-card-tag">Destiny Revealed</span>
        <h3 style="font-family:Cinzel,serif;color:#7a1f2b;font-size:1.8rem;margin:1rem 0;">${res.title}</h3>
        <p style="font-size:1.15rem;line-height:1.7;margin-bottom:1.5rem;color:#352014;">${res.desc}</p>
        <p style="font-size:.95rem;background:#e8d7b3;padding:1rem;border-radius:4px;color:#7a1f2b;font-weight:bold;">Next Step: Explore Act II (The Careers) and Act III (The Colleges) to pursue your calling.</p>
        <button class="game-btn" style="margin-top:1.5rem;" onclick="initCareerQuiz()">Retake Destiny Test</button>
      </div>
    `;
    return;
  }
  const s = CAREER_SCENARIOS[careerStep];
  container.innerHTML = `
    <h4 style="font-family:Cinzel,serif;color:#7a1f2b;margin-bottom:.5rem;">Scenario ${careerStep + 1} of ${CAREER_SCENARIOS.length}</h4>
    <p style="font-size:1.15rem;line-height:1.6;margin-bottom:1.2rem;font-weight:bold;">${s.prompt}</p>
    <div>
      ${s.options.map((opt, i) => `<button class="quiz-opt-btn" onclick="recordCareerChoice('${opt.track}')">${opt.text}</button>`).join("")}
    </div>
  `;
}

window.recordCareerChoice = (track) => {
  if (careerScores[track] !== undefined) careerScores[track] += 10;
  careerStep++;
  renderCareerStep();
};

const COLLEGES_DB = [
  { name: "St. Stephen's College", city: "Delhi", univ: "University of Delhi", honors: "BA / MA English Honours", spec: "Critical Theory, Colonial Discourse, Civil Services Oratory", tag: "Theory · Co-ed · Central", founded: "1881" },
  { name: "Lady Shri Ram College for Women", city: "Delhi", univ: "University of Delhi", honors: "BA Honours in English", spec: "Feminist Rhetoric, World Literature, Premier Debate Society", tag: "Theory · Women's · Central", founded: "1956" },
  { name: "St. Xavier's College", city: "Mumbai", univ: "Autonomous Institution (NAAC A+)", honors: "BA in English Literature & Media", spec: "Creative Writing, Film Studies, Publishing Industry Ties", tag: "Practical · Co-ed · Autonomous", founded: "1869" },
  { name: "Presidency University", city: "Kolkata", univ: "State Central University", honors: "BA / MA in English", spec: "Comparative Literature, Postcolonial Studies, Bengal Renaissance", tag: "Theory · Co-ed · Heritage", founded: "1817" },
  { name: "English and Foreign Languages University (EFLU)", city: "Hyderabad", univ: "Central University", honors: "BA / MA / PhD in English Literature & Linguistics", spec: "Phonetics, ELT Technology, Computational Linguistics, Translation", tag: "Specialized · Co-ed · Central", founded: "1958" },
  { name: "Ashoka University", city: "Sonipat", univ: "Private Liberal Arts", honors: "BA (Hons) English & Creative Writing", spec: "Interdisciplinary Humanities, Media Studies, Critical Thinking", tag: "Modern · Co-ed · Residential", founded: "2014" }
];

let activeCollegeFilter = "All";

window.initCollegeFilter = () => {
  const fBox = document.getElementById("college-filters");
  if (!fBox) return;
  const categories = ["All", "Delhi", "Mumbai", "Kolkata", "Hyderabad", "Theory", "Practical"];
  fBox.innerHTML = categories.map(c => `
    <button class="college-tag-btn ${c === activeCollegeFilter ? 'active' : ''}" onclick="setCollegeFilter('${c}')">${c}</button>
  `).join("");
  renderFilteredColleges();
};

window.setCollegeFilter = (cat) => {
  activeCollegeFilter = cat;
  window.initCollegeFilter();
};

function renderFilteredColleges() {
  const rBox = document.getElementById("college-results");
  if (!rBox) return;
  let matches = COLLEGES_DB;
  if (activeCollegeFilter !== "All") {
    matches = COLLEGES_DB.filter(c => c.city === activeCollegeFilter || c.tag.includes(activeCollegeFilter));
  }
  rBox.innerHTML = matches.map(c => `
    <div class="college-card-item">
      <h4>${c.name} — <span style="font-size:.9rem;color:#6b202a;">${c.city}</span></h4>
      <p style="font-size:.92rem;margin-bottom:.3rem;"><strong>Program:</strong> ${c.honors} (${c.univ})</p>
      <p style="font-size:.92rem;margin-bottom:.4rem;"><strong>Specialization:</strong> ${c.spec}</p>
      <span class="game-card-tag" style="font-size:.7rem;">Est. ${c.founded} · ${c.tag}</span>
    </div>
  `).join("");
}

const STORY_NODES = {
  start: {
    title: "Arrival on London's Southwark, May 1599",
    text: "The bells of St. Paul's toll across the Thames. You arrive at London's Southwark with five pence in your doublet and an inkhorn at your belt. Across the marsh rise two rival amphitheatres: The Rose, where Philip Henslowe's players are rehearsing a bloody revenge tragedy, and the freshly erected wooden O — The Globe, where William Shakespeare is finishing a new comedy.",
    choices: [
      { text: "Seek an audience with Will Shakespeare at the Globe's tiring-house.", next: "globe" },
      { text: "Offer your pen to Henslowe at the Rose Theatre for quick coin.", next: "rose" },
      { text: "Slip into the Mermaid Tavern to spy on rival playwrights' verses.", next: "tavern" }
    ]
  },
  globe: {
    title: "The Tiring-House of the Globe",
    text: "Shakespeare sits on a costume wicker chest, scratching lines for As You Like It with a goose quill. 'We lack a boy player who can deliver witty epigrams with a courtly French lisp,' he murmurs, appraising your poise.",
    choices: [
      { text: "Improvise an audacious rhyming couplet on courtly folly.", next: "shakespeare_applause" },
      { text: "Offer to recopy and standardize his foul papers into fair copy.", next: "scribe_path" }
    ]
  },
  rose: {
    title: "Philip Henslowe's Money-Box",
    text: "Henslowe bites a silver groat. 'Tragedies are what fill the groundlings' pit! Five duels, two ghosts, and poison in a skull! Can you deliver five acts by Michaelmas?'",
    choices: [
      { text: "Accept the contract and write a furious revenge drama.", next: "revenge_success" },
      { text: "Argue that intellectual philosophical soliloquies draw the nobility.", next: "henslowe_refusal" }
    ]
  },
  tavern: {
    title: "The Mermaid Tavern",
    text: "Canary wine flows. Ben Jonson is railing against writers who lack Greek and Latin grammar. John Donne smiles quietly into his cup. Jonson slaps the oak table: 'Give me one perfect pentameter line, or buy the tavern a round!'",
    choices: [
      { text: "Recite an impeccably stressed iambic hexameter line.", next: "jonson_friendship" },
      { text: "Debate Donne on metaphysical conceits and sacred sonnets.", next: "donne_path" }
    ]
  },
  shakespeare_applause: {
    title: "The King's Herald: Triumph!",
    text: "Shakespeare laughs aloud: 'By Saint George, the ear is true!' You are cast in the premiere at Court before Queen Elizabeth. Your theatrical fortune is forged.",
    choices: [{ text: "Begin Another Journey", next: "start" }]
  },
  scribe_path: {
    title: "Master of the First Folio",
    text: "Your scrupulous hand preserves his fragile pages from tavern fires. Years later, Heminge and Condell name you lead editor of the 1623 First Folio.",
    choices: [{ text: "Begin Another Journey", next: "start" }]
  },
  revenge_success: {
    title: "Master of the Jacobean Stage",
    text: "Your play 'The Ghost of Verona' plays to roaring sold-out pits for three seasons. Henslowe pays you forty shillings in gold.",
    choices: [{ text: "Begin Another Journey", next: "start" }]
  },
  henslowe_refusal: {
    title: "Pauper's Lane",
    text: "Henslowe throws a stale turnip at your doublet. You wander to Grub Street to launch a satirical pamphlet press.",
    choices: [{ text: "Begin Another Journey", next: "start" }]
  },
  jonson_friendship: {
    title: "Inducted into the Tribe of Ben",
    text: "Jonson roars with approval and buys you a flagon of malmsey wine. You are officially inaugurated into the poetic elite of Jacobean London.",
    choices: [{ text: "Begin Another Journey", next: "start" }]
  },
  donne_path: {
    title: "The Metaphysical Scholar",
    text: "Donne takes you under his wing at St. Paul's Cathedral. You master the craft of profound paradox and religious oratory.",
    choices: [{ text: "Begin Another Journey", next: "start" }]
  }
};

window.initStoryAdventure = () => {
  renderStoryNode("start");
};

function renderStoryNode(nodeKey) {
  const container = document.getElementById("story-container");
  if (!container) return;
  const node = STORY_NODES[nodeKey] || STORY_NODES.start;
  container.innerHTML = `
    <h3 style="font-family:Cinzel,serif;color:#7a1f2b;font-size:1.5rem;margin-bottom:.8rem;">${node.title}</h3>
    <p style="font-size:1.12rem;line-height:1.75;margin-bottom:1.4rem;color:#352014;">${node.text}</p>
    <div>
      ${node.choices.map(c => `<button class="story-branch-btn" onclick="renderStoryNode('${c.next}')">${c.text}</button>`).join("")}
    </div>
  `;
}

const DEBATE_MOTIONS = [
  {
    motion: "This House Believes Artificial Intelligence Will Elevate, Rather Than Degrade, The Human Essayist.",
    context: "Does synthetic language generation liberate writers to focus on high-level philosophical synthesis, or does it erode semantic depth?"
  },
  {
    motion: "This House Asserts That Indian English Is A Fully Autonomous Sovereign Dialect Of World Literature.",
    context: "R.K. Narayan, Salman Rushdie, and Arundhati Roy proved that Indian idiom, cadence, and syntactic inventiveness enrich the global canon."
  },
  {
    motion: "This House Would Mandate Formal Rhetoric And Oratory In All Secondary School Curricula.",
    context: "In an age of digital polarisation, the ability to formulate logical syllogisms and deliver civil oral counterarguments is a pillar of democracy."
  },
  {
    motion: "This House Contends That Literary Fiction Cultivates Greater Moral Empathy Than Moral Philosophy.",
    context: "Does experiencing narrative interiority through another mind train emotional intelligence in ways abstract treatises cannot?"
  }
];

window.initDebateSpinner = () => {
  const promptBox = document.getElementById("debate-prompt");
  if (promptBox) promptBox.style.display = "none";
};

window.spinDebateWheel = () => {
  const spinner = document.getElementById("debate-spinner");
  const promptBox = document.getElementById("debate-prompt");
  const content = document.getElementById("debate-content");
  if (!spinner || !promptBox) return;
  spinner.classList.add("spinning");
  setTimeout(() => {
    spinner.classList.remove("spinning");
    const m = DEBATE_MOTIONS[Math.floor(Math.random() * DEBATE_MOTIONS.length)];
    promptBox.style.display = "block";
    promptBox.innerHTML = `<strong>Motion of the Day:</strong><br><span style="font-size:1.3rem;color:#7a1f2b;display:block;margin-top:.4rem;">"${m.motion}"</span>`;
    if (content) {
      content.innerHTML = `
        <div style="background:#f5ecdc;border-left:4px solid #7a1f2b;padding:1rem;margin-top:1rem;">
          <p style="font-size:.98rem;line-height:1.6;margin-bottom:.6rem;"><strong>Philosophical Context:</strong> ${m.context}</p>
          <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
            <button class="game-btn" onclick="copyDebatePrompt('${m.motion}')">Copy Motion</button>
            <button class="game-btn game-btn-secondary" onclick="reciteDebatePrompt('${m.motion}')">Declaim Aloud 🔊</button>
          </div>
        </div>
      `;
    }
  }, 1200);
};

window.copyDebatePrompt = (text) => {
  navigator.clipboard.writeText(text).then(() => alert("Motion copied to clipboard for debate preparation!"));
};

window.reciteDebatePrompt = (text) => {
  if ("speechSynthesis" in window) {
    const u = new SpeechSynthesisUtterance("The motion before the house: " + text);
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  }
};

const TYPING_PASSAGES = [
  { era: "Old English (c. 900 AD)", text: "Hwaet we Gardena in geardagum theodcyninga thrym gefrunon hu tha aethelingas ellen fremedon" },
  { era: "Middle English (c. 1387 AD)", text: "Whan that Aprill with his shoures soote the droghte of March hath perced to the roote and bathed every veyne in swich licour" },
  { era: "Early Modern English (c. 1600 AD)", text: "All the world is a stage and all the men and women merely players they have their exits and their entrances" },
  { era: "Late Modern English (1913 AD)", text: "Where the mind is without fear and the head is held high where knowledge is free where the world has not been broken up into fragments" }
];

let typingEraIdx = 0;
let typingStartTime = null;

window.initTypingChallenge = () => {
  typingEraIdx = 0;
  window.resetTypingChallenge();
};

window.resetTypingChallenge = () => {
  typingStartTime = null;
  const p = TYPING_PASSAGES[typingEraIdx];
  const passBox = document.getElementById("type-passage");
  const timer = document.getElementById("type-timer");
  const input = document.getElementById("type-input");
  const result = document.getElementById("type-result");
  const wpm = document.getElementById("type-wpm");
  const acc = document.getElementById("type-acc");
  if (passBox) passBox.textContent = p.text;
  if (timer) timer.textContent = `Era ${typingEraIdx + 1}/4: ${p.era}`;
  if (input) {
    input.value = "";
    input.disabled = false;
    input.focus();
  }
  if (result) result.innerHTML = "";
  if (wpm) wpm.textContent = "WPM: 0";
  if (acc) acc.textContent = "Accuracy: 100%";
};

window.nextTypingEra = () => {
  typingEraIdx = (typingEraIdx + 1) % TYPING_PASSAGES.length;
  window.resetTypingChallenge();
};

window.handleTypingInput = () => {
  const input = document.getElementById("type-input");
  const p = TYPING_PASSAGES[typingEraIdx];
  const wpmEl = document.getElementById("type-wpm");
  const accEl = document.getElementById("type-acc");
  const result = document.getElementById("type-result");
  if (!input) return;
  if (!typingStartTime) typingStartTime = Date.now();
  const typed = input.value;
  const target = p.text;
  let correctChars = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === target[i]) correctChars++;
  }
  const accuracy = typed.length > 0 ? Math.round((correctChars / typed.length) * 100) : 100;
  const elapsedSec = Math.max(1, (Date.now() - typingStartTime) / 1000);
  const wordsTyped = typed.trim().split(/\s+/).length;
  const wpm = Math.round((wordsTyped / elapsedSec) * 60);
  if (wpmEl) wpmEl.textContent = `WPM: ${wpm}`;
  if (accEl) accEl.textContent = `Accuracy: ${accuracy}%`;
  if (typed.trim() === target.trim()) {
    input.disabled = true;
    if (result) {
      result.innerHTML = `
        <div style="background:#2d5a37;color:#f1e3c8;padding:1rem;border-radius:4px;text-align:center;">
          <h4 style="font-family:Cinzel,serif;font-size:1.3rem;">Epoch Transcribed!</h4>
          <p style="font-size:1.1rem;margin-top:.4rem;">Final Speed: ${wpm} WPM | Accuracy: ${accuracy}% in ${elapsedSec.toFixed(1)}s</p>
        </div>
      `;
    }
  }
};

const ACCENT_SAMPLES = [
  {
    variety: "Received Pronunciation (BBC / Queen's English)",
    phrase: "One must remember that language is the living embodiment of thought and civilization.",
    clues: "Non-rhotic 'r', lengthened back vowels in 'bath' and 'past', crisp aspirated consonants.",
    options: ["Received Pronunciation", "General American", "Cockney", "Scottish English"]
  },
  {
    variety: "Standard Indian English",
    phrase: "We are discussing the matter with the committee and will revert back on the proposed roadmap.",
    clues: "Syllable-timed rhythm, retroflex 't' and 'd', distinct unreduced vowels in unstressed positions.",
    options: ["Standard Indian English", "Australian English", "South African English", "Irish English"]
  },
  {
    variety: "General American",
    phrase: "Our corporate headquarters prioritizes innovative leadership and quarterly milestones.",
    clues: "Strong rhoticity (firm postvocalic 'r'), flapping of intervocalic 't' to 'd' in words like 'priority'.",
    options: ["General American", "Received Pronunciation", "Scottish English", "Canadian Maritime"]
  }
];

let accentIdx = 0;

window.initAccentGame = () => {
  accentIdx = Math.floor(Math.random() * ACCENT_SAMPLES.length);
  renderAccentSample();
};

function renderAccentSample() {
  const disp = document.getElementById("accent-display");
  if (!disp) return;
  const s = ACCENT_SAMPLES[accentIdx];
  disp.innerHTML = `
    <div class="accent-card-item">
      <p style="font:italic 1.25rem 'IM Fell English',serif;color:#7a1f2b;margin-bottom:1rem;">"${s.phrase}"</p>
      <button class="game-btn" onclick="reciteAccentLine('${s.phrase}')">Declaim Audio 🔊</button>
    </div>
    <p style="font-weight:bold;margin:1rem 0;color:#7a1f2b;">Identify the linguistic variety:</p>
    <div>
      ${s.options.map(opt => `<button class="quiz-opt-btn" onclick="evalAccentGuess('${opt}')">${opt}</button>`).join("")}
    </div>
    <div id="accent-feedback" style="margin-top:1rem;"></div>
  `;
}

window.reciteAccentLine = (text) => {
  if ("speechSynthesis" in window) {
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  }
};

window.evalAccentGuess = (guess) => {
  const s = ACCENT_SAMPLES[accentIdx];
  const fb = document.getElementById("accent-feedback");
  if (!fb) return;
  if (guess === s.variety) {
    fb.innerHTML = `<p style="color:#2d5a37;font-weight:bold;">✓ Spot on! It is ${s.variety}.</p><p style="font-size:.9rem;color:#352014;margin-top:.4rem;"><strong>Phonetic Clues:</strong> ${s.clues}</p>`;
  } else {
    fb.innerHTML = `<p style="color:#7a1f2b;font-weight:bold;">✗ Incorrect. It was ${s.variety}.</p><p style="font-size:.9rem;color:#352014;margin-top:.4rem;"><strong>Phonetic Clues:</strong> ${s.clues}</p>`;
  }
};

const ARCHAIC_WORDS = [
  { word: "Petrichor", pos: "noun", origin: "Greek petra (stone) + ichor (fluid of the gods)", def: "The pleasant, earthy smell that accompanies the first rain after a long period of warm, dry weather.", quote: "The August monsoon broke over the dusty school grounds, releasing a heady fragrance of petrichor." },
  { word: "Apricity", pos: "noun", origin: "Latin apricitas (warmth of the sun)", def: "The warmth of the sun in the heart of winter.", quote: "Basking in the sweet apricity of a brisk December afternoon on the university quad." },
  { word: "Defenestration", pos: "noun", origin: "Latin de (out of) + fenestra (window)", def: "The act of throwing someone or something out of a window.", quote: "The 1618 Defenestration of Prague ignited thirty years of continental upheaval." },
  { word: "Mellifluous", pos: "adjective", origin: "Latin mel (honey) + fluere (to flow)", def: "A voice or words sweet or musical; pleasant to hear.", quote: "Her mellifluous diction quieted the tempestuous parliamentary gathering." }
];

window.initDailyWord = () => {
  const disp = document.getElementById("word-display");
  if (!disp) return;
  const w = ARCHAIC_WORDS[Math.floor(Math.random() * ARCHAIC_WORDS.length)];
  disp.innerHTML = `
    <div style="background:#23140c;color:#e8c872;padding:1.6rem;border-radius:4px;border:1px solid rgba(232,200,114,.4);text-align:center;">
      <h3 style="font-family:Cinzel,serif;font-size:2.2rem;margin-bottom:.3rem;letter-spacing:.08em;">${w.word}</h3>
      <span style="font:italic 1rem 'IM Fell English',serif;color:#f1e3c8;opacity:.85;">${w.pos} · Etymology: ${w.origin}</span>
      <p style="font-size:1.15rem;line-height:1.6;margin:1.2rem 0;color:#f1e3c8;"><strong>Definition:</strong> ${w.def}</p>
      <div style="background:rgba(201,162,75,.15);padding:1rem;border-radius:3px;font:italic 1.1rem 'IM Fell English',serif;color:#e8c872;">
        "${w.quote}"
      </div>
      <div style="margin-top:1.2rem;">
        <button class="game-btn" onclick="reciteDailyWord('${w.word}', '${w.def}')">Pronounce & Define 🔊</button>
      </div>
    </div>
  `;
};

window.reciteDailyWord = (word, def) => {
  if ("speechSynthesis" in window) {
    const u = new SpeechSynthesisUtterance(word + ". " + def);
    u.rate = 0.88;
    window.speechSynthesis.speak(u);
  }
};

const SPELL_LIST = [
  { word: "RHETORIC", ipa: "/ˈrɛt.ər.ɪk/", clue: "The art of effective or persuasive speaking or writing; Greek rhetorike techne." },
  { word: "CONNOISSEUR", ipa: "/ˌkɒn.əˈsɜːr/", clue: "An expert judge in matters of taste; Old French connoistre (to know)." },
  { word: "ONOMATOPOEIA", ipa: "/ˌɒn.əˌmæt.əˈpiː.ə/", clue: "The formation of a word from a sound associated with what is named; Greek onomatopoiia." },
  { word: "HIERARCHY", ipa: "/ˈhaɪə.rɑː.ki/", clue: "A system in which members of an organization or society are ranked according to status." },
  { word: "SURVEILLANCE", ipa: "/sɜːˈveɪ.ləns/", clue: "Close observation, especially of a suspected spy or criminal; French surveiller." },
  { word: "IDIOSYNCRASY", ipa: "/ˌɪd.i.əˈsɪŋ.krə.si/", clue: "A mode of behaviour or way of thought peculiar to an individual; Greek idiosynkrasia." }
];

let beeIdx = 0;
let beeScore = 0;
let beeStreak = 0;
let beeTimer = 30;
let beeInterval = null;

window.initSpellingBee = () => {
  beeIdx = 0;
  beeScore = 0;
  beeStreak = 0;
  beeTimer = 30;
  if (beeInterval) clearInterval(beeInterval);
  renderBeeWord();
  beeInterval = setInterval(() => {
    beeTimer--;
    const t = document.getElementById("spell-timer");
    if (t) t.textContent = `${beeTimer}s`;
    if (beeTimer <= 0) {
      clearInterval(beeInterval);
      const msg = document.getElementById("spell-msg");
      if (msg) msg.innerHTML = `<span style="color:#7a1f2b;font-size:1.2rem;">Time is up! Final Bee Score: ${beeScore}.</span>`;
      const inp = document.getElementById("spell-input");
      if (inp) inp.disabled = true;
    }
  }, 1000);
};

function renderBeeWord() {
  const p = document.getElementById("spell-word");
  const prog = document.getElementById("spell-progress");
  const str = document.getElementById("spell-streak");
  const inp = document.getElementById("spell-input");
  const msg = document.getElementById("spell-msg");
  if (!p) return;
  const cur = SPELL_LIST[beeIdx % SPELL_LIST.length];
  p.textContent = `Word ${beeIdx + 1}: ${cur.clue.split(";")[0]}`;
  if (prog) prog.textContent = `Score: ${beeScore} / ${beeIdx + 1}`;
  if (str) str.textContent = `Streak: ${beeStreak}`;
  if (inp) {
    inp.value = "";
    inp.disabled = false;
    inp.focus();
  }
  if (msg) msg.textContent = "";
  window.pronounceBeeWord();
}

window.pronounceBeeWord = () => {
  const cur = SPELL_LIST[beeIdx % SPELL_LIST.length];
  if ("speechSynthesis" in window) {
    const u = new SpeechSynthesisUtterance("Please spell: " + cur.word.toLowerCase());
    u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }
};

window.showBeeHint = () => {
  const cur = SPELL_LIST[beeIdx % SPELL_LIST.length];
  const msg = document.getElementById("spell-msg");
  if (msg) msg.innerHTML = `<span style="color:#7a1f2b;">Etymology Hint: ${cur.clue}</span>`;
};

window.checkBeeSpelling = () => {
  if (beeTimer <= 0) return;
  const cur = SPELL_LIST[beeIdx % SPELL_LIST.length];
  const inp = document.getElementById("spell-input");
  const msg = document.getElementById("spell-msg");
  if (!inp || !msg) return;
  const val = inp.value.trim().toUpperCase();
  if (val === cur.word) {
    beeScore += 10;
    beeStreak++;
    msg.innerHTML = `<span style="color:#2d5a37;">✓ Splendid! ${cur.word} is spelled correctly.</span>`;
  } else {
    beeStreak = 0;
    msg.innerHTML = `<span style="color:#7a1f2b;">✗ Misspelled. The authentic orthography is "${cur.word}".</span>`;
  }
  setTimeout(() => {
    beeIdx++;
    renderBeeWord();
  }, 1400);
};

window.closeActiveGameModals = () => {
  document.querySelectorAll('.game-modal.active').forEach(m => m.classList.remove('active'));
  if (chainInterval) { clearInterval(chainInterval); chainInterval = null; }
  if (beeInterval) { clearInterval(beeInterval); beeInterval = null; }
  if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); }
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.game-modal').forEach(m => {
    m.addEventListener('click', e => {
      if (e.target === m) window.closeActiveGameModals();
    });
  });
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => window.closeActiveGameModals());
  });
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.closeActiveGameModals();
  });
  const GAME_TRIGGERS = [
    { modal: 'duel-modal', fn: () => window.initDuel() },
    { modal: 'meter-modal', fn: () => window.initMeter() },
    { modal: 'rhetoric-modal', fn: () => window.initRhetoric() },
    { modal: 'etym-modal', fn: () => window.initEtymology('juggernaut') },
    { modal: 'chain-modal', fn: () => window.initWordChain() },
    { modal: 'quote-modal', fn: () => window.initQuoteQuiz() },
    { modal: 'quiz-modal', fn: () => window.initCareerQuiz() },
    { modal: 'filter-modal', fn: () => window.initCollegeFilter() },
    { modal: 'story-modal', fn: () => window.initStoryAdventure() },
    { modal: 'debate-modal', fn: () => window.initDebateSpinner() },
    { modal: 'type-modal', fn: () => window.initTypingChallenge() },
    { modal: 'accent-modal', fn: () => window.initAccentGame() },
    { modal: 'word-modal', fn: () => window.initDailyWord() },
    { modal: 'spell-modal', fn: () => window.initSpellingBee() }
  ];
  document.querySelectorAll('.games-grid .game-card').forEach((card, idx) => {
    const btn = card.querySelector('.game-btn');
    const trigger = GAME_TRIGGERS[idx];
    if (btn && trigger) {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const m = document.getElementById(trigger.modal);
        if (m) {
          window.closeActiveGameModals();
          m.classList.add('active');
          trigger.fn();
        }
      });
    }
  });
});
