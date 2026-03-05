type QuizBoxProps = {
  header: string
  question: string
  options: string[]
}

export function QuizBox({ header, question }: QuizBoxProps) {
  return (
    <div className="relative w-full max-w-[760px] rounded-[56px] bg-white px-6 pb-10 pt-20 shadow-[0_12px_28px_rgba(0,0,0,0.12)] md:px-12 md:pb-14 md:pt-24">
      <h1 className="absolute left-1/2 top-6 -translate-x-1/2 text-2xl font-bold md:text-4xl">
        {header}
      </h1>

      <div className="max-h-[56vh] overflow-y-auto pr-1 md:max-h-[60vh]">
        <p className="whitespace-pre-line text-base font-semibold leading-relaxed md:text-lg">
          {question}
        </p>
      </div>
    </div>
  )
}
