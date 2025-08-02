import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";


    function Home() {
        return (
            <div className="home">
                <div class="panel">
                    <div class="panel-all border">
                        <i class='fa-solid fa-bars' alt="solid bars">
                        All
                        </i>
                    </div>
                    <div class="panel-ops">
                        <span className='mini tv border'>Amazon miniTV</span>
                        <span className='Deal border'>Today's Deal </span>
                        <span className='sell border'>Sell </span>
                        <span className='seller border'>Best Sellers</span>
                        <span className='Mobiles border'>Mobiles </span>
                        <span className='Releases border'>New Releases </span>
                        <span className='Service border'>Customer Services </span>
                        <span className='Prime border'>Prime </span>
                    </div>


                    <div class="panel-deals border">
                        Shoppings made easy |Download now
                    </div>


                </div>


                <div className="home">
                    <div className="home__container">
                        <img
                            className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/PUSH/PC_Hero_3000x1200_NTA_1X._CB599338253_.jpg"
                            alt="" />
                    </div>
                </div>

                <div className="shop-section">
                    <div className="box">
                        <div className="box-content">
                            <h2>Gifts</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/91gOt-mIPEL._AC_UL960_FMwebp_QL65_.jpg')" }}></div>
                            <p> <Link to="/page">See more</Link></p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box-content">
                            <h2>Raksha Bandhan Specials</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/81bBvXCelnL._AC_UL600_FMwebp_QL65_.jpg')" }}></div>
                            <p> <Link to="/page1">See more</Link></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <h2>Furniture</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/714uyLlIrVL._AC_UL600_FMwebp_QL65_.jpg')" }}></div>
                            <p> <Link to="/page2">See more</Link></p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box-content">
                            <h2>Electronics</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/61j99uUfXNL._AC_UL600_FMwebp_QL65_.jpg')" }}></div>
                            <p> <Link to="/page3">See more</Link></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <h2>Beauty Picks</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/different-cosmetics-types-scattered-pink-table_23-2148046961.jpg?w=2000')" }}></div>
                            <p> <Link to="/page4">See more</Link></p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box-content">
                            <h2>Saree Picks</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2019/07/1568396426_A_R_Wed32.jpg')" }}></div>
                            <p> <Link to="/page5">See more</Link></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <h2>Jewellery</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_7FGXuPbVCVVMIM88MdfqYr1KD9UKiCCzw&usqp=CAU')" }}></div>
                            <p> <Link to="/page6">See more</Link></p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box-content">
                            <h2>Fashion Trends</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/fashion-studio-image-two-young-women-stylish-casual-spring-outfit-having-fun-show-tongue-bright-trendy-colors-stylish-hairstyle-with-buns-cool-sunglasses-friends-portrait_273443-1142.jpg?w=2000')" }}></div>
                            <p> <Link to="/page7">See more</Link></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <h2>Footwear</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://images.pexels.com/photos/6664300/pexels-photo-6664300.png?auto=compress&cs=tinysrgb&dpr=1&w=500')" }}></div>
                            <p> <Link to="/page8">See more</Link></p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box-content">
                            <h2>Kids Wear</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://assets.vogue.in/photos/5f21496663616a15c5d41925/master/w_4050,h_5062,c_limit/AABACUS.jpg')" }}></div>
                            <p> <Link to="/page9">See more</Link></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <h2>Accessories</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://media.istockphoto.com/id/539853376/photo/top-view-of-female-trendy-accessories-for-woman.webp?b=1&s=170667a&w=0&k=20&c=VSnoCP_f3nG4j95K7uJmKtvRNkrAlnvtR3uHzWA8DZU=')" }}></div>
                            <p><Link to="/page10">See more</Link></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <h2>Ethnics</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://newcdn.kalkifashion.com/media/catalog/product/b/l/blue_embroidered_indo-western_bandi-sg136284_2_.jpg')" }}></div>
                            <p><Link to="/page11">See more</Link></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <h2>Decor</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/91jSXD7MYfL._AC_UL600_FMwebp_QL65_.jpg')" }}></div>
                            <p><Link to="/page12">See more</Link></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <h2>Sandals</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw40046d99/1_front_750/00454652-01.jpg?sw=300&sh=450')" }}></div>
                            <p> <Link to="/page13">See more</Link></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <h2>Bags</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/914dfbwItIL._AC_SY400_.jpg')" }}></div>
                            <p><Link to="/page14">See more</Link></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <h2>Health Care</h2>
                            <div className="box-img" style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20210911/pngtree-personal-care-daytime-skin-care-products-pink-background-placement-photography-map-image_851764.jpg')" }}></div>
                            <p> <Link to="/page15">See more</Link></p>
                        </div>
                    </div>
                </div>

                <div className="foot-panel2">
                    <ul>
                        <p>Get to Know Us</p>
                        <a>About Us</a>
                        <a>Careers</a>
                        <a>Press Releases</a>
                        <a>Amazon Science</a>
                    </ul>
                    <ul>
                        <p>Connect with Us</p>
                        <a>Facebook</a>
                        <a>Twitter</a>
                        <a>Instagram</a>
                    </ul>
                    <ul>
                        <p>Make Money with Us</p>
                        <a>Sell on Amazon</a>
                        <a>Sell under Amazon Accelerator</a>
                        <a>Protect and Build Your Brand</a>
                        <a>Amazon Global Selling</a>
                        <a>Become an Affiliate</a>
                        <a>Fulfilment by Amazon</a>
                        <a>Advertise Your Products</a>
                        <a>Amazon Pay on Merchants</a>
                    </ul>
                    <ul>
                        <p>Let Us Help You</p>
                        <a>COVID-19 and Amazon</a>
                        <a>Your Account</a>
                        <a>Returns Centre</a>
                        <a>100% Purchase Protection</a>
                        <a>Amazon App Download</a>
                        <a>Help</a>
                    </ul>
                </div>

                <div className="foot-panel3">
                    <img className="header_logo"
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />

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

            </div >
        )
    };

    export default Home;