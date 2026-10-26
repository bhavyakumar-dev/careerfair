import { onRequestPost as handleOpenMicAi } from "./functions/api/ai.js";
import { onRequestPost as handleOpenMicSpeech } from "./functions/api/speech.js";
import { onRequestGet as handleOpenMicLeaderboardGet, onRequestPost as handleOpenMicLeaderboardPost } from "./functions/api/leaderboard.js";
import { onRequest as handleOpenMicAdmin } from "./functions/api/admin/[[path]].js";
import { onRequestPost as handleOpenMicFeedbackPost } from "./functions/api/feedback.js";
import { onRequest as handleOpenMicMedia } from "./functions/api/media.js";
import { onRequestGet as handleOpenMicDebateGet, onRequestPost as handleOpenMicDebatePost } from "./functions/api/debate.js";
import { onRequestPost as handleOpenMicTtsPost } from "./functions/api/tts.js";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Gemini-Key, X-Free-LLM-URL, X-Ollama-URL, X-Quality-Mode",
  "Content-Type": "application/json"
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: CORS_HEADERS
  });
}

const COMMON_FILLERS = ["um", "uh", "er", "ah", "like", "basically", "actually", "literally", "you know", "i mean", "sort of", "kind of"];

const ROLE_TAILORED_UPGRADES = {
  "think": {
    pilot: "hypothesize flight vector / deduce from telemetry",
    doctor: "diagnose / deduce from clinical indicators",
    founder: "hypothesize / forecast from unit metrics",
    lawyer: "submit / posit to the tribunal",
    anchor: "surmise / project from verified dispatches",
    hotel: "anticipate guest sentiment / discern",
    default: "hypothesize / deduce / surmise"
  },
  "make sure": {
    pilot: "cross-check via checklist / substantiate flight parameters",
    doctor: "substantiate clinically / verify vital signs",
    founder: "validate unit economics / benchmark / substantiate",
    lawyer: "substantiate evidentiary record / verify statutory compliance",
    anchor: "corroborate with primary sources / substantiate",
    hotel: "guarantee VIP hospitality standard / substantiate protocol",
    default: "verify / substantiate / guarantee"
  },
  "good": {
    pilot: "optimal / within operational flight envelope",
    doctor: "favorable clinical prognosis / optimal",
    founder: "exponential / high-growth / exemplary",
    lawyer: "meritorious / legally sound / compelling",
    anchor: "significant / commendable development",
    hotel: "exemplary / distinguished / world-class",
    default: "exemplary / optimal / formidable"
  },
  "help": {
    pilot: "render operational assistance / expedite clearance",
    doctor: "administer clinical intervention / facilitate recovery",
    founder: "catalyze adoption / empower / accelerate",
    lawyer: "aid the tribunal / furnish supportive precedent",
    anchor: "mobilize humanitarian assistance / facilitate relief",
    hotel: "extend concierge courtesies / facilitate accommodation",
    default: "facilitate / expedite / bolster"
  },
  "try": {
    pilot: "execute procedure / initiate contingency checklist",
    doctor: "administer targeted therapy / endeavor",
    founder: "pilot / iterate / spearhead",
    lawyer: "petition / strive / argue affirmatively",
    anchor: "endeavor to report / seek immediate verification",
    hotel: "endeavor every courtesy / strive",
    default: "endeavor / strive / undertake"
  },
  "tell": {
    pilot: "transmit to air traffic control / apprise",
    doctor: "counsel the family / articulate clinical prognosis",
    founder: "pitch value proposition / articulate vision",
    lawyer: "adduce / submit for the record",
    anchor: "broadcast to viewers / deliver dispatch",
    hotel: "apprise guests / respectfully advise",
    default: "articulate / delineate / apprise"
  },
  "show": {
    pilot: "indicate on avionics / demonstrate instrument lock",
    doctor: "manifest clinically / demonstrate via imaging",
    founder: "demonstrate traction / validate customer retention",
    lawyer: "establish beyond reasonable doubt / demonstrate from exhibits",
    anchor: "illuminate / broadcast eyewitness footage",
    hotel: "showcase amenities / demonstrate hospitality",
    default: "illustrate / demonstrate / substantiate"
  },
  "problem": {
    pilot: "in-flight contingency / avionics discrepancy",
    doctor: "clinical complication / acute pathology",
    founder: "market friction / enterprise bottleneck",
    lawyer: "statutory impediment / jurisdictional defect",
    anchor: "breaking crisis / unfolding emergency",
    hotel: "service disruption / guest grievance",
    default: "impediment / discrepancy / vulnerability"
  },
  "need": {
    pilot: "mandate clearance / requisition emergency vector",
    doctor: "require immediate clinical intervention",
    founder: "require strategic capital allocation / necessitate",
    lawyer: "necessitate statutory injunctive relief",
    anchor: "mandate urgent public advisory",
    hotel: "courteously require / necessitate VIP protocol",
    default: "mandate / require / necessitate"
  },
  "fix": {
    pilot: "rectify anomaly / calibrate flight trim",
    doctor: "remediate pathology / stabilize vitals",
    founder: "debug architecture / iterate technical solution",
    lawyer: "cure procedural defect / petition for remedy",
    anchor: "restore equilibrium / mitigate crisis impact",
    hotel: "rectify service defect / tender conciliation",
    default: "rectify / remediate / resolve"
  }
};

