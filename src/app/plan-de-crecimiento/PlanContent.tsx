'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Loader2, MessageCircle, Check } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { submitLead } from '@/lib/leads'
import { SiteFrame } from '@/components/layout/SiteFrame'
import { ShellWrap, Breadcrumbs, rise } from '@/components/common/PageBuildingBlocks'
import { SharedCases } from '@/components/common/PageSharedSections'

type SubmitState = 'idle' | 'sending' | 'sent' | 'error'

type Attribution = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  ref?: string
  pid?: string
}

// ─── Contador animado ────────────────────────────────────────────────────────
function CountUp({ to, prefix = '', suffix = '', duration = 1.8 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf = 0
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - t0) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])
  return <span ref={ref} className="tabular-nums">{prefix}{val.toLocaleString('es-MX')}{suffix}</span>
}

// ─── Mini-gráficas ilustrativas (Qué incluye) ────────────────────────────────
const vizT = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }

function VizDemanda() {
  const bars = [26, 40, 33, 52, 46, 64]
  return (
    <svg viewBox="0 0 200 76" className="h-[76px] w-full" aria-hidden>
      <line x1="8" y1="68" x2="192" y2="68" stroke="#D2D2D7" strokeWidth="1" />
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={14 + i * 30} width="18" rx="4"
          initial={{ height: 0, y: 68 }}
          whileInView={{ height: h, y: 68 - h }}
          viewport={{ once: true }}
          transition={{ ...vizT, delay: 0.08 * i }}
          fill={i === bars.length - 1 ? '#4F46E5' : '#D2D2D7'}
        />
      ))}
      <motion.text x="173" y={68 - 64 - 6} textAnchor="middle" fontSize="9" fontWeight="700" fill="#4F46E5"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
        tu mercado
      </motion.text>
    </svg>
  )
}

function VizVisibilidad() {
  const rows = [
    { y: 10, w: 150, c: '#D2D2D7', label: 'Competidor A' },
    { y: 28, w: 118, c: '#D2D2D7', label: 'Competidor B' },
    { y: 46, w: 62, c: '#34D399', label: 'Tú hoy' },
  ]
  return (
    <svg viewBox="0 0 200 76" className="h-[76px] w-full" aria-hidden>
      {rows.map((r, i) => (
        <g key={i}>
          <motion.rect x="8" y={r.y} height="10" rx="4" fill={r.c}
            initial={{ width: 0 }} whileInView={{ width: r.w }} viewport={{ once: true }} transition={{ ...vizT, delay: 0.12 * i }} />
          <text x="8" y={r.y - 2.5} fontSize="8" fill="#6E6E73">{r.label}</text>
        </g>
      ))}
      <motion.text x="78" y="54.5" fontSize="8.5" fontWeight="700" fill="#34D399"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
        ← cuánto puedes capturar
      </motion.text>
    </svg>
  )
}

function VizEmbudo() {
  const rows = [
    { y: 8,  w: 168, o: 0.9,  label: 'Te encuentran' },
    { y: 30, w: 112, o: 0.65, label: 'Te contactan' },
    { y: 52, w: 60,  o: 1,    label: 'Te compran' },
  ]
  return (
    <svg viewBox="0 0 200 76" className="h-[76px] w-full" aria-hidden>
      {rows.map((r, i) => (
        <g key={i}>
          <motion.rect x={(200 - r.w) / 2} y={r.y} height="14" rx="5"
            fill={i === 2 ? '#22D3EE' : '#D2D2D7'} opacity={r.o}
            initial={{ width: 0, x: 100 }} whileInView={{ width: r.w, x: (200 - r.w) / 2 }}
            viewport={{ once: true }} transition={{ ...vizT, delay: 0.12 * i }} />
          <motion.text x="100" y={r.y + 10} textAnchor="middle" fontSize="7.5" fontWeight="600"
            fill={i === 2 ? '#0A0A0A' : '#6E6E73'}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + 0.12 * i }}>
            {r.label}
          </motion.text>
        </g>
      ))}
    </svg>
  )
}

