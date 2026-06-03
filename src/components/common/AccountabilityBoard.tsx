'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, FileText, Target, Activity } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

/**
 * Dashboard animado de Accountability — pieza central del caso Acriland.
 * Comunica el diferenciador nº1 del Plan SEO: "cada decisión se sostiene en un
 * número, y cada número tiene un responsable". Incluye reportes mensual/trimestral.
 * Diseño 100% responsive (móvil y escritorio) y ligero (sin imágenes pesadas).
 */

type KPI = { label: string; value: number; suffix?: string; owner: string; accent: string }
type ReportContent = { tag: string; title: string; body: string; items: string[] }
type Reports = { mensual: ReportContent; trimestral: ReportContent }

const DEFAULT_KPIS: KPI[] = [
  { label: 'Sesiones orgánicas', value: 33947, suffix: '', owner: 'SEO Lead', accent: '#818CF8' },
  { label: 'Clics desde Google', value: 16800, suffix: '', owner: 'SEO Lead', accent: '#6EE7B7' },
  { label: 'Visitantes únicos', value: 28321, suffix: '', owner: 'Growth', accent: '#67E8F9' },
  { label: 'Inversión en pauta', value: 0, suffix: '%', owner: 'Estrategia', accent: '#FDA4AF' },
]

// Curva de sesiones orgánicas mes a mes (tendencia real: crecimiento sostenido).
const DEFAULT_BARS = [14, 18, 22, 27, 24, 33, 41, 52, 48, 63, 74, 88]

const DEFAULT_REPORTS: Reports = {
  mensual: {
    tag: 'Reporte mensual',
    title: 'Lectura táctica, cada mes.',
    body: 'Cada mes entregamos un reporte con queries, posición media, CTR, sesiones por canal y conversaciones generadas — con la acción concreta detrás de cada movimiento del número.',
    items: ['Search Console · queries y posición', 'GA4 · sesiones, canal y scroll', 'Embudo comercial · CRM a la medida'],
  },
  trimestral: {
    tag: 'Reporte trimestral',
    title: 'Lectura estratégica, cada trimestre.',
    body: 'Cada trimestre subimos a altura estratégica: hacia dónde mover el presupuesto, qué línea de producto empujar y qué decisiones tomar — con toda la información sobre la mesa para que dirección decida.',
    items: ['Proyección y mix de canales', 'Oportunidades por línea de producto', 'Decisiones con data, no con corazonadas'],
  },
}

