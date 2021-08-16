import React, { useContext } from 'react';
import { BsTrash } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className='cartBasketLeft' key={item.item.id}>
      <img src={item.item.pictureUrl} alt='' className='cartItemImage' />
      <div className='CartBasketLeft__Info'>
        <h3>
          <BsTrash
            className='cartItemIcon'
            onClick={() => removeItem(item.item.id)}
          />
        </h3>
        <p className='cartItemTitle'>{item.item.title}</p>
        <p className='cartItemCategory'>Categoría: {item.item.category}</p>
        <p className='cartItemDescription'>{item.item.description}</p>
        <p className='cartItemQuantity'>
          Cantidad: {item.quantity} | P/Unitario: $ {item.item.price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
