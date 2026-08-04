/**
 * The course's signature wayfinding mark: seven foundation strata in
 * their layer colors (positioning gold at the base of the system,
 * then get found, get chosen, be remembered). The active module's
 * foundation stands taller; "all" lights the full set (the audit).
 */
const SEGMENTS = [
  { n: 1, cls: "bg-gold" },
  { n: 2, cls: "bg-teal" },
  { n: 3, cls: "bg-rust" },
  { n: 4, cls: "bg-rust" },
  { n: 5, cls: "bg-olive" },
  { n: 6, cls: "bg-olive" },
  { n: 7, cls: "bg-olive" },
];

export function StrataMark({ active }: { active: number | "all" }) {
  return (
    <div className="shrink-0">
      <div className="flex items-end gap-1" aria-hidden>
        {SEGMENTS.map((s) => {
          const on = active === "all" || active === s.n;
          return (
            <span
              key={s.n}
              className={`w-6 ${s.cls} ${on ? "h-3.5" : "h-1.5 opacity-40"}`}
            />
          );
        })}
      </div>
      <div className="mt-2 text-[10px] font-bold uppercase tracking-eyebrow text-on-dark-muted">
        {active === "all"
          ? "All seven foundations"
          : `Foundation 0${active} of seven`}
      </div>
    </div>
  );
}
