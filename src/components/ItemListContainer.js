import React, { useState, useEffect } from 'react';

//COMPONENTS
// import ItemCount from './ItemCount';
import ItemList from './ItemList';

//STYLES
import '../styles/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      title: 'Developer Chair',
      description:
        'Una silla ideal para estar todo el día sentado programando.',
      price: 2500,
      pictureUrl:
        'https://pbs.twimg.com/profile_images/930636928948539392/hMVL7LVq_400x400.jpg',
    },
    {
      id: 2,
      title: 'Monitor Ultra HD LG',
      description:
        'Un monitor re piola para jugar a lo que quieras y programar en React.',
      price: 15000,
      pictureUrl:
        'https://mallweb.com.ar/media/catalog/product/cache/1/image/900x/9df78eab33525d08d6e5fb8d27136e95/g/i/gimage_28695.jpg',
    },
    {
      id: 3,
      title: 'Mouse Genius 2000',
      description:
        'Un mouse como los que usabas para jugar al Monkey Island en 1994.',
      price: 1500,
      pictureUrl:
        'https://d34zlyc2cp9zm7.cloudfront.net/products/6240434b3a221dd69dfc70f57e29dd23443c04be45a23b5075ceaf2a7bcbe6d1.jpg_500',
    },
    {
      id: 4,
      title: 'Teclado Manson 400xd',
      description:
        'Un teclado super cómodo donde no le pifias a ninguna tecla ni de casualidad.',
      price: 6000,
      pictureUrl:
        'https://www.soscomputacion.com.ar/21301-thickbox_default/teclado-gamer-genius-gx-gaming-scorpion-k8-negro-con-luz-de-7-colores-rgb.jpg',
    },
  ]);

  //DELAY DATA IN 2 SECONDS

  const [delayedData, setDelayedData] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedData(dummyData);
    }, 2000);
    return () => clearTimeout(timer);
  }, [dummyData]);

  return (
    <div className="itemsContainer">
      {/* <h1 className="greeting">{greeting}</h1> */}
      {/* <ItemCount stock={10} initial={0} /> */}
      <ItemList items={delayedData} />
    </div>
  );
};

export default ItemListContainer;
