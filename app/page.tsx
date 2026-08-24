import { courses, getCourseMeta, librarySections } from "@/lib/content/courses";
import { AuthCorner } from "@/components/auth/AuthCorner";
import { CourseGrid } from "@/components/course/CourseGrid";

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
            <img src="/images/af-mark.png" alt="" className="h-7 w-7" />
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

        <CourseGrid
          courses={courses.map((c) => getCourseMeta(c.id)!)}
          sections={librarySections}
        />

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
            <img src="/images/af-mark.png" alt="" className="h-6 w-6" />
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
