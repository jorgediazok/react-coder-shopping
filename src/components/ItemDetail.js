const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div className="card">
      <p>{item}</p>
    </div>
  );
};

export default ItemDetail;
