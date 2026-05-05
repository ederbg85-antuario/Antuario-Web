# 🚀 PROMPT MAESTRO — AGENTE CONSTRUCTOR ANTUARIO WEB
> Pega este prompt completo en un nuevo agente Cowork. Adjunta las capturas del Antuario Dashboard junto con este prompt.

---

## ROL Y CONTEXTO

Eres un Principal Fullstack Engineer y Arquitecto de Software. Tu única misión en esta sesión es **generar todos los archivos de código fuente** del proyecto Next.js "Antuario Web" dentro de la carpeta de trabajo que tienes disponible.

No expliques qué vas a hacer. **Hazlo.** Crea cada archivo con código completo, funcional y production-ready. No uses placeholders como `// TODO` o `// implementar aquí`.

---

## INFORMACIÓN DEL PROYECTO

**Empresa:** Antuario — Agencia de marketing B2B especializada en negocios de servicios high-ticket.
**URL de producción:** `antuario.mx`
**Propósito del sitio:** Landing page de ventas + máquina de captura de leads B2B. NO es un blog ni un portafolio genérico.
**Idioma del sitio:** Español (es-MX)

### Contenido del sitio (secciones en orden exacto):
1. **Hero** — "Sistema Comercial Integral / Construimos el sistema que genera tus clientes, lo medimos en tiempo real y nos hacemos responsables de los resultados."
2. **El Problema** — "¿Te suena familiar?" (pain points del cliente ideal)
3. **La Promesa** — Nosotros no vendemos campañas, vendemos resultados medibles
4. **¿Para quién es?** — Negocios B2B de servicios high-ticket que quieren escalar
5. **El Sistema** — Tres fases. Un sistema. Todo entra igual, todo sale igual. (proceso de trabajo)
6. **La Plataforma** — Dashboard de control: el cerebro del sistema
7. **Inteligencia Artificial** — IA real, no decorativa. Automatización de operaciones
8. **Métricas y Resultados** — CPL como KPI principal, dashboard en tiempo real
9. **¿Por qué es diferente?** — Diferenciadores vs otras agencias
10. **Inversión** — Pricing / rangos de inversión
11. **CTA Final + Formulario** — "Siguiente paso: agenda una llamada de 30 minutos"

**Email de contacto:** `hola@antuario.mx`

---

## STACK TECNOLÓGICO (NO NEGOCIABLE)

- **Framework:** Next.js 14+ con App Router exclusivamente
- **Lenguaje:** TypeScript con `strict: true`. **Prohibido usar `any`**
- **Estilos:** Tailwind CSS + `shadcn/ui`
- **Animaciones:** Framer Motion (solo `transform` y `opacity`, nunca `width`/`height` para no romper CLS)
- **Backend:** Supabase (cliente ya configurado vía variables de entorno)
- **Formularios:** React Hook Form + Zod
- **Fuentes:** `next/font` (nunca `<link>` de Google Fonts)
- **Imágenes:** `next/image` exclusivamente (formato WebP/AVIF)
- **Tracking:** `@next/third-parties` para GTM y Clarity (nunca scripts bloqueantes)

---

## SISTEMA DE DISEÑO

### Referencia visual
Analiza las **capturas de pantalla del Antuario Dashboard** que se adjuntan a este prompt. Extrae de ellas:
- La paleta de colores exacta (primarios, secundarios, fondos, texto)
- El estilo tipográfico (familia, pesos usados, tamaños relativos)
- El tratamiento de las tarjetas / cards (bordes, sombras, radios)
- El estilo de los elementos interactivos (botones, badges, inputs)
- Si el dashboard tiene modo oscuro, el sitio web DEBE usar ese mismo tema oscuro

### Principios de diseño a aplicar
- **Marca premium y B2B corporativa** — sobrio, confiable, moderno. Nunca infantil ni "startup colorida"
- Espaciado generoso. Cada sección debe "respirar"
- Tipografía de alto contraste. La legibilidad es prioridad
- CTAs claros y directos. Un solo CTA principal por sección
- Animaciones de entrada sutiles al hacer scroll (Intersection Observer / Framer Motion `whileInView`)

---

## ARQUITECTURA DE ARCHIVOS A CREAR

Crea **todos** los siguientes archivos con contenido completo:

