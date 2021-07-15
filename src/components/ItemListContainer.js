import React from 'react';

//COMPONENTS
import ItemCount from './ItemCount';

//STYLES
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemsContainer">
      <h1 className="greeting">{greeting}</h1>
      <ItemCount />
    </div>
  );
};

export default ItemListContainer;
