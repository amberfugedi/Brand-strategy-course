/**
 * The Marketing Foundation Map, drawn as the living document it is: a
 * paper sheet with the seven foundation lines, the early ones already
 * written in (peach strokes), the rest waiting. Cream surfaces only;
 * uses the courses accent pair, never layer tones.
 */
const ROWS: { label: string; fill: string | null }[] = [
  { label: "Positioning", fill: "w-4/5" },
  { label: "Get found", fill: "w-3/5" },
  { label: "Earned proof", fill: "w-2/3" },
  { label: "Referral system", fill: null },
  { label: "Brand awareness", fill: null },
  { label: "Owned audience", fill: null },
  { label: "Authority building", fill: null },
];

export function MapArt() {
  return (
    <div aria-hidden className="relative mx-auto w-[300px] shrink-0 sm:w-[330px]">
      <div className="aura -right-[26vmin] -top-[20vmin]" />
      {/* the sheet behind, for stack depth */}
      <div className="absolute inset-0 translate-x-3 translate-y-2 rotate-[1.4deg] rounded-3xl border border-subtle bg-cream-light/70" />
      {/* the working sheet */}
      <div className="relative -rotate-[1.2deg] rounded-3xl border border-subtle bg-cream-light px-7 py-6 shadow-lift">
        <div className="text-[9px] font-bold uppercase tracking-eyebrow text-gold">
          Marketing Foundation Map
        </div>
        <div className="mt-4 space-y-3.5">
          {ROWS.map((r) => (
            <div key={r.label}>
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-[14px] w-[14px] shrink-0 rounded-full border-2 border-gold ${
                    r.fill ? "bg-peach" : "bg-transparent"
                  }`}
                />
                <span className="text-[10.5px] font-bold uppercase tracking-eyebrow text-body-tertiary">
                  {r.label}
                </span>
              </div>
              <div className="ml-[26px] mt-1.5">
                {r.fill ? (
                  <div className={`h-[7px] rounded-[3px] bg-peach ${r.fill}`} />
                ) : (
                  <div className="h-px w-full bg-ink/10" />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-subtle pt-3">
          <span className="text-[8.5px] font-bold uppercase tracking-eyebrow text-body-tertiary">
            Saves as you go
          </span>
          <span className="h-1 w-16 rounded-[2px] bg-gold/20">
            <span className="block h-full w-2/5 rounded-[2px] bg-gold" />
          </span>
        </div>
      </div>
    </div>
  );
}
