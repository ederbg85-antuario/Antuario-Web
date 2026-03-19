import SectionWrapper from '@/components/common/SectionWrapper'
import { ArrowRight, Check, Zap, Crown, Rocket } from 'lucide-react'

const plans = [
  {
    icon: Zap,
    name: 'Lanzamiento',
    description: 'Para negocios que inician su sistema de generación de clientes B2B.',
    range: '$15,000 - $25,000 MXN/mes',
    features: [
      'PÁgina web optimizada para conversión',
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
    range: '$25,000 - $50,000 MXN/mes',
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
      <p>Pricing Section</p>
    </SectionWrapper>
  )
}
