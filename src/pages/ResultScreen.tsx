import { useLocation } from 'wouter'
import { ScreenContainer } from '@/components/ui/ScreenContainer'
import { CTAButton } from '@/components/ui/CTAButton'
import { analytics } from '@/lib/analytics'
import { useEffect } from 'react'
import { useQuiz } from '@/hooks/useQuiz'

/**
 * Tipos de perfil baseados nas respostas
 */
type ProfileType = 'TREINA_DEMAIS' | 'ESTAGNADO' | 'SEM_DIRECAO'

interface ProfileContent {
  title: string
  subtitleBefore: string // Texto antes do traço (normal)
  subtitleHighlight: string // Texto depois do traço (destacado em primary)
  description: string
  secondaryDescription: string
  testimonial: string
  author: string
}

/**
 * Determina o perfil baseado nas respostas das perguntas 2 e 3
 */
function getProfile(trainingDays?: string, mainProblem?: string): ProfileType {
  // Pergunta 1 não é decisiva, apenas perguntas 2 (mainProblem) e 3 (trainingDays)
  
  const isHighFrequency = trainingDays === '5x ou mais' || trainingDays === '4x por semana'
  
  // TREINA DEMAIS: 5x+ ou 4x + "Treino muito e evoluo pouco"
  if (isHighFrequency && mainProblem === 'Treino muito e evoluo pouco') {
    return 'TREINA_DEMAIS'
  }
  
  // ESTAGNADO: 5x+ ou 4x + "Não consigo aumentar carga"
  if (isHighFrequency && mainProblem === 'Não consigo aumentar carga') {
    return 'ESTAGNADO'
  }
  
  // SEM DIREÇÃO: Todos os outros casos
  return 'SEM_DIRECAO'
}

/**
 * Conteúdo personalizado para cada perfil
 */
const PROFILE_CONTENT: Record<ProfileType, ProfileContent> = {
  TREINA_DEMAIS: {
    title: 'PERFIL O TREINA MUITO"',
    subtitleBefore: 'Seu principal erro hoje não é esforço — ',
    subtitleHighlight: 'é o volume de treino muito alto',
    description: 'A maioria das pessoas treina com disciplina, comparece na academia, se esforça... mas acaba exagerando no volume de treino.',
    secondaryDescription: 'Não é preguiça. Não é genética. É falta de método.',
    testimonial: '"Isso foi exatamente o que me travou por muito tempo. Quando entendi que o volume precisa ser controlado, tudo mudou."',
    author: 'Lucas M.'
  },
  ESTAGNADO: {
    title: 'PERFIL O ESTAGNADO',
    subtitleBefore: 'Seu principal erro hoje não é esforço — ',
    subtitleHighlight: 'é o volume de treino muito alto',
    description: 'A maioria das pessoas treina com disciplina, se esforça... mas acaba exagerando no volume de treino, e ele é o vilão contra a progressão de carga.',
    secondaryDescription: 'Não é preguiça. Não é genética. É falta de método.',
    testimonial: '"Era exatamente isso que estava me impedindo de aumentar as cargas. Quando entendi que o volume precisa ser controlado, tudo mudou."',
    author: 'Rafael S.'
  },
  SEM_DIRECAO: {
    title: 'PERFIL O SEM DIREÇÃO',
    subtitleBefore: 'Seu principal erro hoje não é esforço — ',
    subtitleHighlight: 'é a falta de direcionamento',
    description: 'A maioria das pessoas treina com disciplina, se esforça... mas só faz aquilo que o instrutor manda, ou segue um treino genérico do intagram.',
    secondaryDescription: 'Não é preguiça. Não é genética. É falta de método.',
    testimonial: '"Eu seguia a ficha que o instrutor me passava, não fazia ideia que o problema estava ali. Quando entendi que precisava de um treino com embasamento científico, tudo mudou."',
    author: 'Bruno A.'
  }
}

/**
 * TELA 3 - RESULTADO PERSONALIZADO
 * 
 * Mostra diagnóstico personalizado
 * Apresenta o problema identificado
 * Cria conexão com criador
 */
export function ResultScreen() {
  const [, setLocation] = useLocation()
  const { answers } = useQuiz()

  useEffect(() => {
    analytics.trackPageView('result')
  }, [])

  const profileType = getProfile(answers.trainingDays, answers.mainProblem)
  const content = PROFILE_CONTENT[profileType]

  const handleContinue = () => {
    analytics.trackCTAClick('result_screen')
    setLocation('/solucao')
  }

  return (
    <ScreenContainer fullHeight>
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-primary/10 pointer-events-none" />
      
      <div className="relative flex-1 flex flex-col py-6 px-4">
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

            {/* Perfil */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary uppercase tracking-wide">
              {content.title}
            </h2>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              {content.subtitleBefore} <span className="text-primary">{content.subtitleHighlight}</span>
            </h1>
          </div>

          {/* Explicação */}
          <div className="space-y-4 text-muted-foreground text-base md:text-lg">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-5 border border-primary/10">
              <p>
                {content.description}
              </p>
            </div>
            
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-5 border border-primary/10">
              <p>
                {content.secondaryDescription}
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
                  {content.testimonial}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  — {content.author}
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
