import { useState } from 'react'
import { QuizButton } from '@/features/quiz/components/quiz-button'

function ClaudeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32.4286 81.1404L52.8708 69.6696L53.2129 68.6699L52.8708 68.1174H51.8711L48.4509 67.9069L36.7696 67.5912L26.6406 67.1702L16.8273 66.6441L14.3543 66.1179L12.0391 63.066L12.2758 61.5401L14.3543 60.1457L17.3272 60.4088L23.9045 60.8561L33.7704 61.5401L40.9265 61.961L51.5291 63.066H53.2129L53.4496 62.382L52.8708 61.961L52.4236 61.5401L42.2156 54.6208L31.1658 47.3069L25.3778 43.0974L22.247 40.9664L20.6685 38.9669L19.9844 34.5995L22.8258 31.4688L26.6406 31.7318L27.6141 31.9949L31.4815 34.9679L39.7426 41.361L50.5293 49.3064L52.1079 50.6218L52.7393 50.1746L52.8182 49.8588L52.1079 48.6749L46.2409 38.0723L39.9794 27.2856L37.1906 22.8131L36.4539 20.1295C36.1908 19.0245 36.0067 18.1037 36.0067 16.9724L39.2427 12.5788L41.0317 12L45.3464 12.5788L47.1618 14.1573L49.8453 20.2874L54.1863 29.9428L60.9214 43.0711L62.8946 46.9648L63.947 50.5692L64.3416 51.6742H65.0257V51.0428L65.5781 43.6499L66.6042 34.5732L67.604 22.892L67.946 19.6033L69.5771 15.657L72.8132 13.5259L75.3388 14.7361L77.4173 17.7091L77.1279 19.6296L75.8913 27.6539L73.4709 40.2297L71.8923 48.6486H72.8132L73.8655 47.5963L78.1276 41.9398L85.2837 32.9947L88.4408 29.443L92.1241 25.5229L94.4919 23.6549H98.9644L102.253 28.5484L100.78 33.5998L96.1757 39.4404L92.3608 44.3865L86.8885 51.7531L83.4684 57.6463L83.7841 58.1199L84.5996 58.041L96.9649 55.4101L103.647 54.1999L111.619 52.8318L115.223 54.5156L115.618 56.2257L114.197 59.7248L105.673 61.8295L95.6758 63.829L80.7848 67.3544L80.6007 67.486L80.8111 67.7491L87.52 68.3805L90.3877 68.5383H97.4122L110.488 69.5118L113.908 71.7743L115.96 74.5368L115.618 76.6415L110.356 79.3251L103.253 77.6413L86.6781 73.6949L80.9953 72.2742H80.206V72.7478L84.9417 77.3782L93.6237 85.2183L104.489 95.321L105.042 97.8204L103.647 99.7936L102.174 99.5831L92.6239 92.4007L88.9407 89.1647L80.6007 82.1401H80.0482V82.8768L81.9687 85.6919L92.1241 100.951L92.6502 105.634L91.9136 107.16L89.2827 108.081L86.3887 107.555L80.4428 99.2148L74.3128 89.8224L69.3667 81.4035L68.7616 81.7455L65.8412 113.185L64.4732 114.79L61.3161 116L58.6852 114L57.2908 110.764L58.6852 104.371L60.3689 96.0314L61.737 89.4015L62.9735 81.1667L63.7102 78.4306L63.6576 78.2464L63.0525 78.3253L56.8435 86.8495L47.3985 99.6094L39.9267 107.607L38.1377 108.318L35.0332 106.713L35.3226 103.845L37.059 101.293L47.3985 88.1386L53.6338 79.9828L57.6591 75.2735L57.6328 74.5894H57.396L29.9293 92.427L25.0358 93.0584L22.931 91.0853L23.1941 87.8492L24.1939 86.7969L32.4549 81.1141L32.4286 81.1404Z"
        fill="white"
      />
    </svg>
  )
}

function GeminiIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="gemini_mask"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="8"
        y="7"
        width="112"
        height="113"
      >
        <path
          d="M107.865 58.069C99.2354 54.3526 91.6882 49.2617 85.21 42.7899C78.7382 36.3181 73.6409 28.7644 69.9309 20.1353C68.5118 16.8326 67.36 13.4281 66.4818 9.94079C66.1955 8.8017 65.1773 7.99988 64 7.99988C62.8227 7.99988 61.8045 8.8017 61.5182 9.94079C60.64 13.4281 59.4945 16.8199 58.0691 20.1353C54.3527 28.7644 49.2618 36.3181 42.79 42.7899C36.3182 49.2553 28.7645 54.3526 20.1355 58.069C16.8327 59.4881 13.4282 60.6399 9.94091 61.5181C8.80182 61.8044 8 62.8226 8 63.9999C8 65.1771 8.80182 66.1953 9.94091 66.4817C13.4282 67.3599 16.82 68.5053 20.1355 69.9308C28.7645 73.6471 36.3118 78.7381 42.79 85.2099C49.2618 91.6817 54.3591 99.2353 58.0691 107.864C59.4945 111.174 60.64 114.572 61.5182 118.059C61.6569 118.612 61.9764 119.104 62.4259 119.455C62.8754 119.807 63.4293 119.999 64 120C65.1773 120 66.1955 119.198 66.4818 118.059C67.36 114.572 68.5055 111.18 69.9309 107.864C73.6473 99.2353 78.7382 91.6881 85.21 85.2099C91.6818 78.7381 99.2354 73.6408 107.865 69.9308C111.174 68.5053 114.572 67.3599 118.059 66.4817C118.613 66.3429 119.104 66.0235 119.456 65.574C119.807 65.1245 119.999 64.5705 120 63.9999C120 62.8226 119.198 61.8044 118.059 61.5181C114.572 60.6399 111.18 59.4944 107.865 58.069Z"
          fill="black"
        />
      </mask>
      <g mask="url(#gemini_mask)">
        <path
          d="M107.865 58.069C99.2354 54.3526 91.6882 49.2617 85.21 42.7899C78.7382 36.3181 73.6409 28.7644 69.9309 20.1353C68.5118 16.8326 67.36 13.4281 66.4818 9.94079C66.1955 8.8017 65.1773 7.99988 64 7.99988C62.8227 7.99988 61.8045 8.8017 61.5182 9.94079C60.64 13.4281 59.4945 16.8199 58.0691 20.1353C54.3527 28.7644 49.2618 36.3181 42.79 42.7899C36.3182 49.2553 28.7645 54.3526 20.1355 58.069C16.8327 59.4881 13.4282 60.6399 9.94091 61.5181C8.80182 61.8044 8 62.8226 8 63.9999C8 65.1771 8.80182 66.1953 9.94091 66.4817C13.4282 67.3599 16.82 68.5053 20.1355 69.9308C28.7645 73.6471 36.3118 78.7381 42.79 85.2099C49.2618 91.6817 54.3591 99.2353 58.0691 107.864C59.4945 111.174 60.64 114.572 61.5182 118.059C61.6569 118.612 61.9764 119.104 62.4259 119.455C62.8754 119.807 63.4293 119.999 64 120C65.1773 120 66.1955 119.198 66.4818 118.059C67.36 114.572 68.5055 111.18 69.9309 107.864C73.6473 99.2353 78.7382 91.6881 85.21 85.2099C91.6818 78.7381 99.2354 73.6408 107.865 69.9308C111.174 68.5053 114.572 67.3599 118.059 66.4817C118.613 66.3429 119.104 66.0235 119.456 65.574C119.807 65.1245 119.999 64.5705 120 63.9999C120 62.8226 119.198 61.8044 118.059 61.5181C114.572 60.6399 111.18 59.4944 107.865 58.069Z"
          fill="url(#gemini_gradient)"
        />
      </g>
      <defs>
        <linearGradient
          id="gemini_gradient"
          x1="64"
          y1="8"
          x2="64"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1C7DEB" />
          <stop offset="0.5" stopColor="#4D9EF6" />
          <stop offset="1" stopColor="#1DC4A9" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function ChatGPTIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M109.128 54.5666C110.018 51.9282 110.472 49.1658 110.472 46.3851C110.472 41.784 109.23 37.2659 106.874 33.2954C102.139 25.1636 93.3561 20.1432 83.8507 20.1432C81.9781 20.1432 80.1107 20.3383 78.2795 20.7253C75.8166 17.9874 72.7935 15.7957 69.4094 14.2947C66.0254 12.7938 62.3573 12.0177 58.647 12.0176H58.4804L58.4179 12.0179C46.9051 12.0179 36.6952 19.3479 33.1561 30.1539C29.4926 30.8943 26.0317 32.3983 23.005 34.5652C19.9783 36.7322 17.4557 39.5121 15.606 42.7189C13.2569 46.7133 12.019 51.2492 12.0176 55.8674C12.0185 62.3578 14.4602 68.617 18.87 73.4329C17.9799 76.0712 17.5259 78.8337 17.5255 81.6143C17.5259 86.2155 18.768 90.7335 21.1242 94.7041C23.9262 99.5176 28.2051 103.329 33.344 105.588C38.4828 107.847 44.2161 108.437 49.717 107.274C52.1802 110.012 55.2036 112.203 58.5879 113.704C61.9722 115.205 65.6405 115.982 69.3509 115.982H69.5176L69.5853 115.982C81.1043 115.982 91.3108 108.651 94.85 97.8354C98.5135 97.0947 101.974 95.5906 105.001 93.4236C108.028 91.2566 110.551 88.4768 112.4 85.2701C114.747 81.2791 115.983 76.747 115.982 72.1331C115.981 65.6428 113.539 59.3838 109.129 54.568L109.128 54.5666ZM69.5242 109.185H69.497C64.8877 109.184 60.4248 107.588 56.8843 104.676C57.0945 104.564 57.3023 104.448 57.5074 104.328L78.487 92.3706C79.0106 92.0766 79.4459 91.651 79.7488 91.1372C80.0517 90.6234 80.2113 90.0396 80.2115 89.4452V60.2418L89.0791 65.2939C89.1256 65.3168 89.1657 65.3506 89.1958 65.3925C89.2259 65.4343 89.2451 65.4829 89.2516 65.5338V89.7018C89.2394 100.447 80.4149 109.163 69.5242 109.185ZM27.0997 91.3068C25.3668 88.3503 24.4538 84.9956 24.4526 81.5802C24.4526 80.4663 24.5512 79.3495 24.7432 78.2519C24.8992 78.3441 25.1714 78.5081 25.3667 78.6188L46.3463 90.5758C46.8693 90.8771 47.4641 91.0358 48.0698 91.0357C48.6755 91.0355 49.2702 90.8766 49.7931 90.5751L75.407 75.9823V86.0867L75.4073 86.1041C75.4073 86.1528 75.3959 86.2008 75.3738 86.2443C75.3518 86.2878 75.3198 86.3257 75.2804 86.355L54.072 98.4371C51.0711 100.141 47.6696 101.039 44.2072 101.04C40.7412 101.039 37.3361 100.14 34.3335 98.4311C31.3309 96.7227 28.8363 94.2654 27.0997 91.3057V91.3068ZM21.5804 46.1162C23.8846 42.1672 27.5229 39.1435 31.8586 37.5743C31.8586 37.7525 31.8483 38.0683 31.8483 38.2875V62.2018L31.848 62.2214C31.8481 62.8152 32.0074 63.3984 32.3099 63.9118C32.6123 64.4251 33.047 64.8504 33.5699 65.1443L59.1837 79.7349L50.3166 84.787C50.2728 84.8154 50.2226 84.8328 50.1705 84.8374C50.1183 84.8421 50.0657 84.834 50.0175 84.8138L28.8069 72.7215C25.8085 71.0076 23.3192 68.5462 21.5886 65.5841C19.8581 62.6219 18.9469 59.2629 18.9465 55.8438C18.9479 52.4301 19.8564 49.0764 21.5815 46.1173L21.5804 46.1162ZM94.4362 62.8446L68.8223 48.2522L77.6899 43.202C77.7336 43.1735 77.7838 43.1561 77.836 43.1514C77.8882 43.1468 77.9407 43.1549 77.9889 43.1751L99.1992 55.2573C102.2 56.9685 104.692 59.4285 106.425 62.3904C108.157 65.3523 109.07 68.7118 109.071 72.1317C109.071 80.2943 103.908 87.5981 96.1467 90.4172V65.7879C96.1478 65.7788 96.1478 65.7693 96.1478 65.7603C96.1476 65.1687 95.9893 64.5876 95.6888 64.0757C95.3882 63.5637 94.9562 63.1391 94.4362 62.8446ZM103.262 49.7378C103.056 49.6131 102.848 49.4909 102.639 49.3712L81.6594 37.4139C81.1363 37.1131 80.5418 36.9546 79.9364 36.9543C79.331 36.9546 78.7364 37.1131 78.2133 37.4139L52.5991 52.0066V41.9022L52.5988 41.8848C52.5988 41.7861 52.6462 41.6931 52.726 41.634L73.9344 29.5619C76.9343 27.8555 80.3361 26.9572 83.7989 26.957C94.7036 26.957 103.547 35.6825 103.547 46.4421C103.546 47.5463 103.451 48.6484 103.262 49.7367V49.7378ZM47.778 67.7471L38.9086 62.6951C38.8621 62.6722 38.822 62.6383 38.7919 62.5964C38.7618 62.5546 38.7426 62.5061 38.7361 62.4552V38.2868C38.7409 27.533 47.5841 18.8147 58.4841 18.8147C63.1005 18.8157 67.571 20.4114 71.1196 23.3249C70.9599 23.4109 70.6815 23.5626 70.4964 23.6733L49.5168 35.6303C48.9934 35.9241 48.5581 36.3495 48.2553 36.8631C47.9524 37.3768 47.7928 37.9604 47.7927 38.5546V38.5739L47.778 67.7471ZM52.5951 57.4997L64.003 50.9983L75.411 57.4953V70.4936L64.003 76.991L52.5951 70.4936V57.4997Z"
        fill="black"
      />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3v13m0 0l-5-5m5 5l5-5M4 20h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RestartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 12a7.5 7.5 0 0113.07-5.05L20 9.5M19.5 12a7.5 7.5 0 01-13.07 5.05L4 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 4v5.5h-5.5M4 20v-5.5h5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const aiServices = [
  { name: 'Claude', icon: ClaudeIcon, url: 'https://claude.ai', bg: '#D97757' },
  { name: 'Gemini', icon: GeminiIcon, url: 'https://gemini.google.com', bg: '#FFFFFF' },
  { name: 'ChatGPT', icon: ChatGPTIcon, url: 'https://chat.openai.com', bg: '#FFFFFF' },
] as const

