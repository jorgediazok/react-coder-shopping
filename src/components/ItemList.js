import React from 'react';

//COMPONENTS
import Item from './Item';

//STYLES
import '../styles/ItemList.css';

const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
