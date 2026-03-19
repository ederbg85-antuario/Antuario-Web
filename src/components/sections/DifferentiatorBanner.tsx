'use client'

import { motion } from 'framer-motion'

export default function DifferentiatorBanner() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[24px] bg-[#1A1D2B] px-6 py-8 shadow-[0_8px_40px_rgba(0,0,0,0.22),0_24px_80px_rgba(0,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.05)] sm:rounded-[32px] sm:px-14 sm:py-12"
        style={{ transform: 'perspective(1400px) rotateX(1.5deg)' }}
      >
        {/* Ambient inner glows */}
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-antuario-green/12 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-antuario-purple/10 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-antuario-cyan/6 blur-3xl" />

        <div className="relative flex flex-col items-center gap-8 sm:flex-row sm:gap-10">

          {/* Antuario isotipo — flotando con halo pulsante */}
          <div className="relative flex-shrink-0">
            {/* Halo exterior — pulsing ring */}
            <motion.div
              className="absolute -inset-3 rounded-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(0,214,143,0.40) 0%, transparent 72%)',
              }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0.15, 0.7] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Halo interior — faster pulse, different color */}
            <motion.div
              className="absolute -inset-1 rounded-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(139,92,246,0.30) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.05, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            />

            {/* Floating container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }}
            >
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_50px_rgba(0,214,143,0.18)] ring-1 ring-white/[0.08] sm:h-24 sm:w-24">
                {/* Rotating shimmer ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(0,214,143,0.4) 25%, transparent 50%, rgba(139,92,246,0.35) 75%, transparent 100%)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute inset-[1.5px] rounded-2xl bg-[#1A1D2B]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/isotipo.svg"
                  alt="Antuario"
                  className="relative z-10 h-10 w-10 sm:h-14 sm:w-14"
                />
              </div>
            </motion.div>
          </div>

          {/* Text content */}
          <div className="text-center sm:text-left">
            <h3 className="mb-3 font-heading text-xl font-bold text-white sm:text-[28px] lg:text-[30px]">
              Somos muy diferentes al{' '}
              <span className="gradient-text-multicolor">99%</span>{' '}
              de las agencias
            </h3>
            <p className="max-w-2xl text-[14px] leading-relaxed text-white/50 sm:text-[15px]">
              No solo ejecutamos campañas. Construimos tu sistema comercial completo con tecnología propia, agentes de IA y métricas reales que puedes ver en tiempo real.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
