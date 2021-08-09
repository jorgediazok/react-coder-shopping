import React, { useContext } from 'react';
import { BsTrash } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';

import '../styles/Cart.css';

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

  //POR QUE ME HACE PONERLE UN INDEX?

  return (
    <div className='cartContainer'>
      <h1 className='cartTitle'>
        {cart.length === 0 ? 'Tu carrito está vacío.' : ''}
      </h1>
      {cart.map((item, i) => (
        <>
          <div className='cartBasketLeft' key={item.item[0].id}>
            <img
              src={item.item[0].pictureUrl}
              alt=''
              className='cartItemImage'
            />
            <div className='CartBasketLeft__Info'>
              <h3>
                <BsTrash className='cartItemIcon' onClick={removeItem} />
              </h3>
              <p className='cartItemTitle'>{item.item[0].title}</p>
              <p className='cartItemCategory'>
                Categoría: {item.item[0].category}
              </p>
              <p className='cartItemDescription'>{item.item[0].description}</p>
              <p className='cartItemQuantity'>Cantidad: {item.quantity}</p>
            </div>
          </div>

          <div className='cartBasketRight'>
            <h1 className='cartTitle'>Total</h1>
            <p className='cartPrice'>$ {item?.item[0].price}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Cart;

// /* //   {cart.map((item) => ( */}
//     {/* //     <div className='row' key={item.item[0].id}>
//     //       <p className='col'>{item.item[0].title}</p>
//     //       <p className='col'>{item.quantity}</p>
//     //       <p className='col'>{item.item[0].price}</p>
//     //     </div>
//     //   ))} */}
