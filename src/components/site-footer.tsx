export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer mt-auto">
      <div className="mx-auto max-w-[1420px] px-6 py-10 md:px-8 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="https://mentor.se" aria-label="Mentor Sverige">
              <img
                src="/mentor-logo.svg"
                alt="Mentor"
                className="mb-4 h-8 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-sm leading-relaxed text-white/60">
              Mentor Sverige arbetar for att alla unga ska fa en bra start i livet genom stod fran
              trygga vuxna.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div>
              <h3 className="mb-3 font-semibold text-white">Mentor</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://mentor.se/om-mentor">Om Mentor</a>
                </li>
                <li>
                  <a href="https://mentor.se/kontakt">Kontakt</a>
                </li>
                <li>
                  <a href="https://mentor.se/bli-mentor">Bli Mentor</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold text-white">Program</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://mentor.se/mentor-boost">Mentor Boost</a>
                </li>
                <li>
                  <a href="https://mentor.se/our-programs">Vara program</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>&copy; {currentYear} Mentor Sverige. Alla rattigheter forbehallna.</p>
        </div>
      </div>
    </footer>
  )
}
