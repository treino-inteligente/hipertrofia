import { useLocation } from 'wouter'
import { ScreenContainer } from '@/components/ui/ScreenContainer'
import { CTAButton } from '@/components/ui/CTAButton'
import { ProgressBar } from '@/components/ProgressBar'
import { analytics } from '@/lib/analytics'
import { useEffect } from 'react'

/**
 * TELA 3 - RESULTADO PERSONALIZADO
 * 
 * Mostra diagnóstico personalizado
 * Apresenta o problema identificado
 * Cria conexão com criador
 */
export function ResultScreen() {
  const [, setLocation] = useLocation()

  useEffect(() => {
    analytics.trackPageView('result')
  }, [])

  const handleContinue = () => {
    analytics.trackCTAClick('result_screen')
    setLocation('/solucao')
  }

  return (
    <ScreenContainer fullHeight>
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-primary/10 pointer-events-none" />
      
      <div className="relative flex-1 flex flex-col py-6 px-4">
        {/* Barra de progresso */}
        <div className="mb-6">
          <ProgressBar progress={75} />
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-8 max-w-xl mx-auto w-full">
          {/* Headline do resultado */}
          <div className="space-y-6 text-center">
            {/* Badge de resultado */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mx-auto">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Diagnóstico completo</span>
            </div>

            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-5xl">🎯</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Seu principal erro hoje não é <span className="text-primary">esforço</span> — é falta de <span className="text-primary">progressão estruturada</span>
            </h1>
          </div>

          {/* Explicação */}
          <div className="space-y-4 text-muted-foreground text-base md:text-lg">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-5 border border-primary/10">
              <p>
                A maioria das pessoas treina com disciplina, comparece na academia, se esforça...
                mas <strong className="text-foreground">repete os mesmos estímulos mês após mês</strong>.
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-5 border border-primary/10">
              <p>
                Seu corpo se adapta rápido. Se você não tem um método claro de progressão
                (aumentar carga, volume ou intensidade de forma estruturada), os resultados simplesmente param.
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-5 border border-primary/10">
              <p>
                Não é preguiça. Não é genética. É <strong className="text-foreground">falta de método</strong>.
              </p>
            </div>
          </div>

          {/* Bloco de autoridade - Criador */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 border border-primary/20">
            <div className="flex items-start gap-4">
              {/* Placeholder para foto do criador */}
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl flex-shrink-0 border-2 border-primary/30">
                👤
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm md:text-base text-muted-foreground italic">
                  "Isso foi exatamente o que me travou por muito tempo. Eu treinava 5x por semana,
                  mas fazia sempre o mesmo treino. Quando entendi que progressão precisa ser planejada,
                  tudo mudou."
                </p>
                <p className="text-sm font-semibold text-foreground">
                  — [Seu Nome]
                  {/* PERSONALIZE: Adicione seu nome aqui */}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center space-y-3 pt-4">
            <CTAButton 
              size="lg"
              onClick={handleContinue}
              className="w-full shadow-2xl shadow-primary/20 hover:shadow-primary/30"
            >
              ✨ Ver a solução
            </CTAButton>
            <p className="text-xs text-muted-foreground">
              Preparamos algo especial para você
            </p>
          </div>
        </div>
      </div>
    </ScreenContainer>
  )
}
