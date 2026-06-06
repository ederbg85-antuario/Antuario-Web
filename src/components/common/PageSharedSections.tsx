'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Check, X } from 'lucide-react'
import {
  ShellWrap,
  ChapterTag,
  rise,
} from '@/components/common/PageBuildingBlocks'
import { CASE_LIST } from '@/lib/cases-data'

/* Fotos reales del equipo Antuario — reutilizadas en /nosotros y en SharedTeam. */
export const TEAM_PHOTOS = [
  {
    src: '/equipo/equipo-antuario-agencia-marketing-digital-cdmx-1.jpg',
    alt: 'Equipo de Antuario, agencia de marketing digital en CDMX, en sesión de estrategia de un proyecto de lanzamiento.',
    orientation: 'landscape' as const,
  },
  {
    src: '/equipo/equipo-antuario-agencia-marketing-digital-cdmx-2.jpg',
    alt: 'Equipo de Antuario presentando un reporte de marketing digital con métricas, dashboards y ROAS a un cliente.',
    orientation: 'landscape' as const,
  },
  {
    src: '/equipo/equipo-antuario-agencia-marketing-digital-cdmx-3.jpg',
    alt: 'Equipo de marketing digital de Antuario trabajando desde sus oficinas WeWork en la Ciudad de México.',
    orientation: 'portrait' as const,
  },
]

/* ───────────────────────────────────────────────────────────────────────────
   Shared sections que se reutilizan en /servicios/*, /nosotros y casos.
   Cada una standalone con data-theme correcto para el theme tracking del header.
   ─────────────────────────────────────────────────────────────────────────── */

