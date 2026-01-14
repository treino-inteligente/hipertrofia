import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// SPA routing support for GitHub Pages
// Processa a URL redirecionada pelo 404.html
const redirect = sessionStorage.redirect
delete sessionStorage.redirect
if (redirect && redirect !== location.href) {
  history.replaceState(null, '', redirect)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
