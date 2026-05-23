import { useRef } from 'react'
import { Confetti, type ConfettiRef } from '@/components/ui/confetti'
import { QuizButton } from '@/features/quiz/components/quiz-button'

type CompassDonePageProps = {
  onBack?: () => void
  onNext?: () => void
  backButtonLabel?: string
  nextButtonLabel?: string
}

const useCases = [
  'Hitta yrken eller utbildningar att utforska',
  'Förstå vad som känns viktigt för dig',
  'Få idéer till vad du vill testa vidare',
  'Prata med en mentor, lärare eller SYV',
  'Tänka vidare kring skola, fritid och framtidsplaner',
]

export function CompassDonePage({
  onBack,
  onNext,
  backButtonLabel = 'Tillbaka',
  nextButtonLabel = 'Nästa',
}: CompassDonePageProps) {
  const confettiRef = useRef<ConfettiRef>(null)

  return (
    <div className="quiz-card relative flex h-[720px] max-h-[calc(100vh-2rem)] w-full max-w-[760px] flex-col overflow-clip rounded-[56px] px-6 pb-8 pt-16 md:px-10 md:pb-10 md:pt-20">
      <Confetti
        ref={confettiRef}
        className="pointer-events-none absolute inset-0 z-50 h-full w-full"
        options={{ particleCount: 100, spread: 70, origin: { y: 0.6 } }}
      />
      <div className="flex flex-1 flex-col items-center justify-center px-2 md:px-8">
        <h1
          className="animate-shimmer-text animate-text-reveal mb-4 text-center text-2xl font-black tracking-tight md:text-3xl"
          style={{ animationDelay: '0.1s' }}
        >
          Din Mentorkompass är klar
        </h1>

        <div
          className="animate-line-grow mx-auto mb-6 h-[2px] w-20 origin-center rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--page-accent), transparent)',
            animationDelay: '0.3s',
          }}
        />

        <p
          className="animate-fade-in mb-2 max-w-[50ch] text-center text-sm font-medium leading-relaxed text-neutral-600 md:text-base"
          style={{ animationDelay: '0.4s' }}
        >
          Du har nu valt saker som säger något om vad du gillar, vad du är bra på, vilka yrken du är
          nyfiken på och vad du tycker är viktigt.
        </p>
        <p
          className="animate-fade-in mb-6 max-w-[50ch] text-center text-sm font-medium leading-relaxed text-neutral-600 md:text-base"
          style={{ animationDelay: '0.55s' }}
        >
          Det här är inte ett facit. Det är en startpunkt som kan hjälpa dig att upptäcka nya
          möjligheter och börja forma dina framtidsplaner.
        </p>

        <div
          className="animate-fade-in w-full max-w-md rounded-3xl border border-black/10 bg-white/60 px-5 py-4 backdrop-blur-sm"
          style={{ animationDelay: '0.7s' }}
        >
          <p className="mb-3 text-sm font-bold text-neutral-800 md:text-base">
            Det här kan du använda din kompass till
          </p>
          <ul className="space-y-2">
            {useCases.map((item, i) => (
              <li
                key={item}
                className="animate-fade-in flex items-start gap-2 text-sm text-neutral-600 md:text-base"
                style={{ animationDelay: `${0.85 + i * 0.1}s` }}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--page-accent)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-3 md:mt-6">
        {onBack && <QuizButton label={backButtonLabel} onClick={onBack} direction="back" />}
        {onNext && <QuizButton label={nextButtonLabel} onClick={onNext} direction="forward" />}
      </div>
    </div>
  )
}
