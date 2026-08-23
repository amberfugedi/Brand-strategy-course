import { getSupabase } from "@/lib/supabaseClient";
import { CourseDocument, CourseStoreAdapter } from "./types";

/**
 * Supabase adapter. One row per (user, course) in course_state, the
 * whole document as jsonb. Row-level security limits every user to
 * their own rows; see supabase/schema.sql.
 *
 * Writes go through the save_course_state_if_newer function rather than
 * a plain upsert. Two saves can be in flight at once, the debounced one
 * and the one fired as the tab closes, and they can arrive out of
 * order; the function compares timestamps and drops the older one
 * instead of letting it overwrite a newer answer.
 */

/** The current access token, kept here so the exit save can build its
 *  request without awaiting anything. Set by the auth provider. */
let accessToken: string | null = null;

export function rememberAccessToken(token: string | null) {
  accessToken = token;
}

const RPC = "save_course_state_if_newer";

function args(courseId: string, doc: CourseDocument) {
  return { p_course_id: courseId, p_document: doc, p_updated_at: doc.updatedAt };
}

export const supabaseAdapter: CourseStoreAdapter = {
  async load(courseId: string) {
    const supabase = getSupabase();
    if (!supabase) return null;
    const { data } = await supabase.auth.getSession();
    const user = data.session?.user;
    if (!user) return null;
    const { data: row, error } = await supabase
      .from("course_state")
      .select("doc")
      .eq("user_id", user.id)
      .eq("course_id", courseId)
      .maybeSingle();
    if (error || !row) return null;
    return row.doc as CourseDocument;
  },

  async save(courseId: string, doc: CourseDocument) {
    const supabase = getSupabase();
    if (!supabase) return;
    const { data } = await supabase.auth.getSession();
    if (!data.session) return;
    const { error } = await supabase.rpc(RPC, args(courseId, doc));
    if (error) console.warn(`[course] save failed: ${error.message}`);
  },
};

/**
 * The save fired as the learner closes, refreshes, or switches away.
 * Synchronous on purpose: there is no time to await a session lookup,
 * so it uses the cached token, and keepalive lets the request outlive
 * the page. A normal fetch is cancelled the moment the tab goes.
 */
export function saveOnExit(courseId: string, doc: CourseDocument): void {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey || !accessToken) return;

  const body = JSON.stringify(args(courseId, doc));
  // keepalive bodies are capped at 64 KB and throw above it. A course
  // document is a few KB, but a learner who writes an essay into every
  // field should still get their save, just without the guarantee.
  const withinKeepaliveLimit = new Blob([body]).size < 60_000;

  void fetch(`${url}/rest/v1/rpc/${RPC}`, {
    method: "POST",
    keepalive: withinKeepaliveLimit,
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body,
  }).catch(() => {
    // Nothing useful to do here: the page is going away, and the
    // localStorage copy written alongside this is the safety net.
  });
}
