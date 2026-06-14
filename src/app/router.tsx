import { useEffect, useState } from 'react'
import { HomeRoute } from '@/app/routes/home'
import { getDefaultQuizPage, getQuizPage, quizPages } from '@/features/quiz/data/quiz-pages'
import { usePersistentState } from '@/hooks/use-persistent-state'

const STORAGE_KEYS = {
  selections: 'mentorkompassen:selections',
  personalInfo: 'mentorkompassen:personal-info',
  nextStep: 'mentorkompassen:next-step',
} as const

const DEFAULT_PERSONAL_INFO = { age: '', location: '' }

function getPageIdFromHash(hash: string) {
  return hash.replace(/^#\/?/, '')
}

export function AppRouter() {
  const defaultPage = getDefaultQuizPage()
  const [currentPageId, setCurrentPageId] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultPage.id
    }

    const pageId = getPageIdFromHash(window.location.hash)
    return getQuizPage(pageId)?.id ?? defaultPage.id
  })
  const [selectedPropertiesByPage, setSelectedPropertiesByPage] = usePersistentState<
    Record<string, string[]>
  >(STORAGE_KEYS.selections, {})
  const [personalInfo, setPersonalInfo] = usePersistentState(
    STORAGE_KEYS.personalInfo,
    DEFAULT_PERSONAL_INFO
  )
  const [nextStep, setNextStep] = usePersistentState(STORAGE_KEYS.nextStep, '')
  const [slideDirection, setSlideDirection] = useState<'forward' | 'back' | null>(null)

  useEffect(() => {
    const syncPageWithHash = () => {
      const pageId = getPageIdFromHash(window.location.hash)
      setCurrentPageId(getQuizPage(pageId)?.id ?? defaultPage.id)
    }

    if (!window.location.hash) {
      window.history.replaceState(null, '', `#/${defaultPage.id}`)
    }

    window.addEventListener('hashchange', syncPageWithHash)
    syncPageWithHash()

    return () => window.removeEventListener('hashchange', syncPageWithHash)
  }, [defaultPage.id])

  const currentPage = getQuizPage(currentPageId) ?? defaultPage

  const handleNext = () => {
    if (!currentPage.nextPageId) {
      return
    }

    setSlideDirection('forward')
    window.location.hash = `/${currentPage.nextPageId}`
  }

  const handleBack = () => {
    if (!currentPage.previousPageId) {
      return
    }

    setSlideDirection('back')
    window.location.hash = `/${currentPage.previousPageId}`
  }

  const handleRestart = () => {
    const firstSelectionPage = quizPages.find((p) => p.propertySelection)
    // Wipe saved progress so the quiz truly starts over (also clears sessionStorage).
    setSelectedPropertiesByPage({})
    setPersonalInfo(DEFAULT_PERSONAL_INFO)
    setNextStep('')
    setSlideDirection('forward')
    window.location.hash = `/${firstSelectionPage?.id ?? quizPages[0].id}`
  }

  const handleToggleProperty = (property: string) => {
    setSelectedPropertiesByPage((currentSelections) => {
      const pageSelections = currentSelections[currentPage.id] ?? []
      const maxSelections = currentPage.propertySelection?.maxSelections ?? Infinity

      if (!pageSelections.includes(property) && pageSelections.length >= maxSelections) {
        return currentSelections
      }

      const nextSelections = pageSelections.includes(property)
        ? pageSelections.filter((item) => item !== property)
        : [...pageSelections, property]

      return {
        ...currentSelections,
        [currentPage.id]: nextSelections,
      }
    })
  }

  return (
    <HomeRoute
      page={currentPage}
      selectionsByPage={selectedPropertiesByPage}
      selectedProperties={selectedPropertiesByPage[currentPage.id] ?? []}
      onToggleProperty={handleToggleProperty}
      personalInfo={personalInfo}
      onPersonalInfoChange={setPersonalInfo}
      nextStep={nextStep}
      onNextStepChange={setNextStep}
      onBack={handleBack}
      onNext={handleNext}
      onRestart={handleRestart}
      slideDirection={slideDirection}
    />
  )
}
