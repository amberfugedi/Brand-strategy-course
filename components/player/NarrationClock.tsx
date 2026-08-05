"use client";

import { useEffect, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";

/**
 * Time remaining on the playing narration, so a mid-slide pause never
 * reads as the slide being finished. Renders nothing when idle.
 */
export function NarrationClock({ dark }: { dark: boolean }) {
  const { playing, getTime, getDuration } = useNarration();
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const tick = () =>
      setLeft(Math.max(0, Math.round(getDuration() - getTime())));
    tick();
    const t = setInterval(tick, 500);
    return () => clearInterval(t);
  }, [playing, getTime, getDuration]);

  if (!playing || left <= 0) return null;
  const m = Math.floor(left / 60);
  const s = String(left % 60).padStart(2, "0");
  return (
    <span
      className={`shrink-0 whitespace-nowrap text-[10.5px] font-bold tracking-chrome tabular-nums ${
        dark ? "text-on-dark-muted" : "text-body-tertiary"
      }`}
    >
      {m}:{s}
    </span>
  );
}
