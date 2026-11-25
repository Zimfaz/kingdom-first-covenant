-- Kingdom First Covenant: base tables.
-- PROJECT: kingdom-first-covenant (ref afiyphuubmefjaofbmbx). NEVER run against Kingdom First Life's project.
-- Applied 25 Nov 2026 23:49 with the owner present (migration cov_base). Advisor notes accepted: audit_log has no policies on purpose (no member reads it); save_profile is the intended write path.
-- Row level security on everywhere; no open write policies; writes go through security-definer functions.

-- Switches (sign-ups stay off until the solicitor, DPIA, safeguarding advisers and pastoral reviewer sign off).
create table public.app_flags (
  key text primary key,
  on_ boolean not null default false,
  note text,
  updated_at timestamptz not null default now()
);
alter table public.app_flags enable row level security;
create policy app_flags_read on public.app_flags for select to anon, authenticated using (true);
insert into public.app_flags (key, on_, note) values
  ('signups', false, 'Joining switched off until the pre-launch checks are done'),
  ('test_accounts', true, 'Made-up accounts only');

-- One row per member, visible only to that member.
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  first_name text check (char_length(first_name) between 1 and 40),
  sex text check (sex in ('woman', 'man')),
  town text check (char_length(town) <= 60),
  id_checked boolean not null default false,   -- set only by an admin function in milestone 1 (no ID partner yet)
  adult_checked boolean not null default false, -- 18+ comes from the ID check, never typed
  is_test boolean not null default true,
  paused boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy profiles_own_read on public.profiles for select to authenticated using (id = (select auth.uid()));

-- Dated consent, one row per special category (religion, marital history), per UK GDPR Article 9.
create table public.consents (
  user_id uuid not null references auth.users (id) on delete cascade,
  kind text not null check (kind in ('religion', 'marital_history', 'photos', 'terms')),
  given_at timestamptz not null default now(),
  withdrawn_at timestamptz,
  wording_version text not null,
  primary key (user_id, kind, given_at)
);
alter table public.consents enable row level security;
create policy consents_own_read on public.consents for select to authenticated using (user_id = (select auth.uid()));

-- Audit trail of sensitive actions (moderators and functions write; members never read).
create table public.audit_log (
  id bigint generated always as identity primary key,
  at timestamptz not null default now(),
  actor uuid,
  action text not null,
  subject uuid,
  detail jsonb
);
alter table public.audit_log enable row level security;
revoke all on public.audit_log from anon, authenticated;

-- Writes: the only way a member changes their profile. Refuses while sign-ups are off unless it is a test account.
create or replace function public.save_profile(p_first_name text, p_sex text, p_town text)
returns void language plpgsql security definer set search_path = public as $$
declare open_ boolean;
begin
  if auth.uid() is null then raise exception 'not signed in'; end if;
  select on_ into open_ from app_flags where key = 'signups';
  if not coalesce(open_, false) and not exists (select 1 from profiles where id = auth.uid() and is_test) then
    raise exception 'Kingdom First Covenant is not open yet';
  end if;
  update profiles set first_name = p_first_name, sex = p_sex, town = p_town where id = auth.uid();
  insert into audit_log (actor, action, subject) values (auth.uid(), 'save_profile', auth.uid());
end $$;
revoke all on function public.save_profile(text, text, text) from public, anon;
grant execute on function public.save_profile(text, text, text) to authenticated;
revoke insert, update, delete, truncate on public.app_flags, public.profiles, public.consents from anon, authenticated;
