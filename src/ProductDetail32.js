import React, { useState } from 'react';
import "./ProductDetail.css"
import { Link } from 'react-router-dom';

const ProductDetail32 = () => {
    const [quantity, setQuantity] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const product = {
        name: '',
        description: ' Redmi A2 (Sea Green, 2GB RAM, 32GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM'
        ,
        price: 6499,
        offers: '10% off for a limited time!',
        sizes: ['Small', 'Medium', 'Large'],
        colors: ['Red', 'Blue', 'Green'],
    };

    const handleAddToCart = () => {
        // Here, you would typically add the product to the cart state.
        setIsAddedToCart(true);
    };

    const handleBuyNow = () => {
        // Here, you would typically navigate to the checkout page.
    };

    return (
        <div className="product-details">
            <img src="https://m.media-amazon.com/images/I/41zxerd4OJL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <p>{product.offers}</p>

            <div>
                <label>Size:</label>
                <select>
                    {product.sizes.map((size, index) => (
                        <option key={index} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Color:</label>
                <select>
                    {product.colors.map((color, index) => (
                        <option key={index} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Quantity:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>

            {!isAddedToCart ? (
                <button onClick={handleAddToCart}>Add to Cart</button>
            ) : (
                <Link to="/checkout">
                <button onClick={handleBuyNow}>Buy Now</button>
                </Link>
            )}
        </div>
    );
};

export default ProductDetail32;