/* ═══════════════ DIFERENCIADORES (compactos · 6 items) ═══════════════ */
export function SharedDifferentiators() {
  const items = [
    { title: 'Accountability real',  text: 'Respondemos por resultados, no por tareas.',          accent: 'var(--cobalto-b)' },
    { title: 'Sistemas de datos',    text: 'Tableros vivos para decisiones con información.',     accent: 'var(--laguna-b)' },
    { title: 'Vanguardia con IA',    text: 'Mientras la mayoría la nombra, nosotros la operamos.', accent: 'var(--glicina-b)' },
    { title: 'Estrategia + estructura', text: 'Del posicionamiento al funnel, sin silos.',         accent: 'var(--rubor-b)' },
    { title: 'Partner end-to-end',   text: 'Ejecutamos todo o sumamos donde haga falta.',        accent: 'var(--salvia-b)' },
    { title: 'Hecho a la medida',    text: 'Sin paquetes prefabricados, sin plantillas.',         accent: 'var(--nectar-b)' },
  ]

  return (
    <ShellWrap data="dark" variant="dark">
      <div className="aurora aurora-deep absolute inset-0 opacity-40" aria-hidden />
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mb-10 sm:mb-12"
        >
          <ChapterTag roman="∗" label="Diferenciadores" sub="Por qué Antuario" dark />
          <h2
            className="hero-type mt-5 max-w-[24ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]"
            style={{ fontWeight: 300 }}
          >
            Por qué somos diferentes:{' '}
            <span className="multi-grad-bright">accountability, datos y transparencia.</span>
          </h2>
        </motion.div>

        <div className="grid gap-y-2 lg:grid-cols-3 lg:gap-x-10">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="group relative grid grid-cols-[auto_1fr] items-start gap-x-4 py-5 sm:gap-x-5 sm:py-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="relative">
                <span
                  className="block text-[34px] font-light leading-none tabular-nums text-papel/15 transition-colors duration-500 group-hover:text-papel/35 sm:text-[40px]"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  aria-hidden
                  className="absolute -left-2 top-2 h-1.5 w-1.5 rounded-full opacity-80"
                  style={{ background: it.accent, boxShadow: `0 0 12px ${it.accent}` }}
                />
              </div>
              <div className="pt-0.5">
                <h3
                  className="text-[15px] font-medium tracking-tight text-papel sm:text-[16.5px]"
                  style={{ letterSpacing: '-0.018em' }}
                >
                  {it.title}
                </h3>
                <p className="mt-1.5 max-w-[34ch] text-[12.5px] leading-[1.55] text-papel/60 sm:text-[13.5px]">
                  {it.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ShellWrap>
  )
}

/* ═══════════════ MEDICIÓN / DATA (compacta · dashboard mockup) ═══════════════ */
export function SharedData() {
  const features = [
    { positive: false, text: 'Datos de vanidad sin contexto' },
    { positive: true,  text: 'Métricas que mueven el negocio' },
    { positive: true,  text: 'Visibilidad en tiempo real' },
    { positive: true,  text: 'Dashboard a la medida de tu equipo' },
  ]

  return (
    <section data-theme="light" className="section-pad">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="px-[clamp(8px,1.5vw,32px)] py-[clamp(48px,6vh,80px)]">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="lg:col-span-5"
            >
              <ChapterTag roman="∗" label="Medición" sub="Dashboards" />
              <h2
                className="hero-type mt-5 max-w-[18ch] text-[26px] text-onyx sm:text-[34px] lg:text-[40px]"
                style={{ fontWeight: 300 }}
              >
                Medición y dashboards{' '}
                <span className="multi-grad">a la medida de cada cliente.</span>
              </h2>
              <p className="lead-type mt-5 max-w-[44ch] text-[14.5px] sm:text-[15.5px]">
                Sistemas de información estratégicos hechos a la medida — no
                PDFs con likes y alcance. Cada dashboard se diseña según las
                decisiones que tu equipo realmente toma.
              </p>

              <ul className="mt-6 space-y-2.5">
                {features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                      style={
                        f.positive
                          ? { background: 'rgba(52,211,153,0.16)', color: 'var(--salvia)' }
                          : { background: 'rgba(10,10,10,0.06)', color: 'var(--niebla)' }
                      }
                      aria-hidden
                    >
                      {f.positive ? (
                        <Check className="h-3 w-3" strokeWidth={2.4} />
                      ) : (
                        <X className="h-2.5 w-2.5" strokeWidth={2.4} />
                      )}
                    </span>
                    <span
                      className={`text-[13px] leading-snug ${
                        f.positive
                          ? 'font-medium text-grafito'
                          : 'text-niebla line-through decoration-niebla'
                      }`}
                    >
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:col-span-7"
            >
              <SharedDashboardImage />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SharedDashboardImage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[44px] opacity-55 blur-[55px]"
        style={{
          background:
            'radial-gradient(60% 60% at 30% 30%, rgba(79,70,229,0.20), transparent 60%), radial-gradient(50% 50% at 70% 70%, rgba(34,211,238,0.16), transparent 60%)',
        }}
        aria-hidden
      />

      <div
        className="overflow-hidden rounded-[24px] bg-onyx sm:rounded-[28px]"
        style={{
          boxShadow:
            'inset 0 0 0 1px rgba(15,15,30,0.06), 0 4px 10px rgba(15,15,30,0.14), 0 24px 56px rgba(0,0,0,0.22), 0 12px 28px rgba(0,0,0,0.14)',
        }}
      >
        <div className="flex items-center gap-1.5 bg-carbon px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rubor/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-nectar/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-salvia/60" />
          <span className="ml-2 hidden font-mono text-[10px] text-papel/30 sm:inline">
            antuario.app/dashboard
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="pulse-live h-1.5 w-1.5 rounded-full bg-salvia" />
            <span className="font-mono text-[9.5px] uppercase tracking-wider text-papel/45">
              Live
            </span>
          </div>
        </div>

        <Image
          src="/dashboard-marketing-digital-antuario.jpg"
          alt="Dashboard de marketing digital a la medida construido por Antuario."
          width={1600}
          height={888}
          className="block h-auto w-full select-none"
          sizes="(max-width: 1024px) 100vw, 60vw"
          draggable={false}
        />
      </div>

      <div
        className="absolute -left-4 top-12 hidden rounded-[18px] bg-papel p-3 sm:block"
        style={{
          boxShadow:
            'inset 0 0 0 1px rgba(15,15,30,0.05), 0 4px 10px rgba(15,15,30,0.14), 0 18px 40px rgba(15,15,30,0.12)',
          transform: 'rotate(-3deg)',
        }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-plomo">
          ROAS
        </span>
        <p className="mt-1 text-[20px] font-light text-onyx" style={{ letterSpacing: '-0.024em' }}>
          4.8×
        </p>
      </div>
      <div
        className="absolute -right-4 bottom-12 hidden rounded-[18px] bg-papel p-3 sm:block"
        style={{
          boxShadow:
            'inset 0 0 0 1px rgba(15,15,30,0.05), 0 4px 10px rgba(15,15,30,0.14), 0 18px 40px rgba(15,15,30,0.12)',
          transform: 'rotate(3deg)',
        }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-plomo">
          Leads
        </span>
        <p className="mt-1 text-[20px] font-light text-onyx" style={{ letterSpacing: '-0.024em' }}>
          +212
        </p>
      </div>
    </div>
  )
}

/* ═══════════════ COBERTURA (compacta · 3 stats + nota CDMX) ═══════════════ */
export function SharedCoverage() {
  return (
    <ShellWrap data="light" variant="marfil">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="lg:col-span-7"
        >
          <ChapterTag roman="∗" label="Cobertura" sub="Ubicación y alcance" />
          <h2
            className="hero-type mt-5 max-w-[22ch] text-[26px] text-onyx sm:text-[36px] lg:text-[40px]"
            style={{ fontWeight: 300 }}
          >
            Sede en CDMX,{' '}
            <span className="multi-grad">cobertura nacional.</span>
          </h2>
          <p className="lead-type mt-5 max-w-[54ch] text-[14.5px] sm:text-[15.5px]">
            Operamos desde Ciudad de México y atendemos proyectos en
            cualquier estado de la República. Para clientes en CDMX y zona
            metropolitana también trabajamos presencialmente cuando el
            proyecto lo requiere.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-3">
            {[
              { label: 'Sede',       value: 'CDMX · México' },
              { label: 'Cobertura',  value: 'Nacional' },
              { label: 'Modalidad',  value: 'Remoto + presencial' },
            ].map((s) => (
              <div key={s.label} className="card-bb-soft p-3.5 sm:p-4">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-plomo">
                  {s.label}
                </span>
                <p
                  className="mt-1.5 text-[12.5px] font-medium text-onyx sm:text-[13px]"
                  style={{ letterSpacing: '-0.014em' }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <SharedMiniMap />
        </motion.div>
      </div>
    </ShellWrap>
  )
}

function SharedMiniMap() {
  const cdmx = { x: 567, y: 431 }
  // Silueta real de México (misma geografía proyectada que el mapa de la home).
  const mexico =
    'M 111.5 70.1 L 118.3 84.6 L 124.2 88.9 L 120.7 90.9 L 131.7 106.7 L 131.3 112.7 L 138.5 117.2 L 136.9 126.2 L 144.9 130.7 L 147.3 146.1 L 166.0 156.6 L 188.7 182.0 L 189.0 188.6 L 182.5 196.9 L 179.0 199.6 L 163.1 197.8 L 163.8 201.3 L 177.9 211.0 L 179.9 217.4 L 194.1 223.3 L 201.2 230.8 L 207.4 228.7 L 231.9 243.9 L 238.3 259.8 L 233.5 282.6 L 238.8 289.1 L 239.3 284.7 L 243.5 285.2 L 245.5 289.7 L 241.0 290.7 L 248.5 296.5 L 259.5 298.0 L 282.4 315.8 L 292.6 335.8 L 306.1 327.4 L 307.2 319.9 L 300.2 313.9 L 296.6 302.6 L 292.7 303.0 L 286.6 294.7 L 283.6 295.2 L 284.2 299.3 L 277.3 297.2 L 274.0 289.5 L 275.8 281.8 L 267.0 262.5 L 259.6 255.4 L 260.5 245.5 L 258.6 246.0 L 255.9 234.5 L 246.0 224.3 L 248.1 233.9 L 242.2 222.3 L 244.7 221.1 L 243.5 219.2 L 237.1 215.9 L 233.0 206.0 L 224.8 200.8 L 221.0 182.2 L 214.4 180.0 L 211.4 171.7 L 208.2 171.6 L 200.3 158.5 L 182.8 145.0 L 181.5 139.0 L 175.5 134.1 L 173.7 113.1 L 169.5 107.3 L 172.0 93.4 L 176.2 92.3 L 189.0 98.4 L 192.9 95.4 L 199.0 98.0 L 200.3 103.2 L 211.8 106.2 L 214.6 108.2 L 214.2 110.7 L 212.6 109.0 L 213.0 119.4 L 221.9 133.9 L 222.2 141.9 L 235.5 160.4 L 229.2 161.3 L 226.1 170.0 L 234.5 175.4 L 237.8 168.3 L 261.3 194.9 L 276.5 199.0 L 276.6 213.6 L 291.4 220.3 L 296.6 230.1 L 309.1 234.7 L 305.9 248.4 L 306.6 259.9 L 330.7 270.3 L 341.7 286.0 L 365.6 304.9 L 381.5 326.9 L 398.3 344.0 L 401.5 359.7 L 406.8 370.4 L 412.9 374.9 L 412.2 384.7 L 404.5 394.4 L 409.9 394.7 L 411.7 399.0 L 400.2 404.2 L 417.1 432.0 L 445.2 447.6 L 455.8 461.2 L 499.2 474.0 L 517.6 490.4 L 553.9 506.6 L 575.3 510.2 L 580.9 517.2 L 601.6 526.7 L 612.7 527.3 L 632.7 535.3 L 658.4 527.3 L 666.6 521.3 L 686.3 521.6 L 712.6 536.4 L 741.3 566.0 L 745.7 550.8 L 741.9 545.6 L 754.0 523.3 L 787.0 522.5 L 787.9 513.9 L 781.6 511.9 L 779.5 505.1 L 761.3 490.8 L 772.8 490.8 L 772.8 475.2 L 819.2 475.2 L 819.2 471.4 L 822.5 469.9 L 826.7 473.0 L 835.1 457.5 L 841.3 456.6 L 846.5 448.2 L 846.2 456.9 L 849.6 458.3 L 852.7 465.1 L 862.9 433.7 L 856.9 436.5 L 863.5 427.5 L 862.7 425.3 L 857.1 427.4 L 857.5 424.0 L 862.6 420.2 L 862.2 411.0 L 876.7 392.4 L 880.5 383.4 L 878.9 375.7 L 877.4 379.9 L 873.9 371.2 L 865.0 371.5 L 863.8 373.6 L 870.6 372.4 L 868.1 375.5 L 845.2 369.9 L 795.2 382.6 L 788.4 387.6 L 784.9 401.7 L 786.0 416.2 L 779.6 423.2 L 778.7 433.3 L 774.6 437.2 L 750.9 452.8 L 747.3 450.4 L 732.6 452.2 L 723.3 457.7 L 711.3 457.5 L 683.8 465.2 L 676.1 454.6 L 650.9 447.1 L 639.5 433.8 L 634.8 418.6 L 617.1 396.9 L 610.7 379.7 L 613.2 372.1 L 601.6 354.7 L 599.7 343.7 L 604.0 290.4 L 616.8 257.6 L 617.2 250.6 L 610.6 253.9 L 604.1 248.4 L 590.6 247.9 L 567.4 237.6 L 559.2 221.5 L 556.6 204.9 L 549.0 200.7 L 546.7 194.8 L 537.6 186.5 L 527.9 163.8 L 513.2 152.2 L 509.6 145.4 L 486.4 142.4 L 484.8 145.6 L 477.5 146.1 L 472.5 160.6 L 466.3 167.0 L 462.0 167.3 L 431.0 149.0 L 420.4 122.4 L 408.6 115.6 L 379.9 89.8 L 337.6 89.8 L 337.5 102.2 L 265.1 102.3 L 170.4 70.1 L 172.9 64.0 Z'

  return (
    <div className="card-bb-float overflow-hidden bg-papel p-5 sm:p-6">
      <svg viewBox="0 0 1000 640" className="h-auto w-full" aria-label="Mapa de cobertura nacional con sede en CDMX">
        <defs>
          <linearGradient id="mini-mx-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#4F46E5" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="mini-mx-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#4F46E5" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <path d={mexico} fill="url(#mini-mx-fill)" />
        <g fill="none" stroke="url(#mini-mx-stroke)" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
          <path d={mexico} />
        </g>
        <g>
          <circle cx={cdmx.x} cy={cdmx.y} r="50" fill="rgba(79,70,229,0.10)" />
          <circle cx={cdmx.x} cy={cdmx.y} r="18" fill="none" stroke="#4F46E5" strokeWidth="1.4" className="mx-pulse" />
          <circle cx={cdmx.x} cy={cdmx.y} r="18" fill="none" stroke="#4F46E5" strokeWidth="1.4" className="mx-pulse delay-1" />
          <circle cx={cdmx.x} cy={cdmx.y} r="8" fill="#4F46E5" />
          <circle cx={cdmx.x} cy={cdmx.y} r="3" fill="#ffffff" />
          <g>
            <rect x={cdmx.x - 46} y={cdmx.y + 20} width="92" height="26" rx="13" fill="#0A0A0A" />
            <text x={cdmx.x} y={cdmx.y + 37} textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="Geist, sans-serif" fill="#FFFFFF" letterSpacing="0.5">
              CDMX · Sede
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}

/* ═══════════════ CASOS (compacta · marquee horizontal con 6-8 marcas) ═══════════════ */
export function SharedCases({ heading, sub }: { heading?: string; sub?: string }) {
  return (
    <section data-theme="light" className="bg-papel py-[clamp(56px,7vh,100px)]">
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(16px,3vw,40px)]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mb-8 flex flex-wrap items-end justify-between gap-6 sm:mb-10"
        >
          <div>
            <ChapterTag roman="∗" label="Casos" sub="Marcas que confían en nosotros" />
            <h2
              className="hero-type mt-5 max-w-[22ch] text-[26px] text-onyx sm:text-[34px] lg:text-[40px]"
              style={{ fontWeight: 300 }}
            >
              {heading ?? (
                <>
                  Marcas que ya confían en{' '}
                  <span className="multi-grad">nuestra agencia de marketing digital.</span>
                </>
              )}
            </h2>
          </div>
          {sub && (
            <p className="lead-type max-w-[40ch] text-[14px] sm:text-[15px]">{sub}</p>
          )}
          <Link
            href="/casos"
            className="inline-flex items-center gap-2 text-[12.5px] font-medium text-onyx hover:text-grafito"
          >
            Ver todos los casos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      <div className="relative">
        <div className="marquee-mask no-scrollbar overflow-x-auto px-[clamp(16px,3vw,40px)]" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex w-max gap-4 pb-2 sm:gap-5">
            {CASE_LIST.map((c) => (
              <article
                key={c.slug}
                className="group relative aspect-[4/5] w-[240px] flex-shrink-0 select-none overflow-hidden rounded-[24px] bg-lino sm:w-[280px] lg:w-[320px]"
                style={{
                  boxShadow:
                    'inset 0 0 0 1px rgba(15,15,30,0.04), 0 2px 6px rgba(15,15,30,0.10), 0 18px 36px rgba(15,15,30,0.12), 0 36px 64px rgba(15,15,30,0.08)',
                }}
              >
                <Image
                  src={c.imageSrc}
                  alt={c.imageAlt}
                  width={1200}
                  height={1500}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                  draggable={false}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 sm:p-5">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-papel/65">
                    {c.industry}
                  </span>
                  <h3
                    className="mt-1 text-[16px] font-medium tracking-tight text-papel sm:text-[18px]"
                    style={{ letterSpacing: '-0.018em' }}
                  >
                    {c.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════ EQUIPO (compacta · 3 fotos reales + nota CDMX/freelancers) ═══════════════ */
export function SharedTeam() {
  const [landscape1, landscape2, portrait] = TEAM_PHOTOS

  return (
    <ShellWrap data="light" variant="papel">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="lg:col-span-5"
        >
          <ChapterTag roman="∗" label="Equipo" sub="Quiénes somos" />
          <h2
            className="hero-type mt-5 max-w-[20ch] text-[26px] text-onyx sm:text-[36px] lg:text-[40px]"
            style={{ fontWeight: 300 }}
          >
            Un equipo pequeño de líderes,{' '}
            <span className="multi-grad">con cobertura nacional.</span>
          </h2>
          <p className="lead-type mt-5 max-w-[48ch] text-[14.5px] sm:text-[15.5px]">
            Antuario es un equipo interno reducido y estratégico, con sede en
            la Ciudad de México. Operamos desde WeWork y podemos reunirnos en
            persona con clientes en cualquier WeWork de CDMX para revisar
            proyectos, reportes y estrategia.
          </p>
          <p className="body-type mt-3 max-w-[48ch] text-[13.5px] sm:text-[14.5px]">
            Operamos desde CDMX, pero damos servicio en{' '}
            <strong className="font-medium text-onyx">toda la República Mexicana</strong>.
            Para proyectos de mayor escala sumamos freelancers independientes de
            nuestra entera confianza — sin perder la dirección ni el accountability.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-3">
            {[
              { label: 'Sede', value: 'CDMX · WeWork' },
              { label: 'Cobertura', value: 'Nacional' },
              { label: 'Equipo', value: 'Interno + freelancers' },
            ].map((s) => (
              <div key={s.label} className="card-bb-soft p-3.5 sm:p-4">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-plomo">
                  {s.label}
                </span>
                <p
                  className="mt-1.5 text-[12.5px] font-medium text-onyx sm:text-[13px]"
                  style={{ letterSpacing: '-0.014em' }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-12 gap-3 sm:gap-4 lg:col-span-7"
        >
          <div className="col-span-7 overflow-hidden rounded-[22px] bg-lino shadow-soft">
            <Image
              src={landscape1.src}
              alt={landscape1.alt}
              width={1280}
              height={960}
              draggable={false}
              className="aspect-[4/3] h-full w-full object-cover"
              sizes="(max-width: 1024px) 60vw, 35vw"
            />
          </div>
          <div className="col-span-5 row-span-2 overflow-hidden rounded-[22px] bg-lino shadow-soft">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={960}
              height={1280}
              draggable={false}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 40vw, 25vw"
            />
          </div>
          <div className="col-span-7 overflow-hidden rounded-[22px] bg-lino shadow-soft">
            <Image
              src={landscape2.src}
              alt={landscape2.alt}
              width={1280}
              height={960}
              draggable={false}
              className="aspect-[4/3] h-full w-full object-cover"
              sizes="(max-width: 1024px) 60vw, 35vw"
            />
          </div>
        </motion.div>
      </div>
    </ShellWrap>
  )
}
