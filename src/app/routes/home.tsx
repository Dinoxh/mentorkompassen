import { useState } from 'react'
import { CompassSummary } from '@/features/quiz/components/compass-summary'
import { PropertySelectionPage } from '@/features/quiz/components/property-selection-page'
import { PrinciplesInfo } from '@/features/quiz/components/principles-info'
import { QuizButton } from '@/features/quiz/components/quiz-button'
import { QuizBox } from '@/features/quiz/components/quiz-box'
import { compassSections, type QuizPage } from '@/features/quiz/data/quiz-pages'

function buildPrompt(selectionsByPage: Record<string, string[]>): string {
  const categories = [
    { key: 'strengths', label: 'VAD DU ÄR BRA PÅ (Dina personliga egenskaper)' },
    { key: 'love', label: 'VAD DU ÄLSKAR (Dina värderingar)' },
    { key: 'work', label: 'VAD DU KAN FÅ BETALT FÖR (Din drömarbetsplats)' },
    { key: 'world', label: 'VAD VÄRLDEN BEHÖVER (Framtidsspaning)' },
  ]

  const categorySections = categories
    .map(({ key, label }) => {
      const answers = selectionsByPage[key] ?? []
      const lines = Array.from({ length: 5 }, (_, i) => `Svar ${i + 1}: ${answers[i] ?? ''}`).join(
        '\n'
      )
      return `${label}\n${lines}`
    })
    .join('\n\n')

  return `Du är en karriärcoach och jobbsökningsexpert. Baserat på användarens svar nedan — grundade i Ikigai-modellen — ge personliga jobbförslag, karriärvägar och konkreta råd.

Användaren har svarat på upp till 5 frågor inom varje nyckelområde:

${categorySections}

Om ett svar saknas ska du ignorera den raden och enbart utgå från de svar som faktiskt fyllts i.

Baserat på dessa svar, ge följande:

3–5 konkreta jobbtitlar eller karriärvägar som matchar användarens profil
Varför varje roll passar — koppla det tydligt till deras specifika svar
En viktig färdighet eller kompetens att utveckla för den mest rekommenderade karriärvägen
Ett jobbsökningstips anpassat till deras beskrivning av drömarbetsplatsen
En framtidssäkrad insikt — hur deras intressen stämmer överens med vart arbetsmarknaden är på väg
Håll tonen varm, uppmuntrande och praktisk. Svara alltid på svenska.`
}

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
  const [copied, setCopied] = useState(false)

  const handleCopyPrompt = async () => {
    const prompt = buildPrompt(selectionsByPage)
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
                {page.showCopyPrompt ? (
                  <QuizButton
                    label={copied ? 'Kopierad!' : 'Kopiera Prompt'}
                    onClick={handleCopyPrompt}
                  />
                ) : page.nextPageId && onNext ? (
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
