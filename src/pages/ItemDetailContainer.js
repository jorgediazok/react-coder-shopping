import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//COMPONENTS
import ItemDetail from '../components/ItemDetail';

//DATA
import { data } from '../data/data';

//STYLES
import '../styles/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setItem(data.filter((item) => item.id === id));
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
