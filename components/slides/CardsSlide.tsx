import { CardsSlide as CardsSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

function Card({
  card,
}: {
  card: CardsSlideDef["cards"][number];
}) {
  return (
    <div className="beat h-full bg-cream-dark/60 px-6 py-5">
      <div className="text-[10px] font-bold uppercase tracking-eyebrow text-rust">
        {card.label}
      </div>
      <div className="mt-1.5 text-[18px] font-bold tracking-tight text-aubergine">
        {card.title}
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed text-body-secondary">
        <Rich text={card.text} />
      </p>
    </div>
  );
}

export function CardsSlide({
  slide,
  revealed = Infinity,
}: {
  slide: CardsSlideDef;
  revealed?: number;
}) {
  const shown = slide.cards.slice(0, revealed);
  const fiveUp = slide.cards.length === 5;
  const top = fiveUp ? shown.slice(0, 3) : shown;
  const bottom = fiveUp ? shown.slice(3) : [];

  return (
    <div className="mt-2 flex flex-1 flex-col">
      <div className="mb-3 text-[11px] font-bold uppercase tracking-eyebrow text-body-tertiary">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-aubergine md:text-5xl">
        <Rich text={slide.heading} />
      </h1>
      {slide.intro ? (
        <p className="mt-4 max-w-4xl text-[15px] leading-relaxed">
          <Rich text={slide.intro} />
        </p>
      ) : null}

      <div
        className={`mt-7 grid gap-4 ${
          fiveUp
            ? "md:grid-cols-3"
            : slide.cards.length === 4
              ? "md:grid-cols-2"
              : "md:grid-cols-3"
        }`}
      >
        {top.map((card) => (
          <Card key={card.label} card={card} />
        ))}
      </div>
      {fiveUp && bottom.length > 0 ? (
        <div className="mt-4 grid gap-4 md:mx-auto md:w-2/3 md:grid-cols-2">
          {bottom.map((card) => (
            <Card key={card.label} card={card} />
          ))}
        </div>
      ) : null}

      {slide.footnote && revealed >= slide.cards.length ? (
        <p className="beat mt-6 max-w-4xl text-[15px] leading-relaxed">
          <Rich text={slide.footnote} />
        </p>
      ) : null}
    </div>
  );
}
