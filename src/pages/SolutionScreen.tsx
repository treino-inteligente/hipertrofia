import { useLocation } from 'wouter'
import { ScreenContainer } from '@/components/ui/ScreenContainer'
import { CTAButton } from '@/components/ui/CTAButton'
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
    <ScreenContainer fullHeight>
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-background pointer-events-none" />
      
      <div className="relative flex-1 flex flex-col py-6 px-4">
        <div className="flex-1 flex flex-col justify-between space-y-8 max-w-xl mx-auto w-full">
          {/* Badge de oferta */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <span>🎁</span>
              <span>Oferta especial</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center space-y-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Foi por isso que eu criei <span className="text-primary">esse material</span>
            </h1>
            <p className="text-base text-muted-foreground">
              Tudo que você precisa para sair da estagnação
            </p>
          </div>

          {/* Lista do que recebe */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary text-center">
              ✨ O que você vai receber:
            </p>
            <div className="space-y-3 bg-background/80 backdrop-blur-sm rounded-lg p-5 border border-primary/10">
              {[
                'Planilha de treino editável com progressão automática',
                'PDF explicando o método passo a passo (50+ páginas)',
                'Exemplo real de uso e aplicação',
                'Acesso imediato por e-mail'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demonstração visual - Placeholders */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-center text-muted-foreground">
              👀 Veja o que você vai receber:
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Placeholder Planilha */}
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30 hover:border-primary/50 transition-all">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-xs font-semibold text-foreground">
                    Planilha
                    <br />
                    Editável
                  </p>
                </div>
              </div>

              {/* Placeholder PDF */}
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30 hover:border-primary/50 transition-all">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📖</div>
                  <p className="text-xs font-semibold text-foreground">
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
          <div className="space-y-6">
            {/* Box de preço destacado */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20 text-center space-y-3">
              <p className="text-muted-foreground text-sm font-medium">
                🎯 Acesso completo por apenas
              </p>
              <div className="space-y-1">
                <div className="text-5xl md:text-6xl font-bold text-primary">
                  R$ 19,90
                </div>
                <p className="text-sm text-muted-foreground">
                  pagamento único • sem mensalidades
                </p>
              </div>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Acesso imediato após o pagamento</span>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="space-y-3">
              <CTAButton 
                size="lg"
                onClick={handleCheckout}
                className="w-full shadow-2xl shadow-primary/30 hover:shadow-primary/40 text-lg"
              >
                🚀 Quero acessar agora
              </CTAButton>
              
              {/* Badges de segurança */}
              <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground flex-wrap">
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Checkout seguro</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Receba por e-mail</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Acesso imediato</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botão voltar (opcional) */}
          <div className="text-center">
            <button
              onClick={() => setLocation('/resultado')}
              className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
            >
              ← Voltar
            </button>
          </div>
        </div>
      </div>
    </ScreenContainer>
  )
}
