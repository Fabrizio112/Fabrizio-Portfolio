import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './components/Portfolio'
import "./assets/css/styles.css"
import { LanguageProvider } from './context/LanguageContext'
import { PortfolioProvider } from './context/PortfolioContext'
import { ThemeProvider } from './context/ThemeContext'


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
