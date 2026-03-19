import { z } from 'zod'

export const servicioInteresOptions = [
  { value: 'generacion-leads', label: 'Generación de Leads' },
  { value: 'plataforma', label: 'Plataforma / Dashboard' },
  { value: 'ia', label: 'Automatización con IA' },
  { value: 'consultoria', label: 'Consultoría Estratégica' },
  { value: 'otro', label: 'Otro' },
] as const

const phoneRegex = /^(\+52\s?)?\d{10}$/

export const leadSchema = z.object({
  nombre: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres'),
  empresa: z
    .string()
    .min(2, 'El nombre de la empresa debe tener al menos 2 caracteres')
    .max(100, 'El nombre de la empresa no puede exceder 100 caracteres'),
  email: z
    .string()
    .email('Ingresa un correo electrónico válido'),
  telefono: z
    .string()
    .regex(phoneRegex, 'Formato: +52 seguido de 10 dígitos o solo 10 dígitos')
    .optional()
    .or(z.literal('')),
  servicio_interes: z.enum(
    ['generacion-leads', 'plataforma', 'ia', 'consultoria', 'otro'],
    { errorMap: () => ({ message: 'Selecciona un servicio de interés' }) }
  ),
  mensaje: z
    .string()
    .max(500, 'El mensaje no puede exceder 500 caracteres')
    .optional()
    .or(z.literal('')),
  source_url: z.string().optional(),
  utm_source: z.string().optional(),
  utm_campaign: z.string().optional(),
})

export type LeadFormData = z.infer<typeof leadSchema>
