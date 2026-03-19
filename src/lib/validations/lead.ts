import { z } from 'zod'

export const servicioInteresOptions = [
  { value: 'generacion-leads', label: 'Generación de Leads' },
  { value: 'plataforma', label: 'Plataforma / Dashboard' },
  { value: 'ia', label: 'Automatización con IA' },
  { value: 'consultoria', label: 'Consultoría Estratégica' },
  { value: 'otro', label: 'Otro' },
] as const

export const leadSchema = z.object({
  nombre: z.string().min(2).max(50),
  empresa: z.string().min(2).max(100),
  email: z.string().email(),
  telefono: z.string().optional().or(z.literal('')),
  servicio_interes: z.enum(['generacion-leads', 'plataforma', 'ia', 'consultoria', 'otro']),
  mensaje: z.string().max(500).optional().or(z.literal('')),
  source_url: z.string().optional(),
  utm_source: z.string().optional(),
  utm_campaign: z.string().optional(),
})

export type LeadFormData = z.infer<typeof leadSchema>
