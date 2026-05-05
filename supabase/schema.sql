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

-- RLS: tabla privada, solo escritura desde server-side con service_role
alter table public.b2b_leads enable row level security;

-- Prohibir lectura pública total
create policy "No public read" on public.b2b_leads
  for select using (false);

-- Permitir insert desde el servidor (service_role bypasses RLS, anon can insert)
create policy "Server insert only" on public.b2b_leads
  for insert with check (true);

-- Índices útiles
create index idx_b2b_leads_email on public.b2b_leads (email);
create index idx_b2b_leads_estado on public.b2b_leads (estado);
create index idx_b2b_leads_created_at on public.b2b_leads (created_at desc);
