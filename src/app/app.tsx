import { QuizBox } from '@/features/quiz/components/quiz-box.tsx'

export function App() {
  return (
    <main className="min-h-screen bg-[#EFEEE7] flex items-center justify-center">
      <QuizBox
        header="Mentor kompassen"
        question="What are you doing today?"
        options={[]}
      ></QuizBox>
    </main>
  )
}
