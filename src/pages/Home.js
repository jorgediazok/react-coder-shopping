import React, { useState } from 'react';

//COMPONENTS
import ItemListContainer from '../components/ItemListContainer';
import Navbar from '../components/Navbar';

const Home = () => {
  const [productsCounter, setProductsCounter] = useState(0);

  const onAddProduct = () => {
    if (productsCounter >= 9) {
      return alert('Only 9 products in stock');
    }
    setProductsCounter(productsCounter + 1);
  };

  const onSubstractProduct = () => {
    if (productsCounter <= 0) {
      return 0;
    }
    setProductsCounter(productsCounter - 1);
  };

  return (
    <>
      <Navbar productsCounter={productsCounter} />
      <ItemListContainer
        greeting="Bienvenido a DevsShop 🚀"
        onAdd={onAddProduct}
        onSubstract={onSubstractProduct}
        productsCounter={productsCounter}
      />
    </>
  );
};

export default Home;
