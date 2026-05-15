'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin, Clock, Loader2 } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { SiteFrame, AntuarioMark } from '@/components/layout/SiteFrame'
import {
  ShellWrap,
  ChapterTag,
  Breadcrumbs,
  rise,
} from '@/components/common/PageBuildingBlocks'

type SubmitState = 'idle' | 'sending' | 'sent' | 'error'

export function ContactoContent() {
  const [state, setState] = useState<SubmitState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'marketing',
    message: '',
  })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('sending')
    try {
      const r = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!r.ok) throw new Error('failed')
      setState('sent')
    } catch {
      setState('error')
    }
  }

  return (
    <SiteFrame>
      <section
        data-theme="dark"
        className="pt-[80px] sm:pt-[92px] lg:pt-[100px]"
        style={{ paddingBottom: 'clamp(20px, 2.4vh, 36px)' }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(10px,2.4vw,28px)]">
          <div className="section-shell shell-dark pt-[48px] sm:pt-[56px] lg:pt-[64px]">
            <div className="aurora aurora-deep absolute inset-0 opacity-65" aria-hidden />
            <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <motion.span
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={rise}
                  className="eyebrow-light"
                >
                  Contacto · CDMX · México
                </motion.span>
                <motion.h1
                  custom={1}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={rise}
                  className="display mt-5 max-w-[16ch] text-[36px] leading-[1.04] text-papel sm:text-[50px] lg:text-[58px]"
                >
                  Hablemos de tu{' '}
                  <span className="multi-grad-bright">próximo proyecto.</span>
                </motion.h1>
                <motion.p
                  custom={2}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={rise}
                  className="mt-6 max-w-[48ch] text-[15px] leading-[1.55] text-papel/70 sm:text-[16.5px]"
                >
                  La forma más rápida es WhatsApp directo con un estratega.
                  Si prefieres dejarnos los detalles por escrito, el formulario
                  está abajo. Respondemos en menos de 24 horas hábiles.
                </motion.p>

                <motion.div
                  custom={3}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={rise}
                  className="mt-8 flex flex-col gap-3 sm:flex-row"
                >
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-inv"
                  >
                    Cuéntanos por WhatsApp
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="btn-ghost-dark">
                    Escribir un correo
                  </a>
                </motion.div>

                <motion.ul
                  custom={4}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={rise}
                  className="mt-10 grid gap-3 sm:grid-cols-2"
                >
                  {[
                    { Icon: Phone, label: 'WhatsApp', value: siteConfig.phone },
                    { Icon: Mail, label: 'Correo', value: siteConfig.email },
                    { Icon: MapPin, label: 'Sede', value: 'Ciudad de México · MX' },
                    { Icon: Clock, label: 'Atención', value: 'L-V · 9:00 a 18:30 (CDMX)' },
                  ].map((c) => (
                    <li
                      key={c.label}
                      className="flex items-start gap-3 rounded-2xl bg-papel/5 p-4 backdrop-blur-sm"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-papel/10">
                        <c.Icon className="h-3.5 w-3.5 text-papel" />
                      </span>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/45">
                          {c.label}
                        </span>
                        <p className="mt-0.5 text-[13px] text-papel">{c.value}</p>
                      </div>
                    </li>
                  ))}
                </motion.ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6"
              >
                <div
                  className="card-bb-glass relative overflow-hidden p-6 sm:p-8"
                  style={{
                    background:
                      'linear-gradient(155deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)',
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-25 blur-3xl"
                    style={{ background: 'var(--cobalto-b)' }}
                  />

                  <div className="relative">
                    <span className="eyebrow-light">Formulario</span>
                    <h2
                      className="mt-3 text-[22px] font-medium tracking-tight text-papel sm:text-[26px]"
                      style={{ letterSpacing: '-0.020em' }}
                    >
                      Cuéntanos lo esencial.
                    </h2>
                    <p className="mt-2 text-[13px] text-papel/55 sm:text-[13.5px]">
                      Te respondemos con una propuesta inicial en menos de
                      una semana hábil.
                    </p>

                    {state === 'sent' ? (
                      <div className="mt-8 rounded-2xl bg-salvia-b/10 p-6 text-center">
                        <p className="text-[16px] font-medium text-salvia-b">
                          ¡Recibido! Te respondemos pronto.
                        </p>
                        <p className="mt-2 text-[12.5px] text-papel/60">
                          Mientras, puedes seguir explorando casos o servicios.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={onSubmit} className="mt-7 space-y-3.5">
                        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                          <Field label="Nombre">
                            <input
                              required
                              type="text"
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              className="contact-field"
                            />
                          </Field>
                          <Field label="Correo">
                            <input
                              required
                              type="email"
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              className="contact-field"
                            />
                          </Field>
                          <Field label="Empresa">
                            <input
                              type="text"
                              value={form.company}
                              onChange={(e) => setForm({ ...form, company: e.target.value })}
                              className="contact-field"
                            />
                          </Field>
                          <Field label="Teléfono / WhatsApp">
                            <input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              className="contact-field"
                            />
                          </Field>
                        </div>
                        <Field label="¿Qué te interesa?">
                          <select
                            value={form.interest}
                            onChange={(e) => setForm({ ...form, interest: e.target.value })}
                            className="contact-field"
                          >
                            <option value="marketing">Marketing digital integral</option>
                            <option value="seo">SEO</option>
                            <option value="performance">Performance Ads</option>
                            <option value="web">Desarrollo web</option>
                            <option value="redes">Redes sociales</option>
                            <option value="branding">Branding y diseño</option>
                            <option value="software">Software a la medida</option>
                            <option value="ia">Inteligencia Artificial</option>
                            <option value="otro">Otro / no estoy seguro</option>
                          </select>
                        </Field>
                        <Field label="Mensaje">
                          <textarea
                            required
                            rows={4}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            className="contact-field resize-none"
                            placeholder="Cuéntanos contexto del proyecto, objetivo, plazos…"
                          />
                        </Field>

                        <button
                          type="submit"
                          disabled={state === 'sending'}
                          className="btn-primary-inv mt-2 w-full justify-center"
                        >
                          {state === 'sending' ? (
                            <>
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar mensaje
                              <ArrowRight className="h-3.5 w-3.5" />
                            </>
                          )}
                        </button>
                        {state === 'error' && (
                          <p className="text-center text-[12px] text-rubor-b">
                            Hubo un problema enviando. Escríbenos directo por WhatsApp.
                          </p>
                        )}
                        <p className="mt-1 text-center text-[10.5px] text-papel/40">
                          Sin costo · Sin compromiso · Respondemos en 24h hábiles
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ShellWrap data="light" variant="papel">
        <Breadcrumbs trail={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]} />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="lg:col-span-7"
          >
            <ChapterTag roman="I" label="Cobertura" sub="Dónde estamos" />
            <h2
              className="hero-type mt-5 max-w-[22ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]"
              style={{ fontWeight: 300 }}
            >
              Sede en CDMX,{' '}
              <span className="multi-grad">cobertura nacional.</span>
            </h2>
            <p className="lead-type mt-5 max-w-[52ch] text-[15px] sm:text-[16px]">
              Operamos desde Ciudad de México y trabajamos con empresas en
              cualquier estado de la República — de forma remota o presencial
              cuando se requiere. También trabajamos con marcas latinoamericanas
              que operan en MX.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {[
                { label: 'Sede', value: 'CDMX · México' },
                { label: 'Cobertura', value: 'Nacional' },
                { label: 'Modalidad', value: 'Remoto + presencial' },
              ].map((s) => (
                <div key={s.label} className="card-bb-soft p-4">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-plomo">
                    {s.label}
                  </span>
                  <p
                    className="mt-1.5 text-[13px] font-medium text-onyx"
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
            <div
              className="card-bb-float relative overflow-hidden p-8 sm:p-10"
              style={{
                background:
                  'linear-gradient(135deg, rgba(79,70,229,0.06), rgba(34,211,238,0.04) 60%, rgba(167,139,250,0.06))',
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-30 blur-3xl"
                style={{ background: 'var(--cobalto)' }}
              />
              <div className="relative">
                <AntuarioMark className="h-10 w-auto text-onyx" />
                <h3
                  className="mt-6 text-[22px] font-light tracking-tight text-onyx sm:text-[26px]"
                  style={{ letterSpacing: '-0.024em' }}
                >
                  La conversación más rápida es por WhatsApp.
                </h3>
                <p className="mt-3 text-[13.5px] text-grafito">
                  Te conectamos directo con un estratega — sin filtros de cuenta
                  ni mesa de ventas. Respuesta promedio: 30 minutos en horario
                  hábil.
                </p>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6"
                >
                  Iniciar conversación
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </ShellWrap>
    </SiteFrame>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/55">
        {label}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  )
}
