import React, { useState } from 'react';

//STYLES
import '../styles/CartWidget.css';

const CartWidget = () => {
  const [productsCounter, setProductsCounter] = useState(0);

  return (
    <>
      <i className="fas fa-shopping-cart"></i>
      <span className="badge">{productsCounter}</span>
    </>
  );
};

export default CartWidget;
