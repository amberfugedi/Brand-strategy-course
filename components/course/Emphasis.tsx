"use client";

import { Rich } from "@/components/Rich";
import { PersonaAvatar } from "@/components/slides/PersonaAvatar";

/**
 * The course's one emphasis device. A line the lesson wants to lean on:
 * an aside the voice adds, a framework's closing thought, a note to
 * hold onto while working. It sits in the slide's own column, never
 * over the content or the player controls, and it stays quiet: a pale
 * ground, one thin rule, barely any corner, no shadow.
 *
 * It carries no standing label. These statements do different jobs
 * from lesson to lesson, so a blanket heading would misdescribe most
 * of them. A label is passed only where the content genuinely reads as
 * one, and stays in the small set the brand guide names.
 *
 * Short statements take the brand serif italic, the voice on the page.
 * Longer or instructional ones take the body font, because an italic
 * serif paragraph is harder to read and reads as a flourish rather
 * than an instruction.
 */
export type EmphasisLabel = "Remember" | "Important" | "Try this";

/** Past this, an italic serif line stops being a phrase and becomes a
 *  paragraph, so the body font takes over. */
const SERIF_LIMIT = 82;

export function Emphasis({
  text,
  label,
  who,
  dark = false,
  font,
  className = "",
}: {
  text: string;
  label?: EmphasisLabel;
  /** The persona a spoken example refers to. */
  who?: string;
  dark?: boolean;
  /** Overrides the length rule when a short line is an instruction. */
  font?: "serif" | "body";
  className?: string;
}) {
  const serif = font ? font === "serif" : text.length <= SERIF_LIMIT;

  return (
    <div
      className={`rounded-[4px] border-l-2 px-4 py-3 sm:px-5 sm:py-3.5 ${
        dark
          ? "border-gold/70 bg-cream/[0.06]"
          : "border-gold/70 bg-butter/40"
      } ${className}`}
    >
      {label ? (
        <div
          className={`mb-1.5 text-[10px] font-bold uppercase tracking-eyebrow ${
            dark ? "text-gold" : "text-gold"
          }`}
        >
          {label}
        </div>
      ) : null}
      <div className="flex items-start gap-3.5">
        {who ? (
          <span className="mt-0.5 shrink-0">
            <PersonaAvatar name={who} size={32} />
          </span>
        ) : null}
        <p
          className={
            serif
              ? `font-serif text-[15.5px] italic leading-snug sm:text-[16.5px] lg:text-[17.5px] ${
                  dark ? "text-cream" : "text-body"
                }`
              : `text-[14.5px] leading-relaxed sm:text-[15px] lg:text-[15.5px] ${
                  dark ? "text-on-dark/85" : "text-body-secondary"
                }`
          }
        >
          <Rich text={text} />
        </p>
      </div>
    </div>
  );
}
