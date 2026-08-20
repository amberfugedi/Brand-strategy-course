"use client";

import { useEffect, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";
import { Emphasis } from "@/components/course/Emphasis";

interface Callout {
  text: string;
  at: number;
  until: number;
  who?: string;
  font?: "serif" | "body";
}

/**
 * The spoken asides, in the slide's own column at the foot of the
 * body. They used to float bottom-right over whatever was underneath
 * and sit above the player controls, which read as a notification
 * rather than as part of the lesson.
 *
 * The slot reserves its height up front, worked out from the longest
 * line the slide will show, so the content above never shifts when one
 * arrives or leaves. The estimate is deterministic rather than
 * measured, so the server and the client agree on it.
 *
 * Decorative alongside the narration, which is captioned verbatim, so
 * it stays out of the accessibility tree.
 */
const CHARS_PER_LINE_PHONE = 44;
const CHARS_PER_LINE_WIDE = 86;
const SERIF_LIMIT = 82;

function reserve(callouts: Callout[], phone: boolean) {
  const perLine = phone ? CHARS_PER_LINE_PHONE : CHARS_PER_LINE_WIDE;
  const pad = phone ? 24 : 28;
  let tallest = 0;
  for (const c of callouts) {
    const serif = c.font ? c.font === "serif" : c.text.length <= SERIF_LIMIT;
    const line = phone ? (serif ? 22 : 23) : serif ? 25 : 24;
    const lines = Math.max(1, Math.ceil(c.text.length / perLine));
    const body = Math.max(lines * line, c.who ? 32 : 0);
    tallest = Math.max(tallest, body + pad);
  }
  return Math.round(tallest) + 4;
}

export function CalloutNote({
  callouts,
  dark,
}: {
  callouts: Callout[];
  dark: boolean;
}) {
  const { getTime } = useNarration();
  // The last aside stays mounted after its window closes so it fades
  // out over its own words instead of vanishing mid-sentence.
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

  return (
    <div
      aria-hidden
      className="emphasis-slot mt-6 shrink-0"
      style={
        {
          "--emph-sm": `${reserve(callouts, true)}px`,
          "--emph-lg": `${reserve(callouts, false)}px`,
        } as React.CSSProperties
      }
    >
      <div
        className={`max-w-3xl transition-opacity duration-500 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      >
        {entry ? (
          <Emphasis
            text={entry.text}
            who={entry.who}
            font={entry.font}
            dark={dark}
          />
        ) : null}
      </div>
    </div>
  );
}
