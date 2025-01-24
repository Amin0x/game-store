import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import './css.css'


const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        imageUrl: ''
    });

    useEffect(() => {
        
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const response = await fetch(`/api/products/${id}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/products/${id}`,{
                method: 'put',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(product),
            });
            const data = await response.json();
            navigate('/admin/products');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div class="container page">
            <Sidebar />
            <div className="content edit-product-container">
                <div class="form-content">
                    <h2>تحرير المنتج</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='title'>العنوان:</label>
                            <input
                                className='form-control'
                                type="text"
                                name="title"
                                id='title'
                                value={product.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='description'>الوصف:</label>
                            <textarea
                                className='form-control'
                                name="description"
                                id='description'
                                value={product.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='price'>السعر:</label>
                            <input
                                className='form-control'
                                type="number"
                                name="price"
                                id='price'
                                value={product.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='category'>الصنف:</label>
                            <input
                                className='form-control'
                                type="text"
                                name="category"
                                id='category'
                                value={product.category}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='imageUrl'>الصورة:</label>
                            <input
                                className='form-control'
                                type="text"
                                name="imageUrl"
                                id='imageUrl'
                                value={product.imageUrl}
                                onChange={handleChange}
                            />
                        </div>
                        <button className='btn btn-primary mt-3' type="submit">تحديث</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProductPage;