import SectionWrapper from '@/components/common/SectionWrapper'
import { Megaphone, Settings, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

const phases = [
  {
    number: '01',
    icon: Megaphone,
    title: 'Generación de Demanda',
    subtitle: 'Atraer al cliente ideal — con sistema',
    description:
      'Activamos tus 3 activos (Web + SEO + Google Ads) con seguimiento de conversiones end-to-end. Cada canal medido desde la primera impresión hasta el cierre del cliente.',
    items: [
      'Google Ads con tracking: clic → lead → propuesta → cliente',
      'SEO con seguimiento de posiciones y conversiones orgánicas',
      'Página web con copywriting y UX de conversión B2B',
      'Google Business Profile optimizado y medido',
    ],
    color: 'primary' as const,
  },
  {
    number: '02',
    icon: Settings,
    title: 'Operación Comercial',
    subtitle: 'Convertir interés en ingresos — con accountability',
    description:
      'Tu CRM dentro de la plataforma Antuario. Cada lead tiene seguimiento, cada propuesta tiene fecha, cada tarea tiene un responsable asignado.',
    items: [
      'CRM con embudo comercial y pipeline en tiempo real',
      'WhatsApp integrado con agente IA de atención 24/7',
      'Sistema de accountability: tareas con dueño y deadline',
      'Propuestas y cotizaciones con tracking de apertura',
    ],
    color: 'green' as const,
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Optimización Continua',
    subtitle: 'Mejorar mes a mes — con datos reales',
    description:
      'Analizamos cada tramo del embudo, detectamos cuellos de botella con IA y optimizamos con datos. No con opiniones, no con intuición.',
    items: [
      'Semáforo de salud con KPIs automatizados',
      'Insights generados por IA sobre tus datos reales',
      'Optimización semanal de campañas y contenido',
      'Reportes ejecutivos con métricas que importan',
    ],
    color: 'purple' as const,
  },
]

const colorMap = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    icon: 'text-primary',
    border: 'border-primary/15',
    gradient: 'from-primary/5 to-transparent',
  },
  green: {
    bg: 'bg-accent-green/10',
    text: 'text-accent-green',
    icon: 'text-accent-green',
    border: 'border-accent-green/15',
    gradient: 'from-accent-green/5 to-transparent',
  },
  purple: {
    bg: 'bg-accent-purple/10',
    text: 'text-accent-purple',
    icon: 'text-accent-purple',
    border: 'border-accent-purple/15',
    gradient: 'from-accent-purple/5 to-transparent',
  },
}

export default function SystemSection() {
  return (
    <SectionWrapper id="sistema" className="bg-white">
      <div className="mb-16 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary-dark">
          <span className="h-2 w-2 rounded-full bg-primary" />
          El Sistema
        </span>
        <h2 className="mb-5 font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-4.5xl">
          Tres fases. Un sistema.{' '}
          <span className="text-primary">Todo conectado.</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-text-secondary">
          Desde la primera impresión hasta el cierre del cliente — todo medido en un solo dashboard
          con un sistema de trabajo basado en accountability.
        </p>
      </div>

      <div className="space-y-6">
        {phases.map((phase) => {
          const Icon = phase.icon
          const colors = colorMap[phase.color]
          return (
            <div
              key={phase.number}
              className={`group relative overflow-hidden rounded-[2rem] border ${colors.border} bg-gradient-to-r ${colors.gradient} p-8 shadow-card transition-all duration-500 hover:shadow-card-3d lg:p-10`}
            >
              {/* Phase number watermark */}
              <span className={`pointer-events-none absolute -right-2 -top-6 select-none text-[10rem] font-black leading-none ${colors.text} opacity-[0.06]`}>
                {phase.number}
              </span>

              <div className="relative grid gap-8 lg:grid-cols-2">
                <div>
                  <div className="mb-5 flex items-center gap-4">
                    <span className={`text-xs font-bold uppercase tracking-widest ${colors.text}`}>
                      Fase {phase.number}
                    </span>
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${colors.bg} shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`h-5 w-5 ${colors.icon}`} />
                    </div>
                  </div>
                  <h3 className="mb-1 text-2xl font-bold text-text-primary">
                    {phase.title}
                  </h3>
                  <p className={`mb-4 text-sm font-semibold ${colors.text}`}>
                    {phase.subtitle}
                  </p>
                  <p className="text-base text-text-secondary">{phase.description}</p>
                </div>
                <div>
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-xl bg-white/60 p-3 backdrop-blur-sm">
                        <CheckCircle2 className={`mt-0.5 h-4 w-4 flex-shrink-0 ${colors.icon}`} />
                        <span className="text-sm font-medium text-text-primary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
