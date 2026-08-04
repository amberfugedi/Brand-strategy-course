"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { host } from "@/lib/content/host";
import { Rich } from "@/components/Rich";

function Avatar({ size }: { size: "chip" | "panel" }) {
  const [broken, setBroken] = useState(false);
  const dims = size === "chip" ? "h-9 w-9" : "h-20 w-20";
  if (broken) {
    return (
      <span
        className={`flex ${dims} shrink-0 items-center justify-center rounded-full border border-gold/70`}
      >
        <span
          className={`font-serif italic leading-none text-gold ${
            size === "chip" ? "text-[17px]" : "text-[34px]"
          }`}
        >
          A
        </span>
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={host.photo}
      alt={host.name}
      onError={() => setBroken(true)}
      className={`${dims} shrink-0 rounded-full border border-gold/70 object-cover`}
    />
  );
}

/**
 * The "Meet Amber" chip on the title slide, expanding to a short
 * introduction of the host. Photo and bio live in lib/content/host.ts.
 */
export function MeetHost({ dark }: { dark: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group flex items-center gap-3 transition-opacity hover:opacity-80`}
      >
        <Avatar size="chip" />
        <span className="text-left">
          <span className="block text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            Your host
          </span>
          <span
            className={`block text-[15px] underline-offset-4 group-hover:underline ${
              dark ? "text-on-dark" : "text-body"
            }`}
          >
            {host.cta} →
          </span>
        </span>
      </button>

      {open
        ? // A portal: the slide's beat animations leave transforms on
          // ancestors, which would trap position:fixed inside them.
          createPortal(
            <div
              className="fixed inset-0 z-40 flex items-center justify-center bg-ink-black/50 px-6"
              onClick={() => setOpen(false)}
            >
          <div
            role="dialog"
            aria-label={host.cta}
            onClick={(e) => e.stopPropagation()}
            className="surface-cream relative w-full max-w-md border border-gold bg-cream px-9 py-10 text-body"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 px-2 py-1 text-[15px] text-body-tertiary transition-colors hover:text-aubergine"
            >
              ×
            </button>
            <Avatar size="panel" />
            <div className="mt-5 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
              Your host
            </div>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight">
              {host.name}
            </h2>
            <div className="mt-4 space-y-3 text-[14.5px] leading-relaxed text-body-secondary">
              {host.bio.length > 0 ? (
                host.bio.map((p) => (
                  <p key={p}>
                    <Rich text={p} />
                  </p>
                ))
              ) : (
                <p>
                  Amber is the voice guiding you through this course, and the
                  person who built it. A proper introduction lands here soon.
                </p>
              )}
            </div>
          </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