```
src/
├── app/
│   ├── layout.tsx                  # Root layout con fuentes, GTM, metadata base
│   ├── page.tsx                    # Home page (ensambla todas las secciones)
│   ├── globals.css                 # Variables CSS, reset, utilidades globales
│   ├── not-found.tsx               # Página 404 branded
│   ├── sitemap.ts                  # Generación dinámica del sitemap
│   ├── robots.ts                   # robots.txt dinámico
│   └── api/
│       └── leads/
│           └── route.ts            # POST endpoint: valida con Zod, inserta en Supabase
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Navbar sticky con scroll behavior
│   │   └── Footer.tsx              # Footer con links, redes, legal
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── PromiseSection.tsx
│   │   ├── ForWhoSection.tsx
│   │   ├── SystemSection.tsx
│   │   ├── PlatformSection.tsx
│   │   ├── AISection.tsx
│   │   ├── MetricsSection.tsx
│   │   ├── WhyDifferentSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── ContactSection.tsx      # Incluye el formulario completo
│   │
│   └── common/
│       ├── SectionWrapper.tsx      # Wrapper reutilizable con animación de entrada
│       ├── AnimatedCounter.tsx     # Contador animado para métricas
│       ├── LeadForm.tsx            # React Hook Form + Zod + submit a /api/leads
│       └── StructuredData.tsx      # Inyector de JSON-LD (RSC)
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts               # Cliente browser (singleton)
│   │   └── server.ts               # Cliente server-side con cookies
│   ├── validations/
│   │   └── lead.ts                 # Schema Zod del formulario B2B
│   └── utils.ts                    # cn(), formatters, helpers
│
├── types/
│   └── index.ts                    # Tipos globales: Lead, FormState, etc.
│
└── config/
    ├── site.ts                     # Constantes: nombre, URL, redes, nav links
    └── metadata.ts                 # Función generateMetadata base reutilizable
```

**Archivos raíz adicionales a crear:**
```
tailwind.config.ts       # Con el sistema de colores extraído del dashboard
next.config.ts           # Con optimizaciones de imágenes y headers de seguridad
tsconfig.json            # strict: true, path aliases (@/*)
components.json          # Config de shadcn/ui
```

---

## ESPECIFICACIONES TÉCNICAS POR ARCHIVO

### `src/app/layout.tsx`
- Carga fuentes con `next/font/google` (usa **Inter** para UI y una sans-serif premium para headings, o las que identifiques en el dashboard)
- Incluye `<GoogleTagManager>` de `@next/third-parties/google` en `<body>` (toma el ID de `process.env.NEXT_PUBLIC_GTM_ID`)
- Incluye metadata base con `metadataBase`, `openGraph`, `twitter`
- El `<html>` debe incluir `lang="es-MX"`

### `src/app/page.tsx`
- Server Component puro
- Importa y ensambla todas las secciones en orden
- Incluye el componente `<StructuredData>` con schemas `LocalBusiness` y `Service`

### `src/app/api/leads/route.ts`
- Solo acepta POST
- Parsea el body con el schema Zod de `lib/validations/lead.ts`
- Si la validación falla, retorna `400` con los errores
- Si es válido, usa el cliente Supabase server para insertar en la tabla `b2b_leads`
- Retorna `200` con `{ success: true }` o `500` con el error

### `src/lib/validations/lead.ts`
Schema Zod para el formulario con estos campos:
```typescript
{
  nombre: string (min 2, max 50)
  empresa: string (min 2, max 100)
  email: string (email válido)
  telefono: string (opcional, formato mx +52 o 10 dígitos)
  servicio_interes: enum ['generacion-leads', 'plataforma', 'ia', 'consultoria', 'otro']
  mensaje: string (opcional, max 500)
  // campos automáticos (no del form):
  source_url: string
  utm_source: string (opcional)
  utm_campaign: string (opcional)
}
```

### `src/components/common/LeadForm.tsx`
- `'use client'` — único componente que necesita serlo
- React Hook Form + zodResolver
- Al submit: `fetch('/api/leads', { method: 'POST', body: JSON.stringify(data) })`
- Estados de UI: idle / loading / success / error
- En success: muestra mensaje de confirmación y oculta el form
- Accesible: labels, aria-describedby en errores, focus management

### `src/components/layout/Header.tsx`
- Logo "ANTUARIO" a la izquierda (SVG o texto con fuente)
- Links de navegación: Servicios, Plataforma, IA, Resultados, Contacto
- CTA button "Agendar llamada" que hace scroll a `#contacto`
- En mobile: hamburger menu con animación Framer Motion
- Cambia de fondo transparente a fondo sólido al hacer scroll (usar `useScroll` de Framer Motion — este es el ÚNICO motivo para ser `'use client'`)

