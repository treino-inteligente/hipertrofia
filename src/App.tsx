import { Route, Switch, Redirect, Router } from 'wouter'
import { useHashLocation } from 'wouter/use-hash-location'
import { WelcomeScreen } from '@/pages/WelcomeScreen'
import { QuizScreen } from '@/pages/QuizScreen'
import { ResultScreen } from '@/pages/ResultScreen'
import { SolutionScreen } from '@/pages/SolutionScreen'
import { QuizProvider } from '@/hooks/useQuiz'
import ErrorBoundary from '@/components/ErrorBoundary'
import { ThemeProvider } from '@/contexts/ThemeContext'
import '@/index.css'

/**
 * App principal
 * 
 * Configuração de rotas e providers
 * Usa hash routing (#/) para funcionar corretamente no GitHub Pages
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <QuizProvider>
          <Router hook={useHashLocation}>
            <Switch>
              {/* Rota inicial - Tela de entrada */}
              <Route path="/" component={WelcomeScreen} />
            
            {/* Quiz - 3 etapas */}
            <Route path="/quiz/:step" component={QuizScreen} />
            
            {/* Resultado personalizado */}
            <Route path="/resultado" component={ResultScreen} />
            
            {/* Solução + CTA final */}
            <Route path="/solucao" component={SolutionScreen} />
            
            {/* 404 - Redireciona para início */}
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
          </Router>
        </QuizProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
