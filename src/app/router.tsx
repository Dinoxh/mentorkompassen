import { useEffect, useState } from 'react'
import { HomeRoute } from '@/app/routes/home'
import { getDefaultQuizPage, getQuizPage } from '@/features/quiz/data/quiz-pages'

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
  const [selectedPropertiesByPage, setSelectedPropertiesByPage] = useState<
    Record<string, string[]>
  >({})

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

    window.location.hash = `/${currentPage.nextPageId}`
  }

  const handleBack = () => {
    if (!currentPage.previousPageId) {
      return
    }

    window.location.hash = `/${currentPage.previousPageId}`
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
      selectedProperties={selectedPropertiesByPage[currentPage.id] ?? []}
      onToggleProperty={handleToggleProperty}
      onBack={handleBack}
      onNext={handleNext}
    />
  )
}
