import compassBg from '@/features/quiz/assets/mentorkompassen_compass_summary.png'
import type { CompassSection } from '@/features/quiz/data/quiz-pages'

type CompassSummaryProps = {
  sections: CompassSection[]
  selectionsByPage: Record<string, string[]>
  currentPageId: string
}

/**
 * Circle center positions as percentages of the PNG image dimensions (1108 × 1154 px).
 * Measured visually from mentorkompassen_compass_summary.png.
 */
const compassPositionMap: Record<string, { cx: string; cy: string }> = {
  love: { cx: '50%', cy: '21%' },
  strengths: { cx: '18%', cy: '49%' },
  world: { cx: '82%', cy: '49%' },
  work: { cx: '50%', cy: '77%' },
}

const MAX_LINES = 5

export function CompassSummary({ sections, selectionsByPage, currentPageId }: CompassSummaryProps) {
  return (
    <aside
      className="relative w-full max-w-[700px] lg:sticky lg:top-24"
      style={{ aspectRatio: '1108 / 1154' }}
    >
      {/* The reference PNG provides the ring, compass star, circle colors, icon watermarks, and labels */}
      <img
        src={compassBg}
        alt="Mentorkompassen"
        className="absolute inset-0 h-full w-full object-contain"
        aria-hidden="true"
      />

      {/* Transparent overlays positioned over each PNG circle — render selection text on the pre-drawn lines */}
      {sections.map((section) => {
        const position = compassPositionMap[section.id]
        if (!position) return null
        const selections = selectionsByPage[section.sourcePageId] ?? []
        const isActive = section.sourcePageId === currentPageId
        return (
          <CompassCircleOverlay
            key={section.id}
            selections={selections}
            isActive={isActive}
            cx={position.cx}
            cy={position.cy}
          />
        )
      })}
    </aside>
  )
}

function CompassCircleOverlay({
  selections,
  cx,
  cy,
}: {
  selections: string[]
  isActive: boolean
  cx: string
  cy: string
}) {
  const lines = Array.from({ length: MAX_LINES }, (_, i) => selections[i] ?? null)

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full"
      style={{
        left: cx,
        top: cy,
        width: '31%',
        height: '29.8%',
      }}
    >
      {/* Text lines — positioned to match the pre-drawn PNG lines */}
      <div
        className="absolute flex flex-col"
        style={{
          left: '20%',
          top: '20%',
          width: '60%',
          height: '58%',
        }}
      >
        {lines.map((text, i) => (
          <div key={i} className="flex flex-1 items-end">
            {text && (
              <span className="truncate text-[clamp(0.55rem,1.1vw,0.8rem)] font-semibold leading-tight text-black/80">
                {text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
