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
      <p>Problem Section</p>
    </SectionWrapper>
  )
}
