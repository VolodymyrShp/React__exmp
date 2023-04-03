import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/screens/home/Home.jsx'
import './assets/styles/index.css'
import Router  from './components/router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
