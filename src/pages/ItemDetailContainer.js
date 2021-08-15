import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';

//COMPONENTS
import ItemDetail from '../components/ItemDetail';

//SPINNER
import Loading from '../components/Loading';

//STYLES
import '../styles/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const dbQuery = getFirestore();
      dbQuery
        .collection('ItemCollection')
        .doc(id)
        .get()
        .then((response) => setItem({ ...response.data(), id: response.id }));
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <>
      <div className='itemsContainer'>
        {loading ? <Loading /> : <ItemDetail item={item} />}
      </div>
    </>
  );
};

export default ItemDetailContainer;
