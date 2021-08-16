import React, { useContext, useState, useEffect } from 'react';
import { getFirestore } from '../firebase';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Alert from 'sweetalert2';
import Form from '../components/Form';
import 'firebase/firestore';
import firebase from 'firebase';

import '../styles/Cart.css';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart, calculatePrice, cleanCart } = useContext(CartContext);
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
        <CartItem item={item} />
      ))}

      {cart.length > 0 ? (
        <div className='cartBasketRight'>
          <h1 className='cartTitle'>Subtotal</h1>
          <p className='cartPrice'>$ {calculatePrice()}</p>
          <h1 className='cartTitle'>Contacto</h1>
          <div className='cartBasketOrder'>
            <Form
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              buyer={buyer}
            />
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
