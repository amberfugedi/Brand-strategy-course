import { QuestionSlide as QuestionSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

export function QuestionSlide({ slide }: { slide: QuestionSlideDef }) {
  return (
    <div className="flex flex-1 flex-col justify-center">
      {slide.pre ? (
        <p className="mb-8 text-[17px] text-gold/80">{slide.pre}</p>
      ) : null}
      <div className="space-y-3">
        {slide.lines.map((line, i) => (
          <h1
            key={i}
            className="text-4xl font-normal leading-snug tracking-tight md:text-5xl"
          >
            <Rich text={line} />
          </h1>
        ))}
      </div>
      {slide.post ? (
        <p className="mt-8 text-[17px] text-gold/80">{slide.post}</p>
      ) : null}
    </div>
  );
}
