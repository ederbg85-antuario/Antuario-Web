import SectionWrapper from '@/components/common/SectionWrapper'
import { Check, X } from 'lucide-react'

const comparisons = [
  { feature: 'Dashboard en tiempo real con tus KPIs', us: true, them: false },
  { feature: '3 activos digitales (Web + SEO + Ads)', us: true, them: false },
  { feature: 'Embudo comercial end-to-end integrado', us: true, them: false },
  { feature: 'Agente IA en WhatsApp 24/7', us: true, them: false },
  { feature: 'CRM integrado al sistema de marketing', us: true, them: false },
  { feature: 'KPI principal: Costo por Lead Relevante', us: true, them: false },
  { feature: 'Sistema de accountability con responsables', us: true, them: false },
  { feature: 'Solo reportes de impresiones y alcance', us: false, them: true },
]

export default function WhyDifferentSection() {
  return (
    <SectionWrapper className="bg-white">
      <div className="mb-16 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary-dark">
          <span className="h-2 w-2 rounded-full bg-primary" />
          ¿Por qué es diferente?
        </span>
        <h2 className="mb-5 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
          No somos otra agencia.{' '}
          <span className="text-primary">Somos tu sistema comercial.</span>
        </h2>
      </div>

      <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-border-light bg-surface-alt shadow-card-3d">
        {/* Header */}
        <div className="grid grid-cols-3 border-b border-border bg-white px-6 py-5">
          <div />
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1 text-sm font-bold text-primary">
              Antuario
            </span>
          </div>
          <div className="text-center text-sm font-medium text-text-muted">Agencia típica</div>
        </div>

        {/* Rows */}
        {comparisons.map((row, idx) => (
          <div
            key={row.feature}
            className={`grid grid-cols-3 items-center px-6 py-4 ${
              idx !== comparisons.length - 1 ? 'border-b border-border-light' : ''
            } ${idx % 2 === 0 ? 'bg-white' : 'bg-surface-alt'}`}
          >
            <p className="pr-4 text-sm text-text-secondary">{row.feature}</p>
            <div className="flex justify-center">
              {row.us ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-green/10 shadow-soft">
                  <Check className="h-4 w-4 text-accent-green" />
                </div>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-background">
                  <X className="h-4 w-4 text-text-muted" />
                </div>
              )}
            </div>
            <div className="flex justify-center">
              {row.them ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-green/10">
                  <Check className="h-4 w-4 text-accent-green" />
                </div>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-background">
                  <X className="h-4 w-4 text-text-muted" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
