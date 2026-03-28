import SectionWrapper from '@/components/common/SectionWrapper'
import { ArrowRight, Check, Zap, Crown, Rocket } from 'lucide-react'

const plans = [
  {
    icon: Zap,
    name: 'Lanzamiento',
    description: 'Para negocios que inician su sistema de generación de clientes B2B.',
    range: '$15,000 — $25,000 MXN/mes',
    features: [
      'Página web optimizada para conversión',
      'Google Ads con tracking end-to-end',
      'SEO básico y Google Business Profile',
      'Dashboard con métricas clave',
      'CRM con embudo básico',
      'Reportes mensuales',
    ],
    highlight: false,
  },
  {
    icon: Crown,
    name: 'Crecimiento',
    description: 'El sistema completo para escalar con datos, IA y accountability.',
    range: '$25,000 — $50,000 MXN/mes',
    features: [
      'Todo lo de Lanzamiento',
      'Multi-canal: Ads + SEO + Maps + LinkedIn',
      'Dashboard completo con semáforo de salud',
      'CRM avanzado con propuestas',
      'Agente IA en WhatsApp 24/7',
      'Sistema de accountability integrado',
      'Insights automatizados por IA',
      'Reportes semanales ejecutivos',
    ],
    highlight: true,
  },
  {
    icon: Rocket,
    name: 'Enterprise',
    description: 'Para empresas con operaciones complejas que requieren personalización total.',
    range: '$50,000+ MXN/mes',
    features: [
      'Todo lo de Crecimiento',
      'Estrategia multi-ubicación',
      'Integraciones a medida (ERP, sistemas)',
      'Automatizaciones avanzadas',
      'Consultoría estratégica mensual',
      'SLA con tiempos de respuesta garantizados',
    ],
    highlight: false,
  },
]

export default function PricingSection() {
  return (
    <SectionWrapper>
      <div className="mb-16 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-500-dark">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Inversión
        </span>
        <h2 className="mb-5 font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:text-4.5xl">
          Planes diseñados para{' '}
          <span className="text-emerald-500">generar ROI</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-500">
          La inversión incluye los 3 activos, plataforma, estrategia, ejecución y optimización continua.
          Sin costos ocultos.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon
          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[2rem] p-8 transition-all duration-500 ${
                plan.highlight
                  ? 'bg-navy text-white shadow-[0_20px_60px_rgba(11,17,33,0.3)]'
                  : 'border border-slate-200/60 bg-white shadow-card hover:-translate-y-1 hover:shadow-card-3d'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary-light px-5 py-1.5 text-xs font-bold text-white shadow-glow">
                  Más popular
                </div>
              )}

              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft ${
                plan.highlight ? 'bg-white/10' : 'bg-emerald-500/10'
              }`}>
                <Icon className={`h-6 w-6 ${plan.highlight ? 'text-emerald-500-light' : 'text-emerald-500'}`} />
              </div>

              <h3 className={`mb-2 text-xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-5 text-sm ${plan.highlight ? 'text-white/55' : 'text-slate-500'}`}>
                {plan.description}
              </p>

              <p className={`mb-6 text-lg font-bold ${plan.highlight ? 'text-emerald-500-light' : 'text-emerald-500'}`}>
                {plan.range}
              </p>

              <ul className="mb-8 flex-grow space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                      plan.highlight ? 'text-emerald-500-light' : 'text-emerald-500'
                    }`} />
                    <span className={`text-sm ${plan.highlight ? 'text-white/65' : 'text-slate-500'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`group flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-white text-navy shadow-card hover:shadow-card-hover'
                    : 'bg-navy text-white shadow-card hover:shadow-card-hover'
                }`}
              >
                Agendar llamada
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          )
        })}
      </div>

      <p className="mt-10 text-center text-sm text-slate-400">
        Los rangos de inversión no incluyen presupuesto de pauta publicitaria, que se define según objetivos.
        El presupuesto de Ads se paga directo a las plataformas.
      </p>
    </SectionWrapper>
  )
}
