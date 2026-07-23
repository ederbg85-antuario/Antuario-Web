import { NextResponse } from 'next/server'

// Short link para el QR de las tarjetas: antuario.mx/r/<vendedor>
// Redirige a la landing del Plan de Crecimiento con las UTM de la tarjeta ya puestas.
export async function GET(req: Request, { params }: { params: Promise<{ seller: string }> }) {
  const { seller } = await params
  const ref = (seller || 'antuario').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 32) || 'antuario'

  const url = new URL('/plan-de-crecimiento', req.url)
  url.searchParams.set('utm_source', 'tarjeta')
  url.searchParams.set('utm_medium', 'outbound')
  url.searchParams.set('utm_campaign', 'vfria-2026q3-tarjeta')
  url.searchParams.set('ref', ref)

  return NextResponse.redirect(url, 302)
}
