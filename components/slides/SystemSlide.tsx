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
      {slide.eyebrow ? (
        <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-gold">{slide.eyebrow}</div>
      ) : null}
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      {slide.base ? (
        <div
          className={`mt-8 ${
            revealed > slide.layers.length ? "beat" : "opacity-0"
          }`}
        >
          <div className="h-[3px] w-full bg-gold" />
          <div className="rounded-b-3xl bg-white/5 px-6 py-5">
            <div className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
              {slide.base.label}
            </div>
            <p className="mb-4 text-[16px] text-on-dark">
              <Rich text={slide.base.text} />
            </p>
            <ul>
              <li className="flex items-baseline gap-3">
                <span className="text-[10px] font-bold tracking-chrome text-on-dark-muted">
                  01
                </span>
                <span className="text-[16px]">
                  <Rich text="*Positioning*" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      ) : null}

      <div className="mt-6 grid items-stretch gap-6 md:grid-cols-3">
        {slide.layers.slice(0, revealed).map((layer, li) => (
          <div key={layer.label} className="beat flex flex-col">
            <div className={`h-[3px] w-full ${accentBar[layer.accent]}`} />
            <div className="flex-1 rounded-b-3xl bg-white/5 px-6 py-6">
              <div
                className={`mb-2 text-[11px] font-bold uppercase tracking-eyebrow ${accentLabel[layer.accent]}`}
              >
                {layer.label}
              </div>
              <p className="mb-5 text-[16px] text-on-dark">
                <Rich text={layer.sub} />
              </p>
              <ul className="space-y-2.5">
                {layer.items.map((item, idx) => {
                  const before = slide.layers
                    .slice(0, li)
                    .reduce((n, l) => n + l.items.length, 0);
                  const due =
                    revealed >= slide.layers.length + 2 + before + idx;
                  return (
                  <li
                    key={item.num}
                    className={`flex items-baseline gap-3 ${
                      due ? "beat" : "opacity-0"
                    }`}
                  >
                    <span className="text-[10px] font-bold tracking-chrome text-on-dark-muted">
                      {item.num}
                    </span>
                    <span className="text-[16px]">
                      <Rich text={item.text} />
                    </span>
                    {item.mod ? (
                      <span className="text-[10px] font-bold uppercase tracking-chrome text-on-dark-muted">
                        {item.mod}
                      </span>
                    ) : null}
                  </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {slide.note &&
      revealed >
        slide.layers.length +
          1 +
          slide.layers.reduce((n, l) => n + l.items.length, 0) ? (
        <p className="beat mt-6 max-w-2xl text-[16px] text-on-dark-muted">
          <Rich text={slide.note} />
        </p>
      ) : null}
    </div>
  );
}
