import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//COMPONENTS
// import ItemCount from './ItemCount';
import ItemList from '../components/ItemList';

//DATA
import { data } from '../data/data';

//SPINNER
import Loading from '../components/Loading';

//STYLES
import '../styles/ItemListContainer.css';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [delayedData, setDelayedData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      if (categoryId === undefined) {
        setLoading(false);
        setDelayedData(data);
      } else {
        setLoading(false);
        setDelayedData(data.filter((item) => item.category === categoryId));
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [categoryId]);

  return (
    <>
      <div className="itemsContainer">
        {loading ? <Loading /> : <ItemList items={delayedData} />}
      </div>
    </>
  );
};

export default ItemListContainer;
