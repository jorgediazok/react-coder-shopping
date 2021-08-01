import React from 'react';

//STYLES
import '../styles/CartWidget.css';

const CartWidget = () => {
  return (
    <div className='cart-shopping-container'>
      <i className='fas fa-shopping-cart'></i>
      <span className='badge'>0</span>
    </div>
  );
};

export default CartWidget;
