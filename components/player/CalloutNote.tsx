"use client";

import { useEffect, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";

/**
 * A floating margin note that surfaces a spoken phrase while the
 * voice says it, then fades out. Purely decorative alongside the
 * narration (captions carry the verbatim words), so it's hidden from
 * assistive tech and never takes pointer events. Sits bottom-right,
 * clear of the caption bar's left-aligned column.
 */
export function CalloutNote({
  callouts,
  dark,
}: {
  callouts: { text: string; at: number; until: number }[];
  dark: boolean;
}) {
  const { getTime } = useNarration();
  // The text sticks around after its window closes so the note can
  // fade out over its own words rather than vanishing empty.
  const [text, setText] = useState<string | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const t = getTime();
      const active = callouts.find((c) => t >= c.at && t < c.until) ?? null;
      if (active) setText(active.text);
      setShown(Boolean(active));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [callouts, getTime]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute bottom-28 right-[4.5vw] z-20 max-w-[240px] text-right transition-all duration-500 sm:max-w-[280px] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      <div className="ml-auto h-px w-9 bg-gold" />
      <p
        className={`mt-3 font-serif text-[20px] italic leading-snug sm:text-[22px] ${
          dark ? "text-cream" : "text-body"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
