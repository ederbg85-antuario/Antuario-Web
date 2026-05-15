'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

/* ═══════════════════════════════════════════════════════════════════
   ANTUARIO · Home (Brandbook 2026) · v3
   Apple-like minimal — secciones flotantes sobre papel blanco.
   Header pill adaptativo. Logotype ↔ Isotipo en scroll.
   ═══════════════════════════════════════════════════════════════════ */

// ─── Marca: isotipo ────────────────────────────────────────────────────────
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

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

type SectionTheme = 'dark' | 'light'

/* ═══════════════ Página ═══════════════ */
export default function HomePage() {
  const [theme, setTheme] = useState<SectionTheme>('dark')
  const [showLogotype, setShowLogotype] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-theme]')
    )
    if (sections.length === 0) return

    const compute = () => {
      const probeY = 88
      let current: SectionTheme = 'dark'
      for (const s of sections) {
        const r = s.getBoundingClientRect()
        if (r.top <= probeY && r.bottom > probeY) {
          current = (s.dataset.theme as SectionTheme) || 'light'
          break
        }
      }
      setTheme(current)
    }

    compute()
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('resize', compute)
    return () => {
      window.removeEventListener('scroll', compute)
      window.removeEventListener('resize', compute)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setShowLogotype(window.scrollY < window.innerHeight * 0.55)
      setAtTop(window.scrollY < 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <FloatingHeader
        theme={theme}
        showLogotype={showLogotype}
        atTop={atTop}
        onOpenMenu={() => setMenuOpen(true)}
      />
      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="relative">
        <HeroSection />
        <CasesSection />
        <AgencySection />
        <ServicesSection />
        <DifferentiatorsSection />
        <DataSection />
        <AccountabilitySection />
        <AISection />
        <CoverageSection />
        <CTASection />
        <FloatingFooter />
      </main>
    </>
  )
}

