import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from './SideBar';
import './css.css'

const CreateProductPage = () => {

    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        imageUrl: '',
        imagePreview: ""
    });

    const { register, handleSubmit, formState: { errors } } = useForm();

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        console.log('Uploading file:', file);

        try {
            const response = await fetch('http://localhost:8080/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Upload successful:', data.url);
                setProduct(prev => ({
                    ...prev,
                    imageUrl: data.url
                }));
                return data.url;
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
                    imagePreview: reader.result
                }));
            };

            reader.readAsDataURL(file);

        }
    }

    const onSubmit = async (data) => {

        const res = await fetch("/products", {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok === true) {
            const result = await res.json();
            console.log('form submit result is:', result);
        }
    };

    return (
        <div className='container page'>
            <Sidebar />
            <div className='content create-product'>
                <div class="form-content">
                    <h1 className='title'>اضافة منتج جديد</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-grp'>
                            <label>الاسم:</label>
                            <input
                                className='input'
                                type="text"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span>هذا الحقل مطلوب</span>}
                        </div>
                        <div className='form-grp'>
                            <label>الاسم بالعربي:</label>
                            <input
                                className='input'
                                type="text"
                                {...register("nameAr", { required: true })}
                            />
                            {errors.nameAr && <span>هذا الحقل مطلوب</span>}
                        </div>
                        <div className='form-grp'>
                            <label>السعر:</label>
                            <input
                                type="number"
                                {...register("price", { required: true })}
                            />
                            {errors.price && <span>هذا الحقل مطلوب</span>}
                        </div>
                        <div className='form-group'>
                            <label>الصنف:</label>
                            <input
                                type="text"
                                {...register("category", { required: true })}
                            />
                            {errors.category && <span>هذا الحقل مطلوب</span>}
                        </div>
                        <div className='form-grp'>
                            <label>الصورة:</label>
                            <input
                                type="text"
                                {...register("imageUrl", { required: true })}
                            />
                            {errors.imageUrl && <span>هذا الحقل مطلوب</span>}
                        </div>
                        <div className='form-grp'>
                            {product.imageUrl && (
                                <div className="image-preview">
                                    <img src={product.imagePreview} alt="Preview" style={{ maxWidth: '200px', marginBottom: '10px' }} />
                                </div>
                            )}
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                accept="image/*"
                                onChange={(e) => {
                                    onFileChange(e);
                                    uploadFile(e.target.files[0]);
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => document.getElementById('fileInput').click()}
                            >
                                اضافة صورة
                            </button>
                        </div>
                        <button type="submit">انشاء</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default CreateProductPage;