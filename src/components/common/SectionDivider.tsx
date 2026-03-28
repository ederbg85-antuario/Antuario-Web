'use client'

interface SectionDividerProps {
  variant?: 'light-to-dark' | 'dark-to-light' | 'light-to-alt' | 'alt-to-light' | 'alt-to-dark' | 'dark-to-alt' | 'light-to-light' | 'alt-to-white' | 'white-to-dark'
}

const fills: Record<string, { top: string; bottom: string }> = {
  'light-to-dark': { top: '#f1f5f9', bottom: '#0f172a' },
  'dark-to-light': { top: '#0f172a', bottom: '#f1f5f9' },
  'light-to-alt':  { top: '#f1f5f9', bottom: '#f8fafc' },
  'alt-to-light':  { top: '#f8fafc', bottom: '#f1f5f9' },
  'alt-to-dark':   { top: '#f8fafc', bottom: '#0f172a' },
  'dark-to-alt':   { top: '#0f172a', bottom: '#f8fafc' },
  'light-to-light':{ top: '#f1f5f9', bottom: '#f1f5f9' },
  // Fixed: both use #f1f5f9 (the actual page body bg) instead of #FFFFFF
  'alt-to-white':  { top: '#f8fafc', bottom: '#f1f5f9' },
  'white-to-dark': { top: '#f1f5f9', bottom: '#0f172a' },
}

export default function SectionDivider({ variant = 'light-to-dark' }: SectionDividerProps) {
  const { top, bottom } = fills[variant]

  return (
    <div className="relative z-10 overflow-hidden" style={{ height: '56px', marginTop: '-4px', marginBottom: '-4px' }}>
      <svg
        viewBox="0 0 1440 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <rect width="1440" height="56" fill={bottom} />
        <path
          d="M0 0H1440V28C1440 43.464 1426.57 56 1410 56H30C13.4315 56 0 43.464 0 28V0Z"
          fill={top}
        />
      </svg>
    </div>
  )
}
