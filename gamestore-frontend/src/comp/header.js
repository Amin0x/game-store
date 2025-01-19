import React from 'react';
import './Header.css';
import logo from './16788282.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from './menu';

const Header = ({cartInfo, userInfo}) => {
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
                                        <input type="text" class="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <div class="input-group-append">
                                            <button class="btn btn-outline-warning btn-lg" type="button"><FontAwesomeIcon icon={["far", "search"]}></FontAwesomeIcon></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="am-header-item">
                        <div className='am-cart'>
                             <a href="/cart"><img className='image' src='' alt=''/></a>
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