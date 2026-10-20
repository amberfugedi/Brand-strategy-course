"use client";

import { useAudit } from "@/lib/audit";

/**
 * Says the course is unlocked, on every page.
 *
 * An unlocked build that looks exactly like the real one is the thing
 * most likely to mislead a review, so it never hides. It prints too:
 * an audit PDF should not be mistakable for a buyer's.
 */
export function AuditBanner() {
  if (!useAudit()) return null;
  return (
    <div className="sticky top-0 z-[100] bg-aubergine px-4 py-1.5 text-center text-[11px] font-bold uppercase tracking-chrome text-cream">
      Audit mode · every module open · not the buyer’s view
    </div>
  );
}
