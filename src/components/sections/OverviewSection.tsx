import SectionWrapper from '@/components/common/SectionWrapper'
import { Globe, LayoutDashboard, Bot, TrendingUp, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: Globe,
    number: '01',
    title: '3 Activos Digitales',
    subtitle: 'Página web + SEO + Google Ads',
    description:
      'Implementamos tres activos valiosísimos en el mes 1: una página web diseñada para convertir, SEO para generar demanda recurrente gratuita, y Google Ads para activar demanda inmediata.',
    color: 'primary' as const,
  },
  {
    icon: LayoutDashboard,
    number: '02',
    title: 'Plataforma en Tiempo Real',
    subtitle: 'Dashboard con embudo completo',
    description:
      'Tu propio dashboard donde puedes medir todo el embudo: desde la primera impresión hasta el cierre del cliente. Sesiones, leads, propuestas, cierres — todo en un solo lugar, 24/7.',
    color: 'cyan' as const,
  },
  {
    icon: Bot,
    number: '03',
    title: 'Agente IA en WhatsApp',
    subtitle: 'Atención y calificación 24/7',
    description:
      'Un agente de inteligencia artificial que atiende tus conversaciones de WhatsApp, califica prospectos, responde preguntas y agenda citas — todo dentro de tu plataforma Antuario.',
    color: 'purple' as const,
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Optimización Continua',
    subtitle: 'Mejoramos mes con mes',
    description:
      'Nos encargamos de mejorar tus resultados específicos cada mes. Nuestro KPI: reducir tu Costo por Lead Relevante (CPLR) mientras incrementamos el volumen de prospectos calificados.',
    color: 'green' as const,
  },
]

const colorMap = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/20',
    iconBg: 'bg-primary/10',
  },
  cyan: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/20',
    iconBg: 'bg-primary/10',
  },
  purple: {
    bg: 'bg-accent-purple/10',
    text: 'text-accent-purple',
    border: 'border-accent-purple/20',
    iconBg: 'bg-accent-purple/10',
  },
  green: {
    bg: 'bg-accent-green/10',
    text: 'text-accent-green',
    border: 'border-accent-green/20',
    iconBg: 'bg-accent-green/10',
  },
}

export default function OverviewSection() {
  return (
    <SectionWrapper id="overview">
      <div className="mb-16 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary-dark">
          <span className="h-2 w-2 rounded-full bg-primary" />
          ¿Qué incluye el sistema?
        </span>
        <h2 className="mb-5 font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-4.5xl">
          Todo lo que necesitas para{' '}
          <span className="text-primary">generar clientes B2B.</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-text-secondary">
          No es una campaña suelta. Es un sistema comercial integral con 4 pilares
          que trabajan juntos para ti.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {pillars.map((pillar) => {
          const Icon = pillar.icon
          const colors = colorMap[pillar.color]
          return (
            <div
              key={pillar.number}
              className={`group relative overflow-hidden rounded-[2rem] border ${colors.border} bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-3d`}
            >
              {/* Number watermark */}
              <span
                className={`pointer-events-none absolute -right-2 -top-4 select-none text-[8rem] font-black leading-none ${colors.text} opacity-[0.05]`}
              >
                {pillar.number}
              </span>

              <div className="relative">
                <div className="mb-5 flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl ${colors.iconBg} shadow-soft transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`h-7 w-7 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary">{pillar.title}</h3>
                    <p className={`text-sm font-semibold ${colors.text}`}>{pillar.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-text-secondary">
                  {pillar.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom link */}
      <div className="mt-10 text-center">
        <a
          href="#activos"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          Conoce cada activo a detalle
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </SectionWrapper>
  )
}
