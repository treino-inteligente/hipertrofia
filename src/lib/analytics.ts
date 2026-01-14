/**
 * Analytics helper
 * 
 * Adicione aqui integrações com:
 * - Meta Pixel
 * - Google Analytics
 * - Tag Manager
 * 
 * Eventos importantes para trackear:
 * - page_view (cada tela do funil)
 * - quiz_started
 * - quiz_step_completed
 * - quiz_completed
 * - cta_clicked
 * - checkout_initiated
 */

export const analytics = {
  // Exemplo de estrutura para tracking
  trackPageView: (pageName: string) => {
    console.log('📊 Page View:', pageName)
    // window.gtag?.('event', 'page_view', { page_name: pageName })
    // window.fbq?.('track', 'PageView')
  },

  trackEvent: (eventName: string, params?: Record<string, any>) => {
    console.log('📊 Event:', eventName, params)
    // window.gtag?.('event', eventName, params)
    // window.fbq?.('track', eventName, params)
  },

  trackQuizStart: () => {
    console.log('📊 Quiz Started')
    // analytics.trackEvent('quiz_started')
  },

  trackQuizStep: (step: number, answer: string) => {
    console.log('📊 Quiz Step:', step, answer)
    // analytics.trackEvent('quiz_step_completed', { step, answer })
  },

  trackQuizComplete: () => {
    console.log('📊 Quiz Completed')
    // analytics.trackEvent('quiz_completed')
  },

  trackCTAClick: (location: string) => {
    console.log('📊 CTA Clicked:', location)
    // analytics.trackEvent('cta_clicked', { location })
  },

  trackCheckout: () => {
    console.log('📊 Checkout Initiated')
    // analytics.trackEvent('checkout_initiated')
    // window.fbq?.('track', 'InitiateCheckout')
  }
}
