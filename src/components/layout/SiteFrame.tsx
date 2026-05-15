'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

type SectionTheme = 'dark' | 'light'

export function AntuarioMark({
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
  const useSolidOnyx = atTop && isDark

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 sm:top-4">
      <div className="pointer-events-auto mx-auto w-full max-w-[1440px] px-[clamp(10px,2.4vw,24px)]">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-700 ease-out sm:px-5 sm:py-2.5 ${
            useSolidOnyx
              ? 'bg-onyx text-papel'
              : isDark
              ? 'float-bar-dark text-papel'
              : 'float-bar-light text-onyx'
          }`}
        >
          <Link
            href="/"
            className="relative flex h-8 items-center overflow-visible sm:h-9"
            style={{
              width: showLogotype ? 192 : 38,
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
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-colors sm:inline-flex ${
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
              style={!isDark ? { background: 'rgba(10,10,10,0.06)' } : undefined}
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

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
                          <p className="text-[13px] font-medium text-papel">{s.label}</p>
                          <p className="mt-0.5 truncate text-[11px] text-papel/45">{s.short}</p>
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

export function FloatingFooter() {
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
              Agencia de marketing digital en CDMX. Soluciones de marketing
              digital a la medida — bajo una sola dirección, con
              accountability total sobre cada resultado.
            </p>
            <div className="mt-6 flex items-center gap-3">
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
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-papel"
              >
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

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<SectionTheme>('dark')
  const [showLogotype, setShowLogotype] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-theme]')
    )

    let raf = 0
    let pending = false
    const compute = () => {
      pending = false
      const probeY = 88
      let current: SectionTheme = 'dark'
      if (sections.length > 0) {
        for (const s of sections) {
          const r = s.getBoundingClientRect()
          if (r.top <= probeY && r.bottom > probeY) {
            current = (s.dataset.theme as SectionTheme) || 'light'
            break
          }
        }
      }
      setTheme(current)

      const trigger = Math.min(window.innerHeight * 0.55, 420)
      const y = window.scrollY
      setShowLogotype(y < trigger)
      setAtTop(y < 24)
    }

    const onScroll = () => {
      if (pending) return
      pending = true
      raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
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
      <main className="relative">{children}</main>
      <FloatingFooter />
    </>
  )
}

export { WhatsAppIcon }
