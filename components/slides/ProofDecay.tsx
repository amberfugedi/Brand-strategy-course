"use client";

import { useEffect, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";

/**
 * Proof decay: three bars draining at three speeds.
 *
 * The slide claims that earned proof loses force as it ages, and that
 * it does so at different rates by source. A sentence can assert that.
 * This shows it: the bars start full at "this month" and are drawn
 * down toward "four years ago", client fastest and institutional
 * slowest, so the ranking in the copy is visible rather than stated.
 *
 * Timed to the voice like the advice cloud, holding full until the
 * narration reaches the line about last month against 2020.
 *
 * Two cases get the finished state straight away rather than the
 * animation: a slide with no track to follow, and a listener who has
 * asked for reduced motion. Same principle as the cloud, which keeps
 * its arrangement and drops only the drift. The graphic has to tell
 * the story standing still.
 *
 * Decorative beside narration that says all of this aloud, so it is
 * hidden from assistive tech.
 */

const SOURCES = [
  // keepsFor: how much of the bar still stands at four years. Client
  // proof ages fastest and institutional slowest, per the slide copy.
  { label: "Client", keepsFor: 0.18 },
  { label: "Peer", keepsFor: 0.42 },
  { label: "Institutional", keepsFor: 0.74 },
];

export function ProofDecay({ start = 20, over = 8 }: { start?: number; over?: number }) {
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
    <div aria-hidden className="mx-auto mt-10 w-full max-w-xl">
      <div className="flex items-baseline justify-between text-[10px] font-bold uppercase tracking-eyebrow text-on-dark-muted">
        <span>This month</span>
        <span>Four years ago</span>
      </div>
      <div className="mt-2.5 space-y-2.5">
        {SOURCES.map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <div className="w-[96px] shrink-0 text-right text-[13.5px] text-on-dark-muted">
              {s.label}
            </div>
            <div className="relative h-[7px] flex-1 overflow-hidden rounded-full bg-cream/10">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-butter"
                style={{
                  width: `${(1 - (1 - s.keepsFor) * t) * 100}%`,
                  transition: "width 200ms linear",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
