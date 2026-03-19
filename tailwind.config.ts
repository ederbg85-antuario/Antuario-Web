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
        /* Antuario Multicolor Palette — hippie Apple meets modern SaaS */
        background: '#FAFAFA',
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F5F5F7',
          dark: '#08091A',
        },
        border: {
          DEFAULT: '#E8E8ED',
          light: '#F5F5F7',
          dark: '#1C2033',
        },
        /* Fresh multicolor primaries */
        antuario: {
          green: '#00D68F',
          'green-light': '#5EFCB0',
          'green-dark': '#00B478',
          'green-soft': '#E6FFF5',
          cyan: '#00C9DB',
          'cyan-light': '#33E5F0',
          'cyan-soft': '#E0FCFF',
          purple: '#8B5CF6',
          'purple-light': '#A78BFA',
          'purple-soft': '#EDE9FE',
          orange: '#FF7A45',
          'orange-light': '#FF9D6E',
          'orange-soft': '#FFF0E6',
          pink: '#F472B6',
          'pink-light': '#F9A8D4',
          'pink-soft': '#FDF2F8',
          amber: '#FBBF24',
          'amber-light': '#FCD34D',
          'amber-soft': '#FFFBEB',
          red: '#FF6B6B',
          'red-light': '#FFA0A0',
          blue: '#4F8EFF',
          'blue-light': '#7DB0FF',
          'blue-soft': '#EBF2FF',
        },
        primary: {
          DEFAULT: '#00D68F',
          light: '#5EFCB0',
          dark: '#00B478',
          50: '#E6FFF5',
          100: '#CCFFEB',
          200: '#99FFD6',
          300: '#5EFCB0',
          400: '#00D68F',
          500: '#00D68F',
          600: '#00B478',
          700: '#009462',
          800: '#00744C',
          900: '#005A3A',
        },
        navy: {
          DEFAULT: '#0C0F1A',
          light: '#141828',
          mid: '#1E2340',
        },
        text: {
          primary: '#1A1D2B',
          secondary: '#5A5F72',
          muted: '#9CA3B4',
          inverse: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
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
        'card': '0 4px 20px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 28px rgba(0,0,0,0.07), 0 16px 48px rgba(0,0,0,0.1)',
        'card-3d': '0 2px 4px rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.06), 0 20px 60px rgba(0,0,0,0.05)',
        'card-3d-hover': '0 4px 8px rgba(0,0,0,0.04), 0 12px 32px rgba(0,0,0,0.08), 0 24px 64px rgba(0,0,0,0.06)',
        'elevated': '0 8px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        'elevated-lg': '0 12px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.05)',
        'soft': '0 2px 6px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.04)',
        'glow-green': '0 0 24px rgba(0,214,143,0.25), 0 0 60px rgba(0,214,143,0.1)',
        'glow-purple': '0 0 24px rgba(139,92,246,0.2)',
        'glow-cyan': '0 0 24px rgba(0,201,219,0.2)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.02)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(160deg, #080A14 0%, #0C0F1A 30%, #10152A 60%, #0C0F1A 100%)',
        'gradient-multicolor': 'linear-gradient(135deg, #00D68F, #00C9DB, #8B5CF6)',
        'gradient-warm': 'linear-gradient(135deg, #FF7A45, #F472B6, #8B5CF6)',
        'gradient-fresh': 'linear-gradient(135deg, #00D68F, #00C9DB)',
        'gradient-light': 'linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 100%)',
        'gradient-dark-section': 'linear-gradient(160deg, #080A14 0%, #0E1225 40%, #111530 70%, #0C0F1A 100%)',
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
          '0%, 100%': { boxShadow: '0 0 24px rgba(0,214,143,0.2)' },
          '50%': { boxShadow: '0 0 48px rgba(0,214,143,0.4)' },
        },
        gradientShift: {
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
