import { QuestionSlide as QuestionSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function QuestionSlide({
  slide,
  revealed = Infinity,
}: {
  slide: QuestionSlideDef;
  revealed?: number;
}) {
  // Beats: lines, post, panel container, panel paragraphs, callout.
  const panelAt = slide.lines.length + (slide.post ? 1 : 0);
  return (
    <div className="flex flex-1 flex-col justify-center">
      <div aria-hidden className="mb-10 w-44 border-t border-gold/40">
        <div className="flex justify-between">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className="h-[7px] w-px bg-gold/40" />
          ))}
        </div>
      </div>
      {slide.pre ? (
        <p className="mb-8 text-[17px] text-gold/80">{slide.pre}</p>
      ) : null}
      <div className="space-y-3">
        {slide.lines.slice(0, revealed).map((line, i) => (
          <h1
            key={i}
            className={`beat max-w-3xl text-balance font-normal leading-snug tracking-tight ${
              slide.panel
                ? "text-3xl md:text-4xl"
                : "text-4xl md:text-5xl"
            }`}
          >
            <Rich text={line} />
          </h1>
        ))}
      </div>
      {slide.post && revealed > slide.lines.length ? (
        <p className="beat mt-8 text-[17px] text-gold/80">{slide.post}</p>
      ) : null}
      {slide.panel && revealed > panelAt ? (
        <div className="beat mt-9 max-w-3xl border-l-[3px] border-gold bg-cream/5 px-7 py-6">
          <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            {slide.panel.eyebrow}
          </div>
          {slide.panel.sub ? (
            <p className="mt-1.5 font-serif text-[16px] italic text-on-dark-muted">
              {slide.panel.sub}
            </p>
          ) : null}
          {slide.panel.paragraphs
            .slice(0, Math.max(0, revealed - panelAt - 1))
            .map((p, i) => (
              <p
                key={i}
                className="beat mt-3 text-[15.5px] leading-relaxed text-on-dark/85"
              >
                <Rich text={p} />
              </p>
            ))}
          {slide.panel.callout &&
          revealed > panelAt + 1 + slide.panel.paragraphs.length ? (
            <div className="beat mt-4 border-t border-cream/15 pt-3.5 text-[14.5px] leading-relaxed text-on-dark-muted">
              <Rich text={slide.panel.callout} />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
