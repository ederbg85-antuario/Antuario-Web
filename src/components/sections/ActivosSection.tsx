'use client'

import { motion } from 'framer-motion'
import { Globe, Search, Target } from 'lucide-react'

const activos = [
  {
    icon: Globe,
    title: 'Página Web Profesional',
    description: 'Diseñada para convertir visitantes en contactos. Rápida, optimizada para móviles y preparada para posicionarse en Google.',
    color: 'text-antuario-cyan',
    bg: 'bg-antuario-cyan-soft',
    glowColor: 'group-hover:shadow-[0_8px_40px_rgba(0,201,219,0.12)]',
    accentGradient: 'from-antuario-cyan/20 to-transparent',
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Optimización para que tu empresa aparezca en los primeros resultados de búsqueda cuando alguien busca tus servicios.',
    color: 'text-antuario-purple',
    bg: 'bg-antuario-purple-soft',
    glowColor: 'group-hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]',
    accentGradient: 'from-antuario-purple/20 to-transparent',
  },
  {
    icon: Target,
    title: 'Campañas de Google Ads',
    description: 'Publicidad inteligente que muestra tu empresa a personas que ya están buscando lo que ofreces. Medimos cada peso invertido.',
    color: 'text-antuario-orange',
    bg: 'bg-antuario-orange-soft',
    glowColor: 'group-hover:shadow-[0_8px_40px_rgba(255,122,69,0.12)]',
    accentGradient: 'from-antuario-orange/20 to-transparent',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function ActivosSection() {
  return (
    <section id="activos" className="relative overflow-hidden bg-surface-alt px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Background accents */}
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] animate-blob-slow rounded-full bg-antuario-cyan/[0.03] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[350px] w-[350px] animate-float-slow rounded-full bg-antuario-purple/[0.02] blur-[130px]" />

      <div className="relative mx-auto max-w-6xl" style={{ perspective: '1200px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-antuario-cyan">
            Tus activos digitales
          </p>
          <h2 className="mb-5 font-heading text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Las herramientas que trabajan por ti,{' '}
            <span className="gradient-text-fresh">24/7</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Construimos los activos digitales que tu empresa necesita para ser encontrada, generar interés y captar clientes potenciales de forma continua.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-3">
          {activos.map((activo, i) => (
            <motion.div
              key={activo.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
              className={`group relative overflow-hidden rounded-[28px] border border-border bg-white p-8 shadow-card-3d transition-shadow duration-400 ${activo.glowColor}`}
            >
              {/* Subtle gradient accent on hover */}
              <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-radial ${activo.accentGradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className={`relative mb-6 inline-flex rounded-2xl ${activo.bg} p-4 shadow-soft`}
              >
                <activo.icon className={`h-7 w-7 ${activo.color}`} />
              </motion.div>
              <h3 className="relative mb-3 text-xl font-bold text-text-primary">{activo.title}</h3>
              <p className="relative text-base leading-relaxed text-text-secondary">
                {activo.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
