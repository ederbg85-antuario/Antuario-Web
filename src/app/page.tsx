'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

/* ═══════════════════════════════════════════════════════════════════
   ANTUARIO · Home (Brandbook 2026)
   Apple-like. Scroll normal. 90% neutro · 10% multicolor como acento.
   ═══════════════════════════════════════════════════════════════════ */

// ─── Marca: isotipo (currentColor) ─────────────────────────────────────────
function AntuarioMark({
  className = '',
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      viewBox="0 0 1200 787.5"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Antuario"
    >
      <path
        fill="currentColor"
        d="M1049.59 619.8c-85.805-121.912-170.613-244.49-258.074-365.084-51.02-70.235-123.575-108.332-210.371-115.29-186.52-15.238-337.918 141.794-316.715 326.657 20.207 173.266 198.441 292.531 368.062 246.48 47.375-12.921 87.465-38.43 126.887-66.257 17.558-12.59 35.117-24.516 53.34-37.106-14.467-20.541-28.935-41.080-43.403-61.62-14.242-20.208-28.488-40.087-43.066-60.626-30.148 20.871-58.64 42.406-88.457 61.29-52.672 33.128-107.336 34.452-159.352.331-50.687-33.46-71.89-82.16-62.28-142.125 8.944-55.988 53.007-101.375 108.995-114.297 56.32-12.922 114.957 8.282 148.418 55.657 55.989 78.515 111.317 157.695 166.64 236.543 13.583 19.546 30.15 35.78 51.02 48.039 50.356 29.484 119.926 26.504 161.34-6.957-.996-2.32-1.656-3.977-2.984-5.633z"
      />
      <path
        fill="currentColor"
        d="M338.703 124.281c0 52.852-42.848 95.7-95.7 95.7-52.855 0-95.702-42.848-95.702-95.7 0-52.851 42.847-95.699 95.703-95.699 52.851 0 95.7 42.848 95.7 95.7z"
      />
    </svg>
  )
}

// ─── Marca: logotype completo (SVG remoto) ─────────────────────────────────
function AntuarioLogotype({
  className = '',
  dark = false,
  style,
}: {
  className?: string
  dark?: boolean
  style?: React.CSSProperties
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logos/logotype.svg"
      alt="Antuario"
      className={className}
      style={{
        ...style,
        filter: dark ? 'invert(1) brightness(2)' : 'none',
      }}
      draggable={false}
    />
  )
}

// ─── WhatsApp icon ─────────────────────────────────────────────────────────
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

// ─── Animation primitives ──────────────────────────────────────────────────
const rise = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <BrandBar scrolled={scrolled} onOpenMenu={() => setMenuOpen(true)} />
      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="relative">
        <HeroSection />
        <AgencySection />
        <ServicesSection />
        <DifferentiatorsSection />
        <DataSection />
        <CasesSection />
        <AccountabilitySection />
        <AISection />
        <CoverageSection />
        <CTASection />
        <FooterMin />
      </main>
    </>
  )
}

// ─── Brand bar — barra superior con logotype/isotipo + CTA ─────────────────
function BrandBar({
  scrolled,
  onOpenMenu,
}: {
  scrolled: boolean
  onOpenMenu: () => void
}) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-nieve/85 backdrop-blur-xl shadow-[0_1px_0_rgba(10,10,10,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3.5 sm:px-10 sm:py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center"
          aria-label="Antuario · Ir al inicio"
        >
          <AntuarioLogotype className="h-[22px] w-auto sm:h-[26px]" />
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-onyx px-5 py-2.5 text-[12.5px] font-medium text-papel transition-all duration-300 hover:bg-grafito sm:inline-flex sm:items-center sm:gap-2"
          >
            Cuéntanos tu proyecto
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={onOpenMenu}
            aria-label="Abrir menú"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-papel text-onyx shadow-soft transition-all duration-300 hover:shadow-card"
          >
            <Menu className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </header>
  )
}

