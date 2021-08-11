import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

//STYLES
import '../styles/CartWidget.css';

const CartWidget = () => {
  const { calculateSize } = useContext(CartContext);

  return (
    calculateSize() > 0 && (
      <div className='cart-shopping-container'>
        <i className='fas fa-shopping-cart'></i>
        <span className='badge'>{calculateSize()}</span>
      </div>
    )
  );
};

export default CartWidget;
