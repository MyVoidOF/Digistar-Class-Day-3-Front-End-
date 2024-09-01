import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Component.jsx'
import ThemeProvider from './assets/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}

export default App
