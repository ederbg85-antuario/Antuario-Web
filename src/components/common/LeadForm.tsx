'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadSchema, type LeadFormData, servicioInteresOptions } from '@/lib/validations/lead'
import { submitLead } from '@/lib/leads'
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
      name: '',
      company: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
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

      await submitLead(payload)

      setFormState({
        status: 'success',
        message: 'Recibimos tu información. Te contactaremos en las próximas 24 horas hábiles.',
      })
      reset()
      if (typeof window !== 'undefined') {
        ;(window as any).dataLayer = (window as any).dataLayer || []
        ;(window as any).dataLayer.push({
          event: 'lead_submit',
          form_id: 'lead_form',
          interest: data.interest,
        })
      }
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
        <h3 className="text-xl font-semibold text-slate-900">Solicitud enviada</h3>
        <p className="text-slate-500">{formState.message}</p>
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
          <label htmlFor="name" className="block text-sm font-medium text-slate-500">
            Nombre *
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu nombre"
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={cn(
              'w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all',
              'focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10',
              errors.name ? 'border-accent-red/50' : 'border-slate-200/60'
            )}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-accent-red">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="company" className="block text-sm font-medium text-slate-500">
            Empresa
          </label>
          <input
            id="company"
            type="text"
            placeholder="Nombre de tu empresa"
            aria-describedby={errors.company ? 'company-error' : undefined}
            className={cn(
              'w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all',
              'focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10',
              errors.company ? 'border-accent-red/50' : 'border-slate-200/60'
            )}
            {...register('company')}
          />
          {errors.company && (
            <p id="company-error" className="text-xs text-accent-red">{errors.company.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-slate-500">
            Correo electrónico *
          </label>
          <input
            id="email"
            type="email"
            placeholder="correo@empresa.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cn(
              'w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all',
              'focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10',
              errors.email ? 'border-accent-red/50' : 'border-slate-200/60'
            )}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-accent-red">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-sm font-medium text-slate-500">
            Teléfono
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+52 55 1234 5678"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={cn(
              'w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all',
              'focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10',
              errors.phone ? 'border-accent-red/50' : 'border-slate-200/60'
            )}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-accent-red">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="interest" className="block text-sm font-medium text-slate-500">
          Servicio de interés *
        </label>
        <select
          id="interest"
          aria-describedby={errors.interest ? 'interest-error' : undefined}
          className={cn(
            'w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition-all',
            'focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10',
            errors.interest ? 'border-accent-red/50' : 'border-slate-200/60'
          )}
          defaultValue=""
          {...register('interest')}
        >
          <option value="" disabled>Selecciona un servicio</option>
          {servicioInteresOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {errors.interest && (
          <p id="interest-error" className="text-xs text-accent-red">{errors.interest.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-medium text-slate-500">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Cuéntanos brevemente sobre tu negocio y qué necesitas..."
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(
            'w-full resize-none rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition-all',
            'focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10',
            errors.message ? 'border-accent-red/50' : 'border-slate-200/60'
          )}
          {...register('message')}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-accent-red">{errors.message.message}</p>
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

      <p className="text-center text-xs text-slate-400">
        Al enviar aceptas que te contactemos por correo o teléfono para dar seguimiento a tu solicitud.
      </p>
    </form>
  )
}
