"use client";

import { useEffect } from "react";
import Link from "next/link";
import { GapListView, PriorityOrderList } from "@/components/course/LivePlan";
import {
  computeGaps,
  computePriorities,
  computeStartingPoint,
  diagnosticComplete,
} from "@/lib/content/m2Logic";
import { useCourseStore, useModule2, usePositioning } from "@/lib/store/provider";
import { TOUCHPOINTS } from "@/components/slides/TouchpointsSlide";
import { SOURCES, STATUSES } from "@/components/slides/ProofInventorySlide";
import { REFERRAL_STAGES, STATES } from "@/components/slides/ReferralMapSlide";
import { PRESENCE_WEIGHTS } from "@/components/slides/PresencePlanSlide";
import { BUCKETS, KIND_LABELS, PLAN_FOUNDATIONS } from "@/components/slides/FoundationPlanSlide";

const label = (list: { id?: string; value?: string; label?: string; name?: string }[], key?: string) =>
  list.find((x) => (x.id ?? x.value) === key)?.label ??
  list.find((x) => (x.id ?? x.value) === key)?.name ??
  key;

/** A row of plain facts: the shape most of the later outputs take. */
function Facts({ rows }: { rows: [string, string | undefined][] }) {
  const shown = rows.filter(([, v]) => v && v.trim());
  if (!shown.length) return null;
  return (
    <dl className="space-y-1.5">
      {shown.map(([k, v]) => (
        <div key={k} className="flex gap-3 text-[14.5px] leading-relaxed">
          <dt className="w-[92px] shrink-0 text-body-tertiary">{k}</dt>
          <dd className="flex-1 text-body">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * Everything the buyer made, in one place.
 *
 * It began as the four things Module 2 calls the plan, because when it
 * was written those were the only outputs that existed. Modules 3 to 8
 * then each added a tool, and none of them reached this panel: a buyer
 * could finish the course, having filled in seven more tools, and open
 * a plan that stopped at Module 2. The course promises a marketing
 * foundation they walk away with, so the panel now carries all of it.
 *
 * Sections for Modules 1 and 2 show an empty state, because they are
 * the foundation and their absence is worth naming. The later ones
 * simply do not appear until there is something in them, so a buyer
 * halfway through sees their work rather than a column of blanks.
 *
 * Each section links back to the slide that produced it, because the
 * point of reading the plan is usually to change something in it.
 */
function Section({
  label,
  href,
  action,
  onNavigate,
  children,
}: {
  label: string;
  href?: string;
  action?: string;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-7 border-t border-subtle pt-6 first:mt-0 first:border-0 first:pt-0">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-eyebrow text-body-secondary">
        {label}
      </div>
      {children}
      {href && action ? (
        <Link
          href={href}
          onClick={onNavigate}
          className="mt-3 inline-block text-[11px] font-bold uppercase tracking-chrome text-gold transition-colors hover:text-aubergine"
        >
          {action} →
        </Link>
      ) : null}
    </div>
  );
}

export function PlanPanel({
  courseId,
  onClose,
}: {
  courseId: string;
  onClose: () => void;
}) {
  const { positioning } = usePositioning();
  const { diagnostic, audit } = useModule2();
  const { doc } = useCourseStore();
  const m3 = doc.modules.m3?.touchpoints;
  const m4 = doc.modules.m4?.proof;
  const m5 = doc.modules.m5?.referral;
  const m6 = doc.modules.m6?.presence;
  const m7 = doc.modules.m7?.ownedAudience;
  const m8 = doc.modules.m8;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const complete = diagnosticComplete(diagnostic);
  const start = complete
    ? computeStartingPoint(
        computePriorities(diagnostic),
        computeGaps(computePriorities(diagnostic), audit),
      )
    : null;
  const statement = positioning.statement?.trim();

  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        className="fixed inset-0 z-40 bg-ink/30"
      />
      <aside
        role="dialog"
        aria-label="Your plan"
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col overflow-y-auto border-l border-subtle bg-cream px-6 py-7 text-body shadow-lift surface-cream sm:px-7"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
              Your work, in one place
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">Your plan.</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-1 shrink-0 px-2 py-1 text-[18px] leading-none text-body-tertiary transition-colors hover:text-aubergine"
          >
            ×
          </button>
        </div>

        <div className="mt-6">
          <Section
            label="Positioning"
            href={`/${courseId}/m1/31`}
            action="Edit your statement"
            onNavigate={onClose}
          >
            {statement ? (
              <p className="font-serif text-[16px] italic leading-relaxed text-body">
                {statement}
              </p>
            ) : (
              <p className="text-[14.5px] text-body-tertiary">
                No statement yet. Module 1 produces it.
              </p>
            )}
          </Section>

          <Section
            label="Priority order"
            href={`/${courseId}/m2/10`}
            action="Edit your six answers"
            onNavigate={onClose}
          >
            <PriorityOrderList reasons={false} cols={1} />
          </Section>

          <Section
            label="Gap List"
            href={`/${courseId}/m2/22`}
            action="Revisit the audit"
            onNavigate={onClose}
          >
            <GapListView cols={1} />
          </Section>

          <Section label="Starting point" onNavigate={onClose}>
            {start ? (
              <>
                <div className="text-[15px] font-semibold">
                  {start.foundation.name}
                </div>
                <p className="mt-1 text-[13.5px] leading-relaxed text-body-tertiary">
                  {start.reasoning}
                </p>
              </>
            ) : (
              <p className="text-[14.5px] text-body-tertiary">
                Finish the diagnostic and the audit and it appears here.
              </p>
            )}
          </Section>

          {m3?.order?.length ? (
            <Section
              label="Touchpoints"
              href={`/${courseId}/m3/26`}
              action="Reorder them"
              onNavigate={onClose}
            >
              <Facts rows={[["Primary", label(TOUCHPOINTS, m3.order[0])]]} />
              {m3.order.length > 1 ? (
                <p className="mt-2 text-[13.5px] leading-relaxed text-body-tertiary">
                  Then {m3.order.slice(1).map((id) => label(TOUCHPOINTS, id)).join(", ")}.
                </p>
              ) : null}
            </Section>
          ) : null}

          {m4?.buildFirst || Object.keys(m4?.statuses ?? {}).length ? (
            <Section
              label="Earned proof"
              href={`/${courseId}/m4/19`}
              action="Revisit the inventory"
              onNavigate={onClose}
            >
              <Facts
                rows={[
                  ...SOURCES.map(
                    (src) =>
                      [src.label, label(STATUSES, m4?.statuses?.[src.id])] as [
                        string,
                        string | undefined,
                      ],
                  ),
                  ["Build first", label(SOURCES, m4?.buildFirst)],
                ]}
              />
            </Section>
          ) : null}

          {m5?.source || m5?.weakStage ? (
            <Section
              label="Referral system"
              href={`/${courseId}/m5/20`}
              action="Revisit the map"
              onNavigate={onClose}
            >
              <Facts
                rows={[
                  ["Source", m5?.source],
                  ["Weakest", label(REFERRAL_STAGES, m5?.weakStage)],
                  ["The change", m5?.change],
                ]}
              />
            </Section>
          ) : null}

          {m6?.place || m6?.weight ? (
            <Section
              label="Brand awareness"
              href={`/${courseId}/m6/19`}
              action="Revisit the plan"
              onNavigate={onClose}
            >
              <Facts
                rows={[
                  ["Weight", label(PRESENCE_WEIGHTS, m6?.weight)],
                  ["Place", m6?.place],
                  ["Cadence", m6?.cadence],
                ]}
              />
            </Section>
          ) : null}

          {m7?.channel ? (
            <Section
              label="Owned audience"
              href={`/${courseId}/m7/20`}
              action="Revisit the channel"
              onNavigate={onClose}
            >
              <Facts
                rows={[
                  ["Channel", m7?.channel],
                  ["Starts with", m7?.people],
                  ["Cadence", m7?.cadence],
                ]}
              />
            </Section>
          ) : null}

          {m8?.authority?.kind ? (
            <Section
              label="Authority"
              href={`/${courseId}/m8/11`}
              action="Change the kind"
              onNavigate={onClose}
            >
              <Facts rows={[["Kind", KIND_LABELS[m8.authority.kind]]]} />
            </Section>
          ) : null}

          {Object.keys(m8?.plan?.buckets ?? {}).length ? (
            <Section
              label="Build order"
              href={`/${courseId}/m8/18`}
              action="Re-sort it"
              onNavigate={onClose}
            >
              {BUCKETS.map((b) => {
                const inBucket = PLAN_FOUNDATIONS.filter(
                  (f) => m8?.plan?.buckets?.[f.id] === b.value,
                );
                if (!inBucket.length) return null;
                return (
                  <div key={b.value} className="mt-2 first:mt-0">
                    <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                      {b.label}
                    </div>
                    <p className="mt-1 text-[14.5px] leading-relaxed">
                      {inBucket.map((f) => f.name).join(", ")}
                    </p>
                  </div>
                );
              })}
            </Section>
          ) : null}
        </div>
      </aside>
    </>
  );
}
