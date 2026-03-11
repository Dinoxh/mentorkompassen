import strengthsIcon from '@/features/quiz/assets/principles/strengths.png'
import loveIcon from '@/features/quiz/assets/principles/love.png'
import workIcon from '@/features/quiz/assets/principles/work.png'
import worldIcon from '@/features/quiz/assets/principles/world.png'

export type Principle = {
  title: string
  description: string
  iconSrc: string
  iconAlt: string
}

export type QuizPage = {
  id: string
  header: string
  question: string
  previousPageId?: string
  previousButtonLabel?: string
  nextPageId?: string
  nextButtonLabel?: string
  illustrationSrc?: string
  illustrationAlt?: string
  principles?: Principle[]
}

export const quizPages: QuizPage[] = [
  {
    id: 'intro',
    header: 'Mentor kompassen',
    question:
      'I Mentor Boost utgår vi från en modell som heter IKIGAI. IKIGAI är japanska och betyder ungefär; anledning att finnas till eller din drivkraft.\n\nHär skapar du din IKIGAI-kompass som ska hjälpa dig att sätta upp mål i ditt liv och när du behöver ta viktiga beslut om studier, jobb, fritid och relationer.',
    nextPageId: 'info',
    nextButtonLabel: 'Nästa',
  },
  {
    id: 'info',
    header: 'De fyra principerna',
    question: 'Här är IKIGAI-kompassens fyra delar och vad de står för.',
    previousPageId: 'intro',
    previousButtonLabel: 'Tillbaka',
    illustrationSrc: '',
    illustrationAlt: '',
    principles: [
      {
        title: 'Vad du är bra på',
        description: 'Dina personliga egenskaper',
        iconSrc: strengthsIcon,
        iconAlt: '',
      },
      {
        title: 'Vad du älskar',
        description: 'Dina värderingar',
        iconSrc: loveIcon,
        iconAlt: '',
      },
      {
        title: 'Vad du kan få betalt för',
        description: 'Din drömarbetsplats',
        iconSrc: workIcon,
        iconAlt: '',
      },
      {
        title: 'Vad världen behöver',
        description: 'Framtidsspaning',
        iconSrc: worldIcon,
        iconAlt: '',
      },
    ],
  },
]

export function getQuizPage(pageId: string) {
  return quizPages.find((page) => page.id === pageId)
}

export function getDefaultQuizPage() {
  return quizPages[0]
}
