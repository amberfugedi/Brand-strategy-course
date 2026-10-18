"use client";

import { useEffect, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";

/**
 * Compounding: a line that barely moves, then climbs.
 *
 * The slide says a referral system pays back slowly and then
 * steadily, which is a shape. Written down it sounds like a
 * consolation; drawn, the flat early stretch and the climb that
 * follows are the same object, and the first is visibly the price of
 * the second.
 *
 * House rules for a narration-timed illustration: hidden from
 * assistive tech, driven by the narration clock, and finished at once
 * when there is no track or the listener asked for reduced motion.
 * Module 5 has no narration yet, so today every listener gets the
 * drawn curve; the timings start mattering when it is recorded.
 */
const W = 420;
const H = 92;

// Flat for the first third, then compounding. Sampled rather than a
// bezier so the shape is the formula and not a guess at control points.
const POINTS = Array.from({ length: 49 }, (_, i) => {
  const x = i / 48;
  const y = Math.pow(x, 2.6);
  return [x * W, H - y * (H - 8) - 4] as const;
});
const PATH = POINTS.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
// Chord-length approximation, so the dash offset retracts evenly.
const LENGTH = POINTS.reduce(
  (sum, p, i) => (i ? sum + Math.hypot(p[0] - POINTS[i - 1][0], p[1] - POINTS[i - 1][1]) : 0),
  0,
);

export function CompoundingCurve({ start = 8, over = 9 }: { start?: number; over?: number }) {
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
    <div aria-hidden className="mx-auto mt-10 w-full max-w-md">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="presentation">
        <line x1="0" y1={H - 2} x2={W} y2={H - 2} stroke="rgb(253 249 245 / 0.15)" strokeWidth="1" />
        <path
          d={PATH}
          fill="none"
          stroke="#FBEDBF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={LENGTH}
          strokeDashoffset={LENGTH * (1 - t)}
          style={{ transition: "stroke-dashoffset 220ms linear" }}
        />
      </svg>
      <div className="mt-1 flex justify-between text-[10px] font-bold uppercase tracking-eyebrow">
        <span className="text-on-dark-muted">At first</span>
        <span className="text-gold">Over time</span>
      </div>
    </div>
  );
}
