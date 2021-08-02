import React, { useState } from 'react';

//STYLES
import '../styles/ItemCount.css';

//LE PASA POR PROPS INITIAL Y ON ADD

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  const [quantity, setQuantity] = useState(stock);

  const onAddOne = () => {
    if (counter >= 9) {
      alert('No hay más stock.');
      return;
    }
    setQuantity(stock - 1);
    setCounter(counter + 1);
  };

  const onRemoveOne = () => {
    if (counter > 0) {
      setQuantity(stock + 1);
      setCounter(counter - 1);
    } else {
      return;
    }
  };

  return (
    <div className='itemCount'>
      <div className='btn-container'>
        <button onClick={onAddOne} className='btn-counter'>
          +
        </button>
        <p className='counter'>{counter}</p>
        <button onClick={onRemoveOne} className='btn-counter'>
          -
        </button>
      </div>
      <div className='btn-cart-container'>
        <button onClick={onAdd} className='btn-cart'>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
