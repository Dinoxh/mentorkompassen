import { useState } from 'react'
import { QuizButton } from '@/features/quiz/components/quiz-button'

type PersonalInfoPageProps = {
  age: string
  location: string
  onAgeChange: (value: string) => void
  onLocationChange: (value: string) => void
  onBack?: () => void
  onNext?: () => void
  backButtonLabel?: string
  nextButtonLabel?: string
}

export function PersonalInfoPage({
  age,
  location,
  onAgeChange,
  onLocationChange,
  onBack,
  onNext,
  backButtonLabel = 'Tillbaka',
  nextButtonLabel = 'Nästa',
}: PersonalInfoPageProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <div className="quiz-card relative flex h-[720px] max-h-[calc(100vh-2rem)] w-full max-w-[760px] flex-col overflow-clip rounded-[56px] px-6 pb-8 pt-16 md:px-10 md:pb-10 md:pt-20">
      <div className="absolute left-1/2 top-5 -translate-x-1/2 text-center">
        <h1
          className="animate-shimmer-text animate-text-reveal text-2xl font-black tracking-tight md:text-3xl"
          style={{ animationDelay: '0.1s' }}
        >
          Om dig
        </h1>
        <div
          className="animate-line-grow mx-auto mt-2 h-[2px] w-16 origin-center rounded-full"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--page-accent), transparent)',
            animationDelay: '0.3s',
          }}
        />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-8 px-2 md:px-12">
        <p
          className="animate-fade-in text-center text-sm font-semibold leading-snug text-neutral-700 md:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          Berätta lite om dig själv så att vi kan ge dig bättre förslag.
        </p>

        <div className="flex w-full max-w-md flex-col gap-6">
          <div className="animate-fade-in" style={{ animationDelay: '0.35s' }}>
            <label
              htmlFor="age"
              className={`mb-2 block text-sm font-bold transition-colors duration-200 ${
                focusedField === 'age' ? 'text-[var(--page-accent-active)]' : 'text-neutral-700'
              }`}
            >
              Hur gammal är du?
            </label>
            <input
              id="age"
              type="number"
              inputMode="numeric"
              min="12"
              max="23"
              step="1"
              placeholder="T.ex. 16"
              value={age}
              onChange={(e) => {
                const val = e.target.value
                if (val === '' || (Number(val) >= 1 && Number(val) <= 23)) {
                  onAgeChange(val)
                }
              }}
              onFocus={() => setFocusedField('age')}
              onBlur={() => setFocusedField(null)}
              className="w-full rounded-2xl border-2 border-neutral-200 bg-white/80 px-5 py-4 text-base font-semibold text-neutral-800 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-neutral-400 focus:border-[var(--page-accent)] focus:shadow-[0_0_0_4px_var(--page-accent-glow)]"
            />
            <p className="mt-1 text-xs text-neutral-400">12–23 år</p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <label
              htmlFor="location"
              className={`mb-2 block text-sm font-bold transition-colors duration-200 ${
                focusedField === 'location'
                  ? 'text-[var(--page-accent-active)]'
                  : 'text-neutral-700'
              }`}
            >
              Vart bor du?
            </label>
            <input
              id="location"
              type="text"
              placeholder="T.ex. Stockholm"
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              onFocus={() => setFocusedField('location')}
              onBlur={() => setFocusedField(null)}
              className="w-full rounded-2xl border-2 border-neutral-200 bg-white/80 px-5 py-4 text-base font-semibold text-neutral-800 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-neutral-400 focus:border-[var(--page-accent)] focus:shadow-[0_0_0_4px_var(--page-accent-glow)]"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-3 md:mt-6">
        {onBack && <QuizButton label={backButtonLabel} onClick={onBack} />}
        {onNext && <QuizButton label={nextButtonLabel} onClick={onNext} />}
      </div>
    </div>
  )
}
