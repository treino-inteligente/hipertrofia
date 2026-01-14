import { cn } from '@/lib/utils'

interface ScreenContainerProps {
  children: React.ReactNode
  className?: string
}

/**
 * Container padrão para todas as telas do funil
 * 
 * Centraliza conteúdo e aplica padding consistente
 * Otimizado para mobile-first
 */
export function ScreenContainer({ children, className }: ScreenContainerProps) {
  return (
    <div className={cn(
      'min-h-screen w-full flex flex-col',
      'bg-background',
      className
    )}>
      <div className="flex-1 flex flex-col w-full max-w-2xl mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  )
}
