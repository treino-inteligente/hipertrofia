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
    <ScreenContainer>
      {/* Barra de progresso */}
      <div className="mb-6">
        <ProgressBar progress={75} />
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-8">
        {/* Headline do resultado */}
        <div className="space-y-4 text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Seu principal erro hoje não é esforço — é falta de progressão estruturada
          </h1>
        </div>

        {/* Explicação */}
        <div className="space-y-4 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
          <p>
            A maioria das pessoas treina com disciplina, comparece na academia, se esforça...
            mas <strong className="text-foreground">repete os mesmos estímulos mês após mês</strong>.
          </p>
          <p>
            Seu corpo se adapta rápido. Se você não tem um método claro de progressão
            (aumentar carga, volume ou intensidade de forma estruturada), os resultados simplesmente param.
          </p>
          <p>
            Não é preguiça. Não é genética. É <strong className="text-foreground">falta de método</strong>.
          </p>
        </div>

        {/* Bloco de autoridade - Criador */}
        <div className="bg-muted/50 rounded-lg p-6 space-y-4 max-w-xl mx-auto w-full">
          <div className="flex items-start gap-4">
            {/* Placeholder para foto do criador */}
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl flex-shrink-0">
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
        <div className="flex flex-col items-center pt-4">
          <CTAButton 
            size="lg"
            onClick={handleContinue}
            className="w-full max-w-md"
          >
            Ver a solução
          </CTAButton>
        </div>
      </div>
    </ScreenContainer>
  )
}
