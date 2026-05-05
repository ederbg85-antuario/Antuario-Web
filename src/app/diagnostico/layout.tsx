import type { Metadata } from 'next'
import { generatePageMetadata } from '@/config/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Diagnóstico Gratuito',
  description: 'Descubre qué está frenando tu crecimiento digital. Auditoría completa de tu web, Google y campañas. Sin costo, sin compromiso.',
  path: '/diagnostico',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
