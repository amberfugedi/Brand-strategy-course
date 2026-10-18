"use client";

import { useEffect, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";

/**
 * Weight against count: a crowd of thin marks on one side, a handful
 * of solid ones on the other, and the visual weight moving from the
 * first to the second as the voice makes the point.
 *
 * Two takeaways make this argument in the same shape. Module 4 says
 * forty thin reviews do less than six specific ones; Module 3 says
 * two touchpoints maintained well beat five maintained badly. Both
 * are about the eye going to the wrong pile, so both get one drawing
 * with different numbers.
 *
 * The animation is the argument: the crowd starts bright and drains,
 * the few start faint and fill, so by the end your eye is on the
 * smaller group. Follows the house rules for a narration-timed
 * illustration. Hidden from assistive tech, driven by the narration
 * clock, and it lands on the finished state at once when there is no
 * track to follow or the listener asked for reduced motion.
 */
export function WeightVsCount({
  many,
  few,
  manyLabel,
  fewLabel,
  start = 9,
  over = 7,
}: {
  many: number;
  few: number;
  manyLabel: string;
  fewLabel: string;
  start?: number;
  over?: number;
}) {
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

  // The crowd never vanishes and the few never start invisible: the
  // point is which one holds your eye, not that one of them is gone.
  const crowd = 0.75 - 0.55 * t;
  const chosen = 0.3 + 0.7 * t;

  return (
    <div aria-hidden className="mt-10 flex w-full items-end justify-center gap-8">
      {/* Columns size to their marks so each label sits under its own
          group. The few are taller and thicker than the many: the
          whole point is that the smaller pile weighs more. */}
      <div className="max-w-[300px]">
        <div
          className="flex flex-wrap items-end gap-[3px]"
          style={{ opacity: crowd, transition: "opacity 220ms linear" }}
        >
          {Array.from({ length: many }).map((_, i) => (
            <span key={i} className="block h-[13px] w-[3px] rounded-full bg-cream/70" />
          ))}
        </div>
        <div className="mt-3 text-[10px] font-bold uppercase tracking-eyebrow text-on-dark-muted">
          {manyLabel}
        </div>
      </div>

      <div className="mb-7 h-9 w-px shrink-0 bg-cream/15" />

      <div className="max-w-[300px]">
        <div
          className="flex flex-wrap items-end gap-2"
          style={{ opacity: chosen, transition: "opacity 220ms linear" }}
        >
          {Array.from({ length: few }).map((_, i) => (
            <span key={i} className="block h-[22px] w-[9px] rounded-full bg-butter" />
          ))}
        </div>
        <div className="mt-3 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
          {fewLabel}
        </div>
      </div>
    </div>
  );
}