type FinalPageProps = {
  onCopyPrompt: () => void
  onDownloadImage: () => void
  onRestart: () => void
  onBack?: () => void
  copied: boolean
  nextStep: string
  onNextStepChange: (value: string) => void
}

const mentorshipBullets = [
  'hur ett yrke är på riktigt',
  'vilka ämnen eller utbildningar som kan vara bra',
  'vad du kan göra redan nu om du är nyfiken',
]

const syvBullets = [
  'Vilka program eller utbildningar passar mina intressen?',
  'Vad behöver jag plugga för de yrken jag är nyfiken på?',
  'Vilka val håller flest dörrar öppna?',
]

const aiBullets = [
  'yrken som kan passa dina svar',
  'ämnen eller utbildningar att titta närmare på',
  'frågor att ta med till SYV eller mentor',
]

const nextStepExamples = [
  'Jag vill ta reda på mer om programmerare.',
  'Jag vill fråga SYV vilket gymnasieprogram som passar om jag gillar teknik.',
  'Jag vill träffa en mentor som jobbar med juridik.',
  'Jag vill veta vilka ämnen jag behöver plugga om jag vill jobba med människor.',
  'Jag vill läsa mer om hur man blir designer.',
  'Jag vill prata med någon som jobbar med att hjälpa andra.',
]

