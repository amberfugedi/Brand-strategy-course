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
    audio: { src: null },
    surface: "plum",
    eyebrow: "Module 7",
    heading: "Owned *audience*.",
    sub: "The work of building a direct line to the people who came to know you, so reaching them never depends on a platform you do not control.",
    meta: [
      { label: "Length", value: "20 minutes" },
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
    audio: { src: null },
    eyebrow: "Where most people start",
    heading: "You have already *decided* against this.",
    sub: "Maybe you tried it and it went nowhere. Maybe referrals cover you. Maybe it just feels like the influencer move. Each of those is a reasonable read of the wrong thing.",
  },

  // 03 · The concept
  {
    kind: "framework",
    id: "m7-concept",
    crumb: S1,
    tag: "FRAMEWORK",
    number: "03",
    audio: { src: null },
    eyebrow: "The concept",
    heading: "There is reach, and there is a channel you *own*.",
    paragraphs: [
      "Module 6 made you known in a place. That place belongs to someone else. Its reach is real, and it is borrowed: the platform decides who sees you, and it can change that decision without telling you.",
      "A channel you own is different. It is a direct line to people who chose to keep hearing from you, one you can use whenever you decide to. This module is about the gap between those two things, and why the second one is the foundation.",
    ],
  },

  // 04 · The shift
  {
    kind: "frame",
    id: "m7-shift",
    crumb: S2,
    tag: "THE SHIFT",
    number: "04",
    audio: { src: null },
    eyebrow: "The move this module makes",
    heading: "From being found to being *reachable*.",
    sub: "Awareness is people finding you. An owned audience is you being able to reach them. The first is where Module 6 left you. The second is built on purpose.",
  },

  // 05 · Two jobs
  {
    kind: "cards",
    id: "m7-two-jobs",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "05",
    audio: { src: null },
    eyebrow: "The distinction",
    heading: "Two jobs. The mistake is owning the *wrong* one.",
    cards: [
      {
        label: "Reach",
        title: "How people find you",
        text: "A platform shows your work to people who do not know you yet. This is real and useful work: it is the whole job of *awareness*. But the platform owns the connection. You are renting access to your own audience.",
      },
      {
        label: "A channel you own",
        title: "How you reach them back",
        text: "A direct line to people who already know you and chose to stay in contact. No platform stands between you and them. You decide when to use it, and it does not disappear when an algorithm *shifts*.",
      },
    ],
    footnote:
      "Reach finds people. A channel you own keeps them. They are not rivals, and you are not choosing one. The error is trying to own reach, or treating a large borrowed audience as if it were a relationship.",
  },

  // 06 · Borrowed reach, up close
  {
    kind: "detail",
    id: "m7-reach-detail",
    crumb: S2,
    tag: "DETAIL",
    number: "06",
    audio: { src: null },
    eyebrow: "Reach, up close",
    heading: "What borrowed reach *can* and cannot do.",
    cols: [
      {
        label: "What it does well",
        text: "It introduces you. A platform puts your work in front of people who were never going to find you on their own. For first contact, nothing an owned channel does competes with it.",
      },
      {
        label: "What it cannot do",
        text: "It cannot promise a second contact. You can reach someone today and have no way to reach the same person next month. The platform decides, every time, and it does not consult you.",
      },
      {
        label: "Why that matters",
        text: "A business that only has reach has to be re-found, constantly, by the same people. Every contact starts from zero. That is workable, and it is *tiring*, and it is not a foundation.",
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
    audio: { src: null },
    sans: true,
    eyebrow: "On borrowed ground",
    headline: "The place you were found was never *yours*.",
    sub: "Module 6 had you build presence in one place. That place is borrowed ground: a platform you do not own, running on rules you did not set and cannot see. Reach there is genuine, and it is held at someone else's discretion. This is not an argument against reach. It is the reason reach alone cannot be the foundation. *A foundation is the part that stays when the platform changes.*",
  },

  // 08 · Choosing the channel
  {
    kind: "cards",
    id: "m7-choosing",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "08",
    audio: { src: null },
    eyebrow: "Choosing the channel",
    heading: "The channel is a *means*. Choose it for fit.",
    intro:
      "An owned channel is usually an email list, because email is the clearest case of a direct line you control. But the principle is the direct line, not the tool. The right channel is the one you will actually keep, and that is a question of fit, not fashion.",
    cards: [
      {
        label: "Fit to your audience",
        title: "Where they will accept contact",
        text: "A channel only works if your people will genuinely open it. The same audience that ignores email may read a text, and the reverse is just as true. Choose where they already *are*.",
      },
      {
        label: "Fit to your capacity",
        title: "What you can sustain",
        text: "A channel you can feed once a quarter beats one you abandon after a month. The right channel is sized to the hours you actually have, not the hours you wish you had.",
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
    audio: { src: null },
    eyebrow: "The first half of the work",
    heading: "Nobody owes you their *attention*.",
    sub: "A direct line is granted, not taken. Before anyone gives you one, they need a reason. This section is about what makes that reason real.",
  },

  // 10 · A reason, not a bribe
  {
    kind: "detail",
    id: "m7-reason",
    crumb: S3,
    tag: "DETAIL",
    number: "10",
    audio: { src: null },
    eyebrow: "The reason to join",
    heading: "A reason to join, not a *bribe* to.",
    cols: [
      {
        label: "The bribe",
        text: "A discount or a download, handed over to capture an address. It works once. It collects people who wanted the thing, not people who wanted you, and the list fills with addresses that never open again.",
      },
      {
        label: "The real reason",
        text: "An honest promise of something worth receiving: useful thinking, early notice, a perspective they value. It collects fewer people, and it collects the *right* ones.",
      },
      {
        label: "The test",
        text: "Would someone stay subscribed after they got the thing that made them join? If yes, the reason is real. If no, you built a funnel, not an audience.",
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
    audio: { src: null },
    eyebrow: "Joining and staying",
    heading: "The reason to join is the reason to *stay*.",
    paragraphs: [
      "A bribe and the thing that follows it are two different promises, so the audience leaves the moment the gap shows. When the reason to join and the reason to stay are the same promise, there is no gap to fall through.",
      "This is why earning and keeping a channel are not separate problems. The promise that earns someone's address is the same promise you spend the rest of the relationship keeping. Get the promise honest at the start, and the next section, sustaining it, becomes a question of *can* you, not whether you should.",
    ],
  },

  // 12 · Not a harvest
  {
    kind: "principle",
    id: "m7-harvest",
    crumb: S3,
    tag: "THE TAKEAWAY",
    number: "12",
    audio: { src: null },
    sans: true,
    eyebrow: "The bright line",
    headline: "An audience is not a resource you *harvest*.",
    sub: "The loudest advice in this space treats an owned audience as a yield: capture the most addresses, extract the most sales, optimize the funnel. It works for a while, and it teaches your audience that hearing from you means being sold to, so they stop hearing from you. An owned audience is people who let you stay in contact because the contact is worth having. *Treat it as a harvest and you get one season.*",
  },

  // 13 · A list is collected
  {
    kind: "principle",
    id: "m7-list-kept",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "13",
    audio: { src: null },
    sans: true,
    eyebrow: "The distinction that holds",
    headline: "A list is collected. An audience is *kept*.",
    sub: "A list is a count. It grows when you add names and it sits there whether or not you ever use it. An audience is a state of relationship: it exists only while the contact stays live and worth receiving. The same five hundred addresses can be either one. Which one they are depends entirely on what you do after they join. *Collecting is a moment. Keeping is the work.*",
  },

  // 14 · What would I send
  {
    kind: "cards",
    id: "m7-send",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "14",
    audio: { src: null },
    eyebrow: "Keeping the channel",
    heading: "The fear is \"what would I *send*?\"",
    intro:
      "The moment you decide an owned audience is worth building, the next thought arrives: I do not know what I would send them. It is the realest objection in the module, and it has a plain answer.",
    cards: [
      {
        label: "The answer to what",
        title: "Send the promise you made",
        text: "You already named the reason people joined. What you send is that reason, kept. Not news, not everything you know: the one useful thing you said they would get.",
      },
      {
        label: "The answer to how often",
        title: "A cadence you can hold",
        text: "Pick the rhythm you could sustain on your busiest realistic month, then commit to that. A quarter you keep beats a week you abandon. Under-commit on *purpose*.",
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
    audio: { src: null },
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
    audio: { src: null },
    eyebrow: "Five businesses, five honest answers",
    heading: "Same channel. *Different* weight.",
    leftLabel: "The business",
    rightLabel: "What an owned audience is, and how much it weighs",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Moderate, and quiet.",
        text: "Ethics rules out promotion, so her channel is a low-key professional update to past clients and referrers. Real, *restrained*, never a sales tool.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Minor. Say so.",
        text: "Repeat local work does not need a standing audience. A simple customer list for a seasonal reminder is the honest ceiling. Building more would be effort spent *against* fit.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Moderate, redefined.",
        text: "A couple is a client once. Her owned audience is not future buyers: it is past couples as referrers, and the planner and venue network.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Moderate-low.",
        text: "Patients finish and leave. An owned channel is a soft professional presence, a reason to return if something recurs, not a retention engine.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Primary.",
        text: "A discovery audience follows her for months before booking. A direct line to those people is the most natural owned audience of the five, and the highest-weight.",
      },
    ],
  },

  // 17 · On size
  {
    kind: "principle",
    id: "m7-size",
    crumb: S4,
    tag: "THE TAKEAWAY",
    number: "17",
    audio: { src: null },
    sans: true,
    eyebrow: "On size",
    headline: "Build the audience you can *answer*, not the one you can capture.",
    sub: "It is easy to collect more people than you can stay in honest contact with. That is not a head start, it is a debt: a room of people you promised something and went quiet on. The right size for an owned audience is set by the contact you can sustain, not the addresses you can gather. *A smaller audience you actually keep is the larger asset.*",
  },

  // 18 · The smallest real version
  {
    kind: "framework",
    id: "m7-smallest",
    crumb: S5,
    tag: "FRAMEWORK",
    number: "18",
    audio: { src: null },
    eyebrow: "If this feels like a lot",
    heading: "Start with the people you *already* have.",
    paragraphs: [
      "You are almost certainly not starting from zero. You have past clients, a network, people who already follow your work somewhere. An owned audience usually begins as the act of organizing people you already have, not gathering strangers you do not.",
      "The smallest real version is one channel, the people already within reach of it, and a cadence you are sure you can hold. That is a foundation. It can grow later. It cannot grow if it is never *built.*",
    ],
  },

  // 19 · The owned-audience plan
  {
    kind: "ownedAudience",
    id: "m7-tool",
    crumb: "MODULE 7 · CLOSING",
    tag: "TOOL",
    number: "19",
    audio: { src: null },
    eyebrow: "Now: plan your channel",
    heading: "Plan your *channel.*",
    paragraphs: [
      "You are making three decisions, and all three are sized to the capacity you actually have.",
      "Name the people you will start with. Name the one channel you will own. Name a cadence you are confident you can hold on a busy month.",
    ],
  },

  // 20 · Closing bridge
  {
    kind: "prose",
    id: "m7-bridge",
    crumb: "MODULE 7 · END",
    tag: "NEXT: AUTHORITY BUILDING",
    number: "20",
    audio: { src: null },
    surface: "plum",
    eyebrow: "End of Module 7",
    heading: "You can *reach* them now.",
    paragraphs: [
      "You have a direct line to the right people, on your own terms. The last question is what they think when they hear from you. Being reachable is not yet being trusted as the expert. Authority Building, Module 8.",
    ],
  },
];
