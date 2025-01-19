import { useState, useEffect } from 'react';

  const ProductCard = ({ product, key }) => {
    const [image, setImage] = useState(product.image);

    useEffect(() => {
      if (!product.image) {
        setImage(process.env.PUBLIC_URL + '/images/development-4536630_640.png');
      }
    }, [product.image]);

    return (
      <div className="card" key={key}>
        <img src={image} alt={product.name} className="card-img" crossOrigin='anonymous'/>
        <h2 className="card-title">{product.name}</h2>
        <p className="card-desc">{product.description}</p>
        <p className="card-price">{product.price}</p>
      </div>
    );
  };

  export default ProductCard;

 