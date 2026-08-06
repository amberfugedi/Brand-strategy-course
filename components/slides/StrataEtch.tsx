/**
 * The etched strata: the seven-foundation motif drawn large and
 * quiet on the right half of dark divider slides, so the module's
 * place in the system is always in the corner of the eye. Base bar
 * (positioning) in peach at low opacity, foundation bars in faint
 * cream; the active module's foundation takes the layer tone via
 * --accent-layer (cream on pre-layer modules, per the layer rule).
 * Purely decorative. Desktop only; phones need the room.
 */
const WIDTHS = ["68%", "88%", "74%", "92%", "70%", "84%", "76%"];

export function StrataEtch({ active }: { active?: number | "all" }) {
  // The motif earns its place when one foundation glows against the
  // rest. With every bar lit (the audit module) it reads as stripes,
  // so those dividers stay clean.
  if (active === "all") return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-[4vw] top-1/2 hidden w-[34vw] max-w-[460px] -translate-y-1/2 lg:block"
    >
      <div className="flex flex-col items-end gap-6">
        {WIDTHS.map((w, i) => {
          // Bar 0 is positioning (foundation 1, the base); bars 1-6
          // are foundations 2-7. active names a foundation number.
          const isBase = i === 0;
          const isActive = active === i + 1;
          return (
            <div
              key={i}
              className="rounded-[6px]"
              style={{
                width: w,
                height: isActive ? 16 : 12,
                background: isBase
                  ? `rgba(252, 228, 196, ${isActive ? 0.32 : 0.13})`
                  : isActive
                    ? "rgb(var(--accent-layer) / 0.42)"
                    : "rgba(253, 249, 245, 0.05)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
