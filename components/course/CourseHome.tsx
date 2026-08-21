"use client";

import { useState } from "react";

import Link from "next/link";
import { getCourse } from "@/lib/content/courses";
import { Rich } from "@/components/Rich";
import { AuthCorner } from "@/components/auth/AuthCorner";
import { MapArt } from "@/components/slides/MapArt";
import { PlanPanel } from "@/components/course/PlanPanel";
import { useHasPlan } from "@/components/course/LivePlan";
import { useAuth } from "@/lib/auth/provider";
import { useCourseStore } from "@/lib/store/provider";

export function CourseHome({ courseId }: { courseId: string }) {
  const hasPlan = useHasPlan();
  const [planOpen, setPlanOpen] = useState(false);
  const course = getCourse(courseId)!;
  const auth = useAuth();
  const { doc, ready } = useCourseStore();
  const last = doc.progress.lastLocation;
  const continueHref = last
    ? `/${courseId}/${last.moduleId}/${last.slideIndex}`
    : `/${courseId}/intro/1`;
  const hasProgress = ready && last !== null;
  // The buyer's Map, drawn with the lines their completed foundation
  // modules have written (the modules unlock in order, so the count
  // is sequential by construction).
  const mapFilled = ["m1", "m3", "m4", "m5", "m6", "m7", "m8"].filter((id) =>
    doc.progress.completedModules.includes(id),
  ).length;

  return (
    <div className="relative min-h-screen overflow-hidden bg-cream text-body surface-cream">
      <div aria-hidden className="aura aura-rose -bottom-[24vmin] -left-[20vmin]" />
      <div className="mx-auto max-w-3xl px-6 py-16 lg:max-w-5xl">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
          >
            <img src="/images/af-mark.png" alt="" className="h-7 w-7" />
            <span className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
              The course library
            </span>
          </Link>
          <AuthCorner />
        </div>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr),340px] lg:items-center lg:gap-10">
        <div>
        <div className="mt-10 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
          {course.ordinal}
        </div>
        <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          <Rich text={course.tagline} />
        </h1>
        <p className="mt-4 max-w-xl text-[16px] text-body-secondary">
          <Rich text={course.summary} />
        </p>

        {!auth.enabled ? (
          // Setup flag: renders only while Supabase isn't connected and
          // removes itself once the keys are configured and deployed.
          <div className="rounded-3xl mt-8 border-l-[3px] border-rust bg-cream-light px-5 py-4">
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-rust">
              Setup pending
            </div>
            <p className="mt-1.5 max-w-xl text-[14.5px] leading-relaxed text-body-secondary">
              Accounts aren't connected yet, so sign-in is off and progress
              saves to this browser only. Create the Supabase project, then
              add the two keys in Netlify and redeploy (steps in the README).
              This notice disappears once that's done.
            </p>
          </div>
        ) : null}

        <div className="mt-8">
          <Link
            href={continueHref}
            className="inline-block rounded-[14px] border border-aubergine bg-aubergine px-6 py-3 text-[13px] font-bold uppercase tracking-chrome text-cream transition-colors hover:bg-transparent hover:text-aubergine"
          >
            {hasProgress ? "Continue where you left off" : "Begin the course"}
          </Link>
          {/* The plan lives on a slide deep inside Module 2, which is no
              use once the buyer has moved past it. Reachable here from
              the moment there is one. */}
          {hasPlan ? (
            <button
              type="button"
              onClick={() => setPlanOpen(true)}
              className="ml-3 inline-block rounded-[14px] border border-aubergine px-6 py-3 text-[13px] font-bold uppercase tracking-chrome text-aubergine transition-colors hover:bg-aubergine hover:text-cream"
            >
              View your plan
            </button>
          ) : null}
        </div>

        </div>
        <div aria-hidden className="hidden lg:block">
          <MapArt filled={mapFilled} aura={false} />
        </div>
        </div>

        {planOpen ? (
          <PlanPanel courseId={courseId} onClose={() => setPlanOpen(false)} />
        ) : null}

        <div className="mt-14 max-w-3xl space-y-2">
          {course.modules.map((mod) => {
            const completed = doc.progress.completedModules.includes(mod.id);
            const locked = Boolean(
              mod.requires &&
                !doc.progress.completedModules.includes(mod.requires),
            );
            const requiredLabel = mod.requires
              ? course.modules.find((m) => m.id === mod.requires)?.label ??
                "the previous module"
              : "";
            const seenCount = Object.keys(doc.progress.seenSlides).filter(
              (key) => key.startsWith(`${mod.id}/`),
            ).length;
            const started = seenCount > 0;

            const status = !mod.released
              ? "Not yet available."
              : locked
                ? `Opens when ${requiredLabel.replace(/ ·.*$/, "")} is complete.`
                : completed
                  ? "Completed."
                  : started
                    ? `In progress, slide ${Math.min(seenCount, mod.slides.length)} of ${mod.slides.length}.`
                    : "Not started.";

            const pct = completed
              ? 100
              : Math.round(
                  (100 * Math.min(seenCount, mod.slides.length)) /
                    mod.slides.length,
                );
            const layerBorder =
              { m3: "border-coral", m4: "border-lilac", m5: "border-lilac", m6: "border-stone", m7: "border-stone", m8: "border-stone" }[
                mod.id
              ] ?? "border-aubergine";
            const row = (
              <div
                className={`border-l-[3px] px-5 py-4 ${
                  !mod.released || locked
                    ? "border-ink/10 bg-cream-light/50"
                    : completed
                      ? "border-gold bg-cream-light"
                      : `${layerBorder} bg-cream-light`
                }`}
              >
                <div className="flex items-baseline justify-between gap-6">
                  <div>
                    <div
                      className={`text-[16px] font-semibold ${
                        mod.released && !locked ? "text-body" : "text-body-tertiary"
                      }`}
                    >
                      {mod.label}
                    </div>
                    <div
                      className={`mt-0.5 text-[13px] ${
                        completed ? "text-gold" : "text-body-tertiary"
                      }`}
                    >
                      {status}
                    </div>
                  </div>
                  <div className="shrink-0 text-[11px] font-bold uppercase tracking-chrome text-body-tertiary">
                    {mod.minutes}
                  </div>
                </div>
                {mod.released && !locked ? (
                  <div className="mt-3 h-1 w-full rounded-[2px] bg-gold/20">
                    <div
                      className="h-full rounded-[2px] bg-gold transition-[width] duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                ) : null}
              </div>
            );
            return mod.released && !locked ? (
              <Link
                key={mod.id}
                href={`/${courseId}/${mod.id}/1`}
                className="block transition-opacity hover:opacity-80"
              >
                {row}
              </Link>
            ) : (
              <div key={mod.id}>{row}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
