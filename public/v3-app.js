const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const STORAGE = { settings: 'openmic.settings.v1', scores: 'openmic.scores.v1', savedWords: 'openmic.words.v1', demoLogs: 'openmic.logs.v1', demoLeaderboard: 'openmic.leaderboard.v1' };
const FEATURE_LABELS = {
  hero: ['Hero experience', 'Opening statement and animated stage'],
  whyEnglish: ['Why English matters', 'Introductory context and skill framing'],
  careers: ['Career atlas', 'Role directory, search and filters'],
  quiz: ['Career quiz', 'Five-question career matcher'],
  plan: ['My roadmap', 'Personalised practice plan'],
  speechLab: ['Speech lab', 'Speak, transcribe and analyze'],
  mockInterview: ['Mock interview', 'Career-specific interview practice'],
  roleplay: ['Conversation gym', 'Scenario-based communication practice'],
  anchor: ['Newsroom', 'Teleprompter and optional recording'],
  compare: ['Voice comparison', 'Transcript and audio-based communication comparison'],
  speakers: ['Great speakers', 'Reference speakers and listening prompts'],
  leaderboard: ['Practice board', 'Opt-in school leaderboard'],
  wordOfDay: ['Word of the day', 'Vocabulary practice and saved list'],
  emailGame: ['Editor’s desk', 'Professional email game'],
  pronunciation: ['Sound studio', 'Mouth-placement guidance and pronunciation practice'],
  debate: ['Debate room', 'Build arguments, evidence and fair counterpoints'],
  qr: ['Share QR', 'Share link and downloadable QR artwork'],
  closing: ['Closing section', 'Final encouragement']
};
const DEFAULT_SETTINGS = {
  theme: 'mix', language: 'en', showSchoolName: true, schoolName: 'Kanakia International School Mira Road',
  automaticFallback: true, preferredProvider: 'cloudflare', qualityMode: 'balanced',
  providerOrder: ['cloudflare', 'gemini', 'free', 'laptop'],
  providerEnabled: { cloudflare: true, gemini: true, free: true, laptop: false },
  features: Object.fromEntries(Object.keys(FEATURE_LABELS).map(key => [key, true]))
};
const CAREERS = [
  {title:'Screenwriter / Scriptwriter',category:'Entertainment',importance:5,icon:'✳',accent:'#ffc1a8',summary:'Write the stories behind films, web series, OTT shows and short films.',work:'Build scenes, shape character arcs, write dialogue, revise drafts and collaborate with directors and producers.',english:'Essential for pitching a story, shaping dialogue and writing scripts that a team can interpret consistently.',start:'Write a 2-page scene with a clear conflict. Read it aloud, cut unnecessary lines and ask a friend what they understood.',next:'Screenwriting, film studies, creative writing, theatre or media production courses; build a portfolio of scripts.'},
  {title:'Novelist / Fiction Author',category:'Entertainment',importance:5,icon:'✎',accent:'#d4c8ff',summary:'Create adventure, fantasy, romance, mystery and young-adult stories.',work:'Develop characters, plan plots, revise chapters, work with editors and sometimes adapt books for screen.',english:'Clear storytelling and a distinct voice help readers connect; English can widen publishing and adaptation opportunities.',start:'Write 500 words every week, finish one short story and get feedback on clarity, emotion and pacing.',next:'Creative writing, literature or publishing; study story structure and learn editing, pitching and copyright basics.'},
  {title:'Narrative Designer / Game Writer',category:'Entertainment',importance:5,icon:'◇',accent:'#b8d9ed',summary:'Write game dialogue, lore, quests, worlds and branching story choices.',work:'Create character bibles, dialogue trees, quest text, lore documents and interactive choices with game designers.',english:'Players need to understand choices and feel character motivation; concise writing is vital in interactive stories.',start:'Design a small branching story with three choices and two endings. Track how every choice changes the outcome.',next:'Game design, interactive media, creative writing or computer science; learn branching narrative tools and build samples.'},
  {title:'Lyricist / Songwriter',category:'Entertainment',importance:4,icon:'♫',accent:'#ffd7a8',summary:'Write lyrics, hooks, verses and emotionally memorable lines.',work:'Develop concepts, find rhythm and rhyme, collaborate with composers and rewrite lines to fit a melody.',english:'English can broaden audiences and collaborations; sound, rhythm and honesty matter more than complicated words.',start:'Write a verse about one specific memory. Read it in rhythm and replace abstract lines with concrete images.',next:'Music, creative writing or performance; develop a lyric portfolio and understand music rights and publishing.'},
  {title:'Journalist / Entertainment Critic',category:'Media',importance:5,icon:'▤',accent:'#b8d9ed',summary:'Report stories and review films, music, books and culture.',work:'Research sources, interview people, verify facts, write clear reports and explain why a story matters.',english:'Accurate, concise writing and thoughtful interviews are central to credibility and audience trust.',start:'Write a 250-word review with one clear opinion, two examples and a fair counterpoint.',next:'Journalism, mass communication, English, political science or media studies; practise fact-checking and ethical reporting.'},
  {title:'Copywriter / Content Strategist',category:'Business',importance:5,icon:'⌁',accent:'#c9e5cf',summary:'Create campaign ideas, ads, product pages, taglines and brand language.',work:'Understand an audience, create message concepts, write variants and test what people respond to.',english:'The role relies on precise wording, tone, persuasion and editing for different audiences and platforms.',start:'Write five taglines for one school event, then explain which audience each line would appeal to.',next:'Marketing, communications, media or English; build a portfolio of campaigns, landing pages and short-form copy.'},
  {title:'YouTube / Podcast Scriptwriter',category:'Media',importance:5,icon:'▶',accent:'#ffc1a8',summary:'Write explainers, video essays, storytelling channels and podcast episodes.',work:'Research, design a hook, sequence facts, write spoken language and keep the listener curious.',english:'A spoken script must sound natural when read aloud and make ideas easy to follow.',start:'Write a 60-second explainer on a topic you love. Start with a question and remove every line that does not help.',next:'Media production, journalism, communication or creative writing; build a small set of timed scripts.'},
  {title:'Dialogue Writer / Story Editor',category:'Entertainment',importance:5,icon:'↔',accent:'#d4c8ff',summary:'Polish dialogue, story logic and character voice for productions.',work:'Revise scripts, track continuity, give story notes and make sure every character sounds distinct.',english:'Nuance, subtext and precise feedback help a story team improve a script without losing its intent.',start:'Rewrite the same conversation in three different character voices without changing the facts.',next:'Screenwriting, literature, theatre or media studies; build before-and-after editing samples.'},
  {title:'Voice Actor / Narrator',category:'Entertainment',importance:4,icon:'◖',accent:'#ffd7a8',summary:'Perform audiobooks, animation, ads, documentaries and learning content.',work:'Interpret scripts, control pace and breath, adjust emotion, pronounce clearly and retake lines.',english:'Pronunciation, meaning, pacing and interpretation are crucial for an audience to follow the story.',start:'Record a 45-second passage twice: once for a documentary, once for an animated character. Compare your choices.',next:'Acting, theatre, voice training, linguistics or media; build a varied demo reel and learn audio basics.'},
  {title:'Dubbing / Subtitle Localizer',category:'Media',importance:5,icon:'文',accent:'#b8d9ed',summary:'Adapt dialogue and subtitles between English and Indian languages.',work:'Translate meaning, respect cultural context, time subtitles and keep dialogue readable and natural.',english:'Strong comprehension, word economy and cultural sensitivity are vital; another language is an advantage, not a barrier.',start:'Subtitle a 30-second clip and test whether each subtitle can be read comfortably before it changes.',next:'Translation, linguistics, literature or media localization; learn subtitling tools and build a bilingual portfolio.'},
  {title:'Radio Jockey / Podcast Host',category:'Media',importance:5,icon:'◉',accent:'#d4c8ff',summary:'Host conversations, introduce songs, interview guests and guide a listening audience.',work:'Prepare segments, ask follow-up questions, improvise, manage timing and make guests feel heard.',english:'Natural phrasing, active listening and audience awareness help a host keep a conversation moving.',start:'Host a two-minute imaginary radio segment with an opening, guest question and clear sign-off.',next:'Mass communication, journalism, theatre or audio production; build samples and practise live interviewing.'},
  {title:'Stand-up Comedian / Comedy Writer',category:'Entertainment',importance:4,icon:'☻',accent:'#ffc1a8',summary:'Build jokes, observations, sketches and character-led comedy.',work:'Find a point of view, shape setups and payoffs, test material with audiences and edit timing.',english:'Word choice, rhythm and cultural references can sharpen a joke, while personal perspective is the real source.',start:'Write three clean observations about an everyday school situation. Keep only what surprises people.',next:'Writing, theatre, performance or media; practise stage confidence and study joke structure.'},
  {title:'Publishing Editor / Literary Agent',category:'Entertainment',importance:5,icon:'▥',accent:'#c9e5cf',summary:'Improve manuscripts, guide authors and help stories find publishers or screen partners.',work:'Evaluate submissions, edit manuscripts, develop pitches, negotiate with partners and understand rights.',english:'Close reading, constructive feedback, persuasive pitching and precise contracts-related communication matter.',start:'Edit one page for clarity and consistency, then write a one-paragraph pitch explaining its audience.',next:'Publishing, literature, law or communications; gain editing experience and learn contracts and rights.'},
  {title:'Script Reader / Development Executive',category:'Entertainment',importance:5,icon:'⌕',accent:'#d4c8ff',summary:'Assess stories and help decide which projects move toward production.',work:'Read scripts, write coverage, assess audience fit, summarise strengths and recommend changes.',english:'Clear analytical notes help creative teams understand a story’s strengths, risks and potential audience.',start:'Read a short film script or public-domain story and write a one-page summary with a reasoned recommendation.',next:'Film, literature, media or business; develop concise coverage notes and learn production workflows.'},
  {title:'Theatre Playwright / Director',category:'Entertainment',importance:4,icon:'▰',accent:'#ffd7a8',summary:'Create plays and guide actors, stage design and live performance.',work:'Develop scripts, interpret text, run rehearsals, communicate blocking and revise scenes with a team.',english:'Strong language and precise instructions support rehearsal, script development and audience interpretation.',start:'Write a 3-minute play with two characters and one turning point. Stage-read it with friends.',next:'Theatre, performing arts, literature or directing; join productions and build scripts or rehearsal work.'},
  {title:'Lawyer / Legal Researcher',category:'Public service',importance:5,icon:'⚖',accent:'#b8d9ed',summary:'Research law, build arguments, write documents and represent clients.',work:'Read cases, prepare legal notes, draft documents, question witnesses and explain options to clients.',english:'Precision, reading comprehension and structured argument are important in many legal settings.',start:'Write a one-page argument for both sides of a school policy debate using evidence, not insults.',next:'Law degrees and entrance requirements vary; build reading, reasoning, public speaking and research skills.'},
  {title:'Diplomat / International Relations',category:'Public service',importance:5,icon:'◎',accent:'#d4c8ff',summary:'Represent interests, negotiate across cultures and interpret global events.',work:'Prepare briefings, negotiate, write reports, listen carefully and build trust across differences.',english:'International coordination often relies on clear English, tactful phrasing and the ability to summarise complex issues.',start:'Summarise one international news story in 150 words, then describe two viewpoints fairly.',next:'International relations, political science, economics or languages; practise research, writing and cultural awareness.'},
  {title:'Civil Services / Policy Analyst',category:'Public service',importance:4,icon:'▦',accent:'#c9e5cf',summary:'Turn public problems into clear decisions, programmes and policy advice.',work:'Analyse evidence, prepare notes, explain policy options and communicate with teams and the public.',english:'Reports and policy briefs require concise reasoning, but local language skills are also valuable.',start:'Choose one local issue and write a short problem, evidence, options and recommendation brief.',next:'Public administration, economics, political science or social science; learn research and exam pathways relevant to your country.'},
  {title:'Teacher / Lecturer',category:'Education',importance:5,icon:'✎',accent:'#ffd7a8',summary:'Explain concepts, design learning and help students build confidence.',work:'Plan lessons, answer questions, assess progress and adapt explanations to different learners.',english:'Clear explanations, questioning and feedback can make difficult topics feel manageable.',start:'Teach a concept you know in 90 seconds using one example and one analogy.',next:'Subject degree plus relevant teacher training; practise lesson design and learn how students learn.'},
  {title:'Science Communicator / Research Writer',category:'Education',importance:5,icon:'⌬',accent:'#b8d9ed',summary:'Explain research through articles, exhibits, documentaries and public talks.',work:'Interview experts, interpret data, check claims and turn technical material into accessible stories.',english:'Strong comprehension and clear writing help research travel beyond its specialist audience.',start:'Explain a science idea to a 12-year-old in 180 words without losing accuracy.',next:'Science plus writing, journalism or communication; build fact-checked explainers and learn source evaluation.'},
  {title:'UX Writer / Content Designer',category:'Technology',importance:5,icon:'◫',accent:'#d4c8ff',summary:'Write the labels, prompts and help text that make digital products easier to use.',work:'Map user journeys, test wording, work with designers and ensure interface language is inclusive.',english:'Tiny wording choices can reduce confusion and help people complete tasks correctly.',start:'Rewrite three confusing app messages so a first-time user immediately understands what to do.',next:'UX, communication, psychology, design or HCI; build a portfolio explaining the problem and your wording decision.'},
  {title:'Software Developer / Technical Writer',category:'Technology',importance:4,icon:'⌘',accent:'#c9e5cf',summary:'Build software or explain how it works through guides and documentation.',work:'Write code, solve problems, collaborate in teams or turn technical workflows into clear instructions.',english:'Technical documentation and global collaboration often use English; clear thinking is more important than accent.',start:'Document how to use a tool in five numbered steps and ask a beginner to follow it.',next:'Computer science, IT, engineering or technical communication; create projects and readable README files.'},
  {title:'Product Manager / Business Analyst',category:'Business',importance:5,icon:'↗',accent:'#ffc1a8',summary:'Connect customer needs, business goals and teams building a product.',work:'Research users, write requirements, prioritise problems and explain decisions to different teams.',english:'Structured writing, negotiation and concise presentations help align people with different goals.',start:'Choose a school problem, interview two users and write a one-page proposal with a clear success measure.',next:'Business, engineering, economics, design or analytics; develop research and communication samples.'},
  {title:'Marketing / Public Relations Specialist',category:'Business',importance:5,icon:'✺',accent:'#ffd7a8',summary:'Shape a public message, build trust and respond to audience needs.',work:'Write statements, plan campaigns, manage media relationships and communicate during events or crises.',english:'Tone, timing, audience awareness and careful facts matter for a brand or organisation.',start:'Create a 3-post campaign for a school event with one message adapted to parents, students and teachers.',next:'Marketing, communications, journalism or business; build campaign samples and learn audience research.'},
  {title:'Doctor / Healthcare Communicator',category:'Health',importance:4,icon:'＋',accent:'#c9e5cf',summary:'Explain symptoms, treatment options and health information clearly.',work:'Listen to patients, describe next steps, document care and collaborate with specialists.',english:'Clear communication helps people understand options and ask questions; local language ability can be equally important.',start:'Explain a common health topic in plain language and list three questions a patient might ask.',next:'Medicine and allied health require specific qualifications and licensing; strengthen science, listening and patient communication.'},
  {title:'Aviation / Airline Cabin Crew',category:'Business',importance:4,icon:'✈',accent:'#b8d9ed',summary:'Communicate safety information and help passengers in a fast-moving environment.',work:'Deliver clear instructions, support passengers, coordinate with a crew and respond calmly to unexpected situations.',english:'Aviation uses standardised communication in many contexts; safety, clarity and additional languages matter.',start:'Practise a calm 20-second announcement with a clear instruction and one helpful reassurance.',next:'Check airline and aviation authority requirements; practise service, teamwork and safety communication.'},
  {title:'Founder / Social Entrepreneur',category:'Business',importance:5,icon:'✳',accent:'#ffc1a8',summary:'Build a venture, explain its value and persuade people to help make it real.',work:'Talk to users, describe the problem, pitch an idea, write proposals and lead a team.',english:'Clear storytelling makes it easier to communicate a vision to customers, partners and investors.',start:'Pitch a real problem and solution in 45 seconds: who needs it, what changes, and how you know.',next:'Business, design, engineering or social science; run small experiments and learn sales, finance and user research.'}
];
const CAREER_RESOURCES = {
  ftii: {label:'FTII Pune', url:'https://www.ftii.ac.in/'},
  srfti: {label:'SRFTI Kolkata', url:'https://srfti.ac.in/'},
  iimc: {label:'IIMC admissions', url:'https://iimc.admissions.nic.in/'},
  nid: {label:'NID admissions', url:'https://admissions.nid.edu/'},
  nsd: {label:'National School of Drama', url:'https://nsd.gov.in/'},
  clat: {label:'CLAT official portal', url:'https://consortiumofnlus.ac.in/clat-2027/index.html'},
  neet: {label:'NEET-UG / NTA', url:'https://neet.nta.nic.in/'},
  upsc: {label:'UPSC active examinations', url:'https://www.upsc.gov.in/examinations/active-exams'},
  ctet: {label:'CTET official portal', url:'https://ctet.nic.in/'},
  ugcnet: {label:'UGC-NET / NTA', url:'https://ugcnet.nta.ac.in/'},
  ncs: {label:'National Career Service', url:'https://www.ncs.gov.in/'}
};
const CAREER_GUIDANCE = {
  'Screenwriter / Scriptwriter': {study:'Film, screenwriting, English, theatre, literature or media production. Examples to research: FTII Pune and SRFTI Kolkata; compare the exact course, eligibility and portfolio requirements.',entry:'There is no single nationwide job exam. Admission tests, written work, interviews or portfolio rounds depend on the course. Build a short screenplay and a polished sample scene.',income:'Often project fees, episode/script contracts or salaried writing-room work. Rates vary substantially by production, rights, experience and whether revisions are included; no universal package.',links:['ftii','srfti']},
  'Novelist / Fiction Author': {study:'English/literature, creative writing, publishing, history or any subject that deepens your story material. A degree can help, but it is not a legal requirement to become a novelist.',entry:'No mandatory entrance exam for authorship. Finish a manuscript, revise it, learn pitching and copyright basics, and build a reader/portfolio. Publishing courses have their own admissions.',income:'Royalties, advances, options/licensing, freelance work or a separate job. Earnings are highly uneven and should not be treated as a predictable salary package.',links:['ncs']},
  'Narrative Designer / Game Writer': {study:'Game design, interactive media, English, creative writing, animation, psychology or computer science. Design degrees may be available at specialist institutes such as NID; check individual programme fit.',entry:'No universal job exam. Create a branching dialogue sample, quest, lore guide and a short playable prototype. Some design programmes use their own aptitude or studio admission process.',income:'Studio salary, contract writing or freelance work; depends on studio, country, game budget and experience. There is no standard entry package.',links:['nid']},
  'Lyricist / Songwriter': {study:'Music, creative writing, literature, theatre, audio production or self-directed composition. A formal degree is optional for many writing opportunities.',entry:'No universal entrance exam. Create demo lyrics, collaborate with a composer/performer, and learn credits, rights, publishing and royalty splits before releasing work.',income:'Per-project fees, commissioned writing, royalties and live work. Hits are unpredictable; do not plan around exceptional celebrity earnings.',links:['ncs']},
  'Journalist / Entertainment Critic': {study:'Journalism, mass communication, English, media studies, political science or film studies. IIMC is one Indian option to compare alongside university programmes.',entry:'Admissions vary by institution and course; there is no universal exam for every journalism job. Develop clips, research, interview, fact-checking and media-ethics skills.',income:'Newsroom salary, freelance per-piece fees or commissioned criticism. Pay depends on employer, city, beat, experience and stability of work.',links:['iimc']},
  'Copywriter / Content Strategist': {study:'English, communications, marketing, journalism, design or business. A degree subject is less important than audience insight, writing samples and evidence that you can edit.',entry:'Usually portfolio review, writing tests and interviews rather than one national entrance exam. Make campaign samples, landing-page copy and a short content strategy.',income:'Agency/company salary or freelance/retainer fees. Specialisation, clients, city and measurable results make a large difference.',links:['ncs']},
  'YouTube / Podcast Scriptwriter': {study:'Journalism, media production, English, creative writing, communications or a subject you can explain unusually well.',entry:'No universal job exam. Show three scripts with different formats, timestamps, research sources, strong openings and natural read-aloud rhythm.',income:'Per-script, per-episode, retainer or salaried creator-team work. Rates vary with research depth, length, audience, rights and deadlines.',links:['iimc']},
  'Dialogue Writer / Story Editor': {study:'Screenwriting, theatre, English, literature, film studies or media production. Read scripts as well as finished stories to understand what changes on screen.',entry:'No standard entrance exam for the job. Build original scenes and before/after edits; seek writing-room, production or assistant opportunities.',income:'Usually project-based, episode-based or salaried on a production team. Credits, revisions, production scale and bargaining terms matter.',links:['ftii','srfti','nsd']},
  'Voice Actor / Narrator': {study:'Acting, theatre, voice/speech training, languages, linguistics, audio production or broadcasting. Formal acting school is one route, not the only route.',entry:'Auditions and demo reels are common; there is no universal job exam. Practise clean recording, pronunciation, breath control, interpretation and multiple styles.',income:'Per session, word/hour, project or contract. Usage rights, buyouts, language, studio quality and repeat work affect compensation.',links:['nsd']},
  'Dubbing / Subtitle Localizer': {study:'Translation, linguistics, English plus another strong language, literature, media localization or audiovisual production.',entry:'Language tests and timed samples are common. Build subtitle samples, practise reading speed and learn localization tools, cultural nuance and accessibility guidelines.',income:'Per minute, per word, per title, project or salaried localization work. Language pair, specialization, deadlines and revision terms change rates.',links:['iimc']},
  'Radio Jockey / Podcast Host': {study:'Mass communication, journalism, theatre, audio production, music or languages. Practice matters alongside any qualification.',entry:'Auditions, voice tests, demo reels and interviews are common; no single nationwide exam is required for every station or podcast.',income:'Station salary, contract, sponsorship, event hosting or freelance fees. Audience size and employer/client terms drive variation.',links:['iimc','nsd']},
  'Stand-up Comedian / Comedy Writer': {study:'Theatre, writing, performance, psychology, media or any field that gives you a strong point of view. A specific degree is not mandatory to perform.',entry:'No universal exam. Write, test material at suitable open mics, build short clean samples and learn timing, audience safety and copyright.',income:'Shows, commissions, writing rooms, content, brand work and touring. Income can be irregular, especially early in a career.',links:['nsd']},
  'Publishing Editor / Literary Agent': {study:'English, literature, publishing, communications, law or business. Internships and close reading often matter as much as the course title.',entry:'No universal entrance exam for the job. Practise editing, write reader reports, learn submissions and rights, and seek internships at publishers or agencies.',income:'Usually salary or agency commission/contract arrangements. Employer size, seniority, list performance and rights deals affect compensation.',links:['ncs']},
  'Script Reader / Development Executive': {study:'Film/media studies, English, literature, screenwriting, theatre, journalism or business/production.',entry:'No standard job exam. Create concise script coverage, loglines, character notes and a sample project-development memo; seek production internships.',income:'Company salary or contract/project fees. Studio, production scale, experience and whether the role includes development or production duties matter.',links:['ftii','srfti']},
  'Theatre Playwright / Director': {study:'Theatre, dramatic arts, literature, performing arts, directing or screen/media studies. The National School of Drama is one institution to research; check current eligibility and course format.',entry:'Portfolio, auditions, interviews and evidence of theatre experience may be part of admission or recruitment. Build short plays and document productions.',income:'Project grants, production fees, ticket shares, commissions, workshops or salaried roles. Work may be seasonal and income unpredictable.',links:['nsd','ftii']},
  'Lawyer / Legal Researcher': {study:'An integrated five-year LL.B. after Class XII, or a qualifying bachelor’s degree followed by a three-year LL.B. Check Bar Council rules and the institution’s eligibility.',entry:'CLAT is used by participating NLUs for undergraduate law admissions; other institutions may use their own tests or merit. Verify the current cycle on official sites.',income:'Firm, chambers, in-house, public-sector and independent practice have very different pay structures. Location, practice area, employer and years of practice matter.',links:['clat']},
  'Diplomat / International Relations': {study:'Any recognised bachelor’s discipline can lead toward the UPSC Civil Services Examination; international relations, economics, history, law and languages may provide useful context.',entry:'For the Indian Foreign Service, the route is through UPSC Civil Services Examination and service allocation, with eligibility and allocation rules set officially each cycle.',income:'Government pay follows official service rules and allowances; postings, grade, tenure and location affect total compensation. Do not confuse overseas allowances with base pay.',links:['upsc']},
  'Civil Services / Policy Analyst': {study:'Public policy, economics, political science, statistics, law, social sciences, engineering or another relevant subject. Policy research roles are not all civil-service jobs.',entry:'UPSC or State Public Service Commission exams are relevant to civil-service posts. Think tanks, research teams and NGOs use varied recruitment processes and writing/research samples.',income:'Civil-service roles follow official pay rules; policy jobs vary by employer, grant/funding, seniority and technical speciality.',links:['upsc']},
  'Teacher / Lecturer': {study:'A subject degree plus the required teacher-training qualification for school teaching; college teaching usually requires postgraduate study and may require further eligibility or research credentials.',entry:'CTET or a State TET may apply to specific school appointments. UGC-NET/SET requirements depend on the higher-education role and current rules. Always confirm eligibility with the recruiting body.',income:'Pay varies by public/private institution, qualifications, state, grade and experience. Government scales are published separately; private packages vary.',links:['ctet','ugcnet']},
  'Science Communicator / Research Writer': {study:'A science or engineering subject combined with writing, journalism, education, data visualization or media production.',entry:'No universal entrance exam for science communication. Create an accurate explainer, source notes and a visual/short talk; research roles have discipline-specific eligibility.',income:'Publisher, research institution, science centre, company, grant-funded project or freelance pay. Technical expertise and employer type change the range.',links:['iimc','ncs']},
  'UX Writer / Content Designer': {study:'English, linguistics, psychology, design, HCI, communication or technology. Learn user research, accessibility and product thinking in addition to writing.',entry:'No universal job exam. Portfolio case studies should show the user problem, options considered, final microcopy and how you tested clarity.',income:'Usually company/agency salary or contract work. Product company, design seniority, location and technical domain can strongly affect pay.',links:['nid','ncs']},
  'Software Developer / Technical Writer': {study:'Computer science, engineering, IT, mathematics or a nontraditional route supported by strong coding/documentation projects. A technical writer should demonstrate the ability to explain complex subjects clearly.',entry:'College admission tests depend on the chosen institution; JEE is not a requirement for every developer or technical-writing job. Build working software, documentation samples and a portfolio.',income:'Employer, skills, role, location and experience drive salaries. Developer and technical-writer jobs are different tracks; compare current listings for each separately.',links:['nid','ncs']},
  'Product Manager / Business Analyst': {study:'Business, engineering, economics, statistics, design, psychology or another domain relevant to the product. An MBA can help in some paths but is not universally required.',entry:'No single entrance exam for the job. Practise problem framing, data interpretation, requirements, stakeholder interviews and concise product briefs; admission tests apply to specific degrees.',income:'Company stage, sector, level, city and bonus/equity structure make total compensation vary widely. Compare base salary separately from variable pay.',links:['ncs']},
  'Marketing / Public Relations Specialist': {study:'Marketing, communications, journalism, business, English, media or design. Learn research, analytics, writing and campaign measurement.',entry:'No universal job exam. Build sample campaigns, press releases, event plans and measurement reports; internships and portfolio work are useful evidence.',income:'Salary, retainer or agency/project fees; employer, location, specialist skill and campaign responsibility affect compensation.',links:['iimc','ncs']},
  'Doctor / Healthcare Communicator': {study:'To become a doctor, pursue the prescribed medical qualification pathway; healthcare communicators can instead study science, public health, communications or journalism and must not present themselves as clinicians.',entry:'NEET-UG is the national entrance test used for undergraduate medical admissions in India. Healthcare communication roles use varied academic and employer criteria.',income:'Clinical pay depends on qualification, specialty, employer, location and experience. Communication roles have separate salary ranges; do not use a doctor’s earnings as a proxy.',links:['neet']},
  'Aviation / Airline Cabin Crew': {study:'Meet the airline’s published education, language, medical, age and other eligibility criteria. Additional aviation, hospitality, communication or safety training may help, but check the airline first.',entry:'There is no single entrance exam for all cabin-crew jobs. Airlines typically run their own applications, assessments, interviews and medical/fitness checks.',income:'Airline, base, seniority, allowances, roster and benefits affect total compensation. Review the actual current vacancy rather than a generic “package” claim.',links:['ncs']},
  'Founder / Social Entrepreneur': {study:'Business, engineering, design, finance, social sciences or a domain linked to the problem you want to solve. Formal study is optional; the right skills depend on the venture.',entry:'No standard entrance exam to become a founder. Interview potential users, test a small solution, understand costs and measure impact before scaling.',income:'Founder income may be low, irregular or negative early on; revenue, salary, profit and company valuation are not the same thing. Avoid comparing venture headlines with take-home pay.',links:['ncs']}
};
const QUIZ_QUESTIONS = [
  {q:'What kind of work gives you energy?',hint:'Pick what you would choose on a free afternoon.',opts:[['Creating stories or performing','creative'],['Solving a hard problem','analytical'],['Helping or teaching someone','people'],['Organising a team or big idea','leadership']]},
  {q:'Which result feels most satisfying?',hint:'Think about the outcome, not just the subject.',opts:[['Someone says “that moved me”','creative'],['A complicated thing finally makes sense','analytical'],['Someone feels safer or more confident','people'],['A plan becomes real','leadership']]},
  {q:'How would you like to share your ideas?',hint:'Choose the format you are drawn to.',opts:[['A story, script, video or performance','creative'],['A report, model or demonstration','analytical'],['A conversation, lesson or debate','people'],['A pitch, presentation or campaign','leadership']]},
  {q:'What do you want to get better at?',hint:'Every path uses more than one skill.',opts:[['Writing, language and imagination','creative'],['Research, logic and detail','analytical'],['Listening, empathy and explanation','people'],['Decision-making and persuasion','leadership']]},
  {q:'Choose the challenge you would try first.',hint:'Curiosity is a useful compass.',opts:[['Write an opening scene that hooks people','creative'],['Investigate why something works','analytical'],['Explain a difficult idea to a friend','people'],['Plan a project and get others involved','leadership']]}
];
const QUIZ_PATHS = {
  creative: ['Screenwriter / Scriptwriter','Novelist / Fiction Author','Narrative Designer / Game Writer'],
  analytical: ['Science Communicator / Research Writer','Software Developer / Technical Writer','UX Writer / Content Designer'],
  people: ['Teacher / Lecturer','Radio Jockey / Podcast Host','Doctor / Healthcare Communicator'],
  leadership: ['Founder / Social Entrepreneur','Product Manager / Business Analyst','Marketing / Public Relations Specialist']
};
const ROLEPLAY_SCENARIOS = {
  doctor: {role:'PATIENT COMMUNICATION',title:'A patient is worried about a new medicine and wants to know what to expect.',cue:'You are a medical intern. Explain the next step in plain English without making promises you cannot support.',focus:'clarity · empathy · next steps'},
  pilot: {role:'CREW BRIEFING',title:'A delayed flight means passengers are anxious and your team needs a clear update.',cue:'You are leading a crew briefing. Give a calm update, explain the immediate plan and invite essential questions.',focus:'structure · calmness · precision'},
  customer: {role:'CUSTOMER SUPPORT',title:'A customer received the wrong order and is frustrated that it has happened twice.',cue:'Acknowledge the problem, ask one useful question and explain the next step without blaming the customer.',focus:'empathy · ownership · resolution'},
  press: {role:'PUBLIC COMMUNICATION',title:'A reporter asks whether your school project will actually solve the problem it targets.',cue:'Answer with what you know, be honest about limits and describe how you will measure progress.',focus:'composure · evidence · honesty'}
};
const WORDS = [
  {word:'Articulate',pronunciation:'/ɑːˈtɪk.jə.lət/ · adjective',definition:'Able to express an idea clearly and effectively.',example:'“A strong presenter makes a complex idea easy to understand.”'},
  {word:'Concise',pronunciation:'/kənˈsaɪs/ · adjective',definition:'Giving a lot of information clearly in very few words.',example:'“A concise email respects the reader’s time and still includes the next step.”'},
  {word:'Nuance',pronunciation:'/ˈnjuː.ɑːns/ · noun',definition:'A small but important difference in meaning, feeling or expression.',example:'“Good dialogue captures the nuance between what a character says and what they mean.”'},
  {word:'Persuasive',pronunciation:'/pəˈsweɪ.sɪv/ · adjective',definition:'Able to make someone consider or accept an idea through clear reasons.',example:'“A persuasive pitch explains the need, shows evidence and makes a fair request.”'},
  {word:'Empathetic',pronunciation:'/ˌem.pəˈθet.ɪk/ · adjective',definition:'Showing that you understand or care about another person’s feelings.',example:'“An empathetic response can make a difficult conversation more productive.”'},
  {word:'Coherent',pronunciation:'/kəʊˈhɪə.rənt/ · adjective',definition:'Logical, clear and connected in a way that is easy to follow.',example:'“A coherent argument guides the listener from a claim to the supporting evidence.”'},
  {word:'Resonate',pronunciation:'/ˈrez.ə.neɪt/ · verb',definition:'To create a strong feeling or connection with someone.',example:'“A story can resonate when its details feel honest and recognisable.”'},
  {word:'Credible',pronunciation:'/ˈkred.ə.bəl/ · adjective',definition:'Believable because it is trustworthy and supported by evidence.',example:'“A credible report separates what is known from what is still uncertain.”'},
  {word:'Collaborate',pronunciation:'/kəˈlæb.ə.reɪt/ · verb',definition:'To work with other people to achieve or create something.',example:'“Great productions happen when writers, performers and editors collaborate.”'},
  {word:'Nuanced',pronunciation:'/ˈnjuː.ɑːnst/ · adjective',definition:'Showing awareness of subtle differences or more than one side of an issue.',example:'“A nuanced review can criticise a film while recognising what it does well.”'}
];
const REFERENCE_TEXTS = {
  att:'The natural world does not always announce its wonders. Sometimes, the smallest change tells the largest story. We only need to pause, look closely, and allow the evidence to guide what we say next.',
  watson:'I want to ask us to think about the kind of future we are building together. Progress is not a single speech or a perfect answer. It is the decision to take responsibility, to listen and to keep moving.',
  fry:'Language is a remarkable instrument. A word can be precise, playful or profound, and the same sentence can change its effect when we alter the rhythm, the pause or the emphasis.',
  obama:'The next step is not always the easiest one. It asks us to listen carefully, make a choice and be willing to learn when we get something wrong. That is how a promise becomes a practice.'
};
const INTERVIEW_QUESTIONS = {
  'Screenwriter / Scriptwriter': ['Tell me about a story idea you would love to develop, and what makes its central conflict interesting.','How would you change a scene if a viewer says the character’s decision feels unbelievable?','What makes dialogue sound natural without making every line ordinary?'],
  'Novelist / Fiction Author': ['Which story do you wish existed, and what would make yours different?','How would you handle a chapter that feels slow but contains important information?','How do you know when feedback improves your story rather than changing your voice?'],
  'Narrative Designer / Game Writer': ['How would you make a player’s choice feel meaningful?','What would you do if a branching story became too complex to track?','How can a world’s history appear naturally in gameplay rather than as a long explanation?'],
  'Journalist / Entertainment Critic': ['How would you check a claim before publishing it?','How can a review be critical without being unfair?','What would you do if an important source asked you to remove a fact you had verified?'],
  'UX Writer / Content Designer': ['How would you improve an error message that leaves users confused?','How could you test whether a button label is clear?','How would you handle a request to make an interface sound more exciting but less accurate?'],
  'Teacher / Lecturer': ['How would you explain a difficult idea to a student who feels lost?','How would you know whether a class actually understood your explanation?','How can you correct a mistake without discouraging a learner?'],
  'Product Manager / Business Analyst': ['How would you decide which of three user problems to solve first?','How would you explain a product decision to a team that disagrees?','What evidence would convince you to change your original plan?']
};
let settings = loadLocalSettings();
let activeCareerFilter = 'All';
let quizIndex = 0;
let quizAnswers = [];
let activeWordIndex = 0;
let emailScore = 0;
let emailRound = 0;
let selectedBoard = 'overall';
let recognition = null;
let isListening = false;
let listenStartedAt = null;
let speechDuration = 0;
let speechRecorder = null;
let speechRecorderChunks = [];
let speechAudioBlob = null;
let anchorRecorder = null;
let anchorRecorderChunks = [];
let anchorStream = null;
let teleprompterFrame = null;
let teleprompterLast = 0;
let teleprompterOffset = 0;
let interviewCareer = 'Screenwriter / Scriptwriter';
let interviewQuestionIndex = 0;
let interviewHistory = [];
let activeRoleplay = 'doctor';
let selectedAudioFile = null;
let adminAuthenticated = false;
let adminDemoMode = false;
let adminSettings = null;
let adminSecretsStatus = { geminiCount: 0, freeConfigured: false, laptopConfigured: false };
let toastTimer = null;

