import { QuestionSlide as QuestionSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function QuestionSlide({
  slide,
  revealed = Infinity,
}: {
  slide: QuestionSlideDef;
  revealed?: number;
}) {
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
            className="beat max-w-3xl text-balance text-4xl font-normal leading-snug tracking-tight md:text-5xl"
          >
            <Rich text={line} />
          </h1>
        ))}
      </div>
      {slide.post && revealed > slide.lines.length ? (
        <p className="beat mt-8 text-[17px] text-gold/80">{slide.post}</p>
      ) : null}
    </div>
  );
}
