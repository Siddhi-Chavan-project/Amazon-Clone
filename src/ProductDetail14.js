import React, { useState } from 'react';
import "./ProductDetail.css"
const ProductDetail14 = () => {
    const [quantity, setQuantity] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const product = {
        name: '',
        description: ' Mahi Combo of Religious OM with Rudraksha and Crystals Rakhi for Rakshabandhan (Bracelet) (CO1104642GC) for Men '
        ,
        price: 500,
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
            <img src="https://m.media-amazon.com/images/I/61h38QKcgvL._UY695_.jpg" alt="" />
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

export default ProductDetail14;