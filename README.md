# Build Your Marketing Foundation

The course library. Next.js App Router, Tailwind, TypeScript. Course
one is Build Your Marketing Foundation (intro + Module 1 built so far).

## Run locally

```
npm install
npm run dev
```

Without Supabase keys the app runs in local mode: no sign-in, nothing
gated, all progress in the browser's localStorage.

## Enable accounts (Supabase)

1. Create a project at supabase.com (free tier is fine).
2. In the SQL editor, run `supabase/schema.sql` once.
3. Authentication > Sign In / Up: make sure Email is enabled. Magic
   links work out of the box; no password settings needed.
4. Authentication > URL Configuration: set the site URL to your
   deployed domain, and add it (plus `http://localhost:3000`) to the
   redirect allow list.
5. Copy the project URL and anon key (Project Settings > API) into the
   host's environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

With the keys present: the course intro stays open to everyone,
modules require sign-in (magic link), and each buyer's course document
syncs to their account. Work done before signing in uploads on first
sign-in.

## Structure

- `lib/content/` — courses, modules, slides as data
- `components/slides/` — one component per slide kind
- `lib/store/` — the course document, localStorage + Supabase adapters
- `lib/auth/` — magic link auth context
- `supabase/schema.sql` — database tables and row-level security
