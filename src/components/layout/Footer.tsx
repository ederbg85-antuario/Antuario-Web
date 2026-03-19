'use client'

import { siteConfig } from '@/config/site'
import { Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react'
import Logo from '@/components/common/Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#08091A]">
      {/* Mesh gradient blobs — subtle and warm */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '45%',
            height: '45%',
            left: '10%',
            top: '20%',
            background: 'radial-gradient(circle, rgba(0, 214, 143, 0.08) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(60px)',
            animation: 'meshFloat0 16s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '40%',
            height: '40%',
            left: '80%',
            top: '30%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(60px)',
            animation: 'meshFloat1 18s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '35%',
            height: '35%',
            left: '50%',
            top: '70%',
            background: 'radial-gradient(circle, rgba(0, 201, 219, 0.05) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(60px)',
            animation: 'meshFloat2 20s ease-in-out infinite',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Top rounded edge from light section */}
      <div className="absolute -top-1 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 0H1440V10C1440 26.5685 1426.57 40 1410 40H30C13.4315 40 0 26.5685 0 10V0Z" fill="#F5F5F7" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Logo variant="light" height={22} />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">
              {siteConfig.tagline}. Combinamos IA, marketing y tecnología propia para impulsar el crecimiento de empresas de servicios B2B en México.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-2.5">
              {[
                { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
                { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-white/35 transition-all duration-300 hover:border-antuario-green/30 hover:bg-antuario-green/10 hover:text-antuario-green"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav column */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-white/25">
              Navegación
            </p>
            <nav className="flex flex-col gap-2.5">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-1 text-sm text-white/40 transition-colors duration-200 hover:text-antuario-green"
                >
                  {item.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-white/25">
              Contacto
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-white/40 transition-colors duration-200 hover:text-antuario-green"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.url}
                className="text-sm text-white/40 transition-colors duration-200 hover:text-antuario-green"
              >
                antuario.mx
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-6 sm:flex-row">
          <p className="text-[11px] text-white/20">
            &copy; {currentYear} {siteConfig.name} — Todos los derechos reservados
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-[11px] text-white/20 transition-colors hover:text-white/40">
              Aviso de privacidad
            </a>
            <a href="#" className="text-[11px] text-white/20 transition-colors hover:text-white/40">
              Términos de servicio
            </a>
          </div>
        </div>
      </div>

      {/* Reuse MeshGradientBg keyframes */}
      <style jsx>{`
        @keyframes meshFloat0 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(-45%, -55%) scale(1.08); }
          66% { transform: translate(-55%, -45%) scale(0.95); }
        }
        @keyframes meshFloat1 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          25% { transform: translate(-55%, -48%) scale(1.05); }
          50% { transform: translate(-45%, -52%) scale(0.92); }
          75% { transform: translate(-52%, -46%) scale(1.03); }
        }
        @keyframes meshFloat2 {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50% { transform: translate(-48%, -52%) scale(1.06) rotate(3deg); }
        }
      `}</style>
    </footer>
  )
}
