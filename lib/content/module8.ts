import { Slide } from "./types";

/**
 * Module 8: Authority building, and the close of the course. 20
 * slides, copy verbatim from module8slides.html (the deck is the
 * canonical source). Interactions: naming your kind of authority
 * (slide 11) and the Foundation Plan capstone (slide 18); tool
 * copy is adapted where the deck points at the external Map, since
 * the tool is embedded in the slide here.
 */

const S1 = "MODULE 8 · SECTION 1";
const S2 = "MODULE 8 · SECTION 2";
const S3 = "MODULE 8 · SECTION 3";
const S4 = "MODULE 8 · SECTION 4";
const S5 = "MODULE 8 · SECTION 5";

export const module8Slides: Slide[] = [
  // 01 · Module opener
  {
    kind: "hero",
    id: "m8-title",
    crumb: "BUILD YOUR MARKETING FOUNDATION",
    tag: "MODULE 8 · AUTHORITY BUILDING",
    number: "01",
    audio: { src: "/audio/m8/m8-1.mp3",
      callouts: [
        { text: "Module 8 pulls all of that together into one thing: your Foundation Plan.", at: 27.5, until: 33.3 },
        { text: "So this module teaches, and then it assembles.", at: 35.3, until: 39.1 },
      ] },
    surface: "plum",
    strata: 7,
    heading: "Authority *building*.",
    sub: "The work of being trusted as the genuine expert in your field. And the close of the course: assembling everything into one plan.",
    meta: [
      { label: "Length", value: "30 minutes" },
      { label: "Output", value: "Your Foundation Plan" },
      { label: "Module", value: "8 of 8" },
    ],
  },

  // 02 · The qualifying belief
  {
    kind: "frame",
    id: "m8-belief",
    crumb: S1,
    tag: "FRAME",
    number: "02",
    audio: { src: "/audio/m8/m8-2.mp3",
      callouts: [
        { text: "Both of those are real.", at: 19.8, until: 21.9 },
        { text: "You have paying clients and years of work behind you, and still the word authority feels like it belongs to someone else.", at: 39.8, until: 47.4 },
      ] },
    heading: "You do not feel like an *authority*.",
    sub: "Calling yourself one feels like bragging. Thought leadership looks fake. And underneath: a sense that you have not earned the title yet. That last belief is the one to take apart.",
  },

  // 03 · The concept
  {
    kind: "framework",
    id: "m8-concept",
    crumb: S1,
    tag: "FRAMEWORK",
    number: "03",
    audio: { src: "/audio/m8/m8-3.mp3",
      callouts: [
        { text: "Other people grant it to you, and they grant it based on one thing: whether your judgment, over time, has been sound.", at: 44.3, until: 52.1 },
        { text: "You have been accumulating authority, quietly, for as long as you have had clients.", at: 61.4, until: 66.7 },
      ], cues: [0.5, 30.6] },
    heading: "Authority is earned *trust*.",
    paragraphs: [
      "Not a title you award yourself. Authority is the weight your word carries: whether people move on it, or weigh it like anyone’s.",
      "So it was never something to qualify for. Other people grant it, and your clients have been doing that quietly for years.",
    ],
  },

  // 04 · The types
  {
    kind: "frame",
    id: "m8-types-open",
    crumb: S2,
    tag: "THE TYPES",
    number: "04",
    audio: { src: "/audio/m8/m8-4.mp3" },
    heading: "Authority comes in *kinds*.",
    sub: "Earned trust is not built the same way for everyone. There are three kinds of authority, and knowing which is yours tells you what to build.",
  },

  // 05 · The three kinds
  {
    kind: "cards",
    id: "m8-three-kinds",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "05",
    audio: { src: "/audio/m8/m8-5.mp3", cues: [0.5, 17.0, 32.3, 48.4] },
    eyebrow: "The three kinds of authority",
    heading: "Craft, expertise, *track record*.",
    cards: [
      {
        label: "Kind 01",
        title: "Craft",
        text: "The work is good enough, and distinct enough, that it *speaks* before you do.",
      },
      {
        label: "Kind 02",
        title: "Expertise",
        text: "People rely on your word for what you provably *know*.",
      },
      {
        label: "Kind 03",
        title: "Track record",
        text: "A history of calls that proved right. Not just skill, your *read* of a situation.",
      },
    ],
    footnote:
      "Most lead with one. It is not a ranking, and you do not need all three.",
  },

  // 06 · Craft
  {
    kind: "detail",
    id: "m8-craft",
    crumb: S2,
    tag: "KIND 01",
    number: "06",
    audio: { src: "/audio/m8/m8-6.mp3",
      callouts: [
        { text: "Excellent work that no one sees builds no authority at all.", at: 34.9, until: 39.0 },
        { text: "The judgment has been granted before the first conversation even starts.", at: 57.2, until: 61.9 },
      ], cues: [0.5, 28.6, 48.8] },
    eyebrow: "Craft",
    heading: "When the work *speaks* first.",
    cols: [
      {
        label: "What it is",
        text: "The work being visibly, distinctly good. Seen directly, not vouched for.",
      },
      {
        label: "How it is earned",
        text: "Doing the work is the start. Letting it be *seen* turns it into authority.",
      },
      {
        label: "Where it leads",
        text: "People arrive already trusting you, because they’ve seen the work.",
      },
    ],
  },

  // 07 · Expertise
  {
    kind: "detail",
    id: "m8-expertise",
    crumb: S2,
    tag: "KIND 02",
    number: "07",
    audio: { src: "/audio/m8/m8-7.mp3",
      callouts: [
        { text: "It is depth in something specific enough to be named, and it is knowledge others can actually verify, not just take on faith.", at: 13.9, until: 21.9 },
        { text: "And your word starts to settle questions that other people leave open.", at: 59.3, until: 64.6 },
      ], cues: [0.5, 22.7, 50.9] },
    eyebrow: "Expertise",
    heading: "When what you *know* is the proof.",
    cols: [
      {
        label: "What it is",
        text: "Depth in a specific area others can rely on and verify.",
      },
      {
        label: "How it is earned",
        text: "By making it *visible* in how you work: the question you think to ask, the distinction no one else drew.",
      },
      {
        label: "Where it leads",
        text: "They bring you the hard cases. Your word settles questions others leave open.",
      },
    ],
  },

  // 08 · Granted, not announced
  {
    kind: "principle",
    id: "m8-granted",
    crumb: S2,
    tag: "THE TAKEAWAY",
    number: "08",
    audio: { src: "/audio/m8/m8-8.mp3",
      callouts: [
        { text: "The word expert applied to oneself, by oneself.", at: 13.9, until: 19.3 },
        { text: "One is a costume and one is the body underneath it.", at: 60.5, until: 64.4 },
      ] },
    sans: true,
    headline: "Authority is granted, never *announced*.",
    sub: "The loud version is a performance. It can draw a crowd. It cannot draw trust, because trust is a verdict other people reach by watching your judgment hold. *Announced authority is the costume.*",
  },

  // 09 · Which is yours
  {
    kind: "frame",
    id: "m8-yours-open",
    crumb: S3,
    tag: "WHICH IS YOURS",
    number: "09",
    audio: { src: "/audio/m8/m8-9.mp3" },
    eyebrow: "The third kind, and your own",
    heading: "Then: which kind is *yours*?",
    sub: "One kind of authority is left to look at, the deepest one. Then the real question: which of the three is the one you already have, and should build.",
  },

  // 10 · Track record
  {
    kind: "detail",
    id: "m8-judgment",
    crumb: S3,
    tag: "KIND 03",
    number: "10",
    audio: { src: "/audio/m8/m8-10.mp3",
      callouts: [
        { text: "The years are the proof.", at: 49.6, until: 52.1 },
      ], cues: [0.5, 27.6, 51.4] },
    eyebrow: "Track record",
    heading: "When your *read* is what they trust.",
    cols: [
      {
        label: "What it is",
        text: "Calls that proved right. A trusted read of which way a situation will go.",
      },
      {
        label: "How it is earned",
        text: "Slowly, and only by being right in view of others. It needs *history.*",
      },
      {
        label: "Where it leads",
        text: "They consult you before deciding, not after. They want your call on the situation.",
      },
    ],
  },

  // 11 · Name your kind (interactive)
  {
    kind: "authorityKind",
    id: "m8-name-kind",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "11",
    audio: { src: "/audio/m8/m8-11.mp3",
      callouts: [
        { text: "It is in what your best clients say when they explain, to you or to someone else, why they chose you.", at: 16.1, until: 22.7 },
        { text: "That recognition is the instruction.", at: 66.4, until: 69.2 },
      ] },
    eyebrow: "Finding your kind",
    heading: "You already have one. *Name* it.",
    intro:
      "You are not choosing a kind of authority to start from scratch. You are identifying the one you have already been earning. The clearest signal is in what your best clients say when they explain why they chose you.",
  },

  // 12 · Shown by doing
  {
    kind: "principle",
    id: "m8-shown",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "12",
    audio: { src: "/audio/m8/m8-12.mp3" },
    sans: true,
    headline: "Whichever kind is yours, it is shown by *doing*.",
    sub: "Craft is shown by letting the work be seen. Expertise, in the question no one else asked. A track record, by making a call where others watch it land. *The work is the argument. Make it visible.*",
  },

  // 13 · Calibration opener
  {
    kind: "frame",
    id: "m8-calibration-open",
    crumb: S3,
    tag: "CALIBRATION",
    number: "13",
    audio: { src: "/audio/m8/m8-13.mp3" },
    eyebrow: "Each leads with a different kind",
    heading: "Five businesses, five *kinds*.",
    sub: "Each of the five leads with a different kind of authority, and for one of them it weighs very little. The honest answer is the calibration.",
  },

  // 14 · Five examples
  {
    kind: "table",
    id: "m8-five-businesses",
    crumb: S3,
    tag: "CALIBRATION",
    number: "14",
    audio: { src: "/audio/m8/m8-14.mp3", cues: [0.5, 31.5, 58.3, 74.4, 91.9] },
    heading: "Which kind, and how much it *weighs*.",
    leftLabel: "The business",
    rightLabel: "The kind of authority it leads with",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Expertise.",
        text: "Clinical depth and the regard of peers, shown in how precisely she works. Weighs *heavily.*",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Minor. Say so.",
        text: "Not building thought leadership. Trusted to do the job well, and that is enough.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Craft.",
        text: "Her style is distinct and visible. Authority grows every time the work is *seen.*",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Expertise.",
        text: "Clinical trust in a defined area, which patients and GPs rely on.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Craft, into specialism.",
        text: "Unmistakable work. Seen often enough, craft becomes a named specialism. Weighs *heavily.*",
      },
    ],
  },

  // 15 · Compounding
  {
    kind: "framework",
    id: "m8-compounding",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "15",
    audio: { src: "/audio/m8/m8-15.mp3",
      callouts: [
        { text: "You would not have the hours for that, and it would not work anyway.", at: 59.4, until: 63.7 },
        { text: "That is the real reason it is the last module.", at: 72.0, until: 76.0 },
      ], cues: [0.5, 51.6] },
    heading: "Authority is the foundation the others *feed*.",
    paragraphs: [
      "The seventh foundation, and the one the previous six quietly build. Positioning makes your judgment legible, proof confirms it, referrals carry it, awareness gives it room.",
      "Not built by adding an activity on top, but by doing the other six well, in view. It is what the foundation *becomes.*",
    ],
  },

  // 16 · Slow and durable
  {
    kind: "principle",
    id: "m8-slow",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "16",
    audio: { src: "/audio/m8/m8-16.mp3",
      callouts: [
        { text: "Watching takes as long as it takes.", at: 15.7, until: 18.7 },
        { text: "Slow to build is also slow to lose, and that is a very good trade.", at: 61.6, until: 66.2 },
      ] },
    sans: true,
    headline: "Authority is the slowest foundation, and the most *durable*.",
    sub: "It cannot be rushed, because it is a verdict others reach by watching. That slowness is its strength: it does not collapse when a platform changes. *Slow to build is also slow to lose.*",
  },

  // 17 · The Foundation Plan opener
  {
    kind: "frame",
    id: "m8-plan-open",
    crumb: S5,
    tag: "THE FOUNDATION PLAN",
    number: "17",
    audio: { src: "/audio/m8/m8-17.mp3" },
    eyebrow: "Seven foundations, one plan",
    heading: "Now you build the *plan*.",
    sub: "Every module wrote to a tab. The course closes by pulling all seven together into one plan, sequenced to the time you actually have.",
  },

  // 18 · The Foundation Plan capstone (interactive)
  {
    kind: "foundationPlan",
    id: "m8-tool",
    crumb: S5,
    tag: "TOOL · CAPSTONE",
    number: "18",
    audio: { src: "/audio/m8/m8-18.mp3" },
    eyebrow: "Your turn",
    heading: "Assemble your plan. *Sequence* the seven foundations.",
    paragraphs: [
      "The plan below has gathered everything you marked, from positioning to authority.",
      "You will not act on all seven at once. First, next, later. First is what most needs work and most repays it.",
    ],
  },

  // 19 · How to sequence
  {
    kind: "framework",
    id: "m8-sequence",
    crumb: S5,
    tag: "FRAMEWORK",
    number: "19",
    audio: { src: "/audio/m8/m8-19.mp3",
      callouts: [
        { text: "Then let everything else wait, genuinely wait, without guilt.", at: 30.5, until: 35.3 },
        { text: "You are not behind.", at: 60.9, until: 63.1 },
      ], cues: [0.5, 34.6] },
    eyebrow: "Reading your plan",
    heading: "One thing at a time, in the right *order*.",
    paragraphs: [
      "A good plan is the one you follow. Put first the foundation that is weakest and most load-bearing.",
      "The foundations do not expire. A modest plan you keep outbuilds an ambitious one that stalls. You have an *order* to build in.",
    ],
  },

  // 20 · The course close
  {
    kind: "prose",
    id: "m8-close",
    crumb: "MODULE 8 · END",
    tag: "END OF THE COURSE",
    number: "20",
    audio: { src: "/audio/m8/m8-20.mp3",
      callouts: [
        { text: "There is no rush and there is no countdown.", at: 58.2, until: 61.6 },
        { text: "That is where a plan stops being a document and starts being the thing you are building.", at: 73.9, until: 79.5 },
      ], cues: [0.5] },
    surface: "plum",
    mapFilled: 7,
    eyebrow: "End of Build Your Marketing Foundation",
    heading: "A foundation, and a *plan*.",
    paragraphs: [
      "Seven foundations, across three layers: get found, get chosen, be remembered. You did not need more marketing. You needed it to be clear, considered, and yours. It is. Now build it, in the order you set, at the pace your work allows.",
    ],
  },
];
