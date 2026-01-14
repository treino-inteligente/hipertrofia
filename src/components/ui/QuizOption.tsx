import { cn } from '@/lib/utils'

interface QuizOptionProps {
  text: string
  onClick: () => void
  className?: string
}

/**
 * Botão de opção do Quiz
 * 
 * Representa cada alternativa clicável nas perguntas do quiz
 * Design otimizado para mobile com área de toque grande
 */
export function QuizOption({ text, onClick, className }: QuizOptionProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full p-4 text-left rounded-lg border-2 border-gray-200',
        'hover:border-primary hover:bg-primary/5',
        'active:scale-98 transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        'text-base font-medium text-foreground',
        className
      )}
    >
      {text}
    </button>
  )
}
