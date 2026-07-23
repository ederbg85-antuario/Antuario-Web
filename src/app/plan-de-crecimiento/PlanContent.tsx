'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2, MessageCircle, Check, Search, LineChart, Layers, Target } from 'lucide-react'
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

const INCLUDES = [
  { Icon: Search, t: 'Estudio de demanda', d: 'Cuánta gente busca en Google lo que vendes, en tu zona — y el tamaño real del mercado disponible.' },
  { Icon: LineChart, t: 'Tu visibilidad vs. competidores', d: 'Quién se está llevando esa demanda hoy y qué tan lejos estás de competir por ella.' },
  { Icon: Layers, t: 'Revisión de tu embudo', d: 'Tu sitio, tus canales y tu velocidad de respuesta: dónde se te están cayendo los clientes.' },
  { Icon: Target, t: 'Solución priorizada + números', d: 'Qué implementar primero para crecer (incluyendo sistemas y automatización), y cuánto potencial hay sobre la mesa.' },
]

const STEPS = [
  { n: '01', t: 'Nos platicas tu negocio', d: 'Una llamada de 30 minutos. Nos cuentas qué haces, qué necesitas y qué has intentado. Nosotros ya llegamos con la tarea de afuera hecha.' },
  { n: '02', t: 'Estudiamos y diseñamos', d: 'Analizamos tu demanda, tu sitio y tus canales, y te diseñamos una solución concreta para crecer — con justificación y números.' },
  { n: '03', t: 'Te presentamos el plan', d: 'Te lo entregamos completo, con el costo de implementarlo con nosotros. Si te late, arrancamos; si no, te lo llevas y lo haces tú o con quien quieras.' },
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-papel/45">{label}</span>
      {children}
    </label>
  )
}

