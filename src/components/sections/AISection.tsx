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
          <h2 className="mb-6 font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-4.5xl">
            Un agente IA que atiende{' '}
            <span className="text-accent-purple">tus WhatsApp 24/7.</span>
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-text-secondary">
            Dentro de tu plataforma Antuario, cada conversación de WhatsApp es gestionada por un agente
            de IA entrenado con el contexto de tu negocio. No es un chatbot genérico — es un vendedor
            digital que califica, responde y agenda por ti.
          </p>
          <p className="mb-8 text-base leading-relaxed text-text-secondary">
            Cuando el prospecto está listo, el agente escala la conversación a tu equipo humano con
            todo el contexto. Sin fricción, sin perder información.
          </p>

          {/* WhatsApp Chat Mockup — premium 3D card */}
          <div className="overflow-hidden rounded-[2rem] bg-navy shadow-card-3d">
            <div className="flex items-center gap-3 border-b border-white/8 px-6 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-green/20">
                <Smartphone className="h-5 w-5 text-accent-green" />
              </div>
              <div>
                <span className="text-sm font-semibold text-white">WhatsApp Business</span>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                  <span className="text-xs text-accent-green">Agente IA activo</span>
                </div>
              </div>
              <div className="ml-auto rounded-lg bg-white/5 px-3 py-1">
                <span className="text-xs text-white/40">Plataforma Antuario</span>
              </div>
            </div>
            <div className="space-y-3 p-6">
              {/* Prospect message */}
              <div className="max-w-[80%]">
                <div className="rounded-2xl rounded-tl-md bg-white/8 px-4 py-3">
                  <p className="text-sm text-white/80">
                    Hola, vi su página. Tenemos una empresa de servicios de TI y necesitamos generar más leads B2B. ¿Qué planes manejan?
                  </p>
                </div>
                <p className="mt-1 text-[10px] text-white/30">10:23 AM</p>
              </div>
              {/* AI response */}
              <div className="ml-auto max-w-[80%]">
                <div className="rounded-2xl rounded-tr-md bg-primary/20 px-4 py-3">
                  <p className="text-sm text-white">
                    Hola, gracias por escribirnos. Para empresas de TI B2B tenemos un sistema que incluye página web optimizada, SEO y Google Ads. El plan Crecimiento sería ideal para ustedes. ¿Te gustaría agendar una llamada de 30 min para hacer un diagnóstico sin costo?
                  </p>
                </div>
                <div className="mt-1 flex items-center justify-end gap-1.5">
                  <Sparkles className="h-3 w-3 text-accent-purple/60" />
                  <p className="text-[10px] text-accent-purple/60">Agente IA</p>
                  <p className="text-[10px] text-white/30">10:23 AM</p>
                </div>
              </div>
              {/* Prospect reply */}
              <div className="max-w-[80%]">
                <div className="rounded-2xl rounded-tl-md bg-white/8 px-4 py-3">
                  <p className="text-sm text-white/80">
                    Sí, me interesa. ¿Tienen disponibilidad mañana por la mañana?
                  </p>
                </div>
              </div>
              {/* Status bar */}
              <div className="flex items-center gap-2 rounded-xl bg-accent-purple/10 px-4 py-2.5">
                <Bot className="h-4 w-4 text-accent-purple" />
                <span className="text-xs font-medium text-accent-purple">El agente IA está calificando y agendando esta cita automáticamente</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {aiCapabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <div
                key={cap.title}
                className="group rounded-[1.5rem] border border-border-light bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-3d"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent-purple/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-base font-bold text-text-primary">{cap.title}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">{cap.description}</p>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Emphasis card */}
          <div className="rounded-[1.5rem] bg-gradient-to-br from-accent-purple/5 to-primary/5 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-accent-purple" />
              <p className="text-sm font-semibold text-text-primary">
                Todo dentro de tu plataforma Antuario — no necesitas herramientas externas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
