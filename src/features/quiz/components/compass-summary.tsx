import type { CompassSection } from '@/features/quiz/data/quiz-pages'

type CompassSummaryProps = {
  sections: CompassSection[]
  selectionsByPage: Record<string, string[]>
  currentPageId: string
}

export function CompassSummary({ sections, selectionsByPage, currentPageId }: CompassSummaryProps) {
  const currentSection = sections.find((section) => section.sourcePageId === currentPageId)

  return (
    <aside className="w-full max-w-[560px] lg:sticky lg:top-24">
      <div className="flex h-[720px] max-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-[56px] bg-white px-6 pb-8 pt-8 shadow-[0_12px_28px_rgba(0,0,0,0.12)] md:px-10 md:pb-10 md:pt-10">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
            Din kompass
          </p>
          <h1 className="mt-2 text-3xl font-bold">Mentorkompassen</h1>
          <p className="mt-3 max-w-[48ch] text-sm font-medium leading-relaxed text-black/65 md:text-base">
            Här samlas dina val löpande medan du går igenom quizet.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto pr-1">
          {currentSection ? (
            <SingleSectionView
              section={currentSection}
              selections={selectionsByPage[currentSection.sourcePageId] ?? []}
            />
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {sections.map((section) => {
                const selections = selectionsByPage[section.sourcePageId] ?? []

                return <SectionCard key={section.id} section={section} selections={selections} />
              })}
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

function SingleSectionView({
  section,
  selections,
}: {
  section: CompassSection
  selections: string[]
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-4">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: section.backgroundColor }}
        >
          <img src={section.iconSrc} alt={section.iconAlt} className="h-9 w-9" />
        </div>

        <div className="min-w-0">
          <h2 className="text-xl font-bold leading-tight">{section.title}</h2>
          <p className="mt-0.5 text-base font-medium text-black/60">{section.subtitle}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-wrap content-start gap-3">
        {selections.length ? (
          selections.map((selection) => (
            <span
              key={selection}
              className="rounded-full px-4 py-2 text-base font-semibold text-black"
              style={{ backgroundColor: section.activeBackgroundColor }}
            >
              {selection}
            </span>
          ))
        ) : (
          <p className="text-base font-medium leading-relaxed text-black/35">Inga val ännu.</p>
        )}
      </div>
    </div>
  )
}

function SectionCard({ section, selections }: { section: CompassSection; selections: string[] }) {
  return (
    <section className="rounded-[34px] border border-black/8 bg-[#f8f6ef] p-4">
      <div className="flex items-center gap-3">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: section.backgroundColor }}
        >
          <img src={section.iconSrc} alt={section.iconAlt} className="h-8 w-8" />
        </div>

        <div className="min-w-0">
          <h2 className="text-base font-bold leading-tight md:text-lg">{section.title}</h2>
          <p className="mt-0.5 text-sm font-medium text-black/60 md:text-base">
            {section.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-4 flex min-h-[128px] flex-wrap content-start gap-2">
        {selections.length ? (
          selections.map((selection) => (
            <span
              key={selection}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-black"
              style={{ backgroundColor: section.activeBackgroundColor }}
            >
              {selection}
            </span>
          ))
        ) : (
          <p className="text-sm font-medium leading-relaxed text-black/35">Inga val ännu.</p>
        )}
      </div>
    </section>
  )
}
