import SectionWrapper from '@/components/common/SectionWrapper'
import LeadForm from '@/components/common/LeadForm'
import { Mail, Clock, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  return (
    <SectionWrapper id="contacto" className="bg-white">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-500-dark">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Siguiente paso
          </span>
          <h2 className="mb-6 font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:text-4.5xl">
            Agenda una llamada de{' '}
            <span className="text-emerald-500">30 minutos</span>
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-500">
            Cuéntanos sobre tu negocio y tus objetivos. Nosotros analizamos si el sistema
            es el fit correcto para ti — sin compromiso, sin presión.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 shadow-soft">
                <Clock className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">30 minutos, sin compromiso</h3>
                <p className="text-sm text-slate-500">
                  Conocemos tu negocio, analizamos tu situación actual y te damos un diagnóstico inicial.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 shadow-soft">
                <ArrowRight className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Propuesta personalizada</h3>
                <p className="text-sm text-slate-500">
                  Si somos el fit correcto, preparamos una propuesta con objetivos, KPIs y plan de acción claros.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 shadow-soft">
                <Mail className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Contacto directo</h3>
                <p className="text-sm text-slate-500">
                  ¿Prefieres escribirnos directamente? Envíanos un correo a{' '}
                  <a
                    href="mailto:hola@antuario.mx"
                    className="font-semibold text-emerald-500 transition-colors hover:text-emerald-500-dark"
                  >
                    hola@antuario.mx
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-[2rem] border border-slate-200/60 bg-slate-50 p-6 shadow-card-3d sm:p-8">
          <h3 className="mb-1 text-lg font-bold text-slate-900">
            Completa el formulario
          </h3>
          <p className="mb-6 text-sm text-slate-400">
            Te contactaremos en las próximas 24 horas hábiles.
          </p>
          <LeadForm />
        </div>
      </div>
    </SectionWrapper>
  )
}
