"use client";

import { useState } from "react";
import Link from "next/link";
import type { CourseMeta } from "@/lib/content/meta";
import { Rich } from "@/components/Rich";
import { useCourseStore, useFinish, useModule8 } from "@/lib/store/provider";
import {
  computeGaps,
  computePriorities,
  diagnosticComplete,
} from "@/lib/content/m2Logic";
import { TOUCHPOINTS } from "@/components/slides/TouchpointsSlide";
import { SOURCES } from "@/components/slides/ProofInventorySlide";
import { REFERRAL_STAGES } from "@/components/slides/ReferralMapSlide";
import { BUCKETS, KIND_LABELS } from "@/components/slides/FoundationPlanSlide";

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

  const pick = (list: { id?: string; label?: string; name?: string }[], key?: string) =>
    list.find((x) => x.id === key)?.label ?? list.find((x) => x.id === key)?.name;

  const rows = [
    {
      id: "positioning",
      name: "Positioning",
      href: `/${course.id}/m1/31`,
      decision: m1?.statement?.trim(),
    },
    {
      id: "getFound",
      name: "Get found",
      href: `/${course.id}/m3/26`,
      decision: m3?.order?.length
        ? `Primary touchpoint: ${pick(TOUCHPOINTS, m3.order[0])}.`
        : undefined,
    },
    {
      id: "earnedProof",
      name: "Earned proof",
      href: `/${course.id}/m4/19`,
      decision: m4?.buildFirst
        ? `Build ${pick(SOURCES, m4.buildFirst)?.toLowerCase()} first.`
        : undefined,
    },
    {
      id: "referrals",
      name: "Referral system",
      href: `/${course.id}/m5/20`,
      decision:
        m5?.weakStage || m5?.change
          ? [
              m5?.weakStage ? `Weakest stage: ${pick(REFERRAL_STAGES, m5.weakStage)}.` : null,
              m5?.change,
            ]
              .filter(Boolean)
              .join(" ")
          : undefined,
    },
    {
      id: "brandAwareness",
      name: "Brand awareness",
      href: `/${course.id}/m6/19`,
      decision: m6?.place
        ? `${m6.place}${m6.cadence ? `, ${m6.cadence.toLowerCase()}` : ""}.`
        : undefined,
    },
    {
      id: "ownedAudience",
      name: "Owned audience",
      href: `/${course.id}/m7/20`,
      decision: m7?.channel
        ? `${m7.channel}${m7.cadence ? `, ${m7.cadence.toLowerCase()}` : ""}.`
        : undefined,
    },
    {
      id: "authority",
      name: "Authority building",
      href: `/${course.id}/m8/11`,
      decision: m8?.authority?.kind
        ? `${KIND_LABELS[m8.authority.kind]} authority.`
        : undefined,
    },
  ];

  const day = completedAt
    ? new Date(completedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-cream px-6 py-10 text-body surface-cream">
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

        <div className="rounded-3xl mt-7 border border-subtle bg-cream-light px-7 py-8 shadow-lift print:border-0 print:shadow-none sm:px-10 sm:py-10">
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

          <div className="mt-8 space-y-6">
            {rows.map((row) => {
              const gap = gapOf(row.id);
              const bucket = buckets[row.id];
              return (
                <div
                  key={row.id}
                  className="border-t border-subtle pt-5 first:border-0 first:pt-0"
                >
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
                    {row.decision ? (
                      <Rich text={row.decision} />
                    ) : (
                      "Not decided yet."
                    )}
                  </p>

                  <div className="ml-[26px] mt-3 flex flex-wrap items-center gap-2">
                    {editing ? (
                      BUCKETS.map((b) => {
                        const active = bucket === b.value;
                        return (
                          <button
                            key={b.value}
                            type="button"
                            onClick={() => setBucket(row.id, b.value)}
                            aria-pressed={active}
                            aria-label={`${row.name}: build ${b.label.toLowerCase()}`}
                            className={`rounded-[14px] border px-3 py-2.5 text-[13.5px] transition-colors print:hidden ${
                              active
                                ? "border-gold bg-butter/40 font-semibold text-body"
                                : "border-ink/15 text-body-secondary hover:border-gold"
                            }`}
                          >
                            {b.label}
                          </button>
                        );
                      })
                    ) : bucket ? (
                      <span className="text-[10px] font-bold uppercase tracking-eyebrow text-gold">
                        Build {bucket}
                      </span>
                    ) : null}
                    {/* The printed sheet needs the answer, not the control. */}
                    {editing && bucket ? (
                      <span className="hidden text-[10px] font-bold uppercase tracking-eyebrow text-gold print:inline">
                        Build {bucket}
                      </span>
                    ) : null}
                    <Link
                      href={row.href}
                      className="ml-1 text-[11px] font-bold uppercase tracking-chrome text-gold transition-colors hover:text-aubergine print:hidden"
                    >
                      Change it →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex items-center gap-2.5 border-t border-subtle pt-6">
            <img src="/images/af-mark.png" alt="" className="h-7 w-7" />
            <span className="text-[13.5px] text-body-tertiary">Amber Fugedi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
