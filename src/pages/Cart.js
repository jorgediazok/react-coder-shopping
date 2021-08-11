import React, { useContext } from 'react';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

import '../styles/Cart.css';

const Cart = () => {
  const { cart, calculatePrice, removeItem, cleanCart } =
    useContext(CartContext);

  return (
    <div className='cartContainer'>
      <h1 className='cartTitle'>
        {cart.length === 0 ? 'Tu carrito está vacío.' : ''}
      </h1>
      {cart.map((item) => (
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
              Cantidad: {item.quantity} | Precio Individual: $ {item.item.price}
            </p>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <div className='cartBasketRight'>
          <h1 className='cartTitle'>Subtotal</h1>
          <p className='cartPrice'>$ {calculatePrice()}</p>
          <div className='cartItemButtons'>
            <Link to='/checkout'>
              <button className='btn btn-dark cartItemPagar'>Pagar</button>
            </Link>
            <button className='btn btn-dark cartItemPagar' onClick={cleanCart}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