function VizSolucion() {
  const rows = [0, 1, 2]
  return (
    <svg viewBox="0 0 200 76" className="h-[76px] w-full" aria-hidden>
      {rows.map(i => (
        <g key={i}>
          <motion.circle cx="16" cy={14 + i * 24} r="7" fill="#F59E0B" opacity={1 - i * 0.25}
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ ...vizT, delay: 0.15 * i }} />
          <motion.path d={`M12.5 ${14 + i * 24} l2.5 2.5 l4.5 -5`} stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 + 0.15 * i, duration: 0.35 }} />
          <motion.rect x="32" y={9 + i * 24} height="4.5" rx="2.25" fill="#D2D2D7"
            initial={{ width: 0 }} whileInView={{ width: 120 - i * 26 }} viewport={{ once: true }} transition={{ ...vizT, delay: 0.2 + 0.15 * i }} />
          <motion.rect x="32" y={16.5 + i * 24} height="3" rx="1.5" fill="#F5F5F7"
            initial={{ width: 0 }} whileInView={{ width: 90 - i * 20 }} viewport={{ once: true }} transition={{ ...vizT, delay: 0.28 + 0.15 * i }} />
        </g>
      ))}
    </svg>
  )
}

// ─── Mockup del documento del Plan ───────────────────────────────────────────
function PlanMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      {/* Aurora multicolor detrás */}
      <div aria-hidden className="pointer-events-none absolute -inset-10 opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(38% 38% at 22% 28%, rgba(79,70,229,0.35) 0%, transparent 100%), radial-gradient(34% 34% at 82% 24%, rgba(34,211,238,0.28) 0%, transparent 100%), radial-gradient(40% 40% at 70% 84%, rgba(251,113,133,0.24) 0%, transparent 100%), radial-gradient(30% 30% at 18% 82%, rgba(52,211,153,0.26) 0%, transparent 100%)' }} />

      {/* Página trasera */}
      <motion.div aria-hidden className="absolute inset-x-6 top-6 h-full rounded-[26px] bg-marfil shadow-xl"
        initial={{ rotate: 0, opacity: 0 }} whileInView={{ rotate: 5, opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />

      {/* Página frontal */}
      <motion.div
        className="relative rounded-[26px] bg-papel p-6 sm:p-7"
        style={{ boxShadow: '0 2px 6px rgba(10,10,10,0.06), 0 24px 48px rgba(10,10,10,0.14), 0 48px 96px rgba(10,10,10,0.10)' }}
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          {/* Header del doc */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-plomo">Plan de Crecimiento</span>
            <span className="h-2.5 w-2.5 rounded-full bg-onyx" />
          </div>
          <p className="mt-2 text-[19px] font-semibold tracking-tight text-onyx" style={{ letterSpacing: '-0.02em' }}>Tu empresa</p>
          <p className="text-[10.5px] text-plomo">Demanda · Visibilidad · Embudo · Solución</p>

          {/* Gráfica del doc (ilustrativa) */}
          <div className="mt-5 rounded-2xl bg-nieve p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-plomo">Proyección · ilustrativa</span>
              <span className="flex items-center gap-2 text-[8.5px] text-plomo">
                <span className="flex items-center gap-1"><i className="h-[3px] w-4 rounded bg-lino inline-block" />hoy</span>
                <span className="flex items-center gap-1"><i className="h-[3px] w-4 rounded inline-block" style={{ background: 'linear-gradient(90deg,#4F46E5,#22D3EE)' }} />con plan</span>
              </span>
            </div>
            <svg viewBox="0 0 280 110" className="mt-2 w-full" aria-hidden>
              <defs>
                <linearGradient id="pm-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4F46E5" /><stop offset="55%" stopColor="#22D3EE" /><stop offset="100%" stopColor="#34D399" />
                </linearGradient>
                <linearGradient id="pm-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.16" /><stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[28, 56, 84].map(y => <line key={y} x1="6" y1={y} x2="274" y2={y} stroke="#0A0A0A" strokeOpacity="0.05" strokeWidth="1" />)}
              {/* línea "hoy" plana */}
              <motion.path d="M6 88 C 60 87, 140 86, 274 84" fill="none" stroke="#D2D2D7" strokeWidth="2" strokeLinecap="round"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.2 }} />
              {/* área + línea "con plan" */}
              <motion.path d="M6 88 C 80 84, 130 72, 176 52 C 214 36, 248 24, 274 16 L 274 104 L 6 104 Z" fill="url(#pm-fill)"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.9 }} />
              <motion.path d="M6 88 C 80 84, 130 72, 176 52 C 214 36, 248 24, 274 16" fill="none" stroke="url(#pm-line)" strokeWidth="2.5" strokeLinecap="round"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.45, ease: 'easeInOut' }} />
              <motion.circle cx="274" cy="16" r="4" fill="#34D399"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.9, type: 'spring', stiffness: 300 }} />
            </svg>
          </div>

          {/* Prioridades */}
          <div className="mt-4 space-y-2">
            {[
              { n: '01', t: 'Capturar demanda en Google', c: '#4F46E5' },
              { n: '02', t: 'Embudo que convierte y responde', c: '#22D3EE' },
              { n: '03', t: 'Sistema + automatización con IA', c: '#34D399' },
            ].map((p, i) => (
              <motion.div key={p.n} className="flex items-center gap-3 rounded-xl bg-nieve px-3 py-2"
                initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.14, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                <span className="font-mono text-[9px] font-bold" style={{ color: p.c }}>{p.n}</span>
                <span className="text-[11px] font-medium text-onyx">{p.t}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-lino/60 pt-3">
            <span className="text-[9.5px] text-plomo">Con números y justificación</span>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-salvia">Sin costo · Tuyo</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// ─── Form field ──────────────────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-papel/45">{label}</span>
      {children}
    </label>
  )
}

const INCLUDES = [
  { t: 'Estudio de demanda', d: 'Cuánta gente busca en Google lo que vendes, en tu zona — el tamaño real del mercado disponible.', Viz: VizDemanda },
  { t: 'Tu visibilidad vs. competidores', d: 'Quién se está llevando esa demanda hoy y qué tan lejos estás de competir por ella.', Viz: VizVisibilidad },
  { t: 'Revisión de tu embudo', d: 'Tu sitio, tus canales y tu velocidad de respuesta: dónde se te están cayendo los clientes.', Viz: VizEmbudo },
  { t: 'Solución priorizada + números', d: 'Qué implementar primero para crecer — incluyendo sistemas y automatización con IA.', Viz: VizSolucion },
]

const STEPS = [
  { n: '01', t: 'Nos platicas tu negocio', d: 'Una llamada de 30 minutos. Qué haces, qué necesitas, qué has intentado. Nosotros ya llegamos con la tarea de afuera hecha.', c: '#4F46E5' },
  { n: '02', t: 'Estudiamos y diseñamos', d: 'Analizamos tu demanda, tu sitio y tus canales, y diseñamos una solución concreta — con justificación y números.', c: '#22D3EE' },
  { n: '03', t: 'Te presentamos el plan', d: 'Completo y con el costo de implementarlo con nosotros. Si te late, arrancamos; si no, te lo llevas.', c: '#34D399' },
]

const FOR_YES = [
  'Eres dueño, fundador, director o responsable de marketing',
  'Tu negocio ya vende y quiere crecer con más y mejores clientes',
  'Buscas un equipo que responda por los resultados, no otro proveedor',
]
const FOR_NO = [
  'Buscas la opción más barata sin importar el resultado',
  'Quieres “likes” y métricas de vanidad, no clientes',
  'No hay quién decida ni presupuesto para invertir en crecer',
]

// ═════════════════════════════════════════════════════════════════════════════
export function PlanContent() {
  const [state, setState] = useState<SubmitState>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const attribution = useRef<Attribution>({})

  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const grab = (k: string) => p.get(k) || undefined
    attribution.current = {
      utm_source: grab('utm_source'), utm_medium: grab('utm_medium'),
      utm_campaign: grab('utm_campaign'), utm_content: grab('utm_content'),
      ref: grab('ref'), pid: grab('pid'),
    }
  }, [])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('sending')
    try {
      await submitLead({
        ...form,
        interest: 'plan_crecimiento',
        source: 'landing-plan-crecimiento',
        form_id: 'plan-de-crecimiento',
        ...attribution.current,
        source_url: typeof window !== 'undefined' ? window.location.href : '',
      })
      setState('sent')
      if (typeof window !== 'undefined') {
        const w = window as unknown as { dataLayer?: Record<string, unknown>[] }
        w.dataLayer = w.dataLayer || []
        w.dataLayer.push({
          event: 'generate_lead', form_id: 'plan-de-crecimiento',
          utm_source: attribution.current.utm_source ?? null,
          utm_campaign: attribution.current.utm_campaign ?? null,
          ref: attribution.current.ref ?? null,
        })
      }
    } catch {
      setState('error')
    }
  }

  return (
    <SiteFrame>
      {/* ═══ Hero + formulario ═══ */}
      <section data-theme="dark" className="pt-[80px] sm:pt-[92px] lg:pt-[100px]" style={{ paddingBottom: 'clamp(20px, 2.4vh, 36px)' }}>
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(10px,2.4vw,28px)]">
          <div className="section-shell shell-dark pt-[48px] sm:pt-[56px] lg:pt-[64px]">
            <div className="aurora aurora-deep absolute inset-0 opacity-65" aria-hidden />
            <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Izquierda */}
              <div className="lg:col-span-6">
                <motion.span initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="eyebrow-light">
                  Plan de Crecimiento · Sin costo · Sin compromiso
                </motion.span>
                <motion.h1 custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}
                  className="display mt-5 max-w-[18ch] text-[36px] leading-[1.03] text-papel sm:text-[50px] lg:text-[56px]">
                  Te diseñamos el plan para{' '}
                  <span className="multi-grad-bright">crecer tu demanda.</span>
                </motion.h1>
                <motion.p custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}
                  className="mt-6 max-w-[50ch] text-[15px] leading-[1.55] text-papel/70 sm:text-[16.5px]">
                  Estudiamos tu negocio por fuera —demanda, sitio web y canales— y con lo que nos
                  platiques te diseñamos una solución concreta para crecer, con números. Te la
                  entregamos completa: la ejecutas tú, con otra agencia, o con nosotros.
                </motion.p>

                <motion.ul custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="mt-7 space-y-2.5">
                  {['Cuánto mercado estás dejando sobre la mesa', 'Quién se está llevando tu demanda hoy', 'Qué implementar para crecer — con sistemas y accountability'].map(t => (
                    <li key={t} className="flex items-start gap-2.5 text-[14px] text-papel/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-salvia-b/15">
                        <Check className="h-3 w-3 text-salvia-b" />
                      </span>
                      {t}
                    </li>
                  ))}
                </motion.ul>

                {/* Resultados reales (contadores) */}
                <motion.div custom={4} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}
                  className="mt-9 grid grid-cols-3 gap-3 border-t border-papel/10 pt-6">
                  {[
                    { to: 8787, prefix: '+', suffix: '%', label: 'sesiones de sitio', sub: 'Acriland · SEO + web', c: 'text-laguna-b' },
                    { to: 14515, prefix: '+', suffix: '%', label: 'sesiones de sitio', sub: 'Métrica BTL · agencia', c: 'text-glicina-b' },
                    { to: 412, prefix: '+', suffix: '%', label: 'ventas atribuidas', sub: 'Acriland · Ads', c: 'text-salvia-b' },
                  ].map(s => (
                    <div key={s.sub}>
                      <p className={`text-[20px] font-semibold tracking-tight sm:text-[26px] ${s.c}`}>
                        <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                      </p>
                      <p className="mt-0.5 text-[10.5px] leading-tight text-papel/60">{s.label}</p>
                      <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-papel/35">{s.sub}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Derecha · formulario */}
              <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-6">
                <div className="card-bb-glass relative overflow-hidden p-6 sm:p-8"
                  style={{ background: 'linear-gradient(155deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)' }}>
                  <span aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-25 blur-3xl" style={{ background: '#818CF8' }} />
                  <span aria-hidden className="pointer-events-none absolute -bottom-14 -left-10 h-32 w-32 rounded-full opacity-15 blur-3xl" style={{ background: '#67E8F9' }} />
                  <div className="relative">
                    <span className="eyebrow-light">Solicita tu plan</span>
                    <h2 className="mt-3 text-[22px] font-medium tracking-tight text-papel sm:text-[26px]" style={{ letterSpacing: '-0.020em' }}>
                      Agenda tu llamada de 30 min.
                    </h2>
                    <p className="mt-2 text-[13px] text-papel/55 sm:text-[13.5px]">
                      Déjanos tus datos y te contactamos para coordinar. Respondemos en menos de 24h hábiles.
                    </p>

                    {state === 'sent' ? (
                      <div className="mt-8 rounded-2xl bg-salvia-b/10 p-6 text-center">
                        <p className="text-[16px] font-medium text-salvia-b">¡Recibido! Te contactamos para agendar.</p>
                        <p className="mt-2 text-[12.5px] text-papel/60">Si quieres avanzar más rápido, escríbenos directo por WhatsApp.</p>
                        <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary-inv mt-5 justify-center">
                          <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
                        </a>
                      </div>
                    ) : (
                      <form onSubmit={onSubmit} className="mt-7 space-y-3.5">
                        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                          <Field label="Nombre"><input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="contact-field" /></Field>
                          <Field label="Correo"><input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="contact-field" /></Field>
                          <Field label="Empresa"><input type="text" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="contact-field" /></Field>
                          <Field label="Teléfono / WhatsApp"><input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="contact-field" /></Field>
                        </div>
                        <Field label="¿Qué te gustaría mejorar? (opcional)">
                          <textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="contact-field resize-none" placeholder="Más clientes, mejor web, ordenar tu marketing…" />
                        </Field>
                        <button type="submit" disabled={state === 'sending'} className="btn-primary-inv mt-2 w-full justify-center">
                          {state === 'sending' ? (<><Loader2 className="h-3.5 w-3.5 animate-spin" /> Enviando...</>) : (<>Quiero mi Plan de Crecimiento <ArrowRight className="h-3.5 w-3.5" /></>)}
                        </button>
                        {state === 'error' && (<p className="text-center text-[12px] text-rubor-b">Hubo un problema enviando. Escríbenos directo por WhatsApp.</p>)}
                        <p className="mt-1 text-center text-[10.5px] text-papel/40">Sin costo · Sin compromiso · Respondemos en 24h hábiles</p>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Qué incluye (con mini-gráficas) ═══ */}
      <ShellWrap data="light" variant="marfil">
        <div className="relative z-10">
          <motion.span initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="eyebrow">Qué incluye</motion.span>
          <motion.h2 custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}
            className="hero-type mt-4 max-w-[22ch] text-[26px] text-onyx sm:text-[38px]" style={{ fontWeight: 300 }}>
            Una radiografía de tu crecimiento, <span className="multi-grad">hecha por nosotros.</span>
          </motion.h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INCLUDES.map(({ t, d, Viz }, i) => (
              <motion.div key={t} className="card-bb group p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                <div className="rounded-2xl bg-nieve p-3">
                  <Viz />
                </div>
                <h3 className="mt-4 text-[16px] font-medium tracking-tight text-onyx sm:text-[17px]">{t}</h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.55] text-plomo sm:text-[13px]">{d}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-5 text-right font-mono text-[9px] uppercase tracking-[0.16em] text-plomo/50">Gráficas ilustrativas — las tuyas llevan tus datos reales</p>
        </div>
      </ShellWrap>

      {/* ═══ El entregable (mockup) ═══ */}
      <ShellWrap data="light" variant="papel">
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <motion.span initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="eyebrow">El entregable</motion.span>
            <motion.h2 custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}
              className="hero-type mt-4 max-w-[18ch] text-[26px] text-onyx sm:text-[38px]" style={{ fontWeight: 300 }}>
              No es una llamada de ventas. <span className="multi-grad">Es un documento tuyo.</span>
            </motion.h2>
            <motion.p custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}
              className="mt-5 max-w-[52ch] text-[14.5px] leading-[1.6] text-plomo sm:text-[15.5px]">
              El Plan de Crecimiento se entrega completo: el estudio, la solución que diseñamos
              para tu negocio y los números que la justifican. Es tuyo aunque no trabajemos juntos.
            </motion.p>
            <motion.ul custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="mt-6 space-y-2.5">
              {['Cuánto mercado hay y cuánto estás capturando', 'La solución priorizada: qué implementar y en qué orden', 'Qué se puede automatizar y sistematizar con IA', 'El costo de implementarlo con nosotros — sin letras chiquitas'].map(t => (
                <li key={t} className="flex items-start gap-2.5 text-[14px] text-onyx/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-salvia/15">
                    <Check className="h-3 w-3 text-salvia" />
                  </span>
                  {t}
                </li>
              ))}
            </motion.ul>
          </div>
          <div className="lg:col-span-6">
            <PlanMockup />
          </div>
        </div>
      </ShellWrap>

      {/* ═══ Cómo funciona (timeline) ═══ */}
      <ShellWrap data="light" variant="marfil">
        <div className="relative z-10">
          <motion.span initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="eyebrow">Cómo funciona</motion.span>
          <motion.h2 custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}
            className="hero-type mt-4 max-w-[22ch] text-[26px] text-onyx sm:text-[38px]" style={{ fontWeight: 300 }}>
            Tres pasos. <span className="multi-grad">Sin vueltas.</span>
          </motion.h2>

          <div className="relative mt-12">
            {/* Línea conectora (desktop) */}
            <motion.div aria-hidden className="absolute left-0 right-0 top-[22px] hidden h-[2px] origin-left rounded lg:block"
              style={{ background: 'linear-gradient(90deg, #4F46E5 0%, #22D3EE 50%, #34D399 100%)' }}
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} />
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
              {STEPS.map((s, i) => (
                <motion.div key={s.n} className="relative"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
                  <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-papel font-mono text-[13px] font-bold shadow-md" style={{ color: s.c, boxShadow: `0 0 0 2px ${s.c}22, 0 8px 20px rgba(10,10,10,0.08)` }}>
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-[17px] font-medium tracking-tight text-onyx sm:text-[19px]">{s.t}</h3>
                  <p className="mt-2 max-w-[38ch] text-[13px] leading-[1.6] text-plomo sm:text-[13.5px]">{s.d}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detrás del plan */}
          <motion.div className="mt-12 overflow-hidden rounded-[24px] bg-onyx p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative">
              <span aria-hidden className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full opacity-20 blur-3xl" style={{ background: '#818CF8' }} />
              <div className="relative flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
                <div>
                  <p className="text-[16px] font-medium tracking-tight text-papel sm:text-[19px]">Detrás del plan hay un departamento de marketing completo.</p>
                  <p className="mt-1.5 max-w-[58ch] text-[12.5px] leading-[1.55] text-papel/60 sm:text-[13.5px]">
                    Dirección, tráfico, web, contenido y sistemas — por una iguala mensual, con KPIs y
                    responsabilidad por los resultados. El plan es la mejor forma de verlo antes de decidir.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { t: 'Dirección + KPIs', c: '#818CF8' },
                    { t: 'Tráfico', c: '#67E8F9' },
                    { t: 'Web + sistemas', c: '#6EE7B7' },
                    { t: 'IA + automatización', c: '#FCD34D' },
                  ].map(chip => (
                    <span key={chip.t} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-papel/80">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: chip.c }} />{chip.t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ShellWrap>

      {/* ═══ Para quién ═══ */}
      <ShellWrap data="light" variant="papel">
        <div className="relative z-10 grid gap-6 lg:grid-cols-2">
          <motion.div className="card-bb p-7 sm:p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-salvia/12"><Check className="h-4 w-4 text-salvia" /></span>
            <h3 className="mt-3 text-[16px] font-medium tracking-tight text-onyx">Esto es para ti si…</h3>
            <ul className="mt-4 space-y-3">
              {FOR_YES.map(t => (
                <li key={t} className="flex items-start gap-2.5 text-[14px] text-plomo">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-salvia/12"><Check className="h-3 w-3 text-salvia" /></span>{t}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="card-bb p-7 sm:p-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-onyx/5"><span className="font-mono text-[13px] font-bold text-plomo">—</span></span>
            <h3 className="mt-3 text-[16px] font-medium tracking-tight text-onyx">No es para ti si…</h3>
            <ul className="mt-4 space-y-3">
              {FOR_NO.map(t => (
                <li key={t} className="flex items-start gap-2.5 text-[14px] text-plomo/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-onyx/5 font-mono text-[11px] text-plomo">—</span>{t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </ShellWrap>

      {/* ═══ Casos ═══ */}
      <SharedCases />

      {/* ═══ CTA final ═══ */}
      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-deep absolute inset-0 opacity-55" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="hero-type mt-2 max-w-[20ch] text-[28px] text-papel sm:text-[42px]" style={{ fontWeight: 300 }}>
            ¿Vemos cuánto puedes <span className="multi-grad-bright">crecer?</span>
          </h2>
          <p className="lead-type mt-5 max-w-[44ch] text-[15px] !text-papel/65 sm:text-[16.5px]">
            Agenda tu llamada de 30 minutos. Sin costo, sin compromiso — sales con un plan claro.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
            <a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="btn-primary-inv">
              Solicitar mi plan <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
              <MessageCircle className="h-4 w-4" /> Prefiero WhatsApp
            </a>
          </div>
          <p className="mt-4 text-[11.5px] text-papel/40">Sin costo · Sin compromiso</p>
        </div>
      </ShellWrap>

      <ShellWrap data="light" variant="papel">
        <Breadcrumbs trail={[{ label: 'Inicio', href: '/' }, { label: 'Plan de Crecimiento' }]} />
      </ShellWrap>
    </SiteFrame>
  )
}
