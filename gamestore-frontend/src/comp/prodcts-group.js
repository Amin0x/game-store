import ProductCard from "../comp/card";


const ProductsGroup = ({ products }) => {
    return (
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <div className="col-sm-6">
                        <ProductCard product={product} />
                    </div>
                ))} 
            </div>
        </div>
    );
};

export default ProductsGroup;