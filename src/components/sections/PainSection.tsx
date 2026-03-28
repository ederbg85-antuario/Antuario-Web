'use client'

import { motion } from 'framer-motion'
import { Search, BarChart3, HelpCircle } from 'lucide-react'

const pains = [
  {
    icon: Search,
    text: 'No tengo claro cuánto me cuesta conseguir cada cliente',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    borderHover: 'hover:border-amber-500/20',
    glowColor: 'group-hover:shadow-[0_8px_40px_rgba(245,158,11,0.08)]',
  },
  {
    icon: BarChart3,
    text: 'Mi equipo de ventas pierde tiempo con contactos que no van a comprar',
    color: 'text-violet-500',
    bg: 'bg-violet-50',
    borderHover: 'hover:border-violet-500/20',
    glowColor: 'group-hover:shadow-[0_8px_40px_rgba(167,139,250,0.08)]',
  },
  {
    icon: HelpCircle,
    text: 'Invierto en publicidad pero no puedo medir el retorno real',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    borderHover: 'hover:border-cyan-500/20',
    glowColor: 'group-hover:shadow-[0_8px_40px_rgba(6,182,212,0.08)]',
  },
]

export default function PainSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Soft animated blob */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 animate-float-slow rounded-full bg-amber-500/[0.02] blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mx-auto mb-14 max-w-3xl font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            ¿Tu empresa invierte en marketing pero no sabes si realmente{' '}
            <span className="gradient-text-fresh">está funcionando?</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-3" style={{ perspective: '1000px' }}>
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group rounded-3xl border border-slate-200/60 bg-white p-9 shadow-card-3d transition-all duration-400 ${pain.borderHover} ${pain.glowColor}`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className={`mb-6 inline-flex rounded-3xl ${pain.bg} p-4 shadow-soft`}
              >
                <pain.icon className={`h-6 w-6 ${pain.color}`} />
              </motion.div>
              <p className="text-lg font-semibold leading-relaxed text-slate-900">
                {pain.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center text-base text-slate-500"
        >
          Si te identificas con algo de esto, lo que sigue te interesa.
        </motion.p>
      </div>
    </section>
  )
}
