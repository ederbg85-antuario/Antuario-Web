'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import MeshGradientBg from '@/components/common/MeshGradientBg';
import DifferentiatorBanner from '@/components/sections/DifferentiatorBanner';
import { ArrowRight, TrendingUp, Award, Users } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Despacho de Abogados Corporativo',
    industry: 'Legal / Servicios Jurídicos',
    accentColor: 'from-blue-500 to-cyan-500',
    before: {
      items: [
        'Web sin tráfico',
        '0 prospectos digitales',
        'Dependencia total de referencias'
      ]
    },
    actions: [
      'Web optimizada',
      'SEO estratégico',
      'Google Ads de búsqueda'
    ],
    results: [
      { label: 'Posición en búsquedas', value: '#1 en búsquedas clave' },
      { label: 'Prospectos mensuales', value: '+35 orgánicos en 8 meses' },
      { label: 'Dependencia de pauta', value: 'Reducida significativamente' }
    ]
  },
  {
    id: 2,
    title: 'Consultora de Recursos Humanos',
    industry: 'Consultoría / RRHH',
    accentColor: 'from-purple-500 to-pink-500',
    before: {
      items: [
        'Campañas de Meta Ads sin retorno',
        'Web genérica',
        'Sin medición'
      ]
    },
    actions: [
      'Rediseño web',
      'Medición correcta',
      'SEO + Google Ads'
    ],
    results: [
      { label: 'CPLR reducido', value: '60%' },
      { label: 'Leads desde orgánico', value: '80%+ al mes 10' },
      { label: 'Campañas de Meta', value: 'Cerradas' }
    ]
  },
  {
    id: 3,
    title: 'Empresa de Capacitación Corporativa',
    industry: 'Capacitación / Training',
    accentColor: 'from-emerald-500 to-teal-500',
    before: {
      items: [
        'Presencia digital nula',
        'Captación solo por networking',
        'Sin estructura digital'
      ]
    },
    actions: [
      'Sistema completo desde cero',
      'Infraestructura digital',
      'Estrategia integral'
    ],
    results: [
      { label: 'Prospectos digitales', value: '25+ mensuales' },
      { label: 'Plazo', value: '6 meses desde cero' },
      { label: 'Crecimiento', value: 'De 0 a escala' }
    ]
  }
];

export default function ResultadosPage() {
  return (
    <main className="w-full">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-[#0f0f0f]">
        <MeshGradientBg variant="default" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-[28px] sm:text-[36px] font-extrabold tracking-tight text-white mb-6">
              Resultados reales con empresas reales
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              No hablamos de métricas de vanidad. Hablamos de prospectos, oportunidades y crecimiento medible.
            </p>
          </motion.div>
        </div>

        {/* Rounded divider */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-slate-50 rounded-t-[60px]" />
      </section>

      {/* SECTION 2: CASE STUDIES */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-heading text-[28px] sm:text-[36px] font-extrabold tracking-tight text-slate-900 text-center">
              Casos de éxito
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {caseStudies.map((caseStudy, idx) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-card backdrop-blur-sm overflow-hidden"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-[24px] font-extrabold tracking-tight text-slate-900 mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                      {caseStudy.industry}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${caseStudy.accentColor} opacity-20`} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Before */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Antes</p>
                    <ul className="space-y-3">
                      {caseStudy.before.items.map((item, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-slate-300 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What we did */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Qué hicimos</p>
                    <ul className="space-y-3">
                      {caseStudy.actions.map((action, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-slate-300 mt-1">•</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Resultados</p>
                    <ul className="space-y-4">
                      {caseStudy.results.map((result, i) => (
                        <div key={i} className="border-l-2 border-slate-200 pl-3">
                          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            {result.label}
                          </p>
                          <p className={`text-sm font-bold bg-gradient-to-r ${caseStudy.accentColor} bg-clip-text text-transparent mt-1`}>
                            {result.value}
                          </p>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HIGHLIGHTED STAT */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-[#0f0f0f]">
        <MeshGradientBg variant="default" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-12 backdrop-blur-lg text-center"
          >
            <div className="mb-6 flex justify-center">
              <TrendingUp className="w-16 h-16 text-emerald-400" strokeWidth={1.5} />
            </div>
            <p className="text-lg sm:text-xl text-slate-300 mb-4">
              <span className="font-bold">Clientes</span> que hoy generan el
            </p>
            <h3 className="font-heading text-[40px] sm:text-[52px] font-extrabold tracking-tight text-white mb-4">
              80%+
            </h3>
            <p className="text-lg sm:text-xl text-slate-300 mb-8">
              de sus prospectos desde búsqueda orgánica
            </p>
            <p className="text-sm text-slate-400">
              Sin gastar un peso en publicidad pagada
            </p>
          </motion.div>
        </div>

        {/* Rounded divider */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-slate-50 rounded-t-[60px]" />
      </section>

      {/* SECTION 4: DIFFERENTIATOR BANNER */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 bg-slate-50">
        <DifferentiatorBanner />
      </section>

      {/* SECTION 5: CTA */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-[#0f0f0f]">
        <MeshGradientBg variant="default" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-[28px] sm:text-[36px] font-extrabold tracking-tight text-white mb-8">
              ¿Quieres resultados así para tu empresa?
            </h2>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg hover:shadow-lg transition-all duration-300 btn-shine group"
            >
              Agendar mi diagnóstico gratuito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-sm text-slate-400 mt-6">
              Sin costo. Sin compromiso.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