/* ═══════════════ HEADER FLOTANTE ADAPTATIVO ═══════════════ */
function FloatingHeader({
  theme,
  showLogotype,
  atTop,
  onOpenMenu,
}: {
  theme: SectionTheme
  showLogotype: boolean
  atTop: boolean
  onOpenMenu: () => void
}) {
  const isDark = theme === 'dark'
  // Al inicio sobre hero oscuro: el header se funde con el color del hero (sin blur)
  const useSolidOnyx = atTop && isDark

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 sm:top-4">
      <div className="pointer-events-auto mx-auto w-full max-w-[1440px] px-[clamp(10px,2.4vw,24px)]">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-700 ease-out sm:px-5 sm:py-3 ${
            useSolidOnyx
              ? 'bg-onyx text-papel'
              : isDark
              ? 'float-bar-dark text-papel'
              : 'float-bar-light text-onyx'
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative flex h-8 items-center overflow-visible sm:h-9"
            style={{
              width: showLogotype ? 168 : 34,
              transition: 'width 0.75s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            aria-label="Antuario · Ir al inicio"
          >
            <AntuarioLogotype
              className="absolute left-0 top-1/2 h-[22px] w-auto -translate-y-1/2 sm:h-[26px]"
              dark={isDark}
              style={{
                opacity: showLogotype ? 1 : 0,
                transform: `translateY(-50%) scale(${showLogotype ? 1 : 0.92})`,
                transition: 'opacity 0.55s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                pointerEvents: showLogotype ? 'auto' : 'none',
              }}
            />
            <AntuarioMark
              className="absolute left-0 top-1/2 h-[26px] w-auto -translate-y-1/2 sm:h-[30px]"
              style={{
                color: isDark ? 'var(--papel)' : 'var(--onyx)',
                opacity: showLogotype ? 0 : 1,
                transform: `translateY(-50%) scale(${showLogotype ? 1.18 : 1})`,
                transition: 'opacity 0.55s ease 0.05s, transform 0.7s cubic-bezier(0.22,1,0.36,1)',
                pointerEvents: showLogotype ? 'none' : 'auto',
              }}
            />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-1.5 rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-colors sm:inline-flex ${
                isDark
                  ? 'bg-papel/10 text-papel hover:bg-papel/16'
                  : 'bg-onyx text-papel hover:bg-grafito'
              }`}
            >
              Cuéntanos tu proyecto
              <ArrowRight className="h-3 w-3" />
            </a>
            <button
              onClick={onOpenMenu}
              aria-label="Abrir menú"
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                isDark
                  ? 'bg-papel/10 text-papel hover:bg-papel/16'
                  : 'text-onyx'
              }`}
              style={
                !isDark ? { background: 'rgba(10,10,10,0.06)' } : undefined
              }
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

/* ═══════════════ NAV OVERLAY ═══════════════ */
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
              <AntuarioLogotype className="h-[24px] w-auto" dark />
              <button
                onClick={onClose}
                aria-label="Cerrar menú"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-papel/8 text-papel transition-colors hover:bg-papel/14"
              >
                <X className="h-[16px] w-[16px]" />
              </button>
            </div>

            <div className="mt-10 grid flex-1 gap-10 overflow-y-auto pb-10 sm:mt-14 lg:grid-cols-12 lg:gap-16">
              <nav className="lg:col-span-7">
                <span className="eyebrow-light">Páginas</span>
                <ul className="mt-5 space-y-1">
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
                        className="group flex items-baseline gap-4 py-2 text-[26px] font-light tracking-[-0.022em] text-papel/85 transition-colors hover:text-papel sm:text-[36px]"
                      >
                        <span className="font-mono text-[10px] tracking-widest text-papel/30">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-cobalto-b via-rubor-b to-nectar-b transition-all duration-500 group-hover:w-full" />
                        </span>
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
                        className="group flex items-center justify-between rounded-2xl bg-papel/4 px-4 py-3 transition-all duration-300 hover:bg-papel/8"
                      >
                        <div className="min-w-0">
                          <p className="text-[13px] font-medium text-papel">
                            {s.label}
                          </p>
                          <p className="mt-0.5 truncate text-[11px] text-papel/45">
                            {s.short}
                          </p>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-papel/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-papel" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-7">
                  <div className="hair-w mb-5" />
                  <span className="eyebrow-light">Contacto</span>
                  <div className="mt-3 space-y-1.5 text-[12px] text-papel/55">
                    <a href={`mailto:${siteConfig.email}`} className="block hover:text-papel">
                      {siteConfig.email}
                    </a>
                    <a
                      href={siteConfig.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-papel"
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

/* ═══════════════ Wrapper de sección flotante ═══════════════ */
function ShellWrap({
  children,
  data,
  variant,
  className = '',
  topPad = false,
}: {
  children: React.ReactNode
  data: SectionTheme
  variant: 'dark' | 'marfil' | 'papel'
  className?: string
  topPad?: boolean
}) {
  const shell =
    variant === 'dark'
      ? 'shell-dark'
      : variant === 'marfil'
      ? 'shell-marfil'
      : 'shell-papel'

  return (
    <section
      data-theme={data}
      className={`section-pad ${topPad ? 'pt-[88px] sm:pt-[96px]' : ''} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className={`section-shell ${shell}`}>{children}</div>
      </div>
    </section>
  )
}

/* ═══════════════ 01 · HERO ═══════════════ */
function HeroSection() {
  const services = ['Performance Ads', 'SEO', 'Diseño Web', 'Redes Sociales', 'Software', 'IA aplicada']

  return (
    <section
      data-theme="dark"
      className="pt-[80px] sm:pt-[92px] lg:pt-[100px]"
      style={{ paddingBottom: 'clamp(20px, 2.4vh, 36px)' }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(10px,2.4vw,28px)]">
        <div
          className="section-shell shell-dark pt-[48px] sm:pt-[56px] lg:pt-[64px]"
        >
          {/* Aurora muy sutil */}
          <div className="aurora aurora-deep absolute inset-0 opacity-65" aria-hidden />
          <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 35%, rgba(5,5,5,0.45) 100%)',
            }}
          />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Texto */}
        <div className="lg:col-span-6">
          <motion.span
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="eyebrow-light"
          >
            Agencia de Marketing Digital
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="display mt-5 max-w-[14ch] text-balance text-[40px] leading-[1.02] text-papel sm:text-[58px] lg:text-[72px]"
          >
            Marketing digital,{' '}
            <span className="multi-grad-bright">a la medida</span>.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="mt-6 max-w-[46ch] text-[15px] leading-[1.55] text-papel/70 sm:text-[16.5px]"
          >
            Posicionamiento, adquisición, estrategia, estructura y medición.
            Diseñamos cada solución a la medida y la respaldamos con data útil
            que mueve el negocio — sin paquetes prefabricados, sin plantillas.
            Lo que tu marca necesite, lo construimos y lo medimos bien.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3"
          >
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-inv"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Cuéntanos tu proyecto
              <ArrowRight className="h-3 w-3" />
            </a>
            <a href="#agencia" className="btn-ghost-dark">
              Conocer Antuario
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="mt-3.5 text-[11.5px] text-papel/40"
          >
            Sin costo · Sin compromiso
          </motion.div>

          {/* Chips de servicios — contenedor pill elegante */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="mt-10 inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-2xl bg-papel/[0.05] p-1.5 backdrop-blur-md sm:gap-2"
            style={{
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 20px rgba(0,0,0,0.20)',
            }}
          >
            {services.map((s) => (
              <span
                key={s}
                className="rounded-xl px-2.5 py-1.5 text-[11px] font-medium text-papel/75 transition-colors hover:bg-papel/8 hover:text-papel sm:px-3 sm:text-[12px]"
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Deck flotante */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <HeroDeck />
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroDeck() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[540px] sm:h-[500px]">
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[64px] opacity-65"
        style={{
          background:
            'radial-gradient(45% 50% at 60% 30%, rgba(167,139,250,0.32), transparent 60%), radial-gradient(40% 50% at 20% 80%, rgba(34,211,238,0.26), transparent 60%), radial-gradient(35% 40% at 80% 75%, rgba(251,113,133,0.18), transparent 60%)',
          filter: 'blur(50px)',
        }}
        aria-hidden
      />

      {/* Card 3 — atrás */}
      <div className="absolute right-0 top-0 w-[78%]" style={{ transform: 'rotate(3deg)' }}>
        <div className="card-bb-glass p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/45">
              03 · Conversión
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-salvia-b shadow-[0_0_10px_rgba(110,231,183,0.7)]" />
          </div>
          <h3
            className="mt-3 text-[15px] font-medium tracking-tight text-papel sm:text-[16px]"
            style={{ letterSpacing: '-0.014em' }}
          >
            CRM con accountability
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-1 flex-1 rounded-full bg-papel/8">
              <div className="h-full w-[72%] rounded-full bg-salvia-b" />
            </div>
            <span className="font-mono text-[10px] text-papel/55">72%</span>
          </div>
        </div>
      </div>

      {/* Card 2 — medio */}
      <div className="absolute left-0 top-[112px] w-[78%]" style={{ transform: 'rotate(-2deg)' }}>
        <div
          className="rounded-[24px] bg-onyx p-5 sm:p-6"
          style={{
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.06), 0 20px 44px rgba(0,0,0,0.55), 0 4px 10px rgba(0,0,0,0.40)',
          }}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/45">
              02 · Adquisición
            </span>
            <span className="font-mono text-[10px] text-papel/45">+4.2×</span>
          </div>
          <h3
            className="mt-3 text-[15px] font-medium tracking-tight text-papel sm:text-[16px]"
            style={{ letterSpacing: '-0.014em' }}
          >
            Leads que cierran
          </h3>
          <div className="mt-5 flex items-end gap-1.5">
            {[14, 22, 30, 26, 38, 50, 44, 62].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}px`,
                  background:
                    i === 7
                      ? 'var(--cobalto-b)'
                      : `rgba(129, 140, 248, ${0.18 + i * 0.06})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Card 1 — frente */}
      <div className="absolute right-[4%] top-[230px] w-[84%]" style={{ transform: 'rotate(1deg)' }}>
        <div
          className="rounded-[24px] bg-papel p-5 text-onyx sm:p-7"
          style={{
            boxShadow:
              '0 2px 4px rgba(15,15,30,0.10), 0 30px 64px rgba(0,0,0,0.55), 0 6px 14px rgba(0,0,0,0.30)',
          }}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
              01 · Posicionamiento
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-salvia">
              <span className="pulse-live h-1.5 w-1.5 rounded-full bg-salvia" />
              Live
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-5">
            <div>
              <span className="micro">MRR trimestre</span>
              <p
                className="mt-1 text-[26px] font-light tracking-tight text-onyx sm:text-[28px]"
                style={{ letterSpacing: '-0.028em' }}
              >
                $112k
              </p>
              <span className="text-[11px] font-medium text-salvia">+133%</span>
            </div>
            <div>
              <span className="micro">CPA</span>
              <p
                className="mt-1 text-[26px] font-light tracking-tight text-onyx sm:text-[28px]"
                style={{ letterSpacing: '-0.028em' }}
              >
                $48
              </p>
              <span className="text-[11px] font-medium text-cobalto">-38%</span>
            </div>
          </div>
          <div className="spectrum-bar mt-5" />
        </div>
      </div>
    </div>
  )
}

/* ═══════════════ 02 · CASOS (movido aquí) ═══════════════ */
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
    const bumpPause = () => { pauseUntil = performance.now() + 1800 }
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
    <section data-theme="light" className="bg-papel py-[clamp(56px,7vh,100px)]">
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(16px,3vw,40px)]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mb-8 flex flex-wrap items-end justify-between gap-6 sm:mb-12"
        >
          <div>
            <ChapterTag roman="II" label="Casos" sub="Trabajo" />
            <h2
              className="hero-type mt-5 max-w-[18ch] text-[30px] text-onyx sm:text-[42px] lg:text-[50px]"
              style={{ fontWeight: 300 }}
            >
              Nuestro trabajo{' '}
              <span className="multi-grad">habla por sí mismo.</span>
            </h2>
          </div>
          <p className="lead-type max-w-[40ch] text-[14.5px] sm:text-[16px]">
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
        className="relative"
      >
        <div
          ref={trackRef}
          className="marquee-mask no-scrollbar overflow-x-auto px-[clamp(16px,3vw,40px)]"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex w-max gap-5 pb-2 sm:gap-6">
            {loop.map((c, i) => (
              <article
                key={`${c.name}-${i}`}
                className="group relative aspect-[4/5] w-[280px] flex-shrink-0 select-none overflow-hidden rounded-[28px] bg-lino sm:w-[340px] lg:w-[380px]"
                style={{
                  boxShadow:
                    '0 2px 4px rgba(15,15,30,0.08), 0 18px 36px rgba(15,15,30,0.10), 0 36px 72px rgba(15,15,30,0.07)',
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
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 sm:p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/65">
                    {c.tag}
                  </span>
                  <h3
                    className="mt-1.5 text-[18px] font-medium tracking-tight text-papel sm:text-[22px]"
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
    </section>
  )
}

/* ═══════════════ 03 · QUIÉNES SOMOS ═══════════════ */
function AgencySection() {
  return (
    <section
      id="agencia"
      data-theme="light"
      className="section-pad"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="px-[clamp(8px,1.5vw,32px)] py-[clamp(48px,6vh,80px)]">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="lg:col-span-7"
            >
              <ChapterTag roman="I" label="Esencia" sub="Quiénes somos" />

              <motion.h2
                custom={1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="hero-type mt-5 max-w-[16ch] text-[32px] text-onyx sm:text-[44px] lg:text-[52px]"
                style={{ fontWeight: 300 }}
              >
                Más que <span className="multi-grad">una agencia.</span>
              </motion.h2>

              <motion.p
                custom={2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="lead-type mt-6 max-w-[48ch] text-[15px] sm:text-[16.5px]"
              >
                Un equipo que domina amplias habilidades y herramientas para
                llevar a la realidad prácticamente cualquier proyecto. Desde
                posicionamiento de marca hasta sistemas con IA — diseñamos
                cada pieza en función de lo que tu negocio necesita.
              </motion.p>

              <motion.p
                custom={3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="body-type mt-4 max-w-[52ch] text-[14px]"
              >
                Sin paquetes prefabricados, sin plantillas. Operamos como
                partner: respondemos por resultados, no por tareas.
              </motion.p>

              <motion.div
                custom={4}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="mt-8 grid grid-cols-3 gap-3"
              >
                {[
                  { v: '04', l: 'Oficios bajo un techo' },
                  { v: '07', l: 'Disciplinas integradas' },
                  { v: '100%', l: 'Hecho a la medida' },
                ].map((s) => (
                  <div key={s.l} className="card-bb-soft p-4">
                    <p
                      className="text-[24px] font-light tracking-tight text-onyx sm:text-[28px]"
                      style={{ letterSpacing: '-0.028em' }}
                    >
                      {s.v}
                    </p>
                    <span className="mt-1 block text-[11px] leading-tight text-plomo sm:text-[11.5px]">
                      {s.l}
                    </span>
                  </div>
                ))}
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
      </div>
    </section>
  )
}

function AgencyConstellation() {
  const orbits = [
    { label: 'Marketing', color: 'var(--cobalto)', radius: 124, angle: -90, dur: 34 },
    { label: 'Data',      color: 'var(--laguna)',  radius: 124, angle: -30, dur: 34 },
    { label: 'IA',        color: 'var(--glicina)', radius: 124, angle:  30, dur: 34 },
    { label: 'Diseño',    color: 'var(--rubor)',   radius: 162, angle:  90, dur: 46 },
    { label: 'Web',       color: 'var(--glicina)', radius: 162, angle: 170, dur: 46 },
    { label: 'Software',  color: 'var(--salvia)',  radius: 162, angle: 250, dur: 46 },
  ] as const

  return (
    <div className="agency-stage relative flex h-[320px] w-[320px] items-center justify-center sm:h-[400px] sm:w-[400px]">
      <span className="agency-halo absolute inset-6 rounded-full sm:inset-8" aria-hidden />
      <span className="agency-conic absolute h-[210px] w-[210px] rounded-full sm:h-[260px] sm:w-[260px]" aria-hidden />
      <svg
        className="agency-ring-dashed absolute h-[178px] w-[178px] sm:h-[222px] sm:w-[222px]"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <circle cx="100" cy="100" r="98" fill="none" stroke="rgba(10,10,10,0.18)" strokeWidth="1" strokeDasharray="2 6" />
      </svg>
      <span
        className="absolute h-[258px] w-[258px] rounded-full sm:h-[326px] sm:w-[326px]"
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
            className="agency-orbit-pill absolute left-1/2 top-1/2 flex items-center gap-1.5 rounded-full bg-papel/95 px-2.5 py-1 backdrop-blur-sm"
            style={{
              animationDuration: `${o.dur}s`,
              boxShadow:
                '0 1px 2px rgba(15,15,30,0.06), 0 6px 14px rgba(15,15,30,0.06)',
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: o.color as string, boxShadow: `0 0 8px ${o.color}` }}
            />
            <span className="text-[10.5px] font-medium tracking-tight text-onyx">
              {o.label}
            </span>
          </span>
        </span>
      ))}

      <div className="relative z-10 flex items-center justify-center">
        <span className="agency-core-glow pointer-events-none absolute h-24 w-24 rounded-full sm:h-28 sm:w-28" aria-hidden />
        <div className="agency-core-breath relative">
          <AntuarioMark className="h-[84px] w-auto text-onyx sm:h-[108px]" />
        </div>
      </div>
    </div>
  )
}

/* ═══════════════ 04 · SERVICIOS ═══════════════ */
function ServicesSection() {
  type Cap = {
    n: string; tag: string; title: string; headline: string; description: string; items: string[]; accent: string
  }
  const caps: Cap[] = [
    { n: '01', tag: 'Paid Media', title: 'Performance Ads', headline: 'Campañas que mueven la aguja, no que ganan premios.', description: 'Optimizamos cada peso invertido — desde la creatividad hasta la puja — para conseguir leads, ventas y crecimiento real. Estrategia 100% adaptada a tu vertical.', items: ['Google, Meta y TikTok Ads', 'ROAS, CPA y CPL reales', 'Testing creativo continuo', 'Reportes con accountability'], accent: 'var(--cobalto)' },
    { n: '02', tag: 'Orgánico', title: 'SEO', headline: 'Crecer en búsquedas, sin pagar por cada click.', description: 'Auditoría técnica, estrategia de contenidos y autoridad de dominio para posicionarte donde tus clientes te buscan.', items: ['Auditoría técnica + competencia', 'Estrategia de keywords', 'Contenido y linkbuilding', 'Reportes mensuales de posiciones'], accent: 'var(--salvia)' },
    { n: '03', tag: 'Contenido', title: 'Redes Sociales', headline: 'Estrategia, contenido y producción bajo el mismo techo.', description: 'Comunicamos tu marca con consistencia: planeamos, producimos y publicamos contenido que conecta y convierte.', items: ['Calendarios estratégicos', 'Producción foto y video', 'Edición y post profesional', 'Community y rendimiento'], accent: 'var(--nectar)' },
    { n: '04', tag: 'Diseño', title: 'Diseño Creativo', headline: 'Identidad visual que diferencia a tu marca.', description: 'Branding, dirección de arte y sistemas visuales escalables — el lenguaje gráfico que sostiene toda tu comunicación.', items: ['Branding e identidad', 'Dirección de arte', 'Sistemas visuales', 'Piezas para campañas'], accent: 'var(--rubor)' },
    { n: '05', tag: 'Web', title: 'Desarrollo Web', headline: 'Sitios y plataformas pensados para convertir.', description: 'Construimos webs rápidas, optimizadas para SEO y enfocadas en la experiencia del usuario y el cierre de venta.', items: ['Sitios corporativos y landings', 'Ecommerce y catálogos', 'UX/UI orientado a conversión', 'Performance + analytics'], accent: 'var(--glicina)' },
    { n: '06', tag: 'Tecnología', title: 'Software a la medida', headline: 'Sistemas que aceleran tu operación.', description: 'CRM, automatizaciones e integraciones para que el equipo opere con menos fricción y más visibilidad.', items: ['CRM y plataformas internas', 'Integraciones API', 'Automatización de procesos', 'Dashboards y BI a medida'], accent: 'var(--laguna)' },
    { n: '07', tag: 'Vanguardia', title: 'Inteligencia Artificial', headline: 'IA aplicada — operación, marketing y producto.', description: 'No hablamos de IA, la implementamos: agentes, LLMs y automatización inteligente para escalar sin escalar costos.', items: ['Agentes WhatsApp y voz', 'LLMs custom para tu negocio', 'IA generativa de contenido', 'Optimización de campañas con IA'], accent: 'var(--glicina)' },
  ]

  const [activeIdx, setActiveIdx] = useState(0)
  const active = caps[activeIdx]

  return (
    <ShellWrap data="light" variant="marfil">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={rise}
        className="mb-10 sm:mb-12"
      >
        <ChapterTag roman="I" label="Oficios" sub="Qué hacemos" />
        <h2
          className="hero-type mt-5 max-w-[20ch] text-[30px] text-onyx sm:text-[42px] lg:text-[50px]"
          style={{ fontWeight: 300 }}
        >
          Una sola dirección,{' '}
          <span className="multi-grad">muchas capacidades.</span>
        </h2>
        <p className="lead-type mt-5 max-w-[58ch] text-[15px] sm:text-[16px]">
          Construimos sistemas comerciales completos para empresas de
          servicios — todo a la medida. No vendemos piezas sueltas: tomamos
          una marca, la posicionamos, la ponemos a producir leads y los
          convertimos en ventas.
        </p>
      </motion.div>

      {/* Mobile chips */}
      <div className="lg:hidden">
        <div className="no-scrollbar -mx-[clamp(28px,4.5vw,80px)] mb-4 overflow-x-auto px-[clamp(28px,4.5vw,80px)]">
          <div className="flex w-max gap-2">
            {caps.map((c, i) => {
              const isActive = i === activeIdx
              return (
                <button
                  key={c.title}
                  onClick={() => setActiveIdx(i)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[11.5px] font-medium transition-all duration-300 ${
                    isActive ? 'bg-onyx text-papel' : 'bg-papel text-grafito shadow-soft'
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

      {/* Desktop */}
      <div className="hidden grid-cols-12 gap-10 lg:grid">
        <ul className="lg:col-span-5">
          {caps.map((c, i) => {
            const isActive = i === activeIdx
            return (
              <li key={c.title}>
                <button
                  onClick={() => setActiveIdx(i)}
                  onMouseEnter={() => setActiveIdx(i)}
                  className="group relative flex w-full items-center gap-5 py-3 text-left transition-colors"
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
                    className={`flex-1 text-[16px] font-medium tracking-tight transition-colors ${
                      isActive ? 'text-onyx' : 'text-niebla group-hover:text-grafito'
                    }`}
                    style={{ letterSpacing: '-0.014em' }}
                  >
                    {c.title}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
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
    </ShellWrap>
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
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`card-bb-float relative overflow-hidden ${mobile ? 'p-6' : 'p-8'}`}
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
            className={`mt-4 font-medium tracking-tight text-onyx ${mobile ? 'text-[22px]' : 'text-[28px]'}`}
            style={{ letterSpacing: '-0.022em', lineHeight: 1.08 }}
          >
            {cap.title}
          </h3>
          <p
            className={`mt-2.5 font-light tracking-tight text-grafito ${mobile ? 'text-[14px]' : 'text-[16.5px]'}`}
            style={{ letterSpacing: '-0.012em', lineHeight: 1.36 }}
          >
            {cap.headline}
          </p>
          <p className={`body-type mt-3 ${mobile ? 'text-[13px]' : 'text-[14px]'}`}>
            {cap.description}
          </p>

          <ul className={`mt-5 grid gap-2 ${mobile ? 'grid-cols-1' : 'grid-cols-2 gap-x-6'}`}>
            {cap.items.map((it) => (
              <li
                key={it}
                className={`flex items-start gap-2.5 text-grafito ${mobile ? 'text-[12.5px]' : 'text-[13.5px]'}`}
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

/* ═══════════════ 05 · DIFERENCIADORES (rediseñado · editorial list) ═══════════════ */
function DifferentiatorsSection() {
  const items = [
    { title: 'Accountability real', text: 'Respondemos por resultados, no por tareas. Cada compromiso tiene un dueño y una métrica.', accent: 'var(--cobalto-b)' },
    { title: 'Sistemas de datos', text: 'Tableros vivos para que cada decisión esté basada en información — no en intuición.', accent: 'var(--laguna-b)' },
    { title: 'Vanguardia con IA', text: 'Mientras la mayoría apenas la nombra, nosotros la operamos. IA en marketing, operación y producto.', accent: 'var(--glicina-b)' },
    { title: 'Estrategia + estructura', text: 'Visión completa: del posicionamiento al funnel, del producto a la operación. Ordenamos lo suelto.', accent: 'var(--rubor-b)' },
    { title: 'Partner end-to-end', text: 'De la estrategia a la optimización. Podemos ejecutar todo o sumarnos a tu equipo donde haga falta.', accent: 'var(--salvia-b)' },
    { title: 'Hecho a la medida', text: 'Sin paquetes prefabricados. Cada solución se diseña para tu negocio — no al revés.', accent: 'var(--nectar-b)' },
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
          className="mb-12 sm:mb-16"
        >
          <ChapterTag roman="I" label="Diferenciadores" sub="Por qué Antuario" dark />
          <h2
            className="hero-type mt-5 max-w-[18ch] text-[30px] text-papel sm:text-[42px] lg:text-[50px]"
            style={{ fontWeight: 300 }}
          >
            Lo que nos hace{' '}
            <span className="multi-grad-bright">diferentes.</span>
          </h2>
          <p className="lead-type mt-5 max-w-[54ch] text-[15px] !text-papel/65 sm:text-[16.5px]">
            Una agencia a la vanguardia, en un mercado donde muchos siguen
            atorados en la vieja escuela.
          </p>
        </motion.div>

        {/* Editorial list 2-col */}
        <div className="grid gap-y-2 lg:grid-cols-2 lg:gap-x-14">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="group relative grid grid-cols-[auto_1fr] items-start gap-x-5 py-6 sm:gap-x-7 sm:py-7"
              style={{
                borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              {/* Número grande */}
              <div className="relative">
                <span
                  className="block text-[44px] font-light leading-none tabular-nums text-papel/15 transition-colors duration-500 group-hover:text-papel/35 sm:text-[52px]"
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

              <div className="pt-1">
                <h3
                  className="text-[18px] font-medium tracking-tight text-papel sm:text-[20px]"
                  style={{ letterSpacing: '-0.018em' }}
                >
                  {it.title}
                </h3>
                <p className="mt-2 max-w-[42ch] text-[13.5px] leading-[1.55] text-papel/60 sm:text-[14.5px]">
                  {it.text}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Borde superior de las columnas para separar la fila inicial visualmente cuando hay 2 cols */}
          <style jsx>{`
            @media (min-width: 1024px) {
              :global(.diff-row-first-col) { border-top: 1px solid rgba(255,255,255,0.08); }
            }
          `}</style>
        </div>
      </div>
    </ShellWrap>
  )
}

/* ═══════════════ 06 · DATOS / DASHBOARD ═══════════════ */
function DataSection() {
  const features = [
    { positive: false, text: 'Datos de vanidad sin contexto' },
    { positive: true, text: 'Métricas que mueven el negocio' },
    { positive: true, text: 'Visibilidad en tiempo real' },
    { positive: true, text: 'Dashboard propio o software a la medida' },
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
              <ChapterTag roman="III" label="Datos" sub="Información" />
              <h2
                className="hero-type mt-5 max-w-[14ch] text-[30px] text-onyx sm:text-[40px] lg:text-[48px]"
                style={{ fontWeight: 300 }}
              >
                Medición estratégica,{' '}
                <span className="multi-grad">no reportes genéricos.</span>
              </h2>
              <p className="lead-type mt-5 max-w-[44ch] text-[15px] sm:text-[16px]">
                Construimos sistemas de información estratégicos hechos a la
                medida — no PDFs con likes y alcance. Cada dashboard se
                diseña según las decisiones que tu equipo realmente toma.
              </p>

              <ul className="mt-7 space-y-2.5">
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
                        <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 8.5l3 3 7-7" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                          <path d="M4 4l8 8M12 4l-8 8" />
                        </svg>
                      )}
                    </span>
                    <span
                      className={`text-[13.5px] leading-snug ${
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
              <DashboardImage />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardImage() {
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
            '0 2px 4px rgba(15,15,30,0.10), 0 28px 64px rgba(0,0,0,0.18), 0 10px 24px rgba(0,0,0,0.12)',
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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/dashboard-vision-marketing.jpg"
          alt="Antuario Dashboard"
          className="block h-auto w-full select-none"
          loading="lazy"
          draggable={false}
        />
      </div>

      <div
        className="absolute -left-4 top-12 hidden rounded-[18px] bg-papel p-3 sm:block"
        style={{
          boxShadow: '0 2px 4px rgba(15,15,30,0.10), 0 18px 40px rgba(15,15,30,0.10)',
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
          boxShadow: '0 2px 4px rgba(15,15,30,0.10), 0 18px 40px rgba(15,15,30,0.10)',
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

/* ═══════════════ 07 · ACCOUNTABILITY (rediseñado · tabla comparativa) ═══════════════ */
function AccountabilitySection() {
  const rows = [
    { theme: 'Compromisos',  them: 'Objetivos vagos o que cambian',     us: 'Metas claras desde el día 1' },
    { theme: 'Resultados',   them: 'Entregan tareas, no resultados',    us: 'Compromisos concretos con métrica' },
    { theme: 'Cuando falla', them: 'Hay justificación',                 us: 'Hay acción inmediata' },
    { theme: 'Métricas',     them: 'Reportes que nadie entiende',       us: 'Solo datos que mueven el negocio' },
    { theme: 'Seguimiento',  them: 'La marca persigue al equipo',       us: 'Nosotros empujamos cada semana' },
    { theme: 'ROI',          them: 'No saben cuánto vale cada peso',    us: 'Trazabilidad completa por canal' },
  ]

  return (
    <ShellWrap data="dark" variant="dark">
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mb-10 sm:mb-14"
        >
          <ChapterTag roman="IV" label="Accountability" sub="Cómo trabajamos" dark />
          <h2
            className="hero-type mt-5 max-w-[20ch] text-[30px] text-papel sm:text-[42px] lg:text-[50px]"
            style={{ fontWeight: 300 }}
          >
            Resultados concretos.{' '}
            <span className="multi-grad-bright">Responsabilidad total.</span>
          </h2>
        </motion.div>

        {/* Headers de columnas — desktop */}
        <div className="hidden grid-cols-12 gap-6 pb-4 lg:grid">
          <div className="col-span-3" />
          <div className="col-span-4">
            <span className="eyebrow-light">Otra agencia</span>
          </div>
          <div className="col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-papel px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-onyx" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-onyx">
                Antuario
              </span>
            </div>
          </div>
        </div>

        <div>
          {rows.map((r, i) => (
            <motion.div
              key={r.theme}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="grid items-start gap-4 py-5 sm:py-6 lg:grid-cols-12 lg:gap-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="lg:col-span-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/45">
                  {String(i + 1).padStart(2, '0')} · {r.theme}
                </span>
              </div>
              <div className="lg:col-span-4">
                <span className="lg:hidden">
                  <span className="eyebrow-light">Otra agencia</span>
                </span>
                <p className="mt-1 text-[14px] text-papel/40 line-through decoration-papel/15 sm:text-[14.5px] lg:mt-0">
                  {r.them}
                </p>
              </div>
              <div className="lg:col-span-5">
                <span className="lg:hidden">
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-papel px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-onyx" />
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-onyx">
                      Antuario
                    </span>
                  </div>
                </span>
                <p className="mt-1 text-[14.5px] font-medium text-papel sm:text-[15.5px] lg:mt-0">
                  {r.us}
                </p>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />
        </div>

        <div className="mt-10 flex items-center gap-3">
          <span className="spectrum-bar" style={{ width: 64 }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/45">
            Si lo prometimos · lo medimos
          </span>
        </div>
      </div>
    </ShellWrap>
  )
}

/* ═══════════════ 08 · IA (rediseñado · split visual) ═══════════════ */
function AISection() {
  const items = [
    { n: '01', title: 'Agentes WhatsApp', text: 'Atienden, califican y dan seguimiento las 24 horas.' },
    { n: '02', title: 'Agentes de voz',   text: 'Confirman citas, califican prospectos y responden FAQs.' },
    { n: '03', title: 'Automatización',   text: 'Seguimientos, clasificación de leads, asignación de tareas.' },
    { n: '04', title: 'IA en campañas',   text: 'Optimización de puja, segmentación predictiva, creatividades.' },
    { n: '05', title: 'LLMs a la medida', text: 'Asistentes internos y sistemas autónomos.' },
    { n: '06', title: 'IA generativa',    text: 'Imágenes, video, animaciones 3D, contenido a escala.' },
  ]

  return (
    <ShellWrap data="dark" variant="dark">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ai-aurora" />
      </div>
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-12" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,10,10,0.40), transparent 30%, transparent 70%, rgba(10,10,10,0.55))',
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-3 w-3 items-center justify-center">
              <span className="ai-orb absolute inset-0" />
              <span className="relative h-2 w-2 rounded-full bg-papel" />
            </span>
            <span className="eyebrow-light">Inteligencia Artificial</span>
          </div>
          <h2
            className="hero-type mt-5 max-w-[18ch] text-[30px] text-papel sm:text-[42px] lg:text-[50px]"
            style={{ fontWeight: 300 }}
          >
            No hablamos de IA.{' '}
            <span className="multi-grad-bright">La implementamos.</span>
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Mockup chat IA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <AIChat />
          </motion.div>

          {/* Lista capabilities */}
          <div className="lg:col-span-7">
            <p className="lead-type mb-6 max-w-[44ch] text-[14.5px] !text-papel/65 sm:text-[15.5px]">
              Mientras la mayoría apenas la conoce como tendencia, nosotros la
              operamos en proyectos reales — todo a la medida.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {items.map((it, i) => (
                <motion.div
                  key={it.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={rise}
                  className="group flex items-start gap-4 py-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span
                    className="font-mono text-[11px] tracking-widest text-papel/40 transition-colors group-hover:text-papel/70"
                  >
                    {it.n}
                  </span>
                  <div>
                    <h3
                      className="text-[14.5px] font-medium tracking-tight text-papel sm:text-[15.5px]"
                      style={{ letterSpacing: '-0.014em' }}
                    >
                      {it.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-[1.5] text-papel/55 sm:text-[13px]">
                      {it.text}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} className="col-span-full" />
            </div>
          </div>
        </div>
      </div>
    </ShellWrap>
  )
}

function AIChat() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[44px] opacity-55 blur-[50px]"
        style={{
          background:
            'radial-gradient(50% 60% at 30% 30%, rgba(167,139,250,0.40), transparent 60%), radial-gradient(40% 50% at 70% 70%, rgba(34,211,238,0.30), transparent 60%)',
        }}
        aria-hidden
      />

      <div
        className="relative overflow-hidden rounded-[28px] bg-papel p-5 sm:p-6"
        style={{
          boxShadow:
            '0 2px 6px rgba(0,0,0,0.30), 0 24px 50px rgba(0,0,0,0.40), 0 10px 22px rgba(0,0,0,0.20)',
        }}
      >
        {/* header chat */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full">
              <span className="ai-orb absolute inset-0 rounded-full" />
              <span className="relative h-3 w-3 rounded-full bg-onyx" />
            </span>
            <div>
              <p className="text-[12px] font-medium text-onyx" style={{ letterSpacing: '-0.012em' }}>
                Antuario · Agente IA
              </p>
              <p className="text-[10px] text-plomo">en línea</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-salvia/15 px-2 py-0.5">
            <span className="pulse-live h-1.5 w-1.5 rounded-full bg-salvia" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-salvia">Live</span>
          </span>
        </div>

        <div className="mt-5 space-y-2.5">
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-onyx px-3.5 py-2 text-[12.5px] text-papel">
              Hola, quiero info sobre marketing
            </div>
          </div>
          <div className="flex justify-start">
            <div
              className="max-w-[85%] rounded-2xl rounded-tl-sm px-3.5 py-2 text-[12.5px] text-onyx"
              style={{ background: 'rgba(10,10,10,0.05)' }}
            >
              ¡Hola! Claro. ¿Qué tipo de empresa tienes y qué objetivo buscas?
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-onyx px-3.5 py-2 text-[12.5px] text-papel">
              Servicios B2B en CDMX, quiero más leads
            </div>
          </div>
          <div className="flex justify-start">
            <div
              className="max-w-[88%] rounded-2xl rounded-tl-sm px-3.5 py-2 text-[12.5px] text-onyx"
              style={{ background: 'rgba(10,10,10,0.05)' }}
            >
              Perfecto. Te agendo con un estratega para diseñar una propuesta a
              tu medida. ¿Mañana 10:30 te funciona?
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-full px-3 py-2" style={{ background: 'rgba(10,10,10,0.04)' }}>
          <span className="font-mono text-[10px] text-plomo">→</span>
          <span className="text-[11.5px] text-plomo">Escribiendo respuesta…</span>
          <span className="ml-auto font-mono text-[9.5px] text-plomo">0.8s</span>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════ 09 · COBERTURA ═══════════════ */
function CoverageSection() {
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
              <ChapterTag roman="IV" label="Cobertura" sub="Ubicación" />
              <h2
                className="hero-type mt-5 max-w-[14ch] text-[30px] text-onyx sm:text-[42px] lg:text-[48px]"
                style={{ fontWeight: 300 }}
              >
                Sede en CDMX,{' '}
                <span className="multi-grad">cobertura nacional.</span>
              </h2>
              <p className="lead-type mt-5 max-w-[44ch] text-[15px] sm:text-[16px]">
                Trabajamos con marcas en todo México. Desde nuestra base en la
                Ciudad de México operamos proyectos en cualquier estado del
                país, de forma remota o presencial cuando se requiera.
              </p>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { label: 'Sede', value: 'CDMX' },
                  { label: 'Cobertura', value: 'Nacional' },
                  { label: 'Modalidad', value: 'Remoto + presencial' },
                ].map((s) => (
                  <div key={s.label} className="card-bb-soft p-3.5 sm:p-4">
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-plomo">
                      {s.label}
                    </span>
                    <p className="mt-1.5 text-[13px] font-medium text-onyx" style={{ letterSpacing: '-0.014em' }}>
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <MexicoMap />
            </motion.div>
          </div>
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
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[44px] opacity-50 blur-[55px]"
        style={{
          background:
            'radial-gradient(60% 60% at 30% 30%, rgba(79,70,229,0.18), transparent 60%), radial-gradient(50% 50% at 70% 70%, rgba(34,211,238,0.14), transparent 60%)',
        }}
        aria-hidden
      />

      <div className="card-bb-float overflow-hidden bg-papel/85 p-5 backdrop-blur-sm sm:p-7">
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

/* ═══════════════ 10 · CTA FINAL ═══════════════ */
function CTASection() {
  return (
    <ShellWrap data="dark" variant="dark">
      <div className="aurora aurora-deep absolute inset-0 opacity-55" aria-hidden />
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <AntuarioMark className="h-10 w-auto text-papel sm:h-12" />

        <h2
          className="hero-type mt-7 max-w-[18ch] text-[30px] text-papel sm:text-[44px] lg:text-[54px]"
          style={{ fontWeight: 300 }}
        >
          ¿Hay un proyecto{' '}
          <span className="multi-grad-bright">sobre la mesa?</span>
        </h2>

        <p className="lead-type mt-5 max-w-[42ch] text-[15px] !text-papel/65 sm:text-[16.5px]">
          Platícanos sobre él — aunque sea solo una dirección general.
          Nosotros construimos la propuesta a tu medida.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:gap-3">
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
        </div>

        <p className="mt-4 text-[11.5px] text-papel/40">
          Sin costo · Sin compromiso
        </p>

        <div className="mt-9 flex items-center gap-4">
          <span className="spectrum-bar" style={{ width: 80 }} />
        </div>
      </div>
    </ShellWrap>
  )
}

/* ═══════════════ FOOTER (full-width, sin contenedor) ═══════════════ */
function FloatingFooter() {
  return (
    <footer data-theme="dark" className="relative isolate overflow-hidden bg-onyx text-papel">
      <div
        className="pointer-events-none absolute inset-0 opacity-22"
        style={{
          background:
            'radial-gradient(35% 55% at 12% 30%, rgba(79,70,229,0.38), transparent 60%), radial-gradient(30% 50% at 88% 70%, rgba(251,113,133,0.28), transparent 60%)',
          filter: 'blur(70px)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(16px,3vw,40px)] pb-10 pt-16 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <AntuarioLogotype className="h-[28px] w-auto" dark />
            <p className="mt-5 max-w-[34ch] text-[13.5px] text-papel/55">
              Soluciones de marketing digital a la medida — bajo una sola
              dirección estratégica, con accountability total sobre cada
              resultado.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="spectrum-bar" style={{ width: 64 }} />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/35">
                Vol. 01 · MMXXVI
              </span>
            </div>
          </div>

          <nav className="lg:col-span-3">
            <span className="eyebrow-light">Páginas</span>
            <ul className="mt-4 space-y-2 text-[13px] text-papel/65">
              {siteConfig.footerNav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition-colors hover:text-papel">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <span className="eyebrow-light">Contacto</span>
            <div className="mt-4 space-y-1.5 text-[13px] text-papel/65">
              <a href={`mailto:${siteConfig.email}`} className="block transition-colors hover:text-papel">
                {siteConfig.email}
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-papel">
                {siteConfig.phone} · WhatsApp
              </a>
              <p className="text-papel/45">CDMX · México</p>
            </div>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-inv mt-6"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Cuéntanos tu proyecto
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="hair-w mt-12" />
        <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <span className="text-[11.5px] text-papel/40">
            © {new Date().getFullYear()} Antuario · Hecho con intención.
          </span>
          <div className="flex gap-5 text-[11.5px] text-papel/40">
            <Link href="/aviso-privacidad" className="hover:text-papel/80">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-papel/80">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════ HELPERS ═══════════════ */
function ChapterTag({
  roman,
  label,
  sub,
  dark = false,
}: {
  roman: string
  label: string
  sub?: string
  dark?: boolean
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span
        className={`rounded-md px-1.5 py-0.5 font-mono text-[9px] tracking-[0.10em] ${
          dark ? 'bg-papel text-onyx' : 'bg-onyx text-papel'
        }`}
      >
        {roman}
      </span>
      <span
        className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
          dark ? 'text-papel/55' : 'text-plomo'
        }`}
      >
        {label}
      </span>
      {sub && (
        <>
          <span className={`h-px w-10 ${dark ? 'bg-papel/15' : 'bg-onyx/10'}`} />
          <span className={dark ? 'eyebrow-light' : 'eyebrow'}>{sub}</span>
        </>
      )}
    </div>
  )
}
