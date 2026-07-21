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
    audio: { src: null },
    surface: "plum",
    eyebrow: "Module 2",
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
    audio: { src: null },
    eyebrow: "Why an audit before any tactic",
    heading: "Most marketing advice tells you *what to do*.",
    paragraphs: [
      "It does not tell you whether it applies to *your* business.",
      "This module tailors the question to your business *first*.",
    ],
  },

  // 03 · The shape of the work
  {
    kind: "rows",
    id: "m2-shape",
    crumb: S1,
    tag: "STRUCTURE",
    number: "03",
    audio: { src: null },
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
    audio: { src: null },
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
    audio: { src: null },
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
    audio: { src: null },
    eyebrow: "All at once",
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
    audio: { src: null },
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
    audio: { src: null },
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
    audio: { src: null },
    eyebrow: "On honesty",
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
    audio: { src: null },
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
    audio: { src: null },
    lines: ["Read your priority *order*."],
    post: "Before the audit.",
  },

  // 12 · Four tiers + the buyer's order
  {
    kind: "priorities",
    id: "m2-priorities",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "12",
    audio: { src: null },
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
    audio: { src: null },
    eyebrow: "On context",
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
    audio: { src: null },
    eyebrow: "Read the reasoning",
    heading: "Each foundation includes a short *reasoning* line.",
    paragraphs: [
      "It explains *why* that foundation landed where it did. It pulls from the specific answers you gave.",
      "Reading the reasoning is how you understand whether the diagnostic *got you right*.",
      "If a reasoning line lands wrong (you read it and think \"that's not how my business works\"), that's a signal worth tracing.",
    ],
  },

  // 15 · Check your six answers first
  {
    kind: "framework",
    id: "m2-check-answers",
    crumb: S3,
    tag: "CALIBRATION",
    number: "15",
    audio: { src: null },
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
    audio: { src: null },
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
    audio: { src: null },
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
    audio: { src: null },
    eyebrow: "How the audit works",
    heading: "Not *rate* yourself. *Recognize* yourself.",
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
    audio: { src: null },
    eyebrow: "Different foundations get different depths",
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
    audio: { src: null },
    eyebrow: "The honesty rule",
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
    audio: { src: null },
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
    audio: { src: null },
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
    audio: { src: null },
    lines: ["Read your Gap *List*."],
    post: "Three tiers, sorted by priority.",
  },

  // 24 · Critical. Maintenance. Solid. + the buyer's list
  {
    kind: "gaplist",
    id: "m2-gaplist",
    crumb: S5,
    tag: "FRAMEWORK",
    number: "24",
    audio: { src: null },
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
    audio: { src: null },
    eyebrow: "On reading critical gaps",
    headline: "Critical doesn't mean *panic*. It means *prioritize*.",
    sub: "Most service businesses have multiple critical gaps when they first run this audit. That's normal. You're not failing. You're seeing what was always going to surface. *You'll fix them in order.*",
  },

  // 26 · Solid doesn't mean ignore
  {
    kind: "principle",
    id: "m2-solid",
    crumb: S5,
    tag: "THE TAKEAWAY",
    number: "26",
    audio: { src: null },
    eyebrow: "On reading solid foundations",
    headline: "Solid doesn't mean *ignore*. It means *protect*.",
    sub: "The foundations rated solid got there because of work you did before. That work is not permanent. Solid foundations drift without continued attention. *As you work through critical gaps, keep doing what's already working.*",
  },

  // 27 · You'll use the Gap List throughout
  {
    kind: "framework",
    id: "m2-gaplist-reference",
    crumb: S5,
    tag: "FRAMEWORK",
    number: "27",
    audio: { src: null },
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
    audio: { src: null },
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
    audio: { src: null },
    eyebrow: "On sequence",
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
    audio: { src: null },
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
    audio: { src: null },
    eyebrow: "How long is \"first\"",
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
    audio: { src: null },
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
    audio: { src: null },
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
    audio: { src: null },
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
    audio: { src: null },
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
    audio: { src: null },
    eyebrow: "On the foundation modules",
    headline: "You take *all six*. The teaching is the point.",
    sub: "Modules 3 through 8 are concept modules, not tactics modules. *Your audit doesn't tell you what to learn. It tells you what to build first when you're done learning.*",
  },

  // 37 · Bridge to Module 3
  {
    kind: "prose",
    id: "m2-bridge",
    crumb: CLOSING,
    tag: "BRIDGE",
    number: "37",
    audio: { src: null },
    surface: "plum",
    eyebrow: "End of Module 2",
    heading: "Now: *learn the foundations*.",
    paragraphs: [
      "You have a starting point. The next six modules teach what you'll be building. Take a break.",
      "Module 3 starts with getting found. *I'll see you there.*",
    ],
  },
];
