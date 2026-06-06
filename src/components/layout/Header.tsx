'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Logo from '@/components/common/Logo'

/** Calcula el brillo percibido (0–255) de un color rgb/rgba */
function getBrightness(rgb: string): number {
  const match = rgb.match(/[\d.]+/g)
  if (!match || match.length < 3) return 255
  const r = parseFloat(match[0])
  const g = parseFloat(match[1])
  const b = parseFloat(match[2])
  return 0.299 * r + 0.587 * g + 0.114 * b
}

/** Recorre el DOM hacia arriba buscando el primer color de fondo opaco */
function getEffectiveBgBrightness(el: Element | null): number {
  let node: Element | null = el
  while (node && node !== document.documentElement) {
    const style = window.getComputedStyle(node)
    const bg = style.backgroundColor
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      // Si el alpha es 0, seguir buscando
      const parts = bg.match(/[\d.]+/g)
      if (parts && parts.length >= 4 && parseFloat(parts[3]) === 0) {
        node = node.parentElement
        continue
      }
      return getBrightness(bg)
    }
    node = node.parentElement
  }
  // Fallback: body background (#f1f5f9) es claro
  return 241
}

export default function Header() {
  const [isDarkBg, setIsDarkBg] = useState(true) // Hero es oscuro por defecto
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  const detectBackground = useCallback(() => {
    const header = headerRef.current
    if (!header) return

    const rect = header.getBoundingClientRect()
    const x = window.innerWidth / 2
    // Punto justo debajo del nav, para detectar la sección que está detrás
    const y = rect.bottom + 8

    // Desactivar pointer-events para que elementFromPoint "vea" a través del header
    header.style.pointerEvents = 'none'
    const el = document.elementFromPoint(x, y)
    header.style.pointerEvents = ''

    if (el) {
      const brightness = getEffectiveBgBrightness(el)
      setIsDarkBg(brightness < 140)
    }
  }, [])

  useEffect(() => {
    detectBackground()
    window.addEventListener('scroll', detectBackground, { passive: true })
    window.addEventListener('resize', detectBackground, { passive: true })
    return () => {
      window.removeEventListener('scroll', detectBackground)
      window.removeEventListener('resize', detectBackground)
    }
  }, [detectBackground])

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header ref={headerRef} className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-5">
      <nav
        className={cn(
          'mx-auto flex max-w-[1200px] items-center justify-between rounded-2xl px-5 py-2.5 transition-all duration-500 sm:px-6',
          isDarkBg
            ? 'border border-white/[0.10] bg-[#0f0f0f]/38 shadow-[0_8px_48px_rgba(0,0,0,0.45),_0_1px_0_rgba(255,255,255,0.06)_inset]'
            : 'bg-white/45 shadow-[0_8px_48px_rgba(0,0,0,0.12),_0_2px_8px_rgba(0,0,0,0.06),_0_0_0_1px_rgba(148,163,184,0.18),_0_1px_0_rgba(255,255,255,0.9)_inset]'
        )}
        style={{
          backdropFilter: 'blur(32px) saturate(200%) brightness(1.02)',
          WebkitBackdropFilter: 'blur(32px) saturate(200%) brightness(1.02)',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo variant={isDarkBg ? 'light' : 'dark'} height={26} />
        </Link>

        {/* Navegación Desktop */}
        <div className="hidden items-center gap-0.5 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-xl px-3.5 py-1.5 text-[13px] font-medium transition-all duration-300',
                  isDarkBg
                    ? isActive
                      ? 'bg-white/[0.1] font-semibold text-white'
                      : 'text-white/60 hover:bg-white/[0.06] hover:text-white'
                    : isActive
                    ? 'bg-slate-100 font-semibold text-slate-900'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* CTA Desktop */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'btn-shine inline-flex items-center gap-2 overflow-hidden rounded-xl px-5 py-1.5 text-[13px] font-semibold transition-all duration-300 hover:scale-[1.02]',
              isDarkBg
                ? 'bg-white text-slate-900 shadow-[0_2px_12px_rgba(255,255,255,0.15)] hover:bg-white/95'
                : 'bg-slate-900 text-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.18)]'
            )}
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Cuéntanos tu proyecto
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'rounded-xl p-2 transition-colors duration-300 md:hidden',
            isDarkBg
              ? 'text-white/60 hover:bg-white/[0.08] hover:text-white'
              : 'text-slate-500 hover:bg-slate-50'
          )}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menú Móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass-card mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 pb-4 pt-2">
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-xl px-4 py-2.5 text-left text-[15px] font-medium transition-colors',
                      isActive
                        ? 'bg-slate-100 font-semibold text-slate-900'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine mt-1 flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-slate-900 px-5 py-2.5 text-center text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all hover:scale-[1.02]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Cuéntanos tu proyecto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
