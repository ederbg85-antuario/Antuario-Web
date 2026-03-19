-- Tabla principal de leads B2B
create table public.b2b_leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  nombre text not null,
  empresa text not null,
  email text not null,
  telefono text,
  servicio_interes text not null,
  mensaje text,
  source_url text,
  utm_source text,
  utm_campaign text,
  estado text default 'nuevo' check (estado in ('nuevo', 'contactado', 'calificado', 'descartado'))
);
alter table public.b2b_leads enable row level security;
create policy "No public read" on public.b2b_leads for select using (false);
create policy "Server insert only" on public.b2b_leads for insert with check (true);
