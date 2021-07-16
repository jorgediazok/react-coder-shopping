import React, { useState } from 'react';

//STYLES
import '../styles/ItemCount.css';

const ItemCount = ({ stock, initial }) => {
  const [changeStock, setChangeStock] = useState(stock);
  const [productsCounter, setProductsCounter] = useState(initial);

  const onAddProduct = () => {
    if (productsCounter < stock) {
      setChangeStock(changeStock - 1);
      console.log(changeStock);
      setProductsCounter(productsCounter + 1);
    } else {
      alert('No hay más stock.');
    }
  };

  const onSubstractProduct = () => {
    if (productsCounter > 0) {
      setChangeStock(changeStock + 1);
      console.log(changeStock);
      setProductsCounter(productsCounter - 1);
    } else {
      return;
    }
  };

  return (
    <div className="itemCount">
      <p className="counter">{productsCounter}</p>
      <div className="btn-container">
        <button onClick={onAddProduct} className="btn-counter">
          +
        </button>
        <button onClick={onSubstractProduct} className="btn-counter">
          -
        </button>
      </div>
      <button className="btn btn-cart">Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
