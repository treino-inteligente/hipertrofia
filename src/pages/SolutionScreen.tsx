import { useLocation } from 'wouter'
import { ScreenContainer } from '@/components/ui/ScreenContainer'
import { CTAButton } from '@/components/ui/CTAButton'
import { ProgressBar } from '@/components/ProgressBar'
import { analytics } from '@/lib/analytics'
import { useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'

/**
 * ⚠️ CONFIGURAÇÃO IMPORTANTE
 * Substitua pela URL real do seu checkout Kiwify
 */
const CHECKOUT_URL = 'https://pay.kiwify.com.br/SEU_LINK_AQUI'

/**
 * TELA 4 - SOLUÇÃO + CTA
 * 
 * Apresenta a solução (produto)
 * Lista o que está incluído
 * Mostra preço e CTA final para checkout
 */
export function SolutionScreen() {
  const [, setLocation] = useLocation()

  useEffect(() => {
    analytics.trackPageView('solution')
  }, [])

  const handleCheckout = () => {
    analytics.trackCheckout()
    analytics.trackCTAClick('solution_screen_checkout')
    
    // Redireciona para checkout Kiwify
    window.location.href = CHECKOUT_URL
  }

  return (
    <ScreenContainer>
      {/* Barra de progresso completa */}
      <div className="mb-6">
        <ProgressBar progress={100} />
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-8 py-8">
        {/* Headline */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Foi por isso que eu criei esse material
          </h1>
        </div>

        {/* Lista do que recebe */}
        <div className="space-y-4 max-w-xl mx-auto w-full">
          <div className="space-y-3">
            {[
              'Planilha de treino editável com progressão automática',
              'PDF explicando o método passo a passo (50+ páginas)',
              'Exemplo real de uso e aplicação',
              'Acesso imediato por e-mail'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-base md:text-lg text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demonstração visual - Placeholders */}
        <div className="space-y-3 max-w-xl mx-auto w-full">
          <p className="text-sm text-muted-foreground text-center mb-4">
            Veja o que você vai receber:
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Placeholder Planilha */}
            <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">📊</div>
                <p className="text-xs text-muted-foreground">
                  Planilha
                  <br />
                  Editável
                </p>
              </div>
            </div>

            {/* Placeholder PDF */}
            <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">📖</div>
                <p className="text-xs text-muted-foreground">
                  PDF Completo
                  <br />
                  50+ páginas
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-center text-muted-foreground italic">
            {/* PERSONALIZE: Substitua os placeholders acima por screenshots reais */}
            Substitua por imagens reais do produto em /public/
          </p>
        </div>

        {/* Preço e CTA */}
        <div className="space-y-6 max-w-md mx-auto w-full">
          {/* Preço */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-sm">
              Acesso completo por
            </p>
            <div className="text-4xl md:text-5xl font-bold text-primary">
              R$ 19,90
            </div>
            <p className="text-sm text-muted-foreground">
              pagamento único
            </p>
          </div>

          {/* CTA Final */}
          <div className="space-y-3">
            <CTAButton 
              size="lg"
              onClick={handleCheckout}
              className="w-full"
            >
              Quero acessar agora
            </CTAButton>
            
            {/* Microcopy de segurança */}
            <p className="text-xs text-center text-muted-foreground">
              Checkout seguro • Processado pela Kiwify • Acesso imediato
            </p>
          </div>
        </div>

        {/* Botão voltar (opcional) */}
        <div className="text-center pt-4">
          <button
            onClick={() => setLocation('/resultado')}
            className="text-sm text-muted-foreground hover:text-foreground underline"
          >
            ← Voltar
          </button>
        </div>
      </div>
    </ScreenContainer>
  )
}
