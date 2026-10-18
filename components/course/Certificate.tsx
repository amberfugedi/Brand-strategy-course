"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CourseMeta } from "@/lib/content/meta";
import { Rich } from "@/components/Rich";
import { useCourseStore, useFinish } from "@/lib/store/provider";
import {
  computeGaps,
  computePriorities,
  computeStartingPoint,
  diagnosticComplete,
} from "@/lib/content/m2Logic";

/**
 * The record of finishing.
 *
 * Deliberately not a participation certificate. The course spends
 * eight modules arguing that thin proof and vanity signals do nothing,
 * so a gold seal saying someone watched it would contradict the thing
 * they just learned. What it attests to is the work: the positioning
 * they wrote and the foundation they chose to build first. The name
 * and the date make it theirs; the plan makes it worth keeping.
 *
 * Built to print. The browser's own print dialogue makes the PDF, so
 * there is no renderer to maintain and no font to embed.
 */
export function Certificate({ course }: { course: CourseMeta }) {
  const { doc, ready } = useCourseStore();
  const { name, completedAt, setName, stampCompletion } = useFinish();
  const [draft, setDraft] = useState("");

  useEffect(() => {
    if (ready) setDraft(name);
  }, [ready, name]);

  const finished =
    ready &&
    course.modules
      .filter((m) => m.released && m.id !== "intro")
      .every((m) => doc.progress.completedModules.includes(m.id));

  const m2 = doc.modules.m2 ?? {};
  const diagnostic = m2.diagnostic ?? {};
  const start = diagnosticComplete(diagnostic)
    ? computeStartingPoint(
        computePriorities(diagnostic),
        computeGaps(computePriorities(diagnostic), m2.audit ?? {}),
      )
    : null;
  const statement = doc.modules.m1?.positioning?.statement?.trim();

  const day = completedAt
    ? new Date(completedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  // The home page stamps this too, but the link is shareable and a
  // buyer can land here first. Stamping is idempotent.
  useEffect(() => {
    if (finished) stampCompletion();
  }, [finished, stampCompletion]);

  if (!ready) return null;

  if (!finished) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream px-6 text-body surface-cream">
        <div className="rounded-3xl w-full max-w-md border border-subtle bg-cream-light px-9 py-10 text-center shadow-lift">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            Not yet
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            This arrives when the course does.
          </h1>
          <p className="mt-3 text-[14.5px] leading-relaxed text-body-secondary">
            Every module, with its tools filled in. It records what you
            decided, so there has to be something decided first.
          </p>
          <Link
            href={`/${course.id}`}
            className="mt-6 inline-block rounded-[14px] border border-aubergine bg-aubergine px-6 py-3 text-[12px] font-bold uppercase tracking-chrome text-cream transition-colors hover:bg-transparent hover:text-aubergine"
          >
            Back to the course
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream px-6 py-12 text-body surface-cream">
      <div className="mx-auto max-w-2xl">
        {/* Everything outside the sheet is for the screen only. */}
        <div className="print:hidden">
          <Link
            href={`/${course.id}`}
            className="text-[11px] font-bold uppercase tracking-chrome text-body-tertiary transition-colors hover:text-aubergine"
          >
            ← Back to the course
          </Link>
          <label className="mt-7 block">
            <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-eyebrow text-body-secondary">
              The name on it
            </span>
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={() => setName(draft.trim())}
              placeholder="Your name"
              className="w-full max-w-sm border border-ink/20 bg-cream-light px-4 py-3 text-[16px] outline-none transition-colors placeholder:text-body-tertiary focus:border-gold"
            />
          </label>
        </div>

        <div className="rounded-3xl mt-8 border border-subtle bg-cream-light px-8 py-10 shadow-lift print:border-0 print:shadow-none sm:px-12 sm:py-14">
          <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            {course.ordinal} · Completed
          </div>
          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            {name || "Your name"}
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-body-secondary">
            finished <span className="font-medium text-body">{course.title}</span>
            {day ? ` on ${day}` : null}.
          </p>

          <div className="mt-9 h-px w-full bg-gold/25" />

          {statement ? (
            <div className="mt-7">
              <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                Positioning
              </div>
              <p className="mt-2 text-[16px] leading-relaxed">{statement}</p>
            </div>
          ) : null}

          {start ? (
            <div className="mt-7">
              <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                Building first
              </div>
              <p className="mt-2 text-[16px] leading-relaxed">
                <span className="font-medium">{start.foundation.name}.</span>{" "}
                <Rich text={start.reasoning} />
              </p>
            </div>
          ) : null}

          <div className="mt-9 flex items-center gap-2.5">
            <img src="/images/af-mark.png" alt="" className="h-7 w-7" />
            <span className="text-[13.5px] text-body-tertiary">
              Amber Fugedi
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => window.print()}
          className="mt-7 inline-block rounded-[14px] border border-aubergine px-6 py-3 text-[13px] font-bold uppercase tracking-chrome text-aubergine transition-colors hover:bg-aubergine hover:text-cream print:hidden"
        >
          Save as PDF
        </button>
      </div>
    </div>
  );
}
