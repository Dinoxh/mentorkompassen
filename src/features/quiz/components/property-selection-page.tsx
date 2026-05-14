import { useRef } from 'react'
import { getFilledQuizButtonProps } from '@/features/quiz/components/quiz-button-classes'
import { QuizButton } from '@/features/quiz/components/quiz-button'
import type { PropertySelectionPageData } from '@/features/quiz/data/quiz-pages'

type PropertySelectionPageProps = {
  page: PropertySelectionPageData
  selectedProperties: string[]
  onToggleProperty: (property: string) => void
  onBack?: () => void
  onNext?: () => void
  backButtonLabel?: string
  nextButtonLabel?: string
}

export function PropertySelectionPage({
  page,
  selectedProperties,
  onToggleProperty,
  onBack,
  onNext,
  backButtonLabel = 'Tillbaka',
  nextButtonLabel = 'Nästa',
}: PropertySelectionPageProps) {
  const selectedSet = new Set(selectedProperties)
  const maxSelections = page.maxSelections ?? Infinity
  const hasReachedSelectionLimit = selectedProperties.length >= maxSelections
  const columnsClassName =
    page.columns === 1 ? 'grid-cols-1' : page.columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'

  return (
    <div className="quiz-card flex h-[720px] max-h-[calc(100vh-2rem)] w-full max-w-[760px] flex-col overflow-clip rounded-[56px] px-6 pb-8 pt-8 md:px-10 md:pb-10 md:pt-10">
      <div className="relative z-10 mb-6 flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold md:text-3xl">{page.title}</h1>
          <p className="mt-1 text-lg font-semibold text-black/75 md:text-xl">{page.subtitle}</p>
          {page.description ? (
            <p className="mt-1 whitespace-pre-line text-sm text-black/60 md:text-base">
              {page.description}
            </p>
          ) : null}
          {Number.isFinite(maxSelections) ? (
            <p className="mt-2 text-sm font-semibold text-black/55 md:text-base">
              <span key={selectedProperties.length} className="animate-count-bump inline-block">
                {selectedProperties.length}
              </span>
              {`/${maxSelections} valda`}
            </p>
          ) : null}
        </div>

        <img
          src={page.iconSrc}
          alt={page.iconAlt}
          className="animate-icon-bounce h-18 w-18 shrink-0 rounded-full object-cover shadow-md md:h-22 md:w-22"
        />
      </div>

      <div className="quiz-scroll relative z-0 flex-1 overflow-x-hidden overflow-y-scroll pr-1 pt-2">
        <div className={`grid grid-cols-1 gap-6 ${columnsClassName}`}>
          {page.propertyGroups.map((group) => (
            <section key={group.title ?? group.properties[0]}>
              {group.title ? <h2 className="mb-3 text-2xl font-bold">{group.title}</h2> : null}

              <div className="flex flex-col gap-3">
                {group.properties.map((property, propIdx) => {
                  const isSelected = selectedSet.has(property)
                  const isDisabled = !isSelected && hasReachedSelectionLimit
                  const buttonProps = getFilledQuizButtonProps(
                    {
                      backgroundColor: page.theme.backgroundColor,
                      activeBackgroundColor: page.theme.activeBackgroundColor,
                    },
                    [
                      'property-btn w-full px-4 py-2 text-left text-sm md:text-base animate-slide-in',
                      isDisabled
                        ? 'cursor-not-allowed opacity-25 grayscale-[30%] hover:bg-[var(--quiz-button-bg)] hover:translate-y-0 hover:shadow-none'
                        : '',
                    ].join(' '),
                    isSelected
                  )

                  return (
                    <PropertyButton
                      key={property}
                      property={property}
                      isSelected={isSelected}
                      isDisabled={isDisabled}
                      buttonProps={buttonProps}
                      delay={propIdx * 30}
                      onToggle={onToggleProperty}
                    />
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        {page.missingPropertiesHint ? (
          <div className="mt-8 rounded-[32px] border border-dashed border-black/20 px-5 py-4">
            <p className="text-sm font-semibold text-black/65 md:text-base">
              {page.missingPropertiesHint}
            </p>
          </div>
        ) : null}
      </div>

      <div className="relative z-10 mt-8 flex justify-center gap-3">
        {onBack ? <QuizButton label={backButtonLabel} onClick={onBack} /> : null}
        {onNext ? <QuizButton label={nextButtonLabel} onClick={onNext} /> : null}
      </div>
    </div>
  )
}

function PropertyButton({
  property,
  isSelected,
  isDisabled,
  buttonProps,
  delay,
  onToggle,
}: {
  property: string
  isSelected: boolean
  isDisabled: boolean
  buttonProps: { className: string; style: React.CSSProperties }
  delay: number
  onToggle: (property: string) => void
}) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    onToggle(property)
    // Trigger pop animation
    const el = ref.current
    if (el) {
      el.classList.remove('animate-select-pop')
      void el.offsetWidth // force reflow
      el.classList.add('animate-select-pop')
    }
  }

  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={isSelected}
      disabled={isDisabled}
      onClick={handleClick}
      className={buttonProps.className}
      style={{ ...buttonProps.style, animationDelay: `${delay}ms` }}
    >
      {property}
    </button>
  )
}
