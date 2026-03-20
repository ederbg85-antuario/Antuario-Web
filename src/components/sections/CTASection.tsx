'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { siteConfig } from '@/config/site'
import MeshGradientBg from '@/components/common/MeshGradientBg'

export default function CTASection() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[#08091A] px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <MeshGradientBg variant="default" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-5 font-heading text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
            ¿Quieres saber si esta solución le queda a tu empresa?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[15px] leading-relaxed text-white/50">
            Hacemos un diagnóstico gratuito donde analizamos tu situación actual, identificamos tus áreas de mejora y te mostramos cómo funciona todo en una demo en vivo. Sin compromiso — si no somos lo que necesitas, no pasa nada.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1A1D2B] shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Solicita tu diagnóstico gratis
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#plataforma"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-5 py-2.5 text-[13px] font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/12 hover:bg-white/[0.06]"
            >
              <Sparkles className="h-3.5 w-3.5 text-antuario-purple-light" />
              Pide una demo
            </a>
          </div>

          <p className="mt-6 text-[12px] text-white/25">
            Te respondemos por WhatsApp en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  )
}
