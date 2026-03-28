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
        /* Aligned with Antuario Dashboard design system */
        background: '#f1f5f9',
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#f8fafc',
          dark: '#08091A',
        },
        border: {
          DEFAULT: 'rgba(148, 163, 184, 0.18)',
          light: '#f1f5f9',
          dark: '#1e2535',
        },
        /* Dashboard-aligned multicolor palette — used sparingly */
        antuario: {
          green: '#10b981',
          'green-light': '#34d399',
          'green-dark': '#059669',
          'green-soft': '#ecfdf5',
          cyan: '#06b6d4',
          'cyan-light': '#22d3ee',
          'cyan-soft': '#ecfeff',
          purple: '#8b5cf6',
          'purple-light': '#a78bfa',
          'purple-soft': '#ede9fe',
          orange: '#f97316',
          'orange-light': '#fb923c',
          'orange-soft': '#fff7ed',
          pink: '#f43f5e',
          'pink-light': '#fb7185',
          'pink-soft': '#fff1f2',
          amber: '#f59e0b',
          'amber-light': '#fbbf24',
          'amber-soft': '#fffbeb',
          red: '#ef4444',
          'red-light': '#f87171',
          blue: '#3b82f6',
          'blue-light': '#60a5fa',
          'blue-soft': '#eff6ff',
          indigo: '#6366f1',
        },
        primary: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        navy: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          mid: '#334155',
        },
        text: {
          primary: '#0f172a',
          secondary: '#64748b',
          muted: '#94a3b8',
          inverse: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '5.5xl': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6.5xl': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        /* Dashboard-style multi-layer shadows for 3D depth */
        'card': '0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(148,163,184,0.09)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.09), 0 2px 6px rgba(0,0,0,0.05), 0 0 0 1px rgba(148,163,184,0.12)',
        'card-3d': '0 4px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.05), 0 0 0 1px rgba(148,163,184,0.09)',
        'card-3d-hover': '0 8px 32px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05), 0 24px 64px rgba(0,0,0,0.06), 0 0 0 1px rgba(148,163,184,0.12)',
        /* Glass topbar shadow (from Dashboard) */
        'topbar': '0 8px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,1) inset, 0 0 0 1px rgba(148,163,184,0.14)',
        'elevated': '0 8px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(148,163,184,0.09)',
        'elevated-lg': '0 12px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05), 0 0 0 1px rgba(148,163,184,0.12)',
        'soft': '0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(148,163,184,0.09)',
        'glow-green': '0 0 24px rgba(16,185,129,0.25), 0 0 60px rgba(16,185,129,0.1)',
        'glow-purple': '0 0 24px rgba(139,92,246,0.2)',
        'glow-cyan': '0 0 24px rgba(6,182,212,0.2)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.02)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(160deg, #0f172a 0%, #1e293b 30%, #0f172a 100%)',
        'gradient-multicolor': 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899, #f59e0b, #10b981, #06b6d4)',
        'gradient-warm': 'linear-gradient(135deg, #f97316, #f43f5e, #8b5cf6)',
        'gradient-fresh': 'linear-gradient(135deg, #10b981, #06b6d4)',
        'gradient-light': 'linear-gradient(180deg, #FFFFFF 0%, #f8fafc 100%)',
        'gradient-dark-section': 'linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-delayed': 'floatDelayed 8s ease-in-out infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'blob-slow': 'blob 18s ease-in-out infinite',
        'aurora': 'auroraShift 4s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 24px rgba(16,185,129,0.2)' },
          '50%': { boxShadow: '0 0 48px rgba(16,185,129,0.4)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        auroraShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) scale(1.03) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) scale(0.98) rotate(-1deg)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '25%': { transform: 'translate(30px, -20px) scale(1.1)', opacity: '0.8' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)', opacity: '0.5' },
          '75%': { transform: 'translate(15px, 10px) scale(1.05)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
