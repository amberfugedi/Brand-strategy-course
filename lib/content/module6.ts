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
    sub: "The first foundation in Be Remembered: becoming known by the people you want as clients, before they are looking for you.",
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
    sub: "A task with no edges and no end, and never enough hours to do it. That feeling is the first thing to fix.",
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
      "Most marketing chases people looking right now. Awareness is becoming familiar to the right people before they have a need, so that when it arrives you are who comes to mind. It changes who gets the enquiry later.",
      "The first of three foundations in Be Remembered. Module 7 is the audience you can contact, Module 8 is being seen as the expert. This one is simply being known.",
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
    sub: "Awareness is not built everywhere at once. It is built by showing up in a single defined place, long enough to be recognized.",
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
        text: "Where your future clients already are. Presence somewhere they never look builds awareness in an *empty* room.",
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
        text: "Anywhere the same people gather repeatedly. The right one is somewhere your future clients already pass through.",
      },
      {
        label: "A place is not only a feed",
        text: "A local network, an adjacent community, a niche forum, a recurring event, someone else's newsletter. A *platform* is one kind of place, not the only kind.",
      },
      {
        label: "How it fails",
        text: "Presence where your clients never visit builds awareness in an empty room. No one who matters is there to see it.",
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
        text: "Awareness is the sum of many small appearances. It needs a rhythm a person could almost predict.",
      },
      {
        label: "Small and steady beats big and rare",
        text: "A modest weekly presence outbuilds an ambitious one that vanishes for two months. The *rhythm* is the asset.",
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
        text: "For repetition to become recognition, each appearance has to connect to the last. Same voice, same angle.",
      },
      {
        label: "This is positioning, showing up again",
        text: "The angle is the one you defined in Module 1. Awareness needs no new identity, just the existing one shown *consistently.*",
      },
      {
        label: "How it fails",
        text: "Presence that changes shape reads as a different person each time. The appearances never link.",
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
    sub: "Most brand-building advice is really about reach. But a thousand strangers who will never hire you are not awareness. The aim is to be familiar to the smaller group who could become clients. *A small room of the right people beats a crowded one.*",
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
    sub: "This is the hardest foundation to watch working. You will do the work and see nothing for a long while, because recognition forms below the surface before it produces an enquiry. *The silence is not the absence of progress.*",
  },

  // 11 · How much should it weigh
  {
    kind: "frame",
    id: "m6-weigh-open",
    crumb: S3,
    tag: "CALIBRATION",
    number: "11",
    audio: { src: null },
    eyebrow: "Weigh it honestly",
    heading: "How much should awareness *weigh* for you?",
    sub: "For some businesses awareness is the main engine. For others it is a minor note. Both the place and the weight vary.",
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
        text: "She runs on peer referral. A modest profile in the local clinician community, so referrers remember she exists. *Small* is the right size.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Moderate.",
        text: "Reviews carry him. His place is the neighborhood groups where homeowners ask for recommendations, where a familiar name shortens the decision.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Significant.",
        text: "Couples research for months. Her place is the venue and planner community, so her documentary style is recognized before the first call.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Minor.",
        text: "He runs on referral and local search. A steady presence in a couple of community spaces keeps the name familiar. Not his main engine.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Primary.",
        text: "Awareness is her main engine. Her audience follows for months before they book. Presence is the business.",
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
    sub: "If referral is your main engine, awareness is a supporting note, and a supporting note should be small. Not every business needs a large presence, and effort spent past what the job requires is effort taken from the engine that actually carries you. *Match the presence to the weight, then stop.*",
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
    sub: "An ambitious plan you abandon in a month builds less than a modest one you hold for a year. Recognition is forfeited the moment you stop. *Choose the pace you can still keep when the week goes wrong.*",
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
      text: "One place, one rhythm, survivable. It looks too small to matter. Held for a year, it is what recognition is actually made of.",
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
    sub: "Getting found, earned proof and referrals all act on people already searching, or sent by someone who knows you. Awareness is the first that reaches past that edge. *That reach is the whole reason this layer exists.*",
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
      "The instinct is to begin ambitiously, to make up for lost time. Resist it. The practice has to survive your worst week, not your best.",
      "One place, and the smallest cadence that still counts as a rhythm. Choose the version you are slightly embarrassed is not more. Almost no one regrets starting too small.",
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
    sub: "No one decides to know a business. Familiarity forms the way it does with a shop you pass each day, until the name is part of the landscape. *Ordinary, in the right place, is exactly the goal.*",
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
      "Awareness makes you familiar, but it reaches people on someone else's platform, on borrowed ground. Next: turning that presence into an audience you can reach directly, whenever you choose. Owned Audience, Module 7.",
    ],
  },
];
