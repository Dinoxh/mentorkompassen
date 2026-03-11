import { PrinciplesInfo } from '@/features/quiz/components/principles-info'
import { QuizButton } from '@/features/quiz/components/quiz-button'
import { QuizBox } from '@/features/quiz/components/quiz-box'
import type { QuizPage } from '@/features/quiz/data/quiz-pages'

type HomeRouteProps = {
  page: QuizPage
  onBack?: () => void
  onNext?: () => void
}

export function HomeRoute({ page, onBack, onNext }: HomeRouteProps) {
  return (
    <main className="relative min-h-screen bg-[#EFEEE7] flex items-center justify-center px-4 py-8">
      <a className="mentor-brand" href="https://mentor.se" aria-label="Mentor startsida">
        <img src="/mentor-logo.svg" alt="Mentor" />
      </a>

      <div className="w-full max-w-[760px]">
        {page.principles ? (
          <PrinciplesInfo
            header={page.header}
            introduction={page.question}
            principles={page.principles}
            onBack={onBack}
            backButtonLabel={page.previousButtonLabel}
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
                <QuizButton
                  label={page.previousButtonLabel ?? 'Tillbaka'}
                  onClick={onBack}
                  className="bg-transparent shadow-none ring-1 ring-black/20"
                />
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
