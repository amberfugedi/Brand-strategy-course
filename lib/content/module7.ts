import { Slide } from "./types";

/**
 * Module 7: Owned audience. 20 slides, copy verbatim from the
 * produced deck (module7slides.html). The tool moment (slide 19) is
 * the in-app owned-audience plan: people, channel, cadence.
 */

const S1 = "MODULE 7 · SECTION 1";
const S2 = "MODULE 7 · SECTION 2";
const S3 = "MODULE 7 · SECTION 3";
const S4 = "MODULE 7 · SECTION 4";
const S5 = "MODULE 7 · SECTION 5";

export const module7Slides: Slide[] = [
  // 01 · Module opener
  {
    kind: "hero",
    id: "m7-title",
    crumb: "BUILD YOUR MARKETING FOUNDATION",
    tag: "MODULE 7 · OWNED AUDIENCE",
    number: "01",
    audio: { src: "/audio/m7/m7-1.mp3",
      callouts: [
        { text: "Module 6 closed on a specific point: the place you became known is borrowed.", at: 21.3, until: 27.4 },
        { text: "By the end you will have one output, your owned-audience plan: the people, the channel, and the cadence you can actually sustain.", at: 43.4, until: 52.3 },
      ] },
    surface: "plum",
    strata: 6,
    heading: "Owned *audience*.",
    sub: "A direct line to the people who came to know you, so reaching them never depends on a platform.",
    meta: [
      { label: "Output", value: "Your owned-audience plan" },
      { label: "Module", value: "7 of 8" },
    ],
  },

  // 02 · The dismissal belief
  {
    kind: "frame",
    id: "m7-decided",
    crumb: S1,
    tag: "FRAME",
    number: "02",
    audio: { src: "/audio/m7/m7-2.mp3",
      callouts: [
        { text: "Every one of those is a reasonable response.", at: 35.2, until: 38.5 },
        { text: "You judged owned audience by what reach-chasing looks like, and they are not the same thing.", at: 53.2, until: 58.9 },
      ] },
    heading: "You have already *decided* against this.",
    sub: "Maybe you tried and it went nowhere. Maybe referrals cover you. Each is a reasonable read of the wrong thing.",
  },

  // 03 · The concept
  {
    kind: "framework",
    id: "m7-concept",
    crumb: S1,
    tag: "FRAMEWORK",
    number: "03",
    audio: { src: "/audio/m7/m7-3.mp3",
      callouts: [
        { text: "When you have someone’s address and their permission, no platform is in the middle.", at: 43.0, until: 48.3 },
        { text: "And only one of them can be a foundation.", at: 58.1, until: 61.1 },
      ], cues: [0.5, 34.2] },
    heading: "There is reach, and there is a channel you *own*.",
    paragraphs: [
      "Module 6 made you known in a place someone else owns. The platform decides who sees you, and can change that without telling you.",
      "A channel you own is a direct line to people who chose to keep hearing from you. This module is the gap between the two.",
    ],
  },

  // 04 · The shift
  {
    kind: "frame",
    id: "m7-shift",
    crumb: S2,
    tag: "THE SHIFT",
    number: "04",
    audio: { src: "/audio/m7/m7-4.mp3",
      callouts: [
        { text: "Being reachable is something you can do, whenever you choose, because you hold the line yourself.", at: 14.7, until: 21.2 },
      ] },
    eyebrow: "The move this module makes",
    heading: "From being found to being *reachable*.",
    sub: "Awareness is people finding you. An owned audience is you reaching them. The second is built on purpose.",
  },

  // 05 · Two jobs
  {
    kind: "cards",
    id: "m7-two-jobs",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "05",
    audio: { src: "/audio/m7/m7-5.mp3",
      callouts: [
        { text: "You are, in a real sense, renting access to your own audience.", at: 20.7, until: 25.4 },
        { text: "It is an audience the platform has, and lets you borrow.", at: 41.6, until: 45.7 },
      ], cues: [0.5, 24.6, 34.7] },
    heading: "Two jobs. The mistake is owning the *wrong* one.",
    cards: [
      {
        label: "Reach",
        title: "How people find you",
        text: "It shows your work to people who don’t know you yet, which is the whole job of *awareness*. But it owns the connection.",
      },
      {
        label: "A channel you own",
        title: "How you reach them back",
        text: "A direct line to people who chose to stay. It does not disappear when an algorithm *shifts*.",
      },
    ],
    footnote:
      "Reach finds people. A channel you own keeps them. The error is mistaking the first for the second.",
  },

  // 06 · Borrowed reach, up close
  {
    kind: "detail",
    id: "m7-reach-detail",
    crumb: S2,
    tag: "DETAIL",
    number: "06",
    audio: { src: "/audio/m7/m7-6.mp3",
      callouts: [
        { text: "Every conversation starts from zero, because nothing carries forward.", at: 49.5, until: 54.1 },
        { text: "It is workable, and it is quietly exhausting, and it is not a foundation.", at: 55.9, until: 61.5 },
      ], cues: [0.5, 24.6, 42.5] },
    eyebrow: "Reach, up close",
    heading: "What borrowed reach *can* and cannot do.",
    cols: [
      {
        label: "What it does well",
        text: "It introduces you to people who were never going to find you. For first contact, nothing competes.",
      },
      {
        label: "What it cannot do",
        text: "It cannot promise a second contact. Today, yes. Next month, maybe not.",
      },
      {
        label: "Why that matters",
        text: "A business with only reach has to be re-found by the same people. *Tiring*, and not a foundation.",
      },
    ],
  },

  // 07 · Borrowed ground
  {
    kind: "principle",
    id: "m7-borrowed-ground",
    crumb: S2,
    tag: "THE TAKEAWAY",
    number: "07",
    audio: { src: "/audio/m7/m7-7.mp3",
      callouts: [
        { text: "It is not an argument against reach, or against the platform, or against the work you did in Module 6.", at: 27.4, until: 34.0 },
      ] },
    sans: true,
    headline: "The place you were found was never *yours*.",
    sub: "The place you built presence in runs on rules you cannot see, and the reach is held at someone else’s discretion. *A foundation is the part that stays when the platform changes.*",
  },

  // 08 · Choosing the channel
  {
    kind: "cards",
    id: "m7-choosing",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "08",
    audio: { src: "/audio/m7/m7-8.mp3",
      callouts: [
        { text: "This is the one businesses skip.", at: 55.6, until: 58.2 },
        { text: "Choose the channel sized to the hours you actually have, not the hours you imagine having.", at: 64.0, until: 69.5 },
      ], cues: [0.5, 53.4] },
    heading: "The channel is a *means*. Choose it for fit.",
    intro:
      "Usually email, the clearest direct line you control. But the principle is the line, not the tool.",
    cards: [
      {
        label: "Fit to your audience",
        title: "Where they will accept contact",
        text: "It only works if your people open it. Choose where they already *are*.",
      },
      {
        label: "Fit to your capacity",
        title: "What you can sustain",
        text: "One you feed quarterly beats one you abandon in a month. Size it to the hours you have.",
      },
    ],
  },

  // 09 · Earn the channel
  {
    kind: "frame",
    id: "m7-earn",
    crumb: S3,
    tag: "EARN THE CHANNEL",
    number: "09",
    audio: { src: "/audio/m7/m7-9.mp3" },
    eyebrow: "The first half of the work",
    heading: "Nobody owes you their *attention*.",
    sub: "A direct line is granted, not taken. Before anyone gives you one, they need a reason.",
  },

  // 10 · A reason, not a bribe
  {
    kind: "detail",
    id: "m7-reason",
    crumb: S3,
    tag: "DETAIL",
    number: "10",
    audio: { src: "/audio/m7/m7-10.mp3",
      callouts: [
        { text: "They wanted the thing. They did not necessarily want you.", at: 20.4, until: 24.4 },
        { text: "It collects the right people, the ones who wanted what you actually offer.", at: 44.5, until: 49.5 },
      ], cues: [0.5, 28.9, 48.8] },
    heading: "A reason to join, not a *bribe* to.",
    cols: [
      {
        label: "The bribe",
        text: "A discount or download, traded for an address. It collects people who wanted the thing, not you.",
      },
      {
        label: "The real reason",
        text: "An honest promise of something worth receiving. Fewer people, and the *right* ones.",
      },
      {
        label: "The test",
        text: "Would they stay after getting the thing that made them join? If not, it’s a funnel.",
      },
    ],
  },

  // 11 · Join is stay
  {
    kind: "framework",
    id: "m7-join-stay",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "11",
    audio: { src: "/audio/m7/m7-11.mp3", cues: [0.5, 32.4] },
    eyebrow: "Joining and staying",
    heading: "The reason to join is the reason to *stay*.",
    bullets: true,
    paragraphs: [
      "A bribe and what follows are two promises, so people leave when the gap shows. Make them one promise.",
      "Earning and keeping are not separate problems. The promise that earns an address is the one you spend the relationship keeping.",
    ],
  },

  // 12 · Not a harvest
  {
    kind: "principle",
    id: "m7-harvest",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "12",
    audio: { src: "/audio/m7/m7-12.mp3" },
    sans: true,
    headline: "An audience is not a resource you *harvest*.",
    sub: "The loudest advice treats an audience as a yield to extract. It works for a while, and teaches people that hearing from you means being sold to. *Treat it as a harvest and you get one season.*",
  },

  // 13 · A list is collected
  {
    kind: "principle",
    id: "m7-list-kept",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "13",
    audio: { src: "/audio/m7/m7-13.mp3" },
    sans: true,
    headline: "A list is collected. An audience is *kept*.",
    sub: "A list is a count. An audience exists only while the contact stays worth receiving. *Collecting is a moment. Keeping is the work.*",
  },

  // 14 · What would I send
  {
    kind: "cards",
    id: "m7-send",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "14",
    audio: { src: "/audio/m7/m7-14.mp3",
      callouts: [
        { text: "The fear assumes a blank page. You do not have a blank page. You have a promise.", at: 41.1, until: 46.7 },
        { text: "A quarterly email you actually send for years beats a weekly one you abandon in five weeks.", at: 60.7, until: 67.5 },
      ], cues: [0.5, 45.9] },
    eyebrow: "Keeping the channel",
    heading: "The fear is “what would I *send*?”",
    intro:
      "The next thought is always: I don’t know what I’d send them. It has a plain answer.",
    cards: [
      {
        label: "The answer to what",
        title: "Send the promise you made",
        text: "You already named the reason people joined. What you send is that reason, kept.",
      },
      {
        label: "The answer to how often",
        title: "A cadence you can hold",
        text: "The rhythm you could sustain in your busiest month. Under-commit on *purpose*.",
      },
    ],
  },

  // 15 · Calibration opener
  {
    kind: "frame",
    id: "m7-weigh",
    crumb: S4,
    tag: "CALIBRATION",
    number: "15",
    audio: { src: "/audio/m7/m7-15.mp3" },
    eyebrow: "This one varies more than most",
    heading: "How much does this *weigh* for you?",
    sub: "An owned audience is central for some businesses and minor for others. The honest answer is not the same across all five. Finding your weight is the work.",
  },

  // 16 · Five businesses
  {
    kind: "table",
    id: "m7-five-businesses",
    crumb: S4,
    tag: "CALIBRATION",
    number: "16",
    audio: { src: "/audio/m7/m7-16.mp3", cues: [0.5, 30.5, 58.5, 84.3, 106.4] },
    heading: "Same channel. *Different* weight.",
    leftLabel: "The business",
    rightLabel: "What an owned audience is, and how much it weighs",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Moderate, and quiet.",
        text: "Ethics rules out promotion. A low-key update to past clients. *Restrained*, never a sales tool.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Minor. Say so.",
        text: "Repeat local work needs no standing audience. A list for a seasonal reminder is the ceiling.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Moderate, redefined.",
        text: "A couple is a client once. Her audience is past couples as referrers, and planners.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Moderate-low.",
        text: "Patients finish and leave. A reason to return if something recurs, not a retention engine.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Primary.",
        text: "They follow for months before booking. The most natural owned audience of the five.",
      },
    ],
  },

  // 17 · Borrowed, the other half
  {
    kind: "table",
    id: "m7-borrowed-half",
    crumb: S4,
    tag: "CALIBRATION",
    number: "17",
    audio: { src: "/audio/m7/m7-17.mp3", cues: [0.5, 27.5, 34.5, 42.9, 50.8] },
    heading: "Borrowed, the *other half*.",
    leftLabel: "The business",
    rightLabel: "Their borrowed presence, and why it still helps",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Professional profile + peers.",
        text: "The directory profile and the peers who refer her. *Not* a social feed.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Local groups + the listing.",
        text: "Local groups and his Google listing. His name resurfaces when a neighbor asks.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Instagram.",
        text: "A past couple’s friend scrolls, sees the work, remembers her. The portfolio keeps circulating.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Local community pages.",
        text: "A former patient sees his name in a thread and rebooks when something flares.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Instagram, where everything happens.",
        text: "Prospects follow for months, then book. Her borrowed channel feeds the owned one.",
      },
    ],
    footnote:
      "Owned is *intentional reach*. Borrowed is *ambient re-encounter*, catching people who weren’t looking.",
  },

  // 18 · On size
  {
    kind: "principle",
    id: "m7-size",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "18",
    audio: { src: "/audio/m7/m7-18.mp3" },
    sans: true,
    headline: "Build the audience you can *answer*, not the one you can capture.",
    sub: "It is easy to collect more people than you can stay in contact with. That is a debt, not a head start. *A smaller audience you actually keep is the larger asset.*",
  },

  // 19 · The smallest real version
  {
    kind: "framework",
    id: "m7-smallest",
    crumb: S5,
    tag: "FRAMEWORK",
    number: "19",
    audio: { src: "/audio/m7/m7-19.mp3",
      callouts: [
        { text: "The raw material of an owned audience is already in your hands.", at: 16.5, until: 20.9 },
        { text: "It is allowed to be small. It can grow later. What it cannot do is grow if it never gets built.", at: 50.8, until: 57.0 },
      ], cues: [0.5, 37.2] },
    eyebrow: "If this feels like a lot",
    heading: "Start with the people you *already* have.",
    bullets: true,
    paragraphs: [
      "You are not starting from zero. It begins by organising the people you already have.",
      "One channel, the people within reach of it, a cadence you can hold. It cannot grow if it is never *built.*",
    ],
  },

  // 20 · The owned-audience plan
  {
    kind: "ownedAudience",
    id: "m7-tool",
    crumb: "MODULE 7 · CLOSING",
    tag: "TOOL",
    number: "20",
    audio: { src: "/audio/m7/m7-20.mp3" },
    eyebrow: "Your turn",
    heading: "Plan your *channel.*",
    paragraphs: [
      "You are making three decisions, and all three are sized to the capacity you actually have.",
      "Name the people you will start with. Name the one channel you will own. Name a cadence you are confident you can hold on a busy month.",
    ],
  },

  // 21 · Closing bridge
  {
    kind: "prose",
    id: "m7-bridge",
    crumb: "MODULE 7 · END",
    tag: "NEXT: AUTHORITY BUILDING",
    number: "21",
    audio: { src: "/audio/m7/m7-21.mp3", cues: [0.5] },
    surface: "plum",
    mapFilled: 6,
    eyebrow: "End of Module 7",
    heading: "You can *reach* them now.",
    paragraphs: [
      "You have a direct line to the right people, on your own terms. The last question is what they think when they hear from you. Being reachable is not yet being trusted as the expert. Authority Building, Module 8.",
    ],
  },
];
