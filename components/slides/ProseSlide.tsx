import { ProseSlide as ProseSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function ProseSlide({
  slide,
  revealed = Infinity,
}: {
  slide: ProseSlideDef;
  revealed?: number;
}) {
  return (
    <div className="mt-4 flex flex-1 flex-col">
      <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
        {slide.eyebrow}
      </div>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      {slide.quote && revealed >= 1 ? (
        <p className="beat mt-8 max-w-3xl border-l-[3px] border-rust pl-5 text-[17px] leading-relaxed">
          <Rich text={slide.quote} />
        </p>
      ) : null}

      <div className="mt-6 max-w-3xl space-y-4">
        {slide.paragraphs
          .slice(0, Math.max(0, revealed - (slide.quote ? 1 : 0)))
          .map((p, i) => (
            <p key={i} className="beat text-[17px] leading-relaxed">
              <Rich text={p} />
            </p>
          ))}
      </div>
    </div>
  );
}
