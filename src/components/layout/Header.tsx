'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Logo from '@/components/common/Logo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={cn(
          'mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 sm:px-7',
          isScrolled
            ? 'bg-white/90 shadow-elevated backdrop-blur-2xl'
            : 'border border-white/[0.06] bg-[#080A14]/95 shadow-[0_4px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl'
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo variant={isScrolled ? 'dark' : 'light'} height={28} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-0 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-[13px] font-medium transition-all duration-300',
                  isScrolled
                    ? isActive
                      ? 'bg-background font-semibold text-text-primary'
                      : 'text-text-secondary hover:bg-background hover:text-text-primary'
                    : isActive
                    ? 'bg-white/[0.12] font-semibold text-white'
                    : 'text-white/65 hover:bg-white/[0.08] hover:text-white'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* CTA Desktop */}
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'hidden rounded-xl px-5 py-1.5 text-[13px] font-semibold transition-all duration-300 hover:scale-[1.02] md:block',
            isScrolled
              ? 'btn-shine overflow-hidden bg-[#1A1D2B] text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)]'
              : 'bg-white text-[#1A1D2B] shadow-[0_2px_12px_rgba(255,255,255,0.18)] hover:bg-white/90 hover:shadow-[0_4px_20px_rgba(255,255,255,0.25)]'
          )}
        >
          Diagnóstico gratis
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'rounded-lg p-1.5 transition-colors duration-300 md:hidden',
            isScrolled
              ? 'text-text-secondary hover:bg-background'
              : 'text-white/65 hover:bg-white/[0.08] hover:text-white'
          )}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-[1400px] overflow-hidden rounded-2xl border border-border bg-white/95 shadow-elevated-lg backdrop-blur-xl md:hidden"
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
                        ? 'bg-background font-semibold text-text-primary'
                        : 'text-text-secondary hover:bg-background hover:text-text-primary'
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
                className="btn-shine mt-1 overflow-hidden rounded-xl bg-[#1A1D2B] px-5 py-2.5 text-center text-[15px] font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all hover:scale-[1.02]"
              >
                Diagnóstico gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
