import ProductCard from "../comp/card";
import './products-group.css'

const ProductsGroup = ({ products }) => {
    return (
        <div className="container">
            <div className="products-group">
                {products.map(product => (
                    <div className="card-wrapper" key={product.id}>
                        <ProductCard product={product}/>
                    </div>
                ))} 
            </div>
        </div>
    );
};

export default ProductsGroup;