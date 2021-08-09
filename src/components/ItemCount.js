import React, { useState } from 'react';

//STYLES
import '../styles/ItemCount.css';

//LE PASA POR PROPS INITIAL Y ON ADD

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const handleAdd = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleRemove = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(cantidad);
  };

  return (
    <div className='itemCount'>
      <div className='btn-container'>
        <button onClick={handleAdd} className='btn-counter'>
          +
        </button>
        <p className='counter'>{cantidad}</p>
        <button onClick={handleRemove} className='btn-counter'>
          -
        </button>
      </div>
      <div className='btn-cart-container'>
        <button onClick={handleOnAdd} className='btn-cart'>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
