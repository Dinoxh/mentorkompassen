import { forwardRef } from 'react'
import type { CompassSection } from '@/features/quiz/data/quiz-pages'

type CompassSummaryProps = {
  sections: CompassSection[]
  selectionsByPage: Record<string, string[]>
  currentPageId: string
}

const SVG_SIZE = 600
const CENTER = SVG_SIZE / 2
const CIRCLE_R = 108
const RING_R = 180

/** Angle offsets for each quadrant (degrees from top, clockwise) */
const sectionAngles: Record<string, number> = {
  love: 0,
  world: 90,
  work: 180,
  strengths: 270,
}

function polarToCartesian(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  }
}

const MAX_SELECTIONS = 5

export const CompassSummary = forwardRef<SVGSVGElement, CompassSummaryProps>(
  function CompassSummary({ sections, selectionsByPage, currentPageId }, ref) {
    return (
      <svg
        ref={ref}
        viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
        xmlns="http://www.w3.org/2000/svg"
        className="animate-float w-full max-w-[700px] lg:sticky lg:top-24"
        role="img"
        aria-label="Mentorkompassen - dina val"
      >
        <defs>
          {/* Subtle drop shadow for circles */}
          <filter id="circle-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="6" floodOpacity="0.12" />
          </filter>
          {/* Glow for active circle */}
          <filter id="active-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle (outer ring) */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RING_R + CIRCLE_R + 8}
          fill="none"
          stroke="#e0ded7"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Connecting ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RING_R}
          fill="none"
          stroke="#d4d2cb"
          strokeWidth="2"
          strokeDasharray="6 4"
          opacity="0.4"
        />

        {/* Center compass star */}
        <CompassStar cx={CENTER} cy={CENTER} size={36} />

        {/* Section circles */}
        {sections.map((section) => {
          const angle = sectionAngles[section.id]
          if (angle === undefined) return null
          const pos = polarToCartesian(angle, RING_R)
          const selections = selectionsByPage[section.sourcePageId] ?? []
          const isActive = section.sourcePageId === currentPageId

          return (
            <CompassCircle
              key={section.id}
              id={section.id}
              cx={pos.x}
              cy={pos.y}
              r={CIRCLE_R}
              title={section.title}
              subtitle={section.subtitle}
              bgColor={isActive ? section.activeBackgroundColor : section.backgroundColor}
              isActive={isActive}
              selections={selections}
            />
          )
        })}
      </svg>
    )
  }
)

/** Wrap a string into lines that fit within a max character width */
function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let current = ''
  for (const word of words) {
    const test = current ? `${current} ${word}` : word
    if (test.length > maxChars && current) {
      lines.push(current)
      current = word
    } else {
      current = test
    }
  }
  if (current) lines.push(current)
  return lines
}

