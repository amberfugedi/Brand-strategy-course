"use client";

import { useState, type ReactNode } from "react";

/**
 * Click-to-reveal card for calibration slides: the pattern stays
 * visible, the diagnosis appears on interaction so the buyer judges
 * before reading the answer.
 */
interface RevealCardProps {
  eyebrow: string;
  visible: ReactNode;
  revealed: ReactNode;
  revealLabel?: string;
}

export function RevealCard({
  eyebrow,
  visible,
  revealed,
  revealLabel = "Show the diagnosis",
}: RevealCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-l-[3px] border-olive bg-cream-light px-6 py-5">
      <div className="mb-1.5 text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
        {eyebrow}
      </div>
      <div className="font-serif text-[17px] italic">{visible}</div>
      {open ? (
        <div className="mt-3 text-[14px] leading-relaxed text-body">
          {revealed}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-3 text-[12px] font-bold uppercase tracking-chrome text-gold hover:text-rust"
        >
          {revealLabel}
        </button>
      )}
    </div>
  );
}
