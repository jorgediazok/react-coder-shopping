import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//COMPONENTS
import ItemList from '../components/ItemList';

//SPINNER
import Loading from '../components/Loading';

//STYLES
import '../styles/ItemListContainer.css';
import { data } from '../data/data';

const ItemListContainer = () => {
  const [products] = useState(data);
  const [loading, setLoading] = useState(true);
  const [delayedData, setDelayedData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (categoryId === undefined) {
        setLoading(false);
        setDelayedData(products);
      } else {
        setLoading(false);
        setDelayedData(
          products?.filter((item) => item.category === categoryId)
        );
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [products, categoryId]);

  return (
    <>
      <div className='itemsContainer'>
        {loading ? <Loading /> : <ItemList items={delayedData} />}
      </div>
    </>
  );
};

export default ItemListContainer;
