import { QuestionSlide as QuestionSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { StrataEtch } from "@/components/slides/StrataEtch";
import { GapListView, PriorityOrderList } from "@/components/course/LivePlan";
import { Emphasis } from "@/components/course/Emphasis";

export function QuestionSlide({
  slide,
  revealed = Infinity,
  strata,
}: {
  slide: QuestionSlideDef;
  revealed?: number;
  strata?: number | "all";
}) {
  // Beats: lines, post, panel container, panel paragraphs, callout.
  const panelAt = slide.lines.length + (slide.post ? 1 : 0);
  return (
    <div className="relative flex flex-1 flex-col justify-center">
      {/* The etch fills empty dividers; spines with a teaching panel
          have no room for it. */}
      {!slide.panel ? <StrataEtch active={strata} /> : null}
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
              slide.panel || slide.live
                ? "text-3xl md:text-4xl"
                : "text-4xl md:text-5xl"
            }`}
          >
            <Rich text={line} />
          </h1>
        ))}
      </div>
      {slide.post && revealed > slide.lines.length ? (
        <p
          className={`beat text-[17px] text-gold/80 ${slide.live ? "mt-5" : "mt-8"}`}
        >
          {slide.post}
        </p>
      ) : null}
      {/* The buyer's own answer, on the slide that tells them to read
          it. Scrolls within the slide on short screens rather than
          pushing the question off the top. */}
      {slide.live && revealed > slide.lines.length ? (
        <div className="beat -mr-2 mt-7 max-h-[46vh] max-w-4xl overflow-y-auto pr-2">
          {slide.live === "priorities" ? (
            <PriorityOrderList dark />
          ) : (
            <GapListView dark />
          )}
        </div>
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
            <div className="beat mt-4">
              <Emphasis text={slide.panel.callout} dark />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
