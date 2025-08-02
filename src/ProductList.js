import React from 'react';
import { FaStar } from 'react-icons/fa';
import './ProductList.css';
import { Link } from 'react-router-dom';

const ProductList = ({ image, title, price, rating }) => {
    return (
        <div className="product">
            <img src={image} alt={title} />
            <p>{title}</p>
            <div className="product_rating">
                {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                        <FaStar color={rating >= index + 1 ? '#ffc107' : '#e4e5e9'} />
                    </span>
                ))}
            </div>
            <p className="product_price">Price: ₹{price}</p>
            <Link to="/checkout"><button className='add_a'>Add to cart</button></Link>
            
        </div>
    );
};

export default ProductList