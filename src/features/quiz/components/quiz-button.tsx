import { getFilledQuizButtonProps } from '@/features/quiz/components/quiz-button-classes'

type QuizButtonProps = {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  direction?: 'forward' | 'back' | 'none'
}

function ArrowIcon({ direction }: { direction: 'forward' | 'back' }) {
  if (direction === 'back') {
    return (
      <svg
        width="92"
        height="14"
        viewBox="0 0 92 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M92 7H2.88M8.069 13L1.843 7l6.226-6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    )
  }
  return (
    <svg width="92" height="14" viewBox="0 0 92 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 7h89.12M83.931 1l6.226 6-6.226 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function QuizButton({
  label,
  onClick,
  type = 'button',
  className = '',
  direction = 'none',
}: QuizButtonProps) {
  const buttonProps = getFilledQuizButtonProps(
    {
      backgroundColor: '#FFFF5C',
      activeBackgroundColor: '#FFEB64',
    },
    className
  )

  if (direction === 'none') {
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

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${buttonProps.className} mentor-nav-button group relative overflow-hidden`}
      style={buttonProps.style}
    >
      <span
        className={`mentor-nav-button__label inline-block transition-transform duration-[450ms] ease-[cubic-bezier(0.46,0.7,0,1.1)] delay-[130ms] ${
          direction === 'back'
            ? 'group-hover:-translate-x-[200%]'
            : 'group-hover:translate-x-[200%]'
        }`}
      >
        {label}
      </span>
      <span
        className={`mentor-nav-button__icon absolute inset-0 flex items-center justify-center transition-transform duration-[450ms] ease-[cubic-bezier(0.46,0.7,0,1.1)] delay-[130ms] ${
          direction === 'back'
            ? 'translate-x-[200%] group-hover:translate-x-0'
            : '-translate-x-[200%] group-hover:translate-x-0'
        }`}
      >
        <ArrowIcon direction={direction} />
      </span>
    </button>
  )
}
