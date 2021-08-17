import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

//FIREBASE
import { getFirestore } from '../firebase';

//COMPONENTS
import ItemList from '../components/ItemList';

//SPINNER
import Loading from '../components/Loading';

//ALERT
import Alert from '../Utils/Alert';

//STYLES
import '../styles/ItemListContainer.css';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    try {
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
    } catch (error) {
      new Alert(
        'Algo salió mal. Intente nuevamente más tarde.',
        'Error',
        'error'
      );
    }
    setLoading(false);
  }, [categoryId]);

  return (
    <>
      {loading && <Loading />}
      <div className='itemsContainer'>
        <h1 className='itemListContainer__title'>
          Productos para desarrolladores 💻
        </h1>
        <ItemList items={data} />
      </div>
    </>
  );
};

export default ItemListContainer;
