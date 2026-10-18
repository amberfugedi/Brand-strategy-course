"use client";

import { useState } from "react";
import Link from "next/link";
import type { CourseMeta } from "@/lib/content/meta";
import { Rich } from "@/components/Rich";
import { useCourseStore, useFinish, useModule8 } from "@/lib/store/provider";
import {
  DIAGNOSTIC_QUESTIONS,
  computeGaps,
  computePriorities,
  computeStartingPoint,
  diagnosticComplete,
} from "@/lib/content/m2Logic";
import { TOUCHPOINTS } from "@/components/slides/TouchpointsSlide";
import { SOURCES } from "@/components/slides/ProofInventorySlide";
import { REFERRAL_STAGES, STATES } from "@/components/slides/ReferralMapSlide";
import { BUCKETS, KIND_LABELS } from "@/components/slides/FoundationPlanSlide";
import { STATUSES } from "@/components/slides/ProofInventorySlide";
import { PRESENCE_CONDITIONS, PRESENCE_WEIGHTS } from "@/components/slides/PresencePlanSlide";

/**
 * The Marketing Foundation Map: the thing the course says you leave
 * with, as a document you can work in and take away.
 *
 * It was a drawing before this. MapArt renders seven foundation lines
 * that fill in as modules complete, which shows progress and holds
 * none of the buyer's answers, so the course promised an interactive
 * Map and delivered an illustration plus a separate panel.
 *
 * This is the same seven lines carrying what they decided: the
 * priority the audit gave each foundation, the decision the owning
 * module produced, and the build order, which is editable here
 * because the reason to open a plan is usually to change it. Writing
 * to the same state as the Module 8 slide, so the two never disagree.
 *
 * Printing is the browser's, through a stylesheet that drops the
 * chrome and the controls and keeps the document.
 */

const TIER_LABEL: Record<string, string> = {
  high: "High priority",
  medium: "Medium priority",
  low: "Low priority",
  na: "Not applicable",
};

const GAP_LABEL: Record<string, string> = {
  critical: "Critical",
  maintenance: "Maintenance",
  solid: "Solid",
};

