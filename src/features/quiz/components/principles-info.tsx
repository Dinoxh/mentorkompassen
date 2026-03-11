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

export function PrinciplesInfo({
  header,
  introduction,
  principles,
  onBack,
  onNext,
  backButtonLabel = 'Tillbaka',
  nextButtonLabel = 'Nästa',
}: PrinciplesInfoProps) {
  return (
    <div className="flex h-[720px] max-h-[calc(100vh-2rem)] w-full max-w-[760px] flex-col overflow-hidden rounded-[56px] bg-white px-6 pb-8 pt-8 shadow-[0_12px_28px_rgba(0,0,0,0.12)] md:px-10 md:pb-10 md:pt-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold md:text-3xl">{header}</h1>
        <p className="mt-3 max-w-[60ch] whitespace-pre-line text-sm font-semibold leading-snug md:text-base">
          {introduction}
        </p>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto pr-1 md:space-y-7">
        {principles.map((principle) => (
          <section key={principle.title} className="flex items-center gap-4 md:gap-6">
            <img
              src={principle.iconSrc}
              alt={principle.iconAlt}
              className="h-18 w-18 shrink-0 rounded-full object-cover md:h-22 md:w-22"
            />

            <div className="min-w-0">
              <h2 className="text-[1.2rem] font-bold leading-tight md:text-[1.85rem]">
                {principle.title}
              </h2>
              <p className="mt-0.5 text-[0.95rem] font-medium text-black/70 md:text-[1.1rem]">
                {principle.description}
              </p>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {onBack ? <QuizButton label={backButtonLabel} onClick={onBack} /> : null}
        {onNext ? <QuizButton label={nextButtonLabel} onClick={onNext} /> : null}
      </div>
    </div>
  )
}
