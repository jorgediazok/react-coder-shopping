import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//IMPORT PRODUCTS FROM CONTEXT
import { useCartContext } from '../context/CartContext';

//COMPONENTS
import ItemList from '../components/ItemList';

//SPINNER
import Loading from '../components/Loading';

//STYLES
import '../styles/ItemListContainer.css';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [delayedData, setDelayedData] = useState([]);
  const { categoryId } = useParams();

  //USE CONTEXT
  const { products } = useCartContext();

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