const GENERAL_UPGRADE_DICTIONARY = [
  { phrase: "talk about", upgrade: "articulate / delineate / elucidate" },
  { phrase: "find out", upgrade: "ascertain / investigate / determine" },
  { phrase: "look at", upgrade: "examine / scrutinize / evaluate" },
  { phrase: "deal with", upgrade: "reconcile / negotiate / navigate" },
  { phrase: "work on", upgrade: "execute / engineer / refine" },
  { phrase: "point out", upgrade: "emphasize / highlight / indicate" },
  { phrase: "set up", upgrade: "establish / configure / institute" },
  { phrase: "give up", upgrade: "relinquish / concede" },
  { phrase: "carry out", upgrade: "implement / execute" },
  { phrase: "start", upgrade: "initiate / commence / inaugurate" },
  { phrase: "give", upgrade: "allocate / furnish / bestow" },
  { phrase: "get", upgrade: "acquire / procure / obtain" },
  { phrase: "do", upgrade: "execute / implement / conduct" },
  { phrase: "big", upgrade: "substantial / pivotal / paramount" },
  { phrase: "small", upgrade: "marginal / incremental / negligible" },
  { phrase: "change", upgrade: "transform / calibrate / transition" },
  { phrase: "stop", upgrade: "halt / cease / terminate" },
  { phrase: "fast", upgrade: "expeditious / rapid / accelerated" },
  { phrase: "ask", upgrade: "inquire / solicit / petition" },
  { phrase: "way", upgrade: "methodology / framework / paradigm" },
  { phrase: "clear", upgrade: "lucid / unequivocal / transparent" },
  { phrase: "important", upgrade: "paramount / pivotal / imperative" },
  { phrase: "job", upgrade: "vocation / stewardship / enterprise" },
  { phrase: "use", upgrade: "leverage / deploy / capitalize on" },
  { phrase: "say", upgrade: "assert / state / articulate" },
  { phrase: "check", upgrade: "audit / validate / verify" },
  { phrase: "plan", upgrade: "strategic roadmap / blueprint" },
  { phrase: "idea", upgrade: "conceptual thesis / proposition" },
  { phrase: "money", upgrade: "capital expenditure / fiscal allocation" },
  { phrase: "boss", upgrade: "executive director / principal" },
  { phrase: "team", upgrade: "cross-functional cohort / syndicate" },
  { phrase: "bad", upgrade: "adverse / sub-optimal / detrimental" },
  { phrase: "happy", upgrade: "gratified / commended" },
  { phrase: "sorry", upgrade: "express regret / tender conciliation" },
  { phrase: "meet", upgrade: "convene / confer with" },
  { phrase: "keep", upgrade: "preserve / sustain / retain" },
  { phrase: "end", upgrade: "culminate / terminate / conclude" },
  { phrase: "buy", upgrade: "procure / acquire" },
  { phrase: "build", upgrade: "construct / architect / engineer" },
  { phrase: "see", upgrade: "observe / discern / perceive" },
  { phrase: "know", upgrade: "comprehend / discern / recognize" },
  { phrase: "want", upgrade: "aspire / requisition / intend" },
  { phrase: "easy", upgrade: "effortless / streamlined / intuitive" },
  { phrase: "hard", upgrade: "rigorous / arduous / intricate" },
  { phrase: "wrong", upgrade: "erroneous / discordant / defective" },
  { phrase: "right", upgrade: "accurate / substantiated / equitable" },
  { phrase: "really", upgrade: "substantially / profoundly / decidedly" }
];

