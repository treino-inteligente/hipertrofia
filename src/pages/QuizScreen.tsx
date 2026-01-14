import { useLocation, useParams } from 'wouter'
import { ScreenContainer } from '@/components/ui/ScreenContainer'
import { QuizOption } from '@/components/ui/QuizOption'
import { ProgressBar } from '@/components/ProgressBar'
import { useQuiz } from '@/hooks/useQuiz'
import { analytics } from '@/lib/analytics'
import { useEffect } from 'react'

/**
 * Perguntas e opções do Quiz
 */
const QUIZ_DATA = [
  {
    id: 1,
    question: 'Há quanto tempo você treina?',
    key: 'timeTraining' as const,
    options: [
      'Menos de 6 meses',
      'Entre 6 meses e 2 anos',
      'Mais de 2 anos e estou estagnado'
    ]
  },
  {
    id: 2,
    question: 'O que mais te incomoda hoje no treino?',
    key: 'mainProblem' as const,
    options: [
      'Não consigo aumentar carga',
      'Treino muito e evoluo pouco',
      'Não sei se meu treino faz sentido',
      'Resultados travaram faz meses'
    ]
  },
  {
    id: 3,
    question: 'Quantos dias por semana você treina?',
    key: 'trainingDays' as const,
    options: [
      '3x por semana',
      '4x por semana',
      '5x ou mais'
    ]
  }
]

/**
 * TELA 2 - QUIZ INTERATIVO
 * 
 * Mostra 1 pergunta por vez
 * Avança automaticamente ao clicar
 * Barra de progresso no topo
 */
export function QuizScreen() {
  const params = useParams<{ step: string }>()
  const [, setLocation] = useLocation()
  const { setAnswer } = useQuiz()

  const step = parseInt(params.step || '1')
  const currentQuiz = QUIZ_DATA.find(q => q.id === step)
  const progress = (step / 3) * 100

  useEffect(() => {
    analytics.trackPageView(`quiz_step_${step}`)
  }, [step])

  // Redirect se step inválido
  if (!currentQuiz || step < 1 || step > 3) {
    setLocation('/quiz/1')
    return null
  }

  const handleAnswer = (answer: string) => {
    // Salva resposta
    setAnswer(currentQuiz.key, answer)
    analytics.trackQuizStep(step, answer)

    // Avança para próxima etapa
    if (step < 3) {
      setLocation(`/quiz/${step + 1}`)
    } else {
      // Quiz completo, vai para resultado
      analytics.trackQuizComplete()
      setLocation('/resultado')
    }
  }

  return (
    <ScreenContainer>
      {/* Cabeçalho com progresso */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Diagnóstico</span>
          <span>Etapa {step} de 3</span>
        </div>
        <ProgressBar progress={progress} />
      </div>

      {/* Pergunta */}
      <div className="flex-1 flex flex-col justify-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
          {currentQuiz.question}
        </h2>

        {/* Opções */}
        <div className="space-y-3">
          {currentQuiz.options.map((option, index) => (
            <QuizOption
              key={index}
              text={option}
              onClick={() => handleAnswer(option)}
            />
          ))}
        </div>
      </div>
    </ScreenContainer>
  )
}
