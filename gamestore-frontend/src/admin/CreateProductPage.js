import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './css.css'

const CreateProductPage = () => {
    
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: ''
    });

    const { register, handleSubmit, formState: { errors } } = useForm();

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        console.log('Uploading file:', file);
        
        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                const data = await response.json();
                return data.url; // Assuming server returns URL of uploaded file
            } else {
                throw new Error('File upload failed');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            return null;
        }
    }

    const onFileChange = (e) => {
        console.log('File selected:', e.target.files[0]);
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProduct(prev => ({
                    ...prev,
                    imageUrl: reader.result
                }));
            };
            
            reader.readAsDataURL(file);
        }
    }

    const onSubmit = async (data) => {
        
        const res = await fetch("/products", {
            method: "post",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data),
        });        

        if (res.ok === true){
            const result = await res.json();
            console.log('form submit result is:', result);
        }
    };

    return (
        <div className='create-product'>
            <h1 className='title'>Create Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-grp'>
                    <label>Name:</label>
                    <input
                        className='input'
                        type="text"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className='form-grp'>
                    <label>Name in arabic:</label>
                    <input
                        className='input'
                        type="text"
                        {...register("nameAr", { required: true })}
                    />
                    {errors.nameAr && <span>This field is required</span>}
                </div>
                <div className='form-grp'>
                    <label>Price:</label>
                    <input
                        type="number"
                        {...register("price", { required: true })}
                    />
                    {errors.price && <span>This field is required</span>}
                </div>
                <div className='form-group'>
                    <label>Category:</label>
                    <input
                        type="text"
                        {...register("category", { required: true })}
                    />
                    {errors.category && <span>This field is required</span>}
                </div>
                <div className='form-grp'>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        {...register("imageUrl", { required: true })}
                    />
                    {errors.imageUrl && <span>This field is required</span>}
                </div>
                <div className='form-grp'>
                    <input {...register("file", {onChange:onFileChange})}
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}                        
                    />
                    <button 
                        type="button" 
                        onClick={() => document.getElementById('fileInput').click()}
                    >
                        Upload Image
                    </button>
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProductPage;