import React, { useState } from 'react';
import './CreateProductPage.css'

const CreateProductPage = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/products", {
            method: "post",
            headers: {"Content-type": "application/json"},
            body: product,
        });        

        if (res.ok === true){
            const result = await res.json();
            console.log('form submit result is:', result);
        }

        console.log('Product submitted:', product);
    };

    return (
        <div className='create-product'>
            <h1 className='title'>Create Product</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-grp'>
                    <label>Name:</label>
                    <input
                        className='input'
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-grp'>
                    <label>Name in arabic:</label>
                    <input
                        className='input'
                        type="text"
                        name="nameAr"
                        value={product.nameAr}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* <div className='form-grp'>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div> */}
                <div className='form-grp'>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-grp'>
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-grp'>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={product.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProductPage;