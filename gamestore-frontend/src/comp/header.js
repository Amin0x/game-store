import React from 'react';
import './Header.css';
import logo from './16788282.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from './menu';

const Header = ({ cartInfo, userInfo }) => {
    return (
        <div className='am-header-container'>
            <header className='am-top-header am-header'>
                <button>English</button>
            </header>
            <header className='am-mid-header am-header'>
                <div className='d-flex algine-items-center'>
                    <div class="am-header-item am-logo">
                        <div><img className='am-logo-logo' src={logo} alt="" /></div>
                    </div>
                    <div class="am-header-item am-search">
                        <div class="container justify-content-center">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="input-group">
                                        <input type="text" class="input-text-garo" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-warning btn-lg" type="button"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="am-header-item">
                        <div className='am-cart'>
                            <a href="/cart"><img className='image' src='' alt='' /></a>
                            <div className='info'>
                                <div className='quantity'></div>
                                <div className='total'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='am-bottom-header am-header'>
                <Menu />
            </header>
        </div>
    );
}

export default Header;