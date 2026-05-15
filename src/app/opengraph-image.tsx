import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Antuario — Agencia de Marketing Digital · A la medida'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'radial-gradient(60% 80% at 20% 20%, rgba(79,70,229,0.55), transparent 60%), radial-gradient(50% 70% at 80% 80%, rgba(34,211,238,0.45), transparent 60%), radial-gradient(40% 60% at 60% 40%, rgba(251,113,133,0.30), transparent 60%), #0A0A0A',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background:
                'conic-gradient(from 180deg, #818CF8, #C4B5FD, #FDA4AF, #FCD34D, #6EE7B7, #67E8F9, #818CF8)',
            }}
          />
          <span
            style={{
              fontSize: 18,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.65)',
              fontWeight: 600,
            }}
          >
            Antuario · MMXXVI
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1020 }}>
          <span
            style={{
              fontSize: 22,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 500,
              marginBottom: 24,
            }}
          >
            Agencia de Marketing Digital · CDMX · México
          </span>
          <h1
            style={{
              fontSize: 84,
              fontWeight: 300,
              letterSpacing: '-0.034em',
              lineHeight: 1.02,
              margin: 0,
              color: '#FFFFFF',
            }}
          >
            Marketing digital,{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(120deg, #818CF8, #C4B5FD, #FDA4AF, #FCD34D, #6EE7B7, #67E8F9)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              a la medida.
            </span>
          </h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              maxWidth: 640,
            }}
          >
            <span
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.5,
              }}
            >
              Soluciones de marketing digital a la medida — con accountability, datos y estrategia bajo una sola dirección.
            </span>
          </div>
          <span
            style={{
              fontSize: 16,
              fontFamily: 'monospace',
              color: 'rgba(255,255,255,0.40)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            antuario.mx
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