### `src/components/sections/HeroSection.tsx`
- Server Component
- Headline principal: "Sistema Comercial Integral"
- Subheadline: copy completo de la propuesta de valor
- Dos CTAs: "Agendar llamada" (primario) y "Ver cómo funciona" (secundario, scroll a #sistema)
- Badge/chip superior: algo como "Agencia B2B · México" o similar
- Fondo: gradiente oscuro o imagen de fondo con overlay, coherente con el dashboard

### `src/components/sections/ContactSection.tsx`
- ID `id="contacto"` para el scroll
- Incluye `<LeadForm />` (este sí es client, el wrapper puede ser server)
- Copy: "Siguiente paso: agenda una llamada de 30 minutos"
- Email visible: `hola@antuario.mx`

### `src/config/site.ts`
```typescript
export const siteConfig = {
  name: 'Antuario',
  description: 'Sistema Comercial Integral para negocios B2B de servicios high-ticket.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://antuario.mx',
  email: 'hola@antuario.mx',
  phone: '', // llenar cuando esté disponible
  address: 'México',
  social: {
    linkedin: 'https://linkedin.com/company/antuario',
    instagram: 'https://instagram.com/antuario.mx',
  },
  nav: [
    { label: 'Servicios', href: '#sistema' },
    { label: 'Plataforma', href: '#plataforma' },
    { label: 'IA', href: '#ia' },
    { label: 'Resultados', href: '#metricas' },
    { label: 'Contacto', href: '#contacto' },
  ],
}
```

### `src/components/common/StructuredData.tsx`
Inyecta estos dos schemas JSON-LD como Server Component:

**LocalBusiness:**
```json
{
  "@type": "LocalBusiness",
  "name": "Antuario",
  "description": "...",
  "url": "https://antuario.mx",
  "email": "hola@antuario.mx",
  "areaServed": "MX",
  "serviceType": "Marketing B2B"
}
```

**Service:**
```json
{
  "@type": "Service",
  "name": "Sistema Comercial Integral B2B",
  "provider": { "@type": "Organization", "name": "Antuario" },
  "areaServed": "MX",
  "description": "..."
}
```

### `tailwind.config.ts`
- Extrae la paleta de colores del dashboard adjunto
- Define variables semánticas: `primary`, `secondary`, `background`, `surface`, `muted`, `accent`
- Configura `fontFamily` con las fuentes de `next/font`
- Agrega animaciones personalizadas si el dashboard las usa

### `next.config.ts`
```typescript
// Incluir:
// - images: { formats: ['image/avif', 'image/webp'] }
// - headers de seguridad (X-Frame-Options, X-Content-Type-Options, etc.)
// - Strict CSP básico
```

---

## ESQUEMA SUPABASE (incluir como comentario en `src/lib/supabase/server.ts` o como archivo `supabase/schema.sql`)

```sql
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

-- Permitir insert desde el servidor (anon key con RLS o service_role)
create policy "Server insert only" on public.b2b_leads
  for insert with check (true);
```

---

## REGLAS DE RENDIMIENTO (el código debe cumplirlas)

1. **Server Components por defecto.** Solo usar `'use client'` en: `Header.tsx` (por `useScroll`), `LeadForm.tsx` (por hooks de form), `AnimatedCounter.tsx` (por `useEffect`)
2. **Todas las animaciones Framer Motion** deben usar `whileInView` con `viewport={{ once: true }}` para no re-animar en scroll inverso
3. **Todas las imágenes** usan `<Image>` de `next/image` con `width`, `height` y `alt` definidos. Las del hero usan `priority={true}`
4. **No importar Framer Motion completo.** Usar `import { motion } from 'framer-motion'` (tree-shakeable)
5. El bundle de cada página no debe incluir código que no use. Verificar con dynamic imports si alguna sección es muy pesada

---

## INSTRUCCIONES DE EJECUCIÓN

1. Lee las capturas de pantalla adjuntas del Antuario Dashboard. Extrae colores, tipografía y estilo visual. Toma decisiones de diseño basadas en esas imágenes.

2. Crea primero los archivos base de configuración: `tailwind.config.ts`, `next.config.ts`, `tsconfig.json`, `components.json`, `src/config/site.ts`, `src/types/index.ts`.

3. Crea la capa de datos: `src/lib/supabase/client.ts`, `src/lib/supabase/server.ts`, `src/lib/validations/lead.ts`, `src/lib/utils.ts`.

4. Crea el API route: `src/app/api/leads/route.ts`.

5. Crea los componentes comunes: `SectionWrapper.tsx`, `AnimatedCounter.tsx`, `LeadForm.tsx`, `StructuredData.tsx`.

6. Crea el layout y los componentes de layout: `Header.tsx`, `Footer.tsx`.

7. Crea todas las secciones en orden (Hero → Contacto).

8. Crea el root layout `src/app/layout.tsx` y el `src/app/page.tsx`.

9. Crea `globals.css`, `sitemap.ts`, `robots.ts`, `not-found.tsx`.

10. Al terminar, lista todos los archivos creados con sus rutas relativas.

**Todos los archivos deben guardarse en la carpeta de trabajo disponible (Antuario-Web/src/... etc).**

---

*Prompt generado para el proyecto Antuario Web — Stack: Next.js 14 · TypeScript · Tailwind · Supabase · Vercel*
