import React from 'react';
import Product from './ProductList';
import { Link } from 'react-router-dom';
import "./Page.css";
function Page8() {
    return (
        <div className='PAGE'>

            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail81">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/715DtOHh94L._AC_UL600_FMwebp_QL65_.jpg"
                            title="Adidas Mens Throb M Running Shoe"
                            price={1999}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail82">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/81+WX0V8psL._AC_UL600_FMwebp_QL65_.jpg"
                            title=" Adidas Mens Ultimashow Running Shoes"
                            price={2999}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail83">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71KDWykJDfL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Adidas Mens Duramo 10 Running Shoe"
                            price={3999}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>
            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail84">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71TAzJmxClL._UY695_.jpg"
                            title="ASIAN Men's Bouncer-01 Sports,Walking,Gym,Training,Running Shoes"
                            price={699}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail85">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/81A6WtUTVSL._UY695_.jpg"
                            title="ASIAN Men's Plasma-08 Sports Running,Walking & Gym Shoes Lightweight Eva Sole with Extra Comfort Casual Snaeker Shoes for Men's"
                            price={799}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/614+cjRAPwL._AC_UL600_FMwebp_QL65_.jpg"
                            title="OZJI Men's Basketball Casual Boots"
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
                            image="https://m.media-amazon.com/images/I/61hChNd-00L._UX695_.jpg"
                            title="Absolutee Shoes Men's Boot"
                            price={1299}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71fSfFLNWZL._AC_UL600_FMwebp_QL65_.jpg"
                            title="layasa Comfotable Lightweight Casual Sneaker for Women/Girls (Pink, Numeric_4)"
                            price={599}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71iXnDurpPL._AC_UL600_FMwebp_QL65_.jpg"
                            title="SOLETHREADS Torrent | Casual Sneaker Lightweight Cushioned Lace-up Shoes for Women"
                            price={1599}
                            rating={5} ></Product>
                    </Link>

                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61AQu0BjsrL._AC_UL600_FMwebp_QL65_.jpg"
                            title=" Campus Mens 5g-820 Running Shoe"
                            price={1523}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71YF-GYRReL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Bacca Bucci FLAME Original 7-Eye Moto Inspired Mild water proof High top ankle Snow boots for Men"
                            price={1999}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51wWDC-xJgS._AC_SR480,480_.jpg"
                            title="Bacca Bucci Men's RIDGE casual boot for all day wear, biking & fashion -Genuine leather, water resistant & hand crafted"
                            price={1299}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71Ye-nyK3YL._AC_UL600_FMwebp_QL65_.jpg"
                            title="DOCTOR EXTRA SOFT Flexible Memory Foam Women's Shoes "
                            price={699}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71kH7m61oBL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Marc Loire Women's Lightweight Athleisure Knitted Active Wear Slip-On Sneaker Shoes for Sports"
                            price={799}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61MGVjbYydL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Campus Women's Alexa Running Shoes"
                            price={1019}
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
export default Page8
