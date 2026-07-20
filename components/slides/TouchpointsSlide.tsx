"use client";

import { TouchpointsSlide as TouchpointsSlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { useModule3 } from "@/lib/store/provider";

export const TOUCHPOINTS = [
  { id: "website", label: "Your website" },
  { id: "searchMap", label: "Search & map listings" },
  { id: "social", label: "Social platforms" },
  { id: "thirdParty", label: "Third-party listings" },
  { id: "communities", label: "Online communities" },
];

export function TouchpointsSlide({ slide }: { slide: TouchpointsSlideDef }) {
  const { order, setOrder } = useModule3();
  const excluded = TOUCHPOINTS.filter((t) => !order.includes(t.id));
  const labelOf = (id: string) => TOUCHPOINTS.find((t) => t.id === id)?.label ?? id;

  const move = (id: string, dir: -1 | 1) => {
    const i = order.indexOf(id);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= order.length) return;
    const next = [...order];
    [next[i], next[j]] = [next[j], next[i]];
    setOrder(next);
  };

  return (
    <div className="mt-2 flex flex-1 flex-col">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-eyebrow text-gold">
        {slide.eyebrow}
      </div>
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        <Rich text={slide.heading} />
      </h1>
      <div className="mt-3 max-w-2xl space-y-1.5">
        {slide.paragraphs.map((p, i) => (
          <p key={i} className="text-[14px] leading-relaxed text-on-dark/85">
            <Rich text={p} />
          </p>
        ))}
      </div>

      <div className="mt-6 max-w-2xl space-y-2">
        {order.map((id, i) => (
          <div
            key={id}
            className="flex items-center gap-3 border border-gold/40 bg-cream/5 px-4 py-2.5"
          >
            <span className="w-8 text-[11px] font-bold tracking-chrome text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-[15px] text-cream">{labelOf(id)}</span>
            {i === 0 ? (
              <span className="border border-gold px-2 py-0.5 text-[9px] font-bold uppercase tracking-chrome text-gold">
                Primary
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => move(id, -1)}
              disabled={i === 0}
              aria-label="Move up"
              className="px-1.5 text-[13px] text-on-dark-muted hover:text-gold disabled:opacity-30"
            >
              ↑
            </button>
            <button
              type="button"
              onClick={() => move(id, 1)}
              disabled={i === order.length - 1}
              aria-label="Move down"
              className="px-1.5 text-[13px] text-on-dark-muted hover:text-gold disabled:opacity-30"
            >
              ↓
            </button>
            <button
              type="button"
              onClick={() => setOrder(order.filter((x) => x !== id))}
              className="ml-1 text-[10px] font-bold uppercase tracking-chrome text-on-dark-muted hover:text-rust"
            >
              Remove
            </button>
          </div>
        ))}

        {excluded.length > 0 ? (
          <div className="pt-2">
            <div className="mb-1.5 text-[10px] font-bold uppercase tracking-eyebrow text-on-dark-muted">
              {order.length === 0
                ? "Add the touchpoints that apply, most important first"
                : "Doesn't apply yet"}
            </div>
            <div className="flex flex-wrap gap-2">
              {excluded.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setOrder([...order, t.id])}
                  className="border border-gold/40 px-3 py-1.5 text-[13px] text-on-dark/85 transition-colors hover:border-gold hover:text-gold"
                >
                  + {t.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
