type SiteFooterProps = {
  brandColor?: string
}

export function SiteFooter({ brandColor = '#00B469' }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()

  // Determine if the brand color is light (yellow, apricot) to use dark text
  const isDark = isLightColor(brandColor)
  const textColor = isDark ? '#000000' : '#FFFFFF'
  const textMuted = isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)'
  const textFaint = isDark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)'
  const borderColor = isDark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'

  return (
    <footer
      className="mt-auto transition-colors duration-500"
      style={{ backgroundColor: brandColor, color: textColor }}
    >
      <div className="mx-auto max-w-[1420px] px-6 py-10 md:px-8 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="https://mentor.se" aria-label="Mentor Sverige">
              {/* Mentor logo — white or black depending on background */}
              <svg
                width="139"
                height="30"
                viewBox="0 0 139 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-4 h-8 w-auto"
              >
                <g fill="#FFFFFF">
                  <path d="m2.563 25.559h-.016v.016h.016zm53.797-17.307-3.23 7.384-3.848 8.796-7.08-16.18-.02-.049h-4.657v21.48h4.128v-13.09l5.76 13.04.022.05h3.694l5.781-13.088v13.087h4.13v-21.479h-4.658l-.021.049zm15.498 4.271c-4.733 0-8.169 3.675-8.169 8.734 0 5.145 3.476 8.733 8.453 8.733 3.773 0 6.314-1.694 7.755-5.181l.04-.097-4.097-.558-.025.056c-.63 1.45-1.956 2.28-3.639 2.28-2.282 0-3.93-1.538-4.22-3.927h12.328v-.082c-.005-7.348-4.544-9.958-8.426-9.958zm4.055 6.987h-7.978c.431-2.009 2.097-3.455 3.99-3.455 1.891 0 3.554 1.447 3.987 3.455zm15.374-6.987c-2.264 0-3.86 1.148-4.636 2.265v-1.948h-3.94v16.841h3.94v-9.521c0-2.38 1.532-4.042 3.726-4.042 1.794 0 2.783 1.312 2.783 3.696v9.87h3.94v-10.31c0-2.265-.59-4.028-1.754-5.236-1.022-1.055-2.425-1.614-4.059-1.614zm13.816-3.839h-3.94v4.158h-2.832v3.558h2.832v7.284c0 5.383 3.719 6.188 5.93 6.188a6.053 6.053 0 0 0 1.53-.192l.062-.015v-3.545l-.107.036a3.159 3.159 0 0 1-1.078.153c-1.618 0-2.405-.828-2.405-2.53v-7.379h3.588v-3.558h-3.588zm13.129 3.906c-4.829 0-8.611 3.823-8.611 8.705s3.782 8.706 8.611 8.706 8.61-3.825 8.61-8.706c0-4.88-3.782-8.705-8.61-8.705zm4.544 8.705c0 2.911-1.911 5.017-4.544 5.017s-4.543-2.11-4.543-5.017 1.912-5.018 4.545-5.018c2.634 0 4.542 2.11 4.542 5.018zm15.562-8.355a4.09 4.09 0 0 0-1.412-.256c-2.105 0-3.216.97-3.79 1.849v-1.689h-3.939v16.84h3.939v-9.428c0-2.264 1.523-3.79 3.79-3.79.462.003.92.086 1.354.246l.107.045v-3.797zm-116.582-4.718a4.11 4.11 0 1 0-4.144-4.112 4.126 4.126 0 0 0 4.144 4.112z" />
                  <path d="m21.714 10.266h-.144c-1.49 0-2.779 1.401-3.445 2.055l-5.208 4.96-5.208-4.96c-.667-.657-1.956-2.055-3.45-2.055h-.145a3.911 3.911 0 0 0-3.912 3.912v15.506h7.97v-11.49l3.234 2.653c.12.097.24.174.346.256.28.215.698.458 1.158.443.46.015.878-.23 1.158-.443.108-.082.228-.159.346-.256l3.235-2.653v11.49h7.97v-15.506a3.913 3.913 0 0 0-3.905-3.912zm-17.637-2.044a4.11 4.11 0 1 1 4.145-4.112 4.127 4.127 0 0 1-4.145 4.112z" />
                </g>
              </svg>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: textMuted }}>
              Mentor Sverige arbetar för att alla unga ska få en bra start i livet genom stöd från
              trygga vuxna.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div>
              <h3 className="mb-3 font-semibold" style={{ color: textColor }}>
                Mentor
              </h3>
              <ul className="space-y-2">
                <FooterLink
                  href="https://mentor.se/om-mentor"
                  color={textMuted}
                  hoverColor={textColor}
                >
                  Om Mentor
                </FooterLink>
                <FooterLink
                  href="https://mentor.se/kontakt"
                  color={textMuted}
                  hoverColor={textColor}
                >
                  Kontakt
                </FooterLink>
                <FooterLink
                  href="https://mentor.se/bli-mentor"
                  color={textMuted}
                  hoverColor={textColor}
                >
                  Bli Mentor
                </FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold" style={{ color: textColor }}>
                Program
              </h3>
              <ul className="space-y-2">
                <FooterLink
                  href="https://mentor.se/mentor-boost"
                  color={textMuted}
                  hoverColor={textColor}
                >
                  Mentor Boost
                </FooterLink>
                <FooterLink
                  href="https://mentor.se/our-programs"
                  color={textMuted}
                  hoverColor={textColor}
                >
                  Vara program
                </FooterLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 text-center text-xs"
          style={{ borderTop: `1px solid ${borderColor}`, color: textFaint }}
        >
          <p>&copy; {currentYear} Mentor Sverige. Alla rättigheter förbehållna.</p>
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
        onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
        onMouseLeave={(e) => (e.currentTarget.style.color = color)}
      >
        {children}
      </a>
    </li>
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
