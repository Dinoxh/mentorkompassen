import { QuizButton } from '@/features/quiz/components/quiz-button'
import type { Principle } from '@/features/quiz/data/quiz-pages'

type PrinciplesInfoProps = {
  header: string
  introduction: string
  principles: Principle[]
  onBack?: () => void
  backButtonLabel?: string
}

export function PrinciplesInfo({
  header,
  introduction,
  principles,
  onBack,
  backButtonLabel = 'Tillbaka',
}: PrinciplesInfoProps) {
  return (
    <div className="w-full rounded-[40px] bg-white px-6 pb-8 pt-8 shadow-[0_12px_28px_rgba(0,0,0,0.12)] md:px-10 md:pb-10 md:pt-10">
      <div className="mb-10">
        <h1 className="text-2xl font-bold md:text-3xl">{header}</h1>
        <p className="mt-3 max-w-[60ch] whitespace-pre-line text-sm font-semibold leading-snug md:text-base">
          {introduction}
        </p>
      </div>

      <div className="space-y-8 md:space-y-10">
        {principles.map((principle) => (
          <section key={principle.title} className="flex items-center gap-5 md:gap-8">
            <img
              src={principle.iconSrc}
              alt={principle.iconAlt}
              className="h-20 w-20 shrink-0 rounded-full object-cover md:h-28 md:w-28"
            />

            <div className="min-w-0">
              <h2 className="text-xl font-bold leading-tight md:text-[2rem]">{principle.title}</h2>
              <p className="mt-1 text-base font-medium text-black/70 md:text-xl">
                {principle.description}
              </p>
            </div>
          </section>
        ))}
      </div>

      {onBack ? (
        <div className="mt-8 flex justify-center">
          <QuizButton
            label={backButtonLabel}
            onClick={onBack}
            className="bg-transparent shadow-none ring-1 ring-black/20"
          />
        </div>
      ) : null}
    </div>
  )
}
