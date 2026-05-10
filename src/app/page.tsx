'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

// ─── Logo Antuario (isotipo) ───────────────────────────────────────────────
function AntuarioMark({ className = '', dark = false, style }: { className?: string; dark?: boolean; style?: React.CSSProperties }) {
  const fill = dark ? '#fafafa' : '#0a0a0a'
  return (
    <svg
      viewBox="0 0 1200 787.5"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Antuario"
    >
      <path
        d="M1049.59 619.8c-85.805-121.912-170.613-244.49-258.074-365.084-51.02-70.235-123.575-108.332-210.371-115.29-186.52-15.238-337.918 141.794-316.715 326.657 20.207 173.266 198.441 292.531 368.062 246.48 47.375-12.921 87.465-38.43 126.887-66.257 17.558-12.59 35.117-24.516 53.34-37.106a4608 4608 0 0 0-43.403-61.62c-14.242-20.208-28.488-40.087-43.066-60.626-30.148 20.871-58.64 42.406-88.457 61.29-52.672 33.128-107.336 34.452-159.352.331-50.687-33.46-71.89-82.16-62.28-142.125 8.944-55.988 53.007-101.375 108.995-114.297 56.32-12.922 114.957 8.282 148.418 55.657 55.989 78.515 111.317 157.695 166.64 236.543 13.583 19.546 30.15 35.78 51.02 48.039 50.356 29.484 119.926 26.504 161.34-6.957-.996-2.32-1.656-3.977-2.984-5.633z"
        fill={fill}
      />
      <circle cx="243" cy="124" r="96" fill={fill} />
    </svg>
  )
}

// ─── Logo Antuario (logotipo completo) ─────────────────────────────────────
function AntuarioLogotype({ className = '', dark = false, style }: { className?: string; dark?: boolean; style?: React.CSSProperties }) {
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
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

// ─── Animation variants ────────────────────────────────────────────────────
const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ─── Section wrapper ───────────────────────────────────────────────────────
function Section({
  id,
  dark = false,
  children,
  innerRef,
}: {
  id: string
  dark?: boolean
  children: React.ReactNode
  innerRef?: (el: HTMLElement | null) => void
}) {
  return (
    <section
      id={id}
      ref={(el) => innerRef?.(el)}
      data-section={id}
      className={`swipe-section section-pad ${dark ? 'bg-ink-900 text-white' : 'bg-background text-ink'}`}
    >
      {children}
    </section>
  )
}

// ─── SECTION DATA ──────────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'hero', label: 'Inicio' },
  { id: 'agencia', label: 'La agencia' },
  { id: 'capacidades', label: 'Servicios' },
  { id: 'diferenciadores', label: 'Diferenciadores' },
  { id: 'datos', label: 'Datos' },
  { id: 'casos', label: 'Casos' },
  { id: 'accountability', label: 'Accountability' },
  { id: 'ia', label: 'IA' },
  { id: 'cobertura', label: 'Cobertura' },
  { id: 'cta', label: 'Contacto' },
] as const

const DARK_SECTIONS = ['hero', 'diferenciadores', 'accountability', 'ia', 'cta']

