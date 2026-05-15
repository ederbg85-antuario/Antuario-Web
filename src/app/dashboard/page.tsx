'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import MeshGradientBg from '@/components/common/MeshGradientBg'
import DifferentiatorBanner from '@/components/sections/DifferentiatorBanner'

// ─── Section 1: Hero ───────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <MeshGradientBg variant="default" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-heading text-[28px] font-extrabold leading-tight tracking-tight text-white sm:text-[36px]"
        >
          La mayoría de las agencias te mandan un PDF al final del mes.{' '}
          <span className="gradient-text-multicolor">Nosotros te damos esto.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mb-12 max-w-2xl text-[15px] leading-relaxed text-slate-300"
        >
          Antuario Dashboard es la plataforma donde ves, controlas y gestionas toda tu operación comercial en tiempo real. Viene incluida con tu servicio de Antuario.
        </motion.p>

        {/* 3D Dashboard Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: '1200px' }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-12 rounded-[40px] bg-gradient-to-br from-cyan-500/10 via-emerald-500/5 to-violet-500/10 blur-3xl" style={{ zIndex: -1 }} />

          <motion.div
            style={{ rotateY: -4, rotateX: 3 }}
            className="relative rounded-3xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-[3px] shadow-[0_25px_100px_rgba(0,0,0,0.3)] backdrop-blur-sm"
          >
            <div className="overflow-hidden rounded-3xl bg-[#1a1a1a]">
              <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0f0f0f] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="ml-3 flex-1 rounded-lg bg-white/[0.04] px-3 py-1">
                  <span className="text-[10px] text-slate-500">app.antuario.mx/dashboard</span>
                </div>
              </div>
              <img
                src="/screenshot-dashboard.png"
                alt="Antuario Dashboard"
                className="block w-full"
                style={{ maxHeight: '480px', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Rounded divider */}
      <div className="relative z-10 -mb-1 mt-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V24C0 10.7452 10.7452 0 24 0H1416C1429.25 0 1440 10.7452 1440 24V60H0Z" fill="#f1f5f9" />
        </svg>
      </div>
    </section>
  )
}

// ─── Section 2: Visión Maestra ────────────────────────────────────────────

function VisionMaestraSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 font-heading text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
              Tu negocio completo en{' '}
              <span className="gradient-text-multicolor">una sola pantalla</span>
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-slate-500">
              El panel principal de Antuario Dashboard te muestra exactamente qué está pasando con tu operación comercial. No te abruma con métricas de vanidad. Te muestra lo que importa.
            </p>
            <div className="space-y-3 text-[14px] text-slate-600">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500" />
                <span><strong>Prospects:</strong> cuántos leads nuevos entraron este mes y su tasa de conversión</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span><strong>Relevancia:</strong> qué porcentaje de tus prospectos son leads reales versus ruido</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
                <span><strong>Conversiones:</strong> en qué punto de tu embudo se quedan atrapados los deals</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                <span><strong>Costos:</strong> cuánto cuesta adquirir cada cliente a través de cada canal</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl border border-slate-200/60 bg-white/80 p-1 shadow-card backdrop-blur-sm overflow-hidden">
              <img
                src="/screenshot-embudo.png"
                alt="Visión Maestra"
                className="block w-full rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 3: CRM Completo ──────────────────────────────────────────────

