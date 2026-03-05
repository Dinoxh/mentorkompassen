import { QuizButton } from '@/features/quiz/components/quiz-button.tsx'
import { QuizBox } from '@/features/quiz/components/quiz-box.tsx'

export function App() {
  return (
    <main className="relative min-h-screen bg-[#EFEEE7] flex items-center justify-center px-4 py-8">
      <a className="mentor-brand" href="https://mentor.se" aria-label="Mentor startsida">
        <img src="/mentor-logo.svg" alt="Mentor" />
      </a>

      <div className="w-full max-w-[760px]">
        <QuizBox
          header="Mentor kompassen"
          question={
            'I Mentor Boost utgår vi från en modell som heter IKIGAI. IKIGAI är japanska och betyder ungefär; anledning att finnas till eller din drivkraft.\n\nHär skapar du din IKIGAI-kompass som ska hjälpa dig att sätta upp mål i ditt liv och när du behöver ta viktiga beslut om studier, jobb, fritid och relationer.'
          }
          options={[]}
        >
          <QuizButton label="Nästa" />
        </QuizBox>
      </div>
    </main>
  )
}
