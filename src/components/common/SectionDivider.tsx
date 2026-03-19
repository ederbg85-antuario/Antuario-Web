'use client'

interface SectionDividerProps {
  variant?: 'light-to-dark' | 'dark-to-light' | 'light-to-alt' | 'alt-to-light' | 'alt-to-dark' | 'dark-to-alt' | 'light-to-light' | 'alt-to-white' | 'white-to-dark'
}

const fills: Record<string, { top: string; bottom: string }> = {
  'light-to-dark': { top: '#FAFAFA', bottom: '#08091A' },
  'dark-to-light': { top: '#08091A', bottom: '#FAFAFA' },
  'light-to-alt':  { top: '#FAFAFA', bottom: '#F5F5F7' },
  'alt-to-light':  { top: '#F5F5F7', bottom: '#FAFAFA' },
  'alt-to-dark':   { top: '#F5F5F7', bottom: '#08091A' },
  'dark-to-alt':   { top: '#08091A', bottom: '#F5F5F7' },
  'light-to-light':{ top: '#FAFAFA', bottom: '#FAFAFA' },
  // Fixed: both use #FAFAFA (the actual page body bg) instead of #FFFFFF
  'alt-to-white':  { top: '#F5F5F7', bottom: '#FAFAFA' },
  'white-to-dark': { top: '#FAFAFA', bottom: '#08091A' },
}

export default function SectionDivider({ variant = 'light-to-dark' }: SectionDividerProps) {
  const { top, bottom } = fills[variant]

  return (
    <div className="relative z-10 overflow-hidden" style={{ height: '56px', marginTop: '-2px', marginBottom: '-2px' }}>
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
