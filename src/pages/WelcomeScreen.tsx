import { useLocation } from 'wouter'
import { ScreenContainer } from '@/components/ui/ScreenContainer'
import { CTAButton } from '@/components/ui/CTAButton'
import { analytics } from '@/lib/analytics'
import { useEffect } from 'react'

/**
 * TELA 1 - ENTRADA / HOOK
 * 
 * Primeira tela do funil
 * Objetivo: Prender atenção e fazer usuário clicar em menos de 5 segundos
 */
export function WelcomeScreen() {
  const [, setLocation] = useLocation()

  useEffect(() => {
    analytics.trackPageView('welcome')
  }, [])

  const handleStart = () => {
    analytics.trackQuizStart()
    analytics.trackCTAClick('welcome_screen')
    setLocation('/quiz/1')
  }

  return (
    <ScreenContainer>
      <div className="flex-1 flex flex-col justify-center space-y-8 text-center">
        {/* Headline principal */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Descubra em 60 segundos o que está travando seus resultados na academia
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Responda 3 perguntas rápidas e veja exatamente o que ajustar no seu treino.
          </p>
        </div>

        {/* CTA Principal */}
        <div className="flex flex-col items-center space-y-3">
          <CTAButton 
            size="lg" 
            onClick={handleStart}
            className="w-full max-w-md"
          >
            Começar diagnóstico gratuito
          </CTAButton>
          
          {/* Texto auxiliar */}
          <p className="text-sm text-muted-foreground">
            Leva menos de 1 minuto • Não precisa de cadastro
          </p>
        </div>

        {/* Indicador visual opcional */}
        <div className="pt-8 text-muted-foreground text-sm opacity-50">
          ↓
        </div>
      </div>
    </ScreenContainer>
  )
}
