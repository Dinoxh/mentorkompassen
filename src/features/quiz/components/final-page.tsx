import { useState } from 'react'
import { QuizButton } from '@/features/quiz/components/quiz-button'

type FinalPageProps = {
  onCopyPrompt: () => void
  onDownloadImage: () => void
  onRestart: () => void
  onBack?: () => void
  copied: boolean
  nextStep: string
  onNextStepChange: (value: string) => void
}

const mentorshipBullets = [
  'hur ett yrke är på riktigt',
  'vilka ämnen eller utbildningar som kan vara bra',
  'vad du kan göra redan nu om du är nyfiken',
]

const syvBullets = [
  'Vilka program eller utbildningar passar mina intressen?',
  'Vad behöver jag plugga för de yrken jag är nyfiken på?',
  'Vilka val håller flest dörrar öppna?',
]

const aiBullets = [
  'yrken som kan passa dina svar',
  'ämnen eller utbildningar att titta närmare på',
  'frågor att ta med till SYV eller mentor',
]

const nextStepExamples = [
  'Jag vill ta reda på mer om programmerare.',
  'Jag vill fråga SYV vilket gymnasieprogram som passar om jag gillar teknik.',
  'Jag vill träffa en mentor som jobbar med juridik.',
  'Jag vill veta vilka ämnen jag behöver plugga om jag vill jobba med människor.',
  'Jag vill läsa mer om hur man blir designer.',
  'Jag vill prata med någon som jobbar med att hjälpa andra.',
]

function AccordionSection({
  title,
  isOpen,
  onToggle,
  children,
  delay = 0,
}: {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
  delay?: number
}) {
  return (
    <div className="animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between rounded-2xl border border-black/10 bg-white/60 px-5 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:bg-white/80"
      >
        <span className="text-sm font-bold text-neutral-800 md:text-base">{title}</span>
        <span
          className="text-lg text-neutral-400 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ▾
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: isOpen ? 600 : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-5 pb-4 pt-3">{children}</div>
      </div>
    </div>
  )
}

