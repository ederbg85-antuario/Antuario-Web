export interface Lead {
  id: string
  created_at: string
  nombre: string
  empresa: string
  email: string
  telefono: string | null
  servicio_interes: ServiceInterest
  mensaje: string | null
  source_url: string | null
  utm_source: string | null
  utm_campaign: string | null
  estado: LeadEstado
}

export type ServiceInterest =
  | 'generacion-leads'
  | 'plataforma'
  | 'ia'
  | 'consultoria'
  | 'otro'

export type LeadEstado = 'nuevo' | 'contactado' | 'calificado' | 'descartado'

export interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string | null
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLinks {
  linkedin: string
  instagram: string
}