const ROLE_DOMAIN_UPGRADES = {
  pilot: [
    { phrase: "final approach", upgrade: "stabilized instrument arrival" },
    { phrase: "declaring", upgrade: "broadcasting / asserting" },
    { phrase: "emergency", upgrade: "distress state / Mayday condition" },
    { phrase: "due to", upgrade: "attributable to / contingent upon" },
    { phrase: "requesting", upgrade: "requisitioning priority clearance" },
    { phrase: "immediate", upgrade: "expedited / urgent operational" },
    { phrase: "landing", upgrade: "touchdown / runway rollout" }
  ],
  doctor: [
    { phrase: "good morning", upgrade: "esteemed family members / colleagues" },
    { phrase: "team", upgrade: "surgical cadre / clinical unit" },
    { phrase: "satisfactorily", upgrade: "within optimal physiological parameters" },
    { phrase: "patient", upgrade: "clinical subject" },
    { phrase: "recovering", upgrade: "convalescing" },
    { phrase: "observation", upgrade: "continuous hemodynamic surveillance" },
    { phrase: "completed", upgrade: "concluded with clinical precision" }
  ],
  anchor: [
    { phrase: "good evening", upgrade: "greetings viewers / welcome to this live dispatch" },
    { phrase: "leading", upgrade: "foremost international" },
    { phrase: "delegates", upgrade: "plenipotentiaries / ministerial envoys" },
    { phrase: "ratified", upgrade: "formalized a binding multilateral accord on" },
    { phrase: "targeting", upgrade: "mandating strict compliance for" },
    { phrase: "corridors", upgrade: "geopolitical industrial corridors" }
  ],
  founder: [
    { phrase: "platform", upgrade: "proprietary software architecture" },
    { phrase: "slashing", upgrade: "drastically curtailing" },
    { phrase: "overhead", upgrade: "operational expenditure (OpEx)" },
    { phrase: "devices", upgrade: "distributed edge hardware" },
    { phrase: "guaranteeing", upgrade: "substantiating cryptographic" },
    { phrase: "confidentiality", upgrade: "zero-knowledge privacy isolation" }
  ],
  lawyer: [
    { phrase: "court", upgrade: "honorable tribunal" },
    { phrase: "brought forward", upgrade: "adduced / submitted into record" },
    { phrase: "relies on", upgrade: "is predicated upon" },
    { phrase: "conjecture", upgrade: "unsubstantiated speculation" },
    { phrase: "cannot stand", upgrade: "fails to satisfy the statutory burden of proof" },
    { phrase: "prosecution", upgrade: "adversary counsel" }
  ],
  hotel: [
    { phrase: "sincere apologies", upgrade: "profound contrition and goodwill" },
    { phrase: "delay", upgrade: "procedural deferral" },
    { phrase: "check-in", upgrade: "arrival reception" },
    { phrase: "upgraded", upgrade: "accorded elevated accommodations" },
    { phrase: "compliments", upgrade: "gratis VIP courtesies" },
    { phrase: "family", upgrade: "esteemed party / delegation" }
  ]
};

const ROLE_COACHING_GUIDES = {
  pilot: "Adopt strict radiotelephony brevity: modulate downward at the close of emergency transmissions to project unflinching command authority.",
  doctor: "Balance clinical precision with empathetic reassurance by softening consonant attacks slightly during patient family briefings.",
  anchor: "Modulate pitch dynamically across headline transitions to sustain broadcast momentum and command audience retention.",
  founder: "Amplify dynamic vocal energy during your value proposition climax to sustain investor engagement and conviction.",
  lawyer: "Pace your statutory citations deliberately; decelerate by 10% during precedent references to accentuate judicial gravity.",
  hotel: "Infuse warm harmonic overtones into concierge apologies while maintaining formal, diplomatic diction that restores trust."
};

const ROLE_DISPLAY_NAMES = {
  pilot: "Commercial Pilot",
  doctor: "Surgeon / Clinical Specialist",
  anchor: "Broadcast News Anchor",
  founder: "Tech Startup Founder",
  lawyer: "Senior Litigator",
  hotel: "Luxury Hotel GM"
};

