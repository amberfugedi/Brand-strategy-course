"use client";

import { useEffect, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";

interface Callout {
  text: string;
  at: number;
  until: number;
  card?: boolean;
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
      className={`pointer-events-none absolute bottom-28 right-[4.5vw] z-20 transition-all duration-500 ${
        card ? "max-w-[300px] sm:max-w-[380px]" : "max-w-[240px] text-right sm:max-w-[280px]"
      } ${shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
    >
      {card ? (
        <div
          className={`rounded-[14px] border-l-[3px] border-gold px-5 py-4 ${
            dark
              ? "bg-cream/5"
              : "border border-l-[3px] border-subtle border-l-gold bg-cream-light shadow-lift"
          }`}
        >
          <p
            className={`font-serif text-[16px] italic leading-relaxed sm:text-[17px] ${
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
            className={`mt-3 font-serif text-[20px] italic leading-snug sm:text-[22px] ${
              dark ? "text-cream" : "text-body"
            }`}
          >
            {entry?.text}
          </p>
        </>
      )}
    </div>
  );
}
