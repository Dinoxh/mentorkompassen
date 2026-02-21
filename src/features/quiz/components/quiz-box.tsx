type QuizBoxProps = {
  header: string
  question: string
  options: string[]
}

export function QuizBox({ header }: React.PropsWithChildren<QuizBoxProps>) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">{header}</h1>
    </div>
  )
}
