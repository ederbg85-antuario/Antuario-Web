'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Logo from '@/components/common/Logo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOnDark, setIsOnDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
      setIsOnDark(false)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const logoVariant = isScrolled ? 'dark' : isOnDark ? 'light' : 'dark'

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={cn(
          'mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 sm:px-7',
          isScrolled
            ? 'bg-white/85 shadow-elevated backdrop-blur-2xl'
            : 'bg-white/50 shadow-[0_2px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl'
        )}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center"
        >
          <Logo variant={logoVariant} height={28} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-0 md:flex">
          {siteConfig.nav.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                'rounded-lg px-3 py-1.5 text-[13px] font-medium transition-all duration-300',
                isScrolled
                  ? 'text-text-secondary hover:bg-background hover:text-text-primary'
                  : 'text-text-secondary hover:bg-black/[0.03] hover:text-text-primary'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Desktop */}
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'hidden rounded-xl px-5 py-1.5 text-[13px] font-semibold transition-all duration-300 md:block',
            isScrolled
              ? 'btn-shine overflow-hidden bg-[#1A1D2B] text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] hover:scale-[1.02]'
              : 'btn-shine overflow-hidden bg-[#1A1D2B] text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] hover:scale-[1.02]'
          )}
        >
          Diagnóstico gratis
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'rounded-lg p-1.5 md:hidden',
            isScrolled
              ? 'text-text-secondary hover:bg-background'
              : 'text-text-secondary hover:bg-black/[0.03]'
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
              {siteConfig.nav.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="rounded-xl px-4 py-2.5 text-left text-[15px] font-medium text-text-secondary transition-colors hover:bg-background hover:text-text-primary"
                >
                  {item.label}
                </button>
              ))}
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
