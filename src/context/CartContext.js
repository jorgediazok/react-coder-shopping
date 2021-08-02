import { createContext, useContext, useState } from 'react';
import { data } from '../data/data';

//CREO EL CONTEXTO
const CartContext = createContext();

//ME CREO UN CUSTOM HOOK PARA USAR ESE CONTEXTO
export const useCartContext = () => useContext(CartContext);

//CREO EL PROVIDER Y ENVUELVO LA APP EN EL PROVIDER LE PASO LOS VALORES EN VALUE

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
