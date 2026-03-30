/**
 * Per-page color themes for the quiz.
 * Each quiz section gets a distinct color aesthetic that tints
 * the lava lamp blobs, scrollbar, and accent elements.
 */

export type PageTheme = {
  accent: string
  accentActive: string
  accentGlow: string
  accentSoft: string
  lavaColors: [string, string, string]
}

const themes: Record<string, PageTheme> = {
  // Default / intro / info — Mentor green
  default: {
    accent: '#00B469',
    accentActive: '#008C48',
    accentGlow: 'rgba(0, 180, 105, 0.25)',
    accentSoft: 'rgba(0, 180, 105, 0.08)',
    lavaColors: [
      'rgba(0, 180, 105, 0.18)',
      'rgba(175, 116, 255, 0.12)',
      'rgba(255, 188, 140, 0.14)',
    ],
  },

  // Vad du ar bra pa — Green (strengths)
  strengths: {
    accent: '#00B469',
    accentActive: '#008C48',
    accentGlow: 'rgba(0, 180, 105, 0.3)',
    accentSoft: 'rgba(0, 180, 105, 0.1)',
    lavaColors: ['rgba(0, 180, 105, 0.22)', 'rgba(0, 140, 72, 0.15)', 'rgba(80, 220, 150, 0.12)'],
  },

  // Vad du alskar — Peach/orange (love)
  love: {
    accent: '#FFBC8C',
    accentActive: '#FEA45B',
    accentGlow: 'rgba(255, 188, 140, 0.35)',
    accentSoft: 'rgba(255, 188, 140, 0.12)',
    lavaColors: [
      'rgba(255, 188, 140, 0.22)',
      'rgba(254, 164, 91, 0.16)',
      'rgba(255, 140, 100, 0.14)',
    ],
  },

  // Vad du kan fa betalt for — Yellow (work)
  work: {
    accent: '#E8D44D',
    accentActive: '#D4C040',
    accentGlow: 'rgba(255, 255, 92, 0.3)',
    accentSoft: 'rgba(255, 255, 92, 0.1)',
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
    lavaColors: [
      'rgba(175, 116, 255, 0.22)',
      'rgba(152, 80, 254, 0.16)',
      'rgba(200, 150, 255, 0.14)',
    ],
  },
}

// Congrats page gets a celebratory mix
themes.congrats = {
  accent: '#00B469',
  accentActive: '#008C48',
  accentGlow: 'rgba(0, 180, 105, 0.25)',
  accentSoft: 'rgba(0, 180, 105, 0.08)',
  lavaColors: ['rgba(0, 180, 105, 0.16)', 'rgba(175, 116, 255, 0.14)', 'rgba(255, 188, 140, 0.14)'],
}

export function getPageTheme(pageId: string): PageTheme {
  return themes[pageId] ?? themes.default
}
