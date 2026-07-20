"use client";

import { useRef, useState } from "react";
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

/**
 * The Module 3 tool. Ordering is drag-first: rows drag to reorder
 * (pointer events, so touch and mouse both work), and pool chips can
 * be dragged into the list at a position or simply tapped to add.
 * The arrow and remove buttons stay as the keyboard-friendly path.
 */
export function TouchpointsSlide({ slide }: { slide: TouchpointsSlideDef }) {
  const { order, setOrder } = useModule3();
  const excluded = TOUCHPOINTS.filter((t) => !order.includes(t.id));
  const labelOf = (id: string) => TOUCHPOINTS.find((t) => t.id === id)?.label ?? id;

  const listRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const orderRef = useRef(order);
  orderRef.current = order;

  const [dragId, setDragId] = useState<string | null>(null);
  const [chipInsert, setChipInsert] = useState<number | null>(null);
  const movedRef = useRef(false);

  /** Insertion index for a pointer height, by row midpoints. */
  const indexAt = (y: number, ignoreId?: string) => {
    let idx = 0;
    for (const id of orderRef.current) {
      if (id === ignoreId) continue;
      const el = rowRefs.current[id];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (y > r.top + r.height / 2) idx++;
    }
    return idx;
  };

  const overList = (x: number, y: number) => {
    const el = listRef.current;
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return (
      x >= r.left - 16 &&
      x <= r.right + 16 &&
      y >= r.top - 24 &&
      y <= r.bottom + 24
    );
  };

  const beginRowDrag = (id: string) => (e: React.PointerEvent) => {
    e.preventDefault();
    setDragId(id);
    const onMove = (ev: PointerEvent) => {
      ev.preventDefault();
      const target = indexAt(ev.clientY, id);
      const current = orderRef.current.indexOf(id);
      if (target !== current) {
        const next = orderRef.current.filter((x) => x !== id);
        next.splice(target, 0, id);
        setOrder(next);
      }
    };
    const end = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      setDragId(null);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
  };

  const beginChipDrag = (id: string) => (e: React.PointerEvent) => {
    const startX = e.clientX;
    const startY = e.clientY;
    movedRef.current = false;
    let insert: number | null = null;
    const onMove = (ev: PointerEvent) => {
      if (
        Math.abs(ev.clientX - startX) + Math.abs(ev.clientY - startY) > 8 ||
        movedRef.current
      ) {
        movedRef.current = true;
        ev.preventDefault();
        insert = overList(ev.clientX, ev.clientY) ? indexAt(ev.clientY) : null;
        setChipInsert(insert);
      }
    };
    const end = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      setChipInsert(null);
      if (movedRef.current && insert !== null) {
        const next = orderRef.current.filter((x) => x !== id);
        next.splice(insert, 0, id);
        setOrder(next);
      }
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
  };

  const move = (id: string, dir: -1 | 1) => {
    const i = order.indexOf(id);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= order.length) return;
    const next = [...order];
    [next[i], next[j]] = [next[j], next[i]];
    setOrder(next);
  };

  const insertLine = (
    <div aria-hidden="true" className="h-[2px] rounded bg-gold" />
  );

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

      <div ref={listRef} className="mt-6 max-w-2xl space-y-2">
        {order.map((id, i) => (
          <div key={id}>
            {chipInsert === i ? insertLine : null}
            <div
              ref={(el) => {
                rowRefs.current[id] = el;
              }}
              className={`flex select-none items-center gap-2.5 border bg-cream/5 px-3 py-2.5 transition-colors sm:gap-3 sm:px-4 ${
                dragId === id ? "border-gold bg-cream/10" : "border-gold/40"
              }`}
            >
              <button
                type="button"
                onPointerDown={beginRowDrag(id)}
                aria-label={`Drag to reorder ${labelOf(id)}`}
                style={{ touchAction: "none" }}
                className={`-ml-1 px-1 text-[15px] leading-none text-on-dark-muted hover:text-gold ${
                  dragId === id ? "cursor-grabbing text-gold" : "cursor-grab"
                }`}
              >
                ⠿
              </button>
              <span className="w-6 text-[11px] font-bold tracking-chrome text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[14.5px] text-cream">
                {labelOf(id)}
              </span>
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
                className="px-1 text-[13px] text-on-dark-muted hover:text-gold disabled:opacity-30"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => move(id, 1)}
                disabled={i === order.length - 1}
                aria-label="Move down"
                className="px-1 text-[13px] text-on-dark-muted hover:text-gold disabled:opacity-30"
              >
                ↓
              </button>
              <button
                type="button"
                onClick={() => setOrder(order.filter((x) => x !== id))}
                aria-label={`Remove ${labelOf(id)}`}
                className="px-1 text-[15px] leading-none text-on-dark-muted hover:text-rust"
              >
                ×
              </button>
            </div>
          </div>
        ))}
        {chipInsert === order.length ? insertLine : null}
        {order.length > 0 ? (
          <p className="pt-0.5 font-serif text-[12.5px] italic text-on-dark-muted">
            Drag to reorder. The top spot is your primary.
          </p>
        ) : null}
      </div>

      {excluded.length > 0 ? (
        <div className="mt-4 max-w-2xl">
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
                onPointerDown={beginChipDrag(t.id)}
                onClick={() => {
                  if (movedRef.current) {
                    movedRef.current = false;
                    return;
                  }
                  setOrder([...order, t.id]);
                }}
                style={{ touchAction: "none" }}
                className="cursor-grab select-none border border-gold/40 px-3 py-1.5 text-[13px] text-on-dark/85 transition-colors hover:border-gold hover:text-gold"
              >
                + {t.label}
              </button>
            ))}
          </div>
          <p className="mt-1.5 font-serif text-[12.5px] italic text-on-dark-muted">
            Tap to add, or drag one into the list where it belongs.
          </p>
        </div>
      ) : null}
    </div>
  );
}
