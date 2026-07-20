import { Slide } from "./types";
import { CourseDocument } from "@/lib/store/types";
import {
  computePriorities,
  diagnosticComplete,
  dimensionsFor,
  presenceLocked,
} from "./m2Logic";

/**
 * What "done" means for each interactive slide. The player holds
 * forward navigation on a tool slide until this returns true, so a
 * buyer cannot finish a module with an empty plan. Teaching slides
 * always pass.
 */

const filled = (v: string | undefined | null) => Boolean(v && v.trim());

/** Mirrors PLAN_FOUNDATIONS in FoundationPlanSlide. */
const PLAN_FOUNDATION_IDS = [
  "positioning",
  "getFound",
  "earnedProof",
  "referrals",
  "brandAwareness",
  "ownedAudience",
  "authority",
];

export function slideComplete(slide: Slide, doc: CourseDocument): boolean {
  switch (slide.kind) {
    case "exercise": {
      const p = doc.modules.m1?.positioning ?? {};
      if (slide.exercise === "serve") {
        return (
          filled(p.serve?.situation) &&
          filled(p.serve?.context) &&
          filled(p.serve?.problem)
        );
      }
      if (slide.exercise === "work") {
        return (
          filled(p.work?.action) &&
          filled(p.work?.output) &&
          filled(p.work?.change)
        );
      }
      return filled(p.different?.text) && (p.different?.sources?.length ?? 0) > 0;
    }

    case "synthesis":
      return filled(doc.modules.m1?.positioning?.statement);

    case "diagnostic":
      return diagnosticComplete(doc.modules.m2?.diagnostic ?? {});

    case "audit": {
      const diagnostic = doc.modules.m2?.diagnostic ?? {};
      if (!diagnosticComplete(diagnostic)) return false;
      const audit = doc.modules.m2?.audit ?? {};
      return computePriorities(diagnostic)
        .filter((p) => p.tier !== "na")
        .every((p) => {
          const picks = audit[p.foundation.id] ?? {};
          const dims = dimensionsFor(p.tier);
          if (presenceLocked(picks)) return Boolean(picks[dims[0].id]);
          return dims.every((dim) => Boolean(picks[dim.id]));
        });
    }

    case "touchpoints":
      return (doc.modules.m3?.touchpoints?.order?.length ?? 0) > 0;

    case "proofInventory": {
      const proof = doc.modules.m4?.proof ?? {};
      const statuses = proof.statuses ?? {};
      return (
        ["client", "peer", "institutional"].every((id) =>
          Boolean(statuses[id]),
        ) && Boolean(proof.buildFirst)
      );
    }

    case "referralMap": {
      const referral = doc.modules.m5?.referral ?? {};
      const stages = referral.stages ?? {};
      return (
        filled(referral.source) &&
        ["earn", "ask", "tend"].every((id) => Boolean(stages[id])) &&
        Boolean(referral.weakStage) &&
        filled(referral.change)
      );
    }

    case "presencePlan": {
      const presence = doc.modules.m6?.presence ?? {};
      // The condition checks stay optional: a condition that honestly
      // does not hold is a finding, not an unfinished step.
      return (
        Boolean(presence.weight) &&
        filled(presence.place) &&
        filled(presence.cadence)
      );
    }

    case "ownedAudience": {
      const owned = doc.modules.m7?.ownedAudience ?? {};
      return filled(owned.people) && filled(owned.channel) && filled(owned.cadence);
    }

    case "authorityKind":
      return Boolean(doc.modules.m8?.authority?.kind);

    case "foundationPlan": {
      const buckets = doc.modules.m8?.plan?.buckets ?? {};
      return PLAN_FOUNDATION_IDS.every((id) => Boolean(buckets[id]));
    }

    default:
      return true;
  }
}
