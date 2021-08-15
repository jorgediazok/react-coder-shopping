import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

//STYLES
import '../styles/ItemDetail.css';

//COMPONENTS
import ItemCount from './ItemCount';

const ItemDetail = ({ item = {} }) => {
  const [quantityItems, setQuantityItems] = useState(0);

  //USE CONTEXT
  const { saveItem } = useContext(CartContext);

  const onAdd = (count) => {
    if (count === 0) {
      return;
    }
    setQuantityItems(count);
    saveItem({ item: item, quantity: count });
  };

  return (
    <div
      className='container my-5 pt-4'
      style={{ background: 'lightgray', borderRadius: '20px' }}
    >
      <div className='row mt-4'>
        <div className='col-lg-5 col-md-12 col-12'>
          <img src={item?.pictureUrl} alt='' className='img-fluid w-100 pb-5' />
        </div>
        <div className='col-lg-6 col-md-12 col-12'>
          <h6>{item?.category}</h6>
          <h3 className='py-3'>{item?.title}</h3>
          <h2 className='mb-3'>$ {item?.price}</h2>

          <div className='details__descriptionContainer'>
            <h4 className='mt-4 mb-2'>Detalles del producto</h4>
            <span className='details__description'>{item?.description}</span>
          </div>

          <div className='details__inputContainer'>
            {quantityItems ? (
              <Link to='/cart'>
                <button className='btn-cart btn-finish'>Terminar Compra</button>
              </Link>
            ) : (
              <ItemCount stock={10} onAdd={onAdd} initial={1} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
