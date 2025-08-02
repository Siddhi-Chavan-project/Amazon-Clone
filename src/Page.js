import React from 'react';
import Product from './ProductList';
import { Link } from 'react-router-dom';
import "./Page.css";

function Page() {
    
    return (
        <div className='PAGE'>
            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51JdP4lk3UL._AC_UL600_FMwebp_QL65_.jpg"
                            title="Clay Craft CC MM1 Swiss REZ7 Microwave Safe Coffee Mug for Gift to Couples "
                            price={100}
                            rating={5}></Product>
                    </Link>
                    <Link to="/ProductDetail1">
                        <Product
                            id="24526"
                            image="https://m.media-amazon.com/images/I/51NxUwmuHNL._AC_UL400_.jpg"
                            title="Radiksa Double Wall Stainless Steel Thermo 500ml Vacuum Insulated  "
                            price={400}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail2">
                        <Product
                            id="23456"
                            image="https://m.media-amazon.com/images/I/6140Y0u5aqL._AC_UL400_.jpg"
                            title="Red Rose Flower with Golden Leaf with Gift Box with Carry Bag "
                            price={199}
                            rating={3}  ></Product>
                    </Link>
                </div>
            </div>

            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail3">
                        <Product
                            id="03456"
                            image="https://m.media-amazon.com/images/I/91AF1b1HKDL._AC_UL400_.jpg"
                            title="Jaszz Art Brass Kalpavriksha Tree Showpiece (9.5 inches, Yellow)"
                            price={2803}
                            rating={5}  ></Product>
                    </Link>

                    <Link to="/ProductDetail4">
                        <Product
                            id="163456"
                            image="https://m.media-amazon.com/images/I/81craG8eNhL._AC_UL400_.jpg"
                            title="WildHorn Gift Hamper for Men I Leather Wallet & Belt Combo "
                            price={899}
                            rating={3}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="12126"
                            image="https://m.media-amazon.com/images/I/41CH0PwJ3oL._AC_UL400_.jpg"
                            title="Aousome Personalized Gift Custom Photo  Name Wish Ceramic Mug "
                            price={299}
                            rating={5}  ></Product>
                    </Link>
                </div>
            </div>

            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="23256"
                            image="https://m.media-amazon.com/images/I/91ObDp3pKlL._AC_UL400_.jpg"
                            title="Jiada Return Gifts Set of Cartoon Printed Kids Haversack Bags "
                            price={349}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="09456"
                            image="https://m.media-amazon.com/images/I/81ZSeQgVX3L._AC_UL400_.jpg"
                            title="TIED RIBBONS Raksha Bandhan Gift for Brother- Premium Rakhi "
                            price={249}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="12342"
                            image="https://m.media-amazon.com/images/I/51zTckSsvSL._AC_UL400_.jpg"
                            title="YouBella Hair Jewellery Clip Set for Baby Band for Girls (Pink)"
                            price={281}
                            rating={3}  ></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="12342"
                            image="https://m.media-amazon.com/images/I/51PGNa9uLCL._AC_UL400_.jpg"
                            title="Acnos® Premium Girl's Special Quality Different Heart Shape Bangle Analog Watch "
                            price={278}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="93456"
                            image="https://m.media-amazon.com/images/I/71hJrVOEoKL._AC_UL400_.jpg"
                            title="Prime Deals Frozen Stationary Kit Pencil Pen Book Eraser Sharpener  "
                            price={244}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="12326"
                            image="https://m.media-amazon.com/images/I/616AAEC5aZL._AC_UL400_.jpg"
                            title="Sanjis Enterprise birthday gift combo Cartoon hard-shell Crossbody Hand Purse and bag"
                            price={529}
                            rating={3}  ></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="12349"
                            image="https://m.media-amazon.com/images/I/61AFhefxAEL._AC_UL400_.jpg"
                            title="Yellow Chimes Bracelet for Women and Girls Blue Crystal Bracelets for Women "
                            price={199}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="73456"
                            image="https://m.media-amazon.com/images/I/51Y+8bEJDkL._AC_UL400_.jpg"
                            title="FunBlast Piggy Bank - Unicorn Coin Box for Kids, Money Bank for Kids)"
                            price={499}
                            rating={5}  ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="83456"
                            image="https://m.media-amazon.com/images/I/61Pg1H7U15L._AC_UL400_.jpg"
                            title="Storio Kids Toys LCD Writing Tablet 8.5Inch E-Note Pad Best Gift"
                            price={218}
                            rating={3}  ></Product>
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

export default Page