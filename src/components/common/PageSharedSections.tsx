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
  const cdmx = { x: 605, y: 430 }
  const mainland =
    'M 172 50 L 235 56 L 280 56 L 376 44 L 440 110 L 500 122 L 560 138 L 595 176 L 656 226 L 663 282 L 645 338 L 660 388 L 700 436 L 752 470 L 798 470 L 834 458 L 858 432 L 880 410 L 903 382 L 945 370 L 978 360 L 992 374 L 988 388 L 970 404 L 952 426 L 942 458 L 905 472 L 870 470 L 860 504 L 862 524 L 838 552 L 820 572 L 776 552 L 745 532 L 712 526 L 670 538 L 608 510 L 540 488 L 510 478 L 470 458 L 440 442 L 414 392 L 392 348 L 376 308 L 350 280 L 320 254 L 295 232 L 268 204 L 244 178 L 232 158 L 218 138 L 200 116 L 178 86 L 162 60 Z'
  const baja =
    'M 44 18 L 96 18 L 110 38 L 118 70 L 132 110 L 148 142 L 168 174 L 188 206 L 210 232 L 230 256 L 248 282 L 260 304 L 264 318 L 252 308 L 236 286 L 218 262 L 196 240 L 174 218 L 152 192 L 132 162 L 116 132 L 100 100 L 86 70 L 70 44 L 56 28 Z'

  return (
    <div className="card-bb-float overflow-hidden bg-papel p-5 sm:p-6">
      <svg viewBox="0 0 1000 620" className="h-auto w-full" aria-label="Mapa de cobertura nacional con sede en CDMX">
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
        <path d={mainland} fill="url(#mini-mx-fill)" />
        <path d={baja}     fill="url(#mini-mx-fill)" />
        <g fill="none" stroke="url(#mini-mx-stroke)" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
          <path d={mainland} />
          <path d={baja} />
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
