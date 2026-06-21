type SiteFooterProps = {
  brandColor?: string
}

const footerLinkClass =
  'relative inline-block transition-colors duration-[450ms] ease-[cubic-bezier(0.46,0.7,0,1.1)] delay-[130ms] hover:text-[#FFFF5C] after:pointer-events-none after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-0 after:bg-current after:transition-[width] after:duration-[450ms] after:ease-[cubic-bezier(0.46,0.7,0,1.1)] after:delay-[130ms] hover:after:w-full'

export function SiteFooter({ brandColor = '#00B469' }: SiteFooterProps) {
  const textColor = '#000000'
  const buttonBg = '#FFFF5C'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="animate-footer-rise relative mt-auto">
      <div className="relative">
        <svg
          viewBox="0 0 1585 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-wave block w-full"
          preserveAspectRatio="none"
          style={{ height: 'clamp(80px, 15vw, 200px)' }}
        >
          <path
            d="M0 250V50C445.783 -101 535.349 157.6 860.345 -21.6C1185.34 -200.8 1585 -40 1585 -40V250H0Z"
            fill={brandColor}
            style={{ transition: 'fill 0.8s ease' }}
          />
        </svg>

        <button
          onClick={scrollToTop}
          aria-label="Tillbaka till toppen"
          className="absolute right-6 top-2 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-black transition-all duration-200 hover:-translate-y-1 hover:shadow-lg md:right-10 md:top-4 md:h-16 md:w-16"
          style={{ backgroundColor: buttonBg }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>

      <div
        style={{
          backgroundColor: brandColor,
          color: textColor,
          transition: 'background-color 0.8s ease, color 0.4s ease',
        }}
      >
        <div className="mx-auto max-w-[1420px] px-6 pb-10 pt-4 md:px-10 md:pb-14 md:pt-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="animate-stagger-up flex flex-col gap-6"
              style={{ animationDelay: '0.1s' }}
            >
              <a href="https://mentor.se" aria-label="Mentor Sverige">
                <svg
                  width="180"
                  height="40"
                  viewBox="0 0 307 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-auto"
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

              <p className="max-w-[280px] text-base font-medium leading-snug">
                Mentor Sverige är en ideell organisation som arbetar med mentorskap för ungdomar.
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-center leading-none">
                    <span className="text-4xl font-black leading-none">90</span>
                    <span className="mt-0.5 text-[9px] font-bold tracking-[0.18em]">KONTO</span>
                  </div>
                  <div className="h-9 w-px self-stretch bg-current" />
                  <div className="text-left text-[10px] font-black uppercase leading-tight">
                    <div>Svensk</div>
                    <div>Insamlings</div>
                    <div>Kontroll</div>
                  </div>
                </div>
                <div className="flex flex-col text-center">
                  <span className="text-[15px] font-black leading-tight">tryggt</span>
                  <span className="text-[15px] font-black leading-tight">givande</span>
                  <span className="mt-1 text-[9px] font-bold lowercase leading-tight">
                    givasverige
                  </span>
                </div>
              </div>
            </div>

            <FooterColumn title="Kontakt" delay="0.2s">
              <FooterLink href="https://mentor.se/om-oss">Om oss</FooterLink>
              <FooterLink href="https://mentor.se/kontakt">Kontakta oss</FooterLink>
              <li className="pt-3 text-base font-medium">
                <p>Kåkbrinken 11A</p>
                <p>111 27 Stockholm</p>
              </li>
              <li className="text-base font-medium">
                <a href="mailto:info@mentor.se" className={footerLinkClass}>
                  info@mentor.se
                </a>
              </li>
              <li className="text-base font-medium">
                <a href="tel:+46877891180" className={footerLinkClass}>
                  08-789 11 80
                </a>
              </li>
            </FooterColumn>

            <FooterColumn title="Länkar" delay="0.3s">
              <FooterLink href="https://mentor.se/stod-oss">Stöd oss</FooterLink>
              <FooterLink href="https://mentor.se/fragor-och-svar">Frågor och svar</FooterLink>
              <FooterLink href="https://mentor.se/om-oss/karriar/">Karriär</FooterLink>
              <FooterLink href="https://mentor.se/cookiepolicy">Cookiepolicy</FooterLink>
              <FooterLink href="#cookie-settings">Cookieinställningar</FooterLink>
            </FooterColumn>

            <div className="animate-stagger-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="mb-5 text-xl font-black">Nyhetsbrev</h3>
              <p className="mb-1 text-base font-medium">
                Få våra senaste nyheter, direkt i din inkorg:
              </p>
              <a
                href="https://mentor.us19.list-manage.com/subscribe?u=f6a30b1163225c3e796b9cfd0&id=a3b9aa6699"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-base font-bold underline ${footerLinkClass}`}
              >
                Prenumerera här!
              </a>
              <p className="mt-6 text-base font-medium">
                Läs hur Mentor Sverige behandlar personuppgifter i vår{' '}
                <a
                  href="https://mentor.se/om-oss/integritetspolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold underline ${footerLinkClass}`}
                >
                  integritetspolicy
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 text-base font-medium sm:flex-row sm:items-center">
            <p>&copy; {new Date().getFullYear()} Mentor</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <a
                href="https://www.instagram.com/mentorsverige/"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold ${footerLinkClass}`}
              >
                Instagram
              </a>
              <span aria-hidden>/</span>
              <a
                href="https://www.youtube.com/channel/UCxY9S7uJI6C-pPbBNQkrp0Q"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold ${footerLinkClass}`}
              >
                YouTube
              </a>
              <span aria-hidden>/</span>
              <a
                href="https://www.linkedin.com/company/mentor-sverige/"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold ${footerLinkClass}`}
              >
                LinkedIn
              </a>
              <span aria-hidden>/</span>
              <a
                href="https://www.facebook.com/mentorsverige"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold ${footerLinkClass}`}
              >
                Facebook
              </a>
              <span aria-hidden>/</span>
              <a
                href="https://www.tiktok.com/@mentorsverige"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold ${footerLinkClass}`}
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  delay,
  children,
}: {
  title: string
  delay: string
  children: React.ReactNode
}) {
  return (
    <div className="animate-stagger-up" style={{ animationDelay: delay }}>
      <h3 className="mb-5 text-xl font-black">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className={`text-base font-medium ${footerLinkClass}`}>
        {children}
      </a>
    </li>
  )
}
