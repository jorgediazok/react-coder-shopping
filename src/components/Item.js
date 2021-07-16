import React from 'react';

//STYLES
import '../styles/Item.css';

const Item = ({ item }) => {
  const { title, price, description, pictureUrl } = item;

  return (
    <div className="card">
      <img className="card-img-top" src={pictureUrl} alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-price">
          <strong>$ {price}</strong>
        </p>
        <p className="card-text">{description}</p>
        <a href="/" className="btn btn-primary card-btn">
          Detalles
        </a>
      </div>
    </div>
  );
};

export default Item;
