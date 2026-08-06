"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GapListView, PriorityOrderList, useHasPlan } from "@/components/course/LivePlan";

/**
 * The buyer's priority order and Gap List, one tab away from every
 * slide that references them. Module 2 tells them to carry both
 * forward and then moves on, so the reading slides are no longer the
 * only place the answer exists: a paper tab on the right edge opens
 * the drawer anywhere, and the drawer links back to the diagnostic
 * and the audit for when a line doesn't land.
 */
export function ReferenceTray({
  courseId,
  dark,
}: {
  courseId: string;
  dark: boolean;
}) {
  const [open, setOpen] = useState(false);
  const hasPlan = useHasPlan();

  // Escape closes, and the drawer never survives a slide change.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!hasPlan) return null;

  return (
    <>
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`fixed right-0 top-1/2 z-30 -translate-y-1/2 rounded-l-[14px] border border-r-0 py-5 pl-2.5 pr-2 text-[10px] font-bold uppercase tracking-chrome transition-colors [writing-mode:vertical-rl] ${
            dark
              ? "border-subtle-dark bg-cream/5 text-gold hover:bg-cream/10"
              : "border-subtle bg-cream-light text-aubergine shadow-lift hover:text-gold"
          }`}
        >
          Your priorities
        </button>
      ) : null}

      {open ? (
        <>
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-ink/30"
          />
          <aside
            role="dialog"
            aria-label="Your priority order and Gap List"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-y-auto border-l border-subtle bg-cream px-6 py-7 text-body shadow-lift surface-cream sm:px-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                  From your audit
                </div>
                <h2 className="mt-1 text-2xl font-bold tracking-tight">
                  Your priorities.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="-mr-1 shrink-0 px-2 py-1 text-[18px] leading-none text-body-tertiary transition-colors hover:text-aubergine"
              >
                ×
              </button>
            </div>

            <div className="mt-6">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-eyebrow text-body-secondary">
                Priority order
              </div>
              <PriorityOrderList reasons={false} cols={1} />
              <Link
                href={`/${courseId}/m2/10`}
                onClick={() => setOpen(false)}
                className="mt-3 inline-block text-[11px] font-bold uppercase tracking-chrome text-gold transition-colors hover:text-aubergine"
              >
                Edit your six answers →
              </Link>
            </div>

            <div className="mt-7 border-t border-subtle pt-6">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-eyebrow text-body-secondary">
                Gap List
              </div>
              <GapListView cols={1} />
              <Link
                href={`/${courseId}/m2/22`}
                onClick={() => setOpen(false)}
                className="mt-3 inline-block text-[11px] font-bold uppercase tracking-chrome text-gold transition-colors hover:text-aubergine"
              >
                Revisit the audit →
              </Link>
            </div>

            <p className="mt-7 border-t border-subtle pt-5 text-[13px] leading-relaxed text-body-tertiary">
              If a line doesn&rsquo;t land, it usually traces to one answer that
              didn&rsquo;t quite reflect reality. Change the answer and the
              order updates.
            </p>
          </aside>
        </>
      ) : null}
    </>
  );
}
