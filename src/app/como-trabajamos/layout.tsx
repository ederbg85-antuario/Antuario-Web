import type { Metadata } from 'next'
import { generatePageMetadata } from '@/config/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Cómo Trabajamos — Agencia de Marketing B2B',
  description: 'Construimos tu infraestructura digital, la ponemos a generar prospectos y la optimizamos cada mes con responsabilidad directa sobre los resultados.',
  path: '/como-trabajamos',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
