import React from 'react';

//COMPONENTS
import ItemCount from './ItemCount';

//STYLES
import '../styles/ItemListContainer.css';

const ItemListContainer = ({
  greeting,
  onAdd,
  onSubstract,
  productsCounter,
}) => {
  return (
    <div className="itemsContainer">
      <h1 className="greeting">{greeting}</h1>
      <ItemCount
        onAdd={onAdd}
        onSubstract={onSubstract}
        productsCounter={productsCounter}
      />
    </div>
  );
};

export default ItemListContainer;
