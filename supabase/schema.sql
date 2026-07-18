-- Run this once in the Supabase SQL editor (Database > SQL Editor).
-- One row per (user, course): the whole course document as jsonb.

create table if not exists public.course_state (
  user_id uuid not null references auth.users (id) on delete cascade,
  course_id text not null,
  doc jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, course_id)
);

alter table public.course_state enable row level security;

create policy "read own course state"
  on public.course_state for select
  using (auth.uid() = user_id);

create policy "insert own course state"
  on public.course_state for insert
  with check (auth.uid() = user_id);

create policy "update own course state"
  on public.course_state for update
  using (auth.uid() = user_id);

-- Entitlements: which accounts own which courses. Not enforced yet
-- (any signed-in account can take course one). When purchases arrive,
-- a Stripe webhook inserts rows here and the app checks them.

create table if not exists public.entitlements (
  user_id uuid not null references auth.users (id) on delete cascade,
  course_id text not null,
  granted_at timestamptz not null default now(),
  primary key (user_id, course_id)
);

alter table public.entitlements enable row level security;

create policy "read own entitlements"
  on public.entitlements for select
  using (auth.uid() = user_id);
