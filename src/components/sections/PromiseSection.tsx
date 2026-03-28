import SectionWrapper from '@/components/common/SectionWrapper'
import { Target, BarChart3, Shield, ArrowRight } from 'lucide-react'

const promises = [
  {
    icon: Target,
    title: 'Resultados, no campañas',
    description:
      'Nuestro KPI es el Costo por Lead Relevante (CPLR). Si no genera clientes reales, lo ajustamos. Así de simple.',
  },
  {
    icon: BarChart3,
    title: 'Transparencia en tiempo real',
    description:
      'Tienes acceso 24/7 a tu dashboard con los números reales: pipeline, ROAS, conversiones y semáforo de salud.',
  },
  {
    icon: Shield,
    title: 'Responsabilidad compartida',
    description:
      'Trabajamos con un sistema de accountability. Cada acción tiene un responsable, una fecha y un KPI. Sin zonas grises.',
  },
]

export default function PromiseSection() {
  return (
    <SectionWrapper className="bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Nuestra Promesa
          </span>
          <h2 className="mb-6 font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:text-4.5xl">
            No vendemos campañas.{' '}
            <span className="text-emerald-500">
              Nos hacemos responsables.
            </span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-slate-500">
            Somos la agencia que construye tu sistema comercial completo — desde que alguien
            te descubre hasta que se convierte en cliente. Y lo medimos todo en un solo dashboard.
          </p>
          <p className="mb-8 text-base leading-relaxed text-slate-500">
            Nuestro modelo de trabajo se basa en <span className="font-semibold text-slate-900">accountability real</span>:
            cada tarea tiene dueño, cada resultado tiene fecha, y cada peso invertido tiene un retorno medible.
          </p>
          <a
            href="#sistema"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 transition-colors hover:text-emerald-600"
          >
            Conoce el sistema completo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {promises.map((promise, index) => {
            const Icon = promise.icon
            return (
              <div
                key={promise.title}
                className="group flex gap-5 rounded-2xl border border-slate-200/60 bg-slate-50 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-3d"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <div className="mb-1.5 flex items-center gap-2.5">
                    <span className="text-xs font-bold text-emerald-500/50">0{index + 1}</span>
                    <h3 className="text-base font-bold text-slate-900">{promise.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {promise.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
