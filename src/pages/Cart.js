import React, { useContext, useState, useEffect } from 'react';
import { getFirestore } from '../firebase';
import { BsTrash } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Alert from 'sweetalert2';
import 'firebase/firestore';
import firebase from 'firebase';

import '../styles/Cart.css';

const Cart = () => {
  const { cart, calculatePrice, removeItem, cleanCart } =
    useContext(CartContext);
  const [buyer, setBuyer] = useState(initialState);
  const [id, setId] = useState('');
  const order = {
    buyer: buyer,
    item: cart,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  };
  const history = useHistory();

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore();
    if (buyer.email !== buyer.confirm_email) {
      new Alert('Error', 'Los dos mails deben coincidir', 'error');
    } else {
      db.collection('order')
        .add(order)
        .then((response) => setId(response.id))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (id) {
      setBuyer(initialState);
      cleanCart();
      new Alert(
        `Compra Confirmada. Su N° de ID es: ${id}`,
        'Se le ha enviado un email con los detalles.',
        'success'
      );
      history.push('/');
    }
  }, [cleanCart, id, history]);

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
              Cantidad: {item.quantity} | P/Unitario: $ {item.item.price}
            </p>
          </div>
        </div>
      ))}

      {cart.length > 0 ? (
        <div className='cartBasketRight'>
          <h1 className='cartTitle'>Subtotal</h1>
          <p className='cartPrice'>$ {calculatePrice()}</p>
          <h1 className='cartTitle'>Contacto</h1>
          <div className='cartBasketOrder'>
            <form
              onSubmit={handleSubmit}
              onChange={handleChange}
              className='cartBasketForm'
            >
              <input
                type='text'
                placeholder='Nombre'
                name='name'
                value={buyer.name}
              />
              <input
                type='phone'
                placeholder='Telefono'
                name='phone'
                value={buyer.phone}
              />
              <input
                type='email'
                placeholder='Email'
                name='email'
                required
                value={buyer.email}
              />
              <input
                type='email'
                placeholder='Confirmar Email'
                name='confirm_email'
                required
                value={buyer.confirm_email}
              />
              <div className='cartItemButtons'>
                <button type='submit' className='btn btn-dark cartItemPagar'>
                  Pagar
                </button>
                <button
                  className='btn btn-dark cartItemPagar'
                  onClick={cleanCart}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <p className='cartNoItems'>No hay Items en el carro</p>
      )}
    </div>
  );
};

export default Cart;

const initialState = {
  name: '',
  phone: '',
  email: '',
  confirm_email: '',
};