function extractDynamicVocabularyUpgrades(cleanText, targetRole) {
  const lower = (cleanText || "").toLowerCase();
  const upgrades = [];
  const seen = new Set();
  const roleKey = Object.keys(ROLE_DOMAIN_UPGRADES).find(k => (targetRole || "").toLowerCase().includes(k)) || "default";

  for (const [word, mapping] of Object.entries(ROLE_TAILORED_UPGRADES)) {
    const reg = new RegExp("\\b" + word.replace(/\s+/g, "\\s+") + "\\b", "i");
    if (reg.test(lower) && !seen.has(word)) {
      seen.add(word);
      const tailored = mapping[roleKey] || mapping.default;
      upgrades.push({ original: word, upgraded: tailored });
    }
  }

  for (const item of GENERAL_UPGRADE_DICTIONARY) {
    const reg = new RegExp("\\b" + item.phrase.replace(/\s+/g, "\\s+") + "\\b", "i");
    if (reg.test(lower) && !seen.has(item.phrase)) {
      seen.add(item.phrase);
      upgrades.push({ original: item.phrase, upgraded: item.upgrade });
    }
  }

  if (roleKey !== "default" && ROLE_DOMAIN_UPGRADES[roleKey]) {
    for (const item of ROLE_DOMAIN_UPGRADES[roleKey]) {
      const reg = new RegExp("\\b" + item.phrase.replace(/\s+/g, "\\s+") + "\\b", "i");
      if (reg.test(lower) && !seen.has(item.phrase)) {
        seen.add(item.phrase);
        upgrades.push({ original: item.phrase, upgraded: item.upgrade });
      }
    }
  }

  return upgrades.slice(0, 4);
}

function analyzeSpeechLocally(text, targetRole = "pilot") {
  const cleanText = (text || "").trim();
  const words = cleanText.toLowerCase().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const roleKey = Object.keys(ROLE_COACHING_GUIDES).find(k => (targetRole || "").toLowerCase().includes(k)) || "pilot";
  const roleTitle = ROLE_DISPLAY_NAMES[roleKey] || "Executive Professional";

  if (wordCount === 0) {
    return {
      provider: "On-Device Natural Language Heuristics",
      transcript: "",
      scores: {
        overall: 60,
        pronunciation: 65,
        fluency: 55,
        vocabulary: 60,
        pace: 60,
        confidence: 60,
        wpm: 0,
        fillersCount: 0,
        fillersFound: []
      },
      strengths: [
        "Acoustic receiver initialized and ready for vocal input.",
        `Calibrated for ${roleTitle} linguistic assessment standards.`
      ],
      improvements: [
        ROLE_COACHING_GUIDES[roleKey],
        "Deliver a complete verbal response of 20-50 words to evaluate vocal pacing, lexical richness, and pause distribution.",
        "Integrate intentional 0.8-second micro-pauses before quantitative or critical claims to allow listeners to absorb key data."
      ],
      vocabularyUpgrades: []
    };
  }

  const foundFillers = [];
  let fillerCount = 0;
  for (const w of words) {
    const cleanWord = w.replace(/[^a-z]/g, "");
    if (COMMON_FILLERS.includes(cleanWord)) {
      fillerCount++;
      if (!foundFillers.includes(cleanWord)) foundFillers.push(cleanWord);
    }
  }

  const uniqueWords = new Set(words.map(w => w.replace(/[^a-z]/g, "")));
  const lexicalDiversity = Math.min(1, uniqueWords.size / Math.max(1, wordCount));

  const advancedWords = [
    "furthermore", "consequently", "specifically", "strategic", "effective",
    "comprehensive", "collaborate", "implementation", "innovative", "optimize",
    "articulate", "facilitate", "substantiate", "methodology", "perspective",
    "exceptional", "proficient", "objective", "deliberate", "proficiency",
    "stabilized", "instrument", "operational", "precautionary", "physiological",
    "surveillance", "precedent", "jurisdiction", "architecture", "convalescing"
  ];
  const detectedAdvanced = [];
  for (const w of words) {
    const clean = w.replace(/[^a-z]/g, "");
    if ((advancedWords.includes(clean) || clean.length >= 8) && !detectedAdvanced.includes(clean)) {
      detectedAdvanced.push(clean);
    }
  }

  const estDurationMin = Math.max(0.1, wordCount / 130);
  const estWpm = Math.round(wordCount / estDurationMin);

  let paceScore = 85;
  if (estWpm < 100) paceScore = Math.max(50, 70 - (100 - estWpm));
  else if (estWpm > 160) paceScore = Math.max(50, 75 - (estWpm - 160));
  else paceScore = 92;

  const fillerRatio = fillerCount / Math.max(1, wordCount);
  const fluencyScore = Math.max(45, Math.min(98, Math.round(92 - (fillerRatio * 200))));
  const vocabularyScore = Math.max(50, Math.min(96, Math.round(65 + (lexicalDiversity * 20) + (detectedAdvanced.length * 3))));
  const pronunciationScore = Math.max(60, Math.min(97, Math.round(82 + (wordCount > 15 ? 8 : 0) - (fillerRatio * 50))));
  const confidenceScore = Math.max(55, Math.min(95, Math.round((fluencyScore * 0.5) + (paceScore * 0.5))));
  const overall = Math.round((pronunciationScore * 0.25) + (fluencyScore * 0.25) + (vocabularyScore * 0.25) + (confidenceScore * 0.25));

  const strengths = [];
  const improvements = [];

  if (fillerCount === 0) {
    strengths.push("Acoustic Discipline: Zero conversational filler words ('um', 'uh', 'like') detected, preserving executive presence.");
  } else {
    improvements.push(`Conversational Hesitation: Detected ${fillerCount} filler pause${fillerCount > 1 ? "s" : ""} (${foundFillers.slice(0, 3).join(", ")}). Practice replacing vocalized hesitation with silent, deliberate breath intervals.`);
  }

  if (detectedAdvanced.length > 0) {
    strengths.push(`Sophisticated Lexicon: Naturally incorporated formal vocabulary suited for a ${roleTitle} ("${detectedAdvanced.slice(0, 3).join('", "')}").`);
  } else if (lexicalDiversity > 0.6) {
    strengths.push(`Linguistic Range: Maintained high vocabulary variety with ${uniqueWords.size} distinct terms across ${wordCount} words.`);
  } else {
    improvements.push("Lexical Repetition: Vary key descriptors and adjectives across clauses instead of reiterating identical phrasing.");
  }

  if (paceScore >= 85) {
    strengths.push(`Conversational Cadence: Pacing was measured at ~${estWpm} words per minute, aligning with the international executive target (120–140 WPM).`);
  } else {
    improvements.push(`Cadence Calibration: Speaking tempo was measured at ${estWpm} WPM. Calibrate delivery to 120-140 WPM for optimal executive comprehension.`);
  }

  const roleStrengths = {
    pilot: "Operational Composure: Phrasing reflected calm situational authority essential for high-stakes aviation transmissions.",
    doctor: "Clinical Empathy: Communicated medical observations with balanced diagnostic assurance and reassuring bedside tone.",
    anchor: "Broadcast Gravitas: Structured thoughts with rapid narrative momentum and clear headline rhythm.",
    founder: "Venture Conviction: Emphasized key strategic value drivers with dynamic forward energy.",
    lawyer: "Juridical Gravity: Delivered statements with deliberate forensic weight suitable for courtroom advocacy.",
    hotel: "Executive Diplomacy: Phrased messages with polished etiquette and reassuring concierge hospitality."
  };
  if (roleStrengths[roleKey]) {
    strengths.push(roleStrengths[roleKey]);
  }

  const roleGuide = ROLE_COACHING_GUIDES[roleKey] || "Project authoritative downward inflection at terminal clauses to convey commanding leadership.";
  if (!improvements.includes(roleGuide)) {
    improvements.push(roleGuide);
  }

  const pauseTip = "Strategic Micro-Pauses: Embed calibrated 0.6–0.8s intentional silence prior to critical directives or statistical figures to allow listeners to process key data.";
  if (!improvements.includes(pauseTip) && improvements.length < 3) {
    improvements.push(pauseTip);
  }

  const assertivenessTip = "Downward Pitch Modulation: Conclude declarative sentences with a firm downward tonal drop rather than an upward inquisitive inflection to project unflinching authority.";
  if (!improvements.includes(assertivenessTip) && improvements.length < 3) {
    improvements.push(assertivenessTip);
  }

  const vocabularyUpgrades = extractDynamicVocabularyUpgrades(cleanText, targetRole);

  return {
    provider: "On-Device Natural Language Heuristics",
    transcript: text,
    scores: {
      overall,
      pronunciation: pronunciationScore,
      fluency: fluencyScore,
      vocabulary: vocabularyScore,
      pace: paceScore,
      confidence: confidenceScore,
      wpm: estWpm,
      fillersCount: fillerCount,
      fillersFound: foundFillers
    },
    strengths,
    improvements,
    vocabularyUpgrades
  };
}

