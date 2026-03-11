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

export type PropertyGroup = {
  letter: string
  properties: string[]
}

export type PropertySelectionTheme = {
  backgroundColor: string
  activeBackgroundColor: string
}

export type PropertySelectionPageData = {
  title: string
  subtitle: string
  iconSrc: string
  iconAlt: string
  propertyGroups: PropertyGroup[]
  theme: PropertySelectionTheme
  maxSelections?: number
  missingPropertiesHint?: string
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
  propertySelection?: PropertySelectionPageData
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
    nextPageId: 'strengths',
    nextButtonLabel: 'Nästa',
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
  {
    id: 'strengths',
    header: 'Vad du är bra på',
    question: 'Dina personliga egenskaper',
    previousPageId: 'info',
    previousButtonLabel: 'Tillbaka',
    propertySelection: {
      title: 'Vad du är bra på',
      subtitle: 'Dina personliga egenskaper',
      iconSrc: strengthsIcon,
      iconAlt: 'Ikon för vad du är bra på',
      theme: {
        backgroundColor: '#00B469',
        activeBackgroundColor: '#00A55D',
      },
      maxSelections: 5,
      propertyGroups: [
        {
          letter: 'A',
          properties: [
            'Allvarlig',
            'Aktsam',
            'Alert',
            'Ambitiös',
            'Anpassningsbar',
            'Ansvarsfull',
            'Arbetsam',
          ],
        },
        {
          letter: 'B',
          properties: ['Banbrytande', 'Behärskad', 'Beskyddande', 'Bestämd'],
        },
        {
          letter: 'D',
          properties: ['Diplomatisk', 'Disciplinerad', 'Diskret', 'Driven', 'Dynamisk'],
        },
        {
          letter: 'E',
          properties: [
            'Effektiv',
            'Eftertänksam',
            'Ekonomisk',
            'Energisk',
            'Entusiastisk',
            'Envis',
            'Erfaren',
            'Expert',
          ],
        },
        {
          letter: 'F',
          properties: ['Flexibel', 'Följsam', 'Försiktig'],
        },
        {
          letter: 'G',
          properties: ['Genomtänkt', 'Glad'],
        },
        {
          letter: 'I',
          properties: ['Impulsiv', 'Initiativtagande', 'Innovativ', 'Insiktsfull'],
        },
        {
          letter: 'K',
          properties: [
            'Karismatisk',
            'Klarsynt',
            'Klok',
            'Kompetent',
            'Konsekvent',
            'Kreativ',
            'Kvicktänkt',
            'Känslig',
          ],
        },
        {
          letter: 'L',
          properties: ['Lojal', 'Lugn', 'Lyhörd', 'Lättsam'],
        },
        {
          letter: 'M',
          properties: [
            'Medmänsklig',
            'Metodisk',
            'Mjuk',
            'Modig',
            'Motiverad',
            'Målinriktad',
            'Mångsidig',
          ],
        },
        {
          letter: 'N',
          properties: ['Noggrann', 'Nyfiken'],
        },
        {
          letter: 'O',
          properties: ['Objektiv', 'Omsorgsfull', 'Organiserad'],
        },
        {
          letter: 'P',
          properties: [
            'Positiv',
            'Praktisk',
            'Pratsam',
            'Prestigelös',
            'Proffsig',
            'Punktlig',
            'Pålitlig',
          ],
        },
        {
          letter: 'R',
          properties: ['Rationell', 'Realistisk', 'Resultatinriktad', 'Rolig', 'Rörlig'],
        },
        {
          letter: 'S',
          properties: [
            'Saklig',
            'Samarbetsvillig',
            'Serviceminded',
            'Smart',
            'Snabb',
            'Självgående',
            'Självsäker',
            'Stark',
            'Strukturerad',
            'Stresstålig',
          ],
        },
        {
          letter: 'T',
          properties: ['Trovärdig', 'Taktisk', 'Tuff', 'Tålmodig'],
        },
        {
          letter: 'U',
          properties: ['Uppriktig', 'Uppskattande', 'Uthållig', 'Utåtriktad'],
        },
        {
          letter: 'V',
          properties: ['Vaksam', 'Vältränad'],
        },
        {
          letter: 'Ä',
          properties: ['Äventyrlig'],
        },
        {
          letter: 'Ö',
          properties: ['Ödmjuk', 'Öppen'],
        },
      ],
    },
  },
]

export function getQuizPage(pageId: string) {
  return quizPages.find((page) => page.id === pageId)
}

export function getDefaultQuizPage() {
  return quizPages[0]
}
