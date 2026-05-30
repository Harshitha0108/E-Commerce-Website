import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './stores/context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>
</BrowserRouter>
)
