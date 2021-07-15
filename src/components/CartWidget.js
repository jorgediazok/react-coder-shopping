import React from 'react';

//STYLES
import '../styles/CartWidget.css';

const CartWidget = ({ productsCounter }) => {
  return (
    <>
      <i className="fas fa-shopping-cart"></i>
      <span className="badge">{productsCounter}</span>
    </>
  );
};

export default CartWidget;