function CompassCircle({
  id,
  cx,
  cy,
  r,
  title,
  subtitle,
  bgColor,
  isActive,
  selections,
}: {
  id: string
  cx: number
  cy: number
  r: number
  title: string
  subtitle: string
  bgColor: string
  isActive: boolean
  selections: string[]
}) {
  const hasSelections = selections.length > 0

  // Available vertical space inside circle (use 75% of diameter for safe margin)
  const usableHeight = (r - 4) * 2 * 0.75

  // Build all display lines with word wrapping — wider wrap to reduce line count
  const allLines: string[] = []
  if (hasSelections) {
    selections.slice(0, MAX_SELECTIONS).forEach((text) => {
      const wrapped = wrapText(text, 18)
      allLines.push(...wrapped)
    })
  }

  // Scale font size and line height to fit within circle
  const totalLines = allLines.length
  const titleHeight = 12
  const sepCount = Math.max(0, selections.slice(0, MAX_SELECTIONS).length - 1)
  const sepHeight = 2

  // Calculate font size that fits
  const availableForLines = usableHeight - titleHeight - sepCount * sepHeight
  const maxLineHeight = totalLines > 0 ? availableForLines / totalLines : 14
  const lineHeight = Math.min(maxLineHeight, 13)
  const fontSize = Math.max(6.5, Math.min(10, lineHeight - 2))

  return (
    <g filter={isActive ? 'url(#active-glow)' : 'url(#circle-shadow)'}>
      {/* Clip path to contain text within circle */}
      <clipPath id={`clip-${id}`}>
        <circle cx={cx} cy={cy} r={r - 4} />
      </clipPath>

      {/* Pulse ring for active circle */}
      {isActive && (
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={bgColor} strokeWidth="2" opacity="0">
          <animate
            attributeName="r"
            from={String(r)}
            to={String(r + 22)}
            dur="2s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
        </circle>
      )}
      {/* Circle background */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={bgColor}
        stroke={isActive ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)'}
        strokeWidth={isActive ? 2.5 : 1.5}
        style={{ transition: 'fill 0.6s ease, stroke 0.4s ease, stroke-width 0.3s ease' }}
      />

      {/* Title + subtitle (shown when no selections) */}
      {!hasSelections && (
        <g clipPath={`url(#clip-${id})`}>
          <text
            x={cx}
            y={cy - 6}
            textAnchor="middle"
            dominantBaseline="auto"
            fill="#1a1a1a"
            fontSize="13"
            fontWeight="700"
            fontFamily="'Inter', system-ui, sans-serif"
          >
            {title}
          </text>
          <text
            x={cx}
            y={cy + 12}
            textAnchor="middle"
            dominantBaseline="auto"
            fill="rgba(0,0,0,0.55)"
            fontSize="10"
            fontWeight="500"
            fontFamily="'Inter', system-ui, sans-serif"
          >
            {subtitle}
          </text>
        </g>
      )}

      {/* Selections — word-wrapped, full text, clipped to circle */}
      {hasSelections && (
        <g clipPath={`url(#clip-${id})`}>
          {(() => {
            const items = selections.slice(0, MAX_SELECTIONS)

            // Build flat list: each item gets a bullet prefix on its first line
            const displayItems: { text: string; isFirstLine: boolean }[] = []
            items.forEach((text, i) => {
              const wrapped = wrapText(text, 18)
              wrapped.forEach((line, li) => {
                displayItems.push({ text: line, isFirstLine: li === 0 })
              })
              // Add separator between items (not after last)
              if (i < items.length - 1) {
                displayItems.push({ text: '', isFirstLine: false })
              }
            })

            const contentHeight =
              displayItems.filter((l) => l.text).length * lineHeight +
              displayItems.filter((l) => !l.text).length * sepHeight
            const totalHeight = titleHeight + contentHeight
            let currentY = cy - totalHeight / 2

            const elements: React.ReactNode[] = []

            // Section title header
            elements.push(
              <text
                key="title"
                x={cx}
                y={currentY + titleHeight / 2}
                textAnchor="middle"
                dominantBaseline="central"
                fill="rgba(0,0,0,0.45)"
                fontSize={Math.max(7, Math.min(8, fontSize - 1))}
                fontWeight="700"
                fontFamily="'Inter', system-ui, sans-serif"
                letterSpacing="1.2"
              >
                {title.toUpperCase()}
              </text>
            )
            currentY += titleHeight

            // Selection items
            displayItems.forEach((line, i) => {
              if (!line.text) {
                currentY += sepHeight
                return
              }
              const y = currentY + lineHeight / 2
              currentY += lineHeight

              if (line.isFirstLine) {
                // Bullet dot
                elements.push(
                  <circle
                    key={`dot-${i}`}
                    cx={cx - r * 0.55}
                    cy={y}
                    r={1.5}
                    fill="#1a1a1a"
                    opacity={0.5}
                  />
                )
              }

              elements.push(
                <text
                  key={`text-${i}`}
                  x={cx - r * 0.55 + 6}
                  y={y}
                  textAnchor="start"
                  dominantBaseline="central"
                  fill="#1a1a1a"
                  fontSize={fontSize}
                  fontWeight="700"
                  fontFamily="'Inter', system-ui, sans-serif"
                >
                  {line.text}
                </text>
              )
            })

            return elements
          })()}
        </g>
      )}
    </g>
  )
}

function CompassStar({ cx, cy, size }: { cx: number; cy: number; size: number }) {
  const points = 4
  const outerR = size
  const innerR = size * 0.35

  const pathParts: string[] = []
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2
    const r = i % 2 === 0 ? outerR : innerR
    const x = cx + r * Math.cos(angle)
    const y = cy + r * Math.sin(angle)
    pathParts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`)
  }
  pathParts.push('Z')

  return (
    <g opacity="0.15">
      <path d={pathParts.join(' ')} fill="#1a1a1a" />
    </g>
  )
}
