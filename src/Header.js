import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <Link to="/Home">
                <img
                    className="header__logo border"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon Logo"
                />
            </Link>

            <div className='nav-address'>
                <p className='add-first'>Hello</p>
                <div className='add-icon'>
                    <i className="fa-solid fa-location-dot"></i>
                    <p className='add-second border'>Select your address</p>
                </div>
            </div>

            <div className="header__search">
                <select className="search-select border">
                    <option value="">All</option>
                    <option>Alexa Skills</option>
                    <option>Amazon Devices</option>
                    <option>Amazon Fashion</option>
                    <option>Amazon Fresh</option>
                    <option>Amazon Pharmacy</option>
                    <option>Appliances</option>
                    <option>Apps & Games</option>
                    <option>Audible Audiobooks</option>
                    <option>Baby</option>
                    <option>Books</option>
                </select>

                <input className="header__searchInput border" placeholder='Search Amazon' />
                <div className="search__icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <div className="language-container border">
                <p>English</p>
                <div className="lang-image">
                    <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="India Flag" />
                </div>
            </div>

            <div className="header__nav">
                <div className='header__option'>
                    <Link to="/signin" className="link">
                        <span>Hello, Sign In</span>
                    </Link>
                    <Link to="/signin">
                        <span className='header__optionlinetwo border'>Accounts & Lists</span>
                    </Link>
                </div>

                <div className='header__option'>
                    <span className='header__optionlineone border'>Returns</span>
                    <span className='header__optionlinetwo border'>& Orders</span>
                </div>

                <Link to="/checkout" className='header_optionBasket border'>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className='header_basketcount'>0</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;
