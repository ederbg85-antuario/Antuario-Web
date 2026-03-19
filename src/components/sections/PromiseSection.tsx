import SectionWrapper from '@/components/common/SectionWrapper'
import { Target, BarChart3, Shield, ArrowRight } from 'lucide-react'

const promises = [
  {
    icon: Target,
    title: 'Resultados, no campañas',
    description:
      'Nuestro KPI es el Costo por Lead Relevante (CPLR). Si no genera clientes reales, lo ajustamos. Así de simple.',
  },
]

export default function PromiseSection() {
  return (
    <SectionWrapper className="bg-white">
      <p>Promise Section</p>
    </SectionWrapper>
  )
}
