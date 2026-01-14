import { Route, Switch, Redirect, Router } from 'wouter'
import { useState, useEffect } from 'react'
import { WelcomeScreen } from '@/pages/WelcomeScreen'
import { QuizScreen } from '@/pages/QuizScreen'
import { ResultScreen } from '@/pages/ResultScreen'
import { SolutionScreen } from '@/pages/SolutionScreen'
import { QuizProvider } from '@/hooks/useQuiz'
import ErrorBoundary from '@/components/ErrorBoundary'
import { ThemeProvider } from '@/contexts/ThemeContext'
import '@/index.css'

/**
 * Custom hook for browser location with base path support
 */
const useCustomLocation = () => {
  const base = import.meta.env.BASE_URL || '/'
  
  const [path, setPath] = useState(() => {
    return window.location.pathname.replace(base.slice(0, -1), '') || '/'
  })

  useEffect(() => {
    const handlePopState = () => {
      const newPath = window.location.pathname.replace(base.slice(0, -1), '') || '/'
      setPath(newPath)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [base])

  const navigate = (to: string) => {
    const newPath = base + to.slice(1)
    window.history.pushState(null, '', newPath)
    setPath(to)
  }

  return [path, navigate] as [string, (path: string) => void]
}

/**
 * App principal
 * 
 * Configuração de rotas e providers
 * Usa routing customizado para manter base path do GitHub Pages
 */
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <QuizProvider>
          <Router hook={useCustomLocation}>
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
