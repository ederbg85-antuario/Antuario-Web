'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import MeshGradientBg from '@/components/common/MeshGradientBg';
import DifferentiatorBanner from '@/components/sections/DifferentiatorBanner';
import { ArrowRight, Search, Globe, BarChart3, Target, CheckCircle2, Zap } from 'lucide-react';

const diagnosticIncludes = [
  {
    icon: Search,
    title: 'Auditoría de tu página web',
    description: '¿Convierte? ¿Está optimizada? ¿Qué le falta?',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Globe,
    title: 'Revisión de tu presencia en Google',
    description: '¿Apareces en las búsquedas que importan?',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Análisis de tus campañas (si tienes)',
    description: '¿Las conversiones están bien medidas?',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Target,
    title: 'Diagnóstico de tu proceso de captación',
    description: '¿Cómo llegan hoy? ¿Dónde están los cuellos de botella?',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: CheckCircle2,
    title: 'Hallazgos concretos y accionables',
    description: 'Te decimos exactamente qué está mal y cómo mejorarlo',
    color: 'from-indigo-500 to-blue-500'
  }
];

export default function DiagnosticoPage() {
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
              Descubre exactamente qué está frenando el crecimiento digital de tu empresa
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Te hacemos un diagnóstico completo de tu situación digital actual. Gratis. Sin compromiso.
            </p>
          </motion.div>
        </div>

        {/* Rounded divider */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-slate-50 rounded-t-[60px]" />
      </section>

      {/* SECTION 2: WHAT'S INCLUDED */}
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
              Qué vas a recibir en tu diagnóstico
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            {diagnosticIncludes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-card backdrop-blur-sm group hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-extrabold tracking-tight text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: NOT A SALES PITCH */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-white">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-[28px] sm:text-[36px] font-extrabold tracking-tight text-slate-900 mb-8">
              Esto NO es un pitch de ventas
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Sabemos que probablemente ya recibiste muchas "auditorías gratis" que terminan siendo un pitch agresivo. La nuestra es diferente.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Lo que vas a recibir es un análisis real, hecho por nuestros especialistas. Vamos a identificar exactamente qué está funcionando y qué no. Te vamos a dar recomendaciones concretas que puedas implementar.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Y si decidimos que podemos ayudarte a crecer, te lo vamos a decir claramente. Pero eso es después. Primero, queremos ayudarte a entender tu situación. Punto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: DASHBOARD DEMO */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200/60 bg-white/80 p-10 shadow-card backdrop-blur-sm"
          >
            <div className="flex items-start gap-4 mb-6">
              <Zap className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 mb-3">
                  Bonus: Demo en vivo de nuestro Dashboard
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Durante tu diagnóstico, te vamos a mostrar en vivo nuestro Dashboard de gestión de campañas. Vas a ver exactamente cómo medimos, dónde vienen los prospectos y cómo los seguimos. Es la herramienta que usan nuestros clientes para ver sus resultados en tiempo real.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: DIFFERENTIATOR BANNER */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 bg-white">
        <DifferentiatorBanner />
      </section>

      {/* SECTION 6: CTA FINAL */}
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
              ¿Listo para descubrir qué está frenando tu crecimiento?
            </h2>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg hover:shadow-lg transition-all duration-300 btn-shine group"
            >
              Quiero mi diagnóstico gratuito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-sm text-slate-400 mt-6">
              Sin costo. Sin compromiso. Escríbenos y agendamos.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
