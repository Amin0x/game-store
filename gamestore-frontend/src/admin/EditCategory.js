import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import './css.css'

const EditCategory = () => {
    const [data, setData] = useState({
        name: '',
        nameAr: '',
        brand: ''
    });

    const [brands, setBrands] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategory();
        fetchBrands();
    }, []);

    const fetchCategory = async () => {
        try {
            const response = await fetch(`http://localhost:8080/category/${id}`);
            const responsedata = await response.json();
            setData({ ...data, name: responsedata.name, nameAr: responsedata.nameAr, brand: responsedata.brand });
        } catch (error) {
            console.error('Error fetching category:', error);
        }
    };

    const fetchBrands = async () => {
        try {
            const response = await fetch(`http://localhost:8080/brands`);
            const dataBrands = await response.json();
            setBrands(dataBrands);
        } catch (error) {
            console.error('Error fetching category:', error);
        }
    };

    const handleChange = (e) => {
        console.log('Form input changed:', e.target.name, e.target.value);
        const name = e.target.name;
        const value = e.target.value;

        setData({ ...data, [name]: value });
        console.log('Current form data:', data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data being submitted:', data);
        try {
            const response = await fetch(`http://localhost:8080/category/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Category updated successfully' + data);
                navigate('/admin/category');
            } else {
                throw new Error('Failed to update category');
            }
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    return (
        <div className="container page">
            <Sidebar />
            <div className='content'>
                <div class="form-content">
                    <h2>تحديث الصنف</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">اسم الصنف</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="nameAr" className="form-label">الاسم بالعربي</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nameAr"
                                value={data.nameAr}
                                onChange={(e) => handleChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="brand" className="form-label">الماركة</label>
                            <select
                                className="form-control"
                                name="brand"
                                value={data.brand}
                                onChange={(e) => handleChange(e)}
                                required
                            >
                                <option value="">Select a brand</option>
                                {brands.map(brand => (
                                    <option key={brand.id} value={brand.name}>
                                        {brand.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">تحديث</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default EditCategory;