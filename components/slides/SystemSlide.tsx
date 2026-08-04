import { SystemSlide as SystemSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";

const accentBar = {
  teal: "bg-teal",
  rust: "bg-rust",
  olive: "bg-olive",
} as const;

const accentLabel = {
  teal: "text-teal",
  rust: "text-rust",
  olive: "text-olive",
} as const;

export function SystemSlide({
  slide,
  revealed = Infinity,
}: {
  slide: SystemSlideDef;
  revealed?: number;
}) {
  return (
    <div className="flex flex-1 flex-col justify-center py-4">
      <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
        {slide.eyebrow}
      </div>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
        {slide.layers.slice(0, revealed).map((layer) => (
          <div key={layer.label} className="beat flex flex-col">
            <div className={`h-[3px] w-full ${accentBar[layer.accent]}`} />
            <div className="flex-1 bg-cream-light px-6 py-6">
              <div
                className={`mb-2 text-[11px] font-bold uppercase tracking-eyebrow ${accentLabel[layer.accent]}`}
              >
                {layer.label}
              </div>
              <p className="mb-5 text-[15px] text-body">
                <Rich text={layer.sub} />
              </p>
              <ul className="space-y-2.5">
                {layer.items.map((item) => (
                  <li key={item.num} className="flex items-baseline gap-3">
                    <span className="text-[10px] font-bold tracking-chrome text-body-tertiary">
                      {item.num}
                    </span>
                    <span className="text-[15px]">
                      <Rich text={item.text} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {slide.base && revealed > slide.layers.length ? (
        <div className="beat mt-6">
          <div className="h-[3px] w-full bg-gold" />
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 bg-cream-light px-6 py-4">
            <span className="text-[11px] font-bold uppercase tracking-eyebrow text-gold">
              {slide.base.label}
            </span>
            <span className="text-[15px] text-body">
              <Rich text={slide.base.text} />
            </span>
          </div>
        </div>
      ) : null}

      {slide.note && revealed > slide.layers.length + 1 ? (
        <p className="beat mt-6 max-w-2xl text-[15px] text-body-secondary">
          <Rich text={slide.note} />
        </p>
      ) : null}
    </div>
  );
}
