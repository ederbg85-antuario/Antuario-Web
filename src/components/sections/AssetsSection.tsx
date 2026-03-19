import SectionWrapper from '@/components/common/SectionWrapper'
import { Globe, Search, Zap, ArrowRight, TrendingUp, Target, BarChart3 } from 'lucide-react'

const assets = [
  {
    number: '01',
    icon: Globe,
    accentIcon: Target,
    title: 'Página Web',
    subtitle: 'Diseñada para convertir',
    description:
      'No es un sitio bonito. Es una máquina de conversión. Diseñada con estrategia de conversión, copywriting enfocado en tu cliente ideal y medición de cada clic hasta la cotización.',
    highlights: [
      'Copywriting estratégico orientado a tu ICP',
      'Diseño UX optimizado para conversión B2B',
      'Tracking completo: sesiones → leads → clientes',
      'Velocidad y SEO técnico desde el día 1',
    ],
    color: 'primary' as const,
    gradient: 'from-primary/10 to-primary/5',
  },
  {
    number: '02',
    icon: Search,
    accentIcon: TrendingUp,
    title: 'SEO',
    subtitle: 'Demanda recurrente y gratuita',
    description:
      'Posicionamos tu negocio en Google de forma orgánica. Cada mes que pasa, tu flujo de prospectos crece sin pagar por clic. Es el activo que más valor genera a largo plazo.',
    highlights: [
      'Investigación de keywords con intención comercial',
      'Contenido estratégico que atrae decisores',
      'Optimización técnica y de autoridad',
      'Tracking de posiciones y conversiones orgánicas',
    ],
    color: 'green' as const,
    gradient: 'from-accent-green/10 to-accent-green/5',
  },
  {
    number: '03',
    icon: Zap,
    accentIcon: BarChart3,
    title: 'Google Ads',
    subtitle: 'Demanda inmediata activada',
    description:
      'Activamos la demanda desde el primer día. Campañas con segmentación quirúrgica, seguimiento de conversiones end-to-end y optimización basada en ROAS real — no vanity metrics.',
    highlights: [
      'Campañas Search + Display segmentadas por ICP',
      'Seguimiento de conversión: clic → lead → cliente',
      'Optimización semanal basada en datos reales',
      'Presupuesto controlado con ROAS medible',
    ],
    color: 'cyan' as const,
    gradient: 'from-primary/10 to-accent-purple/5',
  },
]

const colorMap = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/20',
    glow: 'shadow-[0_0_40px_rgba(6,182,212,0.1)]',
    number: 'text-primary/30',
  },
  green: {
    bg: 'bg-accent-green/10',
    text: 'text-accent-green',
    border: 'border-accent-green/20',
    glow: 'shadow-[0_0_40px_rgba(16,185,129,0.1)]',
    number: 'text-accent-green/30',
  },
  cyan: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/20',
    glow: 'shadow-[0_0_40px_rgba(6,182,212,0.1)]',
    number: 'text-primary/30',
  },
}

export default function AssetsSection() {
  return (
    <SectionWrapper id="activos" className="bg-white">
      <div className="mb-16 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent-green/10 px-5 py-2 text-sm font-semibold text-primary-dark">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Lo que construimos para ti
        </span>
        <h2 className="mb-5 font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-4.5xl">
          3 activos valiosos.{' '}
          <span className="bg-gradient-to-r from-primary to-accent-green bg-clip-text text-transparent">
            Implementados en el mes 1.
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-text-secondary">
          No vendemos campañas sueltas. Construimos tres activos digitales que trabajan juntos
          para generar demanda constante y medible para tu negocio B2B.
        </p>
      </div>

      <div className="space-y-8">
        {assets.map((asset) => {
          const Icon = asset.icon
          const AccentIcon = asset.accentIcon
          const colors = colorMap[asset.color]
          return (
            <div
              key={asset.number}
              className={`group relative overflow-hidden rounded-[2rem] border ${colors.border} bg-gradient-to-br ${asset.gradient} p-8 transition-all duration-500 hover:shadow-card-3d lg:p-10`}
            >
              {/* Large background number */}
              <span className={`pointer-events-none absolute -right-4 -top-8 select-none text-[12rem] font-black leading-none ${colors.number} opacity-40`}>
                {asset.number}
              </span>

              <div className="relative grid gap-8 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <div className="mb-5 flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} shadow-soft transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`h-7 w-7 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">
                        {asset.title}
                      </h3>
                      <p className={`text-sm font-semibold ${colors.text}`}>
                        {asset.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="mb-6 max-w-xl text-base leading-relaxed text-text-secondary">
                    {asset.description}
                  </p>
                </div>

                <div className="lg:col-span-2">
                  <div className="space-y-3">
                    {asset.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-white/70 p-3 backdrop-blur-sm"
                      >
                        <ArrowRight className={`mt-0.5 h-4 w-4 flex-shrink-0 ${colors.text}`} />
                        <span className="text-sm font-medium text-text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="mb-4 text-base text-text-secondary">
          Los tres activos se integran a tu dashboard y se miden en tiempo real.
        </p>
        <a
          href="#plataforma"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          Ver la plataforma que lo conecta todo
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </SectionWrapper>
  )
}
