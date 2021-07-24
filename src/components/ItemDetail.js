import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={item.pictureUrl} alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-price">
          <strong>$ {item.price}</strong>
        </p>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
