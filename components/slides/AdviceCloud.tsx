"use client";

import { useEffect, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";

/**
 * The generic-advice cloud: the tactics the narration reels off,
 * drifting around a head, each one lighting as it is spoken. The
 * slide's argument is that the advice arrives as undifferentiated
 * noise, so the graphic accumulates rather than steps: by the last
 * one, eight things are shouting at once. When the voice turns to
 * what the module does instead, the cloud settles back down and the
 * paragraphs take the slide.
 *
 * Purely decorative alongside the narration, so it is hidden from
 * assistive tech; the words are all spoken aloud and captioned.
 */
export interface CloudWord {
  text: string;
  at: number;
}

// Positions are fixed per index rather than random so the server and
// the client agree, and so the arrangement is art-directed: nothing
// collides with the head or with its neighbours.
const SPOTS = [
  { x: 50, y: 6 },
  { x: 85, y: 22 },
  { x: 94, y: 52 },
  { x: 80, y: 82 },
  { x: 50, y: 95 },
  { x: 19, y: 82 },
  { x: 6, y: 52 },
  { x: 15, y: 22 },
];

// Small, slow, unsynchronised drifts. Derived from the index so they
// stay stable across renders.
function drift(i: number) {
  const dx = [3, -4, 4, -3, 3, -3, 4, -4][i % 8];
  const dy = [-4, 3, -3, 4, -4, 3, -3, 3][i % 8];
  return {
    "--dx": `${dx}px`,
    "--dy": `${dy}px`,
    animationDuration: `${6 + (i % 4) * 1.3}s`,
    animationDelay: `${(i % 5) * 0.7}s`,
  } as React.CSSProperties;
}

/**
 * The cloud has a life and then it ends. The words light as the voice
 * names them, quiet when the first paragraph lands, and at `clear` the
 * whole graphic leaves, head and all, so the back half of the slide
 * belongs to the prose. The column it occupied stays reserved, so the
 * text does not jump when it goes.
 */
type Phase = "build" | "quiet" | "cleared";

const HOT = "font-bold text-gold opacity-100";
const COLD = "text-body-tertiary opacity-40";
const QUIET = "font-semibold text-body-secondary opacity-70";

/** Whether the narration has passed a given second. Shared so a slide
 *  can rearrange itself on the same beat its art leaves. */
export function useNarrationPast(at?: number) {
  const { getTime } = useNarration();
  const [past, setPast] = useState(false);
  useEffect(() => {
    if (at === undefined) {
      setPast(false);
      return;
    }
    let raf = 0;
    const tick = () => {
      const now = getTime() >= at;
      setPast((prev) => (prev === now ? prev : now));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [at, getTime]);
  return past;
}

export function AdviceCloud({
  words,
  settle,
  clear,
  image,
}: {
  words: CloudWord[];
  /** When the voice moves on, the noise quiets instead of staying lit. */
  settle?: number;
  /** The whole graphic leaves: words, head, aura. */
  clear?: number;
  /** An illustrated head, drawn in the persona-portrait style. */
  image?: string;
}) {
  const { getTime } = useNarration();
  const [t, setT] = useState(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setT(getTime());
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [getTime]);

  const phase: Phase =
    clear !== undefined && t >= clear
      ? "cleared"
      : settle !== undefined && t >= settle
        ? "quiet"
        : "build";

  return (
    <div
      aria-hidden
      className={`relative mx-auto aspect-square w-full max-w-[320px] transition-opacity duration-1000 lg:max-w-[390px] ${
        phase === "cleared" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* The head the noise is aimed at. An illustration when one is
          supplied, otherwise a hairline drawing that sits with the
          course's other line art. */}
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      ) : (
        <svg
          viewBox="0 0 200 200"
          className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 text-aubergine"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <ellipse cx="100" cy="74" rx="43" ry="53" opacity="0.55" />
          <path d="M78 128v14c0 6-4 9-10 12l-22 9" opacity="0.4" />
          <path d="M122 128v14c0 6 4 9 10 12l22 9" opacity="0.4" />
          <path d="M30 178c8-18 30-27 70-27s62 9 70 27" opacity="0.4" />
        </svg>
      )}

      {/* A faint aura so the head reads as the centre of the cloud. */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-2xl" />

      {words.slice(0, SPOTS.length).map((w, i) => {
        const look =
          phase === "build" ? (t >= w.at ? HOT : COLD) : QUIET;
        return (
          <span
            key={w.text}
            style={{
              left: `${SPOTS[i].x}%`,
              top: `${SPOTS[i].y}%`,
              ...drift(i),
            }}
            className={`buzz absolute block whitespace-nowrap text-center text-[12px] leading-none transition-[color,opacity,font-weight] duration-700 lg:text-[13px] ${look}`}
          >
            {w.text}
          </span>
        );
      })}
    </div>
  );
}
