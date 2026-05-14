import { useState, useCallback } from 'react'
import { QuizButton } from '@/features/quiz/components/quiz-button'
import type { Principle } from '@/features/quiz/data/quiz-pages'

type PrinciplesInfoProps = {
  header: string
  introduction: string
  principles: Principle[]
  onBack?: () => void
  onNext?: () => void
  backButtonLabel?: string
  nextButtonLabel?: string
}

const principleColors = [
  { bg: 'rgba(0, 180, 105, 0.12)', border: '#00B469', dot: '#00B469' },
  { bg: 'rgba(255, 188, 140, 0.15)', border: '#FFBC8C', dot: '#FEA45B' },
  { bg: 'rgba(255, 255, 92, 0.15)', border: '#FFFF5C', dot: '#FFEB64' },
  { bg: 'rgba(175, 116, 255, 0.15)', border: '#AF74FF', dot: '#9850FE' },
]

export function PrinciplesInfo({
  header,
  introduction,
  principles,
  onBack,
  onNext,
  backButtonLabel = 'Tillbaka',
  nextButtonLabel = 'Nästa',
}: PrinciplesInfoProps) {
  const totalSlides = principles.length + 1
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideDir, setSlideDir] = useState<'left' | 'right'>('right')

  const goTo = useCallback(
    (idx: number) => {
      if (idx === activeSlide) return
      setSlideDir(idx > activeSlide ? 'right' : 'left')
      setActiveSlide(idx)
    },
    [activeSlide]
  )

  const goForward = () => {
    if (activeSlide < totalSlides - 1) {
      goTo(activeSlide + 1)
    } else {
      onNext?.()
    }
  }

  const goBackward = () => {
    if (activeSlide > 0) {
      goTo(activeSlide - 1)
    } else {
      onBack?.()
    }
  }

  return (
    <div className="quiz-card relative flex h-[720px] max-h-[calc(100vh-2rem)] w-full max-w-[760px] flex-col overflow-clip rounded-[56px] px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
      {/* Dot pagination */}
      <div className="mb-4 flex items-center justify-center gap-2">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Gå till sida ${i + 1}`}
            onClick={() => goTo(i)}
            className="cursor-pointer transition-all duration-300"
            style={{
              width: i === activeSlide ? 28 : 10,
              height: 10,
              borderRadius: 5,
              backgroundColor:
                i === activeSlide
                  ? i === 0
                    ? 'var(--page-accent)'
                    : (principleColors[i - 1]?.dot ?? 'var(--page-accent)')
                  : 'rgba(0,0,0,0.12)',
            }}
          />
        ))}
      </div>

      {/* Slide area */}
      <div className="relative flex-1 overflow-hidden">
        {/* Intro slide */}
        {activeSlide === 0 && (
          <div
            key="intro"
            className={`absolute inset-0 flex flex-col items-center justify-center px-4 md:px-12 ${
              slideDir === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
            }`}
          >
            <h1 className="animate-shimmer-text mb-4 text-center text-2xl font-black tracking-tight md:text-3xl">
              {header}
            </h1>
            <div
              className="animate-line-grow mx-auto mb-6 h-[2px] w-20 origin-center rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent, var(--page-accent), transparent)',
                animationDelay: '0.2s',
              }}
            />
            <p className="max-w-[50ch] text-center text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
              {introduction}
            </p>
          </div>
        )}

        {/* Principle slides */}
        {principles.map((principle, idx) => {
          const slideIdx = idx + 1
          if (activeSlide !== slideIdx) return null
          const colors = principleColors[idx]

          return (
            <div
              key={principle.title}
              className={`absolute inset-0 flex flex-col items-center justify-center px-4 md:px-12 ${
                slideDir === 'right' ? 'animate-slide-in-right' : 'animate-slide-in-left'
              }`}
            >
              <div
                className="mb-6 flex h-28 w-28 items-center justify-center rounded-full shadow-lg md:h-36 md:w-36"
                style={{
                  backgroundColor: colors.bg,
                  border: `3px solid ${colors.border}`,
                }}
              >
                <img
                  src={principle.iconSrc}
                  alt={principle.iconAlt}
                  className="animate-icon-bounce h-20 w-20 object-contain md:h-24 md:w-24"
                />
              </div>

              <h2 className="mb-3 text-center text-2xl font-black tracking-tight md:text-3xl">
                {principle.title}
              </h2>

              <div
                className="animate-line-grow mx-auto mb-5 h-[2px] w-16 origin-center rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`,
                  animationDelay: '0.15s',
                }}
              />

              <p className="max-w-[45ch] text-center text-sm font-medium leading-relaxed text-neutral-600 md:text-base">
                {principle.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Navigation buttons */}
      <div className="mt-6 flex justify-center gap-3">
        <QuizButton label={activeSlide === 0 ? backButtonLabel : 'Tillbaka'} onClick={goBackward} />
        <QuizButton
          label={activeSlide === totalSlides - 1 ? nextButtonLabel : 'Nästa'}
          onClick={goForward}
        />
      </div>
    </div>
  )
}
