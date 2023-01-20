import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import CartProvider from './CartController/CartContext';

ReactDOM.createRoot(document.querySelector('body')).render(
  <React.StrictMode>
   <CartProvider>
    <App />
   </CartProvider> 
  </React.StrictMode>,
)
