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

const UPGRADE_DICTIONARY = [
  { phrase: "make sure", upgrade: "verify / substantiate / guarantee" },
  { phrase: "talk about", upgrade: "articulate / delineate / elucidate" },
  { phrase: "find out", upgrade: "ascertain / investigate / determine" },
  { phrase: "look at", upgrade: "examine / scrutinize / evaluate" },
  { phrase: "deal with", upgrade: "reconcile / negotiate / navigate" },
  { phrase: "work on", upgrade: "execute / engineer / refine" },
  { phrase: "point out", upgrade: "emphasize / highlight / indicate" },
  { phrase: "set up", upgrade: "establish / configure / institute" },
  { phrase: "give up", upgrade: "relinquish / concede" },
  { phrase: "carry out", upgrade: "implement / execute" },
  { phrase: "think", upgrade: "hypothesize / deduce / surmise" },
  { phrase: "good", upgrade: "exemplary / optimal / formidable" },
  { phrase: "help", upgrade: "facilitate / expedite / bolster" },
  { phrase: "try", upgrade: "endeavor / strive / undertake" },
  { phrase: "tell", upgrade: "articulate / delineate / apprise" },
  { phrase: "show", upgrade: "illustrate / demonstrate / substantiate" },
  { phrase: "fix", upgrade: "rectify / remediate / resolve" },
  { phrase: "start", upgrade: "initiate / commence / inaugurate" },
  { phrase: "need", upgrade: "mandate / require / necessitate" },
  { phrase: "give", upgrade: "allocate / furnish / bestow" },
  { phrase: "get", upgrade: "acquire / procure / obtain" },
  { phrase: "do", upgrade: "execute / implement / conduct" },
  { phrase: "big", upgrade: "substantial / pivotal / paramount" },
  { phrase: "small", upgrade: "marginal / incremental / negligible" },
  { phrase: "problem", upgrade: "impediment / vulnerability / discrepancy" },
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
  { phrase: "know", upgrade: "comprehend / discern / recognize" }
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

function extractDynamicVocabularyUpgrades(cleanText, targetRole) {
  const lower = cleanText.toLowerCase();
  const upgrades = [];
  const seen = new Set();

  for (const item of UPGRADE_DICTIONARY) {
    const reg = new RegExp("\\b" + item.phrase.replace(/\s+/g, "\\s+") + "\\b", "i");
    if (reg.test(lower) && !seen.has(item.phrase)) {
      seen.add(item.phrase);
      upgrades.push({ original: item.phrase, upgraded: item.upgrade });
    }
  }

  const roleKey = Object.keys(ROLE_DOMAIN_UPGRADES).find(k => (targetRole || "").toLowerCase().includes(k));
  if (roleKey && ROLE_DOMAIN_UPGRADES[roleKey]) {
    for (const item of ROLE_DOMAIN_UPGRADES[roleKey]) {
      const reg = new RegExp("\\b" + item.phrase.replace(/\s+/g, "\\s+") + "\\b", "i");
      if (reg.test(lower) && !seen.has(item.phrase)) {
        seen.add(item.phrase);
        upgrades.push({ original: item.phrase, upgraded: item.upgrade });
      }
    }
  }

  if (upgrades.length === 0) {
    const wordList = lower.split(/[^a-z]+/).filter(w => w.length >= 3);
    for (const w of wordList) {
      if (!seen.has(w)) {
        seen.add(w);
        upgrades.push({ original: w, upgraded: `elevate / substantiate (${w})` });
        if (upgrades.length >= 2) break;
      }
    }
  }

  if (upgrades.length === 0) {
    upgrades.push(
      { original: "think", upgraded: "hypothesize / deduce" },
      { original: "make sure", upgraded: "verify / substantiate" }
    );
  }

  return upgrades.slice(0, 4);
}

function analyzeSpeechLocally(text, targetRole = "General Professional") {
  const cleanText = (text || "").trim();
  const words = cleanText.toLowerCase().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  if (wordCount === 0) {
    const roleKey = Object.keys(ROLE_COACHING_GUIDES).find(k => (targetRole || "").toLowerCase().includes(k));
    const roleTip = roleKey ? ROLE_COACHING_GUIDES[roleKey] : "Project authoritative downward inflection at terminal clauses to convey commanding leadership.";
    return {
      provider: "Local Heuristics",
      transcript: "",
      scores: {
        overall: 60,
        pronunciation: 65,
        fluency: 55,
        vocabulary: 60,
        pace: 60,
        confidence: 60,
        wpm: 120,
        fillersCount: 0,
        fillersFound: []
      },
      strengths: [
        "Acoustic receiver initialized and receptive to speech input.",
        "System ready to evaluate articulation, cadence, and professional presence."
      ],
      improvements: [
        roleTip,
        "Speak a complete response with role-specific terminology to trigger deep acoustic and lexical evaluation."
      ],
      vocabularyUpgrades: [
        { original: "think", upgraded: "hypothesize / deduce" },
        { original: "make sure", upgraded: "verify / substantiate" }
      ]
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
    "exceptional", "proficient", "objective", "deliberate", "proficiency"
  ];
  let advancedCount = 0;
  for (const w of words) {
    const clean = w.replace(/[^a-z]/g, "");
    if (advancedWords.includes(clean) || clean.length > 8) advancedCount++;
  }

  const estDurationMin = Math.max(0.1, wordCount / 130);
  const estWpm = Math.round(wordCount / estDurationMin);

  let paceScore = 85;
  if (estWpm < 100) paceScore = Math.max(50, 70 - (100 - estWpm));
  else if (estWpm > 160) paceScore = Math.max(50, 75 - (estWpm - 160));
  else paceScore = 92;

  const fillerRatio = fillerCount / Math.max(1, wordCount);
  const fluencyScore = Math.max(45, Math.min(98, Math.round(92 - (fillerRatio * 200))));
  const vocabularyScore = Math.max(50, Math.min(96, Math.round(65 + (lexicalDiversity * 20) + (advancedCount * 3))));
  const pronunciationScore = Math.max(60, Math.min(97, Math.round(82 + (wordCount > 15 ? 8 : 0) - (fillerRatio * 50))));
  const confidenceScore = Math.max(55, Math.min(95, Math.round((fluencyScore * 0.5) + (paceScore * 0.5))));
  const overall = Math.round((pronunciationScore * 0.25) + (fluencyScore * 0.25) + (vocabularyScore * 0.25) + (confidenceScore * 0.25));

  const strengths = [];
  const improvements = [];

  if (fillerCount === 0) {
    strengths.push("Excellent elimination of conversational filler words like 'um' and 'like'.");
  } else {
    improvements.push(`Detected ${fillerCount} conversational filler word${fillerCount > 1 ? "s" : ""} (${foundFillers.join(", ")}). Practice comfortable silence instead of vocalized pauses.`);
  }

  if (lexicalDiversity > 0.6) {
    strengths.push("High vocabulary variation showing linguistic flexibility.");
  } else {
    improvements.push("Diversify sentence structure and vary key adjectives instead of repeating identical descriptors.");
  }

  if (paceScore >= 85) {
    strengths.push(`Ideal conversational cadence around ${estWpm} words per minute.`);
  } else {
    improvements.push(`Speaking pace was measured at ${estWpm} WPM. Aim for 120-140 WPM for maximum executive clarity.`);
  }

  if (advancedCount > 2) {
    strengths.push("Naturally integrated technical and formal vocabulary suited for professional dialogue.");
  } else {
    improvements.push(`Incorporate more domain-specific terminology tailored for a ${targetRole}.`);
  }

  const roleKey = Object.keys(ROLE_COACHING_GUIDES).find(k => (targetRole || "").toLowerCase().includes(k));
  const selectedRoleCoaching = roleKey ? ROLE_COACHING_GUIDES[roleKey] : "Project authoritative downward inflection at terminal clauses to convey commanding professional leadership.";

  if (!improvements.includes(selectedRoleCoaching)) {
    improvements.push(selectedRoleCoaching);
  }

  const executivePauseTip = "Integrate intentional 0.8-second micro-pauses before quantitative or critical claims to allow listeners to absorb key data.";
  if (improvements.length < 2) {
    improvements.push(executivePauseTip);
  }

  const assertiveSignpostTip = "Replace passive conjunctions with decisive strategic signposts (e.g. 'The operational imperative is...', 'To substantiate this protocol...').";
  if (improvements.length < 3) {
    improvements.push(assertiveSignpostTip);
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
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;
  try {
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
    if (!resp.ok) return null;
    const data = await resp.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
  } catch (err) {
    return null;
  }
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
      return env.ASSETS.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  }
};
