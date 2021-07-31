//STYLES
import '../styles/ItemDetail.css';

//COMPONENTS
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div
      className="container my-5 pt-4"
      style={{ background: 'lightgray', borderRadius: '20px' }}>
      <div className="row mt-4">
        <div className="col-lg-5 col-md-12 col-12">
          <img
            src={item[0]?.pictureUrl}
            alt=""
            className="img-fluid w-100 pb-5"
          />
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <h6>{item[0]?.category}</h6>
          <h3 className="py-3">{item[0]?.title}</h3>
          <h2 className="mb-3">$ {item[0]?.price}</h2>
          <div className="details__inputContainer">
            {/* <ItemCount /> */}
            <button className="details__button mt-3">Agregar al Carrito</button>
          </div>
          <h4 className="mt-4 mb-2">Detalles del producto</h4>
          <span className="details__description">{item[0]?.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
