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

export function SystemSlide({ slide }: { slide: SystemSlideDef }) {
  return (
    <div className="mt-4 flex flex-1 flex-col">
      <div className="mb-4 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
        {slide.eyebrow}
      </div>
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        <Rich text={slide.heading} />
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {slide.layers.map((layer) => (
          <div key={layer.label}>
            <div className={`h-[3px] w-full ${accentBar[layer.accent]}`} />
            <div className="bg-cream-light px-6 py-6">
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
    </div>
  );
}