export function FoundationMap({ course }: { course: CourseMeta }) {
  const { doc, ready } = useCourseStore();
  const { buckets, setBucket } = useModule8();
  const { name, completedAt } = useFinish();
  const [editing, setEditing] = useState(true);

  const m1 = doc.modules.m1?.positioning;
  const m2 = doc.modules.m2 ?? {};
  const m3 = doc.modules.m3?.touchpoints;
  const m4 = doc.modules.m4?.proof;
  const m5 = doc.modules.m5?.referral;
  const m6 = doc.modules.m6?.presence;
  const m7 = doc.modules.m7?.ownedAudience;
  const m8 = doc.modules.m8;

  const diagnostic = m2.diagnostic ?? {};
  const gaps = diagnosticComplete(diagnostic)
    ? computeGaps(computePriorities(diagnostic), m2.audit ?? {})
    : [];
  const gapOf = (id: string) => gaps.find((g) => g.foundation.id === id);
  // Module 2's single most important output, and it was not on the Map
  // at all: the one foundation the audit says to build first, and why.
  // The audit's own working. It drives every tier on the page and
  // until now lived on one Module 2 slide and in no export, so the
  // plan asserted an order without ever showing why.
  const priorities = diagnosticComplete(diagnostic)
    ? computePriorities(diagnostic)
    : [];
  const answered = DIAGNOSTIC_QUESTIONS.map((q) => ({
    prompt: q.prompt,
    answer: q.options.find((o) => o.value === diagnostic[q.id])?.label,
  })).filter((a) => a.answer);

  const start = gaps.length
    ? computeStartingPoint(computePriorities(diagnostic), gaps)
    : null;

  const pick = (list: { id?: string; label?: string; name?: string }[], key?: string) =>
    list.find((x) => x.id === key)?.label ?? list.find((x) => x.id === key)?.name;

  const val = (list: { value: string; label: string }[], key?: string) =>
    list.find((x) => x.value === key)?.label;

  // Each foundation carries the lead decision and the detail behind
  // it. The lead alone read as thin: brand awareness said "a monthly
  // local talk" and dropped the weight, the conditions and whether
  // they held, all of which the module asked for.
  const rows: {
    id: string;
    name: string;
    href: string;
    decision?: string;
    details: [string, string | undefined][];
  }[] = [
    {
      id: "getFound",
      name: "Get found",
      href: `/${course.id}/m3/26`,
      decision: m3?.order?.length
        ? `Primary touchpoint: ${pick(TOUCHPOINTS, m3.order[0])}.`
        : undefined,
      details: [
        [
          "Then",
          m3?.order?.length && m3.order.length > 1
            ? m3.order.slice(1).map((id) => pick(TOUCHPOINTS, id)).join(", ")
            : undefined,
        ],
      ],
    },
    {
      id: "earnedProof",
      name: "Earned proof",
      href: `/${course.id}/m4/19`,
      decision: m4?.buildFirst
        ? `Build ${pick(SOURCES, m4.buildFirst)?.toLowerCase()} first.`
        : undefined,
      details: SOURCES.map(
        (src) =>
          [src.label, val(STATUSES, m4?.statuses?.[src.id])] as [
            string,
            string | undefined,
          ],
      ),
    },
    {
      id: "referrals",
      name: "Referral system",
      href: `/${course.id}/m5/20`,
      decision: m5?.change,
      details: [
        ["Source", m5?.source],
        ["Weakest", pick(REFERRAL_STAGES, m5?.weakStage)],
        ...REFERRAL_STAGES.map(
          (st) =>
            [st.label, val(STATES, m5?.stages?.[st.id])] as [
              string,
              string | undefined,
            ],
        ),
      ],
    },
    {
      id: "brandAwareness",
      name: "Brand awareness",
      href: `/${course.id}/m6/19`,
      decision: m6?.place
        ? `${m6.place}${m6.cadence ? `, ${m6.cadence.toLowerCase()}` : ""}.`
        : undefined,
      details: [
        ["Weight", val(PRESENCE_WEIGHTS, m6?.weight)],
        [
          "Holds",
          PRESENCE_CONDITIONS.filter((c) => m6?.conditions?.[c.id])
            .map((c) => c.label)
            .join(", ") || undefined,
        ],
        [
          "Gap",
          m6?.conditions
            ? PRESENCE_CONDITIONS.filter((c) => !m6.conditions?.[c.id])
                .map((c) => c.label)
                .join(", ") || undefined
            : undefined,
        ],
      ],
    },
    {
      id: "ownedAudience",
      name: "Owned audience",
      href: `/${course.id}/m7/20`,
      decision: m7?.channel
        ? `${m7.channel}${m7.cadence ? `, ${m7.cadence.toLowerCase()}` : ""}.`
        : undefined,
      details: [["Starts with", m7?.people]],
    },
    {
      id: "authority",
      name: "Authority building",
      href: `/${course.id}/m8/11`,
      decision: m8?.authority?.kind
        ? `${KIND_LABELS[m8.authority.kind]} authority.`
        : undefined,
      details: [],
    },
  ];

  // Sequence is the strategy, as Module 2 puts it, so the document is
  // ordered by when each foundation gets built rather than by its
  // number. A plan sorted by foundation is an inventory.
  const GROUPS = [
    { value: "first", title: "Build first", note: "Thirty to ninety days of focused work." },
    { value: "next", title: "Build next", note: "Once the first one is solid." },
    { value: "later", title: "Later", note: "Named, so it is not forgotten. Not now." },
    { value: undefined, title: "Not sorted yet", note: "Module 8 sorts these." },
  ];
  const grouped = GROUPS.map((g) => ({
    ...g,
    rows: rows.filter((r) => (buckets[r.id] ?? undefined) === g.value),
  })).filter((g) => g.rows.length);

  const day = completedAt
    ? new Date(completedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-cream px-6 py-10 text-body surface-cream print:bg-white print:px-0 print:py-0">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link
            href={`/${course.id}`}
            className="text-[11px] font-bold uppercase tracking-chrome text-body-tertiary transition-colors hover:text-aubergine"
          >
            ← Back to the course
          </Link>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setEditing((v) => !v)}
              aria-pressed={editing}
              className="rounded-[14px] border border-ink/20 px-5 py-2.5 text-[12px] font-bold uppercase tracking-chrome text-body-secondary transition-colors hover:border-aubergine hover:text-aubergine"
            >
              {editing ? "Hide the controls" : "Change the order"}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-[14px] border border-aubergine bg-aubergine px-5 py-2.5 text-[12px] font-bold uppercase tracking-chrome text-cream transition-colors hover:bg-transparent hover:text-aubergine"
            >
              Save as PDF
            </button>
          </div>
        </div>

        <div className="doc-sheet rounded-3xl mt-7 border border-subtle bg-cream-light px-7 py-8 shadow-lift sm:px-10 sm:py-10 print:mt-0 print:bg-white print:px-0 print:py-0">
          <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
            Marketing Foundation Map
          </div>
          <h1 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            {name ? `${name}’s foundation` : "Your foundation"}
          </h1>
          <p className="mt-2 text-[14.5px] text-body-tertiary">
            {course.title}
            {day ? ` · completed ${day}` : null}
          </p>

          {/* Positioning frames the plan rather than queueing inside it:
              it is foundation one and everything below is measured
              against it. */}
          {m1?.statement?.trim() ? (
            <div className="doc-row mt-7 border-t border-subtle pt-6 print:mt-5 print:pt-4">
              <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                Positioning
              </div>
              <p className="mt-2 font-serif text-[19px] leading-relaxed sm:text-[21px]">
                {m1.statement.trim()}
              </p>
              <dl className="mt-3 space-y-0.5">
                {([
                  ["Who", m1?.serve?.situation],
                  ["The work", m1?.work?.change],
                  ["Different", m1?.different?.text],
                ] as [string, string | undefined][])
                  .filter(([, v]) => v && v.trim())
                  .map(([k, v]) => (
                    <div key={k} className="flex gap-2.5 text-[13.5px] leading-relaxed">
                      <dt className="w-[78px] shrink-0 text-body-tertiary">{k}</dt>
                      <dd className="flex-1 text-body-secondary">{v}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          ) : null}


          {grouped.map((group) => (
            <div key={group.title} className="mt-8 print:mt-5">
              <div className="flex flex-wrap items-baseline gap-x-3 border-b border-subtle pb-2">
                <h2 className="text-[13px] font-bold uppercase tracking-eyebrow text-body">
                  {group.title}
                </h2>
                <span className="text-[13px] text-body-tertiary">{group.note}</span>
              </div>

              <div className="mt-4 space-y-5 print:mt-3 print:space-y-3">
                {group.rows.map((row) => {
                  const gap = gapOf(row.id);
                  const bucket = buckets[row.id];
                  return (
                    <div key={row.id} className="doc-row">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span
                          aria-hidden
                          className={`mt-1 h-[14px] w-[14px] shrink-0 self-start rounded-full border-2 border-gold ${
                            row.decision ? "bg-peach" : "bg-transparent"
                          }`}
                        />
                        <span className="text-[16px] font-bold">{row.name}</span>
                        {gap?.tier ? (
                          <span className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
                            {TIER_LABEL[gap.tier]}
                            {gap.gap ? ` · ${GAP_LABEL[gap.gap]}` : ""}
                          </span>
                        ) : null}
                      </div>

                      <p
                        className={`ml-[26px] mt-1.5 text-[15px] leading-relaxed ${
                          row.decision ? "text-body" : "text-body-tertiary"
                        }`}
                      >
                        {row.decision ? <Rich text={row.decision} /> : "Not decided yet."}
                      </p>

                      {start?.foundation.id === row.id ? (
                        <p className="ml-[26px] mt-2 border-l-[3px] border-gold pl-3 text-[13.5px] leading-relaxed text-body-secondary">
                          <span className="font-semibold text-body">Why here. </span>
                          <Rich text={start.reasoning} />
                        </p>
                      ) : null}

                      {row.details.filter(([, v]) => v && v.trim()).length ? (
                        <dl className="ml-[26px] mt-2 space-y-0.5">
                          {row.details
                            .filter(([, v]) => v && v.trim())
                            .map(([k, v]) => (
                              <div key={k} className="flex gap-2.5 text-[13.5px] leading-relaxed">
                                <dt className="w-[78px] shrink-0 text-body-tertiary">{k}</dt>
                                <dd className="flex-1 text-body-secondary">{v}</dd>
                              </div>
                            ))}
                        </dl>
                      ) : null}

                      {editing ? (
                        <div className="ml-[26px] mt-3 flex flex-wrap items-center gap-2 print:hidden">
                          {BUCKETS.map((b) => {
                            const active = bucket === b.value;
                            return (
                              <button
                                key={b.value}
                                type="button"
                                onClick={() => setBucket(row.id, b.value)}
                                aria-pressed={active}
                                aria-label={`${row.name}: build ${b.label.toLowerCase()}`}
                                className={`rounded-[14px] border px-3 py-2.5 text-[13.5px] transition-colors ${
                                  active
                                    ? "border-gold bg-butter/40 font-semibold text-body"
                                    : "border-ink/15 text-body-secondary hover:border-gold"
                                }`}
                              >
                                {b.label}
                              </button>
                            );
                          })}
                          <Link
                            href={row.href}
                            className="ml-1 text-[11px] font-bold uppercase tracking-chrome text-gold transition-colors hover:text-aubergine"
                          >
                            Change it →
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {answered.length || priorities.length ? (
            <div className="mt-10 border-t-2 border-gold/30 pt-7 print:mt-5 print:pt-4">
              <h2 className="text-[13px] font-bold uppercase tracking-eyebrow text-body">
                What this is based on
              </h2>
              <p className="mt-1 text-[13.5px] text-body-tertiary">
                The answers the order was built from, so it still makes sense
                in six months.
              </p>

              {answered.length ? (
                <div className="doc-row mt-5 print:mt-4">
                  <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                    Your business
                  </div>
                  <dl className="mt-2 space-y-1">
                    {answered.map((a) => (
                      <div
                        key={a.prompt}
                        className="flex flex-wrap gap-x-3 text-[13.5px] leading-relaxed"
                      >
                        <dt className="flex-1 basis-[280px] text-body-tertiary">
                          {a.prompt}
                        </dt>
                        <dd className="flex-1 basis-[200px] text-body">{a.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}

              {priorities.length ? (
                <div className="mt-6 print:mt-4">
                  <div className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                    Why this order
                  </div>
                  <div className="mt-2 space-y-3 print:space-y-1.5">
                    {priorities.map((pr) => (
                      <div key={pr.foundation.id} className="doc-row">
                        <div className="flex flex-wrap items-baseline gap-x-2.5">
                          <span className="text-[14.5px] font-semibold">
                            {pr.foundation.name}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-eyebrow text-body-tertiary">
                            {TIER_LABEL[pr.tier]}
                          </span>
                        </div>
                        <ul className="mt-0.5 space-y-0.5">
                          {pr.reasons.map((r) => (
                            <li
                              key={r}
                              className="text-[13.5px] leading-relaxed text-body-secondary"
                            >
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="mt-9 flex items-center gap-2.5 border-t border-subtle pt-6 print:mt-4 print:pt-3">
            <img src="/images/af-mark.png" alt="" className="h-7 w-7" />
            <span className="text-[13.5px] text-body-tertiary">Amber Fugedi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
