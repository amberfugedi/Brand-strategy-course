import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase is optional at runtime. Without the two env vars the app
 * runs in local mode: no sign-in UI, no gating, localStorage only.
 * Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to
 * enable accounts and cross-device sync.
 */
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!url || !anonKey) return null;
  if (!client) client = createClient(url, anonKey);
  return client;
}

export const supabaseConfigured = Boolean(url && anonKey);
