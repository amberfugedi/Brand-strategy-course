import Link from "next/link";
import { courses } from "@/lib/content/courses";
import { Rich } from "@/components/Rich";
import { AuthCorner } from "@/components/auth/AuthCorner";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-cream text-body surface-cream">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/70">
              <span className="font-serif italic text-[15px] leading-none text-gold">
                A
              </span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
              The course library
            </span>
          </div>
          <AuthCorner />
        </div>

        <h1 className="mt-10 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Courses that build the <em className="accent-serif">thinking</em>{" "}
          first.
        </h1>
        <p className="mt-4 max-w-xl text-[16px] text-body-secondary">
          Strategic foundations for service businesses. Analytical, calm,
          and built around work you actually complete.
        </p>

        <div className="mt-12 space-y-4">
          {courses.map((course) =>
            course.released ? (
              <Link
                key={course.id}
                href={`/${course.id}`}
                className="block border-l-[3px] border-aubergine bg-cream-light px-8 py-7 transition-opacity hover:opacity-80"
              >
                <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                  {course.ordinal}
                </div>
                <div className="mt-2 text-2xl font-bold tracking-tight">
                  {course.title}
                </div>
                <p className="mt-2 text-[15px] text-body-secondary">
                  <Rich text={course.summary} />
                </p>
                <div className="mt-4 text-[11px] font-bold uppercase tracking-chrome text-aubergine">
                  Open the course
                </div>
              </Link>
            ) : (
              <div
                key={course.id}
                className="border-l-[3px] border-ink/10 bg-cream-light/50 px-8 py-6"
              >
                <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
                  {course.ordinal}
                </div>
                <div className="mt-2 text-xl font-bold tracking-tight text-body-tertiary">
                  {course.title}
                </div>
                <p className="mt-1.5 font-serif text-[15px] italic text-body-tertiary">
                  Not yet available.
                </p>
              </div>
            ),
          )}

          {courses.every((c) => c.released) ? (
            <div className="border-l-[3px] border-ink/10 bg-cream-light/50 px-8 py-6">
              <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
                Course 02
              </div>
              <p className="mt-2 font-serif text-[15px] italic text-body-tertiary">
                The next course arrives after this one. One thing at a time.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
