import Link from "next/link";
import { courses } from "@/lib/content/courses";
import { AuthCorner } from "@/components/auth/AuthCorner";

const WHY = [
  {
    num: "01",
    title: "The full picture",
    text: "What a marketing foundation consists of, in one place, in priority order.",
  },
  {
    num: "02",
    title: "Sequenced to reality",
    text: "Built for five to ten marketing hours a week, not unlimited ones.",
  },
  {
    num: "03",
    title: "Work you complete",
    text: "Interactive modules that save as you go and compile into a working plan.",
  },
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-cream text-body surface-cream">
      {/* Slim app-style top bar */}
      <header className="sticky top-0 z-20 border-b border-subtle bg-cream-light/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/70">
              <span className="font-serif italic text-[15px] leading-none text-gold">
                A
              </span>
            </span>
            <span className="text-[12px] font-semibold tracking-tight">
              Build Your Marketing Foundation
            </span>
          </div>
          <AuthCorner />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-16">
        <h1 className="mt-10 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          The course <em className="accent-serif">library</em>.
        </h1>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-body-secondary">
          Strategic marketing courses for service businesses. Guided,
          interactive, and saved as you go.
        </p>

        <div className="mt-10 text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
          Available now
        </div>
        <div className="mt-3 space-y-4">
          {courses
            .filter((c) => c.released)
            .map((course) => (
              <Link
                key={course.id}
                href={`/${course.id}`}
                className="group block border border-subtle border-l-[3px] border-l-aubergine bg-cream-light px-6 py-6 transition-opacity hover:opacity-90 md:px-8"
              >
                <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                  {course.ordinal}
                </div>
                <div className="mt-1.5 text-2xl font-bold leading-tight tracking-tight">
                  {course.title}
                </div>
                <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-body-secondary">
                  Three layers. Seven foundations. One strategic plan that&apos;s{" "}
                  <em className="accent-serif">actually yours</em>.
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-body-tertiary">
                  {course.meta.map((m) => (
                    <span key={m.label}>{m.value}</span>
                  ))}
                </div>
                <div className="mt-5 inline-block border border-aubergine bg-aubergine px-5 py-2.5 text-[11px] font-bold uppercase tracking-chrome text-cream transition-colors group-hover:bg-transparent group-hover:text-aubergine">
                  Open the course
                </div>
              </Link>
            ))}
        </div>

        <div className="mt-10 text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
          Coming next
        </div>
        <div className="mt-3 space-y-3">
          {courses.filter((c) => !c.released).length > 0 ? (
            courses
              .filter((c) => !c.released)
              .map((course) => (
                <div
                  key={course.id}
                  className="border border-subtle border-l-[3px] border-l-ink/10 bg-cream-light/60 px-6 py-4 md:px-8"
                >
                  <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
                    {course.ordinal}
                  </div>
                  <div className="mt-1 text-[16px] font-semibold text-body-tertiary">
                    {course.title}
                  </div>
                </div>
              ))
          ) : (
            <div className="border border-subtle border-l-[3px] border-l-ink/10 bg-cream-light/60 px-6 py-4 md:px-8">
              <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
                Course 02
              </div>
              <p className="mt-1 font-serif text-[14px] italic text-body-tertiary">
                The next course arrives after this one. One thing at a time.
              </p>
            </div>
          )}
        </div>

        <section className="mt-14 border-t border-subtle pt-10">
          <h2 className="text-xl font-bold tracking-tight">
            Why learn <em className="accent-serif">here</em>.
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {WHY.map((item) => (
              <div key={item.num}>
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
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-6">
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
