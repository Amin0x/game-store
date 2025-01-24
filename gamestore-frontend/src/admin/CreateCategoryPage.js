import React, { useState } from 'react';
import Sidebar from './SideBar';
//import { toast } from 'react-toastify';
import './css.css'


const CreateCategoryPage = () => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch('/api/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name })
            });
            if (!response.ok) {
                throw new Error('Error creating category');
            }
            //toast.success('Category created successfully');
            setName('');
        } catch (error) {
            //toast.error(error.message || 'Error creating category');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container page mx-auto">
            <Sidebar />
            <div class="form-content">
                <div className='content'>
                    <h1 className="text-2xl font-bold mb-6">انشاء صنف جديد</h1>
                    <form onSubmit={handleSubmit} className="max-w-md">
                        <div className="form-group mb-4">
                            <label htmlFor="name" className="block mb-2">
                                الاسم
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-input"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                        >
                            {loading ? 'Creating...' : 'Create Category'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateCategoryPage;