import React from 'react';

//STYLES
import '../styles/ItemCount.css';

//LE PASA POR PROPS INITIAL Y ON ADD

const ItemCount = ({ onAdd, onSubstract, counter }) => {
  return (
    <div className='itemCount'>
      <p className='counter'>{counter}</p>

      <div className='btn-container'>
        <button onClick={onAdd} className='btn-counter'>
          +
        </button>
        <button onClick={onSubstract} className='btn-counter'>
          -
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
