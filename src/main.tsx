import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryContextProvider } from './contexts/QueryContext.tsx'
import { CartProvider } from './contexts/CartContext.tsx'
import { ToastContextProvider } from './contexts/ToastContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ToastContextProvider>
    <React.StrictMode>
      <QueryContextProvider>
        <BrowserRouter>
          <CartProvider>
            <App />
          </CartProvider>
        </BrowserRouter>
      </QueryContextProvider>
    </React.StrictMode>
    s
  </ToastContextProvider>,
)
