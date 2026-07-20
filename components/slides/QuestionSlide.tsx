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
      {slide.pre ? (
        <p className="mb-8 text-[17px] text-gold/80">{slide.pre}</p>
      ) : null}
      <div className="space-y-3">
        {slide.lines.slice(0, revealed).map((line, i) => (
          <h1
            key={i}
            className="beat text-4xl font-normal leading-snug tracking-tight md:text-5xl"
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
