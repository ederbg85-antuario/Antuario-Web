'use client'

/**
 * Animated multicolor mesh gradient background.
 * Light variants use white base with vivid pastel blobs that MOVE visibly.
 * Blobs are biased toward the bottom for a "rising color" feel.
 */
export default function MeshGradientBg({ variant = 'default' }: { variant?: 'default' | 'warm' | 'cool' | 'light' | 'light-warm' }) {
  const isLight = variant === 'light' || variant === 'light-warm'

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
    /* Light variants: vivid blobs biased toward the bottom, fast visible movement */
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
  }

  const blobs = palettes[variant]
  const baseColor = isLight ? '#FFFFFF' : '#08091A'

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: baseColor }} />
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${blob.size}%`,
            height: `${blob.size}%`,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            transform: 'translate(-50%, -50%)',
            animation: `antuarioBlob {i % 4} ${isLight ? 5 + i * 0.8 : 14 + i * 2}s ease-in-out infinite`,
            animationDelay: `${blob.delay}s`,
            filter: isLight ? 'blur(70px)' : 'blur(60px)',
          }}
        />
      ))}
      {/* Noise texture overlay */}
      <div className="absolute inset-0" style={{ opacity: isLight ? 0.012 : 0.02, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E")', backgroundSize: '150px' }} />
      <style jsx>{`
        @keyframes antuarioBlob0 {
          0% { transform: translate(-50%, -50%) scale(1); }
          15% { transform: translate(-35%, -60%) scale(1.18); }
          30% { transform: translate(-60%, -40%) scale(0.88); }
          45% { transform: translate(-42%, -55%) scale(1.12); }
          60% { transform: translate(-58%, -48%) scale(0.92); }
          75% { transform: translate(-38%, -52%) scale(1.08); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes antuarioBlob1 {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          20% { transform: translate(-62%, -38%) scale(1.15) rotate(5deg); }
          40% { transform: translate(-38%, -62%) scale(0.85) rotate(-4deg); }
          60% { transform: translate(-55%, -42%) scale(1.1) rotate(3deg); }
          80% { transform: translate(-45%, -58%) scale(0.9) rotate(-2deg); }
          100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
        }
        @keyframes antuarioBlob2 {
          0% { transform: translate(-50%, -50%) scale(1); }
          17% { transform: translate(-40%, -64%) scale(1.2); }
          33% { transform: translate(-64%, -36%) scale(0.82); }
          50% { transform: translate(-46%, -58%) scale(1.14); }
          67% { transform: translate(-56%, -44%) scale(0.88); }
          83% { transform: translate(-42%, -54%) scale(1.06); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes antuarioBlob3 {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          25% { transform: translate(-58%, -40%) scale(1.16) rotate(-6deg); }
          50% { transform: translate(-42%, -60%) scale(0.86) rotate(5deg); }
          75% { transform: translate(-54%, -46%) scale(1.1) rotate(-3deg); }
          100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
        }
      `}</style>
    </div>
  )
}
