'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadSchema, type LeadFormData, servicioInteresOptions } from '@/lib/validations/lead'
import { getUtmParams, cn } from '@/lib/utils'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import type { FormState } from '@/types'

export default function LeadForm() {
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: null,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      servicio_interes: undefined,
      mensaje: '',
    },
  })

  const onSubmit = async (data: LeadFormData) => {
    setFormState({ status: 'loading', message: null })

    try {
      const utmParams = getUtmParams()
      const payload: LeadFormData = {
        ...data,
        source_url: typeof window !== 'undefined' ? window.location.href : '',
        utm_source: utmParams.utm_source,
        utm_campaign: utmParams.utm_campaign,
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Error al enviar')
      }

      setFormState({
        status: 'success',
        message: 'Recibimos tu información. Te contactaremos en las próximas 24 horas hábiles.',
      })
      reset()
    } catch {
      setFormState({
        status: 'error',
        message: 'Hubo un error al enviar tu información. Intenta de nuevo o escríbenos a hola@antuario.mx.',
      })
    }
  }

  if (formState.status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-accent-green/8 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent-green" />
        <h3 className="text-xl font-semibold text-text-primary">Solicitud enviada</h3>
        <p className="text-text-secondary">{formState.message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {formState.status === 'error' && (
        <div className="flex items-start gap-3 rounded-2xl bg-accent-red/8 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-red" />
          <p className="text-sm text-accent-red">{formState.message}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="nombre" className="block text-sm font-medium text-text-secondary">
            Nombre *
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            aria-describedby={errors.nombre ? 'nombre-error' : undefined}
            className={cn(
              'w-full rounded-xl border bg-white px-4 py-3 text-text-primary placeholder:text-text-muted outline-none transition-all',
              'focus:border-primary focus:ring-2 focus:ring-primary/10',
              errors.nombre ? 'border-accent-red/50' : 'border-border'
            )}
            {...register('nombre')}
          />
          {errors.nombre && (
            <p id="nombre-error" className="text-xs text-accent-red">{errors.nombre.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="empresa" className="block text-sm font-medium text-text-secondary">
            Empresa *
          </label>
          <input
            id="empresa"
            type="text"
            placeholder="Nombre de tu empresa"
            aria-describedby={errors.empresa ? 'empresa-error' : undefined}
            className={cn(
              'w-full rounded-xl border bg-white px-4 py-3 text-text-primary placeholder:text-text-muted outline-none transition-all',
              'focus:border-primary focus:ring-2 focus:ring-primary/10',
              errors.empresa ? 'border-accent-red/50' : 'border-border'
            )}
            {...register('empresa')}
          />
          {errors.empresa && (
            <p id="empresa-error" className="text-xs text-accent-red">{errors.empresa.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
            Correo electrónico *
          </label>
          <input
            id="email"
            type="email"
            placeholder="correo@empresa.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cn(
              'w-full rounded-xl border bg-white px-4 py-3 text-text-primary placeholder:text-text-muted outline-none transition-all',
              'focus:border-primary focus:ring-2 focus:ring-primary/10',
              errors.email ? 'border-accent-red/50' : 'border-border'
            )}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-accent-red">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="telefono" className="block text-sm font-medium text-text-secondary">
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            placeholder="+52 55 1234 5678"
            aria-describedby={errors.telefono ? 'telefono-error' : undefined}
            className={cn(
              'w-full rounded-xl border bg-white px-4 py-3 text-text-primary placeholder:text-text-muted outline-none transition-all',
              'focus:border-primary focus:ring-2 focus:ring-primary/10',
              errors.telefono ? 'border-accent-red/50' : 'border-border'
            )}
            {...register('telefono')}
          />
          {errors.telefono && (
            <p id="telefono-error" className="text-xs text-accent-red">{errors.telefono.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="servicio_interes" className="block text-sm font-medium text-text-secondary">
          Servicio de interés *
        </label>
        <select
          id="servicio_interes"
          aria-describedby={errors.servicio_interes ? 'servicio-error' : undefined}
          className={cn(
            'w-full rounded-xl border bg-white px-4 py-3 text-text-primary outline-none transition-all',
            'focus:border-primary focus:ring-2 focus:ring-primary/10',
            errors.servicio_interes ? 'border-accent-red/50' : 'border-border'
          )}
          defaultValue=""
          {...register('servicio_interes')}
        >
          <option value="" disabled>Selecciona un servicio</option>
          {servicioInteresOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {errors.servicio_interes && (
          <p id="servicio-error" className="text-xs text-accent-red">{errors.servicio_interes.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="mensaje" className="block text-sm font-medium text-text-secondary">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={4}
          placeholder="Cuéntanos brevemente sobre tu negocio y qué necesitas..."
          aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
          className={cn(
            'w-full resize-none rounded-xl border bg-white px-4 py-3 text-text-primary placeholder:text-text-muted outline-none transition-all',
            'focus:border-primary focus:ring-2 focus:ring-primary/10',
            errors.mensaje ? 'border-accent-red/50' : 'border-border'
          )}
          {...register('mensaje')}
        />
        {errors.mensaje && (
          <p id="mensaje-error" className="text-xs text-accent-red">{errors.mensaje.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={formState.status === 'loading'}
        className={cn(
          'flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-semibold transition-all',
          'bg-navy text-white shadow-card hover:shadow-card-hover',
          'focus:outline-none focus:ring-2 focus:ring-navy/30 focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-60'
        )}
      >
        {formState.status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Agendar llamada
          </>
        )}
      </button>

      <p className="text-center text-xs text-text-muted">
        Al enviar aceptas que te contactemos por correo o teléfono para dar seguimiento a tu solicitud.
      </p>
    </form>
  )
}
