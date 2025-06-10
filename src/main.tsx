import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './components/Portfolio.tsx'
import "./assets/css/styles.css"
import { LanguageProvider } from './context/LanguageContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
        <ThemeProvider>
          <Portfolio />
        </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
