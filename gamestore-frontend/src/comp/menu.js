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
                    <div className="logo">
                        <img src="logo.png" alt="الشعار" />
                    </div>
                    <ul>
                        <li><a href="#home">الرئيسية</a></li>
                        <li><a href="#about">من نحن</a></li>
                        <li><a href="#services">خدماتنا</a></li>
                        <li><a href="#contact">اتصل بنا</a></li>
                    </ul>
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