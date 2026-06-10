// Envío de leads del sitio al CRM de Antuario.
//
// Apunta al Edge Function de Supabase `submit-lead`, que corre dentro de
// Supabase y guarda el lead en la tabla `contacts` usando la llave de
// servicio (que vive en Supabase, no aquí). Por eso la web NO necesita
// variables de entorno secretas en Vercel: esta URL es pública.
//
// Se puede sobreescribir con NEXT_PUBLIC_LEADS_ENDPOINT si algún día cambia
// el proyecto de Supabase.
export const LEADS_ENDPOINT =
  process.env.NEXT_PUBLIC_LEADS_ENDPOINT ||
  'https://oarxbxaetlaeppkcahep.supabase.co/functions/v1/submit-lead'

export async function submitLead(payload: Record<string, unknown>): Promise<void> {
  const res = await fetch(LEADS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('No se pudo enviar el formulario')
}
