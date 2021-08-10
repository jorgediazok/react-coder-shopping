import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

//STYLES
import '../styles/CartWidget.css';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);

  return (
    <div className='cart-shopping-container'>
      <i className='fas fa-shopping-cart'></i>
      <span className='badge'>{cart.length}</span>
    </div>
  );
};

export default CartWidget;