// ─── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  const shellRef = useRef<HTMLDivElement | null>(null)
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())
  const [active, setActive] = useState<string>('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const isDark = DARK_SECTIONS.includes(active)

  useEffect(() => {
    const shell = shellRef.current
    if (!shell) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
            const id = (entry.target as HTMLElement).dataset.section
            if (id) setActive(id)
          }
        })
      },
      { root: shell, threshold: [0.55, 0.75] }
    )
    sectionRefs.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goTo = (id: string) => {
    const el = sectionRefs.current.get(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el)
    else sectionRefs.current.delete(id)
  }

  return (
    <>
      {/* Top brand bar — logotype on hero/cta, isotipo on others */}
      {(() => {
        const showLogotype = active === 'hero' || active === 'cta'
        // Logotipo móvil más pequeño (h=26 móvil, h=36 desktop), isotipo igual proporción
        return (
          <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 pt-5 sm:px-10 sm:pt-7">
            <button
              onClick={() => goTo('hero')}
              className={`pointer-events-auto relative flex h-9 items-center overflow-visible sm:h-10 ${showLogotype
                ? 'w-[132px] sm:w-[200px]'
                : 'w-[32px] sm:w-[46px]'
                }`}
              style={{
                transition: 'width 0.7s cubic-bezier(.4,0,.2,1)',
              }}
              aria-label="Antuario · Ir al inicio"
            >
              {/* Logotype — visible on hero & cta · más chico en móvil */}
              <AntuarioLogotype
                className="absolute left-0 top-1/2 h-[22px] w-auto -translate-y-1/2 sm:h-[34px]"
                dark={isDark}
                style={{
                  opacity: showLogotype ? 1 : 0,
                  transform: showLogotype ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.9)',
                  transition: 'opacity 0.7s ease, transform 0.7s ease',
                  pointerEvents: showLogotype ? 'auto' : 'none',
                }}
              />
              {/* Isotipo — visible on all other slides */}
              <AntuarioMark
                className="absolute left-0 top-1/2 h-[28px] w-auto -translate-y-1/2 sm:h-[34px]"
                dark={isDark}
                style={{
                  opacity: showLogotype ? 0 : 1,
                  transform: showLogotype ? 'translateY(-50%) scale(1.1)' : 'translateY(-50%) scale(1)',
                  transition: 'opacity 0.7s ease, transform 0.7s ease',
                  pointerEvents: showLogotype ? 'none' : 'auto',
                }}
              />
            </button>

            <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden rounded-full border px-4 py-2 text-[12px] font-medium transition-all duration-500 sm:inline-flex ${isDark
                  ? 'border-white/15 bg-white/5 text-white/85 hover:bg-white/10'
                  : 'border-ink-900/10 bg-white text-ink-800 hover:border-ink-900/25'
                  }`}
              >
                Cuéntanos tu proyecto →
              </a>

              {/* Menú hamburguesa — abre overlay con todas las páginas */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menú"
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-500 sm:h-10 sm:w-10 ${isDark
                  ? 'border-white/15 bg-white/5 text-white/85 hover:bg-white/10'
                  : 'border-ink-900/10 bg-white text-ink-800 hover:border-ink-900/25'
                  }`}
              >
                <Menu className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              </button>
            </div>
          </div>
        )
      })()}

      {/* ─── Overlay menu — todas las páginas ─────────────────────────────── */}
      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Progress dot rail */}
      <nav aria-label="Progreso" className="dot-rail">
        {SECTIONS.map((s, i) => {
          const activeNow = active === s.id
          return (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              aria-label={`Ir a ${s.label}`}
              className="group relative flex items-center"
            >
              <span
                className={`block rounded-full transition-all duration-500 ${activeNow
                  ? isDark
                    ? 'h-6 w-1.5 bg-white'
                    : 'h-6 w-1.5 bg-ink-900'
                  : isDark
                    ? 'h-1.5 w-1.5 bg-white/30 group-hover:bg-white/60'
                    : 'h-1.5 w-1.5 bg-ink-300 group-hover:bg-ink-500'
                  }`}
              />
              <span
                className={`pointer-events-none absolute right-6 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isDark ? 'bg-white/10 text-white' : 'bg-ink-900 text-white'
                  }`}
              >
                {String(i + 1).padStart(2, '0')} · {s.label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Swipe shell */}
      <div ref={shellRef} className="swipe-shell">
        <HeroSection innerRef={registerRef('hero')} onNext={() => goTo('agencia')} />
        <AgencySection innerRef={registerRef('agencia')} />
        <CapabilitiesSection innerRef={registerRef('capacidades')} />
        <DifferentiatorsSection innerRef={registerRef('diferenciadores')} />
        <DataSection innerRef={registerRef('datos')} />
        <CasesSection innerRef={registerRef('casos')} />
        <AccountabilitySection innerRef={registerRef('accountability')} />
        <AISection innerRef={registerRef('ia')} />
        <CoverageSection innerRef={registerRef('cobertura')} />
        <CTASection innerRef={registerRef('cta')} />
      </div>
    </>
  )
}

// ─── Nav Overlay — drawer fullscreen con todas las páginas ────────────────
function NavOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Cerrar con ESC + bloquear scroll body
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[80] bg-ink-900/95 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Aurora sutil al fondo */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="ai-aurora opacity-30" />
          </div>

          <motion.div
            initial={{ y: -8 }}
            animate={{ y: 0 }}
            exit={{ y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative mx-auto flex h-full max-w-6xl flex-col px-6 py-7 sm:px-10 sm:py-10"
          >
            {/* Top — close */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Antuario · Menú
              </span>
              <button
                onClick={onClose}
                aria-label="Cerrar menú"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition-colors hover:bg-white/10 sm:h-10 sm:w-10"
              >
                <X className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
              </button>
            </div>

            {/* Contenido del menú */}
            <div className="mt-8 grid flex-1 gap-10 overflow-y-auto pb-10 sm:mt-12 lg:grid-cols-12 lg:gap-16">
              {/* Páginas principales */}
              <nav className="lg:col-span-7">
                <span className="eyebrow-light !text-white/40">Páginas</span>
                <ul className="mt-5 space-y-1.5 sm:space-y-2">
                  {siteConfig.nav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.04, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center gap-3 py-2 text-[28px] font-bold tracking-tight text-white/85 transition-colors hover:text-white sm:text-[44px]"
                      >
                        <span className="font-mono text-[10px] tracking-widest text-white/30 sm:text-[11px]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400 transition-all duration-500 group-hover:w-full" />
                        </span>
                        <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:h-5 sm:w-5" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Servicios — sub-páginas */}
              <div className="lg:col-span-5">
                <span className="eyebrow-light !text-white/40">Servicios</span>
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
                        className="group flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        <div className="min-w-0">
                          <p className="text-[13px] font-semibold text-white sm:text-[14px]">
                            {s.label}
                          </p>
                          <p className="mt-0.5 truncate text-[11px] text-white/45">{s.short}</p>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Footer mini — contacto */}
                <div className="mt-7 border-t border-white/8 pt-5">
                  <span className="eyebrow-light !text-white/40">Contacto</span>
                  <div className="mt-3 space-y-1.5 text-[12px] text-white/55 sm:text-[13px]">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="block transition-colors hover:text-white"
                    >
                      {siteConfig.email}
                    </a>
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-colors hover:text-white"
                    >
                      {siteConfig.phone} · WhatsApp
                    </a>
                  </div>

                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12.5px] font-semibold text-ink-900 transition-transform duration-300 hover:scale-[1.02] sm:text-[13px]"
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
function HeroSection({ innerRef, onNext }: { innerRef: (el: HTMLElement | null) => void; onNext: () => void }) {
  // 6 servicios (en lugar de 7) para evitar wrap excesivo en móvil
  const services = [
    'Redes Sociales',
    'Performance Ads',
    'SEO',
    'Desarrollo Web',
    'Software',
    'Agentes IA',
  ]

  return (
    <Section id="hero" dark innerRef={innerRef}>
      {/* Fondo dinámico — blobs animados + grid + veil */}
      <div className="dyn-bg-dark" aria-hidden>
        <span className="dyn-blob dyn-blob-a" />
        <span className="dyn-blob dyn-blob-b" />
        <span className="dyn-blob dyn-blob-c" />
      </div>
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 z-[1] opacity-25" />
      <div className="dyn-veil z-[1]" aria-hidden />

      <div className="relative z-[2] mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm sm:mb-7 sm:gap-2.5 sm:px-3.5 sm:py-1.5"
        >
          <span className="h-1.5 w-1.5 animate-subtle-pulse rounded-full bg-white/80" />
          <span className="eyebrow-light !text-[10px] !text-white/65 sm:!text-[11px]">
            Agencia de Marketing Digital
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="display text-balance text-[34px] leading-[1.08] text-white sm:text-[52px] lg:text-[68px]"
        >
          Soluciones de{' '}
          <span className="gradient-anim-bright">Marketing Digital</span>{' '}
          a la medida.
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mx-auto mt-5 max-w-xl text-balance text-[12.5px] leading-relaxed text-white/60 sm:mt-7 sm:text-[16px]"
        >
          Marketing, sistemas e IA — bajo una sola dirección estratégica, con accountability total
          sobre cada resultado.
        </motion.p>

        {/* Servicios chips */}
        <motion.ul
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mx-auto mt-6 flex max-w-md flex-wrap items-center justify-center gap-x-1.5 gap-y-2 sm:mt-9 sm:max-w-2xl sm:gap-x-2 sm:gap-y-2.5"
        >
          {services.map((s, i) => (
            <li key={s} className="flex items-center gap-1.5 sm:gap-2">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-white/20" />}
              <span className="text-[11px] font-medium text-white/75 sm:text-[13px]">{s}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13px] font-semibold text-ink-900 transition-transform duration-300 hover:scale-[1.02] sm:px-6 sm:py-3.5 sm:text-[14px]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Cuéntanos tu proyecto
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <span className="text-[11px] text-white/40 sm:text-[12px]">Sin costo · Sin compromiso</span>
        </motion.div>
      </div>

      {/* Indicador de continuidad — solo flecha, sin texto */}
      <button
        onClick={onNext}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-white sm:bottom-8"
        aria-label="Siguiente sección"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>
      </button>
    </Section>
  )
}

// ─── 02 · QUIÉNES SOMOS ────────────────────────────────────────────────────
function AgencySection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  return (
    <Section id="agencia" innerRef={innerRef}>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Copy left */}
          <div className="lg:col-span-7">
            <motion.span
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="eyebrow"
            >
              Quiénes somos
            </motion.span>

            <motion.h2
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="display mt-4 text-[36px] text-ink-900 sm:mt-6 sm:text-[52px] lg:text-[64px]"
            >
              Más que <br className="sm:hidden" />
              <span className="gradient-anim">una agencia.</span>
            </motion.h2>

            <motion.p
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="mt-5 max-w-xl text-[14px] font-medium leading-snug text-ink-800 sm:mt-8 sm:text-[20px]"
            >
              Capacidades estratégicas, tecnológicas y creativas que van mucho más allá de lo que una agencia
              tradicional ofrece.
            </motion.p>

            <motion.p
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="mt-3 max-w-lg text-[12px] leading-relaxed text-ink-500 sm:mt-5 sm:text-[14.5px]"
            >
              Operamos como partner estratégico: nos involucramos a fondo, diseñamos soluciones a la medida
              y respondemos por los resultados — no por las tareas.
            </motion.p>
          </div>

          {/* Animated isotipo right */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="relative flex items-center justify-center lg:col-span-5"
          >
            <AgencyConstellation />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

// ─── Agency Constellation — animación premium del isotipo ─────────────────
// Muestra el isotipo de Antuario como núcleo de un sistema:
// · Halo iridiscente animado (gradiente de marca)
// · Anillos concéntricos (sólido, dasheado, conic gradient sweep)
// · Etiquetas orbitando (las disciplinas que cubre la agencia)
// · Pulso periódico desde el centro hacia afuera
function AgencyConstellation() {
  // Disciplinas que orbitan alrededor del isotipo
  const orbits = [
    { label: 'Marketing', color: '#6366f1', radius: 132, angle: -90, dur: 32 },
    { label: 'Data', color: '#06b6d4', radius: 132, angle: -30, dur: 32 },
    { label: 'IA', color: '#8b5cf6', radius: 132, angle: 30, dur: 32 },
    { label: 'Diseño', color: '#ec4899', radius: 168, angle: 90, dur: 44 },
    { label: 'Web', color: '#a855f7', radius: 168, angle: 170, dur: 44 },
    { label: 'Software', color: '#10b981', radius: 168, angle: 250, dur: 44 },
  ]

  return (
    <div className="agency-stage relative flex h-[320px] w-[320px] items-center justify-center sm:h-[420px] sm:w-[420px]">
      {/* Halo iridiscente de fondo */}
      <span className="agency-halo absolute inset-6 rounded-full sm:inset-10" aria-hidden />

      {/* Conic-gradient ring (efecto "brújula") */}
      <span className="agency-conic absolute h-[210px] w-[210px] rounded-full sm:h-[270px] sm:w-[270px]" aria-hidden />

      {/* Anillo dasheado interior — gira lento al revés */}
      <svg
        className="agency-ring-dashed absolute h-[180px] w-[180px] sm:h-[230px] sm:w-[230px]"
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

      {/* Anillo exterior fino (solid) */}
      <span
        className="absolute h-[260px] w-[260px] rounded-full border border-ink-900/8 sm:h-[336px] sm:w-[336px]"
        aria-hidden
      />

      {/* Pulsos concéntricos desde el centro */}
      <span className="agency-pulse absolute h-16 w-16 rounded-full" aria-hidden />
      <span className="agency-pulse delay-1 absolute h-16 w-16 rounded-full" aria-hidden />
      <span className="agency-pulse delay-2 absolute h-16 w-16 rounded-full" aria-hidden />

      {/* Etiquetas orbitando — cada una con su capa de rotación independiente */}
      {orbits.map((o) => (
        <span
          key={o.label}
          className="agency-orbit-layer pointer-events-none absolute inset-0"
          style={
            {
              animationDuration: `${o.dur}s`,
              // ángulo inicial — un offset estático antes de empezar a girar
              ['--start-angle' as string]: `${o.angle}deg`,
              ['--rad' as string]: `${o.radius}px`,
            } as React.CSSProperties
          }
          aria-hidden
        >
          {/* Posicionamos la etiqueta en el radio correspondiente desde el centro */}
          <span
            className="agency-orbit-pill absolute left-1/2 top-1/2 flex items-center gap-1.5 rounded-full border border-ink-900/8 bg-white/90 px-2 py-1 shadow-[0_2px_10px_rgba(10,10,10,0.06)] backdrop-blur-sm"
            style={{
              animationDuration: `${o.dur}s`,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: o.color, boxShadow: `0 0 8px ${o.color}` }}
            />
            <span className="text-[10px] font-semibold tracking-tight text-ink-800 sm:text-[11px]">
              {o.label}
            </span>
          </span>
        </span>
      ))}

      {/* Núcleo: isotipo con respiración + glow propio */}
      <div className="relative z-10 flex items-center justify-center">
        <span
          className="agency-core-glow pointer-events-none absolute h-24 w-24 rounded-full sm:h-32 sm:w-32"
          aria-hidden
        />
        <div className="agency-core-breath relative">
          <AntuarioMark className="h-[88px] w-auto text-ink-900 sm:h-[120px]" />
        </div>
      </div>
    </div>
  )
}

// ─── 03 · CAPACIDADES — TABS DE SERVICIOS ─────────────────────────────────
// Diseño limpio con pestañas: lista vertical (desktop) o pills horizontales
// (móvil) + panel grande con el detalle del servicio seleccionado.
// Permite escalar a N servicios sin saturar la pantalla.
function CapabilitiesSection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
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
      items: ['Google, Meta y TikTok Ads', 'ROAS, CPA y CPL reales', 'Testing creativo continuo', 'Reportes con accountability'],
      accent: '#6366f1',
    },
    {
      n: '02',
      tag: 'Orgánico',
      title: 'SEO',
      headline: 'Crecer en búsquedas, sin pagar por cada click.',
      description:
        'Auditoría técnica, estrategia de contenidos y autoridad de dominio para posicionarte donde tus clientes te buscan.',
      items: ['Auditoría técnica + competencia', 'Estrategia de keywords', 'Contenido y linkbuilding', 'Reportes mensuales de posiciones'],
      accent: '#10b981',
    },
    {
      n: '03',
      tag: 'Contenido',
      title: 'Redes Sociales',
      headline: 'Estrategia, contenido y producción bajo el mismo techo.',
      description:
        'Comunicamos tu marca con consistencia: planeamos, producimos y publicamos contenido que conecta y convierte.',
      items: ['Calendarios estratégicos', 'Producción foto y video', 'Edición y post profesional', 'Community y rendimiento'],
      accent: '#f59e0b',
    },
    {
      n: '04',
      tag: 'Diseño',
      title: 'Diseño Creativo',
      headline: 'Identidad visual que diferencia a tu marca.',
      description:
        'Branding, dirección de arte y sistemas visuales escalables — el lenguaje gráfico que sostiene toda tu comunicación.',
      items: ['Branding e identidad', 'Dirección de arte', 'Sistemas visuales', 'Piezas para campañas'],
      accent: '#ec4899',
    },
    {
      n: '05',
      tag: 'Web',
      title: 'Desarrollo Web',
      headline: 'Sitios y plataformas pensados para convertir.',
      description:
        'Construimos webs rápidas, optimizadas para SEO y enfocadas en la experiencia del usuario y el cierre de venta.',
      items: ['Sitios corporativos y landings', 'Ecommerce y catálogos', 'UX/UI orientado a conversión', 'Performance + analytics'],
      accent: '#a855f7',
    },
    {
      n: '06',
      tag: 'Tecnología',
      title: 'Software a la medida',
      headline: 'Sistemas que aceleran tu operación.',
      description:
        'CRM, automatizaciones e integraciones para que el equipo opere con menos fricción y más visibilidad.',
      items: ['CRM y plataformas internas', 'Integraciones API', 'Automatización de procesos', 'Dashboards y BI a medida'],
      accent: '#06b6d4',
    },
    {
      n: '07',
      tag: 'Vanguardia',
      title: 'Inteligencia Artificial',
      headline: 'IA aplicada — operación, marketing y producto.',
      description:
        'No hablamos de IA, la implementamos: agentes, LLMs y automatización inteligente para escalar sin escalar costos.',
      items: ['Agentes WhatsApp y voz', 'LLMs custom para tu negocio', 'IA generativa de contenido', 'Optimización de campañas con IA'],
      accent: '#8b5cf6',
    },
  ]

  const [activeIdx, setActiveIdx] = useState(0)
  const active = caps[activeIdx]

  return (
    <Section id="capacidades" innerRef={innerRef}>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mb-4 sm:mb-7"
        >
          <span className="eyebrow">Servicios</span>
          <h2 className="display mt-2 text-[28px] text-ink-900 sm:mt-3 sm:text-[42px] lg:text-[48px]">
            Una sola dirección, <br className="sm:hidden" />
            <span className="gradient-anim">muchas capacidades.</span>
          </h2>
        </motion.div>

        {/* MOBILE — tabs en scroll horizontal */}
        <div className="lg:hidden">
          <div className="no-scrollbar -mx-5 mb-3 overflow-x-auto px-5">
            <div className="flex w-max gap-1.5">
              {caps.map((c, i) => {
                const isActive = i === activeIdx
                return (
                  <button
                    key={c.title}
                    onClick={() => setActiveIdx(i)}
                    className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-[11.5px] font-semibold transition-all duration-300 ${isActive
                      ? 'border-ink-900 bg-ink-900 text-white'
                      : 'border-ink-900/10 bg-white text-ink-500 hover:border-ink-900/30'
                      }`}
                    style={isActive ? { backgroundColor: c.accent, borderColor: c.accent, color: '#fff' } : {}}
                  >
                    {c.title}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Panel móvil */}
          <CapabilityPanel cap={active} mobile />
        </div>

        {/* DESKTOP — tabs verticales + panel */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-12">
          {/* Lista de pestañas */}
          <ul className="lg:col-span-5 lg:border-l lg:border-ink-900/8">
            {caps.map((c, i) => {
              const isActive = i === activeIdx
              return (
                <li key={c.title}>
                  <button
                    onClick={() => setActiveIdx(i)}
                    onMouseEnter={() => setActiveIdx(i)}
                    className="group relative flex w-full items-center gap-4 py-3 pl-5 pr-3 text-left transition-colors"
                  >
                    {/* Tira de acento activa */}
                    <span
                      aria-hidden
                      className="absolute -left-px top-0 h-full w-[2px] origin-top transition-transform duration-300"
                      style={{
                        background: c.accent,
                        transform: `scaleY(${isActive ? 1 : 0})`,
                      }}
                    />
                    <span
                      className="font-mono text-[10px] tracking-widest transition-colors"
                      style={{ color: isActive ? c.accent : '#a3a3a3' }}
                    >
                      {c.n}
                    </span>
                    <span
                      className={`flex-1 text-[16px] font-semibold tracking-tight transition-colors ${isActive ? 'text-ink-900' : 'text-ink-400 group-hover:text-ink-700'
                        }`}
                    >
                      {c.title}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      style={{ color: c.accent }}
                    />
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Panel desktop */}
          <div className="lg:col-span-7">
            <CapabilityPanel cap={active} />
          </div>
        </div>
      </div>
    </Section>
  )
}

function CapabilityPanel({
  cap,
  mobile = false,
}: {
  cap: { n: string; tag: string; title: string; headline: string; description: string; items: string[]; accent: string }
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
        className={`relative overflow-hidden rounded-2xl border border-ink-900/6 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] ${mobile ? 'p-5' : 'p-7'}`}
      >
        {/* Tira de acento horizontal */}
        <span
          aria-hidden
          className="absolute left-0 right-0 top-0 h-[3px]"
          style={{ background: `linear-gradient(90deg, ${cap.accent}, ${cap.accent}55, transparent)` }}
        />
        {/* Glow sutil de fondo */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20 blur-3xl"
          style={{ background: cap.accent }}
        />

        <div className="relative">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.2em]"
              style={{ color: cap.accent }}
            >
              {cap.tag}
            </span>
            <span className="h-px flex-1 bg-ink-900/8" />
            <span className="font-mono text-[10px] tracking-widest text-ink-300">{cap.n} / 07</span>
          </div>

          <h3 className={`mt-3 font-bold leading-[1.1] tracking-tight text-ink-900 ${mobile ? 'text-[22px]' : 'text-[30px]'}`}>
            {cap.title}
          </h3>
          <p className={`mt-2 font-medium leading-snug text-ink-700 ${mobile ? 'text-[13px]' : 'text-[16px]'}`}>
            {cap.headline}
          </p>
          <p className={`mt-2 leading-relaxed text-ink-500 ${mobile ? 'text-[12px]' : 'text-[13.5px]'}`}>
            {cap.description}
          </p>

          <ul className={`mt-4 grid gap-2 ${mobile ? 'grid-cols-1' : 'grid-cols-2 gap-x-5'}`}>
            {cap.items.map((it) => (
              <li
                key={it}
                className={`flex items-start gap-2 text-ink-700 ${mobile ? 'text-[12px]' : 'text-[13px]'}`}
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

// ─── 03.5 · DIFERENCIADORES ───────────────────────────────────────────────
// Una sola slide con los puntos fuertes que nos distinguen — diseño bento
// dark sobre fondo oscuro para crear un beat visual entre capacidades y datos.
function DifferentiatorsSection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  const items = [
    {
      key: 'accountability',
      title: 'Accountability real',
      text: 'Respondemos por resultados, no por tareas. Cada compromiso tiene un dueño y una métrica.',
      accent: '#6366f1',
    },
    {
      key: 'data',
      title: 'Sistemas de datos',
      text: 'Tableros vivos para que cada decisión esté basada en información — no en intuición.',
      accent: '#06b6d4',
    },
    {
      key: 'vanguard',
      title: 'Vanguardia con IA',
      text: 'Mientras la mayoría apenas la nombra, nosotros la operamos. IA en marketing, operación y producto para soluciones más rápidas y económicas.',
      accent: '#8b5cf6',
    },
    {
      key: 'strategy',
      title: 'Estrategia + estructura',
      text: 'Aportamos visión completa: del posicionamiento al funnel, del producto a la operación. Ordenamos lo que está suelto.',
      accent: '#ec4899',
    },
    {
      key: 'partner',
      title: 'Partner end-to-end',
      text: 'De la estrategia a la optimización. Podemos ejecutar todo o sumarnos a tu equipo donde haga falta.',
      accent: '#10b981',
    },
    {
      key: 'simple',
      title: 'Simplicidad con criterio',
      text: 'No complicamos por complicar. Buscamos la solución más simple que funcione bien — y la ejecutamos con calidad.',
      accent: '#f59e0b',
    },
  ]

  return (
    <Section id="diferenciadores" dark innerRef={innerRef}>
      {/* Fondo sutil */}
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/0 via-transparent to-ink-900/40" />

      <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mb-5 sm:mb-9"
        >
          <span className="eyebrow-light">Diferenciadores</span>
          <h2 className="display mt-2 text-[28px] text-white sm:mt-3 sm:text-[42px] lg:text-[48px]">
            Lo que nos hace <br className="sm:hidden" />
            <span className="gradient-anim-bright">diferentes.</span>
          </h2>
          <p className="mt-3 max-w-xl text-[12.5px] leading-relaxed text-white/55 sm:mt-5 sm:text-[14.5px]">
            Una agencia a la vanguardia, en un mercado donde muchos siguen atorados en la vieja escuela.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3 lg:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.key}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="group relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.025] p-3.5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05] sm:rounded-2xl sm:p-5"
            >
              {/* Glow accent en esquina */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: it.accent }}
              />
              {/* Tira de acento superior */}
              <span
                aria-hidden
                className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-[0.25] transition-transform duration-700 group-hover:scale-x-100"
                style={{ background: it.accent }}
              />

              <div className="relative">
                {/* Dot de color */}
                <span
                  aria-hidden
                  className="mb-2 block h-1.5 w-1.5 rounded-full sm:mb-3"
                  style={{ background: it.accent, boxShadow: `0 0 12px ${it.accent}` }}
                />
                <h3 className="text-[12.5px] font-bold leading-tight tracking-tight text-white sm:text-[16px]">
                  {it.title}
                </h3>
                <p className="mt-1.5 hidden text-[12.5px] leading-relaxed text-white/55 sm:block">
                  {it.text}
                </p>
                <p className="mt-1 text-[10.5px] leading-snug text-white/55 sm:hidden">
                  {it.text.split('.')[0] + '.'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── 04 · DATOS E INFORMACIÓN ──────────────────────────────────────────────
// Layout 5/7: copy + features a la izquierda · imagen real del dashboard a la derecha.
// En móvil el contenido se compacta para entrar en 100vh sin chocar con el brand bar.
function DataSection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  // 4ª feature solo se muestra en desktop para mantener altura contenida en móvil
  const features = [
    { positive: false, text: 'Datos de vanidad sin contexto', mobile: true },
    { positive: true, text: 'Métricas que mueven la marca', mobile: true },
    { positive: true, text: 'Visibilidad en tiempo real', mobile: true },
    { positive: true, text: 'Dashboard propio o software a la medida', mobile: false },
  ]

  return (
    <Section id="datos" innerRef={innerRef}>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <div className="grid items-center gap-5 sm:gap-7 lg:grid-cols-12 lg:gap-10">
          {/* Columna izquierda — copy */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="lg:col-span-5"
          >
            <span className="eyebrow">Datos e información</span>
            <h2 className="display mt-2 text-[32px] text-ink-900 sm:mt-4 sm:text-[42px] lg:text-[48px]">
              Medición estratégica, <br className="hidden sm:block" />
              <span className="gradient-anim">no reportes genéricos.</span>
            </h2>
            <p className="mt-2.5 max-w-md text-[12px] leading-relaxed text-ink-500 sm:mt-5 sm:text-[14.5px]">
              Construimos sistemas de información estratégicos — no PDFs con likes y alcance.
            </p>

            {/* Features con check / cross */}
            <ul className="mt-3.5 space-y-1.5 sm:mt-7 sm:space-y-2.5">
              {features.map((f) => (
                <li
                  key={f.text}
                  className={`items-start gap-2.5 sm:gap-3 ${f.mobile ? 'flex' : 'hidden sm:flex'
                    }`}
                >
                  <span
                    className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full sm:h-[18px] sm:w-[18px] ${f.positive
                      ? 'bg-emerald-500/15 text-emerald-600'
                      : 'bg-ink-900/8 text-ink-400'
                      }`}
                    aria-hidden
                  >
                    {f.positive ? (
                      <svg
                        viewBox="0 0 16 16"
                        className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8.5l3 3 7-7" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 16 16"
                        className="h-2 w-2 sm:h-2.5 sm:w-2.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M4 4l8 8M12 4l-8 8" />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`text-[11.5px] leading-snug sm:text-[13.5px] ${f.positive
                      ? 'font-medium text-ink-800'
                      : 'text-ink-400 line-through decoration-ink-300'
                      }`}
                  >
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna derecha — imagen real del dashboard */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="relative lg:col-span-7"
          >
            <DashboardImage />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

// ─── Antuario Dashboard — captura real con frame premium ──────────────────
function DashboardImage() {
  return (
    <div className="relative">
      {/* Glow de color detrás */}
      <div
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/10 to-emerald-500/10 blur-3xl sm:-inset-10"
        aria-hidden
      />

      {/* Frame estilo browser */}
      <div className="overflow-hidden rounded-xl bg-ink-900 shadow-[0_20px_60px_rgba(0,0,0,0.25),_0_8px_20px_rgba(0,0,0,0.15)] sm:rounded-2xl">
        {/* Top bar */}
        <div className="flex items-center gap-1.5 border-b border-white/5 bg-ink-800/80 px-3 py-2 sm:px-4 sm:py-2.5">
          <span className="h-2 w-2 rounded-full bg-red-500/60 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-amber-500/60 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/60 sm:h-2.5 sm:w-2.5" />
          <span className="ml-2 hidden font-mono text-[10px] text-white/30 sm:inline">
            antuario.app/dashboard
          </span>
          <span className="ml-2 font-mono text-[9.5px] text-white/40 sm:hidden">
            Antuario · Dashboard
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="pulse-live h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/50 sm:text-[10px]">
              Live
            </span>
          </div>
        </div>

        {/* Captura real del dashboard de Visión General de Marketing */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/dashboard-vision-marketing.jpg"
          alt="Antuario Dashboard — Visión General de Marketing con conversiones, inversión, CPA, mix de canales y dependencia publicitaria"
          className="block h-auto w-full select-none"
          loading="lazy"
          draggable={false}
        />
      </div>
    </div>
  )
}

// ─── 05 · CASOS DE ÉXITO ───────────────────────────────────────────────────
// Carrusel infinito auto-scroll con pausa por interacción (hover/touch),
// fade en bordes y posibilidad de scroll manual del usuario.
function CasesSection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
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
  // Duplicamos para loop visual continuo
  const loop = [...cases, ...cases]

  const trackRef = useRef<HTMLDivElement>(null)

  // Auto-scroll suave; se pausa cuando el usuario interactúa (touch / mouse / wheel)
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
        track.scrollLeft += 0.045 * dt // ~45 px/s
        const half = track.scrollWidth / 2
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half
        }
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
    <Section id="casos" innerRef={innerRef}>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="text-center sm:text-left"
        >
          <span className="eyebrow">Casos de éxito</span>
          <h2 className="display mt-3 text-[30px] text-ink-900 sm:mt-4 sm:text-[42px] lg:text-[48px]">
            Nuestro trabajo <br className="sm:hidden" />
            <span className="gradient-anim">habla por sí mismo.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-balance text-[12.5px] leading-relaxed text-ink-500 sm:mx-0 sm:mt-4 sm:text-[14px]">
            Marcas que confían en Antuario para su marketing digital, desarrollo web y
            posicionamiento.
          </p>
        </motion.div>

        {/* Carrusel — auto-scroll + drag manual + fade lateral
            Sale del padding lateral (-mx) para sangrado completo,
            y los gradientes mask + fades suaves evitan el corte feo en bordes. */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="relative -mx-[clamp(20px,5.5vw,120px)] mt-5 sm:mt-7 lg:-mx-[clamp(56px,7vw,140px)]"
        >
          <div
            ref={trackRef}
            className="marquee-mask no-scrollbar overflow-x-auto px-[clamp(20px,5.5vw,120px)] lg:px-[clamp(56px,7vw,140px)]"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex w-max gap-3 pb-1 sm:gap-4">
              {loop.map((c, i) => (
                <article
                  key={`${c.name}-${i}`}
                  className="group relative aspect-[4/5] w-[170px] flex-shrink-0 select-none overflow-hidden rounded-2xl bg-ink-100 sm:w-[210px] lg:w-[230px]"
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
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-3 sm:p-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/65 sm:text-[10px]">
                      {c.tag}
                    </span>
                    <h3 className="mt-0.5 text-[14px] font-bold tracking-tight text-white sm:text-[17px]">
                      {c.name}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

// ─── 06 · ACCOUNTABILITY ───────────────────────────────────────────────────
function AccountabilitySection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  // En móvil mostramos los primeros 4 ítems; en desktop+ los 6
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
    <Section id="accountability" dark innerRef={innerRef}>
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <span className="eyebrow-light">Accountability</span>
          <h2 className="display mt-3 text-[34px] text-white sm:mt-4 sm:text-[52px]">
            Resultados concretos. <br />
            <span className="gradient-anim-bright">Responsabilidad total.</span>
          </h2>
        </motion.div>

        <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-2">
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 sm:p-6"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
              Otra agencia
            </span>
            <ul className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
              {them.map((t, i) => (
                <li
                  key={t}
                  className={`items-start gap-2.5 text-[12px] text-white/45 line-through decoration-white/20 sm:gap-3 sm:text-[13px] ${i >= 4 ? 'hidden sm:flex' : 'flex'
                    }`}
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-white/20" />
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
            variants={fade}
            className="rounded-2xl border border-white/15 bg-white p-4 text-ink-900 sm:p-6"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-400 sm:text-[10px]">
              Antuario
            </span>
            <ul className="mt-3 space-y-2 sm:mt-5 sm:space-y-3">
              {us.map((t, i) => (
                <li
                  key={t}
                  className={`items-start gap-2.5 text-[12px] font-medium text-ink-800 sm:gap-3 sm:text-[13.5px] ${i >= 4 ? 'hidden sm:flex' : 'flex'
                    }`}
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-900" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

// ─── 07 · INTELIGENCIA ARTIFICIAL ──────────────────────────────────────────
function AISection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  // En móvil mostramos un texto corto; en desktop el descriptivo completo
  const items = [
    {
      title: 'Agentes WhatsApp',
      short: 'Atienden 24/7.',
      text: 'Atienden, califican y dan seguimiento las 24 horas.',
    },
    {
      title: 'Agentes de voz',
      short: 'Llamadas con IA.',
      text: 'Confirman citas, califican prospectos y responden FAQs.',
    },
    {
      title: 'Automatización',
      short: 'Procesos comerciales.',
      text: 'Seguimientos, clasificación de leads, asignación de tareas.',
    },
    {
      title: 'IA en campañas',
      short: 'Puja y segmentación.',
      text: 'Optimización de puja, segmentación predictiva, creatividades.',
    },
    {
      title: 'LLMs a la medida',
      short: 'Asistentes y sistemas.',
      text: 'Asistentes internos y sistemas autónomos.',
    },
    {
      title: 'IA generativa',
      short: 'Imagen, video, 3D.',
      text: 'Imágenes, video, animaciones 3D, contenido a escala.',
    },
  ]

  return (
    <Section id="ia" dark innerRef={innerRef}>
      {/* Apple Intelligence aurora */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ai-aurora" />
      </div>
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/70" />

      <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="text-center sm:text-left"
        >
          <div className="flex items-center justify-center gap-2.5 sm:justify-start sm:gap-3">
            <span className="relative inline-flex h-3 w-3 items-center justify-center">
              <span className="ai-orb absolute inset-0" />
              <span className="relative h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="eyebrow-light">Inteligencia Artificial</span>
          </div>
          <h2 className="display mt-3 text-balance text-[32px] text-white sm:mt-4 sm:text-[44px] lg:text-[52px]">
            No hablamos de IA.{' '}
            <span className="gradient-anim-bright">La implementamos.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-[12px] leading-relaxed text-white/65 sm:mx-0 sm:mt-6 sm:text-[14.5px]">
            Mientras la mayoría apenas la conoce como tendencia, nosotros la operamos en proyectos reales.
          </p>
        </motion.div>

        <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md sm:mt-9 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="group relative bg-ink-900/80 p-3 backdrop-blur-md transition-colors duration-300 hover:bg-ink-800/80 sm:p-6"
            >
              <h3 className="text-[12.5px] font-bold leading-tight tracking-tight text-white sm:text-[15px]">
                {it.title}
              </h3>
              {/* Versión corta en móvil */}
              <p className="mt-1 text-[10.5px] leading-snug text-white/60 sm:hidden">{it.short}</p>
              {/* Texto completo en desktop+ */}
              <p className="mt-2.5 hidden text-[13px] leading-relaxed text-white/60 sm:block">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── 08 · COBERTURA / CDMX ─────────────────────────────────────────────────
// Mapa estilizado de México con CDMX destacado y cobertura nacional.
function CoverageSection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  return (
    <Section id="cobertura" innerRef={innerRef}>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <div className="grid items-center gap-7 lg:grid-cols-12 lg:gap-12">
          {/* Copy a la izquierda */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="lg:col-span-5"
          >
            <span className="eyebrow">Ubicación · Cobertura</span>
            <h2 className="display mt-3 text-[34px] text-ink-900 sm:mt-4 sm:text-[44px] lg:text-[52px]">
              Sede en CDMX, <br className="sm:hidden" />
              <span className="gradient-anim">cobertura nacional.</span>
            </h2>
            <p className="mt-3 max-w-md text-[12.5px] leading-relaxed text-ink-500 sm:mt-5 sm:text-[14.5px]">
              Trabajamos con marcas en todo México. Desde nuestra base en la Ciudad de México operamos
              proyectos en cualquier estado del país, de forma remota o presencial cuando se requiera.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-3">
              {[
                { label: 'Sede', value: 'CDMX' },
                { label: 'Cobertura', value: 'Nacional' },
                { label: 'Modalidad', value: 'Remoto + presencial' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-line bg-paper p-3 sm:p-4"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-400 sm:text-[10px]">
                    {s.label}
                  </span>
                  <p className="mt-1 text-[12.5px] font-bold leading-tight tracking-tight text-ink-900 sm:text-[14px]">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mapa a la derecha */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="lg:col-span-7"
          >
            <MexicoMap />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

// ─── Mapa profesional de México ────────────────────────────────────────────
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

  // More detailed & smooth Mexico path
  const mainland = 'M 88 8 C 120 10 200 18 280 28 C 360 38 450 80 530 135 C 590 175 630 210 660 235 C 670 280 660 320 650 355 C 665 395 690 430 715 455 C 740 470 770 482 800 475 C 830 468 860 448 885 425 C 888 400 890 380 920 372 C 945 370 970 378 990 385 C 998 395 1000 405 995 420 C 975 448 955 468 930 485 C 910 495 885 505 860 510 C 845 530 838 555 835 580 C 835 592 832 598 825 598 C 790 585 750 565 720 552 C 680 535 640 525 600 518 C 560 510 530 500 505 488 C 480 475 458 460 440 445 C 425 428 415 408 405 390 C 395 370 385 348 370 322 C 350 290 325 262 300 238 C 275 215 250 190 230 165 C 210 140 185 105 165 70 C 150 48 138 30 128 20 Z'
  const baja = 'M 42 10 C 50 15 60 28 72 48 C 90 80 110 130 130 180 C 150 220 175 255 200 280 C 225 300 250 315 270 325 C 265 310 255 290 248 270 C 240 250 232 228 225 205 C 215 175 205 148 192 120 C 178 90 160 60 140 38 C 120 20 100 10 85 8 Z'

  return (
    <div className="relative mx-auto max-w-[520px] lg:max-w-none">
      {/* Premium glow */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/12 via-violet-500/8 to-cyan-500/10 blur-[60px] sm:-inset-10"
        aria-hidden
      />

      {/* Card container */}
      <div className="overflow-hidden rounded-2xl border border-ink-900/6 bg-white/70 p-4 shadow-[0_16px_48px_rgba(0,0,0,0.08),_0_4px_12px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:rounded-3xl sm:p-6">
        <svg
          viewBox="0 0 1020 620"
          className="h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Mapa de México con cobertura nacional"
        >
          <defs>
            <linearGradient id="mx-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.07" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.07" />
            </linearGradient>
            <linearGradient id="mx-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
            </linearGradient>
            <filter id="city-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="cdmx-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Country fill */}
          <path d={mainland} fill="url(#mx-fill)" />
          <path d={baja} fill="url(#mx-fill)" />

          {/* Country border — gradient stroke */}
          <g fill="none" stroke="url(#mx-stroke)" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
            <path d={mainland} />
            <path d={baja} />
          </g>

          {/* Connection lines from CDMX */}
          <g stroke="#6366f1" strokeWidth="0.8" strokeLinecap="round" strokeDasharray="4 6" opacity="0.4">
            {cities.filter((c) => !c.primary).map((c) => (
              <line key={c.name} x1={cdmx.x} y1={cdmx.y} x2={c.x} y2={c.y} />
            ))}
          </g>

          {/* Secondary cities */}
          <g>
            {cities.filter((c) => !c.primary).map((c) => (
              <g key={c.name}>
                <circle cx={c.x} cy={c.y} r="8" fill="#6366f1" opacity="0.08" />
                <circle cx={c.x} cy={c.y} r="3" fill="#6366f1" opacity="0.6" />
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

          {/* CDMX — premium marker */}
          <g>
            {/* Large soft glow */}
            <circle cx={cdmx.x} cy={cdmx.y} r="45" fill="url(#cdmx-glow)" />
            {/* Pulse rings */}
            <circle cx={cdmx.x} cy={cdmx.y} r="18" fill="none" stroke="#6366f1" strokeWidth="1.5" className="mx-pulse" />
            <circle cx={cdmx.x} cy={cdmx.y} r="18" fill="none" stroke="#6366f1" strokeWidth="1.5" className="mx-pulse delay-1" />
            <circle cx={cdmx.x} cy={cdmx.y} r="18" fill="none" stroke="#6366f1" strokeWidth="1.5" className="mx-pulse delay-2" />
            {/* Static halo */}
            <circle cx={cdmx.x} cy={cdmx.y} r="13" fill="rgba(99,102,241,0.15)" />
            {/* Dot */}
            <circle cx={cdmx.x} cy={cdmx.y} r="7" fill="#6366f1" />
            <circle cx={cdmx.x} cy={cdmx.y} r="3" fill="#ffffff" />
            {/* Label pill */}
            <g>
              <rect x={cdmx.x - 42} y={cdmx.y + 18} width="84" height="26" rx="13" fill="#0a0a0a" />
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

// ─── 11 · CTA FINAL ────────────────────────────────────────────────────────
function CTASection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  return (
    <Section id="cta" dark innerRef={innerRef}>
      {/* Fondo dinámico — mismo lenguaje visual que el Hero */}
      <div className="dyn-bg-dark" aria-hidden>
        <span className="dyn-blob dyn-blob-a" />
        <span className="dyn-blob dyn-blob-b" />
        <span className="dyn-blob dyn-blob-c" />
      </div>
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 z-[1] opacity-25" />
      <div className="dyn-veil z-[1]" aria-hidden />

      <div className="relative z-[2] mx-auto flex h-full w-full max-w-3xl flex-col justify-center text-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <AntuarioMark className="mx-auto h-9 w-auto sm:h-12" dark />
        </motion.div>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="display mt-6 text-[38px] text-white sm:mt-10 sm:text-[60px]"
        >
          ¿Hay un proyecto <br />
          <span className="gradient-anim-bright">sobre la mesa?</span>
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mx-auto mt-4 max-w-xl text-[13px] leading-relaxed text-white/55 sm:mt-6 sm:text-[17px]"
        >
          Platícanos sobre él — aunque sea solo una dirección general. Nosotros construimos la propuesta.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13.5px] font-semibold text-ink-900 transition-transform duration-300 hover:scale-[1.02] sm:px-7 sm:py-4 sm:text-[15px]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Cuéntanos tu proyecto
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-white/10 sm:px-7 sm:py-4 sm:text-[15px]"
          >
            Agendar videollamada
          </a>
        </motion.div>

        <motion.p
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-4 text-[11px] text-white/40 sm:mt-6 sm:text-[12px]"
        >
          Sin costo · Sin compromiso
        </motion.p>

        <motion.div
          custom={5}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-8 flex items-center justify-center gap-3 text-[10px] text-white/30 sm:mt-16 sm:gap-6 sm:text-[11px]"
        >
          <span>{siteConfig.email}</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>México</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>© {new Date().getFullYear()}</span>
        </motion.div>
      </div>
    </Section>
  )
}
