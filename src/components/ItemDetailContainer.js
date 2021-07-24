import { useEffect, useState } from 'react';

//COMPONENTS
import ItemDetail from './ItemDetail';

//STYLES
import '../styles/ItemDetailContainer.css';

const ItemDetailContainer = ({ data }) => {
  console.log(data);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(data);
    }, 2000);
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>DETAILS</h1>
      <div className="itemsContainer">
        {items
          .map((item) => <ItemDetail item={item} key={item.id} />)
          .slice(0, 1)}
      </div>
    </>
  );
};

export default ItemDetailContainer;
