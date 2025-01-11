
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <h2 className="card-title">{product.name}</h2>
      <p className="card-desc">{product.description}</p>
      <p className="card-price">{product.price}</p>
    </div>
  );
};

export default ProductCard;