import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//COMPONENTS
import ItemDetail from '../components/ItemDetail';

//DATA
import { data } from '../data/data';

//STYLES
import '../styles/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setItem(data.filter((item) => item.id === id));
    }, 2000);
    return () => clearTimeout(timer);
  }, [id]);

  console.log(item);

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>DETAILS</h1>
      <div className="itemsContainer">
        <ItemDetail item={item} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
