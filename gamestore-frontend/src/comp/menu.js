import { useState } from 'react';
import './menu.css';

const Menu = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <div className="menu">
                <nav className="desktop-menu">
                    <div class="desktop-menu-wrapper">
                        <ul>
                            <li><a href="#home">الرئيسية</a></li>
                            <li><a href="#home">الأكثر مبيعا</a></li>
                            <li><a href="#home">الكروت</a></li>
                            <li><a href="#about">الالعاب</a></li>
                            <li><a href="#services">البرامج</a></li>
                            <li><a href="#services">التلفزيون</a></li>
                            <li><a href="#contact">الاجهزة</a></li>
                        </ul>
                        <div className='am-dropdown'>
                            <div className='am-dropdown-button'>كل الاقسام</div>
                            <div className='am-dropdown-menu'>
                                <ul>
                                    <li><a href="">بلاي استيشن كونسول</a></li>
                                    <li><a href="">العاب بلاي استيشن 5</a></li>
                                    <li><a href="">العاب بلاي استيشن 4</a></li>
                                    <li><a href="">كروت شحن الالعاب</a></li>
                                    <li><a href="">كروت قوقل بلاي</a></li>
                                    <li><a href="">كروت</a></li>
                                    <li><a href="">اكس بوكس</a></li>
                                    <li><a href="">العاب اكس بوكس</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="mobile-menu">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="logo">
                            <img src="logo.png" alt="الشعار" />
                        </div>
                        <button className="menu-toggle" onClick={handleToggle}>☰</button>
                    </div>
                    <ul className={`mobile-menu-items ${isActive ? 'active' : ''}`}>
                        <li><a href="#home">الرئيسية</a></li>
                        <li><a href="#about">من نحن</a></li>
                        <li><a href="#services">خدماتنا</a></li>
                        <li><a href="#contact">اتصل بنا</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menu;