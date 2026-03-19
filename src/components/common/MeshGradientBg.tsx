'use client'

/**
 * Animated multicolor mesh gradient background.
 * Light variants: #FAFAFA base (matches body bg) with soft pastel blobs.
 * LSD variant: subtle psychedelic — slow hue cycling, organic morphing, gentle
 * SVG displacement. No pink. Blobs concentrated toward the bottom half.
 */
export default function MeshGradientBg({
  variant = 'default',
}: {
  variant?: 'default' | 'warm' | 'cool' | 'light' | 'light-warm' | 'lsd'
}) {
  const isLight = variant === 'light' || variant === 'light-warm'
  const isLSD   = variant === 'lsd'

  const palettes = {
    default: [
      { color: 'rgba(0, 214, 143, 0.22)', size: 55, x: 15, y: 20, delay: 0 },
      { color: 'rgba(139, 92, 246, 0.18)', size: 50, x: 75, y: 15, delay: 2 },
      { color: 'rgba(0, 201, 219, 0.16)', size: 45, x: 45, y: 65, delay: 4 },
      { color: 'rgba(251, 191, 36, 0.10)',  size: 35, x: 25, y: 80, delay: 3 },
      { color: 'rgba(79, 142, 255, 0.10)',  size: 38, x: 60, y: 35, delay: 5 },
    ],
    warm: [
      { color: 'rgba(251, 191, 36, 0.18)',  size: 48, x: 70, y: 15, delay: 2 },
      { color: 'rgba(0, 214, 143, 0.16)',   size: 50, x: 50, y: 60, delay: 4 },
      { color: 'rgba(139, 92, 246, 0.14)',  size: 42, x: 85, y: 65, delay: 5 },
      { color: 'rgba(255, 122, 69, 0.12)',  size: 38, x: 15, y: 75, delay: 3 },
    ],
    cool: [
      { color: 'rgba(0, 201, 219, 0.22)',  size: 55, x: 25, y: 20, delay: 0 },
      { color: 'rgba(139, 92, 246, 0.18)', size: 50, x: 70, y: 25, delay: 2 },
      { color: 'rgba(0, 214, 143, 0.15)',  size: 45, x: 40, y: 70, delay: 4 },
      { color: 'rgba(79, 142, 255, 0.14)', size: 42, x: 80, y: 65, delay: 6 },
    ],
    light: [
      { color: 'rgba(0, 214, 143, 0.45)',  size: 70, x: 5,  y: 60, delay: 0   },
      { color: 'rgba(139, 92, 246, 0.38)', size: 65, x: 85, y: 50, delay: 1   },
      { color: 'rgba(0, 201, 219, 0.42)',  size: 60, x: 50, y: 75, delay: 2   },
      { color: 'rgba(251, 191, 36, 0.35)', size: 50, x: 15, y: 90, delay: 1.5 },
      { color: 'rgba(79, 142, 255, 0.30)', size: 55, x: 60, y: 40, delay: 2.5 },
    ],
    'light-warm': [
      { color: 'rgba(251, 191, 36, 0.42)',  size: 62, x: 80, y: 50, delay: 1   },
      { color: 'rgba(0, 214, 143, 0.38)',   size: 65, x: 50, y: 70, delay: 2   },
      { color: 'rgba(139, 92, 246, 0.35)',  size: 58, x: 90, y: 80, delay: 2.5 },
      { color: 'rgba(255, 122, 69, 0.32)',  size: 52, x: 5,  y: 85, delay: 1.5 },
      { color: 'rgba(0, 201, 219, 0.28)',   size: 55, x: 40, y: 35, delay: 3   },
    ],
    /**
     * LSD — subtle psychedelic, no pink.
     * Blobs concentrated in the bottom 60-95% so colour "rises from below".
     * Opacity 0.20-0.32 → very soft. Hue cycles slowly for the living feel.
     */
    lsd: [
      { color: 'rgba(0, 214, 143, 0.30)',  size: 78, x: 8,  y: 72, delay: 0   },
      { color: 'rgba(139, 92, 246, 0.26)', size: 72, x: 85, y: 68, delay: 1.0 },
      { color: 'rgba(0, 201, 219, 0.28)',  size: 70, x: 50, y: 82, delay: 1.8 },
      { color: 'rgba(251, 191, 36, 0.22)', size: 65, x: 22, y: 90, delay: 2.4 },
      { color: 'rgba(79, 142, 255, 0.25)', size: 68, x: 68, y: 88, delay: 0.7 },
      { color: 'rgba(255, 122, 69, 0.20)', size: 60, x: 38, y: 78, delay: 1.4 },
      { color: 'rgba(0, 180, 110, 0.22)',  size: 55, x: 88, y: 85, delay: 2.1 },
      { color: 'rgba(90, 140, 255, 0.20)', size: 52, x: 14, y: 86, delay: 3.0 },
    ],
  }

  const blobs = palettes[variant]
  const baseColor = (isLight || isLSD) ? '#FAFAFA' : '#08091A'

  const getAnimation = (i: number) => {
    if (isLSD)   return `lsdBlob${i % 4} ${7 + i * 0.8}s ease-in-out infinite`
    if (isLight) return `antuarioBlob${i % 4} ${5 + i * 0.8}s ease-in-out infinite`
    return `antuarioBlob${i % 4} ${14 + i * 2}s ease-in-out infinite`
  }

  const getBlur = (i: number) => {
    if (isLSD)   return `blur(${95 + (i % 3) * 15}px)`
    if (isLight) return 'blur(70px)'
    return 'blur(60px)'
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: baseColor }} />

      {/* LSD displacement filter — very gentle (scale 28) */}
      {isLSD && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id="lsd-distort" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008 0.006"
                numOctaves="3"
                result="noise"
                seed="5"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.006 0.005;0.011 0.008;0.007 0.005;0.012 0.009;0.006 0.005"
                  dur="12s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="28"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
      )}

      {/* Blobs */}
      <div
        className="absolute inset-0"
        style={isLSD ? { filter: 'url(#lsd-distort)' } : undefined}
      >
        {blobs.map((blob, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${blob.size}%`,
              height: `${blob.size}%`,
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
              transform: 'translate(-50%, -50%)',
              animation: getAnimation(i),
              animationDelay: `${blob.delay}s`,
              filter: getBlur(i),
              borderRadius: isLSD ? '60% 40% 70% 30% / 40% 60% 30% 70%' : '50%',
            }}
          />
        ))}
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0"
        style={{
          opacity: isLSD ? 0.014 : isLight ? 0.012 : 0.02,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
          backgroundSize: '150px',
        }}
      />

      <style jsx>{`
        /* ── Standard blob keyframes ─────────────────────────── */
        @keyframes antuarioBlob0 {
          0%   { transform: translate(-50%,-50%) scale(1); }
          15%  { transform: translate(-35%,-60%) scale(1.18); }
          30%  { transform: translate(-60%,-40%) scale(0.88); }
          45%  { transform: translate(-42%,-55%) scale(1.12); }
          60%  { transform: translate(-58%,-48%) scale(0.92); }
          75%  { transform: translate(-38%,-52%) scale(1.08); }
          100% { transform: translate(-50%,-50%) scale(1); }
        }
        @keyframes antuarioBlob1 {
          0%   { transform: translate(-50%,-50%) scale(1)    rotate(0deg); }
          20%  { transform: translate(-62%,-38%) scale(1.15) rotate(5deg); }
          40%  { transform: translate(-38%,-62%) scale(0.85) rotate(-4deg); }
          60%  { transform: translate(-55%,-42%) scale(1.1)  rotate(3deg); }
          80%  { transform: translate(-45%,-58%) scale(0.9)  rotate(-2deg); }
          100% { transform: translate(-50%,-50%) scale(1)    rotate(0deg); }
        }
        @keyframes antuarioBlob2 {
          0%   { transform: translate(-50%,-50%) scale(1); }
          17%  { transform: translate(-40%,-64%) scale(1.2); }
          33%  { transform: translate(-64%,-36%) scale(0.82); }
          50%  { transform: translate(-46%,-58%) scale(1.14); }
          67%  { transform: translate(-56%,-44%) scale(0.88); }
          83%  { transform: translate(-42%,-54%) scale(1.06); }
          100% { transform: translate(-50%,-50%) scale(1); }
        }
        @keyframes antuarioBlob3 {
          0%   { transform: translate(-50%,-50%) scale(1)    rotate(0deg); }
          25%  { transform: translate(-58%,-40%) scale(1.16) rotate(-6deg); }
          50%  { transform: translate(-42%,-60%) scale(0.86) rotate(5deg); }
          75%  { transform: translate(-54%,-46%) scale(1.1)  rotate(-3deg); }
          100% { transform: translate(-50%,-50%) scale(1)    rotate(0deg); }
        }

        /* ── LSD: slow & subtle, hue cycles gently, shape morphs ── */
        @keyframes lsdBlob0 {
          0%   { transform:translate(-50%,-50%) scale(1)    rotate(0deg);
                 filter:hue-rotate(0deg)   saturate(1.25) blur(95px);
                 border-radius:60% 40% 70% 30%/40% 60% 30% 70%; }
          25%  { transform:translate(-40%,-60%) scale(1.12) rotate(3deg);
                 filter:hue-rotate(90deg)  saturate(1.35) blur(80px);
                 border-radius:45% 55% 50% 50%/55% 45% 55% 45%; }
          50%  { transform:translate(-60%,-42%) scale(0.90) rotate(-2deg);
                 filter:hue-rotate(180deg) saturate(1.28) blur(105px);
                 border-radius:70% 30% 55% 45%/30% 70% 45% 55%; }
          75%  { transform:translate(-46%,-56%) scale(1.08) rotate(2deg);
                 filter:hue-rotate(270deg) saturate(1.32) blur(88px);
                 border-radius:50% 50% 35% 65%/65% 35% 60% 40%; }
          100% { transform:translate(-50%,-50%) scale(1)    rotate(0deg);
                 filter:hue-rotate(360deg) saturate(1.25) blur(95px);
                 border-radius:60% 40% 70% 30%/40% 60% 30% 70%; }
        }
        @keyframes lsdBlob1 {
          0%   { transform:translate(-50%,-50%) scale(1)    rotate(0deg);
                 filter:hue-rotate(60deg)  saturate(1.22) blur(100px);
                 border-radius:45% 55% 65% 35%/55% 45% 35% 65%; }
          33%  { transform:translate(-60%,-40%) scale(1.10) rotate(-4deg);
                 filter:hue-rotate(180deg) saturate(1.30) blur(85px);
                 border-radius:65% 35% 45% 55%/40% 60% 55% 45%; }
          66%  { transform:translate(-40%,-62%) scale(0.88) rotate(3deg);
                 filter:hue-rotate(300deg) saturate(1.26) blur(110px);
                 border-radius:35% 65% 55% 45%/60% 40% 45% 55%; }
          100% { transform:translate(-50%,-50%) scale(1)    rotate(0deg);
                 filter:hue-rotate(420deg) saturate(1.22) blur(100px);
                 border-radius:45% 55% 65% 35%/55% 45% 35% 65%; }
        }
        @keyframes lsdBlob2 {
          0%   { transform:translate(-50%,-50%) scale(1)    rotate(0deg);
                 filter:hue-rotate(120deg) saturate(1.20) blur(92px);
                 border-radius:55% 45% 60% 40%/40% 60% 45% 55%; }
          20%  { transform:translate(-42%,-58%) scale(1.14) rotate(5deg);
                 filter:hue-rotate(192deg) saturate(1.28) blur(78px);
                 border-radius:40% 60% 40% 60%/55% 45% 60% 40%; }
          40%  { transform:translate(-58%,-44%) scale(0.92) rotate(-3deg);
                 filter:hue-rotate(264deg) saturate(1.24) blur(108px);
                 border-radius:65% 35% 55% 45%/35% 65% 40% 60%; }
          60%  { transform:translate(-44%,-56%) scale(1.06) rotate(2deg);
                 filter:hue-rotate(336deg) saturate(1.30) blur(86px);
                 border-radius:50% 50% 35% 65%/60% 40% 55% 45%; }
          80%  { transform:translate(-56%,-46%) scale(0.94) rotate(-2deg);
                 filter:hue-rotate(408deg) saturate(1.22) blur(98px);
                 border-radius:35% 65% 60% 40%/45% 55% 40% 60%; }
          100% { transform:translate(-50%,-50%) scale(1)    rotate(0deg);
                 filter:hue-rotate(480deg) saturate(1.20) blur(92px);
                 border-radius:55% 45% 60% 40%/40% 60% 45% 55%; }
        }
        @keyframes lsdBlob3 {
          0%   { transform:translate(-50%,-50%) scale(1)    rotate(0deg);
                 filter:hue-rotate(200deg) saturate(1.24) blur(97px);
                 border-radius:50% 50% 70% 30%/60% 40% 30% 70%; }
          50%  { transform:translate(-55%,-45%) scale(1.11) rotate(-5deg);
                 filter:hue-rotate(380deg) saturate(1.32) blur(82px);
                 border-radius:30% 70% 50% 50%/45% 55% 65% 35%; }
          100% { transform:translate(-50%,-50%) scale(1)    rotate(0deg);
                 filter:hue-rotate(560deg) saturate(1.24) blur(97px);
                 border-radius:50% 50% 70% 30%/60% 40% 30% 70%; }
        }
      `}</style>
    </div>
  )
}
