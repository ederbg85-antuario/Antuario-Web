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
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary-dark">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Nuestra Promesa
          </span>
          <h2 className="mb-6 font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-4.5xl">
            No vendemos campañas.{' '}
            <span className="text-primary">
              Nos hacemos responsables.
            </span>
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-text-secondary">
            Somos la agencia que construye tu sistema comercial completo — desde que alguien
            te descubre hasta que se convierte en cliente. Y lo medimos todo en un solo dashboard.
          </p>
          <p className="mb-8 text-base leading-relaxed text-text-secondary">
            Nuestro modelo de trabajo se basa en <span className="font-semibold text-text-primary">accountability real</span>:
            cada tarea tiene dueño, cada resultado tiene fecha, y cada peso invertido tiene un retorno medible.
          </p>
          <a
            href="#sistema"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
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
                className="group flex gap-5 rounded-[1.5rem] border border-border-light bg-surface-alt p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-3d"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 shadow-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="mb-1.5 flex items-center gap-2.5">
                    <span className="text-xs font-bold text-primary/50">0{index + 1}</span>
                    <h3 className="text-base font-bold text-text-primary">{promise.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-secondary">
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
