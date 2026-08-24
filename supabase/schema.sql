-- Run this in the Supabase SQL editor (Database > SQL Editor) when you
-- set a project up. Safe to run again: every statement either skips or
-- replaces what is already there.
--
-- One row per (user, course): the whole course document as jsonb.

create table if not exists public.course_state (
  user_id uuid not null references auth.users (id) on delete cascade,
  course_id text not null,
  doc jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, course_id)
);

alter table public.course_state enable row level security;

drop policy if exists "read own course state" on public.course_state;
create policy "read own course state"
  on public.course_state for select
  using (auth.uid() = user_id);

drop policy if exists "insert own course state" on public.course_state;
create policy "insert own course state"
  on public.course_state for insert
  with check (auth.uid() = user_id);

drop policy if exists "update own course state" on public.course_state;
create policy "update own course state"
  on public.course_state for update
  using (auth.uid() = user_id);

-- Saves guarded by their own timestamp. The player fires a save as the
-- learner closes or refreshes the page, and a slower earlier request
-- can land after it. The where clause on the conflict makes the late
-- arrival a no-op instead of letting it overwrite the newer answer.
--
-- security invoker on purpose: the policies above still apply, so a
-- caller can only ever write their own row.

create or replace function public.save_course_state_if_newer(
  p_course_id text,
  p_document jsonb,
  p_updated_at timestamptz
)
returns void
language plpgsql
security invoker
set search_path = public
as $$
begin
  if auth.uid() is null then
    raise exception 'Authentication is required to save course state';
  end if;

  insert into public.course_state (user_id, course_id, doc, updated_at)
  values (auth.uid(), p_course_id, p_document, p_updated_at)
  on conflict (user_id, course_id) do update
  set doc = excluded.doc,
      updated_at = excluded.updated_at
  where course_state.updated_at < excluded.updated_at;
end;
$$;

-- Postgres hands execute to PUBLIC on a new function, which would let
-- anon call it. The auth check above already refuses, but take it away.

revoke execute on function public.save_course_state_if_newer(text, jsonb, timestamptz) from public;
grant execute on function public.save_course_state_if_newer(text, jsonb, timestamptz) to authenticated;

-- Entitlements: who has bought what. Keyed on the email that paid, not
-- on a user id, because the buyer usually has no account at the moment
-- Stripe fires the webhook and a foreign key to auth.users would have
-- nothing to point at. Matching on email lets someone buy first and
-- sign in whenever they like. Written by netlify/functions/stripe-webhook.mjs.

create table if not exists public.entitlements (
  email text not null,
  course_id text not null,
  status text not null default 'active',
  stripe_customer_id text,
  stripe_checkout_session_id text,
  granted_at timestamptz not null default now(),
  revoked_at timestamptz,
  primary key (email, course_id),
  -- stored lowercase so the primary key cannot hold two spellings of
  -- one address. A webhook that forgets to normalise fails loudly here.
  constraint entitlements_email_lowercase check (email = lower(email)),
  constraint entitlements_status_known check (status in ('active','refunded'))
);

-- Stripe retries webhooks, sometimes days later. This is what makes a
-- replayed delivery a no-op instead of a second grant.
create unique index if not exists entitlements_session_idx
  on public.entitlements (stripe_checkout_session_id)
  where stripe_checkout_session_id is not null;

alter table public.entitlements enable row level security;

-- Learners can read their own row and nothing else. There is no insert
-- or update policy on purpose: only the service role, which bypasses
-- RLS, may grant access, so a signed-in user cannot grant it to
-- themselves and a leaked anon key cannot either.
drop policy if exists "read own entitlements" on public.entitlements;
create policy "read own entitlements"
  on public.entitlements for select
  using (lower(email) = lower(auth.jwt() ->> 'email'));
