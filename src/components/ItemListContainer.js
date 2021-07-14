import React from 'react';

//STYLES
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemsContainer">
      <h1 className="greeting">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
