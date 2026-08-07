"use client";

import { Fragment } from "react";
import { useSpokenMark } from "@/components/player/SpokenMark";

/**
 * Renders the *word* convention as the brand serif italic accent.
 * The accent color follows the surface via a className on the parent
 * (see .accent-serif in globals.css).
 *
 * Also carries the spoken mark: when narration reaches a phrase this
 * text contains, the phrase takes a gold underline. The match runs
 * against the plain text, so a mark may span an accent boundary and
 * still underline in one piece.
 */
function fold(s: string) {
  return s.toLowerCase().replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"');
}

function Marked({ children, on }: { children: string; on: boolean }) {
  return (
    <span className={`spoken${on ? " spoken-on" : ""}`}>{children}</span>
  );
}

export function Rich({ text }: { text: string }) {
  const mark = useSpokenMark();
  const parts = text.split(/\*(.*?)\*/g);

  const wrap = (part: string, i: number, body: React.ReactNode) =>
    i % 2 === 1 ? (
      <em key={i} className="accent-serif">
        {body}
      </em>
    ) : (
      <Fragment key={i}>{body}</Fragment>
    );

  // Locate the mark in the plain text so the highlight can cross the
  // boundaries between accented and unaccented runs. Apostrophes are
  // folded together: a curly-versus-straight mismatch would otherwise
  // make a mark quietly do nothing. Folding is length-preserving, so
  // the offsets still line up with the original runs.
  let range: { start: number; end: number } | null = null;
  if (mark.text) {
    const plain = fold(parts.join(""));
    const at = plain.indexOf(fold(mark.text));
    if (at >= 0) range = { start: at, end: at + mark.text.length };
  }

  if (!range) {
    return <>{parts.map((part, i) => wrap(part, i, part))}</>;
  }

  let cursor = 0;
  return (
    <>
      {parts.map((part, i) => {
        const start = cursor;
        cursor += part.length;
        const from = Math.max(range!.start, start);
        const to = Math.min(range!.end, start + part.length);
        if (to <= from) return wrap(part, i, part);
        const a = part.slice(0, from - start);
        const hit = part.slice(from - start, to - start);
        const b = part.slice(to - start);
        return wrap(
          part,
          i,
          <>
            {a}
            <Marked on={mark.on}>{hit}</Marked>
            {b}
          </>,
        );
      })}
    </>
  );
}
