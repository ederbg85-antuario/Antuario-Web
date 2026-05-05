import type { Metadata } from 'next'
import { generatePageMetadata } from '@/config/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Resultados Reales — Casos de Éxito',
  description: 'Empresas de servicios B2B que transformaron su captación de prospectos con Antuario. Resultados medibles con números reales.',
  path: '/resultados',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
