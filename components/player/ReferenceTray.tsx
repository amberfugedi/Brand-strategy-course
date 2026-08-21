"use client";

import { useState } from "react";
import { PlanPanel } from "@/components/course/PlanPanel";
import { useHasPlan } from "@/components/course/LivePlan";

/**
 * The plan, one tab away, in the two places the course works with it:
 * Module 2 from the slide that first asks the buyer to read their
 * order, and Module 8, the build phase the order was for. The teaching
 * modules deliberately do without it; the course home carries a button
 * instead, so the plan is always reachable without standing over the
 * lesson.
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
          Your plan
        </button>
      ) : null}

      {open ? <PlanPanel courseId={courseId} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
