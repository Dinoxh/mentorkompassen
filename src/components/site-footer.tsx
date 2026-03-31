type SiteFooterProps = {
  brandColor?: string
}

export function SiteFooter({ brandColor = '#00B469' }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()

  // Determine if the brand color is light (yellow, apricot) to use dark text
  const isDark = isLightColor(brandColor)
  const textColor = isDark ? '#000000' : '#FFFFFF'
  const textMuted = isDark ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.75)'
  const textFaint = isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.45)'
  const accentColor = isDark ? '#000000' : '#FFFF5C'
  const buttonBg = '#FFFF5C'
  const buttonText = '#000000'
  const borderColor = isDark ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.15)'
  const hoverLinkColor = isDark ? '#000000' : '#FFFF5C'

  return (
    <footer className="relative mt-auto">
      {/* Curved wave top */}
      <svg
        viewBox="0 0 1585 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        preserveAspectRatio="none"
        style={{ height: 'clamp(80px, 15vw, 200px)' }}
      >
        <path
          d="M0 250V50C445.783 -101 535.349 157.6 860.345 -21.6C1185.34 -200.8 1585 -40 1585 -40V250H0Z"
          fill={brandColor}
          style={{ transition: 'fill 0.8s ease' }}
        />
      </svg>

      {/* Footer content area */}
      <div
        style={{
          backgroundColor: brandColor,
          color: textColor,
          transition: 'background-color 0.8s ease, color 0.4s ease',
        }}
      >
        <div className="mx-auto max-w-[1420px] px-6 pb-10 pt-4 md:px-10 md:pb-14 md:pt-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Brand + Contact */}
            <div className="flex flex-col gap-4">
              {/* Mentor logo — always white */}
              <a href="https://mentor.se" aria-label="Mentor Sverige">
                <svg
                  width="139"
                  height="30"
                  viewBox="0 0 139 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2 h-8 w-auto"
                >
                  <g fill="#FFFFFF">
                    <path d="m2.563 25.559h-.016v.016h.016zm53.797-17.307-3.23 7.384-3.848 8.796-7.08-16.18-.02-.049h-4.657v21.48h4.128v-13.09l5.76 13.04.022.05h3.694l5.781-13.088v13.087h4.13v-21.479h-4.658l-.021.049zm15.498 4.271c-4.733 0-8.169 3.675-8.169 8.734 0 5.145 3.476 8.733 8.453 8.733 3.773 0 6.314-1.694 7.755-5.181l.04-.097-4.097-.558-.025.056c-.63 1.45-1.956 2.28-3.639 2.28-2.282 0-3.93-1.538-4.22-3.927h12.328v-.082c-.005-7.348-4.544-9.958-8.426-9.958zm4.055 6.987h-7.978c.431-2.009 2.097-3.455 3.99-3.455 1.891 0 3.554 1.447 3.987 3.455zm15.374-6.987c-2.264 0-3.86 1.148-4.636 2.265v-1.948h-3.94v16.841h3.94v-9.521c0-2.38 1.532-4.042 3.726-4.042 1.794 0 2.783 1.312 2.783 3.696v9.87h3.94v-10.31c0-2.265-.59-4.028-1.754-5.236-1.022-1.055-2.425-1.614-4.059-1.614zm13.816-3.839h-3.94v4.158h-2.832v3.558h2.832v7.284c0 5.383 3.719 6.188 5.93 6.188a6.053 6.053 0 0 0 1.53-.192l.062-.015v-3.545l-.107.036a3.159 3.159 0 0 1-1.078.153c-1.618 0-2.405-.828-2.405-2.53v-7.379h3.588v-3.558h-3.588zm13.129 3.906c-4.829 0-8.611 3.823-8.611 8.705s3.782 8.706 8.611 8.706 8.61-3.825 8.61-8.706c0-4.88-3.782-8.705-8.61-8.705zm4.544 8.705c0 2.911-1.911 5.017-4.544 5.017s-4.543-2.11-4.543-5.017 1.912-5.018 4.545-5.018c2.634 0 4.542 2.11 4.542 5.018zm15.562-8.355a4.09 4.09 0 0 0-1.412-.256c-2.105 0-3.216.97-3.79 1.849v-1.689h-3.939v16.84h3.939v-9.428c0-2.264 1.523-3.79 3.79-3.79.462.003.92.086 1.354.246l.107.045v-3.797zm-116.582-4.718a4.11 4.11 0 1 0-4.144-4.112 4.126 4.126 0 0 0 4.144 4.112z" />
                    <path d="m21.714 10.266h-.144c-1.49 0-2.779 1.401-3.445 2.055l-5.208 4.96-5.208-4.96c-.667-.657-1.956-2.055-3.45-2.055h-.145a3.911 3.911 0 0 0-3.912 3.912v15.506h7.97v-11.49l3.234 2.653c.12.097.24.174.346.256.28.215.698.458 1.158.443.46.015.878-.23 1.158-.443.108-.082.228-.159.346-.256l3.235-2.653v11.49h7.97v-15.506a3.913 3.913 0 0 0-3.905-3.912zm-17.637-2.044a4.11 4.11 0 1 1 4.145-4.112 4.127 4.127 0 0 1-4.145 4.112z" />
                  </g>
                </svg>
              </a>

              <div className="flex flex-col gap-1 text-sm" style={{ color: textMuted }}>
                <p className="font-semibold" style={{ color: textColor }}>
                  Kontakta oss
                </p>
                <p>Mentor Sverige</p>
                <p>Sveavägen 68, 111 34 Stockholm</p>
                <a
                  href="mailto:info@mentor.se"
                  className="transition-colors duration-200"
                  style={{ color: textMuted, textDecoration: 'none' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = hoverLinkColor
                    e.currentTarget.style.textDecoration = 'underline'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = textMuted
                    e.currentTarget.style.textDecoration = 'none'
                  }}
                >
                  info@mentor.se
                </a>
              </div>
            </div>

            {/* Column 2: Om oss */}
            <div>
              <h3
                className="mb-3 text-xs font-bold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                Om oss
              </h3>
              <ul className="space-y-2 text-sm">
                <FooterLink
                  href="https://mentor.se/om-mentor"
                  color={textMuted}
                  hoverColor={hoverLinkColor}
                >
                  Om Mentor
                </FooterLink>
                <FooterLink
                  href="https://mentor.se/kontakt"
                  color={textMuted}
                  hoverColor={hoverLinkColor}
                >
                  Kontakt
                </FooterLink>
                <FooterLink
                  href="https://mentor.se/bli-mentor"
                  color={textMuted}
                  hoverColor={hoverLinkColor}
                >
                  Bli Mentor
                </FooterLink>
              </ul>
            </div>

            {/* Column 3: Program */}
            <div>
              <h3
                className="mb-3 text-xs font-bold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                Program
              </h3>
              <ul className="space-y-2 text-sm">
                <FooterLink
                  href="https://mentor.se/mentor-boost"
                  color={textMuted}
                  hoverColor={hoverLinkColor}
                >
                  Mentor Boost
                </FooterLink>
                <FooterLink
                  href="https://mentor.se/our-programs"
                  color={textMuted}
                  hoverColor={hoverLinkColor}
                >
                  Våra program
                </FooterLink>
              </ul>
            </div>

            {/* Column 4: Nyhetsbrev */}
            <div>
              <h3
                className="mb-3 text-xs font-bold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                Nyhetsbrev
              </h3>
              <p className="mb-4 text-sm" style={{ color: textMuted }}>
                Prenumerera på vårt nyhetsbrev för att hålla dig uppdaterad.
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Din e-postadress"
                  className="flex-1 rounded-full border px-4 py-2 text-sm text-black outline-none placeholder:text-gray-400"
                  style={{
                    borderColor: borderColor,
                    backgroundColor: 'rgba(255,255,255,0.95)',
                  }}
                />
                <button
                  className="flex items-center gap-1 whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold transition-transform duration-200 hover:scale-105"
                  style={{
                    backgroundColor: buttonBg,
                    color: buttonText,
                  }}
                >
                  SKICKA IN
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Följ oss (social links) */}
          <div
            className="mt-10 flex flex-wrap items-center gap-4"
            style={{ borderTop: `1px solid ${borderColor}`, paddingTop: '1.5rem' }}
          >
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: accentColor }}
            >
              Följ oss
            </span>
            <div className="flex gap-3">
              <SocialLink
                href="https://www.instagram.com/mentorsverige/"
                label="Instagram"
                color={textMuted}
                hoverColor={textColor}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/mentorsverige"
                label="Facebook"
                color={textMuted}
                hoverColor={textColor}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z" />
                </svg>
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/mentor-sverige/"
                label="LinkedIn"
                color={textMuted}
                hoverColor={textColor}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center text-xs" style={{ color: textFaint }}>
            <p>&copy; {currentYear} Mentor Sverige. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({
  href,
  color,
  hoverColor,
  children,
}: {
  href: string
  color: string
  hoverColor: string
  children: React.ReactNode
}) {
  return (
    <li>
      <a
        href={href}
        className="transition-colors duration-200"
        style={{ color, textDecoration: 'none' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = hoverColor
          e.currentTarget.style.textDecoration = 'underline'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = color
          e.currentTarget.style.textDecoration = 'none'
        }}
      >
        {children}
      </a>
    </li>
  )
}

function SocialLink({
  href,
  label,
  color,
  hoverColor,
  children,
}: {
  href: string
  label: string
  color: string
  hoverColor: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="transition-colors duration-200"
      style={{ color }}
      onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.color = color)}
    >
      {children}
    </a>
  )
}

/** Returns true if the hex color is light enough to need dark text */
function isLightColor(hex: string): boolean {
  const c = hex.replace('#', '')
  const r = parseInt(c.substring(0, 2), 16)
  const g = parseInt(c.substring(2, 4), 16)
  const b = parseInt(c.substring(4, 6), 16)
  // Relative luminance formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.6
}
