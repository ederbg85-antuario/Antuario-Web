'use client'

import { motion } from 'framer-motion'
import { Globe, Search, Target, Bot, Database, LayoutDashboard, RefreshCw, Award } from 'lucide-react'

const items = [
  { icon: Globe, label: 'Página web profesional', color: 'text-antuario-cyan', bg: 'bg-antuario-cyan-soft', hoverGlow: 'group-hover:shadow-[0_6px_30px_rgba(0,201,219,0.1)]' },
  { icon: Search, label: 'SEO', color: 'text-antuario-purple', bg: 'bg-antuario-purple-soft', hoverGlow: 'group-hover:shadow-[0_6px_30px_rgba(139,92,246,0.1)]' },
  { icon: Target, label: 'Campañas de Google Ads', color: 'text-antuario-orange', bg: 'bg-antuario-orange-soft', hoverGlow: 'group-hover:shadow-[0_6px_30px_rgba(255,122,69,0.1)]' },
  { icon: Bot, label: 'Agentes de IA', color: 'text-antuario-pink', bg: 'bg-antuario-pink-soft', hoverGlow: 'group-hover:shadow-[0_6px_30px_rgba(244,114,182,0.1)]' },
  { icon: Database, label: 'CRM inteligente', color: 'text-antuario-blue', bg: 'bg-antuario-blue-soft', hoverGlow: 'group-hover:shadow-[0_6px_30px_rgba(79,142,255,0.1)]' },
  { icon: LayoutDashboard, label: 'Antuario Dashboard', color: 'text-antuario-green', bg: 'bg-antuario-green-soft', hoverGlow: 'group-hover:shadow-[0_6px_30px_rgba(0,214,143,0.1)]' },
  { icon: RefreshCw, label: 'Optimización mes con mes', color: 'text-antuario-amber', bg: 'bg-antuario-amber-soft', hoverGlow: 'group-hover:shadow-[0_6px_30px_rgba(251,191,36,0.1)]' },
  { icon: Award, label: 'Responsabilidad sobre resultados', color: 'text-antuario-green', bg: 'bg-antuario-green-soft', hoverGlow: 'group-hover:shadow-[0_6px_30px_rgba(0,214,143,0.1)]' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function IncludesSection() {
  return (
    <section id="incluye" className="relative overflow-hidden bg-surface-alt px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Background accents */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-[350px] w-[500px] animate-blob-slow rounded-full bg-antuario-green/[0.02] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[400px] animate-float-slow rounded-full bg-antuario-purple/[0.02] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Todo esto entra en un solo plan mensual
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group flex flex-col items-center gap-4 rounded-[24px] border border-border bg-white p-7 shadow-card-3d transition-all duration-400 ${item.hoverGlow}`}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className={`rounded-2xl ${item.bg} p-3.5 shadow-soft`}
              >
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </motion.div>
              <p className="text-center text-sm font-semibold leading-snug text-text-primary">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center text-base font-medium text-text-secondary"
        >
          Sin costos extras. Sin sorpresas. Un solo precio, todo incluido.
        </motion.p>
      </div>
    </section>
  )
}
