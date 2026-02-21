type QuizBoxProps = {
  header: string
  question: string
  options: string[]
}

export function QuizBox({ header, question }: React.PropsWithChildren<QuizBoxProps>) {
  return (
    <div className="relative max-w-[240px] max-h-[880px] rounded-[56px] bg-white px-60 py-40">
      <h1 className=" text-4xl absolute top-4 left-1/2 -translate-x-1/2  font-bold">{header}</h1>

      <h2 className="text-lg font-semibold ">{question}</h2>
    </div>
  )
}
