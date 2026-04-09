import mentorPrinciplesPng from '@/features/quiz/assets/Mentor 4 principles.png'

type QuizBoxProps = {
  header: string
  question: string
  illustrationSrc?: string
  illustrationAlt?: string
  children?: React.ReactNode
}

function StylizedText({ text }: { text: string }) {
  const paragraphs = text.split('\n\n').filter((p) => p.trim())
  const firstLine = paragraphs[0] ?? ''
  const rest = paragraphs.slice(1)

  return (
    <div className="flex flex-col gap-5 px-2 md:px-6">
      {/* Headline with shimmer */}
      <h2
        className="animate-shimmer-text animate-text-reveal text-center text-3xl font-black tracking-tight md:text-4xl"
        style={{ animationDelay: '0.1s' }}
      >
        {firstLine}
      </h2>

      {/* Decorative divider */}
      <div
        className="animate-line-grow mx-auto h-[2px] w-24 origin-center rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--page-accent), transparent)',
          animationDelay: '0.4s',
        }}
      />

      {/* Body paragraphs with staggered reveal */}
      {rest.map((p, i) => {
        const trimmed = p.trim()
        const isCallToAction = trimmed.includes('Generera') || trimmed.includes('Annars')

        return (
          <p
            key={i}
            className={`animate-text-reveal text-center leading-relaxed ${
              isCallToAction
                ? 'animate-glow-pulse text-sm font-bold text-neutral-800 md:text-base'
                : 'text-sm font-medium text-neutral-600 md:text-base'
            }`}
            style={{ animationDelay: `${0.5 + i * 0.2}s` }}
          >
            {trimmed}
          </p>
        )
      })}
    </div>
  )
}

export function QuizBox({
  header,
  question,
  illustrationSrc = mentorPrinciplesPng,
  illustrationAlt = 'Mentor 4 principles',
  children,
}: QuizBoxProps) {
  const isFinalPage = !illustrationSrc

  return (
    <div className="quiz-card relative flex h-[720px] max-h-[calc(100vh-2rem)] w-full max-w-[760px] flex-col overflow-clip rounded-[56px] px-6 pb-8 pt-16 md:px-10 md:pb-10 md:pt-20">
      <h1 className="absolute left-1/2 top-5 -translate-x-1/2 text-2xl font-bold md:text-3xl">
        {header}
      </h1>

      <div className="quiz-scroll flex-1 overflow-x-hidden overflow-y-scroll pr-1">
        {illustrationSrc ? (
          <img
            src={illustrationSrc}
            alt={illustrationAlt}
            className="mx-auto mb-4 w-[62%] md:mb-5 md:w-[54%]"
          />
        ) : null}

        {isFinalPage ? (
          <StylizedText text={question} />
        ) : (
          <p className="whitespace-pre-line text-sm font-semibold leading-snug md:text-base">
            {question}
          </p>
        )}
      </div>

      {children ? <div className="mt-5 flex justify-center md:mt-6">{children}</div> : null}
    </div>
  )
}
