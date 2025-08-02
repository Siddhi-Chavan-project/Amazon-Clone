import React from 'react';
import Product from './ProductList';
import { Link } from 'react-router-dom';
import "./Page.css";
function Page5() {
    return (
        <div className='PAGE'>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail51">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71IszooqopL._AC_UL400_.jpg"
                            title="Kuvarba Fashion Women's Banarasi Silk Saree With Unstiched Blouse Piece"
                            price={379}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail52">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/81Pxmepi-mL._AC_UL400_.jpg"
                            title="PERFECTBLUE Women's Digital Linen Blend Saree with Unstitched Blouse Piece"
                            price={359}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail53">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51hABDO3t7L._AC_UL400_.jpg"
                            title="Satrani Women'S Georgette Leheriya Printed Saree With Unstitched Blouse Piece"
                            price={639}
                            rating={5}  ></Product>
                    </Link>
                </div>
            </div>
            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail54">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61-QfaonpML._AC_UL400_.jpg"
                            title="Pratham Blue Women's Silk Saree With Blouse Piece"
                            price={650}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail55">
                        <Product

                            id="123456"
                            image="https://m.media-amazon.com/images/I/71L7l+xbkmL._AC_UL400_.jpg"
                            title="Sidhidata Women's Georgette Digital Printed Ready To Wear one Minute Saree With Unstitched Blouse Piece"
                            price={999}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51Atj-Hb6-L._AC_UL400_.jpg"
                            title="Satrani Women'S Georgette Bandhani Printed Saree With Unstitched Blouse Piece"
                            price={569}
                            rating={5}  ></Product>
                    </Link>
                </div>
            </div>

            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/81PXtEXGcfL._AC_UL400_.jpg"
                            title="Monjolika Fashion Women's Banarasi Silk Blend Woven Work Tussles Saree With Unsttiched Blouse Piece (Monjolika"
                            price={1999}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/81xISlYAIGL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Pandadi Saree Women's Banarasi Paithani Silk Saree With Unstitched Blouse Piece "
                            price={2569}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/510zZkW+GwL._AC_UL600_FMwebp_QL65_.jpg"
                            title="SIRIL Women's Paithani Jacquard Silk Saree with Unstitched Blouse"
                            price={1569}
                            rating={5} ></Product>
                    </Link>
                </div>

            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/81prN4Qm7FL._AC_UL400_.jpg"
                            title="Amazon Brand - Myx Women Women Saree"
                            price={384}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51FoRKgu30L._AC_UL400_.jpg"
                            title="SGF11 Women's Kanjivaram Soft Lichi Silk Saree With Blouse Piece"
                            price={799}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/41t+Bq0HLaL._AC_UL400_.jpg"
                            title="Avantika Fashion Women's Kanjivaram Soft Silk Banarasi Saree With Blouse Piece"
                            price={436}
                            rating={5}  ></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/510fJY4HU9L._AC_UL400_.jpg"
                            title="SIRIL Women's Bandhani Printed Chiffon Saree with Blouse"
                            price={599}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61Y2Y8lL6+L._AC_UL400_.jpg"
                            title="Yashika Women's Jaquard Art Silk Weaving Saree With Blouse Piece"
                            price={569}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71XAzGJXvkL._AC_UL400_.jpg"
                            title="SIRIL Women's Bandhani Printed & Embroidery Work In Lace Georgette Saree with Unstitched Blouse Piece"
                            price={989}
                            rating={5}  ></Product>
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

export default Page5