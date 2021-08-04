import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './Types';

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case CLEAR_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id === action.payload),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
