import { getFilledQuizButtonProps } from '@/features/quiz/components/quiz-button-classes'

type QuizButtonProps = {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export function QuizButton({ label, onClick, type = 'button', className = '' }: QuizButtonProps) {
  const buttonProps = getFilledQuizButtonProps(
    {
      backgroundColor: '#FFFF5C',
      activeBackgroundColor: '#FFEB64',
    },
    className
  )

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonProps.className}
      style={buttonProps.style}
    >
      {label}
    </button>
  )
}
