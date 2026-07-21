/**
 * Slide definitions. Slides are data; the player renders them through
 * variant components keyed by `kind`. Text strings support one inline
 * convention: *word* renders in the brand serif italic accent.
 */

export type Surface = "cream" | "plum" | "ink";

/** The deck's own slide taxonomy (top-right tag in the produced deck). */
export type SlideTag =
  | "diagnostic"
  | "framework"
  | "calibration"
  | "principle"
  | "exercise"
  | "structure"
  | "question"
  | "reading"
  | "tool"
  | "bridge"
  | "setup"
  | "output"
  | "synthesis"
  | string;

export interface SlideAudio {
  /** Insertion point for the later audio pass. Null until recorded. */
  src: string | null;
}

interface SlideBase {
  id: string;
  /** Top-left chrome, e.g. "COURSE INTRO" or "MODULE 1 · SECTION 2" */
  crumb: string;
  /** Top-right chrome, e.g. "01 OF 05" or "FRAMEWORK" */
  tag: string;
  /** Footer page number, e.g. "i" or "12" */
  number: string;
  audio: SlideAudio;
}

/** Module or course opener with the metadata strip at the bottom. */
export interface HeroSlide extends SlideBase {
  kind: "hero";
  surface: Surface;
  eyebrow: string;
  heading: string;
  sub: string;
  meta: { label: string; value: string }[];
}

/** The three-layer, seven-foundation system diagram (intro slide ii). */
export interface SystemSlide extends SlideBase {
  kind: "system";
  eyebrow: string;
  heading: string;
  layers: {
    label: string;
    accent: "teal" | "rust" | "olive";
    sub: string;
    items: { num: string; text: string }[];
  }[];
  /** The foundation beneath the layers: positioning, rendered as a
   *  full-width base row under the three columns. */
  base?: { label: string; text: string };
}

/** Heading + prose + a single bordered card with a list (intro slide iii). */
export interface CardListSlide extends SlideBase {
  kind: "cardList";
  eyebrow: string;
  heading: string;
  intro?: string;
  card: {
    title: string;
    subtitle: string;
    items: string[];
  };
}

/** Stacked rows with a left border and label column (intro slide iv). */
export interface RowsSlide extends SlideBase {
  kind: "rows";
  eyebrow: string;
  heading: string;
  rows: { label: string; text: string }[];
}

/** Eyebrow + heading + optional quote bar + paragraphs (intro slide v). */
export interface ProseSlide extends SlideBase {
  kind: "prose";
  surface?: Surface;
  eyebrow: string;
  heading: string;
  quote?: string;
  paragraphs: string[];
}

/** Dark plum section-question slide: small line, large lines, small line. */
export interface QuestionSlide extends SlideBase {
  kind: "question";
  pre?: string;
  lines: string[];
  post?: string;
}

/** Teaching slide: eyebrow, heading, optional subline, paragraphs,
 *  optional teal-bordered callout card. */
export interface FrameworkSlide extends SlideBase {
  kind: "framework";
  eyebrow: string;
  heading: string;
  sub?: string;
  paragraphs: string[];
  callout?: string;
}

/** Weak-pattern calibration: label + quote visible, diagnosis revealed
 *  on interaction. */
export interface PatternsSlide extends SlideBase {
  kind: "patterns";
  eyebrow: string;
  heading: string;
  patterns: { label: string; quote: string; diagnosis: string }[];
}

/** Numbered concept columns (three across, or four in a 2x2 grid). */
export interface ColumnsSlide extends SlideBase {
  kind: "columns";
  eyebrow: string;
  heading: string;
  columns: { num: string; title: string; text: string }[];
}

/** Five persona cards in the deck's 3-2 grid; the annotation line
 *  reveals on interaction. */
export interface ExamplesSlide extends SlideBase {
  kind: "examples";
  eyebrow: string;
  heading: string;
  personas: {
    name: string;
    role: string;
    meta?: string;
    quote: string;
    note: string;
  }[];
}

/** Near-black centered principle slide with hairline rules. The
 *  Module 1 and 2 decks set the headline in serif; Module 3 onward
 *  sets it in bold sans (sans: true). */
export interface PrincipleSlide extends SlideBase {
  kind: "principle";
  eyebrow?: string;
  headline: string;
  sub: string;
  sans?: boolean;
}

/** Plum section divider with a serif display heading (Module 3+). */
export interface FrameSlide extends SlideBase {
  kind: "frame";
  eyebrow?: string;
  heading: string;
  sub?: string;
  /** An optional branch for buyers the coming section doesn't apply
   *  to: a quiet button that jumps to the given slide number. */
  skip?: { label: string; to: number };
}

/** Grid of small cards: label, title, text. Lays out 3-2 for five,
 *  2x2 for four, single row otherwise. */
export interface CardsSlide extends SlideBase {
  kind: "cards";
  eyebrow: string;
  heading: string;
  intro?: string;
  cards: { label: string; title: string; text: string }[];
  footnote?: string;
}

/** Touchpoint or source detail: three labeled columns. */
export interface DetailSlide extends SlideBase {
  kind: "detail";
  eyebrow: string;
  heading: string;
  cols: { label: string; text: string }[];
}

