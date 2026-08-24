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

1. Create a project at supabase.com (free tier is fine). Give the
   course its own project. Sharing a database with another app means
   sharing its `auth.users`, so a signup anywhere is a login here.
2. In the SQL editor, run `supabase/schema.sql`. It creates the tables,
   the row-level security policies, and the save function, and it is
   safe to run again later.
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

## Selling it (Stripe)

Buying grants access to the **email that paid**, so someone can buy
before they have an account and sign in later, or the other way round.
Nothing in the browser can grant access to itself: entitlements have no
insert or update policy, so only the webhook's service role key can
write them.

1. Stripe > Developers > Webhooks: add an endpoint at
   `https://<your-domain>/api/stripe/webhook`, subscribed to
   `checkout.session.completed`, `checkout.session.async_payment_succeeded`,
   `charge.refunded` and `charge.dispute.created`.
2. Copy the signing secret and set it, with the Supabase service role
   key (Project Settings > API), in the Netlify site's environment:

```
STRIPE_WEBHOOK_SECRET=whsec_...
SUPABASE_SERVICE_ROLE_KEY=...
```

Both are server-only. Never give either a `NEXT_PUBLIC_` prefix, and
never put the service role key in the browser: it bypasses row-level
security entirely.

To grant access by hand (a comp, a refund reversal, someone who paid
with a different address than they sign in with), insert a row:

```sql
insert into public.entitlements (email, course_id)
values ('lower@case.email', 'foundation');
```

## Structure

- `lib/content/` — courses, modules, slides as data
- `components/slides/` — one component per slide kind
- `lib/store/` — the course document, localStorage + Supabase adapters
- `lib/auth/` — magic link auth context
- `supabase/schema.sql` — tables, row-level security, save function
