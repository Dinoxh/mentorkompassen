import { PropertySelectionPage } from '@/features/quiz/components/property-selection-page'
import { PrinciplesInfo } from '@/features/quiz/components/principles-info'
import { QuizButton } from '@/features/quiz/components/quiz-button'
import { QuizBox } from '@/features/quiz/components/quiz-box'
import type { QuizPage } from '@/features/quiz/data/quiz-pages'

type HomeRouteProps = {
  page: QuizPage
  selectedProperties: string[]
  onToggleProperty: (property: string) => void
  onBack?: () => void
  onNext?: () => void
}

export function HomeRoute({
  page,
  selectedProperties,
  onToggleProperty,
  onBack,
  onNext,
}: HomeRouteProps) {
  return (
    <main className="relative min-h-screen bg-[#EFEEE7] flex items-center justify-center px-4 py-8">
      <a className="mentor-brand" href="https://mentor.se" aria-label="Mentor startsida">
        <img src="/mentor-logo.svg" alt="Mentor" />
      </a>

      <div className="w-full max-w-[760px]">
        {page.propertySelection ? (
          <PropertySelectionPage
            page={page.propertySelection}
            selectedProperties={selectedProperties}
            onToggleProperty={onToggleProperty}
            onBack={onBack}
            onNext={onNext}
            backButtonLabel={page.previousButtonLabel}
            nextButtonLabel={page.nextButtonLabel}
          />
        ) : page.principles ? (
          <PrinciplesInfo
            header={page.header}
            introduction={page.question}
            principles={page.principles}
            onBack={onBack}
            onNext={onNext}
            backButtonLabel={page.previousButtonLabel}
            nextButtonLabel={page.nextButtonLabel}
          />
        ) : (
          <QuizBox
            header={page.header}
            question={page.question}
            illustrationSrc={page.illustrationSrc}
            illustrationAlt={page.illustrationAlt}
          >
            <div className="flex justify-center gap-3">
              {page.previousPageId && onBack ? (
                <QuizButton label={page.previousButtonLabel ?? 'Tillbaka'} onClick={onBack} />
              ) : null}
              {page.nextPageId && onNext ? (
                <QuizButton label={page.nextButtonLabel ?? 'Nästa'} onClick={onNext} />
              ) : null}
            </div>
          </QuizBox>
        )}
      </div>
    </main>
  )
}
