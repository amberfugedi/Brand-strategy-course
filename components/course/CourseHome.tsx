"use client";

import Link from "next/link";
import { getCourse } from "@/lib/content/courses";
import { Rich } from "@/components/Rich";
import { AuthCorner } from "@/components/auth/AuthCorner";
import { useCourseStore } from "@/lib/store/provider";

export function CourseHome({ courseId }: { courseId: string }) {
  const course = getCourse(courseId)!;
  const { doc, ready } = useCourseStore();
  const last = doc.progress.lastLocation;
  const continueHref = last
    ? `/${courseId}/${last.moduleId}/${last.slideIndex}`
    : `/${courseId}/intro/1`;
  const hasProgress = ready && last !== null;

  return (
    <div className="min-h-screen bg-cream text-body surface-cream">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/70">
              <span className="font-serif italic text-[15px] leading-none text-gold">
                A
              </span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
              The course library
            </span>
          </Link>
          <AuthCorner />
        </div>

        <div className="mt-10 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
          {course.ordinal}
        </div>
        <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          <Rich text={course.tagline} />
        </h1>
        <p className="mt-4 max-w-xl text-[16px] text-body-secondary">
          <Rich text={course.summary} />
        </p>

        <div className="mt-8">
          <Link
            href={continueHref}
            className="inline-block border border-aubergine bg-aubergine px-6 py-3 text-[13px] font-bold uppercase tracking-chrome text-cream transition-colors hover:bg-transparent hover:text-aubergine"
          >
            {hasProgress ? "Continue where you left off" : "Begin the course"}
          </Link>
        </div>

        <div className="mt-14 space-y-2">
          {course.modules.map((mod) => {
            const completed = doc.progress.completedModules.includes(mod.id);
            const seenCount = Object.keys(doc.progress.seenSlides).filter(
              (key) => key.startsWith(`${mod.id}/`),
            ).length;
            const started = seenCount > 0;

            const status = !mod.released
              ? "Not yet available."
              : completed
                ? "Completed."
                : started
                  ? `In progress, slide ${Math.min(seenCount, mod.slides.length)} of ${mod.slides.length}.`
                  : "Not started.";

            const row = (
              <div
                className={`flex items-baseline justify-between gap-6 border-l-[3px] px-5 py-4 ${
                  !mod.released
                    ? "border-ink/10 bg-cream-light/50"
                    : completed
                      ? "border-gold bg-cream-light"
                      : "border-aubergine bg-cream-light"
                }`}
              >
                <div>
                  <div
                    className={`text-[15px] font-semibold ${
                      mod.released ? "text-body" : "text-body-tertiary"
                    }`}
                  >
                    {mod.label}
                  </div>
                  <div
                    className={`mt-0.5 font-serif text-[13px] italic ${
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
            );
            return mod.released ? (
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
