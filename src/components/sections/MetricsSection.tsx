import SectionWrapper from '@/components/common/SectionWrapper'
import AnimatedCounter from '@/components/common/AnimatedCounter'

const metrics = [
  {
    value: 2821,
    prefix: '$',
    suffix: '',
    label: 'CPLR promedio',
    sublabel: 'Costo por Lead Relevante',
    color: 'text-primary',
  },
  {
    value: 13.2,
    prefix: '',
    suffix: 'x',
    decimals: 1,
    label: 'ROAS',
    sublabel: 'Retorno sobre inversión Ads',
    color: 'text-accent-green',
  },
  {
    value: 26.32,
    prefix: '',
    suffix: '%',
    decimals: 1,
    label: 'Conversión global',
    sublabel: 'Contacto → Cliente',
    color: 'text-primary',
  },
  {
    value: 50,
    prefix: '',
    suffix: '%',
    label: 'Lead → Cliente',
    sublabel: 'Tasa de cierre',
    color: 'text-accent-green',
  },
]

const healthIndicators = [
  { label: 'CTR Ads', value: '3.8%', status: 'healthy' as const, threshold: 'Bueno > 3%' },
  { label: 'Tasa Engagement', value: '27.5%', status: 'monitor' as const, threshold: 'Bueno > 40%' },
  { label: 'Conversión web', value: '2.2%', status: 'monitor' as const, threshold: 'Bueno > 3%' },
  { label: 'ROAS', value: '13.2x', status: 'healthy' as const, threshold: 'Bueno > 3x' },
]

const statusColors = {
  healthy: {
    bg: 'bg-accent-green/8',
    text: 'text-accent-green',
    dot: 'bg-accent-green',
    label: 'Saludable',
  },
  monitor: {
    bg: 'bg-accent-amber/8',
    text: 'text-accent-amber',
    dot: 'bg-accent-amber',
    label: 'Monitorear',
  },
}

export default function MetricsSection() {
  return (
    <SectionWrapper id="metricas">
      <div className="mb-16 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary-dark">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Métricas y Resultados
        </span>
        <h2 className="mb-5 font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-4.5xl">
          Los números que{' '}
          <span className="text-primary">realmente importan</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-text-secondary">
          Nuestro KPI principal es el Costo por Lead Relevante (CPLR) — no impresiones, no clics.
          Todo medido en tiempo real desde tu dashboard.
        </p>
      </div>

      {/* Main metrics */}
      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="group rounded-[1.5rem] border border-border-light bg-white p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-3d"
          >
            <p className={`mb-1 text-3xl font-bold ${metric.color}`}>
              <AnimatedCounter
                target={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.decimals ?? 0}
              />
            </p>
            <p className="text-sm font-bold text-text-primary">{metric.label}</p>
            <p className="text-xs text-text-muted">{metric.sublabel}</p>
          </div>
        ))}
      </div>

      {/* Health indicators — premium card */}
      <div className="rounded-[2rem] border border-border-light bg-white p-6 shadow-card sm:p-8">
        <div className="mb-6 flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-green" />
          </span>
          <h3 className="text-lg font-bold text-text-primary">Semáforo de salud</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {healthIndicators.map((indicator) => {
            const style = statusColors[indicator.status]
            return (
              <div key={indicator.label} className={`rounded-2xl ${style.bg} p-5`}>
                <div className="mb-2 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                  <span className={`text-xs font-bold uppercase tracking-wider ${style.text}`}>
                    {style.label}
                  </span>
                </div>
                <p className="text-xs text-text-muted">{indicator.label}</p>
                <p className={`text-2xl font-bold ${style.text}`}>{indicator.value}</p>
                <p className="text-xs text-text-muted">{indicator.threshold}</p>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
