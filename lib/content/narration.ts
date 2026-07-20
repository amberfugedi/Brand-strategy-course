/**
 * Module-level narration tracks, for a module whose recording is one
 * continuous take. Per-slide narration is preferred and lives on each
 * slide's audio.src (see intro.ts); a module listed here instead
 * plays one track continuously across its slides. Currently empty:
 * the intro narration is split per slide.
 */
export const moduleNarration: Record<string, string> = {};