export function PlanContent() {
  const [state, setState] = useState<SubmitState>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const attribution = useRef<Attribution>({})

  // Captura de UTMs / ref / pid del link (sin useSearchParams para no forzar CSR bailout)
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const grab = (k: string) => p.get(k) || undefined
    attribution.current = {
      utm_source: grab('utm_source'),
      utm_medium: grab('utm_medium'),
      utm_campaign: grab('utm_campaign'),
      utm_content: grab('utm_content'),
      ref: grab('ref'),
      pid: grab('pid'),
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
          event: 'generate_lead',
          form_id: 'plan-de-crecimiento',
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
      {/* ── Hero + formulario ── */}
      <section data-theme="dark" className="pt-[80px] sm:pt-[92px] lg:pt-[100px]" style={{ paddingBottom: 'clamp(20px, 2.4vh, 36px)' }}>
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(10px,2.4vw,28px)]">
          <div className="section-shell shell-dark pt-[48px] sm:pt-[56px] lg:pt-[64px]">
            <div className="aurora aurora-deep absolute inset-0 opacity-65" aria-hidden />
            <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Izquierda · propuesta de valor */}
              <div className="lg:col-span-6">
                <motion.span initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="eyebrow-light">
                  Plan de Crecimiento · Sin costo
                </motion.span>
                <motion.h1 custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}
                  className="display mt-5 max-w-[18ch] text-[34px] leading-[1.04] text-papel sm:text-[48px] lg:text-[54px]">
                  Te diseñamos el plan para{' '}
                  <span className="multi-grad-bright">crecer tu demanda.</span>
                </motion.h1>
                <motion.p custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}
                  className="mt-6 max-w-[50ch] text-[15px] leading-[1.55] text-papel/70 sm:text-[16.5px]">
                  Estudiamos tu negocio por fuera —demanda, sitio web y canales— y con lo que nos platiques
                  te diseñamos una solución concreta para crecer, con números. Te la entregamos completa,
                  sin costo y sin compromiso: la ejecutas tú, con otra agencia, o con nosotros.
                </motion.p>

                <motion.ul custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}
                  className="mt-7 space-y-2.5">
                  {['Cuánto mercado estás dejando sobre la mesa', 'Quién se está llevando tu demanda hoy', 'Qué implementar para crecer — con sistemas y accountability'].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[14px] text-papel/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-salvia-b/15">
                        <Check className="h-3 w-3 text-salvia-b" />
                      </span>
                      {t}
                    </li>
                  ))}
                </motion.ul>
              </div>

              {/* Derecha · formulario */}
              <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="lg:col-span-6">
                <div className="card-bb-glass relative overflow-hidden p-6 sm:p-8"
                  style={{ background: 'linear-gradient(155deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)' }}>
                  <span aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-25 blur-3xl" style={{ background: 'var(--cobalto-b)' }} />
                  <div className="relative">
                    <span className="eyebrow-light">Solicita tu plan</span>
                    <h2 className="mt-3 text-[22px] font-medium tracking-tight text-papel sm:text-[26px]" style={{ letterSpacing: '-0.020em' }}>
                      Agenda tu llamada de 30 min.
                    </h2>
                    <p className="mt-2 text-[13px] text-papel/55 sm:text-[13.5px]">
                      Déjanos tus datos y te contactamos para coordinar la reunión. Te respondemos en menos de 24h hábiles.
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
                          <Field label="Nombre"><input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="contact-field" /></Field>
                          <Field label="Correo"><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="contact-field" /></Field>
                          <Field label="Empresa"><input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="contact-field" /></Field>
                          <Field label="Teléfono / WhatsApp"><input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="contact-field" /></Field>
                        </div>
                        <Field label="¿Qué te gustaría mejorar? (opcional)">
                          <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="contact-field resize-none" placeholder="Más clientes, mejor web, ordenar tu marketing…" />
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

      {/* ── Qué incluye ── */}
      <ShellWrap data="light" variant="marfil">
        <div className="relative z-10">
          <span className="eyebrow">Qué incluye</span>
          <h2 className="hero-type mt-4 max-w-[20ch] text-[26px] text-onyx sm:text-[36px]" style={{ fontWeight: 300 }}>
            Una radiografía de tu crecimiento, <span className="multi-grad">hecha por nosotros.</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {INCLUDES.map(({ Icon, t, d }) => (
              <div key={t} className="card-bb p-6 sm:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-onyx/5">
                  <Icon className="h-4 w-4 text-onyx" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 text-[17px] font-medium tracking-tight text-onyx sm:text-[18.5px]">{t}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-plomo">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </ShellWrap>

      {/* ── Cómo funciona ── */}
      <ShellWrap data="light" variant="papel">
        <div className="relative z-10">
          <span className="eyebrow">Cómo funciona</span>
          <h2 className="hero-type mt-4 max-w-[22ch] text-[26px] text-onyx sm:text-[36px]" style={{ fontWeight: 300 }}>
            Tres pasos. <span className="multi-grad">Sin vueltas.</span>
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="relative">
                <span className="font-mono text-[13px] text-plomo/60">{s.n}</span>
                <h3 className="mt-2 text-[18px] font-medium tracking-tight text-onyx sm:text-[20px]">{s.t}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-plomo">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-9 max-w-[60ch] text-[13.5px] leading-[1.6] text-plomo">
            No somos otro proveedor: lo que ofrecemos es tu <strong className="text-onyx">departamento de marketing completo</strong> —tráfico,
            web, sistemas y dirección— por una iguala mensual, con KPIs y responsabilidad por los resultados.
            El Plan de Crecimiento es la mejor forma de que lo veas antes de decidir.
          </p>
        </div>
      </ShellWrap>

      {/* ── Para quién ── */}
      <ShellWrap data="light" variant="marfil">
        <div className="relative z-10 grid gap-6 lg:grid-cols-2">
          <div className="card-bb p-7 sm:p-8">
            <h3 className="text-[16px] font-medium tracking-tight text-onyx">Esto es para ti si…</h3>
            <ul className="mt-4 space-y-3">
              {FOR_YES.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14px] text-plomo">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-salvia/15"><Check className="h-3 w-3 text-salvia" /></span>{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-bb p-7 sm:p-8">
            <h3 className="text-[16px] font-medium tracking-tight text-onyx">No es para ti si…</h3>
            <ul className="mt-4 space-y-3">
              {FOR_NO.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[14px] text-plomo/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-onyx/5 font-mono text-[11px] text-plomo">—</span>{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ShellWrap>

      {/* ── Casos (prueba) ── */}
      <SharedCases />

      {/* ── CTA final ── */}
      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-deep absolute inset-0 opacity-55" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="hero-type mt-2 max-w-[20ch] text-[26px] text-papel sm:text-[40px]" style={{ fontWeight: 300 }}>
            ¿Vemos cuánto puedes <span className="multi-grad-bright">crecer?</span>
          </h2>
          <p className="lead-type mt-5 max-w-[44ch] text-[15px] !text-papel/65 sm:text-[16.5px]">
            Agenda tu llamada de 30 minutos. Sin costo, sin compromiso — sales con un plan claro.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="btn-primary-inv">
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
