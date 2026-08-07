"use client";

/**
 * The buyer's own Module 2 output, rendered live wherever it's needed:
 * on the two reading slides that ask them to read it, on the framework
 * slides that explain the tiers, and in the reference drawer that
 * carries it through the rest of the course. One renderer so the list
 * looks the same everywhere it appears, on cream and on plum.
 */
import {
  computeGaps,
  computePriorities,
  diagnosticComplete,
  GapTier,
  PriorityTier,
} from "@/lib/content/m2Logic";
import { useModule2 } from "@/lib/store/provider";

const TIER_LABEL: Record<PriorityTier, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
  na: "Not applicable",
};

// Single-hue intensity ramp on the course accent: the tier reads by
// weight, not by hue, so no traffic-light color enters the palette.
const TIER_INK: Record<PriorityTier, string> = {
  high: "border-gold text-gold",
  medium: "border-gold/55 text-gold",
  low: "border-gold/25 text-gold",
  na: "border-ink/20 text-body-tertiary",
};

const TIER_INK_DARK: Record<PriorityTier, string> = {
  high: "border-gold text-gold",
  medium: "border-gold/55 text-gold",
  low: "border-gold/25 text-gold/80",
  na: "border-cream/20 text-on-dark-muted",
};

const GAP_LABEL: Record<GapTier, string> = {
  critical: "Critical",
  maintenance: "Maintenance",
  solid: "Solid",
};

// Group headings carry the tier by weight, not by hue: full gold for
// critical, easing back through maintenance to solid.
const GAP_TEXT: Record<GapTier, string> = {
  critical: "text-gold",
  maintenance: "text-gold/80",
  solid: "text-body-tertiary",
};

const GAP_TEXT_DARK: Record<GapTier, string> = {
  critical: "text-gold",
  maintenance: "text-gold/80",
  solid: "text-on-dark-muted",
};

function Pill({ label, ink }: { label: string; ink: string }) {
  return (
    <span
      className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-chrome ${ink}`}
    >
      {label}
    </span>
  );
}

function Card({
  dark,
  children,
}: {
  dark: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-[14px] border px-4 py-3 ${
        dark
          ? "border-cream/15 bg-cream/5"
          : "border-subtle bg-cream-light shadow-lift"
      }`}
    >
      {children}
    </div>
  );
}

function Empty({ dark, children }: { dark: boolean; children: React.ReactNode }) {
  return (
    <p className={`text-[14.5px] ${dark ? "text-on-dark-muted" : "text-body-tertiary"}`}>
      {children}
    </p>
  );
}

