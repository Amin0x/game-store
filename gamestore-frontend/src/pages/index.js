import React from "react";
import { useEffect, useState } from "react";
import LayoutCard from "../comp/layout-card";
import ProductsGroup from "../comp/prodcts-group";

const IndexPage = () => {
    const [children, setChildren] = useState([]);
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const childrenResponse = await fetch("http://localhost:8080/children");
            const childrenData = await childrenResponse.json();
            setChildren(childrenData);

            const productsResponse = await fetch("http://localhost:8080/products");
            const productsData = await productsResponse.json();
            setProducts(productsData);
        } catch (error) {
            console.error("There was an error fetching the data!", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <LayoutCard children={{children}} />
            <ProductsGroup products={products} />
        </div>
    )
}

export default IndexPage;