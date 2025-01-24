import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaTags, FaList, FaCogs, FaServer, FaUser } from 'react-icons/fa';

const handleLogout = async () => {
    try {
        const response = await fetch("", {
            method: "post"
        })
        if(!response.ok){
            return;
        }

        const data = await response.json();
        
    } catch (error) {
        console.error(error);
    }

}

const Sidebar = () => {
    return (
        <div className="sidebar">
            <aside>
                <p> القائمة </p>
                <Link to="/admin/products">
                    <FaBox /> المنتجات
                </Link>
                <Link to="/admin/brands">
                    <FaTags /> الماركات
                </Link>
                <Link to="/admin/category">
                    <FaList /> الاصناف
                </Link>
                <Link to="/admin/options">
                    <FaCogs /> الاعدادات
                </Link>
                <Link to="/admin/server">
                    <FaServer /> السيرفر
                </Link>
                <Link to="javascript:void(0)">
                    <FaUser class="fa fa-user-o" aria-hidden="true"></FaUser>
                    المستخدمين
                </Link>
                <Link to="javascript:void(0)">
                    <i class="fa fa-laptop" aria-hidden="true"></i>
                    الاعلانات
                </Link>
                <Link to="javascript:void(0)">
                    <i class="fa fa-clone" aria-hidden="true"></i>
                    العروض
                </Link>
                <Link to="javascript:void(0)">
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    سلة المهملات
                </Link>
                <Link to="#" onClick={()=> handleLogout}>
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                    تسجيل الخروج
                </Link>
            </aside>
        </div>
    );
};

export default Sidebar;