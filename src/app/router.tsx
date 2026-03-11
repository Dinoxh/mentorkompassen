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

  return <HomeRoute page={currentPage} onBack={handleBack} onNext={handleNext} />
}
