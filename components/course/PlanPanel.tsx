"use client";

import { useEffect } from "react";
import Link from "next/link";
import { GapListView, PriorityOrderList } from "@/components/course/LivePlan";
import {
  computeGaps,
  computePriorities,
  computeStartingPoint,
  diagnosticComplete,
} from "@/lib/content/m2Logic";
import { useModule2, usePositioning } from "@/lib/store/provider";

/**
 * The plan, as Module 2 defines it: positioning, priority order, Gap
 * List, starting point, in one place. It lives on a slide deep inside
 * Module 2, which is no use once the buyer has moved on, so the same
 * four things open in a panel from the course home and from the two
 * places in the course that work with them.
 *
 * Each section links back to the slide that produced it, because the
 * point of reading the plan is usually to change something in it.
 */
function Section({
  label,
  href,
  action,
  onNavigate,
  children,
}: {
  label: string;
  href?: string;
  action?: string;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-7 border-t border-subtle pt-6 first:mt-0 first:border-0 first:pt-0">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-eyebrow text-body-secondary">
        {label}
      </div>
      {children}
      {href && action ? (
        <Link
          href={href}
          onClick={onNavigate}
          className="mt-3 inline-block text-[11px] font-bold uppercase tracking-chrome text-gold transition-colors hover:text-aubergine"
        >
          {action} →
        </Link>
      ) : null}
    </div>
  );
}

export function PlanPanel({
  courseId,
  onClose,
}: {
  courseId: string;
  onClose: () => void;
}) {
  const { positioning } = usePositioning();
  const { diagnostic, audit } = useModule2();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const complete = diagnosticComplete(diagnostic);
  const start = complete
    ? computeStartingPoint(
        computePriorities(diagnostic),
        computeGaps(computePriorities(diagnostic), audit),
      )
    : null;
  const statement = positioning.statement?.trim();

  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        className="fixed inset-0 z-40 bg-ink/30"
      />
      <aside
        role="dialog"
        aria-label="Your plan"
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-y-auto border-l border-subtle bg-cream px-6 py-7 text-body shadow-lift surface-cream sm:px-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
              Your work, in one place
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">Your plan.</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 shrink-0 px-2 py-1 text-[18px] leading-none text-body-tertiary transition-colors hover:text-aubergine"
          >
            ×
          </button>
        </div>

        <div className="mt-6">
          <Section
            label="Positioning"
            href={`/${courseId}/m1/31`}
            action="Edit your statement"
            onNavigate={onClose}
          >
            {statement ? (
              <p className="font-serif text-[16px] italic leading-relaxed text-body">
                {statement}
              </p>
            ) : (
              <p className="text-[14.5px] text-body-tertiary">
                No statement yet. Module 1 produces it.
              </p>
            )}
          </Section>

          <Section
            label="Priority order"
            href={`/${courseId}/m2/10`}
            action="Edit your six answers"
            onNavigate={onClose}
          >
            <PriorityOrderList reasons={false} cols={1} />
          </Section>

          <Section
            label="Gap List"
            href={`/${courseId}/m2/22`}
            action="Revisit the audit"
            onNavigate={onClose}
          >
            <GapListView cols={1} />
          </Section>

          <Section label="Starting point" onNavigate={onClose}>
            {start ? (
              <>
                <div className="text-[15px] font-semibold">
                  {start.foundation.name}
                </div>
                <p className="mt-1 text-[13.5px] leading-relaxed text-body-tertiary">
                  {start.reasoning}
                </p>
              </>
            ) : (
              <p className="text-[14.5px] text-body-tertiary">
                Finish the diagnostic and the audit and it appears here.
              </p>
            )}
          </Section>
        </div>
      </aside>
    </>
  );
}
