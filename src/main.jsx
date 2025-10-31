import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Importar Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Importar un CSS personalizado (opcional, para el Header)
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)