"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";

/**
 * Underlining the slide instead of repeating it. When the voice says a
 * sentence the slide already carries, a floating note would print the
 * same words twice; a mark draws a gold rule under the words that are
 * already there and lets them go quiet again. Callouts stay for what
 * the voice adds that the slide does not say.
 *
 * The last mark stays in context after its window closes so the rule
 * can retract over its own words rather than vanishing.
 */
export interface SpokenMarkDef {
  text: string;
  at: number;
  until: number;
}

interface MarkState {
  text: string | null;
  on: boolean;
}

const Ctx = createContext<MarkState>({ text: null, on: false });

export function useSpokenMark() {
  return useContext(Ctx);
}

export function SpokenMarkProvider({
  marks,
  children,
}: {
  marks?: SpokenMarkDef[];
  children: React.ReactNode;
}) {
  const { getTime } = useNarration();
  const [state, setState] = useState<MarkState>({ text: null, on: false });

  useEffect(() => {
    if (!marks?.length) {
      setState({ text: null, on: false });
      return;
    }
    let raf = 0;
    const tick = () => {
      const t = getTime();
      const hit = marks.find((m) => t >= m.at && t < m.until) ?? null;
      // Only re-render when the mark or its state actually changes;
      // every Rich on the slide is downstream of this context.
      setState((prev) => {
        const text = hit ? hit.text : prev.text;
        const on = Boolean(hit);
        return prev.text === text && prev.on === on ? prev : { text, on };
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [marks, getTime]);

  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}
