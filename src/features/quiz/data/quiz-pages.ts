import strengthsIcon from '@/features/quiz/assets/principles/good.png'
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
  title?: string
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
  columns?: 1 | 2 | 3
  theme: PropertySelectionTheme
  maxSelections?: number
  missingPropertiesHint?: string
}

export type CompassSection = {
  id: string
  title: string
  subtitle: string
  iconSrc: string
  iconAlt: string
  sourcePageId: string
  backgroundColor: string
  activeBackgroundColor: string
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

export const compassSections: CompassSection[] = [
  {
    id: 'strengths',
    title: 'Vad du är bra på',
    subtitle: 'Dina personliga egenskaper',
    iconSrc: strengthsIcon,
    iconAlt: 'Ikon för vad du är bra på',
    sourcePageId: 'strengths',
    backgroundColor: '#00B469',
    activeBackgroundColor: '#008C48',
  },
  {
    id: 'love',
    title: 'Vad du älskar',
    subtitle: 'Dina värderingar',
    iconSrc: loveIcon,
    iconAlt: 'Ikon för vad du älskar',
    sourcePageId: 'love',
    backgroundColor: '#FFBC8C',
    activeBackgroundColor: '#FEA45B',
  },
  {
    id: 'work',
    title: 'Vad du kan få betalt för',
    subtitle: 'Din drömarbetsplats',
    iconSrc: workIcon,
    iconAlt: 'Ikon för vad du kan få betalt för',
    sourcePageId: 'work',
    backgroundColor: '#FFFF5C',
    activeBackgroundColor: '#FFEB64',
  },
  {
    id: 'world',
    title: 'Vad världen behöver',
    subtitle: 'Framtidsspaning',
    iconSrc: worldIcon,
    iconAlt: 'Ikon för vad världen behöver',
    sourcePageId: 'world',
    backgroundColor: '#AF74FF',
    activeBackgroundColor: '#9850FE',
  },
]

export const quizPages: QuizPage[] = [
  {
    id: 'intro',
    header: 'Mentorkompassen',
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
    nextPageId: 'love',
    nextButtonLabel: 'Nästa',
    propertySelection: {
      title: 'Vad du är bra på',
      subtitle: 'Dina personliga egenskaper',
      iconSrc: strengthsIcon,
      iconAlt: 'Ikon för vad du är bra på',
      theme: {
        backgroundColor: '#00B469',
        activeBackgroundColor: '#008C48',
      },
      maxSelections: 5,
      propertyGroups: [
        {
          title: 'A',
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
          title: 'B',
          properties: ['Banbrytande', 'Behärskad', 'Beskyddande', 'Bestämd'],
        },
        {
          title: 'D',
          properties: ['Diplomatisk', 'Disciplinerad', 'Diskret', 'Driven', 'Dynamisk'],
        },
        {
          title: 'E',
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
          title: 'F',
          properties: ['Flexibel', 'Följsam', 'Försiktig'],
        },
        {
          title: 'G',
          properties: ['Genomtänkt', 'Glad'],
        },
        {
          title: 'I',
          properties: ['Impulsiv', 'Initiativtagande', 'Innovativ', 'Insiktsfull'],
        },
        {
          title: 'K',
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
          title: 'L',
          properties: ['Lojal', 'Lugn', 'Lyhörd', 'Lättsam'],
        },
        {
          title: 'M',
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
          title: 'N',
          properties: ['Noggrann', 'Nyfiken'],
        },
        {
          title: 'O',
          properties: ['Objektiv', 'Omsorgsfull', 'Organiserad'],
        },
        {
          title: 'P',
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
          title: 'R',
          properties: ['Rationell', 'Realistisk', 'Resultatinriktad', 'Rolig', 'Rörlig'],
        },
        {
          title: 'S',
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
          title: 'T',
          properties: ['Trovärdig', 'Taktisk', 'Tuff', 'Tålmodig'],
        },
        {
          title: 'U',
          properties: ['Uppriktig', 'Uppskattande', 'Uthållig', 'Utåtriktad'],
        },
        {
          title: 'V',
          properties: ['Vaksam', 'Vältränad'],
        },
        {
          title: 'Ä',
          properties: ['Äventyrlig'],
        },
        {
          title: 'Ö',
          properties: ['Ödmjuk', 'Öppen'],
        },
      ],
    },
  },
  {
    id: 'love',
    header: 'Vad du älskar',
    question: 'Dina värderingar',
    previousPageId: 'strengths',
    previousButtonLabel: 'Tillbaka',
    propertySelection: {
      title: 'Vad du älskar',
      subtitle: 'Dina värderingar',
      iconSrc: loveIcon,
      iconAlt: 'Ikon för vad du älskar',
      columns: 2,
      theme: {
        backgroundColor: '#FFBC8C',
        activeBackgroundColor: '#FEA45B',
      },
      maxSelections: 5,
      propertyGroups: [
        {
          properties: [
            'Att nå bra resultat.',
            'Att veta vad jag tycker.',
            'Att vara med om nya och spännande saker.',
            'Att få bestämma över mig själv.',
            'Att vara den som bestämmer.',
            'Att vara snygg.',
            'Att ta ansvar för andra.',
            'Att andra tycker att jag är snygg.',
            'Att bry mig om andra.',
            'Att engagera mig för något som är viktigt för mig.',
            'Att visa medkänsla med andra.',
            'Att andra kan lita på mig.',
            'Att göra något bra för världen.',
            'Att ta ansvar.',
            'Att visa respekt mot andra.',
            'Att leva i harmoni med natur och miljö.',
            'Att ha nya och egna idéer.',
            'Att vara en bra kompis.',
            'Att ha en lycklig och kärleksfull familj.',
            'Att alltid arbeta på att bli bättre.',
          ],
        },
        {
          properties: [
            'Att kunna förlåta.',
            'Att ha bra kompisar.',
            'Att kunna leka och ha roligt.',
            'Att ha många kompisar.',
            'Att ge till andra.',
            'Att vara frisk och må bra.',
            'Att vara ärlig och uppriktig.',
            'Att kunna skratta åt mina egna misstag.',
            'Att tänka positivt.',
            'Att vara nöjd med mig själv.',
            'Att inte ha förutfattade meningar.',
            'Att ha någon att dela mina hemligheter med.',
            'Att ha kul på min fritid.',
            'Att känna mig säker och trygg.',
            'Att vara populär.',
            'Att ha självkontroll.',
            'Att vara fysiskt stark.',
            'Att ha gott om pengar.',
            'Att följa traditioner.',
            'Att arbeta för fred i världen',
          ],
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
