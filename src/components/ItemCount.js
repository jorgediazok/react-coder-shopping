import React from 'react';

//STYLES
import '../styles/ItemCount.css';

const ItemCount = ({ productsCounter, onAdd, onSubstract }) => {
  return (
    <div className="itemCount">
      <p className="counter">{productsCounter}</p>
      <div className="btn-container">
        <button onClick={onAdd} className="btn-counter">
          +
        </button>
        <button onClick={onSubstract} className="btn-counter">
          -
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
