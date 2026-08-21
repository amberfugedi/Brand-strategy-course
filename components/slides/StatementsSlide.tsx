import { StatementsSlide as StatementsSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { PersonaAvatar } from "@/components/slides/PersonaAvatar";

export function StatementsSlide({
  slide,
  revealed = Infinity,
}: {
  slide: StatementsSlideDef;
  revealed?: number;
}) {
  const solo = slide.statements.length === 1;
  return (
    <div className="mt-4 flex flex-1 flex-col">
      {slide.eyebrow ? (
        <div className="mb-3 text-[11px] font-bold uppercase tracking-eyebrow text-gold">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div
        className={`mt-9 grid gap-8 ${
          solo ? "mx-auto max-w-2xl" : "md:grid-cols-2"
        }`}
      >
        {slide.statements.slice(0, revealed).map((s) => (
          <div
            key={s.name}
            className="rounded-3xl beat border-l-[3px] border-olive bg-cream-light px-8 py-7"
          >
            <div className="flex items-center gap-3.5">
              <PersonaAvatar name={s.name} size={44} />
              <div>
                <div className="text-xl font-bold tracking-tight">{s.name}</div>
                <div className="mt-0.5 text-[11px] font-bold uppercase tracking-eyebrow text-body-tertiary">
                  {s.role}
                </div>
              </div>
            </div>
            <p className="mt-4 font-serif text-[16px] italic leading-relaxed text-body">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
