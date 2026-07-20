"use client";

import { ProofInventorySlide as ProofInventorySlideDef } from "@/lib/content/types";
import { Rich } from "@/components/Rich";
import { useModule4 } from "@/lib/store/provider";

const SOURCES = [
  { id: "client", label: "Client proof", hint: "Reviews, testimonials, case studies, before-and-afters" },
  { id: "peer", label: "Peer proof", hint: "Referrals and endorsements from other professionals" },
  { id: "institutional", label: "Institutional proof", hint: "Credentials, licenses, press, association membership" },
];

const STATUSES = [
  { value: "current", label: "Have it, current" },
  { value: "stale", label: "Have it, gone stale" },
  { value: "missing", label: "Missing" },
];

export function ProofInventorySlide({
  slide,
}: {
  slide: ProofInventorySlideDef;
}) {
  const { proof, setStatus, setBuildFirst } = useModule4();
  const statuses = proof.statuses ?? {};

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

      <div className="mt-6 max-w-3xl space-y-3">
        {SOURCES.map((source) => (
          <div key={source.id} className="border border-gold/40 bg-cream/5 px-5 py-4">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
              <span className="text-[15px] font-bold text-cream">
                {source.label}
              </span>
              <span className="font-serif text-[12.5px] italic text-on-dark-muted">
                {source.hint}
              </span>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {STATUSES.map((s) => {
                const active = statuses[source.id] === s.value;
                return (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => setStatus(source.id, s.value)}
                    aria-pressed={active}
                    className={`border px-3 py-1.5 text-[12.5px] transition-colors ${
                      active
                        ? "border-gold bg-gold text-ink"
                        : "border-gold/40 text-on-dark/85 hover:border-gold"
                    }`}
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="border border-gold/40 bg-cream/5 px-5 py-4">
          <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            The one source to build first
          </div>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {SOURCES.map((source) => {
              const active = proof.buildFirst === source.id;
              return (
                <button
                  key={source.id}
                  type="button"
                  onClick={() => setBuildFirst(source.id)}
                  aria-pressed={active}
                  className={`border px-3 py-1.5 text-[12.5px] transition-colors ${
                    active
                      ? "border-gold bg-gold text-ink"
                      : "border-gold/40 text-on-dark/85 hover:border-gold"
                  }`}
                >
                  {source.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
