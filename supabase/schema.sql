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

drop policy if exists "read own entitlements" on public.entitlements;
create policy "read own entitlements"
  on public.entitlements for select
  using (auth.uid() = user_id);
