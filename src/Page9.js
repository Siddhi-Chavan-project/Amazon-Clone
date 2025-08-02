import React from 'react';
import Product from './ProductList';
import { Link } from 'react-router-dom';
import "./Page.css";

function Page9() {
    return (
        <div className='PAGE'>
            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail91">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/31iYoz1YigL._AC_UL600_FMwebp_QL65_.jpg"
                            title="DENGER KID WEAR Kids New Fancy Trendy CottonLycra Full Sleeve Modern T-shirt With Pant"
                            price={388}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail92">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51m-Td-2oJL._UX679_.jpg"
                            title="Hopscotch Boys Formal Set"
                            price={709}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail93">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71nFBvWq5ML._AC_UL600_FMwebp_QL65_.jpg"
                            title="SOUTH SAILOR Kids Boys Tshirt Printed Cotton Tshirts "
                            price={780}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>
            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail94">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/41NytFEV2CL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Badshah New Girl's Maxi Dress"
                            price={375}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail95">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61eU-2gSbgL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Hopscotch Boys Green Cotton All-Over Print T-Shirt With Jacket & Pant Set"
                            price={949}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51-5uGPWDiL._AC_UL600_FMwebp_QL65_.jpg"
                            title="JUGULAR Baby Boys and Girls Cotton Printed Shorts Pack of 3"
                            price={259}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>

            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71eEgYXPDXL._AC_UL600_FMwebp_QL65_.jpg"
                            title="TAGAS KD-202"
                            price={469}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51r9whxwUcL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Hopscotch Girls Cotton Sleeveless Bow Applique Party Dress in Purple Color"
                            price={549}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51COhF+FP3L._AC_UL600_FMwebp_QL65_.jpg"
                            title="Niren Enterprise Polka DOT Frock for Old Kids Girls"
                            price={569}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/816rEiQ6MOL._AC_UL600_FMwebp_QL65_.jpg"
                            title="T2F Girl T-Shirt"
                            price={549}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/7113XqJIZ9L._AC_UL600_FMwebp_QL65_.jpg"
                            title="Wish Karo Baby girl Knee Length Frock Dress"
                            price={600}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://images-eu.ssl-images-amazon.com/images/I/51WdnVfh-VL._AC_UL320_SR320,320_.jpg"
                            title="Wish Karo Baby Girls Cotton Frock Dress - (ctn125rd)"
                            price={400}
                            rating={5} ></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51s9WqTsR0L._AC_SR480,600_.jpg"
                            title="Wish Karo Baby Girls Frock Dress-(fe2783)"
                            price={200}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://images-eu.ssl-images-amazon.com/images/I/81L4rLiwYWL._AC_UL320_SR320,320_.jpg"
                            title="Wish Karo Baby Girls Frock Dress-(fe2903)"
                            price={344}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://images-eu.ssl-images-amazon.com/images/I/71Vt9xjnsZL._AC_UL320_SR320,320_.jpg"
                            title="Wish Karo Baby Girls Frock Dress-(fe2781)"
                            price={234}
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
export default Page9
