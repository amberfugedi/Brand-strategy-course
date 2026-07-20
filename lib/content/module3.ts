import { Slide } from "./types";

/**
 * Module 3: Get found. 25 slides, copy verbatim from the produced
 * deck; the script confirms every on-slide line. The deck's tool
 * moment (slide 24) is the in-app touchpoint priority builder, and
 * the deck's placeholder landscape graphic (slide 6) is realized as
 * the branded zone map its spec describes.
 */

const S1 = "MODULE 3 · SECTION 1";
const S2 = "MODULE 3 · SECTION 2";
const S3 = "MODULE 3 · SECTION 3";
const S4 = "MODULE 3 · SECTION 4";

export const module3Slides: Slide[] = [
  // 01 · Module opener
  {
    kind: "hero",
    id: "m3-title",
    crumb: "BUILD YOUR MARKETING FOUNDATION",
    tag: "MODULE 3 · GET FOUND",
    number: "01",
    audio: { src: null },
    surface: "plum",
    eyebrow: "Module 3",
    heading: "Get *found*.",
    sub: "How prospects find you, and what they meet when they do. The places you exist online, and the local layer that matters when the search is geographic.",
    meta: [
      { label: "Length", value: "25 minutes" },
      { label: "Output", value: "Your touchpoint priority" },
      { label: "Module", value: "3 of 8" },
    ],
  },

  // 02 · Not a website. A system.
  {
    kind: "frame",
    id: "m3-system",
    crumb: S1,
    tag: "FRAME",
    number: "02",
    audio: { src: null },
    eyebrow: "What it is, what it isn't",
    heading: "Not a website. *A system.*",
    sub: "Getting found isn't one thing you build. It's the set of places a prospect meets you when they go looking, online and, for many businesses, locally.",
  },

  // 03 · The concept
  {
    kind: "framework",
    id: "m3-concept",
    crumb: S1,
    tag: "FRAMEWORK",
    number: "03",
    audio: { src: null },
    eyebrow: "The concept",
    heading: "Getting found is the sum of where you *show up* when someone looks.",
    paragraphs: [
      "A prospect has a need and goes looking. Your website is one place they might land. So is your Google listing. So is the Instagram post a friend sent them, the directory entry on a marketplace, the map result when they search nearby.",
      "The strategic question isn't \"do I have a website.\" It's: which of these places does your business actually need to do well, and which can stay minimal? That's what this module works out.",
    ],
  },

  // 04 · Five touchpoints. Five jobs.
  {
    kind: "frame",
    id: "m3-five-open",
    crumb: S2,
    tag: "TOUCHPOINTS",
    number: "04",
    audio: { src: null },
    eyebrow: "The map",
    heading: "Five touchpoints. *Five jobs.*",
    sub: "Each touchpoint answers a different question for the prospect. Knowing the questions is how you decide what each one needs to do.",
  },

  // 05 · Five places, five questions answered
  {
    kind: "cards",
    id: "m3-five-cards",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "05",
    audio: { src: null },
    eyebrow: "The five touchpoints",
    heading: "Five places, five *questions* answered.",
    cards: [
      {
        label: "Touchpoint 01",
        title: "Your website",
        text: "The place that holds *everything* about you. Positioning, proof, and the case for choosing you.",
      },
      {
        label: "Touchpoint 02",
        title: "Search & map listings",
        text: "The place a prospect *finds* you when they don't yet know your name. Google Business Profile, Apple Maps.",
      },
      {
        label: "Touchpoint 03",
        title: "Social platforms",
        text: "The place a prospect *sees* you before they're looking. Instagram, LinkedIn, TikTok, wherever your audience already is.",
      },
      {
        label: "Touchpoint 04",
        title: "Third-party listings",
        text: "The places someone else *vouches* for you. Yelp, OpenTable, Psychology Today, industry directories.",
      },
      {
        label: "Touchpoint 05",
        title: "Online communities",
        text: "The places your prospect *participates*. Facebook groups, Reddit, Discord, niche forums. You show up as a peer.",
      },
    ],
  },

  // 06 · The landscape map (realized from the deck's placeholder spec)
  {
    kind: "map",
    id: "m3-map",
    crumb: S2,
    tag: "MAP",
    number: "06",
    audio: { src: null },
    eyebrow: "Where the words you've heard live",
    heading: "A map of *where you can get found*.",
    intro:
      "SEO, AEO, Google Business Profile, Yelp, Instagram, ads. None of them is a separate touchpoint. They all live inside the five you just saw.",
  },

  // 07 · Website detail
  {
    kind: "detail",
    id: "m3-tp-website",
    crumb: S2,
    tag: "TOUCHPOINT 01",
    number: "07",
    audio: { src: null },
    eyebrow: "Your website",
    heading: "The *full* picture.",
    cols: [
      {
        label: "What it does",
        text: "Carries positioning, proof, pricing, process, and a way to take the next step. The place that holds everything a prospect might want to know once they've found you elsewhere. The depth touchpoint, when depth is needed. Email list lives downstream of this touchpoint, when the work calls for it.",
      },
      {
        label: "When it matters most",
        text: "When the buyer engages with your work over weeks or months before contact. When the work depends on visual or written proof. When the price tag warrants research.",
      },
      {
        label: "When it matters less",
        text: "When prospects find you through search and call within hours. When trust is established by social proof, not site content. When the work is quick, local, and price-comparable. For some businesses, a website is optional, or is just a booking page.",
      },
    ],
  },

  // 08 · Search & map detail
  {
    kind: "detail",
    id: "m3-tp-search",
    crumb: S2,
    tag: "TOUCHPOINT 02",
    number: "08",
    audio: { src: null },
    eyebrow: "Search & map listings",
    heading: "The *findable* you.",
    cols: [
      {
        label: "What it does",
        text: "Answers the question a prospect has before they know your name: who in my area does *this*. Carries hours, location, photos, reviews, and the basic facts.",
      },
      {
        label: "When it matters most",
        text: "When you're local-only or hybrid. When prospects search for the service before they search for the person. When category competition is dense and reviews are the differentiator.",
      },
      {
        label: "When it matters less",
        text: "When you're remote and clients find you through referral, content, or a specific marketplace. When category demand is satisfied by referral networks, not search.",
      },
    ],
  },

  // 09 · Social detail
  {
    kind: "detail",
    id: "m3-tp-social",
    crumb: S2,
    tag: "TOUCHPOINT 03",
    number: "09",
    audio: { src: null },
    eyebrow: "Social platforms",
    heading: "The *ambient* you.",
    cols: [
      {
        label: "What it does",
        text: "Answers the question a prospect didn't know they had: do I want to *follow* this person. Carries voice, taste, work-in-progress, and the texture of how you think.",
      },
      {
        label: "When it matters most",
        text: "When the work depends on visual proof. When discovery happens through shared interest, not search intent. When the buyer's audience overlaps with yours.",
      },
      {
        label: "When it matters less",
        text: "When prospects come from search, referral, or ethics-regulated channels. When the work isn't visual. When the platform's audience doesn't match your buyer's.",
      },
    ],
  },

  // 10 · Third-party detail
  {
    kind: "detail",
    id: "m3-tp-thirdparty",
    crumb: S2,
    tag: "TOUCHPOINT 04",
    number: "10",
    audio: { src: null },
    eyebrow: "Third-party listings",
    heading: "The *vouched-for* you.",
    cols: [
      {
        label: "What it does",
        text: "Answers the question a prospect asks in a marketplace context: is this person *legitimate*. Carries third-party validation, comparable to peers, framed by the platform.",
      },
      {
        label: "When it matters most",
        text: "When your industry has a dominant directory or marketplace (therapy, photography, home services). When prospects start their search inside a specific platform.",
      },
      {
        label: "When it matters less",
        text: "When your industry has no dominant marketplace. When prospects find you through Google or referral. When the platform's framing dilutes your positioning rather than amplifies it.",
      },
    ],
  },

  // 11 · Communities detail
  {
    kind: "detail",
    id: "m3-tp-communities",
    crumb: S2,
    tag: "TOUCHPOINT 05",
    number: "11",
    audio: { src: null },
    eyebrow: "Online communities",
    heading: "The *in-the-room* you.",
    cols: [
      {
        label: "What it does",
        text: "Answers the question a prospect asks once they're already participating in a space: who in this group is worth knowing. Trust accrues over time through peer-level *presence*, not pitch.",
      },
      {
        label: "When it matters most",
        text: "When your prospects participate in well-defined online communities (Facebook groups, Reddit, Discord, niche forums). When the buying decision involves long peer research. When word-of-mouth in those spaces drives inquiries.",
      },
      {
        label: "When it matters less",
        text: "When your prospects don't gather in online communities. When discovery happens through search, referral, or marketplace. When the time required to maintain genuine community presence exceeds your capacity.",
      },
    ],
  },

  // 12 · LLM principle
  {
    kind: "principle",
    id: "m3-llms",
    crumb: S2,
    tag: "PRINCIPLE",
    number: "12",
    audio: { src: null },
    sans: true,
    eyebrow: "Who else is reading",
    headline: "Your touchpoints aren't just being read by *people*.",
    sub: "Increasingly, LLMs synthesize answers about service businesses from the same five touchpoints. The way to be visible to LLMs is the same way to be visible to humans: be clear, be specific, be named consistently across *every* touchpoint where you appear.",
  },

  // 13 · Local section opener (skippable)
  {
    kind: "frame",
    id: "m3-local-open",
    crumb: S3,
    tag: "LOCAL",
    number: "13",
    audio: { src: null },
    eyebrow: "For local businesses · skip if this isn't you",
    heading: "If your buyers are *local*.",
    sub: "The next three slides are for businesses whose clients are nearby: a service area, a city, a neighborhood. If you work remotely or sell nationally, skip ahead to the calibration section.",
    skip: { label: "My buyers aren't local. Skip ahead", to: 17 },
  },

  // 14 · The four local jobs
  {
    kind: "cards",
    id: "m3-local-jobs",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "14",
    audio: { src: null },
    eyebrow: "The local layer",
    heading: "Local presence is a *job*, not a touchpoint.",
    intro:
      "For a local business, several of your touchpoints take on a local job. The work isn't a separate place to build. It's four things done well across the touchpoints you already have.",
    cards: [
      {
        label: "Local job 01",
        title: "A claimed, complete profile",
        text: "Your Google Business Profile, claimed and filled out properly. For most local businesses this is the *single* highest-leverage piece of online presence. It feeds the map and the local results.",
      },
      {
        label: "Local job 02",
        title: "Consistent details everywhere",
        text: "Name, address, phone, the same on every touchpoint. Search engines read inconsistency as *uncertainty*, and uncertainty costs you local ranking.",
      },
      {
        label: "Local job 03",
        title: "Location named, not implied",
        text: "The places you serve, stated in plain words on your website and listings. A prospect and a search engine should both know where you work without having to *guess*.",
      },
      {
        label: "Local job 04",
        title: "Reviews on the profile that ranks",
        text: "Reviews on your Google Business Profile do double duty: they persuade the prospect, and they lift the profile in the local results. Earned proof and local *visibility*, the same act.",
      },
    ],
  },

  // 15 · Weak vs strong local
  {
    kind: "compare",
    id: "m3-local-compare",
    crumb: S3,
    tag: "CALIBRATION",
    number: "15",
    audio: { src: null },
    eyebrow: "Weak vs. strong, on a Google Business Profile",
    heading: "What does *strong* local presence look like?",
    weak: {
      quote: "The listing exists.",
      text: "Auto-generated, never claimed. Category vague or wrong. Hours blank or out of date. No photos. Three reviews from years ago. A prospect finds it and isn't sure the business is still open.",
    },
    strong: {
      quote: "It answers the question before they ask.",
      text: "Claimed, exact category, current hours, real photos, service area named. Recent reviews the owner has responded to. A prospect finds it and books, because every doubt was already *settled*.",
    },
  },

  // 16 · The local pattern
  {
    kind: "principle",
    id: "m3-local-pattern",
    crumb: S3,
    tag: "PRINCIPLE",
    number: "16",
    audio: { src: null },
    sans: true,
    eyebrow: "The local pattern",
    headline: "Being nearby gets you *listed*. Being verifiable gets you chosen.",
    sub: "Proximity puts you in the local results. It doesn't win the click. Between two businesses the same distance away, a prospect picks the one they can verify at a glance: real photos, current information, reviews that were answered. *Local presence is proximity plus proof, never proximity alone.*",
  },

  // 17 · Calibration opener
  {
    kind: "frame",
    id: "m3-yours-open",
    crumb: S3,
    tag: "CALIBRATION",
    number: "17",
    audio: { src: null },
    eyebrow: "Not the same for everyone",
    heading: "What does *yours* need?",
    sub: "The audit already told you. This section makes the connection explicit.",
  },

  // 18 · Audit signals
  {
    kind: "cards",
    id: "m3-audit-signals",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "18",
    audio: { src: null },
    eyebrow: "Audit signals",
    heading: "Your audit answers *already* told you which touchpoints matter.",
    cards: [
      {
        label: "Discovery channel · Q01",
        title: "Names the primary touchpoint",
        text: "Where current clients first hear about you is the touchpoint your business actually *uses*. Build there first.",
      },
      {
        label: "Visual proof · Q02",
        title: "Weights website + social",
        text: "If the work is visible, the website and social touchpoints carry more weight. If it isn't, they carry less.",
      },
      {
        label: "Geographic scope · Q05",
        title: "Weights search & map",
        text: "Local-only sharpens search & map's role. Remote diminishes it. Hybrid sits in between.",
      },
      {
        label: "Engagement length · Q06",
        title: "Weights website depth",
        text: "Long pre-contact engagement means the website has time to do real work. Short engagement means the website needs to be quick.",
      },
    ],
  },

  // 19 · Five businesses
  {
    kind: "table",
    id: "m3-five-businesses",
    crumb: S4,
    tag: "CALIBRATION",
    number: "19",
    audio: { src: null },
    eyebrow: "Five businesses, five answers",
    heading: "Same framework. *Different* answers.",
    leftLabel: "The business",
    rightLabel: "Primary touchpoint, why",
    rows: [
      {
        name: "Maya",
        meta: "therapist · ethics-regulated",
        lead: "Third-party directory.",
        text: "Whether that's an insurance provider directory or a private-pay directory like Psychology Today. The directory does discovery and first-round trust. The website confirms what she's already established there. Ethics rules limit social.",
      },
      {
        name: "Marcus",
        meta: "pressure washer · local",
        lead: "Search & map.",
        text: "Prospects find him by Googling \"pressure washing near me.\" He needs a strong Google Business Profile with reviews. The website is the second touchpoint, not the first.",
      },
      {
        name: "Lena",
        meta: "wedding photographer · visual",
        lead: "Website.",
        text: "Visual proof drives the decision. Long engagement, considered purchase. And Instagram as a strong *second*. Discovery happens there. Decision happens on the site.",
      },
      {
        name: "James",
        meta: "chiropractor · local",
        lead: "Search & map.",
        text: "Prospects search before they know his name. But local Facebook groups and NextDoor matter too. \"Anyone know a good chiropractor in [city]\" gets asked and answered there constantly. Community presence as a strong *second*.",
      },
      {
        name: "Sasha",
        meta: "vivids stylist · audience-driven",
        lead: "Instagram.",
        text: "Discovery, decision, and proof all happen on social. The website exists as a booking interface. The persuasion has already happened.",
      },
    ],
  },

  // 20 · Load-bearing principle
  {
    kind: "principle",
    id: "m3-load-bearing",
    crumb: S4,
    tag: "PRINCIPLE",
    number: "20",
    audio: { src: null },
    sans: true,
    eyebrow: "The pattern",
    headline: "Your primary touchpoint is *load-bearing*.",
    sub: "Whichever one it is, that's the touchpoint that carries the heaviest weight across the prospect's journey, even when secondaries assist. The other four can each do narrower jobs. Build the primary so it holds *everything* it has to. Let the others do less.",
  },

  // 21 · On restraint
  {
    kind: "principle",
    id: "m3-restraint",
    crumb: S4,
    tag: "PRINCIPLE",
    number: "21",
    audio: { src: null },
    sans: true,
    eyebrow: "On restraint",
    headline: "More presence is not *better* presence.",
    sub: "Two touchpoints maintained well do more for your business than five touchpoints maintained badly. A neglected touchpoint signals worse than no touchpoint at all. *Match presence to capacity.*",
  },

  // 22 · Weak vs strong primary
  {
    kind: "compare",
    id: "m3-strong-compare",
    crumb: S4,
    tag: "CALIBRATION",
    number: "22",
    audio: { src: null },
    eyebrow: "Weak vs. strong, on your primary touchpoint",
    heading: "What does *strong* look like?",
    weak: {
      quote: "It exists.",
      text: "A site is up. The positioning is generic. The proof is missing or thin. Pricing isn't stated. Next step isn't obvious. The visitor leaves to look elsewhere.",
    },
    strong: {
      quote: "It does the *job*.",
      text: "The positioning is specific enough that two competitors couldn't write the same about page. The proof is current. Pricing or process is named. The next step is one click. The visitor either books or self-selects out.",
    },
  },

  // 23 · Buyer behavior principle
  {
    kind: "principle",
    id: "m3-behavior",
    crumb: S4,
    tag: "PRINCIPLE",
    number: "23",
    audio: { src: null },
    sans: true,
    eyebrow: "On honest assessment",
    headline: "The buyer decides which touchpoint matters by *behavior*.",
    sub: "Not by your wish. Not by what you're best at producing. The audit's discovery channel question caught this. If clients find you through search, search matters more than the social channel you'd prefer to invest in. *Build where they are.*",
  },

  // 24 · The touchpoint priority builder
  {
    kind: "touchpoints",
    id: "m3-tool",
    crumb: "MODULE 3 · CLOSING",
    tag: "TOOL",
    number: "24",
    audio: { src: null },
    eyebrow: "Now: name your touchpoints",
    heading: "Name your *primary*.",
    paragraphs: [
      "Mark which of the five touchpoints applies to your business, then set the priority order. The first one is your primary.",
      "Use your audit answers as the guide. Don't pick your favorite. Pick what's already working.",
    ],
  },

  // 25 · Closing bridge
  {
    kind: "prose",
    id: "m3-bridge",
    crumb: "MODULE 3 · END",
    tag: "NEXT: EARNED PROOF",
    number: "25",
    audio: { src: null },
    surface: "plum",
    eyebrow: "End of Module 3",
    heading: "You know where you get *found*.",
    paragraphs: [
      "Next: what a prospect meets once they've found you, and whether it earns their trust. Earned Proof. Module 4 begins when you're ready.",
    ],
  },
];
