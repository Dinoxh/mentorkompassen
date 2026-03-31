/**
 * Per-page color themes for the quiz.
 * Each quiz section gets a distinct color aesthetic that tints
 * the lava lamp blobs, scrollbar, footer/header, and accent elements.
 *
 * Brand colors from Figma:
 *   Green 500: #00B469  /  600: #00A55D
 *   Apricot 200: #FFBC8C  /  300: #FEA45B
 *   Purple 300: #AF74FF  /  90: #9850FE
 *   Yellow 400: #FFFF5C  /  600: #FFEB64
 *   Grey: #EFEEE6  /  Black: #000000
 */

export type PageTheme = {
  accent: string
  accentActive: string
  accentGlow: string
  accentSoft: string
  /** Background color for footer and header logo tint */
  brandColor: string
  brandColorDark: string
  lavaColors: [string, string, string]
}

const themes: Record<string, PageTheme> = {
  // Default / intro / info — Mentor green
  default: {
    accent: '#00B469',
    accentActive: '#00A55D',
    accentGlow: 'rgba(0, 180, 105, 0.25)',
    accentSoft: 'rgba(0, 180, 105, 0.08)',
    brandColor: '#00B469',
    brandColorDark: '#00A55D',
    lavaColors: [
      'rgba(0, 180, 105, 0.18)',
      'rgba(175, 116, 255, 0.12)',
      'rgba(255, 188, 140, 0.14)',
    ],
  },

  // Vad du ar bra pa — Green (strengths)
  strengths: {
    accent: '#00B469',
    accentActive: '#00A55D',
    accentGlow: 'rgba(0, 180, 105, 0.3)',
    accentSoft: 'rgba(0, 180, 105, 0.1)',
    brandColor: '#00B469',
    brandColorDark: '#00A55D',
    lavaColors: ['rgba(0, 180, 105, 0.22)', 'rgba(0, 140, 72, 0.15)', 'rgba(80, 220, 150, 0.12)'],
  },

  // Vad du alskar — Peach/orange (love)
  love: {
    accent: '#FFBC8C',
    accentActive: '#FEA45B',
    accentGlow: 'rgba(255, 188, 140, 0.35)',
    accentSoft: 'rgba(255, 188, 140, 0.12)',
    brandColor: '#FFBC8C',
    brandColorDark: '#FEA45B',
    lavaColors: [
      'rgba(255, 188, 140, 0.22)',
      'rgba(254, 164, 91, 0.16)',
      'rgba(255, 140, 100, 0.14)',
    ],
  },

  // Vad du kan fa betalt for — Yellow (work)
  work: {
    accent: '#FFFF5C',
    accentActive: '#FFEB64',
    accentGlow: 'rgba(255, 255, 92, 0.3)',
    accentSoft: 'rgba(255, 255, 92, 0.1)',
    brandColor: '#FFFF5C',
    brandColorDark: '#FFEB64',
    lavaColors: [
      'rgba(255, 255, 92, 0.2)',
      'rgba(255, 235, 100, 0.18)',
      'rgba(232, 212, 77, 0.15)',
    ],
  },

  // Vad varlden behover — Purple (world)
  world: {
    accent: '#AF74FF',
    accentActive: '#9850FE',
    accentGlow: 'rgba(175, 116, 255, 0.3)',
    accentSoft: 'rgba(175, 116, 255, 0.1)',
    brandColor: '#AF74FF',
    brandColorDark: '#9850FE',
    lavaColors: [
      'rgba(175, 116, 255, 0.22)',
      'rgba(152, 80, 254, 0.16)',
      'rgba(200, 150, 255, 0.14)',
    ],
  },
}

// Congrats page — back to green
themes.congrats = {
  accent: '#00B469',
  accentActive: '#00A55D',
  accentGlow: 'rgba(0, 180, 105, 0.25)',
  accentSoft: 'rgba(0, 180, 105, 0.08)',
  brandColor: '#00B469',
  brandColorDark: '#00A55D',
  lavaColors: ['rgba(0, 180, 105, 0.16)', 'rgba(175, 116, 255, 0.14)', 'rgba(255, 188, 140, 0.14)'],
}

export function getPageTheme(pageId: string): PageTheme {
  return themes[pageId] ?? themes.default
}
