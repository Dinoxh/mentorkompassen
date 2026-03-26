import { CompassSummary } from '@/features/quiz/components/compass-summary'
import { PropertySelectionPage } from '@/features/quiz/components/property-selection-page'
import { PrinciplesInfo } from '@/features/quiz/components/principles-info'
import { QuizButton } from '@/features/quiz/components/quiz-button'
import { QuizBox } from '@/features/quiz/components/quiz-box'
import { compassSections, type QuizPage } from '@/features/quiz/data/quiz-pages'

type HomeRouteProps = {
  page: QuizPage
  selectionsByPage: Record<string, string[]>
  selectedProperties: string[]
  onToggleProperty: (property: string) => void
  onBack?: () => void
  onNext?: () => void
}

export function HomeRoute({
  page,
  selectionsByPage,
  selectedProperties,
  onToggleProperty,
  onBack,
  onNext,
}: HomeRouteProps) {
  const showCompass = page.propertySelection || page.showCompass

  return (
    <main className="relative min-h-screen bg-[#EFEEE7] px-4 pb-8 pt-20 md:pt-24">
      <a className="mentor-brand" href="https://mentor.se" aria-label="Mentor startsida">
        <img src="/mentor-logo.svg" alt="Mentor" />
      </a>

      <div
        className={`mx-auto flex w-full max-w-[1420px] flex-col gap-6 ${showCompass ? 'lg:flex-row lg:items-start lg:justify-center' : 'items-center justify-center'}`}
      >
        {showCompass && (
          <CompassSummary
            sections={compassSections}
            selectionsByPage={selectionsByPage}
            currentPageId={page.id}
          />
        )}

        <div className={`w-full max-w-[760px] ${showCompass ? 'lg:ml-auto' : ''}`}>
          {page.propertySelection ? (
            <PropertySelectionPage
              key={page.id}
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
              key={page.id}
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
              key={page.id}
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
      </div>
    </main>
  )
}
