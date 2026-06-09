import { z } from 'zod'

// Servicios que ofrece Antuario — fuente única de verdad para los formularios
// (página /contacto y LeadForm) y para las etiquetas que guarda la API.
export const servicioInteresOptions = [
  { value: 'marketing', label: 'Marketing digital integral' },
  { value: 'seo', label: 'SEO' },
  { value: 'performance', label: 'Performance Ads' },
  { value: 'web', label: 'Desarrollo web' },
  { value: 'redes', label: 'Redes sociales' },
  { value: 'branding', label: 'Branding y diseño' },
  { value: 'software', label: 'Software a la medida' },
  { value: 'ia', label: 'Inteligencia Artificial' },
  { value: 'otro', label: 'Otro / no estoy seguro' },
] as const

export const leadSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(80, 'El nombre no puede exceder 80 caracteres'),
  email: z.string().email('Ingresa un correo electrónico válido'),
  company: z
    .string()
    .max(100, 'El nombre de la empresa no puede exceder 100 caracteres')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .max(30, 'El teléfono no puede exceder 30 caracteres')
    .optional()
    .or(z.literal('')),
  interest: z.string().min(1, 'Selecciona un servicio de interés'),
  message: z
    .string()
    .max(2000, 'El mensaje no puede exceder 2000 caracteres')
    .optional()
    .or(z.literal('')),
  source_url: z.string().optional(),
  utm_source: z.string().optional(),
  utm_campaign: z.string().optional(),
})

export type LeadFormData = z.infer<typeof leadSchema>
