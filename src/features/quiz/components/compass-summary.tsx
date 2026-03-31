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
        className="w-full max-w-[700px] lg:sticky lg:top-24"
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
  cx,
  cy,
  r,
  title,
  subtitle,
  bgColor,
  isActive,
  selections,
}: {
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

  // Build all display lines with word wrapping
  const allLines: string[] = []
  if (hasSelections) {
    selections.slice(0, MAX_SELECTIONS).forEach((text) => {
      const wrapped = wrapText(text, 16)
      allLines.push(...wrapped)
    })
  }

  // Scale font size and line height based on how many lines we need
  const totalLines = allLines.length
  const fontSize = totalLines > 8 ? 8.5 : totalLines > 6 ? 9.5 : 11
  const lineHeight = fontSize + 3

  return (
    <g filter={isActive ? 'url(#active-glow)' : 'url(#circle-shadow)'}>
      {/* Circle background */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={bgColor}
        stroke={isActive ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)'}
        strokeWidth={isActive ? 2.5 : 1.5}
      />

      {/* Title + subtitle (shown when no selections) */}
      {!hasSelections && (
        <>
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
        </>
      )}

      {/* Selections — word-wrapped, full text, centered */}
      {hasSelections && (
        <g>
          {/* Render each selection as a group, separated visually */}
          {(() => {
            const items = selections.slice(0, MAX_SELECTIONS)
            const groups: { lines: string[]; isSeparator: boolean }[] = []
            items.forEach((text, i) => {
              if (i > 0) groups.push({ lines: [''], isSeparator: true })
              groups.push({ lines: wrapText(text, 16), isSeparator: false })
            })

            // Flatten to get total line count for vertical centering
            const displayLines: { text: string; bold: boolean }[] = []
            groups.forEach((g) => {
              if (g.isSeparator) {
                displayLines.push({ text: '', bold: false })
              } else {
                g.lines.forEach((l) => displayLines.push({ text: l, bold: true }))
              }
            })

            // Use smaller separator gap
            const sepHeight = 4
            const blockHeight =
              displayLines.filter((l) => l.text).length * lineHeight +
              displayLines.filter((l) => !l.text).length * sepHeight
            let currentY = cy - blockHeight / 2 + lineHeight / 2

            return displayLines.map((line, i) => {
              if (!line.text) {
                currentY += sepHeight
                return null
              }
              const y = currentY
              currentY += lineHeight
              return (
                <text
                  key={i}
                  x={cx}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#1a1a1a"
                  fontSize={fontSize}
                  fontWeight="600"
                  fontFamily="'Inter', system-ui, sans-serif"
                >
                  {line.text}
                </text>
              )
            })
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
