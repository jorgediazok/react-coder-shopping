import { Link } from 'react-router-dom';

//STYLES
import '../styles/Item.css';

const Item = ({ item }) => {
  const { title, price, description, pictureUrl, id } = item;

  return (
    <div className="card">
      <img className="card-img-top" src={pictureUrl} alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-price">
          <strong>$ {price}</strong>
        </p>
        <p className="card-text">{description}</p>
        <Link to={`/item/${id}`} className="btn btn-primary card-btn">
          Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
