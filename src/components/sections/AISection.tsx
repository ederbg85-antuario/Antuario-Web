import SectionWrapper from '@/components/common/SectionWrapper'
import { Bot, MessageSquare, BrainCircuit, TrendingUp, Clock, Sparkles, Smartphone, Zap } from 'lucide-react'

const aiCapabilities = [
  {
    icon: Smartphone,
    title: 'WhatsApp integrado',
    description:
      'Todas las conversaciones de WhatsApp llegan a tu plataforma. El agente IA responde, califica y agenda — sin que pierdas un solo prospecto.',
  },
  {
    icon: BrainCircuit,
    title: 'Entrenado con tu negocio',
    description:
      'El agente conoce tus servicios, precios, procesos y FAQ. Responde como lo haría tu mejor vendedor, 24/7.',
  },
  {
    icon: TrendingUp,
    title: 'Calificación automática',
    description:
      'Identifica prospectos calificados vs. curiosos. Solo escala al equipo humano cuando el lead vale la pena.',
  },
  {
    icon: Clock,
    title: 'Seguimiento inteligente',
    description:
      'Secuencias de seguimiento que se activan por comportamiento real del prospecto, no por calendario arbitrario.',
  },
]

export default function AISection() {
  return (
    <SectionWrapper id="ia">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-purple/10 px-5 py-2 text-sm font-semibold text-accent-purple">
            <Sparkles className="h-3.5 w-3.5" />
            Inteligencia Artificial
          </span>
          <h2 className="mb-6 font-heading text-3xl font-bold text-text-primary sm:text-4xl">Un agente IA</h2>
          <p className="mb-8 text-base leading-relaxed text-text-secondary">Agente entrenado para tu negocio.</p>
          <div className="overflow-hidden rounded-[2rem] bg-navy shadow-card-3d"><p className="p-6 text-sm text-white/80">Chat mockup</p></div>
        </div>
        <div className="space-y-5">{aiCapabilities.map((cap) => {const Icon=cap.icon;return(<div key={cap.title} className="group rounded-xl border border-border-light bg-white p-6 shadow-card"><div className="flex items-start gap-5"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-purple/10"><Icon className="h-5 w-5 text-accent-purple"/></div><div><h3 className="mb-1.5 text-base font-bold text-text-primary">{cap.title}</h3><p className="text-sm leading-relaxed text-text-secondary">{cap.description}</p></div></div></div>);})}</div>
      </div>
    </SectionWrapper>
  )
}
