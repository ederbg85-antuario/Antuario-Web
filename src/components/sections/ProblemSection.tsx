import SectionWrapper from '@/components/common/SectionWrapper'
import { TrendingDown, Eye, Clock, DollarSign, Users, AlertTriangle } from 'lucide-react'

const problems = [
  {
    icon: TrendingDown,
    title: 'Inviertes en marketing sin ver resultados claros',
    description:
      'No sabes cuánto te cuesta realmente cada cliente ni cuáles canales están funcionando.',
  },
  {
    icon: Eye,
    title: 'No tienes visibilidad de tu embudo',
    description:
      'Los leads entran pero no sabes en qué etapa se pierden ni por qué.',
  },
  {
    icon: Clock,
    title: 'Tu equipo pierde tiempo en tareas repetitivas',
    description:
      'Seguimientos manuales, cotizaciones que se retrasan, información dispersa en WhatsApp y hojas de cálculo.',
  },
  {
    icon: DollarSign,
    title: 'Tu agencia no se mide con tus KPIs',
    description:
      'Te entregan reportes de vanidad: impresiones, alcance, clics. Pero no clientes ni ingresos.',
  },
  {
    icon: Users,
    title: 'Dependes de referidos para crecer',
    description:
      'Tu negocio funciona, pero tu flujo de prospectos es impredecible y estacional.',
  },
  {
    icon: AlertTriangle,
    title: 'Ya cambiaste de agencia y el resultado fue igual',
    description:
      'Porque el problema no es la agencia. Es que no tienen un sistema.',
  },
]

export default function ProblemSection() {
  return (
    <SectionWrapper>
      <div className="mb-16 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-amber/10 px-5 py-2 text-sm font-semibold text-amber-400">
          <span className="h-2 w-2 rounded-full bg-accent-amber" />
          El Problema
        </span>
        <h2 className="mb-5 font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:text-4.5xl">
          ¿Te suena familiar?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-500">
          Si reconoces al menos dos de estos puntos, tu negocio necesita un sistema — no más campañas sueltas.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => {
          const Icon = problem.icon
          return (
            <div
              key={problem.title}
              className="group rounded-[1.5rem] border border-slate-200/60 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-3d"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-amber/10 shadow-soft transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-amber-400" />
              </div>
              <h3 className="mb-2 text-base font-bold text-slate-900">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {problem.description}
              </p>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