function AccordionSection({
  title,
  isOpen,
  onToggle,
  children,
  delay = 0,
}: {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
  delay?: number
}) {
  return (
    <div className="animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between rounded-2xl border border-black/10 bg-white/60 px-5 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:bg-white/80"
      >
        <span className="text-sm font-bold text-neutral-800 md:text-base">{title}</span>
        <span
          className="text-lg text-neutral-400 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ▾
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: isOpen ? 600 : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-5 pb-4 pt-3">{children}</div>
      </div>
    </div>
  )
}

function BulletList({ items, label }: { items: string[]; label: string }) {
  return (
    <>
      <p className="mb-2 text-sm font-bold text-neutral-700">{label}</p>
      <ul className="space-y-1.5 pl-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--page-accent)]" />
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export function FinalPage({
  onCopyPrompt,
  onDownloadImage,
  onRestart,
  onBack,
  copied,
  nextStep,
  onNextStepChange,
}: FinalPageProps) {
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState(false)
  const [saved, setSaved] = useState(false)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const handleSaveStep = () => {
    if (nextStep.trim()) {
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    }
  }

  return (
    <div className="quiz-card relative flex h-[720px] max-h-[calc(100vh-2rem)] w-full max-w-[760px] flex-col overflow-clip rounded-[56px] px-6 pb-8 pt-10 md:px-10 md:pb-10 md:pt-12">
      <div className="quiz-scroll flex-1 overflow-x-hidden overflow-y-scroll pr-1">
        <div className="mb-6 text-center">
          <h1
            className="animate-shimmer-text animate-text-reveal text-2xl font-black tracking-tight md:text-3xl"
            style={{ animationDelay: '0.1s' }}
          >
            Vad vill du göra nu?
          </h1>
          <p
            className="animate-fade-in mt-2 text-sm font-medium text-neutral-600 md:text-base"
            style={{ animationDelay: '0.3s' }}
          >
            Din Mentorkompass är en startpunkt. Välj ett nästa steg som känns mest intressant för
            dig.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <AccordionSection
            title="Jag är nyfiken på mentorskap"
            isOpen={openSection === 'mentorship'}
            onToggle={() => toggleSection('mentorship')}
            delay={0.4}
          >
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              Vill du veta hur det är att prata med någon som jobbar med ett yrke eller område du är
              nyfiken på?
            </p>
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              Genom mentorskap kan du få höra hur ett jobb fungerar i verkligheten, vilka vägar som
              kan leda dit och vad du kan testa redan nu.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-neutral-600">
              Det kan till exempel vara någon som jobbar som programmerare, jurist, ingenjör,
              ekonom, sjuksköterska, designer, polis, kommunikatör eller entreprenör.
            </p>
            <BulletList items={mentorshipBullets} label="Mentorskap kan hjälpa dig att förstå:" />
            <div className="mt-4">
              <a href="https://mentor.se/ungdom/" target="_blank" rel="noopener noreferrer">
                <QuizButton label="Jag är nyfiken på mentorskap" />
              </a>
            </div>
          </AccordionSection>

          <AccordionSection
            title="Jag vill prata med SYV"
            isOpen={openSection === 'syv'}
            onToggle={() => toggleSection('syv')}
            delay={0.5}
          >
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              SYV betyder studie- och yrkesvägledare. SYV kan hjälpa dig att förstå vilka
              gymnasieprogram, kurser och utbildningsvägar som passar det du är intresserad av.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-neutral-600">
              Du kan ta med din Mentorkompass som underlag för samtalet.
            </p>
            <BulletList items={syvBullets} label="Frågor du kan ta med till SYV:" />
            <p className="mt-4 text-m font-bold text-neutral-700">
              Ta med ditt resultat till mötet med din SYV
            </p>
          </AccordionSection>

          <AccordionSection
            title="Jag vill få tips med AI"
            isOpen={openSection === 'ai'}
            onToggle={() => toggleSection('ai')}
            delay={0.6}
          >
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              Du kan använda dina svar för att få fler idéer med hjälp av AI.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-neutral-600">
              AI kan hjälpa dig att se mönster i dina svar och ge förslag på yrken, skolämnen,
              utbildningar eller saker att utforska vidare.
            </p>
            <BulletList items={aiBullets} label="AI kan hjälpa dig med:" />
            <div className="mt-4 flex flex-wrap items-center gap-4">
              {aiServices.map(({ name, icon: Icon, url, bg }) => (
                <button
                  key={name}
                  type="button"
                  aria-label={`Kopiera prompt och öppna ${name}`}
                  onClick={() => {
                    onCopyPrompt()
                    window.open(url, '_blank', 'noopener,noreferrer')
                  }}
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-black/10 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-sm"
                  style={{ backgroundColor: bg }}
                >
                  <Icon className="h-7 w-7" />
                </button>
              ))}
            </div>
            {copied && (
              <p className="mt-2 text-xs font-semibold text-[var(--page-accent-active)]">
                Prompt kopierad!
              </p>
            )}
          </AccordionSection>

          <AccordionSection
            title="Jag vill välja ett eget nästa steg"
            isOpen={openSection === 'custom'}
            onToggle={() => toggleSection('custom')}
            delay={0.7}
          >
            <p className="mb-3 text-sm leading-relaxed text-neutral-600">
              Du kan också välja något litet att göra själv. Det kan vara att läsa mer om ett yrke,
              prata med någon hemma, fråga en lärare, söka efter en utbildning eller testa något
              praktiskt.
            </p>
            <label
              htmlFor="next-step"
              className={`mb-2 block text-sm font-bold transition-colors duration-200 ${
                focusedField ? 'text-[var(--page-accent-active)]' : 'text-neutral-700'
              }`}
            >
              Mitt nästa steg är:
            </label>
            <textarea
              id="next-step"
              placeholder="T.ex. Jag vill ta reda på mer om programmerare."
              value={nextStep}
              onChange={(e) => onNextStepChange(e.target.value)}
              onFocus={() => setFocusedField(true)}
              onBlur={() => setFocusedField(false)}
              rows={3}
              className="w-full resize-none rounded-2xl border-2 border-neutral-200 bg-white/80 px-5 py-4 text-sm font-semibold text-neutral-800 shadow-sm outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-neutral-400 focus:border-[var(--page-accent)] focus:shadow-[0_0_0_4px_var(--page-accent-glow)]"
            />
            <div className="mt-2">
              <p className="mb-2 text-xs font-semibold text-neutral-500">Exempel:</p>
              <ul className="space-y-1">
                {nextStepExamples.map((example) => (
                  <li key={example} className="text-xs leading-relaxed text-neutral-400">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <QuizButton
                label={saved ? 'Sparat!' : 'Spara mitt nästa steg'}
                onClick={handleSaveStep}
              />
            </div>
          </AccordionSection>
        </div>

        <div
          className="animate-fade-in mt-6 rounded-3xl border border-dashed border-black/15 px-5 py-4 text-center"
          style={{ animationDelay: '0.8s' }}
        >
          <p className="text-sm font-medium text-neutral-500">
            Kom ihåg: du behöver inte veta exakt vad du vill bli. Det viktiga är att börja utforska
            vad som passar dig och vilka möjligheter som finns.
          </p>
        </div>

        <div
          className="animate-fade-in mt-6 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: '0.9s' }}
        >
          <QuizButton
            label="Ladda ned resultatet"
            onClick={onDownloadImage}
            icon={<DownloadIcon />}
          />
          <QuizButton label="Gör om kompassen" onClick={onRestart} icon={<RestartIcon />} />
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-3 md:mt-6">
        {onBack && <QuizButton label="Tillbaka" onClick={onBack} direction="back" />}
      </div>
    </div>
  )
}
