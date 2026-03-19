'use client'

import { motion } from 'framer-motion'
import { Globe, Bot, LineChart, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    color: 'from-antuario-green to-antuario-cyan',
    accent: 'antuario-green',
    title: 'Construimos todo lo que tu empresa necesita para atraer clientes',
    copy: 'Creamos tu página web profesional, campañas de Google para que te encuentren quienes ya buscan lo que ofreces, y configuramos agentes de inteligencia artificial que trabajan para ti desde el primer día. Tú no tienes que preocuparte por nada técnico — nosotros lo armamos todo.',
    visual: (
      <div className="relative">
        <div className="flex items-center justify-center gap-5 rounded-[28px] border border-border bg-white p-8 shadow-card-3d">
          {[
            { icon: Globe, label: 'Web', color: 'bg-antuario-cyan-soft text-antuario-cyan', glow: 'shadow-[0_0_20px_rgba(0,201,219,0.15)]' },
            { icon: LineChart, label: 'Google Ads', color: 'bg-antuario-blue-soft text-antuario-blue', glow: 'shadow-[0_0_20px_rgba(79,142,255,0.15)]' },
            { icon: Bot, label: 'Agentes IA', color: 'bg-antuario-purple-soft text-antuario-purple', glow: 'shadow-[0_0_20px_rgba(139,92,246,0.15)]' },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="flex flex-col items-center gap-3"
            >
              <div className={`rounded-2xl p-4 ${item.color} ${item.glow} transition-shadow duration-300`}>
                <item.icon className="h-7 w-7" />
              </div>
              <span className="text-xs font-semibold text-text-secondary">{item.label}</span>
            </motion.div>
          ))}
        </div>
        {/* Decorative floating dots */}
        <div className="pointer-events-none absolute -right-3 -top-3 h-6 w-6 animate-float rounded-full bg-antuario-cyan/20 blur-sm" />
        <div className="pointer-events-none absolute -bottom-2 -left-4 h-5 w-5 animate-float-slow rounded-full bg-antuario-green/20 blur-sm" />
      </div>
    ),
  },
  {
    number: '02',
    color: 'from-antuario-purple to-antuario-cyan',
    accent: 'antuario-purple',
    title: 'Integramos todo en Antuario Dashboard — tu centro de control',
    copy: 'Cada activo, cada lead, cada métrica se conecta automáticamente a Antuario Dashboard. Desde el primer día tienes visibilidad completa de qué está pasando con tu inversión. No necesitas abrir 5 herramientas distintas — todo está en un solo lugar, en tiempo real.',
    visual: (
      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 rounded-[44px] bg-gradient-to-br from-antuario-purple/20 via-antuario-cyan/10 to-antuario-green/10 blur-3xl" style={{ zIndex: -1 }} />
        <div className="overflow-hidden rounded-[24px] border border-white/[0.12] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-[2px] shadow-[0_16px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="overflow-hidden rounded-[23px]">
            <div className="flex items-center gap-1.5 border-b border-white/[0.05] bg-[#0C0F1A] px-3 py-2">
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                <div className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                <div className="h-2 w-2 rounded-full bg-[#28C840]" />
              </div>
              <div className="ml-2 flex flex-1 items-center gap-1 rounded-md bg-white/[0.05] px-2 py-0.5">
                <div className="h-1 w-1 rounded-full bg-antuario-green/60" />
                <span className="text-[9px] text-white/20">app.antuario.mx/vision-marketing</span>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshot-metricas.png"
              alt="Antuario Dashboard — Visión General de Marketing"
              className="block w-full"
              style={{ maxHeight: '300px', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
        <div className="pointer-events-none absolute -left-3 -top-3 h-5 w-5 animate-float rounded-full bg-antuario-purple/25 blur-sm" />
      </div>
    ),
  },
  {
    number: '03',
    color: 'from-antuario-cyan to-antuario-blue',
    accent: 'antuario-cyan',
    title: 'Empiezan a llegar personas interesadas en tus servicios',
    copy: 'Una vez que tus activos están listos, comienzan a llegar personas que buscan exactamente lo que tu empresa ofrece. A estas personas les llamamos "leads". Pero aquí viene lo importante: no todas valen la pena — y ahí es donde entra nuestra tecnología.',
    visual: (
      <div className="relative">
        <div className="flex flex-col items-center gap-3 rounded-[28px] border border-border bg-white p-8 shadow-card-3d">
          <div className="flex gap-2">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, type: 'spring', stiffness: 300 }}
                className="h-5 w-5 rounded-full bg-antuario-cyan-soft shadow-soft"
              />
            ))}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.08, type: 'spring', stiffness: 300 }}
                className="h-5 w-5 rounded-full bg-antuario-cyan/30"
              />
            ))}
          </div>
          <div className="mt-1 flex gap-3">
            {Array.from({ length: 2 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.15, type: 'spring', stiffness: 200 }}
                className="h-7 w-7 rounded-full bg-antuario-green shadow-glow-green"
              />
            ))}
          </div>
          <p className="mt-2 text-xs font-medium text-text-muted">Filtrados automáticamente</p>
        </div>
        <div className="pointer-events-none absolute -bottom-3 -right-3 h-6 w-6 animate-float-slow rounded-full bg-antuario-cyan/20 blur-sm" />
      </div>
    ),
  },
  {
    number: '04',
    color: 'from-antuario-purple to-antuario-pink',
    accent: 'antuario-purple',
    title: 'La IA filtra, califica y atiende por ti — automáticamente',
    copy: 'Nuestros agentes de IA contestan mensajes de WhatsApp y correos, identifican quién tiene potencial real de convertirse en cliente, investigan de qué empresa viene cada persona e incluso preparan un perfil completo antes de que tu equipo de ventas lo vea. Tu equipo solo recibe oportunidades reales, listas para cerrar.',
    visual: (
      <div className="flex gap-4">
        <div className="flex-1 rounded-[24px] border border-border bg-white p-5 shadow-card-3d">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-antuario-green-soft shadow-soft">
              <Bot className="h-4 w-4 text-antuario-green" />
            </div>
            <div>
              <p className="text-xs font-bold text-text-primary">Agente IA</p>
              <p className="text-[10px] font-medium text-antuario-green">En línea</p>
            </div>
          </div>
          <div className="space-y-2.5">
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="rounded-2xl rounded-tl-md bg-surface-alt px-3.5 py-2.5"
            >
              <p className="text-xs text-text-secondary">Hola, me interesa una cotización...</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-antuario-green px-3.5 py-2.5 shadow-soft"
            >
              <p className="text-xs text-navy">¡Con gusto! ¿Me puedes compartir el nombre de tu empresa?</p>
            </motion.div>
          </div>
        </div>
        <div className="hidden flex-1 rounded-[24px] border border-border bg-white p-5 shadow-card-3d sm:block">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-text-muted">Lead Profile</p>
          <div className="mb-3 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-antuario-purple-soft text-xs font-bold text-antuario-purple shadow-soft">MT</div>
            <div>
              <p className="text-xs font-bold">María Torres</p>
              <p className="text-[10px] text-text-muted">Bimbo</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[10px] text-text-muted">Score</span>
              <span className="rounded-full bg-antuario-green-soft px-2.5 py-0.5 text-[10px] font-bold text-antuario-green shadow-soft">Alto</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-text-muted">Etapa</span>
              <span className="text-[10px] font-semibold text-text-primary">Lead Relevante</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '05',
    color: 'from-antuario-orange to-antuario-amber',
    accent: 'antuario-orange',
    title: 'Tu equipo cierra negocios, nosotros medimos todo',
    copy: 'Mientras tu equipo se enfoca en hacer propuestas y cerrar clientes, nosotros monitoreamos cada número: cuánto cuesta cada cliente potencial, qué tan bien convierte tu equipo de ventas, qué campañas funcionan y cuáles no. Todo visible en Antuario Dashboard — en tiempo real, las 24 horas.',
    visual: (
      <div className="relative">
        <div className="pointer-events-none absolute -inset-6 rounded-[44px] bg-gradient-to-br from-antuario-orange/15 via-antuario-amber/8 to-antuario-green/10 blur-3xl" style={{ zIndex: -1 }} />
        <div className="overflow-hidden rounded-[24px] border border-white/[0.12] bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-[2px] shadow-[0_16px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="overflow-hidden rounded-[23px]">
            <div className="flex items-center gap-1.5 border-b border-white/[0.05] bg-[#0C0F1A] px-3 py-2">
              <div className="flex gap-1">
                <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                <div className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                <div className="h-2 w-2 rounded-full bg-[#28C840]" />
              </div>
              <div className="ml-2 flex flex-1 items-center gap-1 rounded-md bg-white/[0.05] px-2 py-0.5">
                <div className="h-1 w-1 rounded-full bg-antuario-green/60" />
                <span className="text-[9px] text-white/20">app.antuario.mx/vision-ventas</span>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshot-embudo.png"
              alt="Antuario Dashboard — Visión de Ventas con métricas clave"
              className="block w-full"
              style={{ maxHeight: '300px', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
        <div className="pointer-events-none absolute -right-3 top-1/2 h-5 w-5 animate-float rounded-full bg-antuario-orange/20 blur-sm" />
      </div>
    ),
  },
  {
    number: '06',
    color: 'from-antuario-green to-antuario-green-light',
    accent: 'antuario-green',
    title: 'Cada mes optimizamos para que los resultados mejoren',
    copy: 'No te entregamos una campaña y desaparecemos. Cada mes revisamos los números, encontramos exactamente qué se puede mejorar y lo optimizamos. Mes con mes, tu inversión trabaja mejor. Al cabo del primer año, tu empresa tiene una máquina de generación de clientes que funciona de forma predecible y medible.',
    visual: (
      <div className="relative">
        <div className="flex items-end gap-2 rounded-[28px] border border-border bg-white p-6 shadow-card-3d">
          {[
            { h: '28%', label: 'M1', color: 'bg-antuario-cyan-soft' },
            { h: '38%', label: 'M2', color: 'bg-antuario-cyan/30' },
            { h: '46%', label: 'M3', color: 'bg-antuario-cyan/50' },
            { h: '55%', label: 'M4', color: 'bg-antuario-green/40' },
            { h: '62%', label: 'M5', color: 'bg-antuario-green/50' },
            { h: '70%', label: 'M6', color: 'bg-antuario-green/60' },
            { h: '78%', label: 'M7', color: 'bg-antuario-green/70' },
            { h: '88%', label: 'M8', color: 'bg-antuario-green/80' },
            { h: '96%', label: 'M9', color: 'bg-antuario-green' },
          ].map((bar, i) => (
            <motion.div
              key={bar.label}
              className="flex flex-1 flex-col items-center gap-1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <div className="relative w-full" style={{ height: '80px' }}>
                <motion.div
                  className={`absolute bottom-0 w-full rounded-lg ${bar.color} shadow-soft`}
                  initial={{ height: '0%' }}
                  whileInView={{ height: bar.h }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: 'easeOut' }}
                />
              </div>
              <span className="text-[9px] font-medium text-text-muted">{bar.label}</span>
            </motion.div>
          ))}
          <div className="ml-2 flex items-center">
            <TrendingUp className="h-5 w-5 text-antuario-green" />
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-2 -left-3 h-6 w-6 animate-float rounded-full bg-antuario-green/20 blur-sm" />
      </div>
    ),
  },
]

export default function StepsSection() {
  return (
    <section id="como-funciona" className="relative px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Background accents — subtle animated blobs */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] animate-blob rounded-full bg-antuario-green/[0.03] blur-[180px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[500px] w-[500px] animate-blob-slow rounded-full bg-antuario-purple/[0.03] blur-[180px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[400px] w-[400px] animate-float-slow rounded-full bg-antuario-cyan/[0.02] blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-antuario-green">
            Paso a paso
          </p>
          <h2 className="mb-5 font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Así es como funciona
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Sin letra chiquita. Sin complicaciones. Esto es exactamente lo que hacemos por tu empresa.
          </p>
        </motion.div>

        <div className="space-y-14 sm:space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Text side */}
                <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
                    className="mb-5 flex items-center gap-3"
                  >
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-sm font-bold text-white shadow-elevated`}>
                      {step.number}
                    </span>
                  </motion.div>
                  <h3 className="mb-4 font-heading text-2xl font-bold leading-tight text-text-primary sm:text-[28px]">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {step.copy}
                  </p>
                </div>

                {/* Visual side */}
                <motion.div
                  className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  {step.visual}
                </motion.div>
              </div>

              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className="mx-auto mt-14 hidden w-px lg:block" style={{ height: '40px' }}>
                  <motion.div
                    className="mx-auto h-full w-px bg-gradient-to-b from-border to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ transformOrigin: 'top' }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