// ─── Nav overlay (drawer fullscreen) ───────────────────────────────────────
function NavOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[80] bg-onyx/95 backdrop-blur-xl"
          onClick={onClose}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="ai-aurora opacity-25" />
          </div>

          <motion.div
            initial={{ y: -8 }}
            animate={{ y: 0 }}
            exit={{ y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative mx-auto flex h-full max-w-6xl flex-col px-6 py-7 sm:px-10 sm:py-10"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/40">
                Antuario · Menú
              </span>
              <button
                onClick={onClose}
                aria-label="Cerrar menú"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-papel/8 text-papel transition-colors hover:bg-papel/14"
              >
                <X className="h-[18px] w-[18px]" />
              </button>
            </div>

            <div className="mt-10 grid flex-1 gap-10 overflow-y-auto pb-10 sm:mt-14 lg:grid-cols-12 lg:gap-16">
              <nav className="lg:col-span-7">
                <span className="eyebrow-light">Páginas</span>
                <ul className="mt-5 space-y-1.5">
                  {siteConfig.nav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + i * 0.04, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-baseline gap-4 py-2.5 text-[28px] font-light tracking-[-0.022em] text-papel/90 transition-colors hover:text-papel sm:text-[44px]"
                      >
                        <span className="font-mono text-[10px] tracking-widest text-papel/30 sm:text-[11px]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cobalto-b via-rubor-b to-nectar-b transition-all duration-500 group-hover:w-full" />
                        </span>
                        <ArrowRight className="h-4 w-4 -translate-x-2 self-center opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:h-5 sm:w-5" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="lg:col-span-5">
                <span className="eyebrow-light">Servicios</span>
                <ul className="mt-5 grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
                  {siteConfig.services.map((s, i) => (
                    <motion.li
                      key={s.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18 + i * 0.03, duration: 0.4 }}
                    >
                      <Link
                        href={s.href}
                        onClick={onClose}
                        className="group flex items-center justify-between rounded-xl bg-papel/4 px-4 py-3 transition-all duration-300 hover:bg-papel/8"
                      >
                        <div className="min-w-0">
                          <p className="text-[13.5px] font-medium text-papel">
                            {s.label}
                          </p>
                          <p className="mt-0.5 truncate text-[11.5px] text-papel/50">
                            {s.short}
                          </p>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-papel/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-papel" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-7 pt-5">
                  <div className="hair-w mb-5" />
                  <span className="eyebrow-light">Contacto</span>
                  <div className="mt-3 space-y-1.5 text-[12.5px] text-papel/55">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="block transition-colors hover:text-papel"
                    >
                      {siteConfig.email}
                    </a>
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-colors hover:text-papel"
                    >
                      {siteConfig.phone} · WhatsApp
                    </a>
                  </div>

                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-inv mt-6"
                  >
                    Cuéntanos tu proyecto
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── 01 · HERO ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-onyx text-papel"
    >
      {/* Aurora suavísima — un solo color dominante */}
      <div className="aurora aurora-deep inset-0" aria-hidden />
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-25" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.55) 100%)',
        }}
      />

      <div className="section-pad relative z-10 flex min-h-[100svh] flex-col">
        <div className="mx-auto flex flex-1 w-full max-w-[1180px] flex-col justify-center pt-16 sm:pt-24">
          {/* Eyebrow + spectrum */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="flex items-center gap-3"
          >
            <span className="spectrum-bar" style={{ width: 64 }} />
            <span className="eyebrow-light">Sistema de marca · 2026</span>
          </motion.div>

          {/* Display típico brandbook — Apple ultralight */}
          <motion.h1
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="display mt-7 max-w-[18ch] text-balance text-[44px] text-papel sm:text-[80px] lg:text-[104px]"
          >
            Soluciones de{' '}
            <span className="multi-grad-bright">Marketing Digital</span>{' '}
            a la medida.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="hero-type mt-7 max-w-[44ch] text-[16px] text-papel/70 sm:text-[20px] sm:leading-[1.46]"
          >
            Marketing, sistemas e inteligencia artificial — bajo una sola
            dirección estratégica, con accountability total sobre cada resultado.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-inv"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Cuéntanos tu proyecto
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="#agencia"
              className="btn-ghost-dark"
            >
              Conocer Antuario
            </a>
            <span className="text-[12px] text-papel/40 sm:ml-3">
              Sin costo · Sin compromiso
            </span>
          </motion.div>

          {/* Servicios chips — micro lista */}
          <motion.ul
            custom={4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="mt-14 flex flex-wrap items-center gap-x-2 gap-y-2.5 sm:gap-x-3"
          >
            {[
              'Performance Ads',
              'SEO',
              'Redes Sociales',
              'Diseño Web',
              'Software',
              'Inteligencia Artificial',
            ].map((s, i) => (
              <li key={s} className="flex items-center gap-2 sm:gap-3">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-papel/20" />
                )}
                <span className="text-[11.5px] font-medium text-papel/65 sm:text-[13px]">
                  {s}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Footer del hero — meta minimal */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1180px] items-end justify-between pb-6 pt-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/35">
            Antuario · CDMX · México
          </span>
          <span className="font-mono text-[10px] tracking-[0.22em] text-papel/35">
            Vol. 01 · MMXXVI
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── 02 · QUIÉNES SOMOS ────────────────────────────────────────────────────
function AgencySection() {
  return (
    <section id="agencia" className="relative bg-nieve">
      <div className="section-pad mx-auto max-w-[1180px]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
                I · Esencia
              </span>
              <span className="h-px w-12 bg-onyx/10" />
              <span className="eyebrow">Quiénes somos</span>
            </div>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="display mt-7 max-w-[14ch] text-[44px] text-onyx sm:text-[68px] lg:text-[84px]"
            >
              Más que <span className="multi-grad">una agencia.</span>
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="lead-type mt-7 max-w-[44ch] text-[16px] sm:text-[18px]"
            >
              Capacidades estratégicas, tecnológicas y creativas que van mucho
              más allá de lo que una agencia tradicional ofrece.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="body-type mt-5 max-w-[52ch] text-[14px] sm:text-[15px]"
            >
              Operamos como partner estratégico: nos involucramos a fondo,
              diseñamos soluciones a la medida y respondemos por los resultados
              — no por las tareas.
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="mt-10 flex items-center gap-4"
            >
              <span className="spectrum-bar" style={{ width: 72 }} />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
                El Creador con la disciplina del Mago
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center lg:col-span-5"
          >
            <AgencyConstellation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Constellation: isotipo orbital (animación premium conservada) ─────────
function AgencyConstellation() {
  const orbits = [
    { label: 'Marketing', color: 'var(--cobalto)', radius: 132, angle: -90, dur: 34 },
    { label: 'Data',      color: 'var(--laguna)',  radius: 132, angle: -30, dur: 34 },
    { label: 'IA',        color: 'var(--glicina)', radius: 132, angle:  30, dur: 34 },
    { label: 'Diseño',    color: 'var(--rubor)',   radius: 168, angle:  90, dur: 46 },
    { label: 'Web',       color: 'var(--glicina)', radius: 168, angle: 170, dur: 46 },
    { label: 'Software',  color: 'var(--salvia)',  radius: 168, angle: 250, dur: 46 },
  ] as const

  return (
    <div className="agency-stage relative flex h-[340px] w-[340px] items-center justify-center sm:h-[440px] sm:w-[440px]">
      <span className="agency-halo absolute inset-6 rounded-full sm:inset-10" aria-hidden />

      <span
        className="agency-conic absolute h-[220px] w-[220px] rounded-full sm:h-[280px] sm:w-[280px]"
        aria-hidden
      />

      <svg
        className="agency-ring-dashed absolute h-[188px] w-[188px] sm:h-[240px] sm:w-[240px]"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <circle
          cx="100"
          cy="100"
          r="98"
          fill="none"
          stroke="rgba(10,10,10,0.18)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
      </svg>

      <span
        className="absolute h-[268px] w-[268px] rounded-full sm:h-[346px] sm:w-[346px]"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(10,10,10,0.06)' }}
        aria-hidden
      />

      <span className="agency-pulse absolute h-16 w-16 rounded-full" aria-hidden />
      <span className="agency-pulse delay-1 absolute h-16 w-16 rounded-full" aria-hidden />
      <span className="agency-pulse delay-2 absolute h-16 w-16 rounded-full" aria-hidden />

      {orbits.map((o) => (
        <span
          key={o.label}
          className="agency-orbit-layer pointer-events-none absolute inset-0"
          style={
            {
              animationDuration: `${o.dur}s`,
              ['--start-angle' as string]: `${o.angle}deg`,
              ['--rad' as string]: `${o.radius}px`,
            } as React.CSSProperties
          }
          aria-hidden
        >
          <span
            className="agency-orbit-pill absolute left-1/2 top-1/2 flex items-center gap-1.5 rounded-full bg-papel/95 px-2.5 py-1.5 backdrop-blur-sm"
            style={{
              animationDuration: `${o.dur}s`,
              boxShadow:
                '0 1px 2px rgba(15,15,30,0.06), 0 4px 10px rgba(15,15,30,0.05)',
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: o.color as string, boxShadow: `0 0 8px ${o.color}` }}
            />
            <span className="text-[10.5px] font-medium tracking-tight text-onyx sm:text-[11.5px]">
              {o.label}
            </span>
          </span>
        </span>
      ))}

      <div className="relative z-10 flex items-center justify-center">
        <span
          className="agency-core-glow pointer-events-none absolute h-24 w-24 rounded-full sm:h-32 sm:w-32"
          aria-hidden
        />
        <div className="agency-core-breath relative">
          <AntuarioMark className="h-[92px] w-auto text-onyx sm:h-[120px]" />
        </div>
      </div>
    </div>
  )
}

// ─── 03 · SERVICIOS / CUATRO OFICIOS + Detalle ─────────────────────────────
function ServicesSection() {
  type Cap = {
    n: string
    tag: string
    title: string
    headline: string
    description: string
    items: string[]
    accent: string
  }

  const caps: Cap[] = [
    {
      n: '01',
      tag: 'Paid Media',
      title: 'Performance Ads',
      headline: 'Campañas que mueven la aguja, no que ganan premios.',
      description:
        'Optimizamos cada peso invertido — desde la creatividad hasta la puja — para conseguir leads, ventas y crecimiento real.',
      items: [
        'Google, Meta y TikTok Ads',
        'ROAS, CPA y CPL reales',
        'Testing creativo continuo',
        'Reportes con accountability',
      ],
      accent: 'var(--cobalto)',
    },
    {
      n: '02',
      tag: 'Orgánico',
      title: 'SEO',
      headline: 'Crecer en búsquedas, sin pagar por cada click.',
      description:
        'Auditoría técnica, estrategia de contenidos y autoridad de dominio para posicionarte donde tus clientes te buscan.',
      items: [
        'Auditoría técnica + competencia',
        'Estrategia de keywords',
        'Contenido y linkbuilding',
        'Reportes mensuales de posiciones',
      ],
      accent: 'var(--salvia)',
    },
    {
      n: '03',
      tag: 'Contenido',
      title: 'Redes Sociales',
      headline: 'Estrategia, contenido y producción bajo el mismo techo.',
      description:
        'Comunicamos tu marca con consistencia: planeamos, producimos y publicamos contenido que conecta y convierte.',
      items: [
        'Calendarios estratégicos',
        'Producción foto y video',
        'Edición y post profesional',
        'Community y rendimiento',
      ],
      accent: 'var(--nectar)',
    },
    {
      n: '04',
      tag: 'Diseño',
      title: 'Diseño Creativo',
      headline: 'Identidad visual que diferencia a tu marca.',
      description:
        'Branding, dirección de arte y sistemas visuales escalables — el lenguaje gráfico que sostiene toda tu comunicación.',
      items: [
        'Branding e identidad',
        'Dirección de arte',
        'Sistemas visuales',
        'Piezas para campañas',
      ],
      accent: 'var(--rubor)',
    },
    {
      n: '05',
      tag: 'Web',
      title: 'Desarrollo Web',
      headline: 'Sitios y plataformas pensados para convertir.',
      description:
        'Construimos webs rápidas, optimizadas para SEO y enfocadas en la experiencia del usuario y el cierre de venta.',
      items: [
        'Sitios corporativos y landings',
        'Ecommerce y catálogos',
        'UX/UI orientado a conversión',
        'Performance + analytics',
      ],
      accent: 'var(--glicina)',
    },
    {
      n: '06',
      tag: 'Tecnología',
      title: 'Software a la medida',
      headline: 'Sistemas que aceleran tu operación.',
      description:
        'CRM, automatizaciones e integraciones para que el equipo opere con menos fricción y más visibilidad.',
      items: [
        'CRM y plataformas internas',
        'Integraciones API',
        'Automatización de procesos',
        'Dashboards y BI a medida',
      ],
      accent: 'var(--laguna)',
    },
    {
      n: '07',
      tag: 'Vanguardia',
      title: 'Inteligencia Artificial',
      headline: 'IA aplicada — operación, marketing y producto.',
      description:
        'No hablamos de IA, la implementamos: agentes, LLMs y automatización inteligente para escalar sin escalar costos.',
      items: [
        'Agentes WhatsApp y voz',
        'LLMs custom para tu negocio',
        'IA generativa de contenido',
        'Optimización de campañas con IA',
      ],
      accent: 'var(--glicina)',
    },
  ]

  const [activeIdx, setActiveIdx] = useState(0)
  const active = caps[activeIdx]

  return (
    <section id="servicios" className="relative bg-marfil">
      <div className="section-pad mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
              I · Oficios
            </span>
            <span className="h-px w-12 bg-onyx/10" />
            <span className="eyebrow">Qué hacemos</span>
          </div>
          <h2 className="display mt-7 max-w-[20ch] text-[36px] text-onyx sm:text-[58px] lg:text-[72px]">
            Una sola dirección,{' '}
            <span className="multi-grad">muchas capacidades.</span>
          </h2>
          <p className="lead-type mt-7 max-w-[52ch] text-[16px] sm:text-[18px]">
            Construimos sistemas comerciales completos para empresas de
            servicios. No vendemos piezas sueltas: tomamos una marca, la
            posicionamos, la ponemos a producir leads y los convertimos en
            ventas.
          </p>
        </motion.div>

        {/* MOBILE — tabs en scroll horizontal */}
        <div className="lg:hidden">
          <div className="no-scrollbar -mx-5 mb-4 overflow-x-auto px-5">
            <div className="flex w-max gap-2">
              {caps.map((c, i) => {
                const isActive = i === activeIdx
                return (
                  <button
                    key={c.title}
                    onClick={() => setActiveIdx(i)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-[12px] font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-onyx text-papel'
                        : 'bg-papel text-grafito shadow-soft'
                    }`}
                  >
                    {c.title}
                  </button>
                )
              })}
            </div>
          </div>
          <CapabilityPanel cap={active} mobile />
        </div>

        {/* DESKTOP — lista vertical + panel */}
        <div className="hidden grid-cols-12 gap-10 lg:grid">
          <ul className="lg:col-span-5">
            {caps.map((c, i) => {
              const isActive = i === activeIdx
              return (
                <li key={c.title}>
                  <button
                    onClick={() => setActiveIdx(i)}
                    onMouseEnter={() => setActiveIdx(i)}
                    className="group relative flex w-full items-center gap-5 py-4 text-left transition-colors"
                  >
                    <span
                      aria-hidden
                      className="absolute -left-px top-0 h-full w-[2px] origin-top transition-transform duration-500"
                      style={{
                        background: c.accent,
                        transform: `scaleY(${isActive ? 1 : 0})`,
                      }}
                    />
                    <span
                      className="font-mono text-[10px] tracking-widest transition-colors"
                      style={{ color: isActive ? c.accent : 'var(--niebla)' }}
                    >
                      {c.n}
                    </span>
                    <span
                      className={`flex-1 text-[17px] font-medium tracking-tight transition-colors ${
                        isActive
                          ? 'text-onyx'
                          : 'text-niebla group-hover:text-grafito'
                      }`}
                      style={{ letterSpacing: '-0.014em' }}
                    >
                      {c.title}
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      style={{ color: c.accent }}
                    />
                  </button>
                  {i < caps.length - 1 && <div className="hair" />}
                </li>
              )
            })}
          </ul>

          <div className="lg:col-span-7">
            <CapabilityPanel cap={active} />
          </div>
        </div>
      </div>
    </section>
  )
}

function CapabilityPanel({
  cap,
  mobile = false,
}: {
  cap: {
    n: string
    tag: string
    title: string
    headline: string
    description: string
    items: string[]
    accent: string
  }
  mobile?: boolean
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={cap.title}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`card-bb-elev relative overflow-hidden ${mobile ? 'p-6' : 'p-8'}`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-25 blur-3xl"
          style={{ background: cap.accent }}
        />

        <div className="relative">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ color: cap.accent }}
            >
              {cap.tag}
            </span>
            <span className="h-px flex-1 bg-onyx/8" />
            <span className="font-mono text-[10px] tracking-widest text-niebla">
              {cap.n} / 07
            </span>
          </div>

          <h3
            className={`mt-4 font-medium tracking-tight text-onyx ${
              mobile ? 'text-[26px]' : 'text-[34px]'
            }`}
            style={{ letterSpacing: '-0.022em', lineHeight: 1.08 }}
          >
            {cap.title}
          </h3>
          <p
            className={`mt-3 font-light tracking-tight text-grafito ${
              mobile ? 'text-[15px]' : 'text-[18px]'
            }`}
            style={{ letterSpacing: '-0.012em', lineHeight: 1.32 }}
          >
            {cap.headline}
          </p>
          <p
            className={`body-type mt-3 ${mobile ? 'text-[13px]' : 'text-[14px]'}`}
          >
            {cap.description}
          </p>

          <ul
            className={`mt-6 grid gap-2 ${
              mobile ? 'grid-cols-1' : 'grid-cols-2 gap-x-6'
            }`}
          >
            {cap.items.map((it) => (
              <li
                key={it}
                className={`flex items-start gap-2.5 text-grafito ${
                  mobile ? 'text-[13px]' : 'text-[13.5px]'
                }`}
              >
                <span
                  aria-hidden
                  className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: cap.accent }}
                />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── 04 · DIFERENCIADORES (Bento dark) ─────────────────────────────────────
function DifferentiatorsSection() {
  const items = [
    {
      key: 'accountability',
      title: 'Accountability real',
      text: 'Respondemos por resultados, no por tareas. Cada compromiso tiene un dueño y una métrica.',
      accent: 'var(--cobalto-b)',
    },
    {
      key: 'data',
      title: 'Sistemas de datos',
      text: 'Tableros vivos para que cada decisión esté basada en información — no en intuición.',
      accent: 'var(--laguna-b)',
    },
    {
      key: 'vanguard',
      title: 'Vanguardia con IA',
      text: 'Mientras la mayoría apenas la nombra, nosotros la operamos. IA en marketing, operación y producto para soluciones más rápidas y económicas.',
      accent: 'var(--glicina-b)',
    },
    {
      key: 'strategy',
      title: 'Estrategia + estructura',
      text: 'Aportamos visión completa: del posicionamiento al funnel, del producto a la operación. Ordenamos lo que está suelto.',
      accent: 'var(--rubor-b)',
    },
    {
      key: 'partner',
      title: 'Partner end-to-end',
      text: 'De la estrategia a la optimización. Podemos ejecutar todo o sumarnos a tu equipo donde haga falta.',
      accent: 'var(--salvia-b)',
    },
    {
      key: 'simple',
      title: 'Simplicidad con criterio',
      text: 'No complicamos por complicar. Buscamos la solución más simple que funcione bien — y la ejecutamos con calidad.',
      accent: 'var(--nectar-b)',
    },
  ]

  return (
    <section id="diferenciadores" className="relative isolate overflow-hidden bg-onyx text-papel">
      <div className="aurora aurora-deep inset-0 opacity-50" aria-hidden />
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-20" />

      <div className="section-pad relative z-10 mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/40">
              I · Diferenciadores
            </span>
            <span className="h-px w-12 bg-papel/15" />
            <span className="eyebrow-light">Por qué Antuario</span>
          </div>
          <h2 className="display mt-7 max-w-[18ch] text-[36px] text-papel sm:text-[58px] lg:text-[72px]">
            Lo que nos hace{' '}
            <span className="multi-grad-bright">diferentes.</span>
          </h2>
          <p className="lead-type mt-7 max-w-[52ch] text-[15px] !text-papel/65 sm:text-[18px]">
            Una agencia a la vanguardia, en un mercado donde muchos siguen
            atorados en la vieja escuela.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.key}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="group relative overflow-hidden rounded-[22px] bg-papel/4 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:bg-papel/8 sm:p-7"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: it.accent }}
              />

              <span
                aria-hidden
                className="mb-4 block h-1.5 w-1.5 rounded-full"
                style={{
                  background: it.accent,
                  boxShadow: `0 0 12px ${it.accent}`,
                }}
              />
              <h3
                className="text-[17px] font-medium tracking-tight text-papel"
                style={{ letterSpacing: '-0.018em' }}
              >
                {it.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.56] text-papel/60">
                {it.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 05 · DATOS / DASHBOARD ────────────────────────────────────────────────
function DataSection() {
  const features = [
    { positive: false, text: 'Datos de vanidad sin contexto' },
    { positive: true, text: 'Métricas que mueven el negocio' },
    { positive: true, text: 'Visibilidad en tiempo real' },
    { positive: true, text: 'Dashboard propio o software a la medida' },
  ]

  return (
    <section id="datos" className="relative bg-nieve">
      <div className="section-pad mx-auto max-w-[1180px]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
                III · Datos
              </span>
              <span className="h-px w-12 bg-onyx/10" />
              <span className="eyebrow">Información</span>
            </div>
            <h2 className="display mt-7 max-w-[14ch] text-[36px] text-onyx sm:text-[54px] lg:text-[64px]">
              Medición estratégica,{' '}
              <span className="multi-grad">no reportes genéricos.</span>
            </h2>
            <p className="lead-type mt-7 max-w-[44ch] text-[15px] sm:text-[17px]">
              Construimos sistemas de información estratégicos — no PDFs con
              likes y alcance.
            </p>

            <ul className="mt-8 space-y-2.5">
              {features.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                      f.positive
                        ? 'bg-salvia/15 text-salvia'
                        : 'bg-onyx/06 text-niebla'
                    }`}
                    style={!f.positive ? { background: 'rgba(10,10,10,0.06)' } : {}}
                    aria-hidden
                  >
                    {f.positive ? (
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8.5l3 3 7-7" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 16 16"
                        className="h-2.5 w-2.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      >
                        <path d="M4 4l8 8M12 4l-8 8" />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`text-[14px] leading-snug ${
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-7"
          >
            <DashboardImage />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DashboardImage() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[36px] opacity-50 blur-[60px]"
        style={{
          background:
            'radial-gradient(60% 60% at 30% 30%, rgba(79,70,229,0.18), transparent 60%), radial-gradient(50% 50% at 70% 70%, rgba(34,211,238,0.15), transparent 60%)',
        }}
        aria-hidden
      />

      <div className="overflow-hidden rounded-[22px] bg-onyx shadow-elevated sm:rounded-[28px]">
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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/dashboard-vision-marketing.jpg"
          alt="Antuario Dashboard — Visión General de Marketing"
          className="block h-auto w-full select-none"
          loading="lazy"
          draggable={false}
        />
      </div>
    </div>
  )
}

// ─── 06 · CASOS DE ÉXITO ───────────────────────────────────────────────────
function CasesSection() {
  const cases = [
    { src: '/portfolio/acriland.jpg', name: 'Acriland', tag: 'Diseño Web · SEO' },
    { src: '/portfolio/aracnene.jpg', name: 'Aracnene', tag: 'Diseño Web · SEO' },
    { src: '/portfolio/maggadan.jpg', name: 'Maggadan', tag: 'Marketing Digital' },
    { src: '/portfolio/magia-travel.jpg', name: 'Magia Travel', tag: 'Diseño Web' },
    { src: '/portfolio/metrica-btl.jpg', name: 'Métrica BTL', tag: 'Diseño Web · SEO' },
    { src: '/portfolio/reserva27.jpg', name: 'Reserva 27', tag: 'Marketing Digital' },
    { src: '/portfolio/somos-unno.jpg', name: 'Somos Unno', tag: 'Marketing Digital' },
    { src: '/portfolio/acriland-web.jpg', name: 'Acriland Web', tag: 'Diseño Web · SEO' },
  ]
  const loop = [...cases, ...cases]

  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let raf = 0
    let last = performance.now()
    let pauseUntil = 0

    const bumpPause = () => {
      pauseUntil = performance.now() + 1800
    }
    track.addEventListener('pointerdown', bumpPause, { passive: true })
    track.addEventListener('wheel', bumpPause, { passive: true })
    track.addEventListener('touchmove', bumpPause, { passive: true })
    track.addEventListener('mouseenter', bumpPause)

    const tick = (now: number) => {
      const dt = Math.min(now - last, 60)
      last = now
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!reduceMotion && now > pauseUntil) {
        track.scrollLeft += 0.04 * dt
        const half = track.scrollWidth / 2
        if (track.scrollLeft >= half) track.scrollLeft -= half
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      track.removeEventListener('pointerdown', bumpPause)
      track.removeEventListener('wheel', bumpPause)
      track.removeEventListener('touchmove', bumpPause)
      track.removeEventListener('mouseenter', bumpPause)
    }
  }, [])

  return (
    <section id="casos" className="relative bg-marfil">
      <div className="section-pad mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-[1180px]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="mb-10 sm:mb-14"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
                IV · Casos
              </span>
              <span className="h-px w-12 bg-onyx/10" />
              <span className="eyebrow">Trabajo</span>
            </div>
            <h2 className="display mt-7 max-w-[18ch] text-[36px] text-onyx sm:text-[54px] lg:text-[68px]">
              Nuestro trabajo{' '}
              <span className="multi-grad">habla por sí mismo.</span>
            </h2>
            <p className="lead-type mt-7 max-w-[52ch] text-[15px] sm:text-[17px]">
              Marcas que confían en Antuario para su marketing digital,
              desarrollo web y posicionamiento.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative -mx-[clamp(20px,5.5vw,120px)] lg:-mx-[clamp(56px,7vw,140px)]"
        >
          <div
            ref={trackRef}
            className="marquee-mask no-scrollbar overflow-x-auto px-[clamp(20px,5.5vw,120px)] lg:px-[clamp(56px,7vw,140px)]"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex w-max gap-4 pb-2 sm:gap-5">
              {loop.map((c, i) => (
                <article
                  key={`${c.name}-${i}`}
                  className="group relative aspect-[4/5] w-[200px] flex-shrink-0 select-none overflow-hidden rounded-[22px] bg-lino sm:w-[240px] lg:w-[260px]"
                  style={{
                    boxShadow:
                      '0 2px 4px rgba(15,15,30,0.08), 0 8px 18px rgba(15,15,30,0.08)',
                  }}
                  aria-label={c.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.src}
                    alt={`${c.name} · ${c.tag}`}
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/65">
                      {c.tag}
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
        </motion.div>
      </div>
    </section>
  )
}

// ─── 07 · ACCOUNTABILITY ───────────────────────────────────────────────────
function AccountabilitySection() {
  const us = [
    'Metas claras desde el día 1',
    'Compromisos concretos al inicio',
    'Cuando algo falla, hay acción',
    'Solo métricas que importan',
    'Nosotros empujamos el seguimiento',
    'Trazabilidad completa del ROI',
  ]
  const them = [
    'Entregan tareas, no resultados',
    'Objetivos vagos o que cambian',
    'Cuando algo falla, hay justificación',
    'Reportes que nadie entiende',
    'La marca persigue el seguimiento',
    'No saben cuánto vale cada peso',
  ]

  return (
    <section
      id="accountability"
      className="relative isolate overflow-hidden bg-carbon text-papel"
    >
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-30" />

      <div className="section-pad relative mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/40">
              IV · Accountability
            </span>
            <span className="h-px w-12 bg-papel/15" />
            <span className="eyebrow-light">Cómo trabajamos</span>
          </div>
          <h2 className="display mt-7 max-w-[20ch] text-[36px] text-papel sm:text-[58px] lg:text-[68px]">
            Resultados concretos.{' '}
            <span className="multi-grad-bright">Responsabilidad total.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="rounded-[22px] bg-papel/4 p-7 backdrop-blur-sm sm:p-8"
          >
            <span className="eyebrow-light">Otra agencia</span>
            <ul className="mt-5 space-y-3">
              {them.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-[13.5px] text-papel/45 line-through decoration-papel/20 sm:text-[14px]"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-papel/20" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="rounded-[22px] bg-papel p-7 text-onyx sm:p-8"
            style={{
              boxShadow:
                '0 3px 6px rgba(0,0,0,0.10), 0 14px 26px rgba(0,0,0,0.10)',
            }}
          >
            <span className="eyebrow">Antuario</span>
            <ul className="mt-5 space-y-3">
              {us.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-[14px] font-medium text-onyx sm:text-[14.5px]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-onyx" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── 08 · INTELIGENCIA ARTIFICIAL ──────────────────────────────────────────
function AISection() {
  const items = [
    { title: 'Agentes WhatsApp', text: 'Atienden, califican y dan seguimiento las 24 horas.' },
    { title: 'Agentes de voz', text: 'Confirman citas, califican prospectos y responden FAQs.' },
    { title: 'Automatización', text: 'Seguimientos, clasificación de leads, asignación de tareas.' },
    { title: 'IA en campañas', text: 'Optimización de puja, segmentación predictiva, creatividades.' },
    { title: 'LLMs a la medida', text: 'Asistentes internos y sistemas autónomos.' },
    { title: 'IA generativa', text: 'Imágenes, video, animaciones 3D, contenido a escala.' },
  ]

  return (
    <section
      id="ia"
      className="relative isolate overflow-hidden bg-onyx text-papel"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ai-aurora" />
      </div>
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-20" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,10,10,0.40), transparent 30%, transparent 70%, rgba(10,10,10,0.70))',
        }}
      />

      <div className="section-pad relative z-10 mx-auto max-w-[1180px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-3 w-3 items-center justify-center">
              <span className="ai-orb absolute inset-0" />
              <span className="relative h-2 w-2 rounded-full bg-papel" />
            </span>
            <span className="eyebrow-light">Inteligencia Artificial</span>
          </div>
          <h2 className="display mt-7 max-w-[20ch] text-[36px] text-papel sm:text-[58px] lg:text-[72px]">
            No hablamos de IA.{' '}
            <span className="multi-grad-bright">La implementamos.</span>
          </h2>
          <p className="lead-type mt-7 max-w-[52ch] text-[15px] !text-papel/65 sm:text-[18px]">
            Mientras la mayoría apenas la conoce como tendencia, nosotros la
            operamos en proyectos reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="rounded-[22px] bg-papel/4 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-papel/8"
            >
              <h3
                className="text-[17px] font-medium tracking-tight text-papel"
                style={{ letterSpacing: '-0.018em' }}
              >
                {it.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.56] text-papel/60">
                {it.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 09 · COBERTURA / MAPA MÉXICO ──────────────────────────────────────────
function CoverageSection() {
  return (
    <section id="cobertura" className="relative bg-nieve">
      <div className="section-pad mx-auto max-w-[1180px]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
                IV · Cobertura
              </span>
              <span className="h-px w-12 bg-onyx/10" />
              <span className="eyebrow">Ubicación</span>
            </div>
            <h2 className="display mt-7 max-w-[14ch] text-[36px] text-onyx sm:text-[54px] lg:text-[64px]">
              Sede en CDMX,{' '}
              <span className="multi-grad">cobertura nacional.</span>
            </h2>
            <p className="lead-type mt-7 max-w-[44ch] text-[15px] sm:text-[17px]">
              Trabajamos con marcas en todo México. Desde nuestra base en la
              Ciudad de México operamos proyectos en cualquier estado del país,
              de forma remota o presencial cuando se requiera.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { label: 'Sede', value: 'CDMX' },
                { label: 'Cobertura', value: 'Nacional' },
                { label: 'Modalidad', value: 'Remoto + presencial' },
              ].map((s) => (
                <div key={s.label} className="card-bb-soft p-4">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-plomo">
                    {s.label}
                  </span>
                  <p
                    className="mt-1.5 text-[13.5px] font-medium text-onyx"
                    style={{ letterSpacing: '-0.014em' }}
                  >
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <MexicoMap />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MexicoMap() {
  type City = { name: string; x: number; y: number; primary?: boolean }
  const cities: City[] = [
    { name: 'Tijuana', x: 48, y: 30 },
    { name: 'Monterrey', x: 570, y: 240 },
    { name: 'Guadalajara', x: 490, y: 400 },
    { name: 'CDMX', x: 608, y: 442, primary: true },
    { name: 'Mérida', x: 890, y: 390 },
    { name: 'Cancún', x: 960, y: 365 },
    { name: 'León', x: 510, y: 360 },
    { name: 'Puebla', x: 640, y: 460 },
  ]
  const cdmx = cities.find((c) => c.primary)!

  const mainland = 'M 88 8 C 120 10 200 18 280 28 C 360 38 450 80 530 135 C 590 175 630 210 660 235 C 670 280 660 320 650 355 C 665 395 690 430 715 455 C 740 470 770 482 800 475 C 830 468 860 448 885 425 C 888 400 890 380 920 372 C 945 370 970 378 990 385 C 998 395 1000 405 995 420 C 975 448 955 468 930 485 C 910 495 885 505 860 510 C 845 530 838 555 835 580 C 835 592 832 598 825 598 C 790 585 750 565 720 552 C 680 535 640 525 600 518 C 560 510 530 500 505 488 C 480 475 458 460 440 445 C 425 428 415 408 405 390 C 395 370 385 348 370 322 C 350 290 325 262 300 238 C 275 215 250 190 230 165 C 210 140 185 105 165 70 C 150 48 138 30 128 20 Z'
  const baja = 'M 42 10 C 50 15 60 28 72 48 C 90 80 110 130 130 180 C 150 220 175 255 200 280 C 225 300 250 315 270 325 C 265 310 255 290 248 270 C 240 250 232 228 225 205 C 215 175 205 148 192 120 C 178 90 160 60 140 38 C 120 20 100 10 85 8 Z'

  return (
    <div className="relative mx-auto max-w-[560px] lg:max-w-none">
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[36px] opacity-50 blur-[60px]"
        style={{
          background:
            'radial-gradient(60% 60% at 30% 30%, rgba(79,70,229,0.16), transparent 60%), radial-gradient(50% 50% at 70% 70%, rgba(34,211,238,0.14), transparent 60%)',
        }}
        aria-hidden
      />

      <div className="card-bb-elev overflow-hidden bg-papel/70 backdrop-blur-sm p-5 sm:p-7">
        <svg
          viewBox="0 0 1020 620"
          className="h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Mapa de México con cobertura nacional"
        >
          <defs>
            <linearGradient id="mx-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.06" />
            </linearGradient>
            <linearGradient id="mx-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.45" />
            </linearGradient>
            <radialGradient id="cdmx-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path d={mainland} fill="url(#mx-fill)" />
          <path d={baja} fill="url(#mx-fill)" />

          <g fill="none" stroke="url(#mx-stroke)" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
            <path d={mainland} />
            <path d={baja} />
          </g>

          <g stroke="#4F46E5" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="4 6" opacity="0.35">
            {cities.filter((c) => !c.primary).map((c) => (
              <line key={c.name} x1={cdmx.x} y1={cdmx.y} x2={c.x} y2={c.y} />
            ))}
          </g>

          <g>
            {cities.filter((c) => !c.primary).map((c) => (
              <g key={c.name}>
                <circle cx={c.x} cy={c.y} r="8" fill="#4F46E5" opacity="0.08" />
                <circle cx={c.x} cy={c.y} r="3" fill="#4F46E5" opacity="0.55" />
                <circle cx={c.x} cy={c.y} r="1.2" fill="#ffffff" />
                <text
                  x={c.x}
                  y={c.y - 14}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="500"
                  fontFamily="Geist, -apple-system, sans-serif"
                  fill="rgba(10,10,10,0.5)"
                  letterSpacing="0.3"
                >
                  {c.name}
                </text>
              </g>
            ))}
          </g>

          <g>
            <circle cx={cdmx.x} cy={cdmx.y} r="45" fill="url(#cdmx-glow)" />
            <circle cx={cdmx.x} cy={cdmx.y} r="18" fill="none" stroke="#4F46E5" strokeWidth="1.4" className="mx-pulse" />
            <circle cx={cdmx.x} cy={cdmx.y} r="18" fill="none" stroke="#4F46E5" strokeWidth="1.4" className="mx-pulse delay-1" />
            <circle cx={cdmx.x} cy={cdmx.y} r="18" fill="none" stroke="#4F46E5" strokeWidth="1.4" className="mx-pulse delay-2" />
            <circle cx={cdmx.x} cy={cdmx.y} r="13" fill="rgba(79,70,229,0.14)" />
            <circle cx={cdmx.x} cy={cdmx.y} r="7" fill="#4F46E5" />
            <circle cx={cdmx.x} cy={cdmx.y} r="3" fill="#ffffff" />
            <g>
              <rect x={cdmx.x - 44} y={cdmx.y + 18} width="88" height="26" rx="13" fill="#0a0a0a" />
              <text
                x={cdmx.x}
                y={cdmx.y + 35}
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fontFamily="Geist, -apple-system, sans-serif"
                fill="#ffffff"
                letterSpacing="0.5"
              >
                CDMX · Sede
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

// ─── 10 · CTA FINAL ────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="cta" className="relative isolate overflow-hidden bg-onyx text-papel">
      <div className="aurora aurora-deep inset-0 opacity-60" aria-hidden />
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-20" />

      <div className="section-pad relative z-10 mx-auto max-w-[1180px]">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}>
            <AntuarioMark className="mx-auto h-10 w-auto text-papel sm:h-14" />
          </motion.div>

          <motion.h2
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="display mt-10 max-w-[16ch] text-[42px] text-papel sm:text-[68px] lg:text-[88px]"
          >
            ¿Hay un proyecto{' '}
            <span className="multi-grad-bright">sobre la mesa?</span>
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="lead-type mt-7 max-w-[44ch] text-[16px] !text-papel/65 sm:text-[19px]"
          >
            Platícanos sobre él — aunque sea solo una dirección general.
            Nosotros construimos la propuesta.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-inv"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Cuéntanos tu proyecto
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-dark"
            >
              Agendar videollamada
            </a>
          </motion.div>

          <motion.p
            custom={4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="mt-5 text-[12px] text-papel/40"
          >
            Sin costo · Sin compromiso
          </motion.p>

          <motion.div
            custom={5}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="mt-12 flex items-center gap-4"
          >
            <span className="spectrum-bar" style={{ width: 96 }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer minimal ────────────────────────────────────────────────────────
function FooterMin() {
  return (
    <footer className="relative bg-onyx text-papel/55">
      <div className="hair-w" />
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-12">
        <div className="flex items-center gap-3">
          <AntuarioLogotype className="h-[22px] w-auto" dark />
          <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.22em] text-papel/35">
            Vol. 01 · MMXXVI
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px]">
          <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-papel">
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-papel"
          >
            {siteConfig.phone}
          </a>
          <span>CDMX · México</span>
          <span>© {new Date().getFullYear()} Antuario</span>
        </div>
      </div>
    </footer>
  )
}
