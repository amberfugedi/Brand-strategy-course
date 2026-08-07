import { Slide } from "./types";

/**
 * Module 2: The foundation audit. 37 slides, copy verbatim from the
 * produced deck. The deck's three "open the tool" moments become
 * in-app interactions: the diagnostic (slide 10), the audit (slide
 * 22), and the compiled plan (slide 34), with the priority order,
 * Gap List, and starting point rendered live on their reading slides.
 */

const S1 = "MODULE 2 · SECTION 1";
const S2 = "MODULE 2 · SECTION 2";
const S3 = "MODULE 2 · SECTION 3";
const S4 = "MODULE 2 · SECTION 4";
const S5 = "MODULE 2 · SECTION 5";
const S6 = "MODULE 2 · SECTION 6";
const S7 = "MODULE 2 · SECTION 7";
const CLOSING = "MODULE 2 · CLOSING";

export const module2Slides: Slide[] = [
  // 01 · Module title
  {
    kind: "hero",
    id: "m2-title",
    crumb: "",
    tag: "",
    number: "01",
    audio: { src: "/audio/m2/m2-1.mp3" },
    surface: "plum",
    strata: "all",
    heading: "The foundation *audit*.",
    sub: "A diagnostic, then a tailored audit. Twenty-eight minutes. One starting point with reasoning.",
    meta: [
      { label: "Length", value: "28 minutes" },
      { label: "Output", value: "Priority order, Gap List, starting point" },
      { label: "Module", value: "2 of 8" },
    ],
  },

  // 02 · Why an audit before any tactic
  {
    kind: "framework",
    id: "m2-why-audit",
    crumb: S1,
    tag: "SETUP",
    number: "02",
    audio: {
      src: "/audio/m2/m2-2.mp3", cues: [19.9, 34.4],
      callouts: [
        { text: "What kind of business are you running?", at: 38.0, until: 44.4 },
        { text: "A therapist's strong marketing does not look like a pressure washer's.", at: 44.6, until: 51.5 },
        { text: "Module 2 figures that out first.", at: 52.8, until: 58.5 },
      ],
    },
    eyebrow: "Why an audit before any tactic",
    heading: "Most marketing advice tells you *what to do*.",
    paragraphs: [
      "It does not tell you whether it applies to *your* business.",
      "This module tailors the question to your business *first*.",
    ],
    // The tactics the voice reels off, lighting as each is named and
    // quieting when the first paragraph lands at 19.9s.
    art: {
      kind: "adviceCloud",
      words: [
        { text: "Email list", at: 11.5 },
        { text: "Instagram", at: 13.8 },
        { text: "Reviews", at: 15.0 },
        { text: "Podcast", at: 16.4 },
        { text: "Ads", at: 17.2 },
        { text: "LinkedIn posts", at: 8.7 },
        { text: "YouTube videos", at: 7.4 },
        { text: "Courses", at: 6.5 },
      ],
      settle: 19.9,
      image: "/images/advice-head.webp",
    },
  },

  // 03 · The shape of the work
  {
    kind: "rows",
    id: "m2-shape",
    crumb: S1,
    tag: "STRUCTURE",
    number: "03",
    audio: { src: "/audio/m2/m2-3.mp3", cues: [2.6, 22.3, 37.2, 44.3] },
    eyebrow: "What you'll do in this module",
    heading: "The *shape* of the work.",
    rows: [
      { label: "01", text: "Six diagnostic questions about your business" },
      { label: "02", text: "A tailored audit weighted by what those answers reveal" },
      { label: "03", text: "A Gap List sorted by what matters most" },
      { label: "04", text: "One foundation to build first, with reasoning" },
    ],
  },

  // 04 · Section 2 opener
  {
    kind: "question",
    id: "m2-six-questions-open",
    crumb: S2,
    tag: "DIAGNOSTIC",
    number: "04",
    audio: {
      src: "/audio/m2/m2-4.mp3",
      cues: [2.5, 4.2],
      callouts: [
        { text: "Not preference questions.", at: 4.6, until: 10.5 },
        { text: "What is true today.", at: 11.4, until: 17.0 },
        { text: "With them, the audit knows what kind of business it is looking at.", at: 26.4, until: 31.8 },
      ],
    },
    lines: ["Six questions about your *business*."],
    post: "What's structurally true.",
  },

  // 05 · Not what you want to do
  {
    kind: "framework",
    id: "m2-requires",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "05",
    audio: {
      src: "/audio/m2/m2-5.mp3",
      marks: [
        { text: "Not because they want different things. Because their businesses work differently.", at: 27.5, until: 35.0 },
      ], cues: [20.3, 21.2],
      callouts: [
        { text: "Here is what is true about your business, and here is what that implies.", at: 40.2, until: 46.9 },
      ],
    },
    eyebrow: "What this is not",
    heading: "Not what kind of marketing you *want* to do.",
    paragraphs: [
      "But what kind of marketing your business *requires*.",
      "A therapist serving older clients in a regulated profession requires different marketing than a wedding photographer serving twenty-somethings. Not because they want different things. Because their businesses *work* differently.",
    ],
  },

  // 06 · The six questions
  {
    kind: "rows",
    id: "m2-six-questions",
    crumb: S2,
    tag: "DIAGNOSTIC",
    number: "06",
    audio: {
      src: "/audio/m2/m2-6.mp3", cues: [1.9, 5.8, 8.6, 11.6, 14.3, 17.3],
      callouts: [
        { text: "These take about three to four minutes to answer.", at: 30.2, until: 36.8 },
        { text: "The recommendations are only as accurate as your answers.", at: 37.7, until: 44.2 },
      ],
    },
    heading: "The six *questions*.",
    rows: [
      { label: "Q01", text: "Where do clients find you?" },
      { label: "Q02", text: "Does your work depend on visual proof?" },
      { label: "Q03", text: "Are you in an ethics-restricted profession?" },
      { label: "Q04", text: "How old is your audience?" },
      { label: "Q05", text: "Local-only, hybrid, or remote?" },
      { label: "Q06", text: "How long does a prospect engage with your work before reaching out?" },
    ],
  },

  // 07 · Questions 01 to 03
  {
    kind: "framework",
    id: "m2-q1to3",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "07",
    audio: {
      src: "/audio/m2/m2-7.mp3",
      marks: [
        { text: "Some businesses sell visible work. Others sell expertise and judgment.", at: 15.6, until: 31.5 },
      ], cues: [2.4, 12.9, 38.0],
    },
    eyebrow: "Questions 01 to 03",
    heading: "What's true about your *business*.",
    paragraphs: [
      "*Q01 · Discovery channel*. Where current clients first hear about you. Anchors the diagnostic in what's already working.",
      "*Q02 · Visual proof*. Some businesses sell visible work. Others sell expertise and judgment. The diagnostic uses this to weight visual presence vs. credibility signals.",
      "*Q03 · Ethics restrictions*. Therapists, attorneys, healthcare, financial advisors face professional rules that change the audit's weighting.",
    ],
  },

  // 08 · Questions 04 to 06
  {
    kind: "framework",
    id: "m2-q4to6",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "08",
    audio: {
      src: "/audio/m2/m2-8.mp3",
      marks: [
        { text: "Long engagement signals that sustained credibility matters more than quick-trust signals.", at: 59.1, until: 66.0 },
      ], cues: [4.2, 22.1, 39.0],
      callouts: [
        { text: "Engagement is anything before contact.", at: 44.7, until: 51.0 },
        { text: "Some prospects contact you immediately. Some follow your work for months.", at: 51.4, until: 58.9 },
      ],
    },
    eyebrow: "Questions 04 to 06",
    heading: "What's true about your *audience* and how they decide.",
    paragraphs: [
      "*Q04 · Audience age*. A 55+ audience lives less on social, more in email and search. A 25-year-old audience lives in opposite places.",
      "*Q05 · Geographic scope*. Local-only, hybrid, or fully remote shifts which foundations apply at all.",
      "*Q06 · Pre-contact engagement*. Days, weeks, or months. Long engagement signals that sustained credibility matters more than quick-trust signals.",
    ],
  },

  // 09 · On honesty
  {
    kind: "principle",
    id: "m2-honesty",
    crumb: S2,
    tag: "THE TAKEAWAY",
    number: "09",
    audio: {
      src: "/audio/m2/m2-9.mp3",
      marks: [
        { text: "Answer based on what is, not what you wish was true.", at: 1.6, until: 9.0 },
        { text: "If you genuinely don't know, pick the option that says so.", at: 20.9, until: 27.5 },
        { text: "Do not guess.", at: 33.5, until: 38.5 },
      ],
    },
    headline: "Answer based on what is, not what you wish was *true*.",
    sub: "If you genuinely don't know, pick the option that says so. *Do not guess.* A wrong answer produces wrong recommendations.",
  },

  // 10 · The diagnostic, in place
  {
    kind: "diagnostic",
    id: "m2-diagnostic",
    crumb: S2,
    tag: "TOOL",
    number: "10",
    audio: { src: "/audio/m2/m2-10.mp3" },
    eyebrow: "Now: the diagnostic",
    heading: "Answer the *diagnostic*.",
    intro:
      "Three to four minutes of work. Answer all six questions thoughtfully. Your answers save as you go.",
  },

  // 11 · Section 3 opener
  {
    kind: "question",
    id: "m2-read-order",
    crumb: S3,
    tag: "READING",
    number: "11",
    audio: {
      src: "/audio/m2/m2-11.mp3",
      cues: [1.8, 11.5],
      callouts: [
        { text: "Take a few minutes to actually read what the diagnostic produced.", at: 12.7, until: 19.5 },
        { text: "If you skim past it, the audit will not make sense.", at: 19.7, until: 25.2 },
      ],
    },
    lines: ["Read your priority *order*."],
    post: "Before the audit.",
    live: "priorities",
  },

  // 12 · Four tiers + the buyer's order
  {
    kind: "priorities",
    id: "m2-priorities",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "12",
    audio: { src: "/audio/m2/m2-12.mp3", cues: [3.7, 18.4, 29.0, 40.1] },
    eyebrow: "What the tiers mean",
    heading: "Four tiers. Four operational *meanings*.",
    tiers: [
      { label: "High", text: "Build here first. Strategic work pays off." },
      { label: "Medium", text: "Keep functional, do not over-invest. Acceptable is enough." },
      { label: "Low", text: "Acceptable is the goal. Spending energy here is energy not spent on high-priority work." },
      { label: "Not applicable", text: "Skip entirely. The diagnostic determined it does not apply to your business." },
    ],
  },

  // 13 · On context
  {
    kind: "principle",
    id: "m2-context",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "13",
    audio: {
      src: "/audio/m2/m2-13.mp3",
      marks: [
        { text: "The same gap means different things in different contexts.", at: 28.2, until: 34.2 },
      ],
      callouts: [
        { text: "Specific to your business in a way most marketing advice is not.", at: 2.3, until: 9.2 },
        { text: "Identifying which gaps matter most.", at: 35.4, until: 42.5 },
      ],
    },
    headline: "Two businesses can have the same critical gap and *different* starting points.",
    sub: "A wedding photographer's website is high priority because that's where prospects evaluate her work. A pressure washer's website is medium priority because most clients found him through search results, not by visiting the site. *The same gap means different things in different contexts.*",
  },

  // 14 · The reasoning line
  {
    kind: "framework",
    id: "m2-reasoning",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "14",
    audio: {
      src: "/audio/m2/m2-14.mp3", cues: [5.2, 29.6, 35.1],
      callouts: [
        { text: "Read those. They matter.", at: 8.2, until: 13.9 },
        { text: "The reasoning is not generic. It pulls from the specific answers you gave.", at: 14.1, until: 21.0 },
      ],
    },
    eyebrow: "Read the reasoning",
    heading: "Each foundation includes a short *reasoning* line.",
    paragraphs: [
      "It explains *why* that foundation landed where it did. It pulls from the specific answers you gave.",
      "Reading the reasoning is how you understand whether the diagnostic *got you right*.",
      "If a reasoning line lands wrong (you read it and think “that's not how my business works”), that's a signal worth tracing.",
    ],
  },

  // 15 · Check your six answers first
  {
    kind: "framework",
    id: "m2-check-answers",
    crumb: S3,
    tag: "CALIBRATION",
    number: "15",
    audio: {
      src: "/audio/m2/m2-15.mp3",
      marks: [
        { text: "Most off-feeling priorities trace to one inaccurate answer.", at: 8.0, until: 15.2 },
        { text: "Adjust the answer if needed. The priority order will update.", at: 27.3, until: 34.0 },
      ], cues: [3.6, 26.8],
      callouts: [
        { text: "Calibrated for service businesses with one to ten employees.", at: 38.3, until: 45.5 },
      ],
    },
    eyebrow: "If a priority feels off",
    heading: "Check your six answers *first*.",
    paragraphs: [
      "Most off-feeling priorities trace to one inaccurate answer. You answered question one with referrals because that felt right. If you actually thought about it, most clients have come through Google.",
      "Adjust the answer if needed. The priority order will update. Re-read it.",
    ],
  },

  // 16 · Carry this forward
  {
    kind: "principle",
    id: "m2-carry-forward",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "16",
    audio: { src: "/audio/m2/m2-16.mp3" },
    headline: "Carry this *forward*.",
    sub: "The priority order is not just a recommendation. The audit literally uses it to decide what to ask about and at what depth. *Your high-priority foundations are where the audit will spend the most time.*",
  },

  // 17 · Section 4 opener
  {
    kind: "question",
    id: "m2-audit-open",
    crumb: S4,
    tag: "AUDIT",
    number: "17",
    audio: { src: "/audio/m2/m2-17.mp3", cues: [0.8, 4.5] },
    lines: ["Run your *audit*."],
    post: "The central work of the module.",
  },

  // 18 · Not rate yourself. Recognize yourself.
  {
    kind: "framework",
    id: "m2-recognize",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "18",
    audio: {
      src: "/audio/m2/m2-18.mp3",
      marks: [
        { text: "Not rate yourself. Recognize yourself.", at: 36.3, until: 42.0 },
        { text: "People are generous on abstract ratings.", at: 48.7, until: 54.0 },
      ], cues: [7.8, 17.2, 51.0],
      callouts: [
        { text: "You will see three to five descriptive scenarios.", at: 20.7, until: 27.5 },
        { text: "That looks like my business. That is the question.", at: 42.2, until: 48.5 },
      ],
    },
    eyebrow: "How the audit works",
    heading: "Not rate yourself. *Recognize* yourself.",
    paragraphs: [
      "Most audits ask you to rate yourself on a scale. *How would you rate your website on a scale of one to ten.* Almost impossible to answer accurately.",
      "This audit shows you scenarios. Each one describes a specific state. You read them and pick the one that matches your reality.",
      "People are generous on abstract ratings. They're not as generous when picking between concrete scenarios. *Scenarios force more honest answers.*",
    ],
  },

  // 19 · The audit varies by priority
  {
    kind: "framework",
    id: "m2-depth",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "19",
    audio: { src: "/audio/m2/m2-19.mp3", cues: [8.5, 21.8, 34.0, 46.1] },
    heading: "The audit varies *by priority*.",
    paragraphs: [
      "*High priority*. Three dimensions: presence, quality, consistency. Does it exist. Does it work well. Are you sustaining it.",
      "*Medium priority*. Two dimensions: presence and quality. No consistency question.",
      "*Low priority*. One acceptability question. Three scenarios, and you move on.",
      "You spend depth where depth matters and skim through what does not.",
    ],
  },

  // 20 · The honesty rule
  {
    kind: "principle",
    id: "m2-true-today",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "20",
    audio: {
      src: "/audio/m2/m2-20.mp3",
      marks: [
        { text: "Generous ratings produce the wrong starting point.", at: 28.9, until: 35.3 },
        { text: "The audit is only as useful as it is honest.", at: 39.6, until: 43.1 },
      ],
      callouts: [
        { text: "The natural impulse is to be a little generous.", at: 9.9, until: 16.6 },
        { text: "“I have a website, but it's on a free subdomain and hasn't been updated in three years.”", at: 60.5, until: 68.5, card: true },
        { text: "That second one is the truth. Pick it.", at: 68.8, until: 74.3 },
      ],
    },
    headline: "Pick the scenario that matches what is *true today*.",
    sub: "Not what you intended. Not what you'll have done by next quarter. *What exists right now, working today.* Generous ratings produce the wrong starting point. The audit is only as useful as it is honest.",
  },

  // 21 · Some questions will be locked
  {
    kind: "framework",
    id: "m2-locked",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "21",
    audio: {
      src: "/audio/m2/m2-21.mp3",
      marks: [
        { text: "the audit locks the next two dimensions.", at: 9.7, until: 16.0 },
      ], cues: [1.0, 8.3, 9.6],
      callouts: [
        { text: "Those questions do not make sense for something that does not exist yet.", at: 16.2, until: 22.6 },
        { text: "Just answer the presence question honestly.", at: 24.3, until: 30.2 },
        { text: "The rest of the questions resolve themselves.", at: 30.4, until: 36.5 },
      ],
    },
    eyebrow: "If a foundation does not yet exist",
    heading: "Some questions will be *locked*.",
    paragraphs: [
      "For your website, your Google Business Profile, your email list: if you pick the scenario that says *this does not exist*, the audit locks the next two dimensions.",
      "You cannot rate the quality of a website you do not have.",
      "The audit handles this gracefully. Mark it absent, and it auto-resolves as a critical gap. Move on.",
    ],
  },

  // 22 · The audit, in place
  {
    kind: "audit",
    id: "m2-audit",
    crumb: S4,
    tag: "TOOL",
    number: "22",
    audio: { src: "/audio/m2/m2-22.mp3" },
    eyebrow: "Now: the audit",
    heading: "Run the *audit*.",
    intro:
      "Ten to fifteen minutes of honest work. Foundations are sorted by priority, your highest first. Pick the state that matches your reality and move to the next.",
  },

  // 23 · Section 5 opener
  {
    kind: "question",
    id: "m2-gaplist-open",
    crumb: S5,
    tag: "READING",
    number: "23",
    audio: {
      src: "/audio/m2/m2-23.mp3",
      cues: [2.0, 3.8],
      callouts: [
        { text: "Critical, maintenance, and solid.", at: 2.6, until: 9.0 },
        { text: "Sorted by the worst rating you gave it.", at: 9.2, until: 15.0 },
        { text: "A clear-eyed picture of where your six foundations actually stand.", at: 15.4, until: 22.5 },
      ],
    },
    lines: ["Read your Gap *List*."],
    post: "Grouped by your worst rating.",
    live: "gaps",
  },

  // 24 · Critical. Maintenance. Solid. + the buyer's list
  {
    kind: "gaplist",
    id: "m2-gaplist",
    crumb: S5,
    tag: "FRAMEWORK",
    number: "24",
    audio: { src: "/audio/m2/m2-24.mp3", cues: [2.5, 16.5, 33.8] },
    eyebrow: "The three tiers",
    heading: "Critical. Maintenance. *Solid*.",
    tiers: [
      { label: "Critical", text: "Broken or absent. Either does not exist, or exists in a state that's actively undermining you. Usually the bottleneck." },
      { label: "Maintenance", text: "Slipping, but not yet critical. Working today, drifting toward critical without active attention." },
      { label: "Solid", text: "Working, not blocking. The foundation is doing its job and is not your problem." },
    ],
  },

  // 25 · Critical doesn't mean panic
  {
    kind: "principle",
    id: "m2-critical",
    crumb: S5,
    tag: "THE TAKEAWAY",
    number: "25",
    audio: {
      src: "/audio/m2/m2-25.mp3",
      marks: [
        { text: "Critical doesn't mean panic. It means prioritize.", at: 6.3, until: 13.2 },
        { text: "You're not failing.", at: 14.6, until: 18.8 },
        { text: "You'll fix them in order.", at: 25.9, until: 32.0 },
      ],
    },
    headline: "Critical doesn't mean panic. It means *prioritize*.",
    sub: "Most service businesses have multiple critical gaps when they first run this audit. That's normal. You're not failing. You're seeing what was always going to surface. *You'll fix them in order.*",
  },

  // 26 · Solid doesn't mean ignore
  {
    kind: "principle",
    id: "m2-solid",
    crumb: S5,
    tag: "THE TAKEAWAY",
    number: "26",
    audio: {
      src: "/audio/m2/m2-26.mp3",
      marks: [
        { text: "Solid doesn't mean ignore.", at: 1.8, until: 7.3 },
        { text: "Solid foundations drift without continued attention.", at: 14.9, until: 20.0 },
      ],
      callouts: [
        { text: "Not your bottleneck right now.", at: 21.7, until: 26.6 },
        { text: "Maintenance, not rebuilding.", at: 29.3, until: 32.8 },
      ],
    },
    headline: "Solid doesn't mean ignore. It means *protect*.",
    sub: "The foundations rated solid got there because of work you did before. That work is not permanent. Solid foundations drift without continued attention. *As you work through critical gaps, keep doing what's already working.*",
  },

  // 27 · You'll use the Gap List throughout
  {
    kind: "framework",
    id: "m2-gaplist-reference",
    crumb: S5,
    tag: "FRAMEWORK",
    number: "27",
    audio: {
      src: "/audio/m2/m2-27.mp3",
      marks: [
        { text: "The Gap List tells you which of those modules apply to you most urgently", at: 16.2, until: 23.5 },
      ], cues: [7.5, 16.0],
      callouts: [
        { text: "Together they tell you what to focus on and what to leave alone.", at: 29.8, until: 36.4 },
        { text: "One foundation to focus on first.", at: 39.3, until: 43.5 },
      ],
    },
    eyebrow: "This is your reference",
    heading: "You'll use the Gap List *throughout* the course.",
    paragraphs: [
      "Modules 3 through 8 go deeper on individual foundations: what each one is, how to think about it strategically.",
      "The Gap List tells you which of those modules apply to you most urgently when you reach the build phase.",
    ],
  },

  // 28 · Your starting point (revealed)
  {
    kind: "startingPoint",
    id: "m2-starting-point",
    crumb: S6,
    tag: "OUTPUT",
    number: "28",
    audio: { src: "/audio/m2/m2-28.mp3" },
    lines: ["Your starting *point*."],
    post: "The actionable output of Module 2.",
  },

  // 29 · On sequence
  {
    kind: "principle",
    id: "m2-sequence",
    crumb: S6,
    tag: "THE TAKEAWAY",
    number: "29",
    audio: {
      src: "/audio/m2/m2-29.mp3",
      marks: [
        { text: "You can't build five foundations in parallel.", at: 9.3, until: 15.2 },
        { text: "Five half-built foundations is worse than one fully built one.", at: 21.4, until: 26.4 },
        { text: "Sequence is the strategy.", at: 26.6, until: 32.2 },
      ],
      callouts: [
        { text: "Spreading thin produces nothing.", at: 34.5, until: 39.3 },
      ],
    },
    headline: "You can't build five foundations in *parallel*.",
    sub: "Your capacity is five to ten hours a week. That doesn't multiply when spread across five workstreams. It divides. *Five half-built foundations is worse than one fully built one.* Sequence is the strategy.",
  },

  // 30 · Not a license to abandon
  {
    kind: "framework",
    id: "m2-not-abandon",
    crumb: S6,
    tag: "CALIBRATION",
    number: "30",
    audio: {
      src: "/audio/m2/m2-30.mp3",
      marks: [
        { text: "Solid foundations stay solid.", at: 26.6, until: 33.4 },
      ], cues: [4.8, 14.3, 25.8],
      callouts: [
        { text: "Not splitting attention across three projects.", at: 36.6, until: 42.8 },
        { text: "One foundation, focused work, until it is actually solid.", at: 43.0, until: 49.5 },
      ],
    },
    eyebrow: "What this does not mean",
    heading: "A starting point isn't a *license* to abandon.",
    paragraphs: [
      "It does not mean other gaps are unimportant. They are. They're just not the place to start.",
      "It does not mean you stop serving existing clients. Your client work continues.",
      "It does not mean abandoning what's already working. Solid foundations stay solid. *You're directing build energy at the place that needs it.*",
    ],
  },

  // 31 · Thirty to ninety days
  {
    kind: "framework",
    id: "m2-timeline",
    crumb: S6,
    tag: "FRAMEWORK",
    number: "31",
    audio: { src: "/audio/m2/m2-31.mp3", cues: [4.7, 13.4, 27.1] },
    eyebrow: "How long is “first”",
    heading: "Thirty to ninety *days*.",
    paragraphs: [
      "Most foundations take 30 to 90 days of focused work to move from critical to solid. Not constant work, focused work in your five to ten weekly marketing hours.",
      "A website rebuild: six to eight weeks. A claimed and built-out Google Business Profile: two to four weeks. An email list with a real opt-in and first sequence: six to twelve weeks.",
      "Not a sprint. The first chunk of meaningful work.",
    ],
  },

  // 32 · Modules 3 through 8
  {
    kind: "framework",
    id: "m2-next-modules",
    crumb: S6,
    tag: "FRAMEWORK",
    number: "32",
    audio: { src: "/audio/m2/m2-32.mp3", cues: [6.4, 17.9, 22.7] },
    eyebrow: "What comes next",
    heading: "Modules 3 through 8 teach the *foundations*.",
    paragraphs: [
      "Each module goes deep on a specific foundation: what it is, what good looks like, how to think strategically about it.",
      "If your starting point is getting found, the work starts immediately in Module 3. If it's authority building, you'll meet it in Module 8.",
      "The modules run in order, each building on the last. The Gap List tells you where the building starts once you've seen all seven foundations.",
    ],
  },

  // 33 · Not a license to skip
  {
    kind: "principle",
    id: "m2-not-skip",
    crumb: S6,
    tag: "THE TAKEAWAY",
    number: "33",
    audio: {
      src: "/audio/m2/m2-33.mp3",
      marks: [
        { text: "Not a license to skip foundations.", at: 11.4, until: 16.2 },
        { text: "Take all six foundation modules.", at: 57.4, until: 62.6 },
      ],
      callouts: [
        { text: "Your five to ten weekly marketing hours.", at: 18.8, until: 24.5 },
        { text: "What is low priority today may be next year's focus.", at: 38.4, until: 44.4 },
        { text: "Modules 3 through 8 teach the six foundations as concepts.", at: 44.7, until: 50.8 },
        { text: "Your starting point for the build phase, not your shortcut past the learning phase.", at: 63.3, until: 70.8 },
      ],
    },
    eyebrow: "What this audit is for",
    headline: "A starting point for your *build*. Not a license to skip foundations.",
    sub: "Priority order tells you where to build first. It does not tell you what's worth understanding. *Every foundation in this course is a concept you need to think about. Even the ones you won't build yet.* Take all six foundation modules. Then come back to your priority order.",
  },

  // 34 · The plan, compiled
  {
    kind: "plan",
    id: "m2-plan",
    crumb: S6,
    tag: "TOOL",
    number: "34",
    audio: { src: "/audio/m2/m2-34.mp3" },
    eyebrow: "Your work, compiled",
    heading: "The *plan*.",
    paragraphs: [
      "Everything Module 2 produced, in one place: positioning, priority order, Gap List, starting point.",
      "This is your reference document. The plan is what Module 2 actually *produced*. It saves automatically.",
    ],
  },

  // 35 · A different position
  {
    kind: "framework",
    id: "m2-different-position",
    crumb: S7,
    tag: "SYNTHESIS",
    number: "35",
    audio: { src: "/audio/m2/m2-35.mp3", cues: [0.2, 6.4, 19.7] },
    eyebrow: "What you have now",
    heading: "A different *position*.",
    paragraphs: [
      "You started Module 2 with a positioning statement and an open question: *what do I focus on first.*",
      "You're ending it with an answer: a priority order tailored to your business, a clear-eyed picture of where you stand, and a starting point with reasoning.",
      "Worth pausing to acknowledge.",
    ],
  },

  // 36 · You take all six
  {
    kind: "principle",
    id: "m2-all-five",
    crumb: S7,
    tag: "THE TAKEAWAY",
    number: "36",
    audio: {
      src: "/audio/m2/m2-36.mp3",
      marks: [
        { text: "Modules 3 through 8 are concept modules, not tactics modules.", at: 6.8, until: 13.5 },
        { text: "It tells you what to build first when you're done learning.", at: 14.0, until: 18.9 },
      ],
      callouts: [
        { text: "Save your Plan, and take a break.", at: 19.2, until: 25.2 },
        { text: "Module 3 starts the foundation teaching with getting found.", at: 29.7, until: 34.4 },
      ],
    },
    headline: "You take *all six*. The teaching is the point.",
    sub: "Modules 3 through 8 are concept modules, not tactics modules. *Your audit doesn't tell you what to learn. It tells you what to build first when you're done learning.*",
  },

];
