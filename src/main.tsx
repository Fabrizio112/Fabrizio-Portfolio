import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './components/Portfolio.tsx'
import "./assets/css/styles.css"
import { LanguageProvider } from './context/LanguageContext.tsx'
import { PortfolioProvider } from './context/PortfolioContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <PortfolioProvider>
        <ThemeProvider>
          <Portfolio />
        </ThemeProvider>
      </PortfolioProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
