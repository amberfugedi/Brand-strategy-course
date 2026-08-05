"use client";

import { useEffect, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";
import { PersonaAvatar } from "@/components/slides/PersonaAvatar";

interface Callout {
  text: string;
  at: number;
  until: number;
  card?: boolean;
  who?: string;
}

/**
 * A floating note that surfaces a spoken phrase while the voice says
 * it, then fades out. Two looks: the bare serif margin note for
 * editorial asides, and a bordered card for spoken examples. Purely
 * decorative alongside the narration (captions carry the verbatim
 * words), so it's hidden from assistive tech and never takes pointer
 * events. Sits bottom-right, clear of the caption bar's left-aligned
 * column.
 */
export function CalloutNote({
  callouts,
  dark,
}: {
  callouts: Callout[];
  dark: boolean;
}) {
  const { getTime } = useNarration();
  // The last active entry sticks around after its window closes so
  // the note fades out over its own words instead of vanishing empty.
  const [entry, setEntry] = useState<Callout | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const t = getTime();
      const active = callouts.find((c) => t >= c.at && t < c.until) ?? null;
      if (active) setEntry(active);
      setShown(Boolean(active));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [callouts, getTime]);

  const card = Boolean(entry?.card);
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute z-20 transition-all duration-500 ${
        // Phones: a solid full-width strip above the footer, so the
        // phrase never tangles with slide content. Larger screens:
        // the floating margin note or example card, bottom-right.
        "inset-x-4 bottom-[5.25rem] sm:inset-x-auto sm:bottom-28 sm:right-[4.5vw]"
      } ${
        card ? "sm:max-w-[380px]" : "sm:max-w-[280px] sm:text-right"
      } ${shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
    >
      {/* phone rendering: always a solid card */}
      <div
        className={`flex items-center gap-3 rounded-[14px] border-l-[3px] border-lilac px-4 py-3 sm:hidden ${
          dark
            ? "bg-[#312836] shadow-lift"
            : "border border-l-[3px] border-subtle border-l-lilac bg-cream-light shadow-lift"
        }`}
      >
        {entry?.who ? <PersonaAvatar name={entry.who} size={30} /> : null}
        <p
          className={`font-serif text-[14px] italic leading-snug ${
            dark ? "text-cream" : "text-body"
          }`}
        >
          {entry?.text}
        </p>
      </div>
      {/* larger screens */}
      <div className="hidden sm:block">
        {card ? (
          <div
            className={`flex items-center gap-3.5 rounded-[14px] border-l-[3px] border-lilac px-5 py-4 ${
              dark
                ? "bg-cream/5"
                : "border border-l-[3px] border-subtle border-l-lilac bg-cream-light shadow-lift"
            }`}
          >
            {entry?.who ? <PersonaAvatar name={entry.who} size={36} /> : null}
            <p
              className={`font-serif text-[17px] italic leading-relaxed ${
                dark ? "text-cream" : "text-body"
              }`}
            >
              {entry?.text}
            </p>
          </div>
        ) : (
          <>
            <div className="ml-auto h-px w-9 bg-gold" />
            <p
              className={`mt-3 font-serif text-[22px] italic leading-snug ${
                dark ? "text-cream" : "text-body"
              }`}
            >
              {entry?.text}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
