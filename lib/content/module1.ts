import { Slide } from "./types";

/**
 * Module 1: Your positioning. 36 slides. Copy is verbatim from the
 * produced deck (PDF slides 01 to 36). Interaction moments follow the
 * approved plan: calibration slides reveal their diagnosis on click,
 * persona examples reveal their annotation, exercises are guided
 * fields saving to the course document, section 5 assembles the
 * statement, and the closing tool slide renders the saved framework.
 */

const S1 = "MODULE 1 · SECTION 1";
const S2 = "MODULE 1 · SECTION 2";
const S3 = "MODULE 1 · SECTION 3";
const S4 = "MODULE 1 · SECTION 4";
const S5 = "MODULE 1 · SECTION 5";
const CLOSING = "MODULE 1 · CLOSING";

export const module1Slides: Slide[] = [
  // 01 · Module title
  {
    kind: "hero",
    id: "m1-title",
    crumb: "",
    tag: "",
    number: "01",
    audio: { src: null },
    surface: "plum",
    eyebrow: "Module 1",
    heading: "Your *positioning*.",
    sub: "Three questions every other foundation depends on. Twenty-five minutes. One working answer.",
    meta: [
      { label: "Length", value: "25 minutes" },
      { label: "Output", value: "Working positioning statement" },
      { label: "Module", value: "1 of 8" },
    ],
  },

  // 02 · The three questions
  {
    kind: "question",
    id: "m1-three-questions",
    crumb: S1,
    tag: "DIAGNOSTIC",
    number: "02",
    audio: { src: null },
    pre: "The three questions.",
    lines: ["Who do you serve.", "What do you do.", "What makes you *different*."],
    post: "That's the module.",
  },

  // 03 · Foundation-level positioning
  {
    kind: "framework",
    id: "m1-foundation-level",
    crumb: S1,
    tag: "FRAMEWORK",
    number: "03",
    audio: { src: null },
    eyebrow: "Why these three",
    heading: "Foundation-level *positioning*.",
    sub: "Not deep brand strategy.",
    paragraphs: [
      "A working answer to who you are, what you do, and what makes you you. Specific enough to write a website tagline, fill out a Google Business Profile, ask for the right kind of reviews.",
      "Not a polished brand. Not a final positioning statement you'd put on a billboard. *Enough to keep moving.*",
    ],
  },

  // 04 · The patterns of confusion
  {
    kind: "patterns",
    id: "m1-patterns-confusion",
    crumb: S1,
    tag: "CALIBRATION",
    number: "04",
    audio: { src: null },
    eyebrow: "Three patterns to watch for",
    heading: "The patterns of *confusion*.",
    patterns: [
      {
        label: "Pattern 1",
        quote: "\"Vagueness in the name of inclusivity.\"",
        diagnosis:
          "A vague answer feels safe but does no work. The cost of being too vague is being chosen by no one.",
      },
      {
        label: "Pattern 2",
        quote: "\"Generic differentiation.\"",
        diagnosis:
          "\"I care about quality.\" If your competitor could put it on their website word-for-word, it's not a differentiator.",
      },
      {
        label: "Pattern 3",
        quote: "\"Describing yourself instead of your service.\"",
        diagnosis:
          "\"I'm a chiropractor.\" That's a category. The service is what you actually do for a person.",
      },
    ],
  },

  // 05 · Module structure
  {
    kind: "structure",
    id: "m1-structure",
    crumb: S1,
    tag: "STRUCTURE",
    number: "05",
    audio: { src: null },
    eyebrow: "How this module works",
    heading: "Five sections. *Twenty-five minutes*.",
    rows: [
      { label: "Section 1", title: "The three questions", minutes: "5 min" },
      { label: "Section 2", title: "Who do you serve", minutes: "5 min" },
      { label: "Section 3", title: "What do you do", minutes: "5 min" },
      { label: "Section 4", title: "What makes you different", minutes: "7 min" },
      { label: "Section 5", title: "Pulling it together", minutes: "3 min" },
    ],
  },

  // 06 · Question 1
  {
    kind: "question",
    id: "m1-q1",
    crumb: S2,
    tag: "QUESTION 01",
    number: "06",
    audio: { src: null },
    pre: "The strategic audience.",
    lines: ["Who do you *serve?*"],
    post: "Not demographic. Operational.",
  },

  // 07 · Not demographic. Operational.
  {
    kind: "framework",
    id: "m1-operational",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "07",
    audio: { src: null },
    eyebrow: "The reframe",
    heading: "Not demographic. *Operational*.",
    paragraphs: [
      "The question isn't \"what age range and gender are my customers.\" That answer rarely changes a marketing decision.",
      "The real question: *when I imagine the person I most want walking through my door, what's specifically true about them?*",
    ],
    callout:
      "The test: *would two competitors answer this question identically?* If your answer applies to every business in your category, it's not specific enough.",
  },

  // 08 · Three answers that don't work
  {
    kind: "patterns",
    id: "m1-serve-weak",
    crumb: S2,
    tag: "CALIBRATION",
    number: "08",
    audio: { src: null },
    eyebrow: "Weak patterns",
    heading: "Three answers that *don't work*.",
    patterns: [
      {
        label: "Demographic-only",
        quote: "\"Women 35 to 55.\" \"Small business owners.\" \"Local homeowners.\"",
        diagnosis:
          "Describes a population, not a person. Every business in your category serves the same one.",
      },
      {
        label: "Needs-based without specificity",
        quote: "\"People who want quality work.\" \"People who care about results.\"",
        diagnosis:
          "Universal. No customer says they want bad work. Naming the obvious isn't naming your audience.",
      },
      {
        label: "Every customer you've ever had",
        quote: "The instinct to include everyone you've worked with.",
        diagnosis: "Inclusive, but a description of your past, not your strategy.",
      },
    ],
  },

  // 09 · Situation. Context. Problem.
  {
    kind: "columns",
    id: "m1-serve-framework",
    crumb: S2,
    tag: "FRAMEWORK",
    number: "09",
    audio: { src: null },
    eyebrow: "Three layers",
    heading: "Situation. Context. *Problem*.",
    columns: [
      {
        num: "01",
        title: "The situation",
        text: "Where they are in their life or business. *A solo professional. A growing team. A homeowner of five years.*",
      },
      {
        num: "02",
        title: "The context",
        text: "Not the demographic, the active context. *What they're doing day-to-day that brings them to need your service.*",
      },
      {
        num: "03",
        title: "The problem",
        text: "What pulled them to look for someone like you. *The problem under the problem.*",
      },
    ],
  },

  // 10 · Who do you serve, five examples
  {
    kind: "examples",
    id: "m1-serve-examples",
    crumb: S2,
    tag: "CALIBRATION",
    number: "10",
    audio: { src: null },
    eyebrow: "Strong answers across five service businesses",
    heading: "Who do you *serve*.",
    personas: [
      {
        name: "Maya,",
        role: "therapist",
        meta: "Solo private practice",
        quote:
          "\"High-functioning professionals — typically 30s to 50s, in demanding careers — who are managing chronic anxiety and want a therapist who treats them as competent adults rather than fragile.\"",
        note: "Situation, context, and the *problem under the problem*: they want to be treated as capable.",
      },
      {
        name: "Marcus,",
        role: "pressure washer",
        meta: "Side hustle, 1 year in",
        quote:
          "\"Homeowners who've owned their property at least three years and are starting to notice the buildup, but don't want to spend a Saturday on a ladder.\"",
        note: "The problem is *time, not money*. That framing differentiates from price-based competitors.",
      },
      {
        name: "Lena,",
        role: "photographer",
        meta: "18-25 weddings/year",
        quote:
          "\"Couples planning weddings in the four-to-eight-thousand-dollar photography range, who want a documentary style and have already decided their wedding doesn't need to be picture-perfect to be worth photographing.\"",
        note: "Specific budget tier. Style preference. *A values position* — they self-select.",
      },
      {
        name: "James,",
        role: "chiropractor",
        meta: "18 months independent",
        quote:
          "\"Adults who've had a recent injury or pain event and want to address it without a long-term care plan they didn't ask for.\"",
        note: "The problem under the problem: *they don't want to be sold ongoing care*.",
      },
      {
        name: "Sasha,",
        role: "vivids stylist",
        meta: "Solo studio, 4 years independent",
        quote:
          "\"Women in their 20s and 30s who've been growing out their hair for a vivid transformation, who care about color theory and hair health, and who'll travel an hour or more to find a stylist they trust with fashion color.\"",
        note: "Visual proof matters. Audience is specific. *They self-select on willingness to travel.*",
      },
    ],
  },

  // 11 · On the fear of narrowing
  {
    kind: "principle",
    id: "m1-narrowing",
    crumb: S2,
    tag: "PRINCIPLE",
    number: "11",
    audio: { src: null },
    eyebrow: "On the fear of narrowing",
    headline:
      "Naming a strategic audience doesn't mean turning away customers who walk through your door.",
    sub: "Specificity in marketing doesn't restrict your business. It only restricts your *marketing*.",
  },

  // 12 · Exercise: who do you serve
  {
    kind: "exercise",
    id: "m1-serve-exercise",
    crumb: S2,
    tag: "EXERCISE",
    number: "12",
    audio: { src: null },
    heading: "Write your *answer*.",
    promptLines: [
      "Take 30 seconds. Use the three-layer framework: situation, context, problem.",
      "Don't perfect it. *Get a working answer.*",
    ],
    exercise: "serve",
  },

  // 13 · Question 2
  {
    kind: "question",
    id: "m1-q2",
    crumb: S3,
    tag: "QUESTION 02",
    number: "13",
    audio: { src: null },
    pre: "The work itself.",
    lines: ["What do you *do?*"],
    post: "The action, not the category.",
  },

  // 14 · The work, not the category
  {
    kind: "framework",
    id: "m1-work-not-category",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "14",
    audio: { src: null },
    eyebrow: "The distinction",
    heading: "The work, *not the category*.",
    paragraphs: [
      "Most service business owners answer with their category. *I'm a chiropractor. I'm a wedding photographer. I'm a marketing consultant.*",
      "That's what you *are*. Not what you *do*.",
    ],
    callout:
      "The category locates you in a market. *The service is the work you perform on a person's behalf.*",
  },

  // 15 · Three patterns that fall short
  {
    kind: "patterns",
    id: "m1-work-weak",
    crumb: S3,
    tag: "CALIBRATION",
    number: "15",
    audio: { src: null },
    eyebrow: "Weak patterns",
    heading: "Three patterns that *fall short*.",
    patterns: [
      {
        label: "Category-only",
        quote: "\"I'm a chiropractor.\" \"I do branding.\" \"I clean houses.\"",
        diagnosis:
          "Accurate but inert. Tells the buyer what aisle of the marketplace you're in. Doesn't tell them what they're getting.",
      },
      {
        label: "Generic help statements",
        quote: "\"I help businesses grow.\" \"I help homeowners protect their investment.\"",
        diagnosis:
          "Substantive-sounding but empty. Every business in your category helps with the same general thing.",
      },
      {
        label: "Full-service language",
        quote: "\"I do everything from X to Y to Z.\"",
        diagnosis: "A price-sheet move, not a positioning move. The buyer doesn't need a menu.",
      },
    ],
  },

  // 16 · Action. Output. Change.
  {
    kind: "columns",
    id: "m1-work-framework",
    crumb: S3,
    tag: "FRAMEWORK",
    number: "16",
    audio: { src: null },
    eyebrow: "Three layers",
    heading: "Action. Output. *Change*.",
    columns: [
      {
        num: "01",
        title: "The action",
        text: "What you actually do. The verbs. *A chiropractor adjusts. A photographer captures and edits. A consultant audits and rebuilds.*",
      },
      {
        num: "02",
        title: "The output",
        text: "What the client walks away with. *A treatment plan and reduced pain. A complete wedding gallery. A documented strategy.*",
      },
      {
        num: "03",
        title: "The change",
        text: "What's true about the client's life that wasn't true before. *The client carries their child without flinching.*",
      },
    ],
  },

  // 17 · What do you do, five examples
  {
    kind: "examples",
    id: "m1-work-examples",
    crumb: S3,
    tag: "CALIBRATION",
    number: "17",
    audio: { src: null },
    eyebrow: "Strong answers across five service businesses",
    heading: "What do you *do*.",
    personas: [
      {
        name: "Maya",
        role: "therapist",
        quote:
          "\"Weekly fifty-minute sessions over three to twelve months, using cognitive behavioral methods adapted for high-performing professionals. Clients leave with tools and self-knowledge that doesn't require staying in therapy forever.\"",
        note: "The change is positioned *against open-ended therapy*.",
      },
      {
        name: "Marcus",
        role: "pressure washer",
        quote:
          "\"Cleaning exterior surfaces — siding, driveways, decks, fences — using commercial-grade equipment in a single visit, four to six hours on-site. The client walks out the next morning to a property that looks five years younger.\"",
        note: "Action specific. Output same-day. Change *visible and immediate*.",
      },
      {
        name: "Lena",
        role: "photographer",
        quote:
          "\"Documenting wedding days from morning preparation through reception, in candid documentary style with minimal posing. Clients receive a complete edited gallery within six weeks — typically four to six hundred images.\"",
        note: "The change: *the wedding's actual story, preserved*.",
      },
      {
        name: "James",
        role: "chiropractor",
        quote:
          "\"Assessing the source of the injury or pain in the first visit, then designing a treatment plan with a defined endpoint — usually six to twelve sessions. Patients leave with reduced pain and the strength to keep it from coming back.\"",
        note: "Output is *finite*, not subscription. Change is durable.",
      },
      {
        name: "Sasha",
        role: "vivids stylist",
        quote:
          "\"Color transformations using fashion colors — vivid reds, blues, pinks, neons — across single 6-to-10-hour sessions, with hair-health protocols that protect integrity through repeated processing. Clients walk out with the color they followed me on Instagram for, and the structural strength to maintain it.\"",
        note: "The change: *vivid color without compromising the hair underneath*.",
      },
    ],
  },

  // 18 · On describing your service
  {
    kind: "principle",
    id: "m1-describing",
    crumb: S3,
    tag: "PRINCIPLE",
    number: "18",
    audio: { src: null },
    eyebrow: "On describing your service",
    headline:
      "Describing your service specifically doesn't mean refusing services you also offer.",
    sub: "A vague description doesn't expand your business. It only makes your marketing *harder to remember*.",
  },

  // 19 · Exercise: what do you do
  {
    kind: "exercise",
    id: "m1-work-exercise",
    crumb: S3,
    tag: "EXERCISE",
    number: "19",
    audio: { src: null },
    heading: "Write your *answer*.",
    promptLines: [
      "Take 30 seconds. Use the three-layer framework: action, output, change.",
      "Don't perfect it. *Get a working answer.*",
    ],
    exercise: "work",
  },

  // 20 · Question 3
  {
    kind: "question",
    id: "m1-q3",
    crumb: S4,
    tag: "QUESTION 03",
    number: "20",
    audio: { src: null },
    pre: "The hardest of the three.",
    lines: ["What makes you *different?*"],
    post: "Different, not better.",
  },

  // 21 · Different. Not better.
  {
    kind: "framework",
    id: "m1-different-not-better",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "21",
    audio: { src: null },
    eyebrow: "The reframe",
    heading: "Different. *Not better*.",
    paragraphs: [
      "Most owners hear *what makes you different* and answer the question of *what makes you better*. Those are not the same question.",
      "Better is comparative and unverifiable. Different is descriptive and falsifiable. Different doesn't have to mean better — it often means narrower, slower, more honest, more selective, more specific.",
    ],
    callout:
      "The buyer's job isn't to decide which business is best. *It's to decide which business is for them.*",
  },

  // 22 · Three patterns that flatten
  {
    kind: "patterns",
    id: "m1-different-weak",
    crumb: S4,
    tag: "CALIBRATION",
    number: "22",
    audio: { src: null },
    eyebrow: "Weak patterns",
    heading: "Three patterns that *flatten*.",
    patterns: [
      {
        label: "Quality claims",
        quote:
          "\"I care about quality.\" \"I take a personal approach.\" \"I have high standards.\"",
        diagnosis: "Baseline expectations, not differentiators. The customer assumes these.",
      },
      {
        label: "Credentials as differentiation",
        quote:
          "\"15 years of experience.\" \"Certified in X.\" \"Worked with hundreds of clients.\"",
        diagnosis:
          "Credentials answer *should I trust you*, not *why should I choose you over someone else*.",
      },
      {
        label: "False uniqueness",
        quote:
          "\"I'm the only one who really understands my clients.\" \"Nobody does it like I do.\"",
        diagnosis:
          "Confidence with no evidence. The buyer can't verify it and shouldn't be expected to take it on faith.",
      },
    ],
  },

  // 23 · Approach. Constraint. Combination. Position.
  {
    kind: "columns",
    id: "m1-different-framework",
    crumb: S4,
    tag: "FRAMEWORK",
    number: "23",
    audio: { src: null },
    eyebrow: "Four sources of real differentiation",
    heading: "Approach. Constraint. Combination. *Position*.",
    columns: [
      {
        num: "01",
        title: "Approach",
        text: "A specific, named method or philosophy. *Not \"I'm thorough\" — but a named way of working.*",
      },
      {
        num: "02",
        title: "Constraint",
        text: "What you deliberately don't do. *Most competitors are afraid to constrain.*",
      },
      {
        num: "03",
        title: "Combination",
        text: "The specific combination of skills or background you bring. *Not the credentials, but how they combine.*",
      },
      {
        num: "04",
        title: "Position",
        text: "A clear stance against something common. *The thing you've explicitly rejected that competitors quietly do.*",
      },
    ],
  },

  // 24 · What makes you different, five examples
  {
    kind: "examples",
    id: "m1-different-examples",
    crumb: S4,
    tag: "CALIBRATION",
    number: "24",
    audio: { src: null },
    eyebrow: "Strong differentiators across five service businesses",
    heading: "What makes you *different*.",
    personas: [
      {
        name: "Maya",
        role: "therapist",
        quote:
          "\"Defined timeline with the explicit goal of ending therapy. Treats clients as competent adults who can handle directness, not fragile patients.\"",
        note: "*Constraint* + *approach*. Both push against category defaults.",
      },
      {
        name: "Marcus",
        role: "pressure washer",
        quote:
          "\"Shows up when he says he will. Completes the job in the window quoted. Doesn't upsell. The price you got is the price you pay.\"",
        note: "A *position* against the most common complaints customers have about contractors.",
      },
      {
        name: "Lena",
        role: "photographer",
        quote:
          "\"Documentary style only. Doesn't do extensive posing. 'If you want thirty staged photographs of the bridal party, I'm not the right photographer for you.'\"",
        note: "*Constraint* + *position*. The \"I'm not the right one\" line is the strongest move.",
      },
      {
        name: "James",
        role: "chiropractor",
        quote:
          "\"Defined treatment plan with a stated endpoint. Doesn't sell ongoing care plans, monthly memberships, or maintenance subscriptions. When the work is done, you stop coming.\"",
        note: "*Constraint* against the dominant business model in chiropractic care.",
      },
      {
        name: "Sasha",
        role: "vivids stylist",
        quote:
          "\"Vivids only. No balayage, no foils, no special-occasion blowouts. Hair-health-first protocol — including the willingness to refuse a transformation if I think the hair can't sustain it without damage.\"",
        note: "*Constraint* + *position*. The \"I'll refuse if it'll damage your hair\" is the strongest move.",
      },
    ],
  },

  // 25 · A common objection
  {
    kind: "principle",
    id: "m1-better-objection",
    crumb: S4,
    tag: "PRINCIPLE",
    number: "25",
    audio: { src: null },
    eyebrow: "A common objection",
    headline: "If you're better, the work is to find what you're *specifically* better at.",
    sub: "\"Better\" on its own is invisible. \"Better at producing X for Y kind of client\" is visible. *Most of the time, what you find is closer to different than to more of the same.*",
  },

  // 26 · The contrarian move
  {
    kind: "principle",
    id: "m1-contrarian",
    crumb: S4,
    tag: "PRINCIPLE",
    number: "26",
    audio: { src: null },
    eyebrow: "The contrarian move",
    headline: "What's the thing competitors in your category do *that you refuse to do?*",
    sub: "The strongest differentiators come from rejecting what's common. Maya rejected open-ended therapy. Marcus rejected upselling. Lena rejected staged posing. James rejected subscription care. Sasha rejected anything but vivids.",
  },

  // 27 · On being too direct
  {
    kind: "principle",
    id: "m1-repel",
    crumb: S4,
    tag: "PRINCIPLE",
    number: "27",
    audio: { src: null },
    eyebrow: "On being too direct",
    headline: "A sharp differentiator will turn off some prospects. *That's the point.*",
    sub: "If your differentiator doesn't repel anyone, it's probably not specific enough to attract anyone. A vague positioning attracts vague interest. *A sharp positioning attracts qualified interest.*",
  },

  // 28 · Exercise: your differentiator
  {
    kind: "exercise",
    id: "m1-different-exercise",
    crumb: S4,
    tag: "EXERCISE",
    number: "28",
    audio: { src: null },
    heading: "Write your *differentiator*.",
    promptLines: [
      "Take 45 seconds. Use one or more of the four sources: approach, constraint, combination, position.",
      "If you're stuck, ask the contrarian question: *what does my category do that I refuse to do?*",
    ],
    exercise: "different",
  },

  // 29 · Section 5 opener
  {
    kind: "question",
    id: "m1-synthesis-open",
    crumb: S5,
    tag: "THE SYNTHESIS",
    number: "29",
    audio: { src: null },
    pre: "What you take with you.",
    lines: ["A positioning statement *that does real work.*"],
    post: "Three answers, one sentence, four minutes.",
  },

  // 30 · Three answers. One sentence. (the assembly moment)
  {
    kind: "synthesis",
    id: "m1-assemble",
    crumb: S5,
    tag: "FRAMEWORK",
    number: "30",
    audio: { src: null },
    eyebrow: "Pulling it together",
    heading: "Three answers. *One sentence*.",
    template:
      "\"I serve *[who you serve]* who *[situation, context, problem]*. I *[the action, output, change]*. What makes me different is *[approach, constraint, combination, position]*.\"",
    note: "The shape isn't sacred. You can rearrange the order, change the verbs, make it sound like you. *The substance is what matters.*",
  },

  // 31 · Maya + Marcus assembled
  {
    kind: "statements",
    id: "m1-assemblies-1",
    crumb: S5,
    tag: "CALIBRATION",
    number: "31",
    audio: { src: null },
    eyebrow: "Working positioning statements",
    heading: "Two ways the framework *assembles*.",
    statements: [
      {
        name: "Maya",
        role: "Therapist",
        text: "\"I work with high-functioning professionals managing chronic anxiety while running demanding careers. I deliver therapy on a defined timeline using cognitive behavioral methods, with the explicit goal of giving clients tools they take with them — not extending the relationship indefinitely. What makes me different is that I treat my clients as competent adults rather than fragile patients.\"",
      },
      {
        name: "Marcus",
        role: "Pressure washer",
        text: "\"I serve homeowners who've owned their property at least three years and are starting to notice the buildup but don't want to spend a Saturday on a ladder. I clean exterior surfaces with commercial-grade equipment in a single visit, and the price you got is the price you pay. What makes me different is that I show up when I say I will, complete the job in the window I quoted, and don't upsell during the visit.\"",
      },
    ],
  },

  // 32 · Lena + James assembled
  {
    kind: "statements",
    id: "m1-assemblies-2",
    crumb: S5,
    tag: "CALIBRATION",
    number: "32",
    audio: { src: null },
    eyebrow: "Working positioning statements",
    heading: "Two more *assemblies*.",
    statements: [
      {
        name: "Lena",
        role: "Photographer",
        text: "\"I serve couples planning weddings in the four-to-eight-thousand-dollar photography range who want a documentary style. I document wedding days in a candid style with minimal posing and deliver a complete edited gallery within six weeks. What makes me different is that I shoot documentary, not staged — if you want thirty posed photographs of the bridal party, I'm not the right photographer for you.\"",
      },
      {
        name: "James",
        role: "Chiropractor",
        text: "\"I work with adults who've had a recent injury or pain event and want to address it without being sold a long-term care plan they didn't ask for. I assess the source in the first visit and design a treatment plan with a defined endpoint — usually six to twelve sessions. What makes me different is that I don't sell ongoing care plans or maintenance subscriptions. When the work is done, you stop coming.\"",
      },
    ],
  },

  // 33 · Sasha assembled
  {
    kind: "statements",
    id: "m1-assemblies-3",
    crumb: S5,
    tag: "CALIBRATION",
    number: "33",
    audio: { src: null },
    eyebrow: "And one more, with a different shape",
    heading: "A visual-first *assembly*.",
    statements: [
      {
        name: "Sasha",
        role: "Vivids stylist",
        text: "\"I serve women in their 20s and 30s who've been growing out their hair for a vivid transformation, who care about color theory and hair health. I do vivid color only — fashion colors across single 6-to-10-hour sessions, with hair-health protocols built in. What makes me different is that I'll refuse a transformation if I don't think the hair can sustain it. The color you see on my Instagram is the color you get, and the hair will still be hair when I'm done.\"",
      },
    ],
  },

  // 34 · The threshold for good enough
  {
    kind: "principle",
    id: "m1-threshold",
    crumb: S5,
    tag: "PRINCIPLE",
    number: "34",
    audio: { src: null },
    eyebrow: "The threshold for good enough",
    headline: "Specific enough that two competitors couldn't write the same sentence.",
    sub: "Foundation-level positioning. Not brand strategy. *The work this module does is enough to keep moving.*",
  },

  // 35 · Your framework, saved (stands in for the Map's Positioning tab)
  {
    kind: "summary",
    id: "m1-summary",
    crumb: CLOSING,
    tag: "TOOL",
    number: "35",
    audio: { src: null },
    eyebrow: "Your framework, saved",
    heading: "Your positioning *framework*.",
    paragraphs: [
      "This is where the rest of the course will reference it. Module 2's diagnostic uses it as context. Modules 3 through 7 reference it when you build mini-strategies for individual foundations.",
      "It saves automatically. Take a minute to read it back, then meet me in Module 2.",
    ],
  },

  // 36 · Bridge to Module 2
  {
    kind: "prose",
    id: "m1-bridge",
    crumb: CLOSING,
    tag: "BRIDGE",
    number: "36",
    audio: { src: null },
    surface: "plum",
    eyebrow: "You have your working positioning statement",
    heading: "Next: *the audit*.",
    paragraphs: [
      "Seven foundations. Three layers. An honest look at where your marketing actually stands.",
      "Take a breath. Then move to Module 2.",
    ],
  },
];
