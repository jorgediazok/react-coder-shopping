import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const {
    cart,
    saveItem,
    calculatePrice,
    calculateSize,
    removeItem,
    cleanCart,
  } = useContext(CartContext);
  console.log(cart);
  console.log(calculatePrice());
  console.log(calculateSize());

  return (
    <>
      {cart.map((item) => (
        <div className='row' key={item.item[0].id}>
          <p className='col'>{item.item[0].title}</p>
          <p className='col'>{item.quantity}</p>
          <p className='col'>{item.item[0].price}</p>
        </div>
      ))}
    </>
  );
};

export default Cart;
