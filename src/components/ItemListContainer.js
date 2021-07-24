import React, { useState, useEffect } from 'react';

//COMPONENTS
// import ItemCount from './ItemCount';
import ItemList from './ItemList';

//STYLES
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ data }) => {
  //DELAY DATA IN 2 SECONDS
  const [delayedData, setDelayedData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedData(data);
    }, 2000);
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className="itemsContainer">
      <ItemList items={delayedData} />
    </div>
  );
};

export default ItemListContainer;
