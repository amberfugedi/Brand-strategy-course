"use client";

import { useEffect, useRef, useState } from "react";
import { useNarration } from "@/components/player/NarrationProvider";

type Word = [string, number, number];

const SENTENCE_END = /[.!?]["']?$/;

/**
 * Karaoke-style captions for the narration. Word timings live in a
 * .words.json beside each track's .mp3; the bar shows the sentence
 * being spoken, lighting words as the voice reaches them. Renders
 * nothing when captions are off or the track has no timing file.
 */
export function CaptionBar({ dark }: { dark: boolean }) {
  const { src, captions, available, getTime } = useNarration();
  const [words, setWords] = useState<Word[] | null>(null);
  const [idx, setIdx] = useState(-1);

  useEffect(() => {
    setWords(null);
    setIdx(-1);
    if (!src) return;
    let alive = true;
    fetch(src.replace(/\.mp3$/, ".words.json"))
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (alive && Array.isArray(data?.words)) setWords(data.words);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [src]);

  const idxRef = useRef(idx);
  idxRef.current = idx;
  useEffect(() => {
    if (!captions || !words) return;
    let raf = 0;
    const tick = () => {
      const t = getTime();
      let i = -1;
      for (let j = 0; j < words.length && words[j][1] <= t; j++) i = j;
      if (i !== idxRef.current) setIdx(i);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [captions, words, getTime]);

  if (!captions || !available || !words) return null;

  // The sentence around the word being spoken.
  const anchor = Math.max(0, idx);
  let from = 0;
  for (let j = anchor - 1; j >= 0; j--) {
    if (SENTENCE_END.test(words[j][0])) {
      from = j + 1;
      break;
    }
  }
  let to = words.length - 1;
  for (let j = anchor; j < words.length; j++) {
    if (SENTENCE_END.test(words[j][0])) {
      to = j;
      break;
    }
  }

  return (
    <div className="relative z-10 px-[4.5vw] pb-3">
      <p
        className={`min-h-[3.2em] max-w-3xl font-serif text-[15px] italic leading-relaxed ${
          dark ? "text-cream" : "text-body"
        }`}
      >
        {words.slice(from, to + 1).map((w, k) => {
          const j = from + k;
          return (
            <span
              key={j}
              className={
                j < idx
                  ? undefined
                  : j === idx
                    ? dark
                      ? "text-gold"
                      : "text-aubergine"
                    : "opacity-40"
              }
            >
              {w[0]}{" "}
            </span>
          );
        })}
      </p>
    </div>
  );
}
