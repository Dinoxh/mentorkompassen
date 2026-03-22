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
  return `cursor-pointer rounded-full px-10 py-3 text-lg font-bold text-black shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-colors duration-150 bg-[var(--quiz-button-bg)] hover:bg-[var(--quiz-button-hover-bg)] ${className}`.trim()
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