function loadLocalSettings() {
  try { return { ...structuredClone(DEFAULT_SETTINGS), ...JSON.parse(localStorage.getItem(STORAGE.settings) || '{}') }; }
  catch { return structuredClone(DEFAULT_SETTINGS); }
}
function saveLocalSettings() { localStorage.setItem(STORAGE.settings, JSON.stringify(settings)); }
function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function showToast(message) { const toast = $('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 3200); }
function setMessage(element, message, isError = false) { if (!element) return; element.textContent = message; element.style.color = isError ? '#ffb09a' : ''; }
function careerByTitle(title) { return CAREERS.find(career => career.title === title) || CAREERS[0]; }
function careerImportanceLabel(value) { return value >= 5 ? 'Essential in many roles' : value >= 4 ? 'Very important' : value >= 3 ? 'Often useful' : 'Context dependent'; }
function renderCareerCards() {
  const query = ($('#career-search').value || '').trim().toLowerCase();
  const filtered = CAREERS.filter(career => (activeCareerFilter === 'All' || career.category === activeCareerFilter) && (!query || [career.title, career.category, career.summary, career.work, career.english, career.start].join(' ').toLowerCase().includes(query)));
  $('#career-result-count').textContent = `${filtered.length} ${filtered.length === 1 ? 'path' : 'paths'}`;
  $('#career-grid').innerHTML = filtered.map((career, index) => `<article class="career-card" style="--career-accent:${career.accent}"><div class="career-card-top"><span class="career-category">${escapeHtml(career.category)}</span><span class="career-icon" aria-hidden="true">${career.icon}</span></div><h3>${escapeHtml(career.title)}</h3><p>${escapeHtml(career.summary)}</p><div class="career-card-bottom"><div class="english-meter"><strong>${escapeHtml(careerImportanceLabel(career.importance))}</strong><span class="meter-dots" aria-label="English importance ${career.importance} out of 5">${Array.from({length:5},(_,i)=>`<i class="${i<career.importance?'on':''}"></i>`).join('')}</span></div><button class="career-open" type="button" data-career-open="${escapeHtml(career.title)}" aria-label="View ${escapeHtml(career.title)} details">↗</button></div></article>`).join('');
  if (!filtered.length) $('#career-grid').innerHTML = '<div class="career-detail"><h3>No match yet.</h3><p>Try a broader search or choose another category.</p></div>';
}
function showCareerDetail(title) {
  const career = careerByTitle(title);
  const guidance = CAREER_GUIDANCE[career.title] || {};
  const resourceLinks = (guidance.links || []).map(key => CAREER_RESOURCES[key]).filter(Boolean).map(resource => `<a href="${resource.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(resource.label)} ↗</a>`).join('');
  const salarySearch = `https://www.google.com/search?q=${encodeURIComponent(`${career.title} salary India current job listings`)}`;
  const detail = $('#career-detail');
  detail.hidden = false;
  detail.innerHTML = `<button class="career-detail-close" type="button" aria-label="Close career detail">×</button><p class="eyebrow">${escapeHtml(career.category)} / ENGLISH IN THE ROLE</p><h3>${escapeHtml(career.title)}</h3><p>${escapeHtml(career.summary)}</p><div class="career-detail-grid"><div><h4>What the work looks like</h4><p>${escapeHtml(career.work)}</p></div><div><h4>Why communication matters</h4><p>${escapeHtml(career.english)}</p></div><div><h4>Try this first</h4><p>${escapeHtml(career.start)}</p><h4>Possible next steps</h4><p>${escapeHtml(career.next)}</p></div><div><h4>Study routes & examples</h4><p>${escapeHtml(guidance.study || 'Compare related degrees, recognised training routes and practical portfolios. Verify requirements with the institution or employer.')}</p></div><div><h4>Entry exams or portfolio</h4><p>${escapeHtml(guidance.entry || 'Requirements vary by role and institution. Check official admission notices and job descriptions; there is rarely one exam that covers every employer.')}</p></div><div><h4>Pay and package reality</h4><p>${escapeHtml(guidance.income || 'Compensation depends on location, employer, experience and specialist skills. Compare current postings and distinguish base salary from bonuses, project fees or royalties.')}</p><p class="career-live-links"><a href="${salarySearch}" target="_blank" rel="noopener noreferrer">Look up current India salary listings ↗</a></p></div></div>${resourceLinks?`<div class="career-source-links"><span>Official starting points</span>${resourceLinks}</div>`:''}<p class="career-caveat">These are exploration routes, not admission or employment guarantees. Course names, exam rules, fees and compensation change; verify the current details before making a decision.</p><button class="button button-accent career-plan-link" type="button" data-plan-career="${escapeHtml(career.title)}">Build a plan for this path <span aria-hidden="true">↗</span></button>`;
  detail.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
}
function populateCareerSelects() {
  const options = CAREERS.map(career => `<option value="${escapeHtml(career.title)}">${escapeHtml(career.title)}</option>`).join('');
  $('#plan-career').innerHTML = options;
  $('#interview-career').innerHTML = options;
  $('#plan-career').value = CAREERS[0].title;
  $('#interview-career').value = CAREERS[0].title;
}
function renderQuizQuestion() {
  const question = QUIZ_QUESTIONS[quizIndex];
  $('#quiz-results').hidden = true;
  $('#quiz-question').textContent = question.q;
  $('#quiz-step-label').textContent = `QUESTION ${String(quizIndex + 1).padStart(2,'0')} / ${QUIZ_QUESTIONS.length}`;
  $('#quiz-progress-fill').style.width = `${((quizIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`;
  $('#quiz-hint').textContent = question.hint;
  $('#quiz-options').innerHTML = question.opts.map((option,index) => `<button class="quiz-option ${quizAnswers[quizIndex]===option[1]?'selected':''}" type="button" data-quiz-option="${index}"><span>0${index+1}</span><span>${escapeHtml(option[0])}</span></button>`).join('');
  $('#quiz-next').disabled = !quizAnswers[quizIndex];
  $('#quiz-next').innerHTML = quizIndex === QUIZ_QUESTIONS.length - 1 ? 'See my directions <span aria-hidden="true">↗</span>' : 'Next question <span aria-hidden="true">↗</span>';
}
function showQuizResults() {
  const scores = {creative:0,analytical:0,people:0,leadership:0};
  quizAnswers.forEach(answer => { if (scores[answer] !== undefined) scores[answer] += 1; });
  const winners = Object.entries(scores).sort((a,b)=>b[1]-a[1]).map(row=>row[0]);
  const titles = [...new Set(winners.slice(0,3).flatMap(key => QUIZ_PATHS[key]))].slice(0,3);
  $('#quiz-question').textContent = 'Three directions to explore next';
  $('#quiz-options').innerHTML = '';
  $('#quiz-hint').textContent = 'Use these as starting points, not labels.';
  $('#quiz-progress-fill').style.width = '100%';
  $('#quiz-next').hidden = true;
  $('#quiz-results').hidden = false;
  $('#quiz-results').innerHTML = `<h3>Your curiosity points towards…</h3><div class="quiz-result-list">${titles.map((title,index)=>{const c=careerByTitle(title);return `<div class="quiz-result-item"><strong>0${index+1} · ${escapeHtml(title)}</strong><span>${escapeHtml(c.category)}</span></div>`}).join('')}</div><p class="muted-small" style="margin-top:14px">The quiz is a conversation starter, not a scientifically validated assessment.</p><button class="quiz-restart" type="button" id="quiz-restart">Start over ↻</button>`;
}
function buildPlan(event) {
  event.preventDefault();
  const grade = $('#plan-grade').value;
  const title = $('#plan-career').value;
  const minutes = Number($('#plan-time').value);
  const career = careerByTitle(title);
  const steps = [
    ['Listen',`Spend ${Math.max(3,Math.round(minutes*.2))} minutes studying a strong example in ${career.category.toLowerCase()}. Note how the speaker begins, explains and ends.`, 'Choose a short interview, article or scene.'],
    ['Speak',`Use ${Math.max(4,Math.round(minutes*.3))} minutes to explain one idea related to ${career.title.toLowerCase()}.`, 'Record only if you feel comfortable; focus on a clear first sentence.'],
    ['Write',`Spend ${Math.max(3,Math.round(minutes*.25))} minutes writing a short version of your idea.`, 'Cut repetition and add one specific example.'],
    ['Reflect',`Spend ${Math.max(2,minutes-Math.max(3,Math.round(minutes*.2))-Math.max(4,Math.round(minutes*.3))-Math.max(3,Math.round(minutes*.25)))} minutes choosing one thing to improve tomorrow.`, 'Track clarity and confidence, not whether you sound like someone else.']
  ];
  $('#plan-output').hidden = false;
  $('#plan-output').innerHTML = `<p class="eyebrow">YOUR ${minutes}-MINUTE ROUTINE · ${escapeHtml(grade.toUpperCase())}</p><h3>A small plan for ${escapeHtml(title)}</h3><p style="font-size:11px;color:#5b655b;line-height:1.75">${escapeHtml(career.start)} Keep the plan flexible around school, sleep and other responsibilities.</p><div class="plan-steps">${steps.map((step,index)=>`<article class="plan-step"><span>STEP 0${index+1}</span><strong>${escapeHtml(step[0])}</strong><p>${escapeHtml(step[1])}</p><p style="margin-top:8px;font-weight:700;color:#404b42">${escapeHtml(step[2])}</p></article>`).join('')}</div><button class="button button-dark" id="copy-plan" type="button" style="margin-top:18px">Copy my plan ↗</button>`;
  $('#plan-output').scrollIntoView({behavior:'smooth',block:'nearest'});
}
function scoreText(text, seconds = 0) {
  const clean = String(text || '').trim();
  const words = clean.match(/[\p{L}\p{N}’'-]+/gu) || [];
  const sentences = clean.split(/[.!?]+/).map(s=>s.trim()).filter(Boolean);
  const fillers = (clean.match(/\b(um+|uh+|erm+|like|you know|actually|basically|literally|sort of|kind of)\b/gi) || []).length;
  const longSentences = sentences.filter(sentence=>(sentence.match(/[\p{L}\p{N}’'-]+/gu)||[]).length>28).length;
  const repeated = clean.toLowerCase().match(/\b([a-z']+)\s+\1\b/g) || [];
  const unique = new Set(words.map(word=>word.toLowerCase())).size;
  const duration = seconds > 1 ? seconds : Math.max(20, words.length / 2.1);
  const wpm = words.length ? Math.round(words.length / duration * 60) : 0;
  const vocab = words.length ? Math.round(unique / words.length * 100) : 0;
  const fillerRate = words.length ? fillers / words.length : 0;
  const pace = wpm === 0 ? 0 : Math.max(35,Math.min(100,100 - Math.max(0,Math.abs(wpm-135)-10)*.55));
  const clarity = Math.max(20,Math.min(100,Math.round(72 + Math.min(12, sentences.length*2) - longSentences*6 - repeated.length*5 - fillerRate*150 + (clean.length>80?5:0))));
  const fluency = Math.max(20,Math.min(100,Math.round(pace - fillers*3 - repeated.length*4 + Math.min(10,words.length/12))));
  const structure = Math.max(20,Math.min(100,Math.round(48 + Math.min(20,sentences.length*3) + (/[,:;]/.test(clean)?6:0) + (words.length>65?8:0) - longSentences*5)));
  const score = Math.round((clarity + fluency + structure)/3);
  const suggestions = [];
  if (words.length < 35) suggestions.push('Add one specific example or detail so listeners have something concrete to remember.');
  else suggestions.push('Your sample has enough detail to review. Try stating your main point in the first two sentences.');
  if (fillers) suggestions.push(`Notice ${fillers} filler phrase${fillers===1?'':'s'} (${(clean.match(/\b(um+|uh+|erm+)\b/gi)||[]).length} hesitation sounds). Pause silently instead of filling every gap.`);
  else suggestions.push('No common filler words were detected in this transcript. Keep using pauses to give important ideas space.');
  if (wpm && wpm > 165) suggestions.push('Your estimated pace is quick. Slow down slightly at key facts and sentence endings.');
  else if (wpm && wpm < 95) suggestions.push('Your estimated pace is unhurried. Try connecting short sentences where ideas belong together.');
  else suggestions.push('Your estimated pace is in a useful practice range. Emphasise the words that carry the main idea.');
  if (longSentences) suggestions.push('Break one long sentence into two. A clear sentence is easier to follow when spoken.');
  if (vocab < 38 && words.length > 20) suggestions.push('Repeat fewer general words by naming the exact object, action or feeling you mean.');
  return {words:words.length, sentences:sentences.length, fillers, wpm, vocab, clarity, fluency, structure, score, suggestions, text:clean};
}
function renderFeedback(element, scored, provider = 'on-device scoring') {
  const wpm = scored.wpm || '—';
  element.hidden = false;
  element.innerHTML = `<div class="feedback-metrics"><div class="feedback-metric"><strong>${scored.score}</strong><span>Practice score / 100</span></div><div class="feedback-metric"><strong>${scored.wpm || '—'}</strong><span>Estimated words/min</span></div><div class="feedback-metric"><strong>${scored.fluency}</strong><span>Fluency signal</span></div></div><div class="feedback-copy"><p><strong>What the sample suggests</strong></p><p>${scored.words} words · ${scored.sentences} sentence${scored.sentences===1?'':'s'} · ${scored.vocab}% unique-word ratio. Pace is estimated from your recorded time when available; typed text uses a rough default.</p><ul>${scored.suggestions.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul><p class="muted-small">${escapeHtml(provider)} · heuristic feedback is not an official language score.</p></div>`;
}
async function requestAI(task, payload = {}) {
  const body = { task, ...payload };
  const response = await fetch('/api/ai', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  let data = {};
  try { data = await response.json(); } catch {}
  if (!response.ok) throw new Error(data.error || `AI service returned ${response.status}`);
  return data;
}
async function requestSpeechTranscription(file) {
  const form = new FormData();
  form.append('audio', file, file.name || 'practice-audio');
  const response = await fetch('/api/speech', {method:'POST',body:form});
  let data = {};
  try { data = await response.json(); } catch {}
  if (!response.ok) throw new Error(data.error || 'Transcription service unavailable');
  return data;
}
function setSpeechRecordingState(recording, title, description) {
  $('#record-title').textContent = title;
  $('#record-description').textContent = description;
  $('#record-orb').classList.toggle('recording', recording);
  $('#speech-record').disabled = recording;
  $('#speech-stop').disabled = !recording;
}
function startSpeechRecording() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  speechDuration = 0;
  listenStartedAt = Date.now();
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.lang = settings.language === 'hi' ? 'en-IN' : 'en-GB';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = event => {
      const lines = [];
      for (let i = 0; i < event.results.length; i++) lines.push(event.results[i][0].transcript);
      $('#speech-transcript').value = lines.join(' ').trim();
    };
    recognition.onerror = event => { setSpeechRecordingState(false,'Microphone needs attention',`Speech recognition reported: ${event.error}. You can still type a transcript.`); isListening=false; };
    recognition.onend = () => { if (isListening) { isListening=false; speechDuration = Math.max(0,(Date.now()-(listenStartedAt||Date.now()))/1000); setSpeechRecordingState(false,'Recording stopped','Review or edit the transcript, then analyze it.'); } };
    try { recognition.start(); isListening = true; setSpeechRecordingState(true,'Listening…','Speak naturally. Select Stop when you are finished.'); return; } catch {}
  }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) { setSpeechRecordingState(false,'Voice capture is not supported','Type your answer in the transcript box instead.'); return; }
  navigator.mediaDevices.getUserMedia({audio:true}).then(stream=>{
    speechRecorderChunks=[];
    speechRecorder = new MediaRecorder(stream);
    speechRecorder.ondataavailable = event => { if (event.data.size) speechRecorderChunks.push(event.data); };
    speechRecorder.onstop = () => { speechAudioBlob = new Blob(speechRecorderChunks,{type:speechRecorder.mimeType||'audio/webm'}); stream.getTracks().forEach(track=>track.stop()); speechDuration = Math.max(0,(Date.now()-(listenStartedAt||Date.now()))/1000); setSpeechRecordingState(false,'Audio captured','Transcription may require a configured server provider.'); };
    speechRecorder.start(); isListening=true; setSpeechRecordingState(true,'Recording audio…','Your browser records locally until you choose to transcribe it.');
  }).catch(()=>setSpeechRecordingState(false,'Microphone permission needed','Allow microphone access or type a transcript.'));
}
function stopSpeechRecording() {
  if (recognition && isListening) { isListening=false; try { recognition.stop(); } catch {} }
  if (speechRecorder && speechRecorder.state !== 'inactive') { isListening=false; speechRecorder.stop(); }
  speechDuration = Math.max(0,(Date.now()-(listenStartedAt||Date.now()))/1000);
  setSpeechRecordingState(false,'Recording stopped','Review or edit the transcript, then analyze it.');
}
async function analyzeSpeech() {
  const feedback = $('#speech-feedback');
  let transcript = $('#speech-transcript').value.trim();
  if (!transcript && speechAudioBlob) {
    feedback.hidden=false; feedback.textContent='Transcribing the local audio file…';
    try { const result=await requestSpeechTranscription(new File([speechAudioBlob],'speech-practice.webm',{type:speechAudioBlob.type})); transcript=result.text||''; $('#speech-transcript').value=transcript; }
    catch(error) { const scored=scoreText(''); renderFeedback(feedback,scored,'on-device scoring'); showToast(`Audio transcription unavailable: ${error.message}`); return; }
  }
  if (!transcript) { showToast('Record or enter a short answer before analyzing.'); return; }
  const scored=scoreText(transcript,speechDuration);
  renderFeedback(feedback,scored,'on-device scoring');
  try {
    const result=await requestAI('speech-feedback',{text:transcript,metrics:{words:scored.words,wpm:scored.wpm,fillers:scored.fillers,clarity:scored.clarity,fluency:scored.fluency,structure:scored.structure}});
    if (result.text) { const block=document.createElement('div'); block.className='feedback-copy'; block.innerHTML=`<p><strong>Additional coaching (${escapeHtml(result.provider||'AI')})</strong></p><p>${escapeHtml(result.text)}</p>`; feedback.appendChild(block); }
    const localLogs = loadDemoLogs(); localLogs.unshift({time:new Date().toISOString(),task:'speech-feedback',provider:result.provider||'unknown',outcome:'success',latencyMs:result.latencyMs||0}); localStorage.setItem(STORAGE.demoLogs,JSON.stringify(localLogs.slice(0,80)));
  } catch(error) { showToast('Using local scoring. AI providers are not configured or available.'); }
}
function localInterviewQuestion(title,index,level) {
  const custom = INTERVIEW_QUESTIONS[title] || [`What interests you about ${title.toLowerCase()}, and what have you done to explore it?`,`Tell me about a time you needed to explain a complex idea clearly.`,`What skill would you most like to improve for this role, and how will you practise it?`];
  if(level==='starter') return [`What first made you curious about ${title.toLowerCase()}?`,`Tell me about a project or activity you enjoyed.`,`What would you like to learn next?`][index%3];
  if(level==='challenging') return [`What is one common assumption about ${title.toLowerCase()} that you would challenge?`,`Tell me about a difficult trade-off you might face in this role.`,`How would you defend an idea while staying open to being wrong?`][index%3];
  return custom[index%custom.length];
}
function renderInterviewMessages() {
  $('#interview-empty').hidden = interviewHistory.length > 0;
  $('#interview-messages').innerHTML = interviewHistory.map(item=>`<div class="chat-bubble ${item.role==='user'?'user':'ai'}"><small>${item.role==='user'?'YOUR ANSWER':'INTERVIEWER'}</small>${escapeHtml(item.text)}${item.feedback?`<p class="chat-feedback">${escapeHtml(item.feedback)}</p>`:''}</div>`).join('');
  $('#interview-messages').scrollTop=$('#interview-messages').scrollHeight;
}
function startInterview() {
  interviewCareer=$('#interview-career').value;
  interviewQuestionIndex=0;
  interviewHistory=[{role:'ai',text:localInterviewQuestion(interviewCareer,interviewQuestionIndex,$('#interview-level').value)}];
  $('#interview-answer').disabled=false; $('#interview-form button').disabled=false; $('#interview-answer').focus();
  renderInterviewMessages();
}
async function submitInterviewAnswer(event) {
  event.preventDefault();
  const text=$('#interview-answer').value.trim();
  if(!text) return;
  interviewHistory.push({role:'user',text}); $('#interview-answer').value=''; renderInterviewMessages();
  let feedback='Try making your key point explicit, then support it with one example and a short reflection.';
  let nextQuestion=localInterviewQuestion(interviewCareer,++interviewQuestionIndex,$('#interview-level').value);
  try {
    const result=await requestAI('mock-interview',{career:interviewCareer,level:$('#interview-level').value,history:interviewHistory.slice(-6),prompt:'Give brief kind feedback on the answer, then ask one useful follow-up question. Return JSON with feedback and nextQuestion.'});
    if(result.feedback) feedback=result.feedback;
    if(result.nextQuestion) nextQuestion=result.nextQuestion;
    if(result.text && !result.feedback) feedback=result.text;
  } catch {}
  interviewHistory[interviewHistory.length-1].feedback=feedback;
  interviewHistory.push({role:'ai',text:nextQuestion});
  renderInterviewMessages();
}
async function reviewRoleplay() {
  const answer=$('#roleplay-answer').value.trim();
  if(!answer){showToast('Write a response before reviewing it.');return;}
  const scenario=ROLEPLAY_SCENARIOS[activeRoleplay];
  const resultBox=$('#roleplay-result');
  resultBox.hidden=false;
  resultBox.innerHTML='<p>Reviewing your response…</p>';
  const local=`<strong>What is working:</strong> You have a starting point to build on. <strong>Try next:</strong> name the concern or goal, make one clear statement, and explain the next step. <strong>Scenario focus:</strong> ${escapeHtml(scenario.focus)}.`;
  try { const result=await requestAI('roleplay-feedback',{scenario:scenario.title,context:scenario.cue,text:answer}); resultBox.innerHTML=`<strong>Communication review</strong><p>${escapeHtml(result.text||'')}</p><p class="muted-small">Provider: ${escapeHtml(result.provider||'AI')}</p>`; }
  catch { resultBox.innerHTML=local+'<p class="muted-small">On-device starter feedback; AI providers are not configured or available.</p>'; }
}
function applyRoleplay(key) {
  activeRoleplay=key;
  const scenario=ROLEPLAY_SCENARIOS[key];
  $$('.scenario-card').forEach(button=>button.classList.toggle('selected',button.dataset.roleplay===key));
  $('#roleplay-role').textContent=scenario.role;
  $('#roleplay-situation').textContent=scenario.title;
  $('#roleplay-cue').textContent=scenario.cue;
  $('#roleplay-answer').value=''; $('#roleplay-result').hidden=true;
}
function setTeleprompterText() {
  const scripts={
    news:'Good evening. Tonight, a group of young innovators is asking a simple question: what if technology made everyday life a little more human? Their project began in a classroom and now has a chance to reach a much wider audience. We meet the students behind the idea, and discover what happens when curiosity becomes action.',
    culture:'A new generation of storytellers is finding fresh ways to explore familiar places. Through music, film and digital art, young creators are mixing tradition with experimentation. The result is not a choice between the old and the new, but a conversation that gives both room to grow.',
    sports:'The final minutes changed the mood of the entire match. After a patient first half, the team adjusted its formation, found space on the wings and created two decisive chances. The score tells one part of the story; preparation, teamwork and the ability to respond tell the rest.'
  };
  const type=$('#anchor-script').value;
  if(type==='custom'){$('#anchor-custom-script').hidden=false;$('#teleprompter-text').textContent=$('#anchor-custom-script').value||'Write your own script below, then press Start teleprompter.';}
  else{$('#anchor-custom-script').hidden=true;$('#teleprompter-text').textContent=scripts[type]||scripts.news;}
  teleprompterOffset=0;$('#teleprompter-text').style.transform='translateY(0)';
}
function stopTeleprompter() { if(teleprompterFrame) cancelAnimationFrame(teleprompterFrame); teleprompterFrame=null; teleprompterLast=0; $('#anchor-play').innerHTML='Start teleprompter <span aria-hidden="true">▶</span>'; }
function animateTeleprompter(time) {
  if(!teleprompterFrame) return;
  if(teleprompterLast) teleprompterOffset+=Math.max(0,time-teleprompterLast)*Number($('#anchor-speed').value)/700;
  teleprompterLast=time;
  $('#teleprompter-text').style.transform=`${$('#anchor-mirror').checked?'scaleX(-1) ':''}translateY(-${teleprompterOffset}px)`;
  const windowHeight=$('#teleprompter-window').clientHeight;
  const textHeight=$('#teleprompter-text').scrollHeight;
  if(teleprompterOffset>textHeight+windowHeight){stopTeleprompter();showToast('Teleprompter finished.');return;}
  teleprompterFrame=requestAnimationFrame(animateTeleprompter);
}
function toggleTeleprompter() {
  if(teleprompterFrame){stopTeleprompter();return;}
  if($('#anchor-script').value==='custom') setTeleprompterText();
  teleprompterOffset=0;teleprompterLast=0;
  $('#anchor-play').innerHTML='Pause teleprompter <span aria-hidden="true">Ⅱ</span>';
  teleprompterFrame=requestAnimationFrame(animateTeleprompter);
}
async function toggleAnchorRecording() {
  const state=$('#anchor-record-state');
  if(anchorRecorder && anchorRecorder.state==='recording') {anchorRecorder.stop();$('#anchor-record').textContent='Record me';return;}
  if(!navigator.mediaDevices?.getUserMedia||!window.MediaRecorder){showToast('Video recording is not supported in this browser.');return;}
  try {
    anchorStream=await navigator.mediaDevices.getUserMedia({video:true,audio:true});
    anchorRecorderChunks=[];anchorRecorder=new MediaRecorder(anchorStream);
    anchorRecorder.ondataavailable=event=>{if(event.data.size)anchorRecorderChunks.push(event.data);};
    anchorRecorder.onstop=()=>{const blob=new Blob(anchorRecorderChunks,{type:anchorRecorder.mimeType||'video/webm'});anchorStream.getTracks().forEach(track=>track.stop());const url=URL.createObjectURL(blob);state.hidden=false;state.innerHTML=`<video controls playsinline style="width:100%;max-height:250px;margin-top:10px;background:#050608" src="${url}"></video><a class="button button-light" style="margin-top:10px" download="open-mic-practice.webm" href="${url}">Download your recording ↓</a><p class="muted-small" style="margin-top:9px">This file stays on your device unless you choose to share or upload it.</p>`;$('#anchor-record').textContent='Record me';};
    anchorRecorder.start();$('#anchor-record').textContent='Stop recording';state.hidden=false;state.textContent='Recording on this device. Select Stop recording to preview or download.';
  } catch {showToast('Camera or microphone permission was not granted.');}
}
function compareReferenceText() {
  if($('#compare-reference').value==='custom') return $('#reference-custom').value.trim();
  return REFERENCE_TEXTS[$('#compare-reference').value]||'';
}
function renderCompareResult(own,reference,transcriptSource='transcript') {
  const a=scoreText(own);const b=scoreText(reference);
  const vocabDiff=a.vocab-b.vocab;const sentenceDiff=a.sentences-b.sentences;
  const fillerText=a.fillers===0?'No common filler terms were detected in your text.':`${a.fillers} common filler terms appeared in your text.`;
  const lengthText=a.words>b.words*1.35?'Your sample is longer than the reference.':a.words<b.words*.65?'Your sample is shorter than the reference.':'Your sample length is fairly close to the reference.';
  const insights=[
    ['Length & structure',`${lengthText} You have ${a.sentences} sentence${a.sentences===1?'':'s'}; the reference has ${b.sentences}.`],
    ['Vocabulary range',`Unique-word ratio: ${a.vocab}% versus ${b.vocab}%. ${Math.abs(vocabDiff)<8?'The figures are close; focus on precise nouns and verbs.':vocabDiff>0?'Your sample varies its vocabulary more; check that each word is still natural.':'The reference repeats fewer distinct terms relative to its length; try simpler wording where clarity improves.'}`],
    ['Delivery signals',`${fillerText} Transcript comparison cannot measure accent, pitch, pronunciation or vocal similarity. Use the recording to reflect on pace and pausing yourself.`]
  ];
  $('#compare-results').innerHTML=`<div class="compare-result-head"><div><p class="eyebrow">YOUR COMPARISON</p><h3>Patterns worth noticing</h3></div><span>${Math.round((a.clarity+a.structure)/2)}</span></div><div class="compare-score-grid"><div class="compare-score"><strong>${a.words}</strong><span>Your words</span></div><div class="compare-score"><strong>${b.words}</strong><span>Reference words</span></div><div class="compare-score"><strong>${Math.abs(sentenceDiff)}</strong><span>Sentence-count gap</span></div></div>${insights.map(item=>`<div class="compare-insight"><strong>${escapeHtml(item[0])}</strong>${escapeHtml(item[1])}</div>`).join('')}<p class="muted-small" style="margin-top:18px">${escapeHtml(transcriptSource)} · Reference passages are practice examples, not verified verbatim transcripts of a named speaker.</p>`;
}
async function analyzeComparison() {
  let own=$('#compare-own').value.trim();
  if(!own&&selectedAudioFile){showToast('Transcribing your chosen audio. It is sent only now, after you selected Analyze.');try{const result=await requestSpeechTranscription(selectedAudioFile);own=result.text||'';$('#compare-own').value=own;}catch(error){showToast(`Audio transcription could not run: ${error.message}`);return;}}
  if(!own){showToast('Paste a transcript or choose an audio file first.');return;}
  let reference=compareReferenceText();
  if(!reference){showToast('Paste a reference transcript to compare.');return;}
  renderCompareResult(own,reference,selectedAudioFile?'audio transcription':'typed transcript');
  try {
    const result=await requestAI('compare-communication',{text:own,reference,referenceSpeaker:$('#compare-reference').value,prompt:'Compare clarity, sentence shape, filler words in the supplied text and vocabulary pattern. Do not infer an accent or identify a voice from text. Provide three practical observations.'});
    if(result.text){const node=document.createElement('div');node.className='compare-insight';node.innerHTML=`<strong>Additional coaching</strong>${escapeHtml(result.text)}`;$('#compare-results').appendChild(node);}
  } catch {}
}
function setWord(index) {
  activeWordIndex=(index+WORDS.length)%WORDS.length;
  const word=WORDS[activeWordIndex];
  $('#daily-word').textContent=word.word;$('#daily-pronunciation').textContent=word.pronunciation;$('#daily-definition').textContent=word.definition;$('#daily-example').textContent=word.example;
}
function loadSavedWords() {
  let words=[];try{words=JSON.parse(localStorage.getItem(STORAGE.savedWords)||'[]');}catch{}
  $('#saved-words').textContent=words.length?`Saved for practice: ${words.join(' · ')}`:'Your saved words will appear here on this device.';
}
function handleEmailAnswer(event) {
  const button=event.target.closest('[data-email]');if(!button)return;
  const index=Number(button.dataset.email);const correct=index===1;
  if(button.dataset.answered==='true')return;
  $$('.email-option').forEach(item=>{item.disabled=true;if(Number(item.dataset.email)===1)item.classList.add('correct');});
  if(!correct)button.classList.add('incorrect');
  button.dataset.answered='true';emailScore+=correct?1:0;
  $('#email-score').textContent=`${emailScore} / ${emailRound+1}`;
  $('#email-feedback').textContent=correct?'Strong choice: it is polite, specific, gives a reason and includes a clear deadline. The other versions are either too abrupt or too inflated.':'Look for a message that is polite, specific and easy to act on. The strongest version says what is needed, by when and why.';
}
function nextEmailRound() {
  emailRound++;
  const samples=[
    [['Can u send this asap.','Hello, could you send the revised file by 2 pm today? I need it for the final presentation. Thank you.','Please do the needful at the earliest convenience regarding the file.'],1,'A clear request names the file, the deadline and the reason.'],
    [['I cannot come. Shift it.','Your meeting is bad for me.','Hello, I have a clash at that time. Would 3 pm tomorrow work instead? Thank you for considering it.'],2,'A professional reschedule explains the issue and suggests a practical alternative.'],
    [['The report is confusing. Fix it.','The report is strong overall. Could we clarify the second chart and add the source before sharing it?','This report has various issues which must be corrected in due course.'],1,'Useful feedback is specific, respectful and linked to an action.'],
    [['Sorry I forgot. I will do it later.','I missed the deadline. I will send the completed draft by 5 pm and will flag any blocker earlier next time.','I was unable to do the task for many reasons.'],2,'Accountability includes naming what happened and committing to a clear next step.']
  ];
  const sample=samples[(emailRound-1)%samples.length];
  $('#email-prompt').textContent='Choose the strongest version of this message.';
  $('#email-options').innerHTML=sample[0].map((text,index)=>`<button class="email-option" data-email="${index}" type="button"><span>${String.fromCharCode(65+index)}</span><span>${escapeHtml(text)}</span></button>`).join('');
  $('#email-feedback').textContent='';$('#email-next').textContent='Try another edit ↻';
  $('#email-options').dataset.correct=sample[1];$('#email-options').dataset.explanation=sample[2];
}
function getBoardData() {
  try{return JSON.parse(localStorage.getItem(STORAGE.demoLeaderboard)||'[]');}catch{return[];}
}
async function refreshLeaderboard() {
  let entries=[];let remote=false;
  try {const response=await fetch(`/api/leaderboard?metric=${encodeURIComponent(selectedBoard)}`);if(response.ok){const data=await response.json();if(Array.isArray(data.entries)){entries=data.entries;remote=true;}}} catch {}
  if(!remote)entries=getBoardData().map(entry=>({...entry}));
  entries.sort((a,b)=>(Number(b[selectedBoard]??b.score)-Number(a[selectedBoard]??a.score))||String(a.createdAt||'').localeCompare(String(b.createdAt||'')));
  $('#leaderboard-list').innerHTML=entries.length?entries.slice(0,12).map((entry,index)=>`<div class="leader-row"><span class="rank-number">${String(index+1).padStart(2,'0')}</span><span class="leader-avatar">${escapeHtml((entry.nickname||'?').slice(0,2).toUpperCase())}</span><span class="leader-name"><strong>${escapeHtml(entry.nickname||'Participant')}</strong><small>${escapeHtml(entry.grade||'Class X')} · ${remote?'Opted in':'This device'}</small></span><span class="leader-score">${Number(entry[selectedBoard]??entry.score??0)}</span></div>`).join(''):'<div class="leader-row leader-placeholder"><span class="rank-number">01</span><span class="leader-avatar">?</span><span class="leader-name"><strong>Be the first to join</strong><small>Opt in when you are ready</small></span><span class="leader-score">—</span></div>';
  $('#leaderboard-note').textContent=remote?'Shared rankings are stored without audio or transcripts. Ask the project administrator to remove your entry.': 'No shared backend detected. This demo stores your opt-in entry only on this browser until a backend is configured.';
}
async function submitLeaderboard(event) {
  event.preventDefault();
  if(!$('#leader-consent').checked){showToast('Please give permission before joining the shared leaderboard.');return;}
  const entry={nickname:$('#leader-nickname').value.trim().slice(0,20),grade:$('#leader-grade').value,score:Number($('#leader-score').value),fluency:Number($('#leader-score').value),clarity:Number($('#leader-score').value),consent:true,createdAt:new Date().toISOString()};
  if(!entry.nickname||entry.score<0||entry.score>100){showToast('Check your nickname and score.');return;}
  try {
    const response=await fetch('/api/leaderboard',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(entry)});
    const data=await response.json();
    if(response.ok){setMessage($('#leaderboard-message'),'You joined the shared practice board.');$('#leaderboard-form').reset();await refreshLeaderboard();return;}
    if(response.status!==404&&response.status!==405)throw new Error(data.error||'Shared leaderboard is not available.');
  } catch(error) {
    if(error.message&&error.message!=='Failed to fetch'&& !/404|405/.test(error.message)){setMessage($('#leaderboard-message'),error.message,true);return;}
  }
  const entries=getBoardData();entries.push(entry);localStorage.setItem(STORAGE.demoLeaderboard,JSON.stringify(entries));setMessage($('#leaderboard-message'),'Saved on this browser only. Shared rankings need a deployed backend.');$('#leaderboard-form').reset();await refreshLeaderboard();
}
function applySettings(next, persist = false) {
  settings={...structuredClone(DEFAULT_SETTINGS),...settings,...next,features:{...DEFAULT_SETTINGS.features,...(settings.features||{}),...(next.features||{})},providerEnabled:{...DEFAULT_SETTINGS.providerEnabled,...(settings.providerEnabled||{}),...(next.providerEnabled||{})},providerOrder:next.providerOrder||settings.providerOrder||DEFAULT_SETTINGS.providerOrder};
  document.body.dataset.theme=settings.theme;
  document.documentElement.lang=settings.language==='hi'?'hi':'en';
  Object.entries(settings.features||{}).forEach(([key,enabled])=>{const nodes=$$(`[data-feature="${key}"]`);nodes.forEach(node=>node.classList.toggle('feature-hidden',!enabled));});
  $('#school-credit').textContent=settings.showSchoolName?`A student-led career exploration project · ${settings.schoolName}`:'A student-led career exploration project';
  if(settings.language==='hi') {
    $('#header-note')?.replaceChildren(document.createTextNode('करियर मेला प्रयोग'));
    $('#hero h1').innerHTML='अच्छी English<br>खोलती है <span class="word-ring">रास्ते।</span>';
    $('.hero-lede').textContent='सिर्फ़ परीक्षाओं के लिए नहीं। अपने विचार व्यक्त करने, कहानियाँ सुनाने, आत्मविश्वास से बात करने और करियर चुनने के लिए।';
    $('.hero-actions .button-accent').innerHTML='English Lab आज़माएँ <span aria-hidden="true">↗</span>';
    $('.hero-actions .quiet-link').innerHTML='करियर की संभावनाएँ देखें <span aria-hidden="true">↓</span>';
    $('#career-search').placeholder='करियर, कौशल या क्षेत्र खोजें';
    $('#quiz-next').innerHTML='अगला सवाल <span aria-hidden="true">↗</span>';
  } else {
    $('#hero h1').innerHTML='Good English<br>opens <span class="word-ring">doors.</span>';
    $('.hero-lede').textContent='Not just for exams. For the stories you tell, the rooms you enter, the ideas people remember, and the work you choose to do.';
    $('.hero-actions .button-accent').innerHTML='Try the English lab <span aria-hidden="true">↗</span>';
    $('.hero-actions .quiet-link').innerHTML='See what English can unlock <span aria-hidden="true">↓</span>';
    $('#career-search').placeholder='Search a role, skill or industry';
    $('#quiz-next').innerHTML=quizIndex===QUIZ_QUESTIONS.length-1?'See my directions <span aria-hidden="true">↗</span>':'Next question <span aria-hidden="true">↗</span>';
  }
  if(persist) saveLocalSettings();
}
function loadDemoLogs(){try{return JSON.parse(localStorage.getItem(STORAGE.demoLogs)||'[]');}catch{return[];}}
function adminLocalLogin() {
  return new Promise(resolve=>setTimeout(()=>resolve({ok:true,demo:true}),120));
}
function revealAdmin() {
  $('#admin-panel').hidden=false;document.body.classList.add('modal-open');
  history.replaceState(null,'',`${location.pathname}${location.search}#admin`);
  const hasSession=sessionStorage.getItem('openmic.admin.session')==='demo';
  if(hasSession){adminAuthenticated=true;adminDemoMode=true;showAdminWorkspace();}
  else {$('#admin-login-screen').hidden=false;$('#admin-workspace').hidden=true;$('#admin-user').focus();}
}
function closeAdmin() {
  $('#admin-panel').hidden=true;document.body.classList.remove('modal-open');
  if(location.hash==='#admin')history.replaceState(null,'',`${location.pathname}${location.search}`);
}
async function adminLogin(event) {
  event.preventDefault();
  const user=$('#admin-user').value.trim();const password=$('#admin-password').value;
  setMessage($('#admin-login-message'),'Checking credentials…');
  try {
    const response=await fetch('/api/admin/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:user,password})});
    const data=await response.json();
    if(response.ok){adminAuthenticated=true;adminDemoMode=false;adminSettings=data.settings||null;sessionStorage.removeItem('openmic.admin.session');$('#demo-credential-note').hidden=true;showAdminWorkspace();return;}
    if(response.status!==404&&response.status!==405){setMessage($('#admin-login-message'),data.error||'Login failed.',true);return;}
  } catch {}
  if(user==='admin'&&password==='careers2026') {
    const local=await adminLocalLogin();adminAuthenticated=true;adminDemoMode=true;sessionStorage.setItem('openmic.admin.session','demo');$('#demo-credential-note').hidden=false;showAdminWorkspace();return;
  }
  setMessage($('#admin-login-message'),'Could not sign in. In demo mode use the mock credentials; in production configure the server-side admin secrets.',true);
}
async function loadAdminState() {
  const state={settings:{...settings},secrets:adminSecretsStatus,logs:loadDemoLogs(),leaderboard:getBoardData()};
  if(adminDemoMode){adminSettings={...settings};return state;}
  try {
    const [settingsRes,keysRes,logsRes,boardRes]=await Promise.all([
      fetch('/api/admin/settings'),fetch('/api/admin/keys/status'),fetch('/api/admin/logs'),fetch('/api/admin/leaderboard')
    ]);
    if(settingsRes.ok){const data=await settingsRes.json();adminSettings=data.settings||settings;state.settings=adminSettings;}
    if(keysRes.ok){const data=await keysRes.json();adminSecretsStatus=data;state.secrets=data;}
    if(logsRes.ok){const data=await logsRes.json();state.logs=data.logs||[];}
    if(boardRes.ok){const data=await boardRes.json();state.leaderboard=data.entries||[];}
  } catch {}
  return state;
}
async function showAdminWorkspace() {
  $('#admin-login-screen').hidden=true;$('#admin-workspace').hidden=false;
  await loadAdminState();renderAdminTab('features');
}
function adminTab() { return $('.admin-tab.active')?.dataset.adminTab||'features'; }
function renderAdminTab(tab) {
  $$('.admin-tab').forEach(button=>button.classList.toggle('active',button.dataset.adminTab===tab));
  const content=$('#admin-content');
  if(tab==='features') {
    content.innerHTML=`<h3 class="admin-section-title">Feature visibility</h3><p class="admin-section-description">Turn sections on or off. Disabled sections disappear from the page layout and the rest of the page closes the gap naturally.</p><div class="admin-grid">${Object.entries(FEATURE_LABELS).map(([key,item])=>`<article class="admin-card"><label for="feature-${key}"><span>${escapeHtml(item[0])}</span><span class="admin-toggle"><input type="checkbox" id="feature-${key}" data-feature-toggle="${key}" ${settings.features[key]?'checked':''}><span></span></span></label><p>${escapeHtml(item[1])}</p></article>`).join('')}</div><div class="admin-actions"><button class="button button-accent" id="save-feature-settings" type="button">Save feature settings ↗</button><button class="button button-outline" id="enable-all-features" type="button">Enable all</button><button class="button button-outline" id="disable-all-features" type="button">Disable optional features</button></div><p class="admin-section-description" style="margin-top:18px">Only admin can change feature visibility. The privacy dialog remains available from the footer. Settings are shared only after the Cloudflare backend is deployed.</p>`;
  } else if(tab==='ai') {
    const providerNames={cloudflare:'Cloudflare Workers AI',gemini:'Gemini API pool',free:'OpenAI-compatible free endpoint',laptop:'Your laptop / Ollama'};
    const order=settings.providerOrder||DEFAULT_SETTINGS.providerOrder;
    content.innerHTML=`<h3 class="admin-section-title">AI routing and failover</h3><p class="admin-section-description">Keep provider keys on the server. The router tries providers in the order below when automatic fallback is enabled; when it is disabled, only your selected provider is attempted and the browser uses on-device scoring if it fails.</p><div class="admin-grid"><article class="admin-card"><label for="automatic-fallback"><span>Automatic fallback</span><span class="admin-toggle"><input type="checkbox" id="automatic-fallback" ${settings.automaticFallback?'checked':''}><span></span></span></label><p>On: continue to the next provider when one errors or reaches a limit. Off: use the selected provider only.</p></article><article class="admin-card"><div class="admin-field"><label for="preferred-provider">Manual provider</label><select id="preferred-provider">${Object.entries(providerNames).map(([key,name])=>`<option value="${key}" ${settings.preferredProvider===key?'selected':''}>${escapeHtml(name)}</option>`).join('')}</select></div><p>Used when automatic fallback is off.</p></article><article class="admin-card"><div class="admin-field"><label for="quality-mode">Quality / quota mode</label><select id="quality-mode"><option value="best" ${settings.qualityMode==='best'?'selected':''}>Best available</option><option value="balanced" ${settings.qualityMode==='balanced'?'selected':''}>Balanced</option><option value="saver" ${settings.qualityMode==='saver'?'selected':''}>Quota saver</option></select></div><p>Quota saver prefers local/low-cost options when configured; fallback remains visible in the request log.</p></article><article class="admin-card"><label><span>Local scoring fallback</span><span class="provider-status ready">Always available</span></label><p>Rule-based text metrics run in the browser if every remote provider fails. They do not measure pronunciation or accent.</p></article></div><h4 class="admin-section-title" style="margin-top:25px">Provider order</h4><p class="admin-section-description">Use the up and down controls to change priority. Disabled providers are skipped.</p><div id="provider-order-list">${order.map((key,index)=>`<div class="admin-provider-row" data-provider-row="${key}"><div><strong>${escapeHtml(providerNames[key]||key)}</strong><small>${key==='cloudflare'?'Workers AI binding AI':key==='gemini'?'Encrypted key pool':key==='free'?'Endpoint, model and key': 'Ollama through an HTTPS tunnel'}</small></div><div class="provider-rank"><button type="button" data-provider-up="${key}" aria-label="Move ${key} up" ${index===0?'disabled':''}>↑</button><button type="button" data-provider-down="${key}" aria-label="Move ${key} down" ${index===order.length-1?'disabled':''}>↓</button></div><label class="admin-toggle"><input type="checkbox" data-provider-enabled="${key}" ${settings.providerEnabled[key]?'checked':''}><span></span></label></div>`).join('')}</div><div class="admin-actions"><button class="button button-accent" id="save-router-settings" type="button">Save router settings ↗</button></div><h4 class="admin-section-title" style="margin-top:33px">Provider credentials</h4><p class="admin-section-description">Paste values here only over your deployed HTTPS site. The server encrypts them before storing in D1, and never returns them to this page. Keys are not stored in browser storage or source control.</p><div class="admin-alert">Server key storage requires a D1 binding and a secret named CONFIG_ENCRYPTION_KEY. If these are not configured, set provider keys as Cloudflare Worker secrets instead.</div><div class="admin-grid"><div class="admin-card"><div class="admin-field"><label for="gemini-keys">Gemini API keys, one per line</label><textarea id="gemini-keys" rows="4" placeholder="Paste multiple keys only on your private admin session"></textarea><small id="gemini-key-status">${adminSecretsStatus.geminiCount||0} keys stored server-side. Values are never shown again.</small></div></div><div class="admin-card"><div class="admin-field"><label for="free-url">Free LLM endpoint</label><input id="free-url" type="url" placeholder="https://provider.example/v1/chat/completions"></div><div class="admin-field"><label for="free-model">Model name</label><input id="free-model" placeholder="provider-model-name"></div><div class="admin-field"><label for="free-key">API key</label><input id="free-key" type="password" autocomplete="new-password" placeholder="Stored encrypted on the server"></div></div><div class="admin-card"><div class="admin-field"><label for="laptop-url">Laptop endpoint (HTTPS tunnel)</label><input id="laptop-url" type="url" placeholder="https://your-tunnel.trycloudflare.com"></div><div class="admin-field"><label for="laptop-model">Ollama model</label><input id="laptop-model" value="llama3.2:3b"></div><div class="admin-field"><label for="laptop-token">Laptop shared token</label><input id="laptop-token" type="password" autocomplete="new-password" placeholder="Protect the tunnel endpoint"></div></div><div class="admin-card"><h4>Cloudflare binding</h4><p>${adminSecretsStatus.cloudflareConfigured?'Workers AI binding is configured.':'Workers AI binding status will be known at runtime.'} Add an AI binding named <code>AI</code> in Cloudflare and redeploy.</p></div></div><div class="admin-actions"><button class="button button-accent" id="save-provider-keys" type="button">Encrypt and save credentials ↗</button><button class="button button-outline" id="clear-provider-fields" type="button">Clear fields</button></div><p class="form-message" id="provider-key-message" aria-live="polite"></p>`;
  } else if(tab==='branding') {
    content.innerHTML=`<h3 class="admin-section-title">Brand and language</h3><p class="admin-section-description">Choose the atmosphere, language and school credit. These controls change the page without a bottom navigation menu.</p><div class="admin-grid"><div class="admin-card"><div class="admin-field"><label for="brand-theme">Visual theme</label><select id="brand-theme"><option value="mix" ${settings.theme==='mix'?'selected':''}>Mix: dark hero + colourful sections</option><option value="dark" ${settings.theme==='dark'?'selected':''}>Dark / cinematic</option><option value="vibrant" ${settings.theme==='vibrant'?'selected':''}>Vibrant / energetic</option><option value="clean" ${settings.theme==='clean'?'selected':''}>Clean / professional</option></select></div><p>Every theme remains scroll-first, responsive and keyboard accessible.</p></div><div class="admin-card"><div class="admin-field"><label for="brand-language">Language</label><select id="brand-language"><option value="en" ${settings.language==='en'?'selected':''}>English</option><option value="hi" ${settings.language==='hi'?'selected':''}>Hindi UI (beta)</option></select></div><p>Career names remain in English to help students learn role-specific vocabulary.</p></div><div class="admin-card"><label for="show-school-name"><span>Show school name</span><span class="admin-toggle"><input type="checkbox" id="show-school-name" ${settings.showSchoolName?'checked':''}><span></span></span></label><div class="admin-field"><label for="school-name">School credit</label><input id="school-name" value="${escapeHtml(settings.schoolName)}" maxlength="90"></div></div><div class="admin-card"><h4>Copyright line</h4><p>The footer automatically adds the current year. Use of school branding should be approved by the school before public distribution.</p><span class="provider-status ready">© ${new Date().getFullYear()} Open Mic</span></div></div><div class="admin-actions"><button class="button button-accent" id="save-brand-settings" type="button">Save branding ↗</button><button class="button button-outline" id="reset-brand-settings" type="button">Reset to default</button></div>`;
  } else if(tab==='requests') {
    const logs=adminDemoMode?loadDemoLogs():[];
    content.innerHTML=`<h3 class="admin-section-title">Request activity</h3><p class="admin-section-description">Logs contain only task type, provider, status, latency and time. Prompt text, transcripts and audio are not stored in the request log.</p><div class="admin-actions"><button class="button button-outline" id="refresh-request-logs" type="button">Refresh log ↻</button><button class="button button-outline" id="clear-demo-logs" type="button">Clear demo log</button></div><div id="request-log-content"><p class="admin-section-description">${adminDemoMode?'Showing this browser’s demo log.':'Loading server request log…'}</p>${adminDemoMode?renderLogsTable(logs):''}</div>`;
    if(!adminDemoMode)fetch('/api/admin/logs').then(res=>res.ok?res.json():Promise.reject()).then(data=>{const target=$('#request-log-content');if(target)target.innerHTML=renderLogsTable(data.logs||[]);}).catch(()=>{const target=$('#request-log-content');if(target)target.innerHTML='<p class="admin-section-description">Server request logs are not available. Deploy D1 and the admin Worker endpoint.</p>';});
  } else if(tab==='leaderboard') {
    const entries=adminDemoMode?getBoardData():[];
    content.innerHTML=`<h3 class="admin-section-title">Leaderboard moderation</h3><p class="admin-section-description">Remove entries on request or if consent was not valid. Only nickname, class and opt-in scores are kept—never raw voice or transcript.</p><div class="admin-actions"><button class="button button-outline" id="refresh-admin-board" type="button">Refresh ↻</button><button class="button button-outline admin-danger" id="clear-admin-board" type="button">Clear all entries</button></div><div id="admin-board-content">${adminDemoMode?renderAdminBoard(entries):'<p class="admin-section-description">Loading shared entries…</p>'}</div>`;
    if(!adminDemoMode)fetch('/api/admin/leaderboard').then(res=>res.ok?res.json():Promise.reject()).then(data=>{const target=$('#admin-board-content');if(target)target.innerHTML=renderAdminBoard(data.entries||[]);}).catch(()=>{const target=$('#admin-board-content');if(target)target.innerHTML='<p class="admin-section-description">Shared leaderboard is unavailable. Configure D1 to moderate entries.</p>';});
  }
}
function renderLogsTable(logs) {
  if(!logs.length)return '<p class="admin-section-description">No requests logged yet.</p>';
  return `<div style="overflow-x:auto;margin-top:16px"><table class="admin-log-table"><thead><tr><th>Time</th><th>Task</th><th>Provider</th><th>Status</th><th>Latency</th></tr></thead><tbody>${logs.slice(0,80).map(log=>`<tr><td>${escapeHtml(new Date(log.createdAt||log.time||Date.now()).toLocaleString())}</td><td>${escapeHtml(log.task||'unknown')}</td><td>${escapeHtml(log.provider||'local')}</td><td>${escapeHtml(log.outcome||'success')}</td><td>${Number(log.latencyMs||log.latency_ms||0)} ms</td></tr>`).join('')}</tbody></table></div>`;
}
function renderAdminBoard(entries) {
  if(!entries.length)return '<p class="admin-section-description">No opt-in entries yet.</p>';
  return `<div style="overflow-x:auto;margin-top:16px"><table class="admin-log-table"><thead><tr><th>Nickname</th><th>Class</th><th>Score</th><th>Consent</th><th>Action</th></tr></thead><tbody>${entries.map(entry=>`<tr><td>${escapeHtml(entry.nickname)}</td><td>${escapeHtml(entry.grade)}</td><td>${Number(entry.score||0)}</td><td>${entry.consent?'Yes':'No'}</td><td><button class="button button-outline" data-delete-entry="${entry.id||entry.createdAt||entry.nickname}" type="button" style="min-height:30px;padding:0 8px">Remove</button></td></tr>`).join('')}</tbody></table></div>`;
}
async function saveAdminSettings(next) {
  settings={...settings,...next,features:{...settings.features,...(next.features||{})},providerEnabled:{...settings.providerEnabled,...(next.providerEnabled||{})},providerOrder:next.providerOrder||settings.providerOrder};
  applySettings(settings,true);
  if(adminDemoMode){showToast('Saved in this browser’s demo settings only.');renderAdminTab(adminTab());return;}
  try {
    const response=await fetch('/api/admin/settings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(settings)});
    const data=await response.json();if(!response.ok)throw new Error(data.error||'Unable to save server settings.');
    settings={...settings,...data.settings};showToast('Settings saved to the shared site.');
  } catch(error){showToast(`Saved locally. Shared save unavailable: ${error.message}`);}
  renderAdminTab(adminTab());
}
async function saveProviderKeys() {
  if(adminDemoMode){setMessage($('#provider-key-message'),'Demo mode cannot store provider credentials. Deploy the server endpoint and configure CONFIG_ENCRYPTION_KEY.',true);return;}
  const geminiKeys=$('#gemini-keys').value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
  const payload={geminiKeys,freeUrl:$('#free-url').value.trim(),freeKey:$('#free-key').value,freeModel:$('#free-model').value.trim(),laptopUrl:$('#laptop-url').value.trim(),laptopToken:$('#laptop-token').value,laptopModel:$('#laptop-model').value.trim()};
  if(!Object.values(payload).some(value=>Array.isArray(value)?value.length:!!value)){setMessage($('#provider-key-message'),'Enter at least one provider value to save.',true);return;}
  setMessage($('#provider-key-message'),'Encrypting values on the server…');
  try {
    const response=await fetch('/api/admin/keys',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const data=await response.json();
    if(!response.ok)throw new Error(data.error||'Credential storage failed.');
    adminSecretsStatus={...adminSecretsStatus,...data.status};
    $('#gemini-keys').value='';$('#free-key').value='';$('#laptop-token').value='';
    setMessage($('#provider-key-message'),'Credentials encrypted and saved. The secret values were cleared from the form.');
    $('#gemini-key-status').textContent=`${adminSecretsStatus.geminiCount||0} keys stored server-side. Values are never shown again.`;
  } catch(error){setMessage($('#provider-key-message'),`${error.message}. No credentials were stored in this browser.`,true);}
}
function initQR() {
  const current = location.protocol==='http:'||location.protocol==='https:' ? `${location.origin}${location.pathname}` : 'https://github.com/bhavyakumar-dev/careerfair';
  $('#share-url').textContent=current;
  const target=$('#qr-code');target.innerHTML='';
  if(window.QRCode){new QRCode(target,{text:current,width:220,height:220,colorDark:'#17191f',colorLight:'#fffdf7',correctLevel:QRCode.CorrectLevel.H});}
  else {const img=document.createElement('img');img.alt='QR code for Open Mic';img.src=`https://api.qrserver.com/v1/create-qr-code/?size=240x240&ecc=H&color=17191f&bgcolor=fffdf7&data=${encodeURIComponent(current)}`;img.style.width='100%';img.style.height='100%';target.appendChild(img);}
}
function downloadQRArtwork() {
  const current=$('#share-url').textContent;
  const qrCanvas=$('#qr-code canvas');const qrImage=$('#qr-code img');
  const draw=source=>{
    const canvas=document.createElement('canvas');canvas.width=900;canvas.height=1040;const context=canvas.getContext('2d');
    context.fillStyle='#b5a6ff';context.fillRect(0,0,900,1040);context.strokeStyle='rgba(23,25,31,.35)';context.lineWidth=2;context.strokeRect(38,38,824,964);
    context.fillStyle='#17191f';context.font='700 26px DM Sans, sans-serif';context.fillText('OPEN MIC',75,100);context.font='700 15px DM Sans, sans-serif';context.fillText('THE ENGLISH CAREER LAB',75,132);
    context.fillStyle='#fffdf7';context.fillRect(135,180,630,630);context.drawImage(source,175,220,550,550);
    context.fillStyle='#ff6b3d';context.fillRect(412,457,76,76);context.strokeStyle='#fffdf7';context.lineWidth=13;context.strokeRect(412,457,76,76);context.fillStyle='#17191f';context.font='800 30px Syne, sans-serif';context.fillText('OM',428,503);
    context.fillStyle='#17191f';context.font='800 49px Syne, sans-serif';context.fillText('Good practice travels.',75,890);context.font='700 17px DM Sans, sans-serif';context.fillText('SCAN TO EXPLORE',75,930);context.font='12px DM Sans, sans-serif';context.fillText(current.slice(0,100),75,964);
    const link=document.createElement('a');link.download='open-mic-careerfair-qr.png';link.href=canvas.toDataURL('image/png');link.click();
  };
  if(qrCanvas){draw(qrCanvas);return;}
  if(qrImage&&qrImage.complete){draw(qrImage);return;}
  const temp=new Image();temp.crossOrigin='anonymous';temp.onload=()=>draw(temp);temp.onerror=()=>showToast('The QR generator is unavailable. Reopen the page while online.');temp.src=`https://api.qrserver.com/v1/create-qr-code/?size=550x550&ecc=H&color=17191f&bgcolor=fffdf7&data=${encodeURIComponent(current)}`;
}
function setPronunciationSound(key) {
  const sound = PRONUNCIATION_SOUNDS[key] || PRONUNCIATION_SOUNDS.th;
  activePronunciationSound = key in PRONUNCIATION_SOUNDS ? key : 'th';
  $$('#sound-buttons [data-sound]').forEach(button => button.classList.toggle('active', button.dataset.sound === activePronunciationSound));
  $('#mouth-diagram').dataset.mouth = activePronunciationSound;
  $('#mouth-diagram').setAttribute('aria-label', `Illustrative mouth placement for ${sound.title}`);
  $('#sound-phoneme').textContent = sound.label;
  $('#sound-title').textContent = sound.title;
  $('#sound-placement').textContent = sound.placement;
  $('#sound-lips').textContent = sound.lips;
  $('#sound-examples').innerHTML = sound.examples.map(word => `<span>${escapeHtml(word)}</span>`).join('');
  $('#sound-contrast').textContent = sound.contrast;
}
function buildDebate(event) {
  event.preventDefault();
  const topic = $('#debate-topic').value;
  const side = $('input[name="debate-side"]:checked')?.value || 'support';
  const claim = $('#debate-claim').value.trim();
  const evidence = $('#debate-evidence').value.trim();
  const counter = $('#debate-counter').value.trim();
  if (claim.length < 8 || evidence.length < 12 || counter.length < 12) {
    showToast('Add a clear claim, one concrete reason or example, and a fair counterargument with your response.');
    return;
  }
  const intro = side === 'support' ? `I support the motion that ${topic.charAt(0).toLowerCase()}${topic.slice(1)}.` : `I challenge the motion that ${topic.charAt(0).toLowerCase()}${topic.slice(1)}.`;
  debateDraft = `${intro}\n\nMy main claim is this: ${claim}\n\nOne reason for my view is ${evidence}\n\nA fair counterargument is: ${counter}`;
  const wordCount = debateDraft.split(/\s+/).filter(Boolean).length;
  const structureScore = Math.min(100, 30 + 25 + 25 + Math.min(20, Math.round(wordCount / 8)));
  $('#debate-output').innerHTML = `<div class="debate-built"><div class="debate-built-top"><span>${side === 'support' ? 'SUPPORTING THE MOTION' : 'CHALLENGING THE MOTION'}</span><strong>${structureScore}<small>/100 structure check</small></strong></div>${debateDraft.split(/\n\n/).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}<div class="debate-checklist"><span>✓ Claim</span><span>✓ Supporting reason</span><span>✓ Counterargument</span></div><p class="muted-small">This checklist measures whether the parts of an argument are present. It is not an English proficiency score or a judgement about your opinion.</p></div>`;
  $('#copy-debate').disabled = false;
  $('#review-debate').disabled = false;
  $('#debate-feedback').hidden = true;
  $('#debate-feedback').textContent = '';
}
async function reviewDebate() {
  if (!debateDraft) return;
  const target = $('#debate-feedback');
  target.hidden = false;
  target.textContent = 'Reviewing your argument…';
  const metrics = { words: debateDraft.split(/\s+/).filter(Boolean).length, hasClaim: Boolean($('#debate-claim').value.trim()), hasExample: Boolean($('#debate-evidence').value.trim()), hasCounterargument: Boolean($('#debate-counter').value.trim()) };
  try {
    const result = await requestAI('speech-feedback', { text: debateDraft, metrics, prompt: 'Review this debate argument for logical structure, clarity, fair treatment of an opposing view and usefulness of the supporting example. Give concrete advice without judging the student or requiring a particular opinion.' });
    target.innerHTML = `<p><strong>Coach feedback · ${escapeHtml(result.provider || 'AI')}</strong></p><p>${escapeHtml(result.text || 'No feedback was returned.')}</p>`;
  } catch {
    const suggestions = [];
    if (metrics.words < 70) suggestions.push('Add one more concrete detail so your argument is easier to evaluate.');
    if (!/because|for example|such as|evidence|data|when/i.test(debateDraft)) suggestions.push('Connect your claim to a specific reason or example using a phrase such as “because” or “for example”.');
    if (!/however|although|some people|counterargument|on the other hand|fair/i.test(debateDraft)) suggestions.push('Show that you understand the strongest opposing point before replying to it.');
    suggestions.push('Read the argument aloud. Shorten any sentence that is difficult to say in one breath.');
    target.innerHTML = `<p><strong>On-device coaching</strong></p><ul>${suggestions.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul><p class="muted-small">Remote AI was unavailable, so this feedback was generated in your browser.</p>`;
  }
}

function bindEvents() {
  $('#career-search').addEventListener('input',renderCareerCards);
  $('#career-filters').addEventListener('click',event=>{const button=event.target.closest('[data-filter]');if(!button)return;activeCareerFilter=button.dataset.filter;$$('[data-filter]').forEach(item=>item.classList.toggle('active',item===button));renderCareerCards();});
  $('#career-grid').addEventListener('click',event=>{const button=event.target.closest('[data-career-open]');if(button)showCareerDetail(button.dataset.careerOpen);});
  $('#career-detail').addEventListener('click',event=>{if(event.target.closest('.career-detail-close'))$('#career-detail').hidden=true;const plan=event.target.closest('[data-plan-career]');if(plan){$('#plan-career').value=plan.dataset.planCareer;$('#my-plan').scrollIntoView({behavior:'smooth'});}});
  $('#quiz-options').addEventListener('click',event=>{const button=event.target.closest('[data-quiz-option]');if(!button)return;quizAnswers[quizIndex]=QUIZ_QUESTIONS[quizIndex].opts[Number(button.dataset.quizOption)][1];renderQuizQuestion();});
  $('#quiz-next').addEventListener('click',()=>{if(!quizAnswers[quizIndex])return;if(quizIndex<QUIZ_QUESTIONS.length-1){quizIndex++;renderQuizQuestion();}else showQuizResults();});
  $('#quiz-results').addEventListener('click',event=>{if(event.target.closest('#quiz-restart')){quizIndex=0;quizAnswers=[];$('#quiz-next').hidden=false;renderQuizQuestion();}});
  $('#plan-form').addEventListener('submit',buildPlan);
  $('#plan-output').addEventListener('click',async event=>{if(event.target.closest('#copy-plan')){const output=$('#plan-output').innerText;try{await navigator.clipboard.writeText(output);showToast('Plan copied.');}catch{showToast('Select and copy the plan text.');}}});
  $('#speech-record').addEventListener('click',startSpeechRecording);$('#speech-stop').addEventListener('click',stopSpeechRecording);$('#analyze-speech').addEventListener('click',analyzeSpeech);
  $('#new-speech-prompt').addEventListener('click',()=>{const prompts=[['THE ONE-MINUTE EXPLAINER','Explain a topic you learned recently as if your listener has never heard of it.','Start with the big idea, explain one example, and end with why it matters.'],['THE STORY BEHIND IT','Tell us about a decision, invention or moment that changed how you think.','Set the scene, describe the turning point and share what you learned.'],['THE KIND DISAGREEMENT','Explain an opinion you hold while showing that you understand another view.','State your position, give evidence and acknowledge what the other side gets right.']];const prompt=prompts[Math.floor(Math.random()*prompts.length)];$('.prompt-kicker').textContent=prompt[0];$('.lab-prompt-card h3').textContent=prompt[1];$('.lab-prompt-card>p:not(.prompt-kicker)').textContent=prompt[2];$('.tiny-index').textContent=`0${Math.floor(Math.random()*3)+1} / 03`;});
  $('#start-interview').addEventListener('click',startInterview);$('#interview-form').addEventListener('submit',submitInterviewAnswer);
  $$('.scenario-card').forEach(button=>button.addEventListener('click',()=>applyRoleplay(button.dataset.roleplay)));$('#roleplay-feedback').addEventListener('click',reviewRoleplay);
  $('#anchor-script').addEventListener('change',()=>{stopTeleprompter();setTeleprompterText();});$('#anchor-custom-script').addEventListener('input',()=>{if($('#anchor-script').value==='custom')$('#teleprompter-text').textContent=$('#anchor-custom-script').value;});$('#anchor-play').addEventListener('click',toggleTeleprompter);$('#anchor-reset').addEventListener('click',()=>{stopTeleprompter();teleprompterOffset=0;$('#teleprompter-text').style.transform=$('#anchor-mirror').checked?'scaleX(-1)':'translateY(0)';});$('#anchor-mirror').addEventListener('change',()=>{$('#teleprompter-text').classList.toggle('mirrored',$('#anchor-mirror').checked);});$('#anchor-record').addEventListener('click',toggleAnchorRecording);
  $('#compare-reference').addEventListener('change',()=>{$('#reference-custom').hidden=$('#compare-reference').value!=='custom';});$('#compare-audio').addEventListener('change',event=>{selectedAudioFile=event.target.files?.[0]||null;$('#compare-audio-name').textContent=selectedAudioFile?`${selectedAudioFile.name} · ${(selectedAudioFile.size/1024/1024).toFixed(1)} MB`:'Audio is processed only when you choose to analyze.';if(selectedAudioFile&&selectedAudioFile.size>10*1024*1024){selectedAudioFile=null;event.target.value='';$('#compare-audio-name').textContent='Choose a file smaller than 10 MB.';showToast('Please choose an audio file smaller than 10 MB.');}});$('#compare-analyze').addEventListener('click',analyzeComparison);
  $('#next-word').addEventListener('click',()=>setWord(activeWordIndex+1));$('#save-word').addEventListener('click',()=>{let words=[];try{words=JSON.parse(localStorage.getItem(STORAGE.savedWords)||'[]');}catch{}const word=WORDS[activeWordIndex].word;if(!words.includes(word))words.push(word);localStorage.setItem(STORAGE.savedWords,JSON.stringify(words));loadSavedWords();showToast(`${word} saved to your practice list.`);});
  $('#email-options').addEventListener('click',event=>{const button=event.target.closest('[data-email]');if(!button)return;const correct=Number(button.dataset.email)===Number($('#email-options').dataset.correct||1);if(button.dataset.answered==='true')return;$$('.email-option').forEach(item=>{item.disabled=true;if(Number(item.dataset.email)===Number($('#email-options').dataset.correct||1))item.classList.add('correct');});if(!correct)button.classList.add('incorrect');button.dataset.answered='true';emailScore+=correct?1:0;$('#email-score').textContent=`${emailScore} / ${emailRound+1}`;$('#email-feedback').textContent=correct?($('#email-options').dataset.explanation||'Strong choice. It is clear, respectful and gives the reader a next step.'):'Look for a message that is specific, respectful and easy to act on.';});$('#email-next').addEventListener('click',nextEmailRound);
  $('#sound-buttons').addEventListener('click',event=>{const button=event.target.closest('[data-sound]');if(button)setPronunciationSound(button.dataset.sound);});$('#hear-sound').addEventListener('click',()=>{const sound=PRONUNCIATION_SOUNDS[activePronunciationSound];if(!window.SpeechSynthesisUtterance||!window.speechSynthesis){showToast('Model audio is not supported in this browser.');return;}window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(`${sound.examples.join(', ')}. ${sound.practice}`);utterance.lang='en-GB';utterance.rate=.82;window.speechSynthesis.speak(utterance);});$('#copy-sound-to-lab').addEventListener('click',()=>{$('#speech-transcript').value=PRONUNCIATION_SOUNDS[activePronunciationSound].practice;$('#speech-lab').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});$('#speech-transcript').focus({preventScroll:true});});$('#debate-form').addEventListener('submit',buildDebate);$('#copy-debate').addEventListener('click',async()=>{if(!debateDraft)return;try{await navigator.clipboard.writeText(debateDraft);showToast('Argument copied.');}catch{showToast('Clipboard access is unavailable; select the argument text to copy it.');}});$('#review-debate').addEventListener('click',reviewDebate);
  $('#leaderboard-form').addEventListener('submit',submitLeaderboard);$$('[data-board]').forEach(button=>button.addEventListener('click',()=>{selectedBoard=button.dataset.board;$$('[data-board]').forEach(item=>item.classList.toggle('active',item===button));refreshLeaderboard();}));
  $('#copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#share-url').textContent);showToast('Website link copied.');}catch{showToast('Copy the link shown beside the QR code.');}});$('#download-qr').addEventListener('click',downloadQRArtwork);
  $('#brand-mark').addEventListener('click',event=>{if(event.detail>=5){event.preventDefault();revealAdmin();}});$('#hero h1').addEventListener('click',()=>{window._heroAdminClicks=(window._heroAdminClicks||0)+1;if(window._heroAdminClicks>=5){window._heroAdminClicks=0;revealAdmin();}});
  $('#admin-exit').addEventListener('click',closeAdmin);$('#admin-login-form').addEventListener('submit',adminLogin);$('#privacy-modal').addEventListener('click',event=>{if(event.target===event.currentTarget||event.target.closest('[data-close-modal]')){$('#privacy-modal').hidden=true;document.body.classList.remove('modal-open');}});$$('[href="#privacy"]').forEach(a=>a.addEventListener('click',event=>{event.preventDefault();$('#privacy-modal').hidden=false;document.body.classList.add('modal-open');}));
  $('#admin-workspace').addEventListener('click',async event=>{
    const tab=event.target.closest('[data-admin-tab]');if(tab){renderAdminTab(tab.dataset.adminTab);return;}
    const up=event.target.closest('[data-provider-up]');const down=event.target.closest('[data-provider-down]');
    if(up||down){const key=(up||down).dataset.providerUp||(up||down).dataset.providerDown;const arr=[...(settings.providerOrder||DEFAULT_SETTINGS.providerOrder)];const index=arr.indexOf(key);const next=index+(up?-1:1);if(next>=0&&next<arr.length){[arr[index],arr[next]]=[arr[next],arr[index]];settings.providerOrder=arr;renderAdminTab('ai');}return;}
    if(event.target.closest('#save-feature-settings')){const features={...settings.features};$$('[data-feature-toggle]').forEach(input=>features[input.dataset.featureToggle]=input.checked);await saveAdminSettings({features});return;}
    if(event.target.closest('#enable-all-features')){await saveAdminSettings({features:Object.fromEntries(Object.keys(FEATURE_LABELS).map(key=>[key,true]))});return;}
    if(event.target.closest('#disable-all-features')){await saveAdminSettings({features:Object.fromEntries(Object.keys(FEATURE_LABELS).map(key=>[key,['hero','careers'].includes(key)?true:false]))});return;}
    if(event.target.closest('#save-router-settings')){const providerEnabled={...settings.providerEnabled};$$('[data-provider-enabled]').forEach(input=>providerEnabled[input.dataset.providerEnabled]=input.checked);await saveAdminSettings({automaticFallback:$('#automatic-fallback').checked,preferredProvider:$('#preferred-provider').value,qualityMode:$('#quality-mode').value,providerOrder:settings.providerOrder,providerEnabled});return;}
    if(event.target.closest('#save-provider-keys')){await saveProviderKeys();return;}
    if(event.target.closest('#clear-provider-fields')){$('#gemini-keys').value='';$('#free-key').value='';$('#laptop-token').value='';$('#free-url').value='';$('#free-model').value='';$('#laptop-url').value='';$('#laptop-model').value='llama3.2:3b';return;}
    if(event.target.closest('#save-brand-settings')){await saveAdminSettings({theme:$('#brand-theme').value,language:$('#brand-language').value,showSchoolName:$('#show-school-name').checked,schoolName:$('#school-name').value.trim()||DEFAULT_SETTINGS.schoolName});return;}
    if(event.target.closest('#reset-brand-settings')){await saveAdminSettings({theme:DEFAULT_SETTINGS.theme,language:'en',showSchoolName:true,schoolName:DEFAULT_SETTINGS.schoolName});return;}
    if(event.target.closest('#refresh-request-logs')){renderAdminTab('requests');return;}
    if(event.target.closest('#clear-demo-logs')){localStorage.removeItem(STORAGE.demoLogs);renderAdminTab('requests');return;}
    if(event.target.closest('#refresh-admin-board')){renderAdminTab('leaderboard');return;}
    if(event.target.closest('#clear-admin-board')){if(!confirm('Remove every opt-in leaderboard entry?'))return;if(adminDemoMode){localStorage.removeItem(STORAGE.demoLeaderboard);renderAdminTab('leaderboard');}else{const res=await fetch('/api/admin/leaderboard',{method:'DELETE'});if(res.ok)renderAdminTab('leaderboard');else showToast('Could not clear the shared board.');}return;}
    const deleteEntry=event.target.closest('[data-delete-entry]');if(deleteEntry){if(!confirm('Remove this leaderboard entry?'))return;if(adminDemoMode){const entries=getBoardData().filter(entry=>String(entry.id||entry.createdAt||entry.nickname)!==deleteEntry.dataset.deleteEntry);localStorage.setItem(STORAGE.demoLeaderboard,JSON.stringify(entries));renderAdminTab('leaderboard');}else{const response=await fetch(`/api/admin/leaderboard?id=${encodeURIComponent(deleteEntry.dataset.deleteEntry)}`,{method:'DELETE'});if(response.ok)renderAdminTab('leaderboard');else showToast('Could not remove this entry.');}return;}
  });
}
function updateScrollProgress() { const scrollable=document.documentElement.scrollHeight-window.innerHeight;const progress=scrollable>0?window.scrollY/scrollable*100:0;$('#reading-progress').style.width=`${progress}%`; }
function setupScrollReveal() {
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  document.body.classList.add('reveal-ready');
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.08});
  $$('.section-shell').forEach(section=>observer.observe(section));
}
async function loadPublicSettings() {
  try {const response=await fetch('/api/admin/public');if(!response.ok)return;const data=await response.json();if(data.settings){settings={...settings,...data.settings,features:{...settings.features,...data.settings.features},providerEnabled:{...settings.providerEnabled,...data.settings.providerEnabled}};applySettings(settings,false);}}
  catch {}
}
function init() {
  $('#current-year').textContent=String(new Date().getFullYear());
  applySettings(settings,false);populateCareerSelects();renderCareerCards();renderQuizQuestion();setTeleprompterText();setWord(Math.floor((Date.now()/86400000)%WORDS.length));loadSavedWords();setPronunciationSound('th');bindEvents();initQR();refreshLeaderboard();setupScrollReveal();window.addEventListener('scroll',updateScrollProgress,{passive:true});updateScrollProgress();
  if(location.hash==='#admin')revealAdmin();
  loadPublicSettings();
}
init();
