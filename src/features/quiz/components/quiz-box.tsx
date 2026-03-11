import mentorPrinciplesPng from '@/features/quiz/assets/Mentor 4 principles.png'

type QuizBoxProps = {
  header: string
  question: string
  illustrationSrc?: string
  illustrationAlt?: string
  children?: React.ReactNode
}

export function QuizBox({
  header,
  question,
  illustrationSrc = mentorPrinciplesPng,
  illustrationAlt = 'Mentor 4 principles',
  children,
}: QuizBoxProps) {
  return (
    <div className="relative flex h-[720px] max-h-[calc(100vh-2rem)] w-full max-w-[760px] flex-col overflow-hidden rounded-[56px] bg-white px-6 pb-8 pt-16 shadow-[0_12px_28px_rgba(0,0,0,0.12)] md:px-10 md:pb-10 md:pt-20">
      <h1 className="absolute left-1/2 top-5 -translate-x-1/2 text-2xl font-bold md:text-3xl">
        {header}
      </h1>

      <div className="flex-1 overflow-y-auto pr-1">
        {illustrationSrc ? (
          <img
            src={illustrationSrc}
            alt={illustrationAlt}
            className="mx-auto mb-4 w-[62%] md:mb-5 md:w-[54%]"
          />
        ) : null}

        <p className="whitespace-pre-line text-sm font-semibold leading-snug md:text-base">
          {question}
        </p>
      </div>

      {children ? <div className="mt-5 flex justify-center md:mt-6">{children}</div> : null}
    </div>
  )
}
