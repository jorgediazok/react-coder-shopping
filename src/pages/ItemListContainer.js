import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//COMPONENTS
// import ItemCount from './ItemCount';
import ItemList from '../components/ItemList';

//DATA
import { data } from '../data/data';

//STYLES
import '../styles/ItemListContainer.css';

const ItemListContainer = () => {
  //DELAY DATA IN 2 SECONDS
  const [delayedData, setDelayedData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (categoryId === undefined) {
        setDelayedData(data);
      } else {
        setDelayedData(data.filter((item) => item.category === categoryId));
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [categoryId]);

  return (
    <>
      <div className="itemsContainer">
        <ItemList items={delayedData} />
      </div>
    </>
  );
};

export default ItemListContainer;
