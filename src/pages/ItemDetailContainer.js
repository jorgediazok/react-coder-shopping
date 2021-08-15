import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';

//COMPONENTS
import ItemDetail from '../components/ItemDetail';

//STYLES
import '../styles/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore();
    dbQuery
      .collection('ItemCollection')
      .doc(id)
      .get()
      .then((response) => setItem({ ...response.data(), id: response.id }));
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
