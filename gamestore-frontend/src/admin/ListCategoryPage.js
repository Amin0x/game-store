import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar';

function ListCategoryPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:8080/category');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/categories/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchCategories();
            }
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    const uploadFile = async (e) => {
        const file = e.target.files[0];
        if(file === undefined)
            return;

        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(`http://localhost:8080/upload`, {
            method: "post",
            body: formData
        });

        if(response.ok)
        {
            const data = await response.json();
            const response2 = await fetch(`http://localhost:8080/category/image/update`, {
                method: "post",
                body: JSON.stringify(data.url)
            });

            if(response2.ok)
            {
                //success
            }
        }

    }

    return (
        <div className="container page">
            <Sidebar />
            <div class="content">
                <h2 className='mb-4'>الاقسام</h2>
                <a href="/admin/category/create" className="btn btn-primary mb-3">
                    اضافة قسم جديد
                </a>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Name (Arabic)</th>
                            <th>Logo</th>
                            <th>Brand</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>{category.nameAr}</td>
                                <td>
                                    <input type='file' id='fileInput' name='file' onChange={(e)=> uploadFile(e)} />
                                    <img
                                        src={"http://localhost:8080/images/" + category.image}
                                        alt={category.name}
                                        width="80"
                                        height="80"
                                        onClick={() => document.getElementById('fileInput').click()}
                                    />
                                </td>
                                <td>{category.brand}</td>
                                <td>
                                    <a
                                        className="btn btn-warning mr-2"
                                        href={`/admin/category/edit/${category.id}`}
                                    >
                                        تعديل
                                    </a>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(category.id)}
                                    >
                                        حذف
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListCategoryPage;
