import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/variables.css'
import './styles/global.css'

document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--x', `${e.clientX}px`)
  document.documentElement.style.setProperty('--y', `${e.clientY}px`)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
