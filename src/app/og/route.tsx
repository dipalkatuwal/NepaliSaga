// src/app/og/route.tsx
// Dynamic Open Graph image generation via Next.js ImageResponse
// Usage: /og?title=My+Title&cat=Politics&author=Jane+Doe&section=Politics
//
// Produces a 1200×630 image matching NepaliSaga's editorial design.

import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const title   = searchParams.get('title')   ?? 'NepaliSaga'
  const cat     = searchParams.get('cat')     ?? ''
  const author  = searchParams.get('author')  ?? ''
  const section = searchParams.get('section') ?? ''
  const date    = searchParams.get('date')    ?? ''

  // Section accent colours matching globals.css
  const accentMap: Record<string, string> = {
    Politics:   '#B5281E',
    Economy:    '#1B7A3E',
    Markets:    '#1B7A3E',
    Climate:    '#0C4A6E',
    Technology: '#1E3A5F',
    Culture:    '#A67C00',
    World:      '#374151',
    Opinion:    '#B5281E',
  }
  const accent = accentMap[section] ?? '#B5281E'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#FAF8F5',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top accent bar */}
        <div style={{ width: '100%', height: '6px', background: accent, display: 'flex' }} />

        {/* Left colour strip */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 6,
            bottom: 0,
            width: '8px',
            background: accent,
            opacity: 0.15,
            display: 'flex',
          }}
        />

        {/* Content area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '52px 72px 52px 80px',
          }}
        >
          {/* Masthead */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                fontSize: '22px',
                fontWeight: 900,
                color: '#1A1208',
                letterSpacing: '-0.02em',
                display: 'flex',
              }}
            >
              NepaliSaga
            </div>
            {cat && (
              <>
                <div style={{ width: '1px', height: '18px', background: '#DDD9D0', display: 'flex' }} />
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: accent,
                    display: 'flex',
                  }}
                >
                  {cat}
                </div>
              </>
            )}
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: title.length > 80 ? '36px' : title.length > 50 ? '44px' : '52px',
              fontWeight: 900,
              color: '#1A1208',
              lineHeight: 1.18,
              maxWidth: '900px',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {title}
          </div>

          {/* Footer row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {/* Red accent line */}
            <div style={{ width: '32px', height: '3px', background: accent, display: 'flex' }} />
            {author && (
              <div style={{ fontSize: '14px', color: '#7A7060', display: 'flex' }}>
                By {author}
              </div>
            )}
            {date && (
              <div style={{ fontSize: '14px', color: '#A09888', display: 'flex' }}>
                {date}
              </div>
            )}
            <div style={{ flex: 1, display: 'flex' }} />
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#A09888',
                display: 'flex',
              }}
            >
              The Chronicle of Nepal&apos;s Unfolding Story
            </div>
          </div>
        </div>

        {/* Decorative corner block */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '180px',
            height: '180px',
            background: accent,
            opacity: 0.06,
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
