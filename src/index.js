import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CartContextProvider from './context/CartContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
