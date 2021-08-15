import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//FIREBASE
import { getFirestore } from '../firebase';

//COMPONENTS
import ItemList from '../components/ItemList';

//SPINNER
import Loading from '../components/Loading';

//STYLES
import '../styles/ItemListContainer.css';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      if (categoryId === undefined) {
        const dbQuery = getFirestore();
        dbQuery
          .collection('ItemCollection')
          .get()
          .then((response) =>
            setData(
              response.docs.map((item) => ({ ...item.data(), id: item.id }))
            )
          );
      } else {
        const dbQuery = getFirestore();
        dbQuery
          .collection('ItemCollection')
          .where('category', '==', categoryId)
          .get()
          .then((response) =>
            setData(
              response.docs.map((item) => ({ ...item.data(), id: item.id }))
            )
          );
      }
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [categoryId]);

  return (
    <>
      <div className='itemsContainer'>
        {loading ? <Loading /> : <ItemList items={data} />}
      </div>
    </>
  );
};

export default ItemListContainer;
