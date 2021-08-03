import { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { data } from '../data/data';
import { REMOVE_FROM_CART, ADD_TO_CART, CLEAR_CART } from './Types';

const CartState = ({ children }) => {
  const initialState = {
    products: data,
    cart: {
      item: {},
      quantity: 0,
    },
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item, quantity) => {
    dispatch({ type: ADD_TO_CART, payload: item, quantity });
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  const clearCart = (items) => {
    dispatch({ type: CLEAR_CART, payload: items });
  };

  return (
    <CartContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
