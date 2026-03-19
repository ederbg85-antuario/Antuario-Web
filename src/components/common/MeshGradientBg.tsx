'use client'

/**
 * Animated multicolor mesh gradient background.
 * Light variants use #FAFAFA base (matches body bg) with vivid pastel blobs.
 * LSD variant adds hue-rotate cycling, morphing border-radius, and SVG
 * displacement filter for a psychedelic wavy effect.
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
      { color: 'rgba(244, 114, 182, 0.12)', size: 40, x: 80, y: 70, delay: 6 },
      { color: 'rgba(251, 191, 36, 0.10)', size: 35, x: 25, y: 80, delay: 3 },
      { color: 'rgba(79, 142, 255, 0.10)', size: 38, x: 60, y: 35, delay: 5 },
    ],
    warm: [
      { color: 'rgba(244, 114, 182, 0.20)', size: 55, x: 20, y: 25, delay: 0 },
      { color: 'rgba(251, 191, 36, 0.18)', size: 48, x: 70, y: 15, delay: 2 },
      { color: 'rgba(0, 214, 143, 0.16)', size: 50, x: 50, y: 60, delay: 4 },
      { color: 'rgba(139, 92, 246, 0.14)', size: 42, x: 85, y: 65, delay: 5 },
      { color: 'rgba(255, 122, 69, 0.12)', size: 38, x: 15, y: 75, delay: 3 },
    ],
    cool: [
      { color: 'rgba(0, 201, 219, 0.22)', size: 55, x: 25, y: 20, delay: 0 },
      { color: 'rgba(139, 92, 246, 0.18)', size: 50, x: 70, y: 25, delay: 2 },
      { color: 'rgba(0, 214, 143, 0.15)', size: 45, x: 40, y: 70, delay: 4 },
      { color: 'rgba(79, 142, 255, 0.14)', size: 42, x: 80, y: 65, delay: 6 },
      { color: 'rgba(244, 114, 182, 0.10)', size: 35, x: 15, y: 55, delay: 3 },
    ],
    /* Light: vivid blobs biased toward bottom — base color fixed to #FAFAFA */
    light: [
      { color: 'rgba(0, 214, 143, 0.45)', size: 70, x: 5, y: 60, delay: 0 },
      { color: 'rgba(139, 92, 246, 0.38)', size: 65, x: 85, y: 50, delay: 1 },
      { color: 'rgba(0, 201, 219, 0.42)', size: 60, x: 50, y: 75, delay: 2 },
      { color: 'rgba(244, 114, 182, 0.32)', size: 55, x: 80, y: 85, delay: 3 },
      { color: 'rgba(251, 191, 36, 0.35)', size: 50, x: 15, y: 90, delay: 1.5 },
      { color: 'rgba(79, 142, 255, 0.30)', size: 55, x: 60, y: 40, delay: 2.5 },
    ],
    'light-warm': [
      { color: 'rgba(244, 114, 182, 0.45)', size: 68, x: 10, y: 55, delay: 0 },
      { color: 'rgba(251, 191, 36, 0.42)', size: 62, x: 80, y: 50, delay: 1 },
      { color: 'rgba(0, 214, 143, 0.38)', size: 65, x: 50, y: 70, delay: 2 },
      { color: 'rgba(139, 92, 246, 0.35)', size: 58, x: 90, y: 80, delay: 2.5 },
      { color: 'rgba(255, 122, 69, 0.32)', size: 52, x: 5, y: 85, delay: 1.5 },
      { color: 'rgba(0, 201, 219, 0.28)', size: 55, x: 40, y: 35, delay: 3 },
    ],
    /* LSD: hyper-vivid blobs that hue-cycle, morph shape, and get distorted */
    lsd: [
      { color: 'rgba(0, 214, 143, 0.88)', size: 82, x: 8,  y: 55, delay: 0   },
      { color: 'rgba(139, 92, 246, 0.82)', size: 78, x: 88, y: 42, delay: 0.4 },
      { color: 'rgba(0, 201, 219, 0.80)', size: 72, x: 50, y: 72, delay: 0.9 },
      { color: 'rgba(244, 114, 182, 0.78)', size: 74, x: 22, y: 82, delay: 1.4 },
      { color: 'rgba(251, 191, 36, 0.75)', size: 68, x: 72, y: 88, delay: 1.8 },
      { color: 'rgba(79, 142, 255, 0.80)', size: 70, x: 38, y: 28, delay: 0.6 },
      { color: 'rgba(255, 122, 69, 0.72)', size: 62, x: 65, y: 62, delay: 1.1 },
      { color: 'rgba(200, 50, 255, 0.65)', size: 58, x: 92, y: 20, delay: 2.2 },
    ],
  }

  const blobs = palettes[variant]
  const baseColor = (isLight || isLSD) ? '#FAFAFA' : '#08091A'

  const getAnimation = (i: number) => {
    if (isLSD) return `lsdBlob${i % 6} ${2.8 + i * 0.4}s ease-in-out infinite`
    if (isLight) return `antuarioBlob${i % 4} ${5 + i * 0.8}s ease-in-out infinite`
    return `antuarioBlob${i % 4} ${14 + i * 2}s ease-in-out infinite`
  }

  const getFilter = (i: number) => {
    if (isLSD) return `blur(${55 + (i % 3) * 12}px)`
    if (isLight) return 'blur(70px)'
    return 'blur(60px)'
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: baseColor }} />

      {/* LSD displacement filter definition */}
      {isLSD && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id="lsd-distort" x="-30%" y="-30%" width="160%" height="160%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.011 0.008"
                numOctaves="4"
                result="noise"
                seed="9"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.008 0.006;0.015 0.011;0.009 0.007;0.017 0.013;0.008 0.006"
                  dur="7s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="seed"
                  values="9;17;3;23;9"
                  dur="14s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="70"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
      )}

      {/* Blob layer — LSD blobs go through displacement filter */}
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
              filter: getFilter(i),
              borderRadius: isLSD ? '60% 40% 70% 30% / 40% 60% 30% 70%' : '50%',
            }}
          />
        ))}
      </div>

      {/* LSD chromatic aberration overlay */}
      {isLSD && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 60%, rgba(255,0,128,0.14) 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, rgba(0,255,200,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(128,0,255,0.10) 0%, transparent 50%)',
            mixBlendMode: 'overlay',
            animation: 'lsdOverlay 4s ease-in-out infinite',
          }}
        />
      )}

      {/* Noise texture */}
      <div
        className="absolute inset-0"
        style={{
          opacity: isLSD ? 0.018 : isLight ? 0.012 : 0.02,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
          backgroundSize: '150px',
        }}
      />

      <style jsx>{`
        /* ── Standard blob animations ─────────────────────────── */
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
          0%   { transform: translate(-50%,-50%) scale(1) rotate(0deg); }
          20%  { transform: translate(-62%,-38%) scale(1.15) rotate(5deg); }
          40%  { transform: translate(-38%,-62%) scale(0.85) rotate(-4deg); }
          60%  { transform: translate(-55%,-42%) scale(1.1) rotate(3deg); }
          80%  { transform: translate(-45%,-58%) scale(0.9) rotate(-2deg); }
          100% { transform: translate(-50%,-50%) scale(1) rotate(0deg); }
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
          0%   { transform: translate(-50%,-50%) scale(1) rotate(0deg); }
          25%  { transform: translate(-58%,-40%) scale(1.16) rotate(-6deg); }
          50%  { transform: translate(-42%,-60%) scale(0.86) rotate(5deg); }
          75%  { transform: translate(-54%,-46%) scale(1.1) rotate(-3deg); }
          100% { transform: translate(-50%,-50%) scale(1) rotate(0deg); }
        }

        /* ── LSD psychedelic blob animations ─────────────────── */
        /* Each blob cycles through hue, morphs shape, and moves fast */
        @keyframes lsdBlob0 {
          0%   { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(0deg)   saturate(2.2) blur(55px); border-radius:60% 40% 70% 30%/40% 60% 30% 70%; }
          20%  { transform:translate(-36%,-62%) scale(1.28) rotate(6deg);  filter:hue-rotate(72deg)  saturate(2.8) blur(40px); border-radius:40% 60% 40% 60%/60% 40% 60% 40%; }
          40%  { transform:translate(-64%,-40%) scale(0.80) rotate(-5deg); filter:hue-rotate(144deg) saturate(2.4) blur(65px); border-radius:70% 30% 50% 50%/30% 70% 50% 50%; }
          60%  { transform:translate(-44%,-56%) scale(1.20) rotate(4deg);  filter:hue-rotate(216deg) saturate(3.0) blur(48px); border-radius:50% 50% 30% 70%/70% 30% 70% 30%; }
          80%  { transform:translate(-58%,-44%) scale(0.88) rotate(-3deg); filter:hue-rotate(288deg) saturate(2.6) blur(58px); border-radius:30% 70% 60% 40%/50% 50% 40% 60%; }
          100% { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(360deg) saturate(2.2) blur(55px); border-radius:60% 40% 70% 30%/40% 60% 30% 70%; }
        }
        @keyframes lsdBlob1 {
          0%   { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(45deg)  saturate(2.0) blur(60px); border-radius:45% 55% 65% 35%/55% 45% 35% 65%; }
          25%  { transform:translate(-62%,-38%) scale(1.22) rotate(-7deg); filter:hue-rotate(117deg) saturate(2.7) blur(45px); border-radius:65% 35% 40% 60%/35% 65% 60% 40%; }
          50%  { transform:translate(-38%,-64%) scale(0.84) rotate(5deg);  filter:hue-rotate(189deg) saturate(2.3) blur(70px); border-radius:35% 65% 55% 45%/65% 35% 45% 55%; }
          75%  { transform:translate(-56%,-46%) scale(1.18) rotate(-4deg); filter:hue-rotate(261deg) saturate(2.9) blur(50px); border-radius:55% 45% 35% 65%/45% 55% 65% 35%; }
          100% { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(405deg) saturate(2.0) blur(60px); border-radius:45% 55% 65% 35%/55% 45% 35% 65%; }
        }
        @keyframes lsdBlob2 {
          0%   { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(90deg)  saturate(2.5) blur(52px); border-radius:55% 45% 60% 40%/40% 60% 45% 55%; }
          17%  { transform:translate(-40%,-65%) scale(1.30) rotate(8deg);  filter:hue-rotate(162deg) saturate(3.0) blur(38px); border-radius:30% 70% 45% 55%/60% 40% 55% 45%; }
          33%  { transform:translate(-65%,-37%) scale(0.78) rotate(-6deg); filter:hue-rotate(234deg) saturate(2.6) blur(68px); border-radius:70% 30% 55% 45%/30% 70% 40% 60%; }
          50%  { transform:translate(-46%,-58%) scale(1.16) rotate(4deg);  filter:hue-rotate(306deg) saturate(2.2) blur(55px); border-radius:40% 60% 30% 70%/55% 45% 65% 35%; }
          67%  { transform:translate(-60%,-44%) scale(0.86) rotate(-5deg); filter:hue-rotate(378deg) saturate(2.8) blur(62px); border-radius:60% 40% 70% 30%/45% 55% 35% 65%; }
          83%  { transform:translate(-42%,-54%) scale(1.10) rotate(3deg);  filter:hue-rotate(450deg) saturate(2.4) blur(48px); border-radius:45% 55% 40% 60%/65% 35% 55% 45%; }
          100% { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(450deg) saturate(2.5) blur(52px); border-radius:55% 45% 60% 40%/40% 60% 45% 55%; }
        }
        @keyframes lsdBlob3 {
          0%   { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(135deg) saturate(2.3) blur(58px); border-radius:50% 50% 70% 30%/60% 40% 30% 70%; }
          30%  { transform:translate(-38%,-60%) scale(1.25) rotate(-8deg); filter:hue-rotate(207deg) saturate(2.9) blur(42px); border-radius:70% 30% 40% 60%/40% 60% 70% 30%; }
          60%  { transform:translate(-62%,-42%) scale(0.82) rotate(6deg);  filter:hue-rotate(279deg) saturate(2.5) blur(66px); border-radius:30% 70% 55% 45%/70% 30% 45% 55%; }
          100% { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(495deg) saturate(2.3) blur(58px); border-radius:50% 50% 70% 30%/60% 40% 30% 70%; }
        }
        @keyframes lsdBlob4 {
          0%   { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(180deg) saturate(2.1) blur(50px); border-radius:65% 35% 45% 55%/35% 65% 55% 45%; }
          22%  { transform:translate(-60%,-40%) scale(1.20) rotate(7deg);  filter:hue-rotate(252deg) saturate(2.6) blur(36px); border-radius:45% 55% 65% 35%/55% 45% 35% 65%; }
          44%  { transform:translate(-40%,-62%) scale(0.85) rotate(-6deg); filter:hue-rotate(324deg) saturate(2.2) blur(64px); border-radius:35% 65% 50% 50%/65% 35% 50% 50%; }
          66%  { transform:translate(-55%,-48%) scale(1.15) rotate(5deg);  filter:hue-rotate(396deg) saturate(2.8) blur(44px); border-radius:55% 45% 35% 65%/45% 55% 65% 35%; }
          88%  { transform:translate(-44%,-56%) scale(0.90) rotate(-4deg); filter:hue-rotate(468deg) saturate(2.4) blur(56px); border-radius:40% 60% 60% 40%/60% 40% 40% 60%; }
          100% { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(540deg) saturate(2.1) blur(50px); border-radius:65% 35% 45% 55%/35% 65% 55% 45%; }
        }
        @keyframes lsdBlob5 {
          0%   { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(225deg) saturate(2.4) blur(62px); border-radius:40% 60% 55% 45%/55% 45% 60% 40%; }
          33%  { transform:translate(-64%,-36%) scale(1.22) rotate(-9deg); filter:hue-rotate(297deg) saturate(3.0) blur(46px); border-radius:60% 40% 35% 65%/45% 55% 65% 35%; }
          66%  { transform:translate(-36%,-64%) scale(0.80) rotate(7deg);  filter:hue-rotate(369deg) saturate(2.6) blur(72px); border-radius:35% 65% 65% 35%/65% 35% 35% 65%; }
          100% { transform:translate(-50%,-50%) scale(1)    rotate(0deg);  filter:hue-rotate(585deg) saturate(2.4) blur(62px); border-radius:40% 60% 55% 45%/55% 45% 60% 40%; }
        }

        @keyframes lsdOverlay {
          0%,100% { opacity: 1; transform: scale(1); }
          33%      { opacity: 0.6; transform: scale(1.04) rotate(1deg); }
          66%      { opacity: 0.8; transform: scale(0.97) rotate(-0.5deg); }
        }
      `}</style>
    </div>
  )
}
