"use client";

import { useEffect, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";

/**
 * Placement: the same piece of proof, saved and then put where the
 * doubt is.
 *
 * The slide's point is that proof does no work until a prospect meets
 * it at the moment they are deciding. The drawing holds one mark and
 * moves it along a line from "saved" to "where they decide", dim at
 * the first stop and lit at the second, because the mark does not
 * change. Only its position does.
 *
 * House rules for a narration-timed illustration: hidden from
 * assistive tech, driven by the narration clock, and it arrives at
 * the finished state at once when there is no track or the listener
 * asked for reduced motion.
 */
export function ProofPlacement({ start = 11, over = 7 }: { start?: number; over?: number }) {
  const { getTime, available } = useNarration();
  const [t, setT] = useState(0);

  useEffect(() => {
    const still =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!available || still) {
      setT(1);
      return;
    }
    let raf = 0;
    const tick = () => {
      const next = Math.min(Math.max((getTime() - start) / over, 0), 1);
      setT((prev) => (Math.abs(prev - next) < 0.004 ? prev : next));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [getTime, available, start, over]);

  return (
    <div aria-hidden className="mx-auto mt-10 w-full max-w-lg">
      <div className="relative h-[34px]">
        {/* the route between the two places proof can sit */}
        <div className="absolute left-[8%] right-[8%] top-[15px] h-px bg-cream/15" />
        <div className="absolute left-[8%] top-[11px] h-[9px] w-px bg-cream/25" />
        <div className="absolute right-[8%] top-[11px] h-[9px] w-px bg-cream/25" />
        <span
          className="absolute top-[8px] block h-[16px] w-[26px] rounded-[4px] bg-butter"
          style={{
            left: `calc(8% + ${t * 84}% - ${t * 26}px)`,
            opacity: 0.3 + 0.7 * t,
            transition: "left 220ms linear, opacity 220ms linear",
          }}
        />
      </div>
      <div className="mt-1 flex justify-between px-[6%] text-[10px] font-bold uppercase tracking-eyebrow">
        <span className="text-on-dark-muted">Saved</span>
        <span className="text-gold">Where they decide</span>
      </div>
    </div>
  );
}