function CRMSection() {
  const features = [
    {
      title: 'Contactos y empresas',
      description: 'Base de datos centralizada con historial completo, etiquetas inteligentes, búsqueda avanzada.'
    },
    {
      title: 'Propuestas y cotizaciones',
      description: 'Crea propuestas en minutos, exporta a PDF, ajusta precios en tiempo real, rastrear si fue abierta.'
    },
    {
      title: 'Pedidos, pagos y cobranza',
      description: 'Gestiona todo el ciclo post-venta: orden de compra, facturación, recordatorios de pago automáticos.'
    },
    {
      title: 'Perfilamiento de leads',
      description: 'Enriquece automáticamente tus contactos con datos de la empresa, tipo de oportunidad, nivel de relevancia.'
    }
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="mb-3 font-heading text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
            Gestiona toda tu operación de ventas{' '}
            <span className="gradient-text-multicolor">sin salir de la plataforma</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-500">
            El CRM de Antuario es donde tu equipo de ventas trabaja todos los días. Centralizado, integrado, sin saltos entre herramientas.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-slate-200/60 bg-white/80 p-7 shadow-card backdrop-blur-sm"
            >
              <h3 className="mb-2 font-heading text-[18px] font-extrabold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Screenshot below grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="rounded-3xl border border-slate-200/60 bg-white/80 p-1 shadow-card backdrop-blur-sm overflow-hidden">
            <img
              src="/screenshot-crm.png"
              alt="CRM — Bandeja de Entrada"
              className="block w-full rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section 4: Bandeja Unificada ─────────────────────────────────────────

function InboxSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-3xl border border-slate-200/60 bg-white/80 p-1 shadow-card backdrop-blur-sm overflow-hidden">
              <img
                src="/screenshot-dashboard.png"
                alt="Bandeja de Entrada Unificada"
                className="block w-full rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <h2 className="mb-4 font-heading text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
              Todas tus conversaciones en{' '}
              <span className="gradient-text-multicolor">un solo lugar</span>
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-slate-500">
              WhatsApp, correo electrónico, Instagram, Facebook. Todas tus conversaciones aparecen en una sola bandeja, ordenadas por contacto. Ves el historial completo al instante.
            </p>
            <div className="space-y-3 text-[14px] text-slate-600">
              <p>
                <strong>Agentes IA integrados:</strong> Los conversaciones con tus agentes IA inteligentes aparecen en la bandeja. Tu equipo ve automáticamente qué se preguntó y qué se respondió.
              </p>
              <p>
                <strong>Takeover de un click:</strong> Si un cliente necesita hablar con una persona real, tu equipo toma el control en un click. El cliente ni se da cuenta.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 5: Marketing Integrado ───────────────────────────────────────

function MarketingSection() {
  const integrations = [
    'Google Analytics 4',
    'Google Search Console',
    'Google Ads',
    'Google My Business',
    'Meta Ads',
    'Instagram / Facebook',
  ]

  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 font-heading text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
              Todo tu marketing consolidado{' '}
              <span className="gradient-text-multicolor">en un solo panel</span>
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-slate-500">
              Integra todas tus plataformas de marketing y publicidad en un solo lugar. No necesitas saltar entre Google Analytics, Search Console, Ads Manager y Meta.
            </p>

            <div className="mb-6">
              <p className="mb-3 text-[12px] font-bold uppercase tracking-widest text-slate-400">
                Plataformas integradas
              </p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((integration, i) => (
                  <div
                    key={i}
                    className="rounded-full border border-slate-200/80 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-700"
                  >
                    {integration}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200/60 bg-amber-50 p-4 text-[13px] text-amber-900">
              <p className="font-semibold mb-1">Realidad de la mayoría de empresas:</p>
              <p>
                Tienen Google Ads pero no saben si está bien configurado. Meta Ads activo pero sin tracking correcto. GA4 midiendo eventos duplicados. El resultado: no saben realmente cuánto cuesta cada cliente.
              </p>
            </div>
          </motion.div>

          {/* Right: Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-3xl border border-slate-200/60 bg-white/80 p-1 shadow-card backdrop-blur-sm overflow-hidden">
              <img
                src="/screenshot-metricas.png"
                alt="Marketing — Métricas"
                className="block w-full rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 6: Objetivos y Proyectos ─────────────────────────────────────

function ObjectivesSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-heading text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
            Define objetivos y coordina{' '}
            <span className="gradient-text-multicolor">a tu equipo</span>
          </h2>
          <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-slate-500">
            Los objetivos comerciales del mes, trimestre o año se alinean directamente con los indicadores del Dashboard. Tu equipo ve en tiempo real si están en camino.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Objetivos mensuales, trimestrales y anuales',
                desc: 'Define metas con KPIs específicos. Cada objetivo está ligado a un indicador del Dashboard.'
              },
              {
                title: 'Kanban project manager integrado',
                desc: 'Gestiona tareas, proyectos y ciclos de trabajo con vistas Kanban. Todo conectado a tus objetivos.'
              },
              {
                title: 'Asignación de tareas y deadlines',
                desc: 'Asigna tareas a tu equipo, establece responsables, crea cadenas de trabajo con fechas límite.'
              },
              {
                title: 'Visibilidad en tiempo real',
                desc: 'Tu equipo ve en qué % de progreso está cada objetivo. No hay sorpresas al final del mes.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-card backdrop-blur-sm"
              >
                <h3 className="mb-2 font-heading text-[16px] font-extrabold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section 7: IA en el Dashboard ────────────────────────────────────────

function AISection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-4 font-heading text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
            Próximamente: pregúntale a la IA{' '}
            <span className="gradient-text-multicolor">cómo va tu negocio</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[15px] leading-relaxed text-slate-500">
            Una conversación con la IA de Antuario que entienda todo lo que pasa en tu Dashboard. Solo pregunta.
          </p>

          {/* Coming Soon Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-3xl"
          >
            <div className="relative rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-card backdrop-blur-sm">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-emerald-500/5 to-violet-500/5" style={{ zIndex: -1 }} />

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">En desarrollo</span>
              </div>

              <div className="space-y-4 text-left">
                <div className="text-[13px] italic text-slate-600">
                  <p className="mb-2">¿Cómo va mi pipeline este mes?</p>
                  <p className="mb-4 text-slate-400">La IA analiza tus datos y responde: &ldquo;Tienes 247 prospectos nuevos, 12% más que el mes pasado. Tu tasa de conversión bajó de 8% a 6.8%, principalmente en la etapa de cotización...&rdquo;</p>
                </div>

                <div className="text-[13px] italic text-slate-600">
                  <p className="mb-2">¿Qué canal está trayendo el mejor CAC?</p>
                  <p className="mb-4 text-slate-400">La IA responde en segundos: &ldquo;Google Ads está en $120 por cliente, Meta en $95. Pero esos clientes de Meta tienen 30% menos valor de ciclo de vida...&rdquo;</p>
                </div>

                <div className="text-[13px] italic text-slate-600">
                  <p className="mb-2">¿Qué me falta para alcanzar mi objetivo del mes?</p>
                  <p className="text-slate-400">La IA entiende tu objetivo y te dice exactamente qué necesitas: &ldquo;Necesitas cerrar 8 deals más de $50k para llegar a tu meta. Con tu velocidad actual, lo logras en 5 días...&rdquo;</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Section 8: DifferentiatorBanner ──────────────────────────────────────

function BannerSection() {
  return <DifferentiatorBanner />
}

// ─── Section 9: Final CTA ─────────────────────────────────────────────────

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <MeshGradientBg variant="default" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-5 font-heading text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
            ¿Quieres verlo en acción?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[15px] leading-relaxed text-slate-300">
            En tu diagnóstico gratuito te hacemos una demo en vivo del Dashboard para que veas exactamente cómo funciona y cómo se vería con los datos de tu empresa.
          </p>

          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-6 py-3.5 text-[14px] font-semibold text-[#1A1D2B] shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Agendar mi diagnóstico gratuito
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <p className="mt-6 text-[12px] text-slate-400">
            Sin costo. Sin compromiso.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <>
      <HeroSection />
      <VisionMaestraSection />
      <CRMSection />
      <InboxSection />
      <MarketingSection />
      <ObjectivesSection />
      <AISection />
      <BannerSection />
      <FinalCTASection />
    </>
  )
}
