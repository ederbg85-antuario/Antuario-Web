import { NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validations/lead'
import { getSupabaseServerClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json()
    const parsed = leadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const supabase = getSupabaseServerClient()

    const { error } = await supabase.from('b2b_leads').insert({
      nombre: parsed.data.nombre,
      empresa: parsed.data.empresa,
      email: parsed.data.email,
      telefono: parsed.data.telefono || null,
      servicio_interes: parsed.data.servicio_interes,
      mensaje: parsed.data.mensaje || null,
      source_url: parsed.data.source_url || null,
      utm_source: parsed.data.utm_source || null,
      utm_campaign: parsed.data.utm_campaign || null,
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { success: false, message: 'Error al procesar tu solicitud. Intenta de nuevo.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API leads error:', err)
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor.' },
      { status: 500 }
    )
  }
}