/** The seven foundations in priority order, with the reasoning line. */
export function PriorityOrderList({
  dark = false,
  reasons = true,
  cols = 2,
}: {
  dark?: boolean;
  /** Reasoning lines are the point on the reading slides, noise in the drawer. */
  reasons?: boolean;
  /** Two columns on a slide; one inside the narrow drawer. */
  cols?: 1 | 2;
}) {
  const { diagnostic } = useModule2();
  if (!diagnosticComplete(diagnostic)) {
    return (
      <Empty dark={dark}>
        Answer the six diagnostic questions and your order appears here.
      </Empty>
    );
  }
  const priorities = computePriorities(diagnostic);
  return (
    <div className={`grid gap-3 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {priorities.map((p) => (
        <Card key={p.foundation.id} dark={dark}>
          <div className="flex items-center gap-2.5">
            <Pill
              label={TIER_LABEL[p.tier]}
              ink={dark ? TIER_INK_DARK[p.tier] : TIER_INK[p.tier]}
            />
            <span
              className={`text-[15px] font-semibold ${dark ? "text-on-dark" : ""}`}
            >
              {p.foundation.name}
            </span>
          </div>
          {reasons ? (
            <p
              className={`mt-1.5 text-[12.5px] leading-snug ${
                dark ? "text-on-dark-muted" : "text-body-tertiary"
              }`}
            >
              {p.reasons[0]}
            </p>
          ) : null}
        </Card>
      ))}
    </div>
  );
}

/**
 * The Gap List as the narration describes it: three groupings, each
 * foundation sorted into one by the worst rating it was given. The
 * state is the group heading rather than a chip on every row, because
 * a row that leads with CRITICAL reads as an instruction, and on a
 * low-priority foundation that is the opposite of what the module
 * teaches. Priority stays on the row, where it explains the order
 * within a group rather than competing with it.
 *
 * Within a group the order is high priority first, which is the same
 * rule computeStartingPoint uses. The first foundation under Critical
 * is therefore the starting point the module arrives at later.
 */
const GAP_ORDER_UI: GapTier[] = ["critical", "maintenance", "solid"];

const GAP_NOTE: Record<GapTier, string> = {
  critical: "Broken or absent",
  maintenance: "Slipping, not yet critical",
  solid: "Working, not blocking",
};

const PRIORITY_RANK: Record<string, number> = { high: 0, medium: 1, low: 2, na: 3 };

export function GapListView({
  dark = false,
  cols = 2,
}: {
  dark?: boolean;
  cols?: 1 | 2;
}) {
  const { diagnostic, audit } = useModule2();
  if (!diagnosticComplete(diagnostic)) {
    return (
      <Empty dark={dark}>
        The Gap List compiles from your diagnostic and audit. Do those first.
      </Empty>
    );
  }
  const gaps = computeGaps(computePriorities(diagnostic), audit);
  const answered = gaps.filter((g) => g.gap !== null);
  const unanswered = gaps.length - answered.length;

  if (!answered.length) {
    return <Empty dark={dark}>Run the audit and your Gap List appears here.</Empty>;
  }

  return (
    <>
      <div className={`grid gap-3 ${cols === 2 ? "sm:grid-cols-3" : ""}`}>
        {GAP_ORDER_UI.map((tier) => {
          const rows = answered
            .filter((g) => g.gap === tier)
            .sort((a, b) => PRIORITY_RANK[a.tier] - PRIORITY_RANK[b.tier]);
          return (
            <Card key={tier} dark={dark}>
              <div className="flex items-baseline justify-between gap-2">
                <span
                  className={`text-[11px] font-bold uppercase tracking-eyebrow ${
                    dark ? GAP_TEXT_DARK[tier] : GAP_TEXT[tier]
                  }`}
                >
                  {GAP_LABEL[tier]}
                </span>
                <span
                  className={`text-[11px] tabular-nums ${
                    dark ? "text-on-dark-muted" : "text-body-tertiary"
                  }`}
                >
                  {rows.length}
                </span>
              </div>
              <div
                className={`mt-0.5 text-[11.5px] leading-snug ${
                  dark ? "text-on-dark-muted" : "text-body-tertiary"
                }`}
              >
                {GAP_NOTE[tier]}
              </div>

              {rows.length ? (
                <ul className="mt-3 space-y-2">
                  {rows.map((g) => (
                    <li key={g.foundation.id}>
                      <div
                        className={`text-[14.5px] font-semibold leading-snug ${
                          dark ? "text-on-dark" : ""
                        }`}
                      >
                        {g.foundation.name}
                      </div>
                      <div
                        className={`text-[10.5px] uppercase tracking-chrome ${
                          dark ? "text-on-dark-muted" : "text-body-tertiary"
                        }`}
                      >
                        {g.tier} priority
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className={`mt-3 text-[13.5px] ${
                    dark ? "text-on-dark-muted" : "text-body-tertiary"
                  }`}
                >
                  None.
                </p>
              )}
            </Card>
          );
        })}
      </div>
      {unanswered > 0 ? (
        <p
          className={`mt-3 text-[13px] ${
            dark ? "text-on-dark-muted" : "text-body-tertiary"
          }`}
        >
          {unanswered === 1
            ? "One foundation is still unanswered in the audit."
            : `${unanswered} foundations are still unanswered in the audit.`}
        </p>
      ) : null}
    </>
  );
}

/** True once there is a priority order worth showing. */
export function useHasPlan() {
  const { diagnostic } = useModule2();
  return diagnosticComplete(diagnostic);
}
