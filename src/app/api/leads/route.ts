import { NextResponse } from 'next/server'
import { leadSchema, servicioInteresOptions } from '@/lib/validations/lead'
import { getSupabaseServerClient } from '@/lib/supabase/server'

// ── CRM de Antuario (organización de Eder en el Dashboard) ───────────────────
const ORG_ID = 1
const ASSIGNED_TO = '684871ef-15a1-4c22-a7fa-af6c2dcbe726' // Eder Basilio

// Etiqueta legible del servicio de interés a partir del valor del formulario
const INTEREST_LABELS: Record<string, string> = Object.fromEntries(
  servicioInteresOptions.map((o) => [o.value, o.label])
)

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json()
    const parsed = leadSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { name, email, company, phone, interest, message, source_url } = parsed.data
    const supabase = getSupabaseServerClient()

    const interesLabel = INTEREST_LABELS[interest] ?? interest
    const emailNorm = email.toLowerCase().trim()
    const notes = [
      `Servicio de interés: ${interesLabel}`,
      message ? `\n\nMensaje:\n${message}` : '',
      source_url ? `\n\nEnviado desde: ${source_url}` : '',
    ].join('')

    // Normaliza el teléfono a sus últimos 10 dígitos para deduplicar igual que
    // lo hace el agente de WhatsApp (api/internal/upsert-lead).
    const digits = (phone ?? '').replace(/\D/g, '')
    const phone10 = digits.length >= 10 ? digits.slice(-10) : digits

    // ¿El contacto ya existe en la organización? (por correo o teléfono)
    let existing: { id: string; notes: string | null } | null = null

    {
      const { data } = await supabase
        .from('contacts')
        .select('id, notes')
        .eq('organization_id', ORG_ID)
        .ilike('email', emailNorm)
        .limit(1)
        .maybeSingle()
      existing = data
    }

    if (!existing && phone10) {
      const { data } = await supabase
        .from('contacts')
        .select('id, notes')
        .eq('organization_id', ORG_ID)
        .or(`phone.ilike.%${phone10},whatsapp.ilike.%${phone10}`)
        .limit(1)
        .maybeSingle()
      existing = data
    }

    if (existing) {
      // Contacto repetido: anexa el nuevo mensaje sin pisar las notas previas.
      const fecha = new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })
      const merged = [existing.notes?.trim(), `— Nuevo mensaje web (${fecha}) —\n${notes}`]
        .filter(Boolean)
        .join('\n\n')

      const { error } = await supabase
        .from('contacts')
        .update({ notes: merged, updated_at: new Date().toISOString() })
        .eq('id', existing.id)

      if (error) {
        console.error('Supabase update error:', error)
        return NextResponse.json(
          { success: false, message: 'Error al procesar tu solicitud. Intenta de nuevo.' },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    const { error } = await supabase.from('contacts').insert({
      organization_id: ORG_ID,
      full_name: name.trim(),
      email: emailNorm,
      phone: phone || null,
      whatsapp: phone || null,
      company: company || null,
      contact_type: 'lead_nuevo',
      status: 'active',
      source: 'formulario-web',
      primary_channel: phone ? 'whatsapp' : 'email',
      assigned_to: ASSIGNED_TO,
      created_by: ASSIGNED_TO,
      notes,
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
