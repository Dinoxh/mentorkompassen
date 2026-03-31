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
  const lineHeight = 14
  const hasSelections = selections.length > 0

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

      {/* Selections — centered, no lines */}
      {hasSelections && (
        <g>
          {selections.slice(0, MAX_SELECTIONS).map((text, i) => {
            const totalItems = Math.min(selections.length, MAX_SELECTIONS)
            const blockHeight = totalItems * lineHeight
            const startY = cy - blockHeight / 2 + lineHeight / 2
            return (
              <text
                key={i}
                x={cx}
                y={startY + i * lineHeight}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#1a1a1a"
                fontSize="11"
                fontWeight="600"
                fontFamily="'Inter', system-ui, sans-serif"
              >
                {text.length > 18 ? text.slice(0, 16) + '...' : text}
              </text>
            )
          })}
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
