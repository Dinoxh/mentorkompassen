type SiteFooterProps = {
  brandColor?: string
}

export function SiteFooter({ brandColor = '#00B469' }: SiteFooterProps) {
  const currentYear = new Date().getFullYear()

  // All footer text is black
  const textColor = '#000000'
  const textMuted = 'rgba(0,0,0,0.65)'
  const textFaint = 'rgba(0,0,0,0.4)'
  const accentColor = '#000000'
  const buttonBg = '#FFFF5C'
  const buttonText = '#000000'
  const borderColor = 'rgba(0,0,0,0.12)'
  const hoverLinkColor = '#000000'

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
              {/* Mentor logo — black */}
              <a href="https://mentor.se" aria-label="Mentor Sverige">
                <svg
                  width="139"
                  height="30"
                  viewBox="0 0 307 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-2 h-8 w-auto"
                >
                  <path d="M5.68529 56.6953H5.64941V56.7312H5.68529V56.6953Z" fill="black" />
                  <path
                    d="M306.89 28.705C305.887 28.332 304.826 28.1393 303.756 28.1357C299.088 28.1357 296.622 30.2885 295.35 32.2379V28.4921H286.61V65.8515H295.35V44.9342C295.35 39.9111 298.729 36.5266 303.756 36.5266C304.782 36.5335 305.798 36.718 306.76 37.0719L307 37.1724V28.7481L306.89 28.705Z"
                    fill="black"
                  />
                  <path
                    d="M262.287 27.9277C251.575 27.9277 243.185 36.4095 243.185 47.2401C243.185 58.0707 251.575 66.5524 262.287 66.5524C272.999 66.5524 281.387 58.0683 281.387 47.2401C281.387 36.4119 272.997 27.9277 262.287 27.9277ZM272.368 47.2401C272.368 53.6982 268.128 58.3696 262.287 58.3696C256.447 58.3696 252.208 53.6887 252.208 47.2401C252.208 40.7915 256.449 36.1081 262.292 36.1081C268.135 36.1081 272.368 40.7891 272.368 47.2401Z"
                    fill="black"
                  />
                  <path
                    d="M202.513 27.7866C197.49 27.7866 193.948 30.3316 192.228 32.8096V28.4922H183.489V65.8516H192.228V44.7262C192.228 39.4472 195.627 35.7589 200.494 35.7589C204.474 35.7589 206.667 38.6698 206.667 43.9584V65.8516H215.406V42.9801C215.406 37.9571 214.098 34.0463 211.517 31.3673C209.25 29.0256 206.139 27.7866 202.513 27.7866Z"
                    fill="black"
                  />
                  <path
                    d="M159.412 27.7866C148.912 27.7866 141.29 35.9383 141.29 47.1612C141.29 58.5754 149.001 66.5357 160.041 66.5357C168.412 66.5357 174.049 62.7756 177.244 55.0401L177.333 54.8249L168.244 53.5882L168.189 53.7126C166.793 56.9274 163.851 58.7715 160.117 58.7715C155.054 58.7715 151.397 55.3582 150.756 50.0578H178.103V49.876C178.093 33.5751 168.022 27.7866 159.412 27.7866ZM168.407 43.2862H150.709C151.665 38.8301 155.36 35.6202 159.558 35.6202C163.755 35.6202 167.443 38.8301 168.405 43.2862H168.407Z"
                    fill="black"
                  />
                  <path
                    d="M48.1721 22.7729H47.8516C44.5486 22.7729 41.6882 25.8824 40.2101 27.332L28.6559 38.3348L17.1016 27.332C15.6235 25.8753 12.7631 22.7729 9.44818 22.7729H9.12769C7.98789 22.7729 6.85925 22.9975 5.80621 23.4337C4.75317 23.8699 3.79635 24.5093 2.99039 25.3153C2.18443 26.1214 1.54511 27.0783 1.10893 28.1314C0.672745 29.1846 0.448242 30.3133 0.448242 31.4532V65.8514H18.13V40.3607L25.3051 46.2472C25.5682 46.4625 25.836 46.6323 26.0728 46.8141C26.6947 47.2925 27.6203 47.8307 28.6415 47.7972C29.6628 47.8307 30.5883 47.2877 31.2102 46.8141C31.4494 46.6323 31.7148 46.4625 31.9779 46.2472L39.153 40.3607V65.8514H56.8348V31.4532C56.8348 29.154 55.9226 26.9486 54.2985 25.3213C52.6744 23.6939 50.4711 22.7774 48.1721 22.7729Z"
                    fill="black"
                  />
                  <path
                    d="M233.162 19.2666H224.423V28.4922H218.14V36.3856H224.423V52.543C224.423 64.4858 232.672 66.2702 237.577 66.2702C238.722 66.2735 239.862 66.1304 240.971 65.8444L241.109 65.8109V57.9487L240.87 58.03C240.099 58.2809 239.289 58.3959 238.479 58.3697C234.891 58.3697 233.145 56.5327 233.145 52.7558V36.3856H241.105V28.4922H233.145L233.162 19.2666Z"
                    fill="black"
                  />
                  <path
                    d="M125.03 18.3098L117.862 34.692L109.327 54.2053L93.6227 18.3098L93.5748 18.2021H83.2451V65.8515H92.4029V36.8161L105.182 65.7439L105.23 65.8515H113.423L126.25 36.8184V65.8515H135.41V18.2021H125.078L125.03 18.3098Z"
                    fill="black"
                  />
                  <path
                    d="M48.265 18.2405C50.0653 18.2258 51.821 17.6786 53.3109 16.6677C54.8007 15.6567 55.9581 14.2274 56.637 12.5598C57.316 10.8922 57.4862 9.06085 57.1261 7.29664C56.7661 5.53244 55.892 3.91429 54.614 2.64609C53.3359 1.37789 51.7111 0.516405 49.9443 0.170191C48.1775 -0.176023 46.3478 0.0085244 44.6857 0.700584C43.0236 1.39264 41.6035 2.56125 40.6044 4.05912C39.6053 5.557 39.0718 7.31712 39.0713 9.11769C39.0754 10.3206 39.3165 11.5109 39.7808 12.6206C40.2452 13.7303 40.9237 14.7375 41.7775 15.5848C42.6313 16.432 43.6438 17.1027 44.7569 17.5583C45.8701 18.014 47.0622 18.2458 48.265 18.2405Z"
                    fill="black"
                  />
                  <path
                    d="M9.04538 18.2405C7.24504 18.2258 5.48932 17.6786 3.99945 16.6677C2.50959 15.6567 1.35227 14.2274 0.673319 12.5598C-0.00563164 10.8922 -0.175828 9.06085 0.184186 7.29664C0.544199 5.53244 1.41831 3.91429 2.69636 2.64609C3.97441 1.37789 5.59922 0.516405 7.36602 0.170191C9.13282 -0.176023 10.9626 0.0085244 12.6247 0.700584C14.2868 1.39264 15.7069 2.56125 16.706 4.05912C17.7051 5.557 18.2385 7.31712 18.239 9.11769C18.235 10.3206 17.9939 11.5109 17.5295 12.6206C17.0652 13.7303 16.3867 14.7375 15.5328 15.5848C14.679 16.432 13.6666 17.1027 12.5534 17.5583C11.4402 18.014 10.2482 18.2458 9.04538 18.2405Z"
                    fill="black"
                  />
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
