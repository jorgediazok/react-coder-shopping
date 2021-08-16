import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
const Form = ({ handleSubmit, handleChange, buyer }) => {
  const { cleanCart } = useContext(CartContext);

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChange}
      className='cartBasketForm'
    >
      <input
        type='text'
        placeholder='Nombre'
        name='name'
        required
        value={buyer.name}
      />
      <input
        required
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
        <button className='btn btn-dark cartItemPagar' onClick={cleanCart}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
