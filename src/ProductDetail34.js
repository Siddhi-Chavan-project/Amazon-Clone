import React, { useState } from 'react';
import "./ProductDetail.css"
const ProductDetail34 = () => {
    const [quantity, setQuantity] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const product = {
        name: '',
        description: ' USHA Diplomat 1200mm 50 Watt Energy Efficient 1 Star Rated Power Saving Ceiling Fan (Brown)'
        ,
        price: 1599,
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
            <img src="https://m.media-amazon.com/images/I/314JIzM4MNL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
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
                <button onClick={handleBuyNow}>Buy Now</button>
            )}
        </div>
    );
};

export default ProductDetail34;