export function AccountabilityBoard({
  kpis = DEFAULT_KPIS,
  bars = DEFAULT_BARS,
  reports = DEFAULT_REPORTS,
  label = 'dashboard.acriland · antuario',
  barsTitle = 'Sesiones orgánicas · 12 meses',
  barsFootStart = 'Inicio',
  barsFootEnd = 'Hoy · 100% orgánico',
  footnote,
}: {
  kpis?: KPI[]
  bars?: number[]
  reports?: Reports
  label?: string
  barsTitle?: string
  barsFootStart?: string
  barsFootEnd?: string
  footnote?: React.ReactNode
} = {}) {
  const [tab, setTab] = useState<'mensual' | 'trimestral'>('mensual')
  const report = reports[tab]
  const KPIS = kpis
  const BARS = bars
  const MAX_BAR = Math.max(...BARS)

  return (
    <div
      className="relative overflow-hidden rounded-[24px] sm:rounded-[28px]"
      style={{
        background: 'linear-gradient(165deg, #161616 0%, #0E0E0E 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.05), 0 30px 70px rgba(0,0,0,0.5)',
      }}
    >
      {/* Glow multicolor sutil */}
      <div
        className="pointer-events-none absolute -inset-px opacity-50"
        style={{
          background:
            'radial-gradient(60% 50% at 15% 0%, rgba(129,140,248,0.18), transparent 60%), radial-gradient(50% 50% at 90% 10%, rgba(103,232,249,0.14), transparent 60%)',
        }}
        aria-hidden
      />

      {/* Chrome / barra superior */}
      <div className="relative flex items-center justify-between gap-3 border-b border-white/8 px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </span>
          <span className="ml-1 font-mono text-[10px] uppercase tracking-[0.18em] text-papel/45 sm:text-[11px]">
            {label}
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-salvia-b opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-salvia-b" />
          </span>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-papel/60">En vivo</span>
        </span>
      </div>

      <div className="relative p-4 sm:p-6 lg:p-8">
        {/* KPIs con responsable — el corazón del accountability */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
          {KPIS.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[16px] p-3.5 sm:p-4"
              style={{
                background: 'linear-gradient(155deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.015) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-papel/45 sm:text-[9.5px]">
                {k.label}
              </span>
              <p className="mt-1.5 text-[22px] font-light tracking-tight text-papel sm:text-[27px]" style={{ letterSpacing: '-0.03em' }}>
                <AnimatedCounter target={k.value} duration={2000} suffix={k.suffix} separator={k.value >= 1000} />
              </p>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-0.5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: k.accent }} />
                <span className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-papel/55">
                  {k.owner}
                </span>
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:mt-5 lg:grid-cols-12">
          {/* Gráfica de barras — sesiones orgánicas por mes */}
          <div
            className="rounded-[18px] p-4 sm:p-5 lg:col-span-7"
            style={{ background: 'rgba(255,255,255,0.025)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-[12px] font-medium text-papel/85 sm:text-[13px]">
                <Activity className="h-3.5 w-3.5 text-cobalto-b" />
                {barsTitle}
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-salvia-b">↑ tendencia</span>
            </div>
            <div className="mt-5 flex h-[120px] items-end gap-[5px] sm:h-[150px] sm:gap-2">
              {BARS.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0, opacity: 0.4 }}
                  whileInView={{ height: `${(v / MAX_BAR) * 100}%`, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 rounded-t-[4px]"
                  style={{
                    background:
                      i === BARS.length - 1
                        ? 'linear-gradient(to top, #818CF8, #67E8F9)'
                        : 'linear-gradient(to top, rgba(129,140,248,0.55), rgba(129,140,248,0.18))',
                  }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between font-mono text-[8.5px] uppercase tracking-[0.12em] text-papel/30">
              <span>{barsFootStart}</span>
              <span>{barsFootEnd}</span>
            </div>
          </div>

          {/* Panel de reportes — tabs mensual / trimestral */}
          <div
            className="rounded-[18px] p-4 sm:p-5 lg:col-span-5"
            style={{ background: 'rgba(255,255,255,0.025)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}
          >
            <div className="inline-flex rounded-full bg-black/30 p-0.5">
              {(['mensual', 'trimestral'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`rounded-full px-3 py-1 text-[10.5px] font-medium capitalize transition-colors ${
                    tab === t ? 'bg-white/12 text-papel' : 'text-papel/45 hover:text-papel/70'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="mt-4 inline-flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-glicina-b" />
                <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-papel/50">{report.tag}</span>
              </div>
              <h4 className="mt-2 text-[15px] font-medium tracking-tight text-papel sm:text-[16.5px]" style={{ letterSpacing: '-0.018em' }}>
                {report.title}
              </h4>
              <p className="mt-2 text-[12px] leading-[1.55] text-papel/60 sm:text-[12.5px]">{report.body}</p>
              <ul className="mt-3 space-y-1.5">
                {report.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[11.5px] text-papel/70">
                    <Target className="mt-0.5 h-3 w-3 flex-shrink-0 text-salvia-b" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Pie — frase accountability */}
        <div className="mt-4 flex items-center gap-2.5 rounded-[14px] bg-white/[0.03] px-4 py-3 sm:mt-5">
          <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-cobalto-b" />
          <p className="text-[11.5px] leading-snug text-papel/65 sm:text-[12.5px]">
            {footnote ?? (
              <>
                Cada líder del proyecto es responsable de <span className="text-papel">un número concreto</span>. Optimizamos web, SEO y embudo de forma quirúrgica — todo trackeable, todo transparente.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
