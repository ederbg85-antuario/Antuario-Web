import { createClient } from '@supabase/supabase-js'

/**
 * Server-side Supabase client using the service role key.
 * Only use in server contexts (API routes, server actions).
 *
 * Supabase Schema:
 * ----------------
 * create table public.b2b_leads (
 *   id uuid default gen_random_uuid() primary key,
 *   created_at timestamptz default now() not null,
 *   nombre text not null,
 *   empresa text not null,
 *   email text not null,
 *   telefono text,
 *   servicio_interes text not null,
 *   mensaje text,
 *   source_url text,
 *   utm_source text,
 *   utm_campaign text,
 *   estado text default 'nuevo' check (estado in ('nuevo', 'contactado', 'calificado', 'descartado'))
 * );
 *
 * alter table public.b2b_leads enable row level security;
 *
 * create policy "No public read" on public.b2b_leads
 *   for select using (false);
 *
 * create policy "Server insert only" on public.b2b_leads
 *   for insert with check (true);
 */
export function getSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Missing Supabase server environment variables')
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
