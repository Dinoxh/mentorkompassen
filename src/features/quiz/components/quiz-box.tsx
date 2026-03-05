type QuizBoxProps = {
  header: string
  question: string
  options: string[]
  onNext?: () => void
}

export function QuizBox({ header, question, onNext }: QuizBoxProps) {
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

      <div className="mt-6 flex justify-center md:mt-8">
        <button
          type="button"
          onClick={onNext}
          className="rounded-full bg-[#ffff5c] px-10 py-3 text-lg font-bold text-black shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition hover:brightness-95"
        >
          Nästa
        </button>
      </div>
    </div>
  )
}
