import React from 'react';

//STYLES
import '../styles/CartWidget.css';

const CartWidget = () => {
  return (
    <>
      <i className="fas fa-shopping-cart"></i>
      <span className="badge">0</span>
    </>
  );
};

export default CartWidget;
