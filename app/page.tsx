import Link from "next/link";
import { courses, librarySections } from "@/lib/content/courses";
import { AuthCorner } from "@/components/auth/AuthCorner";
import { CourseCover } from "@/components/course/CourseCover";

const WHY = [
  {
    title: "The full picture",
    text: "What a marketing foundation consists of, in one place, in priority order.",
  },
  {
    title: "Sequenced to reality",
    text: "Built for the hours you actually have, not unlimited ones.",
  },
  {
    title: "Work you complete",
    text: "Interactive modules that save as you go and compile into a working plan.",
  },
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-cream text-body surface-cream">
      <header className="sticky top-0 z-20 border-b border-subtle bg-cream-light/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/70">
              <span className="font-serif italic text-[15px] leading-none text-gold">
                A
              </span>
            </span>
            <span className="text-[12px] font-semibold tracking-tight">
              The course library
            </span>
          </div>
          <AuthCorner />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 pb-16">
        <h1 className="mt-10 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Marketing <em className="accent-serif">courses</em>.
        </h1>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-body-secondary">
          Guided, interactive, and saved as you go. Pick the track that
          matches where you are.
        </p>

        {librarySections.map((section) => {
          const sectionCourses = courses.filter(
            (c) => c.audience === section.audience,
          );
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
                    <Link
                      key={course.id}
                      href={`/${course.id}`}
                      className="group block border border-subtle bg-cream-light transition-opacity hover:opacity-90"
                    >
                      <CourseCover
                        ordinal={course.ordinal}
                        word={course.coverWord}
                      />
                      <div className="px-5 py-4">
                        <div className="text-[17px] font-bold leading-snug tracking-tight">
                          {course.title}
                        </div>
                        <div className="mt-1 text-[12.5px] text-body-tertiary">
                          Amber Fugedi
                        </div>
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
                          Open the course
                        </div>
                      </div>
                    </Link>
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

        <section className="mt-14 border-t border-subtle pt-10">
          <h2 className="text-xl font-bold tracking-tight">
            Why learn <em className="accent-serif">here</em>.
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {WHY.map((item) => (
              <div key={item.title}>
                <div className="h-[3px] w-8 bg-gold" />
                <div className="mt-3 text-[14px] font-bold">{item.title}</div>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-body-secondary">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-subtle">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/70">
              <span className="font-serif italic text-[13px] leading-none text-gold">
                A
              </span>
            </span>
            <span className="text-[11px] text-body-tertiary">
              Build Your Marketing Foundation
            </span>
          </div>
          <AuthCorner />
        </div>
      </footer>
    </div>
  );
}
