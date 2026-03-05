type QuizButtonProps = {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export function QuizButton({ label, onClick, type = 'button', className = '' }: QuizButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full bg-[#ffff5c] px-10 py-3 text-lg font-bold text-black shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition hover:brightness-95 ${className}`.trim()}
    >
      {label}
    </button>
  )
}
