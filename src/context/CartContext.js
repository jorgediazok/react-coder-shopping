import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function UseCartContext({ children }) {
  const [cart, setCart] = useState([]);

  const saveItem = (newItem) => {
    const idx = cart.findIndex((item) => newItem.item.id === item.item.id);
    if (idx === -1) {
      setCart([...cart, newItem]);
    } else {
      const newQuantity = cart[idx].quantity + newItem.quantity;
      const oldList = cart.filter((old) => old.item.id !== newItem.item.id);
      setCart([...oldList, { item: newItem.item, quantity: newQuantity }]);
    }
  };

  const removeItem = (oldItemId) => {
    const oldList = cart.filter((item) => item.item.id !== oldItemId);
  };

  const cleanCart = () => {
    setCart([]);
  };

  const calculatePrice = () => {
    return cart.reduce(
      (acum, value) => acum + value.quantity * value.item[0].price, //POR QUË ME OBLIGA A PONER EL INDICE?
      0
    );
  };

  const calculateSize = () => {
    return cart.reduce((acum, value) => acum + value.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        saveItem,
        removeItem,
        cleanCart,
        calculatePrice,
        calculateSize,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
