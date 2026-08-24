import { NextResponse } from "next/server";
import { getCourse } from "@/lib/content/courses";
import { FREE_MODULE } from "@/lib/content/meta";

/**
 * The slide copy, for people who own this course.
 *
 * The intro is open to everyone. Everything else needs a Supabase
 * access token belonging to an email holding an active entitlement for
 * this course specifically. The check runs here rather than in the
 * browser because the browser is where the bundle used to leak:
 * whatever this route refuses to send is genuinely absent, not hidden.
 */

export const dynamic = "force-dynamic";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ course: string; module: string }> },
) {
  const { course: courseId, module: moduleId } = await params;

  // The module has to belong to the course in the URL. Otherwise owning
  // one course would open another's modules just by naming them.
  const course = getCourse(courseId);
  const mod = course?.released
    ? course.modules.find((m) => m.id === moduleId)
    : undefined;
  if (!mod || !mod.released) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  if (moduleId !== FREE_MODULE) {
    const verdict = await entitled(request, courseId);
    if (verdict !== "ok") {
      return NextResponse.json(
        { error: verdict },
        { status: verdict === "unauthenticated" ? 401 : 403 },
      );
    }
  }

  return NextResponse.json(
    { slides: mod.slides },
    // Belongs to one buyer and depends on their token, so no shared
    // cache may keep a copy.
    { headers: { "Cache-Control": "private, no-store" } },
  );
}

type Verdict = "ok" | "unauthenticated" | "not entitled" | "unavailable";

async function entitled(request: Request, courseId: string): Promise<Verdict> {
  // Local mode has no accounts and no payments, so nothing is gated.
  if (!SUPABASE_URL || !ANON_KEY) return "ok";

  const auth = request.headers.get("authorization") ?? "";
  if (!auth.startsWith("Bearer ")) return "unauthenticated";

  // Ask Supabase whose token this is. A forged token fails here.
  const who = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: ANON_KEY, Authorization: auth },
    cache: "no-store",
  });
  if (who.status === 401 || who.status === 403) return "unauthenticated";
  if (!who.ok) return "unavailable";

  // Then ask whether they own this course, using their own token so
  // row-level security does the filtering. There is no way to widen
  // this query to somebody else's row.
  const query = new URLSearchParams({
    select: "status",
    course_id: `eq.${courseId}`,
    status: "eq.active",
    limit: "1",
  });
  const rows = await fetch(`${SUPABASE_URL}/rest/v1/entitlements?${query}`, {
    headers: { apikey: ANON_KEY, Authorization: auth },
    cache: "no-store",
  });
  if (!rows.ok) return "unavailable";
  const owned = (await rows.json()) as unknown[];
  return owned.length > 0 ? "ok" : "not entitled";
}
