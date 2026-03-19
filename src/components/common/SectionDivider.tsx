'use client'

interface SectionDividerProps {
  /** Which direction: from light going into dark, or dark going into light */
  variant?: 'light-to-dark' | 'dark-to-light' | 'light-to-alt' | 'alt-to-light' | 'alt-to-dark' | 'dark-to-alt' | 'light-to-light' | 'alt-to-white' | 'white-to-dark'
}

const fills: Record<string, { top: string; bottom: string }> = {
  'light-to-dark': { top: '#FAFAFA', bottom: '#08091A' },
  'dark-to-light': { top: '#08091A', bottom: '#FAFAFA' },
  'light-to-alt': { top: '#FAFAFA', bottom: '#F5F5F7' },
  'alt-to-light': { top: '#F5F5F7', bottom: '#FAFAFA' },
  'alt-to-dark': { top: '#F5F5F7', bottom: '#08091A' },
  'dark-to-alt': { top: '#08091A', bottom: '#F5F5F7' },
  'light-to-light': { top: '#FFFFFF', bottom: '#FAFAFA' },
  'alt-to-white': { top: '#F5F5F7', bottom: '#FFFFFF' },
  'white-to-dark': { top: '#FFFFFF', bottom: '#08091A' },
}

export default function SectionDivider({ variant = 'light-to-dark' }: SectionDividerProps) {
  const { top, bottom } = fills[variant]

  return (
    <div className="relative -my-px overflow-hidden" style={{ height: '60px' }}>
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {/* Background fill */}
        <rect width="1440" height="60" fill={bottom} />
        {/* Rounded shape from top section */}
        <path
          d="M0 0H1440V30C1440 46.5685 1426.57 60 1410 60H30C13.4315 60 0 46.5685 0 30V0Z"
          fill={top}
        />
      </svg>
      {/* Subtle shadow line at the curve */}
      <div
        className="absolute bottom-0 left-[3%] right-[3%] h-[1px] rounded-full opacity-[0.06]"
        style={{ background: `linear-gradient(to right, transparent, ${variant.includes('dark') ? 'white' : 'black'}, transparent)` }}
      />
    </div>
  )
}
