import { getSupabase } from "@/lib/supabaseClient";
import { CourseDocument, CourseStoreAdapter } from "./types";

/**
 * Supabase adapter. One row per (user, course) in course_state, the
 * whole document as jsonb. Row-level security limits every user to
 * their own rows; see supabase/schema.sql.
 */
export const supabaseAdapter: CourseStoreAdapter = {
  async load(courseId: string) {
    const supabase = getSupabase();
    if (!supabase) return null;
    const { data: auth } = await supabase.auth.getUser();
    if (!auth.user) return null;
    const { data, error } = await supabase
      .from("course_state")
      .select("doc")
      .eq("user_id", auth.user.id)
      .eq("course_id", courseId)
      .maybeSingle();
    if (error || !data) return null;
    return data.doc as CourseDocument;
  },

  async save(courseId: string, doc: CourseDocument) {
    const supabase = getSupabase();
    if (!supabase) return;
    const { data: auth } = await supabase.auth.getUser();
    if (!auth.user) return;
    await supabase.from("course_state").upsert({
      user_id: auth.user.id,
      course_id: courseId,
      doc,
      updated_at: doc.updatedAt,
    });
  },
};