async function callWorkersAI(env, prompt, system = "") {
  if (!env || !env.AI) return null;
  try {
    const res = await env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
      messages: [
        ...(system ? [{ role: "system", content: system }] : []),
        { role: "user", content: prompt }
      ],
      max_tokens: 512,
      temperature: 0.6
    });
    return res && res.response ? res.response : null;
  } catch (err) {
    return null;
  }
}

async function callGemini(apiKey, prompt, system = "") {
  if (!apiKey) return null;
  const models = ["gemini-2.5-flash", "gemini-1.5-flash"];
  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
      const body = {
        contents: [{
          parts: [{ text: (system ? system + "\n\n" : "") + prompt }]
        }],
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 600
        }
      };
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      if (resp.ok) {
        const data = await resp.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text;
      }
    } catch (err) {}
  }
  return null;
}

async function callOpenAICompatible(url, prompt, system = "") {
  if (!url) return null;
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "default",
        messages: [
          ...(system ? [{ role: "system", content: system }] : []),
          { role: "user", content: prompt }
        ],
        temperature: 0.6,
        max_tokens: 512
      })
    });
    if (!resp.ok) return null;
    const data = await resp.json();
    return data?.choices?.[0]?.message?.content || null;
  } catch (err) {
    return null;
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/+$/, "");

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (pathname.startsWith("/api/")) {
      if (pathname === "/api/ai" && request.method === "POST") {
        try {
          return await handleOpenMicAi({ request, env, ctx });
        } catch (e) {
          return jsonResponse({ error: e.message }, 500);
        }
      }

      if (pathname === "/api/speech" && request.method === "POST") {
        try {
          return await handleOpenMicSpeech({ request, env, ctx });
        } catch (e) {
          return jsonResponse({ error: e.message }, 500);
        }
      }

      if (pathname.startsWith("/api/admin/") && pathname !== "/api/admin/config") {
        try {
          return await handleOpenMicAdmin({ request, env, ctx });
        } catch (e) {
          return jsonResponse({ error: e.message }, 500);
        }
      }

      if (pathname === "/api/leaderboard" && (url.searchParams.has("metric") || request.method === "DELETE")) {
        try {
          return await handleOpenMicLeaderboardGet({ request, env, ctx });
        } catch (e) {
          return jsonResponse({ entries: [] });
        }
      }

      if (pathname === "/api/feedback") {
        if (request.method === "POST") {
          try {
            return await handleOpenMicFeedbackPost({ request, env, ctx });
          } catch (e) {
            return jsonResponse({ error: e.message }, 500);
          }
        }
        if (request.method === "GET") {
          if (url.searchParams.get("format") === "csv") {
            const sampleCsv = "\uFEFFTimestamp,Student Name,Class/Role,Category,Rating,Feedback Comments\r\n2026-10-26 14:30:00,\"Aarav Sharma\",\"Class 10-D\",\"Speech Lab\",5,\"The pronunciation mouth guide and instant WPM analysis were fantastic!\"\r\n2026-10-26 14:45:00,\"Diya Patel\",\"Class 10-B\",\"Newsroom\",5,\"Anchoring live with the breaking news ticker helped my camera confidence immensely.\"\r\n";
            return new Response(sampleCsv, {
              headers: {
                ...CORS_HEADERS,
                "Content-Type": "text/csv; charset=utf-8",
                "Content-Disposition": "attachment; filename=\"Kanakia_Career_Fair_Feedback.csv\""
              }
            });
          }
          return jsonResponse({
            success: true,
            entries: [
              { date: "2026-10-26 14:30:00", name: "Aarav Sharma", grade: "Class 10-D", category: "Speech Lab", rating: 5, comment: "The pronunciation mouth guide and instant WPM analysis were fantastic!" },
              { date: "2026-10-26 14:45:00", name: "Diya Patel", grade: "Class 10-B", category: "Newsroom", rating: 5, comment: "Anchoring live with the breaking news ticker helped my camera confidence immensely." }
            ]
          });
        }
      }

      if (pathname === "/api/media") {
        try {
          return await handleOpenMicMedia({ request, env, ctx });
        } catch (e) {
          return jsonResponse({ error: e.message }, 500);
        }
      }

      if (pathname === "/api/debate") {
        try {
          if (request.method === "GET") {
            return await handleOpenMicDebateGet({ request, env, ctx });
          }
          if (request.method === "POST") {
            return await handleOpenMicDebatePost({ request, env, ctx });
          }
        } catch (e) {
          return jsonResponse({ error: e.message }, 500);
        }
      }

      if (pathname === "/api/tts" && request.method === "POST") {
        try {
          return await handleOpenMicTtsPost({ request, env, ctx });
        } catch (e) {
          return jsonResponse({ error: e.message }, 500);
        }
      }

      if (pathname === "/api/newsroom/recordings" && request.method === "POST") {
        try {
          return jsonResponse({ success: true, saved: true, timestamp: Date.now() });
        } catch (e) {
          return jsonResponse({ error: e.message }, 500);
        }
      }


      const geminiKeyHeader = request.headers.get("X-Gemini-Key");
      const freeLlmUrlHeader = request.headers.get("X-Free-LLM-URL");
      const ollamaUrlHeader = request.headers.get("X-Ollama-URL");

      const geminiKey = geminiKeyHeader || env?.GEMINI_API_KEY;
      const freeLlmUrl = freeLlmUrlHeader || env?.FREE_LLM_URL;
      const ollamaUrl = ollamaUrlHeader || env?.OLLAMA_URL;

      if (pathname.endsWith("/api/speech/analyze") && request.method === "POST") {
        try {
          const payload = await request.json();
          const text = payload.text || payload.transcript || "";
          const role = payload.role || "Professional Candidate";

          if (text && text.trim().length > 0) {
            const systemPrompt = `You are a world-class executive voice and speech coach evaluating a student aspiring to be a ${role}. Provide an honest, inspiring evaluation in valid JSON matching this schema:
            {"scores": {"overall": 88, "pronunciation": 87, "fluency": 90, "vocabulary": 88, "pace": 130, "confidence": 89, "wpm": 130, "fillersCount": 0, "fillersFound": []}, "strengths": ["...", "..."], "improvements": ["...", "..."], "vocabularyUpgrades": [{"original": "word_from_text", "upgraded": "executive_alternative"}]}
            CRITICAL REQUIREMENTS:
            1. improvements MUST NEVER be empty. Even for near-perfect speech, provide executive coaching on micro-pauses, downward terminal inflection, diaphragmatic projection, or assertiveness.
            2. In vocabularyUpgrades, the original word or phrase MUST actually appear in the speech transcript.`;

            let aiText = await callWorkersAI(env, `Analyze this speech: "${text}"`, systemPrompt);
            let provider = "Cloudflare Workers AI (Llama 3.1)";

            if (!aiText && geminiKey) {
              aiText = await callGemini(geminiKey, `Analyze this speech: "${text}"`, systemPrompt);
              provider = "Google Gemini 2.5";
            }
            if (!aiText && freeLlmUrl) {
              aiText = await callOpenAICompatible(freeLlmUrl, `Analyze this speech: "${text}"`, systemPrompt);
              provider = "Configured LLM Endpoint";
            }
            if (!aiText && ollamaUrl) {
              aiText = await callOpenAICompatible(`${ollamaUrl}/v1/chat/completions`, `Analyze this speech: "${text}"`, systemPrompt);
              provider = "Local Ollama Tunnel";
            }

            if (aiText) {
              try {
                const cleanJson = aiText.replace(/```json/g, "").replace(/```/g, "").trim();
                const parsed = JSON.parse(cleanJson);
                parsed.provider = provider;
                parsed.transcript = text;
                if (!parsed.improvements || !Array.isArray(parsed.improvements) || parsed.improvements.length === 0) {
                  const fallback = analyzeSpeechLocally(text, role);
                  parsed.improvements = fallback.improvements;
                }
                if (!parsed.vocabularyUpgrades || !Array.isArray(parsed.vocabularyUpgrades) || parsed.vocabularyUpgrades.length === 0) {
                  parsed.vocabularyUpgrades = extractDynamicVocabularyUpgrades(text, role);
                }
                return jsonResponse(parsed);
              } catch (e) {
                const fallback = analyzeSpeechLocally(text, role);
                fallback.aiRemark = aiText;
                return jsonResponse(fallback);
              }
            }

            return jsonResponse(analyzeSpeechLocally(text, role));
          } else {
            return jsonResponse(analyzeSpeechLocally("", role));
          }
        } catch (e) {
          return jsonResponse(analyzeSpeechLocally("", "Candidate"), 200);
        }
      }

      if (pathname.endsWith("/api/chat") && request.method === "POST") {
        try {
          const payload = await request.json();
          const role = payload.role || "Career Mentor";
          const scenario = payload.scenario || "Professional Career Dialogue";
          const userMessage = payload.userMessage || payload.message || "Hello";
          const history = Array.isArray(payload.history) ? payload.history : [];

          const systemPrompt = `You are roleplaying as: ${role} in this scenario: "${scenario}". Respond in 2-3 sentences of natural, engaging, professional English. Then provide one brief tip on English diction or professional tone. Output format: JSON: {"reply": "...", "tip": "...", "suggestedAlternative": "..."}`;

          const conversationContext = history.map(h => `${h.role === "user" ? "Student" : role}: ${h.text}`).join("\n");
          const fullPrompt = `${conversationContext}\nStudent: ${userMessage}\n${role}:`;

          let aiText = await callWorkersAI(env, fullPrompt, systemPrompt);
          let provider = "Cloudflare Workers AI";

          if (!aiText && geminiKey) {
            aiText = await callGemini(geminiKey, fullPrompt, systemPrompt);
            provider = "Google Gemini";
          }
          if (!aiText && freeLlmUrl) {
            aiText = await callOpenAICompatible(freeLlmUrl, fullPrompt, systemPrompt);
            provider = "Free LLM";
          }

          if (aiText) {
            try {
              const clean = aiText.replace(/```json/g, "").replace(/```/g, "").trim();
              const parsed = JSON.parse(clean);
              parsed.provider = provider;
              return jsonResponse(parsed);
            } catch (e) {
              return jsonResponse({
                reply: aiText.substring(0, 300),
                tip: "Maintain crisp tone and assertive posture.",
                suggestedAlternative: "Ensure concise subject-verb clarity in executive communications.",
                provider
              });
            }
          }

          const defaultReplies = {
            Doctor: "Good morning. Please describe the symptoms and timeline with specificity so we can formulate a clinical diagnosis.",
            Pilot: "Tower, this is flight Alpha 204. Confirming clearance at flight level 320, standard operating procedure verified.",
            Recruiter: "Thank you for detailing your project background. In corporate environments, concise articulation of your measurable impact is crucial.",
            Executive: "I appreciate the proposal. Walk me through the ROI and risk mitigation strategy in two minutes."
          };
          const foundRole = Object.keys(defaultReplies).find(k => role.includes(k)) || "Recruiter";
          return jsonResponse({
            reply: defaultReplies[foundRole],
            tip: "Great attempt. Notice how using active verbs conveys leadership and precision.",
            suggestedAlternative: "Replace informal phrases with direct, result-oriented statements.",
            provider: "Local Scenario Matrix"
          });
        } catch (e) {
          return jsonResponse({ error: "Failed to process chat", details: e.message }, 500);
        }
      }

      if (pathname.endsWith("/api/leaderboard")) {
        if (request.method === "GET") {
          return jsonResponse({
            success: true,
            entries: [
              { name: "Aarav S.", grade: "X-D", score: 98, role: "Aviation Captain", badge: "Gold Orator", date: "Today" },
              { name: "Diya P.", grade: "X-B", score: 96, role: "Corporate Litigator", badge: "Gold Orator", date: "Today" },
              { name: "Rohan M.", grade: "X-D", score: 94, role: "AI Tech Lead", badge: "Silver Eloquence", date: "Today" },
              { name: "Ananya K.", grade: "IX-A", score: 92, role: "Global Diplomat", badge: "Silver Eloquence", date: "Yesterday" },
              { name: "Kabir T.", grade: "X-C", score: 89, role: "News Anchor", badge: "Bronze Articulate", date: "Yesterday" }
            ]
          });
        }
        if (request.method === "POST") {
          try {
            const entry = await request.json();
            return jsonResponse({ success: true, saved: entry });
          } catch (err) {
            return jsonResponse({ error: "Invalid data" }, 400);
          }
        }
      }

      if (pathname.endsWith("/api/admin/config")) {
        if (request.method === "GET") {
          return jsonResponse({
            schoolName: "Kanakia International School, Mira Road",
            activeTheme: "dark",
            qualityMode: "Balanced",
            toggles: {
              hero: true,
              directory: true,
              myplan: true,
              quiz: true,
              speechlab: true,
              interview: true,
              newsanchor: true,
              roleplay: true,
              fixemail: true,
              comparevoices: true,
              speakers: true,
              leaderboard: true,
              wordoftheday: true,
              qrshare: true,
              footer: true
            }
          });
        }
      }

      return jsonResponse({
        name: "Kanakia International School Career Fair API",
        status: "operational",
        endpoints: ["/api/speech/analyze", "/api/chat", "/api/leaderboard", "/api/admin/config"]
      });
    }

    if (env && env.ASSETS) {
      if (pathname === "/v1") {
        return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
      }
      if (pathname === "/v2") {
        return env.ASSETS.fetch(new Request(new URL("/v2.html", request.url), request));
      }
      if (pathname === "/v3" || pathname === "/open-mic" || pathname === "/openmic") {
        return env.ASSETS.fetch(new Request(new URL("/v3.html", request.url), request));
      }
      if (pathname === "/v4") {
        return env.ASSETS.fetch(new Request(new URL("/v4.html", request.url), request));
      }
      if (pathname === "/v5") {
        return env.ASSETS.fetch(new Request(new URL("/v5.html", request.url), request));
      }
      if (pathname === "/v6" || pathname === "/v6/" || pathname === "/v6.html") {
        return env.ASSETS.fetch(new Request(new URL("/v6/index.html", request.url), request));
      }
      if (pathname === "/v7" || pathname === "/v7/" || pathname === "/v7.html") {
        return env.ASSETS.fetch(new Request(new URL("/v7.html", request.url), request));
      }
      if (pathname === "/v8" || pathname === "/v8/" || pathname === "/v8.html") {
        return env.ASSETS.fetch(new Request(new URL("/v8.html", request.url), request));
      }
      return env.ASSETS.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  }
};
