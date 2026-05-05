import type { Config } from 'tailwindcss'

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
        /* Paleta neutra — minimalista y profesional */
        background: '#fafafa',
        ink: {
          DEFAULT: '#0a0a0a',
          900: '#0a0a0a',
          800: '#171717',
          700: '#262626',
          600: '#404040',
          500: '#525252',
          400: '#737373',
          300: '#a3a3a3',
          200: '#d4d4d4',
          100: '#e5e5e5',
          50: '#f5f5f5',
        },
        paper: {
          DEFAULT: '#ffffff',
          alt: '#fafafa',
          dim: '#f5f5f5',
        },
        line: {
          DEFAULT: 'rgba(10, 10, 10, 0.08)',
          strong: 'rgba(10, 10, 10, 0.14)',
          dark: 'rgba(255, 255, 255, 0.08)',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
        },
      },
      fontFamily: {
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        '4.5xl': ['2.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '5.5xl': ['3.25rem', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        '6.5xl': ['4rem', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(10,10,10,0.06)',
        'soft': '0 2px 12px rgba(0,0,0,0.04)',
        'elevated': '0 12px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        'wa': '0 8px 32px rgba(37,211,102,0.45), 0 2px 8px rgba(37,211,102,0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        'wa-ring': 'waRing 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        'wa-bounce': 'waBounce 3.5s ease-in-out infinite',
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
        'marquee': 'marquee 36s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        waRing: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '70%': { transform: 'scale(2.1)', opacity: '0' },
          '100%': { transform: 'scale(2.1)', opacity: '0' },
        },
        waBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
