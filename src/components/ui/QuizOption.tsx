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
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Remove o foco do botão para evitar que o próximo botão fique pré-selecionado
    e.currentTarget.blur()
    onClick()
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'w-full p-5 text-left rounded-lg border-2',
        'bg-background/80 backdrop-blur-sm border-primary/20',
        'hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10',
        'active:scale-[0.98] transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        'text-base md:text-lg font-medium text-foreground',
        'group relative overflow-hidden',
        className
      )}
    >
      {/* Indicador visual de hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-center gap-3">
        {/* Círculo indicador */}
        <div className="w-5 h-5 rounded-full border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/20 transition-all flex-shrink-0" />
        
        <span className="flex-1">{text}</span>
        
        {/* Seta de continuação */}
        <svg 
          className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  )
}
