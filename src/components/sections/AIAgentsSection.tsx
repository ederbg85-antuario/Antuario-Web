'use client'

import { motion } from 'framer-motion'
import { Bot, MessageSquare, UserCheck, FileSearch, Zap } from 'lucide-react'
import MeshGradientBg from '@/components/common/MeshGradientBg'

const capabilities = [
  {
    icon: MessageSquare,
    title: 'Atiende WhatsApp y correos',
    description: 'Responde profesionalmente a cada persona que contacta tu empresa, de día y de noche.',
    color: 'text-antuario-green',
    bg: 'bg-antuario-green/10',
    border: 'border-antuario-green/10',
  },
  {
    icon: UserCheck,
    title: 'Califica leads automáticamente',
    description: 'Identifica quién tiene potencial real de compra y quién solo está preguntando.',
    color: 'text-antuario-purple',
    bg: 'bg-antuario-purple/10',
    border: 'border-antuario-purple/10',
  },
  {
    icon: FileSearch,
    title: 'Investiga cada contacto',
    description: 'Busca información de la empresa, perfil profesional y contexto antes de pasarlo a ventas.',
    color: 'text-antuario-cyan',
    bg: 'bg-antuario-cyan/10',
    border: 'border-antuario-cyan/10',
  },
  {
    icon: Zap,
    title: 'Prepara el perfil completo',
    description: 'Tu equipo recibe oportunidades listas para cerrar, con toda la información que necesitan.',
    color: 'text-antuario-orange',
    bg: 'bg-antuario-orange/10',
    border: 'border-antuario-orange/10',
  },
]

export default function AIAgentsSection() {
  return (
    <section id="ia" className="relative overflow-hidden bg-background px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <MeshGradientBg variant="lsd" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Chat mockup */}
            <div className="relative rounded-[24px] border border-black/[0.06] bg-white/70 p-5 shadow-card backdrop-blur-md">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-antuario-green/15">
                  <Bot className="h-5 w-5 text-antuario-green" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">Agente IA Antuario</p>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-antuario-green" />
                    <span className="text-[11px] text-antuario-green">Activo · WhatsApp</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="max-w-[75%] rounded-2xl rounded-tl-md bg-surface-alt px-3.5 py-2.5"
                >
                  <p className="text-[13px] text-text-secondary">Hola, me interesa una cotización para un evento corporativo de 200 personas.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="ml-auto max-w-[75%] rounded-2xl rounded-tr-md bg-antuario-green/10 px-3.5 py-2.5"
                >
                  <p className="text-[13px] text-text-primary">¡Excelente! ¿Me puedes compartir el nombre de tu empresa y la fecha del evento?</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="max-w-[75%] rounded-2xl rounded-tl-md bg-surface-alt px-3.5 py-2.5"
                >
                  <p className="text-[13px] text-text-secondary">Soy de Grupo Modelo, para el 15 de abril.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="flex items-center gap-2 rounded-2xl bg-antuario-purple/10 px-3.5 py-2"
                >
                  <FileSearch className="h-3.5 w-3.5 text-antuario-purple" />
                  <p className="text-[11px] font-medium text-antuario-purple">Investigando: Grupo Modelo · Generando perfil...</p>
                </motion.div>
              </div>

              {/* Stats bar */}
              <div className="mt-4 flex gap-3 rounded-xl bg-surface-alt/80 p-3">
                {[
                  { label: 'Hoy', value: '12', color: 'text-antuario-green' },
                  { label: 'Calificados', value: '4', color: 'text-antuario-cyan' },
                  { label: 'Respuesta', value: '<30s', color: 'text-antuario-amber' },
                ].map((stat) => (
                  <div key={stat.label} className="flex-1 text-center">
                    <p className={`text-base font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-[9px] text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: copy + capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-[12px] font-bold uppercase tracking-widest text-antuario-purple">
              Inteligencia Artificial
            </p>
            <h2 className="mb-4 font-heading text-[28px] font-extrabold leading-tight tracking-tight text-text-primary sm:text-[34px]">
              Agentes de IA que trabajan para ti,{' '}
              <span className="gradient-text-multicolor">sin descanso</span>
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-text-secondary">
              Nuestros agentes no son chatbots genéricos. Son asistentes inteligentes que entienden tu negocio, atienden a tus prospectos y preparan todo para que tu equipo solo se enfoque en cerrar.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className={`group rounded-2xl border ${cap.border} bg-white/60 p-4 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-card`}
                >
                  <div className={`mb-2.5 inline-flex rounded-xl ${cap.bg} p-2`}>
                    <cap.icon className={`h-4 w-4 ${cap.color}`} />
                  </div>
                  <h3 className="mb-1 text-[13px] font-bold text-text-primary">{cap.title}</h3>
                  <p className="text-[11px] leading-relaxed text-text-muted">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
