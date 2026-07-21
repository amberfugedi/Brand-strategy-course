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
    eyebrow: "Module 6",
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
    eyebrow: "Where most people start",
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
    eyebrow: "The concept",
    heading: "Awareness is being *known* before you are needed.",
    paragraphs: [
      "Most marketing chases people who are looking right now. Awareness is different work. It is becoming familiar to the right people before they have a need, so that when the need arrives, you are already who comes to mind. It is not lead generation. It produces no enquiry today. It changes who gets the enquiry later.",
      "This is the first of three foundations in Be Remembered. The other two build on it: Module 7 is the audience you can contact directly, Module 8 is being seen as the expert. This module is the groundwork for both: simply being known.",
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
    eyebrow: "The map",
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
        text: "The place is where your future clients already are. Presence somewhere they never look builds awareness in an *empty* room.",
      },
      {
        label: "Condition 02",
        title: "Consistent",
        text: "You show up on a rhythm, not in bursts. Awareness is an accumulation, and accumulation needs *repetition* over time.",
      },
      {
        label: "Condition 03",
        title: "Recognizably you",
        text: "Each appearance reads as the same person, same angle. Without that, repetition adds up to *noise*, not recognition.",
      },
    ],
    footnote:
      "Miss one condition and presence stops compounding. The next three slides take each in turn.",
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
        text: "A place is anywhere the same people gather repeatedly. The right place is one your future clients already pass through, so your presence reaches them without you chasing.",
      },
      {
        label: "A place is not only a feed",
        text: "It can be a local business network, a profession-adjacent community, a niche online forum, a recurring event, a newsletter someone else runs. A *platform* is one kind of place, not the only kind.",
      },
      {
        label: "How it fails",
        text: "Presence in a place your clients never visit builds awareness in an empty room. Effort is spent, and no one who matters is there to see it.",
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
        text: "Awareness accumulates. It is the sum of many small appearances, which means it needs repetition: a rhythm a person could almost predict.",
      },
      {
        label: "Small and steady beats big and rare",
        text: "A modest presence every week outbuilds an ambitious one that appears, then vanishes for two months. The *rhythm* is the asset, not the size of any single appearance.",
      },
      {
        label: "How it fails",
        text: "A burst of effort followed by silence resets the accumulation. People forget at the speed you stop. Consistency you cannot sustain is worse than a smaller one you can.",
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
        text: "For repetition to become recognition, each appearance has to connect to the last. Same voice, same angle, same recognizable point of view.",
      },
      {
        label: "This is positioning, showing up again",
        text: "The angle that makes you recognizable is the one you defined in Module 1. Awareness does not need a new identity. It needs the existing one, shown *consistently.*",
      },
      {
        label: "How it fails",
        text: "Presence that changes shape every time reads as a different person every time. The appearances never link, and repetition adds up to noise instead of a name.",
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
    eyebrow: "The bright line",
    headline: "Awareness is being known by the *right* people, not the most.",
    sub: "Most advice about brand-building is really about reach: more followers, more views, a bigger audience. But a thousand strangers who will never hire you are not awareness. They are an audience of the wrong people. The aim is to be genuinely familiar to the smaller group who could actually become clients. *A small room of the right people beats a crowded one.*",
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
    eyebrow: "On patience",
    headline: "Awareness is the foundation whose progress is hardest to *see*.",
    sub: "The work accumulates out of sight. You will do it and see nothing for a while, because recognition forms quietly, below the surface, before it ever produces an enquiry. That is normal, and it is not failure. The work is invisible right up until it is not. *The silence is not the absence of progress.*",
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
    eyebrow: "Five businesses, five weightings",
    heading: "Same model. *Different* weight.",
    leftLabel: "The business",
    rightLabel: "How much awareness weighs, and the place",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Minor.",
        text: "Maya runs on peer referral. Awareness is a light, steady note: a modest professional profile in the local clinician community, so referrers remember she exists. *Small* is the right size here.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Moderate.",
        text: "Reviews carry him, but awareness helps. His place is the local neighborhood groups where homeowners ask for recommendations. Being the name already familiar there shortens every decision.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Significant.",
        text: "Couples research for months. Her place is the venue and planner community, plus a consistent portfolio presence, so her documentary style is recognized before the first call.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Minor.",
        text: "James runs on referral and local search. Awareness is a small note: steady, recognizable presence in a couple of community spaces, so the name is familiar. Not his main engine.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Primary.",
        text: "Awareness is Sasha's main engine. Her place is the platform where her vivids work is discovered, and her audience follows for months before they book. Presence is the business.",
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
    eyebrow: "On proportion",
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
    eyebrow: "On capacity",
    headline: "The cadence you can *keep* beats the one you admire.",
    sub: "An ambitious plan you abandon in a month builds less awareness than a modest one you hold for a year. Recognition is forfeited the moment you stop, and an overreaching cadence is built to be stopped. So plan from your real capacity, the 5 to 10 hours you actually have, not the schedule you wish you had. *Choose the pace you can still keep when the week goes wrong.*",
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
    sub: "Getting found, earned proof, referrals: each one acts on people who are searching for you, or were sent by someone who knows you. Awareness is the first foundation that reaches past that edge, to people not yet looking and not yet connected. It is slow because it is doing the hardest reach of all. *That reach is the whole reason this layer exists.*",
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
      "The instinct is to begin with an ambitious presence, to make up for lost time. Resist it. An awareness practice has to survive your worst week, not your best one, because the silence after you stop un-builds the recognition you had.",
      "Pick one place. Pick the smallest cadence that still counts as a rhythm: weekly, or even fortnightly. Choose the version you are slightly embarrassed is not more. If it holds for a year, you can always add. Almost no one regrets starting too small. Many quit from starting too big.",
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
    eyebrow: "The pattern",
    headline: "You become known the way a place becomes *familiar.*",
    sub: "No one decides to know a business. Familiarity forms the way it does with a shop you pass each day: through quiet, repeated exposure, until the name is simply part of the landscape. Awareness is not a campaign that announces you. It is a presence that, kept up, becomes ordinary. *Ordinary, in the right place, is exactly the goal.*",
  },

  // 19 · The presence plan (interactive)
  {
    kind: "presencePlan",
    id: "m6-tool",
    crumb: "MODULE 6 · CLOSING",
    tag: "TOOL",
    number: "19",
    audio: { src: null },
    eyebrow: "Now: plan your presence",
    heading: "Name your *place.*",
    paragraphs: [
      "First, note how much weight awareness should carry for you, using the calibration as your guide. Then name the one place you will build presence in: the place your future clients already are, and check it against the three conditions.",
      "Then commit to a cadence, and deliberately under-commit. Pick the rhythm you could keep through a bad week, not a good one.",
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
    eyebrow: "End of Module 6",
    heading: "You have a place to be *known.*",
    paragraphs: [
      "Awareness makes you familiar, but it reaches people on someone else's platform, on borrowed ground. Next: turning that presence into an audience you can reach directly, whenever you choose. Owned Audience, Module 7.",
    ],
  },
];
