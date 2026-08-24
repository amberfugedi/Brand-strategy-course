"use client";

import Link from "next/link";
import type { CourseMeta } from "@/lib/content/meta";
import { CourseCover } from "@/components/course/CourseCover";
import { useOwnedCourses } from "@/lib/auth/entitlement";
import { supabaseConfigured } from "@/lib/supabaseClient";

/**
 * The library grid, plus a shelf of what the signed-in buyer owns.
 *
 * Ownership comes from the entitlements table, which row-level security
 * narrows to the caller, so this shows what they bought and nothing
 * about anybody else. Courses they have not bought stay listed and
 * openable: the intro is free and is how the course is sold.
 */

export function CourseGrid({
  courses,
  sections,
}: {
  courses: CourseMeta[];
  sections: { audience: string; note: string }[];
}) {
  const owned = useOwnedCourses();
  // In local mode everything reads as owned, which would put the whole
  // library on the shelf. The shelf is only meaningful once there are
  // accounts to own things.
  const mine = supabaseConfigured
    ? courses.filter((c) => c.released && owned?.has(c.id))
    : [];

  return (
    <>
      {mine.length > 0 ? (
        <section className="mt-12">
          <div className="border-b border-subtle pb-3">
            <h2 className="text-xl font-bold tracking-tight">Your courses</h2>
            <p className="mt-1 text-[13px] text-body-secondary">
              {mine.length === 1
                ? "Yours to work through whenever you like."
                : `${mine.length} courses, yours to work through whenever you like.`}
            </p>
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {mine.map((course) => (
              <Card key={course.id} course={course} owned />
            ))}
          </div>
        </section>
      ) : null}

      {sections.map((section) => {
        const inSection = courses.filter(
          (c) => c.audience === section.audience,
        );
        // A course on the shelf above does not need listing again here.
        const sectionCourses = inSection.filter((c) => !mine.includes(c));
        // Empty because the buyer owns everything in it, rather than
        // because nothing has been built: skip it instead of saying
        // "in development" about a course they are part way through.
        if (inSection.length > 0 && sectionCourses.length === 0) return null;
        return (
          <section key={section.audience} className="mt-12">
            <div className="border-b border-subtle pb-3">
              <h2 className="text-xl font-bold tracking-tight">
                {section.audience}
              </h2>
              <p className="mt-1 text-[13px] text-body-secondary">
                {section.note}
              </p>
            </div>

            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {sectionCourses.map((course) =>
                course.released ? (
                  <Card
                    key={course.id}
                    course={course}
                    owned={Boolean(owned?.has(course.id))}
                  />
                ) : (
                  <div
                    key={course.id}
                    className="border border-subtle bg-cream-light/70"
                  >
                    <CourseCover
                      ordinal={course.ordinal}
                      word={course.coverWord}
                      muted
                    />
                    <div className="px-5 py-4">
                      <div className="text-[17px] font-bold leading-snug tracking-tight text-body-tertiary">
                        {course.title}
                      </div>
                      <p className="mt-1 font-serif text-[13px] italic text-body-tertiary">
                        Not yet available.
                      </p>
                    </div>
                  </div>
                ),
              )}

              {sectionCourses.length === 0 ? (
                <div className="border border-dashed border-ink/20 bg-cream-light/60 px-6 py-8">
                  <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
                    In development
                  </div>
                  <p className="mt-2 font-serif text-[15px] italic leading-relaxed text-body-secondary">
                    This track is being built. One course at a time.
                  </p>
                </div>
              ) : null}
            </div>
          </section>
        );
      })}
    </>
  );
}

function Card({ course, owned }: { course: CourseMeta; owned: boolean }) {
  return (
    <Link
      href={`/${course.id}`}
      className="group block border border-subtle bg-cream-light transition-opacity hover:opacity-90"
    >
      <CourseCover ordinal={course.ordinal} word={course.coverWord} />
      <div className="px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="text-[17px] font-bold leading-snug tracking-tight">
            {course.title}
          </div>
          {owned ? (
            <span className="mt-0.5 shrink-0 border border-gold/40 bg-butter/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-eyebrow text-gold">
              Yours
            </span>
          ) : null}
        </div>
        <div className="mt-1 text-[12.5px] text-body-tertiary">Amber Fugedi</div>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {course.chips.map((chip) => (
            <span
              key={chip}
              className="border border-ink/15 bg-cream px-2 py-0.5 text-[10.5px] font-semibold text-body-secondary"
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-3 text-[11px] font-bold uppercase tracking-chrome text-aubergine">
          {owned ? "Continue" : "Open the course"}
        </div>
      </div>
    </Link>
  );
}
