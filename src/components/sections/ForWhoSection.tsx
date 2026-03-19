import SectionWrapper from '@/components/common/SectionWrapper'
import { CheckCircle2, XCircle } from 'lucide-react'

const idealFor = [
  'Negocios B2B de servicios con ticket promedio mayor a $50,000 MXN',
  'Empresas que ya tienen producto-mercado validado y quieren escalar',
  'Directores comerciales que necesitan un pipeline predecible',
  'Negocios de servicios profesionales, consultoría, tecnología o industria',
  'Empresas que valoran datos sobre intuición y quieren accountability real',
]

const notFor = [
  'Negocios que buscan resultados en 7 días',
  'Empresas que no tienen claridad sobre su cliente ideal',
  'Quienes solo buscan "manejar redes sociales"',
]

export default function ForWhoSection() {
  return (
    <SectionWrapper>
      <div className="mb-16 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary-dark">
          <span className="h-2 w-2 rounded-full bg-primary" />
          ¿Para quién es?
        </span>
        <h2 className="mb-5 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
          Negocios B2B que quieren{' '}
          <span className="text-primary">escalar con sistema</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
        {/* Ideal for */}
        <div className="rounded-[2rem] border border-accent-green/15 bg-accent-green/5 p-8 shadow-card">
          <h3 className="mb-6 flex items-center gap-2.5 text-lg font-bold text-accent-green">
            <CheckCircle2 className="h-5 w-5" />
            Es para ti si...
          </h3>
          <ul className="space-y-4">
            {idealFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-green" />
                <span className="text-sm leading-relaxed text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not for */}
        <div className="rounded-[2rem] border border-border-light bg-white p-8 shadow-card">
          <h3 className="mb-6 flex items-center gap-2.5 text-lg font-bold text-text-muted">
            <XCircle className="h-5 w-5" />
            No es para ti si...
          </h3>
          <ul className="space-y-4">
            {notFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-text-muted" />
                <span className="text-sm leading-relaxed text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
