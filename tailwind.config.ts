import type { Config } from 'tailwindcss'

/**
 * Antuario · Sistema de marca 2026 (Brandbook).
 * Apple-inspired: neutro como melodía, multicolor como acento poético.
 */
const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Foundation — paleta neutra (90% del sistema) */
        onyx:    '#0A0A0A',
        carbon:  '#141414',
        grafito: '#2B2B2B',
        plomo:   '#6E6E73',
        niebla:  '#A1A1A6',
        lino:    '#D2D2D7',
        marfil:  '#F5F5F7',
        nieve:   '#FAFAFA',
        papel:   '#FFFFFF',

        /* Multicolor — acentos poéticos (10%) */
        cobalto: '#4F46E5',
        glicina: '#A78BFA',
        rubor:   '#FB7185',
        nectar:  '#F59E0B',
        salvia:  '#34D399',
        laguna:  '#22D3EE',

        /* Multicolor bright — para fondos Onyx / Carbón */
        'cobalto-b': '#818CF8',
        'glicina-b': '#C4B5FD',
        'rubor-b':   '#FDA4AF',
        'nectar-b':  '#FCD34D',
        'salvia-b':  '#6EE7B7',
        'laguna-b':  '#67E8F9',

        /* Aliases legacy (compatibilidad mínima con páginas internas) */
        background: '#FAFAFA',
        ink: {
          DEFAULT: '#0A0A0A',
          900: '#0A0A0A',
          800: '#141414',
          700: '#2B2B2B',
          600: '#404040',
          500: '#6E6E73',
          400: '#A1A1A6',
          300: '#A1A1A6',
          200: '#D2D2D7',
          100: '#F5F5F7',
          50:  '#FAFAFA',
        },
        paper: {
          DEFAULT: '#FFFFFF',
          alt:     '#FAFAFA',
          dim:     '#F5F5F7',
        },
        line: {
          DEFAULT: 'rgba(10, 10, 10, 0.06)',
          strong:  'rgba(10, 10, 10, 0.10)',
          dark:    'rgba(255, 255, 255, 0.10)',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark:    '#128C7E',
        },
      },
      fontFamily: {
        sans:    ['Geist', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        sm:   '10px',
        md:   '16px',
        lg:   '22px',
        xl:   '28px',
        '2xl': '36px',
        '3xl': '48px',
      },
      boxShadow: {
        /* Sombras brandbook — suaves, nunca duras */
        soft:     '0 1px 2px rgba(15,15,30,0.06), 0 4px 10px rgba(15,15,30,0.06)',
        card:     '0 2px 4px rgba(15,15,30,0.08), 0 8px 18px rgba(15,15,30,0.08)',
        elevated: '0 3px 6px rgba(15,15,30,0.10), 0 14px 26px rgba(15,15,30,0.10)',
        floating: '0 5px 10px rgba(15,15,30,0.14), 0 18px 30px rgba(15,15,30,0.14)',
        wa:       '0 8px 32px rgba(37,211,102,0.40), 0 2px 8px rgba(37,211,102,0.20)',
      },
      animation: {
        'fade-in':       'fadeIn 0.7s ease-out',
        'fade-in-up':    'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'wa-ring':       'waRing 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        'subtle-pulse':  'subtlePulse 3.2s ease-in-out infinite',
        'marquee':       'marquee 36s linear infinite',
        'plasma':        'plasmaFlow 38s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite',
        'aurora-drift':  'auroraDrift 28s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        waRing: {
          '0%':   { transform: 'scale(1)', opacity: '0.55' },
          '70%':  { transform: 'scale(2.0)', opacity: '0' },
          '100%': { transform: 'scale(2.0)', opacity: '0' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.55' },
          '50%':      { opacity: '1' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        plasmaFlow: {
          '0%':   { backgroundPosition: '0% 50%' },
          '25%':  { backgroundPosition: '60% 30%' },
          '50%':  { backgroundPosition: '100% 60%' },
          '75%':  { backgroundPosition: '40% 90%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        auroraDrift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%':      { transform: 'translate3d(2%, -3%, 0) scale(1.05)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
