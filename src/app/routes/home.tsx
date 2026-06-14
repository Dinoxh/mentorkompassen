import { useEffect, useRef, useState } from 'react'
import { CompassSummary } from '@/features/quiz/components/compass-summary'
import { PropertySelectionPage } from '@/features/quiz/components/property-selection-page'
import { PrinciplesInfo } from '@/features/quiz/components/principles-info'
import { QuizButton } from '@/features/quiz/components/quiz-button'
import { QuizBox } from '@/features/quiz/components/quiz-box'
import { PersonalInfoPage } from '@/features/quiz/components/personal-info-page'
import { CompassDonePage } from '@/features/quiz/components/compass-done-page'
import { FinalPage } from '@/features/quiz/components/final-page'
import { compassSections, type QuizPage } from '@/features/quiz/data/quiz-pages'
import { getPageTheme } from '@/features/quiz/data/page-themes'
import { LavaLamp } from '@/components/lava-lamp'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

function buildPrompt(
  selectionsByPage: Record<string, string[]>,
  personalInfo: { age: string; location: string },
  nextStep: string
): string {
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

  const personalLines = [
    personalInfo.age ? `Ålder: ${personalInfo.age} år` : '',
    personalInfo.location ? `Bor i: ${personalInfo.location}` : '',
    nextStep.trim() ? `Mitt nästa steg: ${nextStep.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  const personalSection = personalLines ? `\nOM ANVÄNDAREN\n${personalLines}\n` : ''

  return `Du är en karriärcoach och jobbsökningsexpert. Baserat på användarens svar nedan — grundade i Ikigai-modellen — ge personliga jobbförslag, karriärvägar och konkreta råd.
${personalSection}
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

type PersonalInfo = { age: string; location: string }

type HomeRouteProps = {
  page: QuizPage
  selectionsByPage: Record<string, string[]>
  selectedProperties: string[]
  onToggleProperty: (property: string) => void
  personalInfo: PersonalInfo
  onPersonalInfoChange: (info: PersonalInfo) => void
  nextStep: string
  onNextStepChange: (value: string) => void
  onBack?: () => void
  onNext?: () => void
  onRestart: () => void
  slideDirection?: 'forward' | 'back' | null
}

export function HomeRoute({
  page,
  selectionsByPage,
  selectedProperties,
  onToggleProperty,
  personalInfo,
  onPersonalInfoChange,
  nextStep,
  onNextStepChange,
  onBack,
  onNext,
  onRestart,
  slideDirection,
}: HomeRouteProps) {
  const showCompass = page.propertySelection || page.showCompass
  const [copied, setCopied] = useState(false)
  const compassRef = useRef<SVGSVGElement>(null)
  const theme = getPageTheme(page.id)

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--page-accent', theme.accent)
    root.style.setProperty('--page-accent-active', theme.accentActive)
    root.style.setProperty('--page-accent-glow', theme.accentGlow)
    root.style.setProperty('--page-accent-soft', theme.accentSoft)
    root.style.setProperty('--lava-1', theme.lavaColors[0])
    root.style.setProperty('--lava-2', theme.lavaColors[1])
    root.style.setProperty('--lava-3', theme.lavaColors[2])
  }, [theme])

  const handleCopyPrompt = async () => {
    const prompt = buildPrompt(selectionsByPage, personalInfo, nextStep)
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard may be unavailable (e.g. denied permission); the prompt is still
      // returned so it can be prefilled into the AI service URL.
    }
    return prompt
  }

  const handleDownloadImage = () => {
    const svg = compassRef.current
    if (!svg) return

    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(svg)
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)

    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const scale = 2
      canvas.width = 1200 * scale
      canvas.height = 1200 * scale
      const ctx = canvas.getContext('2d')!
      ctx.fillStyle = '#EFEEE7'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      URL.revokeObjectURL(url)

      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'mentorkompassen-resultat.png'
      link.click()
    }
    img.src = url
  }

  return (
    <div className="page-transition flex min-h-screen flex-col bg-[#EFEEE7]">
      <LavaLamp colors={theme.lavaColors} />
      <SiteHeader />

      <main className="relative z-10 flex-1 px-4 pb-8 pt-20 md:pt-24">
        <div
          className={`mx-auto flex w-full max-w-[1420px] flex-col gap-6 ${showCompass ? 'lg:flex-row lg:items-start lg:justify-center' : 'items-center justify-center'}`}
        >
          {showCompass && (
            <CompassSummary
              ref={compassRef}
              sections={compassSections}
              selectionsByPage={selectionsByPage}
              currentPageId={page.id}
            />
          )}

          <div
            key={page.id}
            className={`${slideDirection === 'forward' ? 'animate-slide-right' : slideDirection === 'back' ? 'animate-slide-left' : 'animate-fade-in'} w-full max-w-[760px] ${showCompass ? 'lg:ml-auto' : ''}`}
          >
            {page.personalInfo ? (
              <PersonalInfoPage
                key={page.id}
                age={personalInfo.age}
                location={personalInfo.location}
                onAgeChange={(age) => onPersonalInfoChange({ ...personalInfo, age })}
                onLocationChange={(location) => onPersonalInfoChange({ ...personalInfo, location })}
                onBack={onBack}
                onNext={onNext}
                backButtonLabel={page.previousButtonLabel}
                nextButtonLabel={page.nextButtonLabel}
              />
            ) : page.propertySelection ? (
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
            ) : page.id === 'compass-done' ? (
              <CompassDonePage
                key={page.id}
                onBack={onBack}
                onNext={onNext}
                backButtonLabel={page.previousButtonLabel}
                nextButtonLabel={page.nextButtonLabel}
              />
            ) : page.id === 'congrats' ? (
              <FinalPage
                key={page.id}
                onCopyPrompt={handleCopyPrompt}
                onDownloadImage={handleDownloadImage}
                onRestart={onRestart}
                onBack={onBack}
                nextStep={nextStep}
                onNextStepChange={onNextStepChange}
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
                subHeader={page.subHeader}
                question={page.question}
                illustrationSrc={page.illustrationSrc}
                illustrationAlt={page.illustrationAlt}
              >
                {page.showCopyPrompt ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex justify-center gap-3">
                      <div className="animate-button-pop" style={{ animationDelay: '1.2s' }}>
                        <QuizButton
                          label={copied ? 'Kopierad!' : 'Kopiera Prompt'}
                          onClick={handleCopyPrompt}
                        />
                      </div>
                      <div className="animate-button-pop" style={{ animationDelay: '1.4s' }}>
                        <QuizButton label="Ladda ned resultatet" onClick={handleDownloadImage} />
                      </div>
                    </div>
                    {page.previousPageId && onBack ? (
                      <div className="animate-button-pop" style={{ animationDelay: '1.6s' }}>
                        <QuizButton
                          label={page.previousButtonLabel ?? 'Tillbaka'}
                          onClick={onBack}
                          direction="back"
                        />
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div className="flex justify-center gap-3">
                    {page.previousPageId && onBack ? (
                      <QuizButton
                        label={page.previousButtonLabel ?? 'Tillbaka'}
                        onClick={onBack}
                        direction="back"
                      />
                    ) : null}
                    {page.nextPageId && onNext ? (
                      <QuizButton
                        label={page.nextButtonLabel ?? 'Nästa'}
                        onClick={onNext}
                        direction="forward"
                      />
                    ) : null}
                  </div>
                )}
              </QuizBox>
            )}
          </div>
        </div>
      </main>

      <SiteFooter brandColor={theme.brandColor} />
    </div>
  )
}
