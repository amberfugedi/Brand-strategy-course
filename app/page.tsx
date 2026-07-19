import Link from "next/link";
import { courses } from "@/lib/content/courses";
import { Rich } from "@/components/Rich";
import { AuthCorner } from "@/components/auth/AuthCorner";

const LAYERS = [
  {
    label: "Get found",
    accent: "bg-teal",
    text: "So people who need you can *discover* you.",
  },
  {
    label: "Get chosen",
    accent: "bg-rust",
    text: "So they pick *you* over alternatives.",
  },
  {
    label: "Be remembered",
    accent: "bg-olive",
    text: "So you stay *present* until they're ready.",
  },
] as const;

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-cream text-body surface-cream">
      {/* Hero: the module-title treatment, used as the front door. */}
      <header className="plum-glow relative overflow-hidden bg-aubergine surface-dark">
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-10 md:pb-28">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/70">
                <span className="font-serif italic text-[15px] leading-none text-gold">
                  A
                </span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-eyebrow text-gold/80">
                The course library
              </span>
            </div>
            <AuthCorner dark />
          </div>

          <h1 className="mt-16 max-w-3xl text-balance text-5xl font-bold leading-[1.02] tracking-tight text-cream md:mt-24 md:text-7xl">
            For service businesses tired of{" "}
            <em className="accent-serif">guessing</em>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-on-dark/85 md:text-xl">
            Most marketing advice tells you what to do. It does not tell you
            whether it applies to <em className="accent-serif">your</em>{" "}
            business.
          </p>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-on-dark/85 md:text-xl">
            These courses build the full picture instead: what a marketing
            foundation consists of, in priority order, sized to the time you
            actually have.
          </p>
        </div>
      </header>

      {/* The three-layer motif, straight from the system this teaches. */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {LAYERS.map((layer, i) => (
            <div key={layer.label}>
              <div className={`h-[3px] w-full ${layer.accent}`} />
              <div className="pt-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-[10px] font-bold tracking-chrome text-body-tertiary">
                    0{i + 1}
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-eyebrow">
                    {layer.label}
                  </span>
                </div>
                <p className="mt-2 text-[15px] text-body-secondary">
                  <Rich text={layer.text} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The courses. */}
      <section className="mx-auto max-w-5xl px-6 pb-6">
        {courses.map((course) =>
          course.released ? (
            <Link
              key={course.id}
              href={`/${course.id}`}
              className="plum-glow group relative block overflow-hidden bg-aubergine surface-dark transition-opacity hover:opacity-95"
            >
              <div className="relative z-10 px-8 py-12 md:px-14 md:py-16">
                <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                  {course.ordinal}
                </div>
                <h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-cream md:text-5xl">
                  {course.title}
                </h2>
                <p className="mt-4 max-w-xl text-[16px] text-on-dark/85">
                  <Rich text={course.summary} />
                </p>

                <div className="mt-10 flex flex-wrap gap-x-14 gap-y-5 border-t border-gold/30 pt-6">
                  {course.meta.map((m) => (
                    <div key={m.label}>
                      <div className="mb-1 text-[9px] font-bold uppercase tracking-eyebrow text-gold">
                        {m.label}
                      </div>
                      <div className="text-[14px] text-cream">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 inline-block border border-gold px-6 py-3 text-[12px] font-bold uppercase tracking-chrome text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                  Open the course
                </div>
              </div>
            </Link>
          ) : (
            <div
              key={course.id}
              className="mt-4 border-l-[3px] border-ink/10 bg-cream-light/60 px-8 py-6"
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
          <div className="mt-4 border-l-[3px] border-ink/10 bg-cream-light/60 px-8 py-6">
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
              Course 02
            </div>
            <p className="mt-2 font-serif text-[15px] italic text-body-tertiary">
              The next course arrives after this one. One thing at a time.
            </p>
          </div>
        ) : null}
      </section>

      {/* The premise, in the deck's principle treatment. */}
      <section className="bg-ink-black surface-dark">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <div className="border-y border-gold/25 py-14">
            <div className="mb-7 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
              The premise
            </div>
            <p className="mx-auto max-w-2xl font-serif text-4xl leading-snug text-cream md:text-5xl">
              Sequence is the <em className="accent-serif">strategy</em>.
            </p>
            <p className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-on-dark-muted">
              Five half-built foundations is worse than one fully built one.
              These courses teach the order, not just the work.
            </p>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
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
      </footer>
    </div>
  );
}