function BulletList({ items, label }: { items: string[]; label: string }) {
  return (
    <>
      <p className="mb-2 text-sm font-bold text-neutral-700">{label}</p>
      <ul className="space-y-1.5 pl-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--page-accent)]" />
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export function FinalPage({
  onCopyPrompt,
  onDownloadImage,
  onRestart,
  onBack,
  copied,
  nextStep,
  onNextStepChange,
}: FinalPageProps) {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState(false)
  const [saved, setSaved] = useState(false)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const handleSaveStep = () => {
    if (nextStep.trim()) {
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    }
  }

  return (
    <div className="quiz-card relative flex h-[720px] max-h-[calc(100vh-2rem)] w-full max-w-[760px] flex-col overflow-clip rounded-[56px] px-6 pb-8 pt-10 md:px-10 md:pb-10 md:pt-12">
      <div className="quiz-scroll flex-1 overflow-x-hidden overflow-y-scroll pr-1">
        <div className="mb-6 text-center">
          <h1
            className="animate-shimmer-text animate-text-reveal text-2xl font-black tracking-tight md:text-3xl"
            style={{ animationDelay: '0.1s' }}
          >
            Vad vill du göra nu?
          </h1>
          <p
            className="animate-fade-in mt-2 text-sm font-medium text-neutral-600 md:text-base"
            style={{ animationDelay: '0.3s' }}
          >
            Din Mentorkompass är en startpunkt. Välj ett nästa steg som känns mest intressant för
            dig.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <AccordionSection
            title="Jag är nyfiken på mentorskap"
            isOpen={openSection === 'mentorship'}
            onToggle={() => toggleSection('mentorship')}
            delay={0.4}
          >
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              Vill du veta hur det är att prata med någon som jobbar med ett yrke eller område du är
              nyfiken på?
            </p>
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              Genom mentorskap kan du få höra hur ett jobb fungerar i verkligheten, vilka vägar som
              kan leda dit och vad du kan testa redan nu.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-neutral-600">
              Det kan till exempel vara någon som jobbar som programmerare, jurist, ingenjör,
              ekonom, sjuksköterska, designer, polis, kommunikatör eller entreprenör.
            </p>
            <BulletList items={mentorshipBullets} label="Mentorskap kan hjälpa dig att förstå:" />
            <div className="mt-4">
              <a href="https://mentor.se/ungdom/" target="_blank" rel="noopener noreferrer">
                <QuizButton label="Jag är nyfiken på mentorskap" />
              </a>
            </div>
          </AccordionSection>

          <AccordionSection
            title="Jag vill prata med SYV"
            isOpen={openSection === 'syv'}
            onToggle={() => toggleSection('syv')}
            delay={0.5}
          >
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              SYV betyder studie- och yrkesvägledare. SYV kan hjälpa dig att förstå vilka
              gymnasieprogram, kurser och utbildningsvägar som passar det du är intresserad av.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-neutral-600">
              Du kan ta med din Mentorkompass som underlag för samtalet.
            </p>
            <BulletList items={syvBullets} label="Frågor du kan ta med till SYV:" />
            <p className="mt-4 text-m font-bold text-neutral-700">
              Ta med ditt resultat till mötet med din SYV
            </p>
          </AccordionSection>

          <AccordionSection
            title="Jag vill få tips med AI"
            isOpen={openSection === 'ai'}
            onToggle={() => toggleSection('ai')}
            delay={0.6}
          >
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              Du kan använda dina svar för att få fler idéer med hjälp av AI.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-neutral-600">
              AI kan hjälpa dig att se mönster i dina svar och ge förslag på yrken, skolämnen,
              utbildningar eller saker att utforska vidare.
            </p>
            <BulletList items={aiBullets} label="AI kan hjälpa dig med:" />
            <div className="mt-4">
              <QuizButton
                label={copied ? 'Kopierad!' : 'Kopiera AI-prompt'}
                onClick={onCopyPrompt}
              />
            </div>
          </AccordionSection>

          <AccordionSection
            title="Jag vill välja ett eget nästa steg"
            isOpen={openSection === 'custom'}
            onToggle={() => toggleSection('custom')}
            delay={0.7}
          >
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              Du kan också välja något litet att göra själv. Det kan vara att läsa mer om ett yrke,
              prata med någon hemma, fråga en lärare, söka efter en utbildning eller testa något
              praktiskt.
            </p>
            <label
              htmlFor="next-step"
              className={`mb-2 block text-sm font-bold transition-colors duration-200 ${
                focusedField ? 'text-[var(--page-accent-active)]' : 'text-neutral-700'
              }`}
            >
              Mitt nästa steg är:
            </label>
            <textarea
              id="next-step"
              placeholder="T.ex. Jag vill ta reda på mer om programmerare."
              value={nextStep}
              onChange={(e) => onNextStepChange(e.target.value)}
              onFocus={() => setFocusedField(true)}
              onBlur={() => setFocusedField(false)}
              rows={3}
              className="w-full resize-none rounded-2xl border-2 border-neutral-200 bg-white/80 px-5 py-4 text-sm font-semibold text-neutral-800 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-neutral-400 focus:border-[var(--page-accent)] focus:shadow-[0_0_0_4px_var(--page-accent-glow)]"
            />
            <div className="mt-2">
              <p className="mb-2 text-xs font-semibold text-neutral-500">Exempel:</p>
              <ul className="space-y-1">
                {nextStepExamples.map((example) => (
                  <li key={example} className="text-xs leading-relaxed text-neutral-400">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <QuizButton
                label={saved ? 'Sparat!' : 'Spara mitt nästa steg'}
                onClick={handleSaveStep}
              />
            </div>
          </AccordionSection>
        </div>

        <div
          className="animate-fade-in mt-6 rounded-3xl border border-dashed border-black/15 px-5 py-4 text-center"
          style={{ animationDelay: '0.8s' }}
        >
          <p className="text-sm font-medium text-neutral-500">
            Kom ihåg: du behöver inte veta exakt vad du vill bli. Det viktiga är att börja utforska
            vad som passar dig och vilka möjligheter som finns.
          </p>
        </div>

        <div
          className="animate-fade-in mt-6 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: '0.9s' }}
        >
          <QuizButton label="Ladda ned resultatet" onClick={onDownloadImage} />
          <QuizButton label="Gör om kompassen" onClick={onRestart} />
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-3 md:mt-6">
        {onBack && <QuizButton label="Tillbaka" onClick={onBack} />}
      </div>
    </div>
  )
}
