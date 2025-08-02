import React from 'react';
import Product from './ProductList';
import { Link } from 'react-router-dom';
import "./Page.css";

function Page13() {
    return (
        <div className='PAGE'>
            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail401">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51edNF+VNuL._AC_UL600_FMwebp_QL65_.jpg"
                            title="HimQuen Kitten heel 2 Inch Wedge Sandals for Women & Girls, Light Weight Floaters Casual and Stylish Sandal for Walking, Working, All Day"
                            price={499}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail402">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/81dKIMFc2FL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Froh Feet Transparent Kitten Heel For Womens "
                            price={999}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail403">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/41ADInTT0lL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Denill Women Cross Strap Cone Heels"
                            price={599}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>
            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail404">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51FpQxWqzOL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Mochi Women Fashion Heel Slip-on"
                            price={1095}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail405">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71GRSuUQg3L._UY695_.jpg"
                            title="Mochi Women Synthetic Leather Wegde Heel Sandal"
                            price={1200}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61gkq9VaxUL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Fashion Heel Block Heels Sandals For Women And Girls"
                            price={348}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>

            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61ooZh+66uL._AC_UL600_FMwebp_QL65_.jpg"
                            title="FROH FEET Casual Heel Sandals Solid Comfortable Sole For Womens & Girls"
                            price={799}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51n2KwcfCNL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Shoetopia Stylish Solid Block Heels For Women & Girls"
                            price={500}
                            rating={5}></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71GRSuUQg3L._AC_UL600_FMwebp_QL65_.jpg"
                            title="Mochi Women Synthetic Leather Wegde Heel Sandal"
                            price={399}
                            rating={5}></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71FOJPIvvlL._AC_UL600_FMwebp_QL65_.jpg"
                            title="JM LOOKS Fashion Casual Strappy Block Heels Sandals For Womens & Girls TSH-1-X"
                            price={799}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51CLWSdGk6L._AC_UL600_FMwebp_QL65_.jpg"
                            title="Shoetopia Patent Multi Cross Strap Block Heeled Sandals For Women & Girls"
                            price={599}
                            rating={5}></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51Ey8HvlkXL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Shoetopia Womens Heels Heeled Sandal"
                            price={699}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51HfMuLeTmL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Shoetopia Womens Heels Heeled Sandal"
                            price={500}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51AO3tIWeTL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Denill Women's Fashionable, Soft & Comfortable Casual Block Heel Sandals"
                            price={499}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61D7v-aUagL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Metro Women Ethnicwear Block Heel Sandal"
                            price={1094}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>



            <div className="foot-panel2">
                <ul>
                    <p>Get to Know Us</p>
                    <Link to="/">About Us</Link>
                    <Link to="/">Careers</Link>
                    <Link to="/">Press Releases</Link>
                    <Link to="/">Amazon Science</Link>
                </ul>
                <ul>
                    <p>Connect with Us</p>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Twitter</Link>
                    <Link to="/">Instagram</Link>
                </ul>
                <ul>
                    <p>Make Money with Us</p>
                    <Link to="/">Sell on Amazon</Link>
                    <Link to="/">Sell under Amazon Accelerator</Link>
                    <Link to="/">Protect and Build Your Brand</Link>
                    <Link to="/">Amazon Global Selling</Link>
                    <Link to="/">Become an Affiliate</Link>
                    <Link to="/">Fulfilment by Amazon</Link>
                    <Link to="/">Advertise Your Products</Link>
                    <Link to="/">Amazon Pay on Merchants</Link>
                </ul>
                <ul>
                    <p>Let Us Help You</p>
                    <Link to="/">COVID-19 and Amazon</Link>
                    <Link>Your Account</Link>
                    <Link>Returns Centre</Link>
                    <Link>100% Purchase Protection</Link>
                    <Link>Amazon App Download</Link>
                    <Link>Help</Link>
                </ul>
            </div>

            <div className="foot-panel3">
                <img className="header_logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='' />

            </div>

            <div className="foot-panel4">
                <div className="pages">
                    <a>Condition of Use</a>
                    <a>Privacy Notice</a>
                    <a>Your Ads Privacy Choices</a>
                </div>
                <div className="copyright">
                    © 1996-2023, Amazon.com, Inc. or its affiliates
                </div>
            </div>



        </div>




    )
}

export default Page13
