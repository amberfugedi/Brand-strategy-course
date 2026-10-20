# Build Your Marketing Foundation

The course library. Next.js App Router, Tailwind, TypeScript. Course
one is Build Your Marketing Foundation: the intro and all eight
modules, narrated throughout, about 2h 54m of audio.

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

The academy runs at `learn.amberfugedi.com`; the course is sold from
`amberfugedi.com`, which links out to the Stripe payment link. Both the
product and the webhook endpoint are live already:

- Payment link: `https://buy.stripe.com/dRm28k15N68o3FD0GLeEo00`
  ($297 one time, `metadata.course_id = foundation`). It returns buyers
  to `/login?purchased=1&next=/foundation`, so they land on a page that
  acknowledges the purchase and asks them to sign in with the email
  they paid with.
- Webhook endpoint: `https://learn.amberfugedi.com/api/stripe/webhook`,
  subscribed to `checkout.session.completed`,
  `checkout.session.async_payment_succeeded`, `charge.refunded` and
  `charge.dispute.created`.

### Where the academy sends a buyer

The academy sells nothing itself. Someone who hits a locked module,
usually straight off the free intro, is sent to the sales page, which
holds the pitch, the price and the payment link. That is `buyUrl` on
the course in `lib/content/courses.ts`, pointing at
`amberfugedi.com/courses/build-your-marketing-foundation`, and it is
offered in three places: the course page, the sign-in gate and the
paywall. Clearing it takes the course off sale here.

`price` sits beside it and is deliberately **unset**. Two systems
naming an amount are two systems that can disagree, and the one the
buyer is actually charged is Stripe, not this one. Set it only for a
course with no sales page of its own, where `buyUrl` is the payment
link direct and the price would otherwise appear nowhere.

`buyUrl` takes either kind of destination. When it points at Stripe
and the buyer is signed in, their address is added as
`prefilled_email`, because entitlements key on the email that paid and
paying with one address while signing in with another is the
commonest way to be locked out of something you bought. That is a
Stripe parameter, so it is not appended to a sales page; there the
"sign in with the email you paid with" line does the work instead, on
the paywall and again on `/login` after the purchase.

### What the sales page still needs

The page exists; the buy button on it does not. It needs:

- A button to the payment link above.
- That link's success URL set to
  `https://learn.amberfugedi.com/login?purchased=1&next=/foundation`,
  so a buyer lands on a page that acknowledges the purchase and asks
  them to sign in with the email they paid with, then goes straight to
  the course.
- The price on the page matching what the link charges.

Which course a payment grants comes from the payment link's
`course_id` metadata, so a second course needs a new link, not a
deploy. Set the signing secret, with the Supabase service role key
(Project Settings > API), in the Netlify site's environment:

```
STRIPE_WEBHOOK_SECRET=whsec_...
SUPABASE_SERVICE_ROLE_KEY=...
```

Both are server-only. Never give either a `NEXT_PUBLIC_` prefix, and
never put the service role key in the browser: it bypasses row-level
security entirely.

Every way this path fails is quiet: a broken signature check grants
nobody access while Stripe retries, and a missing lowercase writes an
entitlement the buyer's account can never match. Neither shows up on
a page you can look at, so there is a check with no dependencies and
no network that signs a payload and runs the function against it:

```
npm run check:webhook
```

Run it before any deploy that touches `netlify/functions`.

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

## Auditing the course

Every module is released; the only gate is sequence, each one waiting
on the module before it. Two ways to open all of them.

**As yourself, on the live site.** Set `NEXT_PUBLIC_OWNER_EMAIL` to
your address in the Netlify environment and redeploy once. From then
on, signing in with that address opens every module, with no further
deploys and nothing to switch back. Everyone else sees the course
exactly as it ships.

This one needs Supabase configured first. It matches the owner's
address against the signed-in user, and without the Supabase keys
there is no sign-in to do: the link does not render, `/login` says so
plainly, and the setting has no effect at all. Use the build flag
below until accounts are live.

**Without signing in**, for a local run or a preview deploy:

    NEXT_PUBLIC_AUDIT=1 npm run dev

Never set that one on production: it opens the sequence for everyone
who visits that build.

Either way a bar reads "Audit mode" on every page, so an unlocked
build is never mistaken for the buyer's view, and neither one grants
access to slide copy. That comes from a route that checks entitlement
on the server.
