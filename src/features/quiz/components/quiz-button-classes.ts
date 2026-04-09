import type { CSSProperties } from 'react'

type QuizButtonPalette = {
  backgroundColor: string
  activeBackgroundColor: string
}

type QuizButtonStyle = CSSProperties & {
  '--quiz-button-bg'?: string
  '--quiz-button-hover-bg'?: string
}

export function getQuizButtonClassName(className = '') {
  return `animate-cta-pulse cursor-pointer rounded-full border-2 border-[#32373c] px-10 py-3 text-lg font-semibold text-[#32373c] transition-all duration-200 bg-[var(--quiz-button-bg)] hover:bg-[var(--quiz-button-hover-bg)] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${className}`.trim()
}

export function getFilledQuizButtonProps(
  palette: QuizButtonPalette,
  className = '',
  selected = false
) {
  const style: QuizButtonStyle = {
    '--quiz-button-bg': selected ? palette.activeBackgroundColor : palette.backgroundColor,
    '--quiz-button-hover-bg': palette.activeBackgroundColor,
  }

  return {
    className: getQuizButtonClassName(className),
    style,
  }
}
