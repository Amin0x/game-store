import { useEffect, useState } from "react";
import Sidebar from "./SideBar";


const ListBrand = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchBrands = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:8080/brands');
            const data = await response.json();
            setBrands(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {        
        fetchBrands();
    }, []);

    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error: {error}</div>);

    return (
        <div className="container page">
            <Sidebar />
            <div className="content">                
                <h2>الانواع</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>الاسم</th>
                            <th>الخيارات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map(brand => (
                            <tr key={brand.id}>
                                <td>{brand.id}</td>
                                <td>{brand.name}</td>
                                <td>
                                    <button className="btn btn-edit">تعديل</button>
                                    <button className="btn btn-delete">حذف</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListBrand;