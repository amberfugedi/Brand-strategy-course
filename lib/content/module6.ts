import { Slide } from "./types";

/**
 * Module 6: Brand awareness. 20 slides, copy verbatim from the
 * produced deck (module6slides.html); the script confirms every
 * on-slide line. The deck's tool moment (slide 19) is the in-app
 * presence plan, so the "open the Map" instruction is adapted. The
 * script adds a weight step (minor to primary) ahead of the place,
 * which the tool carries.
 */

const S1 = "MODULE 6 · SECTION 1";
const S2 = "MODULE 6 · SECTION 2";
const S3 = "MODULE 6 · SECTION 3";
const S4 = "MODULE 6 · SECTION 4";

export const module6Slides: Slide[] = [
  // 01 · Module opener
  {
    kind: "hero",
    id: "m6-title",
    crumb: "BUILD YOUR MARKETING FOUNDATION",
    tag: "MODULE 6 · BRAND AWARENESS",
    number: "01",
    audio: { src: null },
    surface: "plum",
    strata: 5,
    heading: "Brand *awareness*.",
    sub: "Becoming known by the people you want as clients, before they are looking for you.",
    meta: [
      { label: "Length", value: "20 minutes" },
      { label: "Output", value: "Your presence plan" },
      { label: "Module", value: "6 of 8" },
    ],
  },

  // 02 · The infinite feeling
  {
    kind: "frame",
    id: "m6-infinite",
    crumb: S1,
    tag: "FRAME",
    number: "02",
    audio: { src: null },
    heading: "Building a brand feels *infinite.*",
    sub: "A task with no edges and no end. That feeling is the first thing to fix.",
  },

  // 03 · The concept
  {
    kind: "framework",
    id: "m6-concept",
    crumb: S1,
    tag: "FRAMEWORK",
    number: "03",
    audio: { src: null },
    heading: "Awareness is being *known* before you are needed.",
    paragraphs: [
      "Most marketing chases people looking right now. Awareness is being familiar before the need arrives, so you are who comes to mind. It changes who gets the enquiry later.",
      "The first of three in Be Remembered. Module 7 is the audience you can contact, Module 8 is being seen as the expert.",
    ],
  },

  // 04 · The model
  {
    kind: "frame",
    id: "m6-model-open",
    crumb: S2,
    tag: "THE MODEL",
    number: "04",
    audio: { src: null },
    heading: "Presence in *one place*, over time.",
    sub: "Not built everywhere at once. Built by showing up in one place, long enough to be recognized.",
  },

  // 05 · The three conditions
  {
    kind: "cards",
    id: "m6-three-conditions",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "05",
    audio: { src: null },
    eyebrow: "What presence needs to work",
    heading: "Presence builds awareness on *three* conditions.",
    cards: [
      {
        label: "Condition 01",
        title: "Right place",
        text: "Where your future clients already are. Anywhere else is an *empty* room.",
      },
      {
        label: "Condition 02",
        title: "Consistent",
        text: "A rhythm, not bursts. Awareness accumulates, and accumulation needs *repetition*.",
      },
      {
        label: "Condition 03",
        title: "Recognizably you",
        text: "Same person, same angle each time. Without it, repetition adds up to *noise*.",
      },
    ],
    footnote:
      "Miss one and presence stops compounding.",
  },

  // 06 · Right place
  {
    kind: "detail",
    id: "m6-right-place",
    crumb: S2,
    tag: "CONDITION 01",
    number: "06",
    audio: { src: null },
    eyebrow: "Right place",
    heading: "Be where they *already* are.",
    cols: [
      {
        label: "What the condition is",
        text: "Anywhere the same people gather repeatedly, and your future clients already pass through.",
      },
      {
        label: "A place is not only a feed",
        text: "A local network, a niche forum, a recurring event, someone else's newsletter. A *platform* is one kind of place, not the only kind.",
      },
      {
        label: "How it fails",
        text: "Presence where your clients never visit. No one who matters is there to see it.",
      },
    ],
  },

  // 07 · Consistent
  {
    kind: "detail",
    id: "m6-consistent",
    crumb: S2,
    tag: "CONDITION 02",
    number: "07",
    audio: { src: null },
    eyebrow: "Consistent",
    heading: "Show up on a *rhythm.*",
    cols: [
      {
        label: "What the condition is",
        text: "The sum of many small appearances. It needs a rhythm they could almost predict.",
      },
      {
        label: "Small and steady beats big and rare",
        text: "A modest weekly presence outbuilds an ambitious one that vanishes. The *rhythm* is the asset.",
      },
      {
        label: "How it fails",
        text: "A burst then silence resets the accumulation. People forget at the speed you stop.",
      },
    ],
  },

  // 08 · Recognizably you
  {
    kind: "detail",
    id: "m6-recognizably-you",
    crumb: S2,
    tag: "CONDITION 03",
    number: "08",
    audio: { src: null },
    eyebrow: "Recognizably you",
    heading: "Read as the *same* person each time.",
    cols: [
      {
        label: "What the condition is",
        text: "Each appearance has to connect to the last. Same voice, same angle.",
      },
      {
        label: "This is positioning, showing up again",
        text: "The angle is the one from Module 1. No new identity, just the existing one shown *consistently.*",
      },
      {
        label: "How it fails",
        text: "Presence that changes shape reads as a different person each time.",
      },
    ],
  },

  // 09 · Right people, not the most
  {
    kind: "principle",
    id: "m6-right-people",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "09",
    audio: { src: null },
    sans: true,
    headline: "Awareness is being known by the *right* people, not the most.",
    sub: "Most brand-building advice is really about reach. A thousand strangers who will never hire you are not awareness. *A small room of the right people beats a crowded one.*",
  },

  // 10 · Pays back last
  {
    kind: "principle",
    id: "m6-pays-back-last",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "10",
    audio: { src: null },
    sans: true,
    headline: "Awareness is the foundation whose progress is hardest to *see*.",
    sub: "The hardest foundation to watch working. Recognition forms below the surface long before it produces an enquiry. *The silence is not the absence of progress.*",
  },

  // 11 · How much should it weigh
  {
    kind: "frame",
    id: "m6-weigh-open",
    crumb: S3,
    tag: "CALIBRATION",
    number: "11",
    audio: { src: null },
    heading: "How much should awareness *weigh* for you?",
    sub: "For some it is the main engine. For others a minor note. Place and weight both vary.",
  },

  // 12 · Five examples
  {
    kind: "table",
    id: "m6-five-businesses",
    crumb: S3,
    tag: "CALIBRATION",
    number: "12",
    audio: { src: null },
    heading: "Same model. *Different* weight.",
    leftLabel: "The business",
    rightLabel: "How much awareness weighs, and the place",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Minor.",
        text: "She runs on peer referral. A modest profile among local clinicians, so referrers remember she exists. *Small* is right.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Moderate.",
        text: "Reviews carry him. The neighborhood groups where homeowners ask, and a familiar name shortens the decision.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Significant.",
        text: "Couples research for months. The venue and planner community, so her style is known before the first call.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Minor.",
        text: "Referral and local search carry him. A steady presence in a couple of spaces keeps the name familiar.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Primary.",
        text: "Her main engine. The audience follows for months before booking. Presence is the business.",
      },
    ],
  },

  // 13 · Sized to its weight
  {
    kind: "principle",
    id: "m6-proportion",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "13",
    audio: { src: null },
    sans: true,
    headline: "Build awareness to the size of its *job.*",
    sub: "If referral is your engine, awareness is a supporting note, and it should be small. Effort spent past what the job requires is taken from the engine that carries you. *Match the presence to the weight, then stop.*",
  },

  // 14 · The cadence you can keep
  {
    kind: "principle",
    id: "m6-cadence",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "14",
    audio: { src: null },
    sans: true,
    headline: "The cadence you can *keep* beats the one you admire.",
    sub: "A plan you abandon in a month builds less than a modest one held for a year. *Choose the pace you can keep when the week goes wrong.*",
  },

  // 15 · Weak vs strong plan
  {
    kind: "compare",
    id: "m6-compare",
    crumb: S4,
    tag: "CALIBRATION",
    number: "15",
    audio: { src: null },
    eyebrow: "Weak vs. strong, on a presence plan",
    heading: "What does a *sustainable* plan look like?",
    weak: {
      quote:
        "Post daily on three platforms, start a newsletter, and attend every local event.",
      text: "Built to collapse. It ignores capacity, spreads across many places, and the first hard week ends it. The silence afterward un-builds what little was built.",
    },
    strong: {
      quote:
        "One thoughtful post a week, in the *one* community where my clients already are.",
      text: "One place, one rhythm, survivable. Too small to matter, until it is held for a year.",
    },
  },

  // 16 · Why this layer exists
  {
    kind: "principle",
    id: "m6-reach",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "16",
    audio: { src: null },
    sans: true,
    eyebrow: "Why this layer exists",
    headline: "Every other foundation works on people *already* near you.",
    sub: "The first three foundations act on people already searching, or sent by someone. Awareness is the first that reaches past that edge. *That reach is why this layer exists.*",
  },

  // 17 · Start smaller
  {
    kind: "framework",
    id: "m6-start-smaller",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "17",
    audio: { src: null },
    eyebrow: "If the plan feels like a lot",
    heading: "Start *smaller* than feels right.",
    paragraphs: [
      "The instinct is to begin ambitiously. Resist it. The practice has to survive your worst week.",
      "One place, and the smallest cadence that still counts as a rhythm. Almost no one regrets starting too small.",
    ],
  },

  // 18 · How a place becomes familiar
  {
    kind: "principle",
    id: "m6-familiar",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "18",
    audio: { src: null },
    sans: true,
    headline: "You become known the way a place becomes *familiar.*",
    sub: "No one decides to know a business. Familiarity forms like a shop you pass each day. *Ordinary, in the right place, is exactly the goal.*",
  },

  // 19 · The presence plan (interactive)
  {
    kind: "presencePlan",
    id: "m6-tool",
    crumb: "MODULE 6 · CLOSING",
    tag: "TOOL",
    number: "19",
    audio: { src: null },
    eyebrow: "Your turn",
    heading: "Name your *place.*",
    paragraphs: [
      "Note how much weight awareness should carry for you. Then name the one place you will build presence in, and check it against the three conditions.",
      "Then commit to a cadence, and deliberately under-commit. The rhythm you could keep through a bad week.",
    ],
  },

  // 20 · Closing bridge
  {
    kind: "prose",
    id: "m6-bridge",
    crumb: "MODULE 6 · END",
    tag: "NEXT: OWNED AUDIENCE",
    number: "20",
    audio: { src: null },
    surface: "plum",
    mapFilled: 5,
    eyebrow: "End of Module 6",
    heading: "You have a place to be *known.*",
    paragraphs: [
      "Awareness reaches people on borrowed ground. Next: turning that into an audience you can reach directly. Module 7.",
    ],
  },
];
