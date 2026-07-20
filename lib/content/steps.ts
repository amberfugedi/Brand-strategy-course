import { Slide } from "./types";

/**
 * How many internal beats a slide builds through before Next moves to
 * the following slide. Mirrors the pacing the voiceover will carry:
 * each press reveals the next thought. Interactive and single-moment
 * slides have no beats.
 */
export function stepsOf(slide: Slide): number {
  switch (slide.kind) {
    case "question":
      return slide.lines.length + (slide.post ? 1 : 0);
    case "framework":
      return slide.paragraphs.length + (slide.callout ? 1 : 0);
    case "patterns":
      return slide.patterns.length;
    case "columns":
      return slide.columns.length;
    case "examples":
      return slide.personas.length;
    case "rows":
      return slide.rows.length;
    case "structure":
      return slide.rows.length;
    case "statements":
      return slide.statements.length;
    case "system":
      return slide.layers.length;
    case "prose":
      return (slide.quote ? 1 : 0) + slide.paragraphs.length;
    case "cardList":
      return 1;
    default:
      return 0;
  }
}