/** Weak versus strong comparison, two cards side by side. */
export interface CompareSlide extends SlideBase {
  kind: "compare";
  eyebrow: string;
  heading: string;
  weak: { quote: string; text: string };
  strong: { quote: string; text: string };
}

/** The five-businesses calibration table. */
export interface TableSlide extends SlideBase {
  kind: "table";
  eyebrow: string;
  heading: string;
  leftLabel: string;
  rightLabel: string;
  rows: { name: string; meta: string; lead: string; text: string }[];
}

/** Module 3: the landscape map of the five touchpoint zones. */
export interface MapSlide extends SlideBase {
  kind: "map";
  eyebrow: string;
  heading: string;
  intro: string;
}

/** Module 3 tool: mark and order the touchpoints that apply. */
export interface TouchpointsSlide extends SlideBase {
  kind: "touchpoints";
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

/** Module 4 tool: the proof inventory across the three sources. */
export interface ProofInventorySlide extends SlideBase {
  kind: "proofInventory";
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

/** Module 5 tool: one source walked through Earn, Ask, Keep. */
export interface ReferralMapSlide extends SlideBase {
  kind: "referralMap";
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

/** Module 6 tool: weight, one place, condition checks, cadence. */
export interface PresencePlanSlide extends SlideBase {
  kind: "presencePlan";
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

/** Module 7 tool: people, channel, cadence. */
export interface OwnedAudienceSlide extends SlideBase {
  kind: "ownedAudience";
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

/** Module 8: identify which kind of authority is already yours. */
export interface AuthorityKindSlide extends SlideBase {
  kind: "authorityKind";
  eyebrow: string;
  heading: string;
  intro: string;
}

/** Module 8 capstone: sort the seven foundations into First, Next,
 *  Later, with everything gathered across the course in view. */
export interface FoundationPlanSlide extends SlideBase {
  kind: "foundationPlan";
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

/** Dark plum module-structure table. */
export interface StructureSlide extends SlideBase {
  kind: "structure";
  eyebrow: string;
  heading: string;
  rows: { label: string; title: string; minutes: string }[];
}

/** The framework builder moments. Fields save to the course document. */
export interface ExerciseSlide extends SlideBase {
  kind: "exercise";
  heading: string;
  promptLines: string[];
  exercise: "serve" | "work" | "different";
}

/** Section 5: template card plus the buyer's editable statement. */
export interface SynthesisSlide extends SlideBase {
  kind: "synthesis";
  eyebrow: string;
  heading: string;
  template: string;
  note: string;
}

/** Assembled persona positioning statements (one or two cards). */
export interface StatementsSlide extends SlideBase {
  kind: "statements";
  eyebrow: string;
  heading: string;
  statements: { name: string; role: string; text: string }[];
}

/** End of module: the buyer's completed framework, rendered and saved. */
export interface SummarySlide extends SlideBase {
  kind: "summary";
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

/** Module 2: the six diagnostic questions, answered in place. */
export interface DiagnosticSlide extends SlideBase {
  kind: "diagnostic";
  eyebrow: string;
  heading: string;
  intro: string;
}

/** Module 2: tier meanings plus the buyer's computed priority order. */
export interface PrioritiesSlide extends SlideBase {
  kind: "priorities";
  eyebrow: string;
  heading: string;
  tiers: { label: string; text: string }[];
}

/** Module 2: the tailored audit, depth varying by priority. */
export interface AuditSlide extends SlideBase {
  kind: "audit";
  eyebrow: string;
  heading: string;
  intro: string;
}

/** Module 2: gap tier meanings plus the buyer's computed Gap List. */
export interface GapListSlide extends SlideBase {
  kind: "gaplist";
  eyebrow: string;
  heading: string;
  tiers: { label: string; text: string }[];
}

/** Module 2: plum output slide revealing the computed starting point. */
export interface StartingPointSlide extends SlideBase {
  kind: "startingPoint";
  pre?: string;
  lines: string[];
  post?: string;
}

/** Module 2: everything the module produced, compiled in one place. */
export interface PlanSlide extends SlideBase {
  kind: "plan";
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

export type Slide =
  | HeroSlide
  | SystemSlide
  | CardListSlide
  | RowsSlide
  | ProseSlide
  | QuestionSlide
  | FrameworkSlide
  | PatternsSlide
  | ColumnsSlide
  | ExamplesSlide
  | PrincipleSlide
  | StructureSlide
  | ExerciseSlide
  | SynthesisSlide
  | StatementsSlide
  | SummarySlide
  | DiagnosticSlide
  | PrioritiesSlide
  | AuditSlide
  | GapListSlide
  | StartingPointSlide
  | PlanSlide
  | FrameSlide
  | CardsSlide
  | DetailSlide
  | CompareSlide
  | TableSlide
  | MapSlide
  | TouchpointsSlide
  | ProofInventorySlide
  | ReferralMapSlide
  | PresencePlanSlide
  | OwnedAudienceSlide
  | AuthorityKindSlide
  | FoundationPlanSlide;

export interface ModuleDef {
  id: string;
  /** Short label used in navigation, sentence case. */
  label: string;
  /** Footer wordmark stays constant; this titles the module itself. */
  title: string;
  minutes: string;
  released: boolean;
  /** Module id that must be completed before this one opens. */
  requires?: string;
  slides: Slide[];
}
