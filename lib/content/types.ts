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

export type Slide =
  | HeroSlide
  | SystemSlide
  | CardListSlide
  | RowsSlide
  | ProseSlide;

export interface ModuleDef {
  id: string;
  /** Short label used in navigation, sentence case. */
  label: string;
  /** Footer wordmark stays constant; this titles the module itself. */
  title: string;
  minutes: string;
  released: boolean;
  slides: Slide[];
}
