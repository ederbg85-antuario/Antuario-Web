'use client'

import { motion } from 'framer-motion'
import { Eye, Bot, Activity } from 'lucide-react'
import MeshGradientBg from '@/components/common/MeshGradientBg'

const features = [
  {
    icon: Eye,
    title: 'Visión Maestra',
    description: 'Tu embudo comercial completo de un vistazo',
    color: 'text-antuario-cyan',
    bg: 'bg-antuario-cyan-soft',
  },
  {
    icon: Bot,
    title: 'CRM con IA',
    description: 'Tus contactos organizados, calificados y atendidos automáticamente',
    color: 'text-antuario-purple',
    bg: 'bg-antuario-purple-soft',
  },
  {
    icon: Activity,
    title: 'Métricas en tiempo real',
    description: 'Números claros para tomar decisiones, no reportes que nadie lee',
    color: 'text-antuario-green',
    bg: 'bg-antuario-green-soft',
  },
]

export default function PlatformSection() {
  return (
    <section id="plataforma" className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <MeshGradientBg variant="cool" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-antuario-green">
            Antuario Dashboard
          </p>
          <h2 className="mb-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Todo lo que pasa en tu área comercial, en una sola pantalla
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/55">
            Antuario Dashboard es nuestra plataforma. No necesitas saber de tecnología para usarla — en una sola vista puedes saber si las cosas van bien o si algo necesita atención. Tu embudo comercial completo, visible y claro, en tiempo real.
          </p>
        </motion.div>

        {/* Dashboard Screenshot - Large */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          {/* Multi-layer ambient glow */}
          <div className="pointer-events-none absolute -inset-10 rounded-[50px] bg-gradient-to-br from-antuario-cyan/20 via-antuario-green/10 to-antuario-purple/15 blur-3xl" style={{ zIndex: -1 }} />
          <div className="pointer-events-none absolute -inset-6 rounded-[44px] bg-gradient-to-tr from-antuario-green/10 via-transparent to-antuario-cyan/10 blur-2xl" style={{ zIndex: -1 }} />

          <div className="relative mx-auto max-w-5xl rounded-[32px] border border-white/[0.12] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-[3px] shadow-[0_24px_100px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="overflow-hidden rounded-[30px]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-white/[0.05] bg-[#0C0F1A] px-5 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                  <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                  <div className="h-3 w-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="ml-6 flex flex-1 items-center gap-2 rounded-xl bg-white/[0.05] px-4 py-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-antuario-green/60" />
                  <span className="text-xs text-white/20">app.antuario.mx/vision-maestra</span>
                </div>
              </div>
              {/* Real screenshot */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshot-crm.png"
                alt="Antuario Dashboard — Visión Maestra con embudo comercial"
                className="block w-full"
                style={{ maxHeight: '520px', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </div>

          {/* Floating metric badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -left-4 bottom-16 hidden rounded-2xl border border-white/[0.08] bg-[#0C0F1A]/95 px-4 py-3 shadow-elevated backdrop-blur-md xl:block"
          >
            <p className="text-[9px] font-medium uppercase tracking-wider text-white/30">ROAS</p>
            <p className="text-2xl font-bold text-antuario-green">13.2x</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -right-4 top-16 hidden rounded-2xl border border-white/[0.08] bg-[#0C0F1A]/95 px-4 py-3 shadow-elevated backdrop-blur-md xl:block"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-antuario-green" />
              <p className="text-[11px] font-semibold text-antuario-green">Live</p>
            </div>
            <p className="mt-1 text-[9px] text-white/30">Datos en tiempo real</p>
          </motion.div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-[28px] border border-white/[0.05] bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-400 hover:-translate-y-2 hover:border-white/[0.1] hover:bg-white/[0.06]"
            >
              <div className={`mb-5 inline-flex rounded-2xl ${feature.bg} p-3.5 shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/45">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
