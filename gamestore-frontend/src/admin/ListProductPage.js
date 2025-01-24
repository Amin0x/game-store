import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './SideBar';
import './css.css'

const ListProductPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:8080/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await fetch(`http://localhost:8080/products/${id}`, {
                    method: 'DELETE'
                });
                fetchProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container page">
            <Sidebar/>
            <div class="content">
                <h2>المنتجات</h2>
                <Link to="/admin/products/add" className="btn btn-primary mb-3">
                    اضافة منتج جديد
                </Link>

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>الاسم</th>
                            <th>السعر</th>
                            <th>القسم</th>
                            <th>خيارات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.category}</td>
                                <td>
                                    <Link to={`/admin/products/view/${product.id}`} className="btn btn-info btn-sm me-2">
                                        مشاهدة
                                    </Link>
                                    <Link to={`/admin/products/edit/${product.id}`} className="btn btn-warning btn-sm me-2">
                                        تعديل
                                    </Link>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>
                                        حذف
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav>
                    <ul className="pagination justify-content-center">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index + 1} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => paginate(index + 1)}>
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default ListProductPage;