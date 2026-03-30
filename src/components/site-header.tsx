import { useEffect, useState } from 'react'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="mx-auto flex max-w-[1420px] items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <a
          href="https://mentor.se"
          aria-label="Mentor Sverige startsida"
          className="flex items-center gap-3"
        >
          <img src="/mentor-logo.svg" alt="Mentor" className="h-8 w-auto md:h-10" />
        </a>
      </div>
    </header>
  )
}
