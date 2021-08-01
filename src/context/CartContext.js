import { createContext, useContext, useState } from 'react';

//CREO EL CONTEXTO
const CartContext = createContext();

//ME CREO UN CUSTOM HOOK PARA USAR ESE CONTEXTO
export const useCartContext = () => useContext(CartContext);

//CREO EL PROVIDER Y ENVUELVO LA APP EN EL PROVIDER LE PASO LOS VALORES EN VALUE

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState('carrito');

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
