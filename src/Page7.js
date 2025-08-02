import React from 'react';
import Product from './ProductList';
import { Link } from 'react-router-dom';
import "./Page.css";
function Page7() {
    return (
        <div className='PAGE'>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail71">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61uQknjgWTL._AC_UL400_.jpg"
                            title="CURVSHAPE Instyle Women Designed as per The Latest Trends to Keep You in sync with high Fashion | Multi Color 18 | Free Size"
                            price={699}
                            rating={5}   ></Product>
                    </Link>
                    <Link to="/ProductDetail72">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/31gq8TWUHBL._AC_UL400_.jpg"
                            title="Round Neck Poly Cotton Patient Dress (Blue Check"
                            price={399}
                            rating={5}   ></Product>
                    </Link>
                    <Link to="/ProductDetail73">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/31+qHt1YbmS._AC_UL400_.jpg"
                            title="Trend Sales Fashion Festival wear Solid Pattern Cotton Blend Baby Gown with Flower Pattern(2022)"
                            price={629}
                            rating={5}   ></Product>
                    </Link>
                </div>
            </div>

            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail74">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/81h4mZv6XgS._AC_UL400_.jpg"
                            title="Shiva Trends Women's Mini Dress"
                            price={400}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail75">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/7146TB8MB2L._AC_UL400_.jpg"
                            title="Trend Arrest Dual Floral Printed Tie Up Top"
                            price={639}
                            rating={5}></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61gUUqzWgRS._AC_UL400_.jpg"
                            title="ishin Women's Cotton Above Knee Length A-Line Indo Western Dress"
                            price={1999}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/713EWcF36KL._AC_UL400_.jpg"
                            title="Leriya Fashion Western Dresses for Women | Short A-Line Dress for Girls"
                            price={278}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71W3u5FNfLL._AC_UL400_.jpg"
                            title="Men Casual Shirt"
                            price={799}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51RthiG0RFL._AC_UL400_.jpg"
                            title="Leriya Fashion Shirt for Men | Tropical Leaf Printed Rayon Shirts for Men | Preppy Short Sleeves"
                            price={279}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61mp12NqMsL._AC_UL400_.jpg"
                            title="J B Fashion Track Pant for Men || Track Pants || Lycra Full Elastic Jogger Track Pant (A-TP-01-04)"
                            price={379}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51-ISImNTEL._AC_UL400_.jpg"
                            title="Hopscotch Boys Gray Cotton & Spandex Polka Dot Print Shirt And Pant Set With Bow"
                            price={639}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/41KLQmja5JL._AC_UL400_.jpg"
                            title="Your Fashion Mate Cotton Casual, Regular Fit Tshirt And Lower Clothing Set for Boys"
                            price={1400}
                            rating={5}></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61UIDB6j96L._AC_UL400_.jpg"
                            title="Fashion Dream Girl’s Calf Length Solid Dresses"
                            price={588}
                            rating={5}></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61rRwAzv2FL._AC_UL400_.jpg"
                            title="Fashion Dream Girls Jumpsuit Set"
                            price={567}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51Eh2Z4OGPL._AC_UL400_.jpg"
                            title="Hopscotch Girl's Empire Maxi Dress"
                            price={1999}
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

export default Page7