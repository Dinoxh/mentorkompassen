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

export type HelpText = {
  intro: string
  bullets: string[]
  outro: string
}

export type PropertySelectionPageData = {
  title: string
  subtitle: string
  description?: string
  iconSrc: string
  iconAlt: string
  propertyGroups: PropertyGroup[]
  columns?: 1 | 2 | 3
  theme: PropertySelectionTheme
  maxSelections?: number
  missingPropertiesHint?: string
  helpText?: HelpText
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
  subHeader?: string
  question: string
  personalInfo?: boolean
  previousPageId?: string
  previousButtonLabel?: string
  nextPageId?: string
  nextButtonLabel?: string
  illustrationSrc?: string
  illustrationAlt?: string
  showCompass?: boolean
  showCopyPrompt?: boolean
  principles?: Principle[]
  propertySelection?: PropertySelectionPageData
}

export const compassSections: CompassSection[] = [
  {
    id: 'strengths',
    title: 'Vad du är bra på',
    subtitle: 'Dina styrkor och egenskaper',
    iconSrc: strengthsIcon,
    iconAlt: 'Ikon för vad du är bra på',
    sourcePageId: 'strengths',
    backgroundColor: '#00B469',
    activeBackgroundColor: '#008C48',
  },
  {
    id: 'love',
    title: 'Vad du älskar',
    subtitle: 'Det som känns viktigt eller roligt för dig',
    iconSrc: loveIcon,
    iconAlt: 'Ikon för vad du älskar',
    sourcePageId: 'love',
    backgroundColor: '#FFBC8C',
    activeBackgroundColor: '#FEA45B',
  },
  {
    id: 'work',
    title: 'Vad du kan få betalt för',
    subtitle: 'Yrken och vägar som kan passa dig',
    iconSrc: workIcon,
    iconAlt: 'Ikon för vad du kan få betalt för',
    sourcePageId: 'work',
    backgroundColor: '#FFFF5C',
    activeBackgroundColor: '#FFEB64',
  },
  {
    id: 'world',
    title: 'Vad världen behöver',
    subtitle: 'Det du tycker känns viktigt',
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
    subHeader: 'Upptäck vad som passar dig',
    question:
      'I Mentorkompassen får du utforska vad du gillar, vad du är bra på, vad du tycker är viktigt och vilka yrken eller vägar som kan passa dig.\n\nDet finns inga rätt eller fel svar. Välj det som känns mest som du just nu. Du kan alltid tänka om senare.\n\nDu behöver inte bestämma hela framtiden nu. Börja med att upptäcka vad som känns intressant, viktigt och möjligt för dig.\n\nNär du är klar får du en egen kompass som kan hjälpa dig att upptäcka nya möjligheter och börja forma dina framtidsplaner.',
    nextPageId: 'personal-info',
    nextButtonLabel: 'Starta kompassen',
  },
  {
    id: 'personal-info',
    header: 'Om dig',
    question: 'Berätta lite om dig själv så att vi kan ge dig bättre förslag.',
    personalInfo: true,
    previousPageId: 'intro',
    previousButtonLabel: 'Tillbaka',
    nextPageId: 'info',
    nextButtonLabel: 'Nästa',
  },
  {
    id: 'info',
    header: 'Fyra delar som hjälper dig att upptäcka vad som passar dig',
    question:
      'Mentorkompassen består av fyra delar. Tillsammans hjälper de dig att se mönster i vad du gillar, vad du är bra på och vilka vägar som kan vara intressanta att utforska.',
    previousPageId: 'personal-info',
    previousButtonLabel: 'Tillbaka',
    nextPageId: 'strengths',
    nextButtonLabel: 'Nästa',
    illustrationSrc: '',
    illustrationAlt: '',
    principles: [
      {
        title: 'Vad du är bra på',
        description:
          'Dina styrkor och egenskaper. Det kan till exempel handla om att du är kreativ, omtänksam, noggrann, modig, driven eller bra på att lösa problem.',
        iconSrc: strengthsIcon,
        iconAlt: 'Ikon för vad du är bra på',
      },
      {
        title: 'Vad du älskar',
        description:
          'Det du tycker om, får energi av eller vill ha mer av i livet. Det kan vara att skapa, hjälpa andra, bestämma själv, vara med andra eller lära dig nya saker.',
        iconSrc: loveIcon,
        iconAlt: 'Ikon för vad du älskar',
      },
      {
        title: 'Vad du kan få betalt för',
        description:
          'Yrken och områden som kan passa dig. Du behöver inte veta exakt vad du vill bli. Välj sådant som låter spännande, intressant eller värt att veta mer om.',
        iconSrc: workIcon,
        iconAlt: 'Ikon för vad du kan få betalt för',
      },
      {
        title: 'Vad världen behöver',
        description:
          'Det du tycker känns viktigt. Det kan handla om att hjälpa människor, skapa nya idéer, lösa problem, göra saker mer rättvisa eller bidra till en bättre framtid.',
        iconSrc: worldIcon,
        iconAlt: 'Ikon för vad världen behöver',
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
      subtitle: 'Dina styrkor och egenskaper',
      description:
        'Välj fem ord som du tycker passar in på dig.\n\nTänk på hur du är i skolan, hemma, med kompisar eller när du gör något du gillar. Det kan vara saker du själv märker, eller sådant andra brukar säga att du är bra på.\n\nDu behöver inte välja perfekt. Välj det som känns mest som du just nu.',
      helpText: {
        intro:
          'Ibland är det svårt att se sina egna styrkor. Tänk på hur du är i skolan, hemma, med kompisar eller när du gör något du gillar.',
        bullets: [
          'Vad brukar andra säga att jag är bra på?',
          'Vad brukar jag hjälpa andra med?',
          'När känner jag mig trygg eller säker?',
          'Vad gör jag ofta utan att tänka på det?',
          'Vilka egenskaper hjälper mig när något blir svårt?',
        ],
        outro: 'Välj de ord som känns mest som du just nu.',
      },
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
    nextPageId: 'work',
    nextButtonLabel: 'Nästa',
    propertySelection: {
      title: 'Vad du älskar',
      subtitle: 'Det som känns viktigt eller roligt för dig',
      description:
        'Välj fem saker som du gillar, bryr dig om eller vill ha mer av i ditt liv.\n\nDet kan vara sådant som gör dig glad, nyfiken, stolt eller motiverad. Det kan också vara saker du önskar att du fick göra oftare.\n\nHär behöver du inte tänka på jobb, skola eller vad andra tycker. Välj det som känns viktigt för dig.',
      helpText: {
        intro:
          'Du behöver inte välja det du älskar mest i hela världen. Välj sådant som känns roligt, viktigt eller intressant för dig.',
        bullets: [
          'Vad tycker jag om att göra?',
          'Vad gör mig glad, nyfiken eller motiverad?',
          'Vad vill jag ha mer av i mitt liv?',
          'När känns tiden som att den går snabbt?',
          'Vad skulle jag vilja testa mer av?',
        ],
        outro: 'Välj det som känns mest rätt just nu.',
      },
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
  {
    id: 'work',
    header: 'Vad du kan få betalt för',
    question: 'Din drömarbetsplats',
    previousPageId: 'love',
    previousButtonLabel: 'Tillbaka',
    nextPageId: 'world',
    nextButtonLabel: 'Nästa',
    propertySelection: {
      title: 'Vad du kan få betalt för',
      subtitle: 'Yrken och vägar som kan passa dig',
      description:
        'Välj fem yrken eller områden som låter intressanta.\n\nDu behöver inte veta exakt vad jobbet innebär eller om du vill jobba med det i framtiden. Välj sådant som gör dig nyfiken eller som du skulle vilja veta mer om.\n\nDet här handlar inte om att bestämma vad du ska bli. Det handlar om att upptäcka möjligheter.',
      helpText: {
        intro:
          'Du behöver inte veta vad du vill jobba med i framtiden.\nHär handlar det bara om att välja yrken eller områden som gör dig nyfiken.',
        bullets: [
          'Vilket yrke vill jag veta mer om?',
          'Vilket jobb verkar spännande?',
          'Vilket område skulle jag kunna tänka mig att testa?',
          'Finns det något här som passar det jag gillar?',
          'Finns det något här som passar det jag är bra på?',
        ],
        outro: 'Det här är inte ett val för hela livet. Det är bara något att utforska vidare.',
      },
      iconSrc: workIcon,
      iconAlt: 'Ikon för vad du kan få betalt för',
      columns: 3,
      theme: {
        backgroundColor: '#FFFF5C',
        activeBackgroundColor: '#FFEB64',
      },
      maxSelections: 5,
      propertyGroups: [
        {
          title: 'Administration, ekonomi & juridik',
          properties: [
            'Administratör',
            'Advokat',
            'Banktjänsteman',
            'Bibliotekarie',
            'Ekonom',
            'Entreprenör',
            'Eventkoordinator',
            'Fastighetsförvaltare',
            'Inköpare',
            'Jurist',
            'Projektledare',
            'Utredare',
          ],
        },
        {
          title: 'Bygg & anläggning',
          properties: [
            'Asfaltsläggare',
            'Bergarbetare',
            'Betongarbetare',
            'Byggingenjör',
            'Golvläggare',
            'Industrirörmontör',
            'Inredningssnickare',
            'Maskinförare',
            'Murare',
            'Målare',
            'Plattsättare',
            'Snickare',
            'Ställningsbyggare',
          ],
        },
        {
          title: 'Data & IT',
          properties: [
            'Drifttekniker',
            'IT-arkitekt',
            'Programmerare',
            'Spelutvecklare',
            'Systemutvecklare',
            'Säkerhetsansvarig IT',
            'Testledare',
            'UX-designer',
          ],
        },
        {
          title: 'Fordon & transport',
          properties: [
            'Brevbärare',
            'Bussförare',
            'Fartygsbefäl',
            'Flygledare',
            'Fordonslackerare',
            'Lastbilsförare',
            'Lokförare',
            'Maskinmekaniker',
            'Pilot',
            'Trafikledare tåg',
          ],
        },
        {
          title: 'Försäljning, inköp & marknadsföring',
          properties: [
            'Butikschef',
            'Kundtjänstmedarbetare',
            'Marknadsförare',
            'Mäklare',
            'PR-ansvarig',
            'Säljare',
            'Turistinformatör',
          ],
        },
        {
          title: 'Hantverksyrken',
          properties: [
            'Bokbindare',
            'Båtbyggare',
            'Florist',
            'Glasmästare',
            'Möbelsnickare',
            'Skräddare',
            'Smed',
          ],
        },
        {
          title: 'Hotell, restaurang & resor',
          properties: [
            'Bagare',
            'Bartender',
            'Flygvärdinna',
            'Guide',
            'Hotellreceptionist',
            'Hovmästare',
            'Kock',
            'Konditor',
            'Servitör',
          ],
        },
        {
          title: 'Hälsa & sjukvård',
          properties: [
            'Ambulanssjukvårdare',
            'Apotekare',
            'Apotekstekniker',
            'Arbetsterapeut',
            'Barnmorska',
            'Fysioterapeut',
            'Logoped',
            'Läkare',
            'Optiker',
            'Personlig tränare',
            'Psykolog',
            'Receptarie',
            'Sjuksköterska',
            'Tandhygienist',
            'Tandläkare',
            'Undersköterska',
          ],
        },
        {
          title: 'Industri',
          properties: [
            'CNC-operatör',
            'Gruvarbetare',
            'Slaktare/styckare',
            'Svetsare',
            'Verkstadssnickare',
            'Verktygsmakare',
          ],
        },
        {
          title: 'Installation, drift & underhåll',
          properties: [
            'Automationstekniker',
            'Elektriker',
            'Fastighetsvård',
            'Fordonsmontör',
            'Kyl- & värmepumpstekniker',
            'Larm- & säkerhetstekniker',
            'Matros',
            'VVS-montör',
          ],
        },
        {
          title: 'Kropps- & skönhetsvård',
          properties: [
            'Frisör',
            'Hudterapeut',
            'Makeupartist',
            'Massör',
            'Nagelterapeut',
            'Tatuerare',
          ],
        },
        {
          title: 'Kultur, media & design',
          properties: [
            'Art director',
            'Copywriter',
            'Dansare',
            'Designer',
            'Fotograf',
            'Grafisk formgivare',
            'Informatör/Kommunikatör',
            'Inredningsarkitekt',
            'Journalist',
            'Ljudtekniker',
            'Musiker',
            'Skådespelare',
            'Social media manager',
            'Tolk',
            'Översättare',
          ],
        },
        {
          title: 'Naturbruk',
          properties: [
            'Agronom',
            'Djurskötare (lantbruk)',
            'Djurvårdare (djurpark)',
            'Hovslagare',
            'Hästskötare',
            'Jägmästare',
            'Landskapsarkitekt',
            'Lantbrukare',
            'Skogsmästare',
            'Trädgårdsmästare',
            'Veterinär',
          ],
        },
        {
          title: 'Naturvetenskapligt arbete',
          properties: [
            'Arkeolog',
            'Arbetsmiljöingenjör',
            'Biolog',
            'Biomedicinsk analytiker',
            'Fysiker',
            'Geolog/Geovetare',
            'Ingenjör',
            'Kemist',
            'Miljövårdsyrken',
          ],
        },
        {
          title: 'Pedagogiskt arbete',
          properties: [
            'Behandlingsassistent',
            'Fritidspedagog',
            'Förskollärare',
            'Lärare',
            'Rektor',
            'Specialpedagog',
            'Studie- & yrkesvägledare',
            'Trafiklärare',
          ],
        },
        {
          title: 'Sanering & renhållning',
          properties: ['Renhållningsarbetare', 'Sotare', 'Återvinningsarbetare'],
        },
        {
          title: 'Socialt arbete',
          properties: [
            'Barnskötare',
            'Fritidsledare',
            'Kurator',
            'Personlig assistent',
            'Präst/Religiös ledare',
            'Skötare psykiatrisk vård',
            'Socialsekreterare',
            'Socionom',
            'Socialpedagog',
          ],
        },
        {
          title: 'Säkerhet',
          properties: [
            'Brandingenjör',
            'Brandman',
            'Kriminalvårdare',
            'Polis',
            'Soldat',
            'SOS-operatör/Larmoperatör',
            'Tulltjänsteman',
            'Väktare',
          ],
        },
        {
          title: 'Tekniskt arbete',
          properties: [
            'Arkitekt',
            'Civilingenjör',
            'Fastighetsingenjör',
            'GIS-ingenjör',
            'Lantmätare',
            'Logistiker',
            'Maskiningenjör',
            'Produktionstekniker',
          ],
        },
      ],
    },
  },
  {
    id: 'world',
    header: 'Vad världen behöver',
    question: 'Framtidsspaning',
    previousPageId: 'work',
    previousButtonLabel: 'Tillbaka',
    nextPageId: 'compass-done',
    nextButtonLabel: 'Avsluta quiz',
    propertySelection: {
      title: 'Vad världen behöver',
      subtitle: 'Det du tycker känns viktigt',
      description:
        'Välj fem saker som du tycker att världen, människor eller samhället behöver mer av.\n\nDet kan handla om att hjälpa andra, skapa nytt, lösa problem, göra människor tryggare, förbättra miljön eller få fler att må bra.\n\nTänk på vad du skulle vilja vara med och påverka, stort eller smått.',
      helpText: {
        intro:
          'Tänk på vad du tycker känns viktigt i världen, i samhället eller för människor omkring dig.',
        bullets: [
          'Vad tycker jag att fler människor borde få?',
          'Vilka problem skulle jag vilja vara med och lösa?',
          'Vad gör mig engagerad?',
          'Hur skulle jag vilja hjälpa andra?',
          'Vad vill jag bidra till, stort eller smått?',
        ],
        outro: 'Välj det som känns viktigt för dig just nu.',
      },
      iconSrc: worldIcon,
      iconAlt: 'Ikon för vad världen behöver',
      columns: 2,
      theme: {
        backgroundColor: '#B882FF',
        activeBackgroundColor: '#8B3FE0',
      },
      maxSelections: 5,
      propertyGroups: [
        {
          properties: [
            'Uttrycka sig genom konst',
            'Se till att utbildningen är rättvis',
            'Skapa kläder',
            'Kommunicera väl',
            'Ta hand om utomhusmiljöer',
            'Se till att lokalsamhällen förbättras',
            'Ta foton',
            'Ta hand om sjuka eller äldre',
            'Stödja våra framtida generationer',
            'Erbjuda alla typer av tjänster',
            'Förmedla positiva nyheter',
            'Se till att vårt samhälle är rättvist för alla',
            'Inspirera genom musik',
          ],
        },
        {
          properties: [
            'Uppfinna ny teknik',
            'Dela berättelser',
            'Använda det vi redan har för att skapa nya saker',
            'Designa och skapa spel',
            'Inspirera andra',
            'Uppmuntra hälsosamt ätande',
            'Uppfinna nya saker',
            'Lära andra',
            'Ta hand om planeten/miljön',
            'Fatta beslut om samhället',
            'Laga teknik',
            'Ta hand om andra',
          ],
        },
      ],
    },
  },
  {
    id: 'compass-done',
    header: 'Din Mentorkompass är klar',
    question: '',
    showCompass: true,
    previousPageId: 'world',
    previousButtonLabel: 'Tillbaka',
    nextPageId: 'congrats',
    nextButtonLabel: 'Nästa',
  },
  {
    id: 'congrats',
    header: 'Mentorkompassen',
    question:
      'Grattis! Du är nu klar med att besvara alla frågor.\n\nDu har identifierat det som är viktigast för dig och är nu ett steg närmare att hitta en väg i livet som stämmer överens med dina passioner och styrkor.\n\nKom ihåg att din IKIGAI är en guide, inte en regelbok. Var inte rädd för att vara flexibel och anpassa dig när du lär dig mer om dig själv och vad du vill ha ut av livet. Fortsätt utforska och agera, så kommer du att hitta din plats i världen.\n\n Generera en prompt baserat på dina svar och dela den med en AI-chatbot för att få vägledning i ditt nästa steg!\n\n\n Annars kan du trycka på Ladda ned resultatet för att spara en sammanfattning av dina svar och reflektioner.',
    previousPageId: 'compass-done',
    previousButtonLabel: 'Tillbaka',
    showCompass: true,
    showCopyPrompt: true,
    illustrationSrc: '',
  },
]

export function getQuizPage(pageId: string) {
  return quizPages.find((page) => page.id === pageId)
}

export function getDefaultQuizPage() {
  return quizPages[0]
}
