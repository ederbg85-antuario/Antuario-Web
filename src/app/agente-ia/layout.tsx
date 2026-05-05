import type { Metadata } from 'next'
import { generatePageMetadata } from '@/config/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Agente de IA para Ventas B2B',
  description: 'Agentes de inteligencia artificial que califican, investigan y preparan tus prospectos automáticamente. Copiloto para tu equipo de ventas.',
  path: '/agente-ia',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
