'use client'

import { motion } from 'framer-motion'
import { X, Check, Sparkles } from 'lucide-react'

const columns = [
  {
    label: 'La agencia típica',
    icon: X,
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-500',
    bg: 'bg-gradient-to-b from-red-500/[0.03] to-white border-red-500/10',
    textColor: 'text-slate-500',
    labelColor: 'text-red-500',
    copy: 'Cobra por tareas, entrega reportes que nadie entiende y no se hace responsable de los resultados.',
  },
  {
    label: 'Nosotros',
    icon: Check,
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    bg: 'bg-gradient-to-b from-emerald-500/[0.06] to-white border-emerald-500/20',
    textColor: 'text-slate-900',
    labelColor: 'text-emerald-500',
    copy: 'Trabajamos por resultados, con tecnología propia, IA integrada y total transparencia. Si algo no funciona, los números nos lo dicen y lo arreglamos.',
    highlight: true,
  },
  {
    label: 'El resultado',
    icon: Sparkles,
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-500',
    bg: 'bg-gradient-to-b from-cyan-500/[0.04] to-white border-emerald-500/15',
    textColor: 'text-slate-900',
    labelColor: 'text-emerald-600',
    copy: 'Una estructura comercial que genera clientes de forma recurrente, medible y predecible para tu empresa.',
  },
]

export default function DifferentiatorSection() {
  return (
    <section id="diferencia" className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Subtle background */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[500px] animate-float-slow rounded-full bg-emerald-500/[0.02] blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            No somos una agencia de marketing{' '}
            <span className="gradient-text-multicolor">convencional</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-3" style={{ perspective: '1000px' }}>
          {columns.map((col, i) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 30, rotateX: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group relative overflow-hidden rounded-3xl border p-9 shadow-card-3d transition-all duration-400 hover:shadow-card-3d-hover ${col.bg} ${col.highlight ? 'ring-1 ring-emerald-500/20' : ''}`}
            >
              {/* Icon */}
              <div className={`mb-4 inline-flex rounded-xl ${col.iconBg} p-2.5`}>
                <col.icon className={`h-5 w-5 ${col.iconColor}`} />
              </div>
              <p className={`mb-5 text-sm font-bold uppercase tracking-wider ${col.labelColor}`}>
                {col.label}
              </p>
              <p className={`text-base leading-relaxed text-slate-900`}>
                {col.copy}
              </p>

              {/* Highlight glow for "Nosotros" */}
              {col.highlight && (
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
