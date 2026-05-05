import type { Metadata } from 'next'
import { generatePageMetadata } from '@/config/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Antuario Dashboard — Visibilidad Total de tu Operación Comercial',
  description: 'CRM, marketing, ventas y métricas en tiempo real. Todo en una sola plataforma incluida con tu servicio de Antuario.',
  path: '/dashboard',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
