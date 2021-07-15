import React, { useState } from 'react';

//STYLES
import '../styles/ItemCount.css';

const ItemCount = () => {
  const [stock, setStock] = useState(10);
  const [initial, setInitial] = useState(0);

  const onAddProduct = () => {
    if (stock >= 1 && stock <= 10) {
      setStock(stock - 1);
      setInitial(initial + 1);
    } else {
      alert('No se pueden agregar más artículos.');
    }
  };

  const onSubstractProduct = () => {
    if (initial === 0) {
      return;
    }
    setStock(stock + 1);
    setInitial(initial - 1);
  };

  return (
    <div className="itemCount">
      <p className="counter">{initial}</p>
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
