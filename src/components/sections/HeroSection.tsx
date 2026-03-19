'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { siteConfig } from '@/config/site'
import MeshGradientBg from '@/components/common/MeshGradientBg'

const audienceItems = [
  'Agencias',
  'Despachos de abogados',
  'Despachos contables',
  'Consultoras',
  'Empresas de seguridad',
  'Productoras',
  'Firmas de ingeniería',
  'Empresas de TI',
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % audienceItems.length)
    }, 1400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background pb-0 pt-24 sm:pt-28">
      <MeshGradientBg variant="lsd" />

      {/* White fade overlay — colors emerge from bottom, clean white at top */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(250,250,250,1) 0%, rgba(250,250,250,0.90) 22%, rgba(250,250,250,0.50) 48%, transparent 68%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: Copy */}
          <div className="pb-10 sm:pb-20 lg:pb-28">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/60 px-4 py-2 shadow-soft backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-antuario-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-antuario-green" />
                </span>
                <span className="text-xs font-medium tracking-wide text-text-secondary">
                  IA + Marketing + Ventas
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 font-heading text-[26px] font-bold leading-[1.14] tracking-tight text-text-primary sm:text-[32px] lg:text-[38px]"
            >
              Impulsamos las ventas y el crecimiento de tu empresa de servicios{' '}
              <span className="gradient-text-multicolor">B2B</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-5 max-w-lg text-[14px] leading-relaxed text-text-secondary sm:text-[15px]"
            >
              Combinamos IA, marketing, estrategia de ventas y nuestra propia plataforma para que tu área comercial funcione con números claros, resultados reales y total transparencia.
            </motion.p>

            {/* Rotating audience text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-8 flex flex-wrap items-center gap-2"
            >
              <span className="text-[14px] font-semibold text-text-secondary">Perfecto para:</span>
              <span className="relative inline-block h-[28px] w-[160px] overflow-hidden sm:w-[220px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute left-0 top-0 whitespace-nowrap rounded-full bg-[#1A1D2B]/[0.07] px-3 py-0.5 text-[14px] font-bold text-[#1A1D2B] ring-1 ring-[#1A1D2B]/10 backdrop-blur-sm"
                  >
                    {audienceItems[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#1A1D2B] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:scale-[1.02] sm:w-auto sm:py-3 sm:text-[13px]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Solicita tu diagnóstico gratis
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#plataforma"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/[0.08] bg-white/60 px-5 py-3.5 text-[14px] font-semibold text-text-primary shadow-soft backdrop-blur-md transition-all duration-300 hover:border-black/12 hover:bg-white/80 sm:w-auto sm:py-3 sm:text-[13px]"
              >
                <Sparkles className="h-3.5 w-3.5 text-antuario-purple" />
                Pide una demo
              </a>
            </motion.div>
          </div>

          {/* Right: Real Platform Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
            style={{ perspective: '1200px' }}
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-gradient-to-br from-antuario-green/20 via-antuario-cyan/10 to-antuario-purple/15 blur-3xl" style={{ zIndex: -1 }} />
            <div className="pointer-events-none absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-antuario-purple/10 via-transparent to-antuario-green/10 blur-2xl" style={{ zIndex: -1 }} />

            <motion.div
              style={{ rotateY: -4, rotateX: 3 }}
              className="relative rounded-[28px] border border-black/[0.08] bg-gradient-to-b from-white/80 to-white/50 p-[3px] shadow-[0_20px_80px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur-sm"
            >
              <div className="overflow-hidden rounded-[26px] bg-[#10131F]">
                <div className="flex items-center gap-2 border-b border-white/[0.05] bg-[#0C0F1A] px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="ml-3 flex flex-1 items-center gap-1.5 rounded-lg bg-white/[0.05] px-3 py-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-antuario-green/60" />
                    <span className="text-[10px] text-white/25">app.antuario.mx/bandeja-entrada</span>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshot-dashboard.png"
                  alt="Antuario Dashboard — Bandeja de entrada con agente IA"
                  className="block w-full"
                  style={{ maxHeight: 'clamp(200px, 40vw, 420px)', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 hidden items-center gap-2 rounded-xl border border-black/[0.06] bg-white/90 px-3.5 py-2 shadow-elevated backdrop-blur-md sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-antuario-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-antuario-green" />
              </span>
              <span className="text-[11px] font-semibold text-text-primary">Agente IA activo</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Rounded divider */}
      <div className="relative z-10 -mb-1 mt-8">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V24C0 10.7452 10.7452 0 24 0H1416C1429.25 0 1440 10.7452 1440 24V60H0Z" fill="#FAFAFA" />
        </svg>
      </div>
    </section>
  )
}
