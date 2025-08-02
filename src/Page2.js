import React from 'react';
import Product from './ProductList';
import { Link } from 'react-router-dom';
import "./Page.css";
function Page2() {
    return (
        <div className='PAGE'>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail21">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71i4d+k15xL._AC_UL400_.jpg"
                            title="TRENDY VIBES Two - Seater Leg Sofa Cum Bed Furniture | 4x6 Feet, Grey | for Home Office & Living Room"
                            price={5000}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail22">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/513I7-J-HqL._AC_UL400_.jpg"
                            title="UHUD CRAFTS Beautiful Antique Wooden Fold-able Side Table/End Table/Plant Stand/Stool Living Room Kids Play Furniture Table Round Shape"
                            price={450}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail23">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/81YnapMNAkL._AC_UL400_.jpg"
                            title="Furniture Cafe Wooden Wall Shelves | Corner Hanging Shelf for Living Room Stylish | Zig Zag Home Decor Floating Display Rack Storage Organizer Unique Design"
                            price={674}
                            rating={3} ></Product>
                    </Link>
                </div>
            </div>
            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail24">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71Mk5QqODdL._AC_UL400_.jpg"
                            title="UHUD CRAFTS Wooden Minimalistic Cone Shape Coffee Table/SideTable for Home Decor | Sofa Side Table & End Table Furniture"
                            price={2449}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail25">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51dka33POcL._AC_UL400_.jpg"
                            title="EKRON 6 Section Engineered Wood Storage Organizer Furniture for Commercial"
                            price={3990}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61+80v1eNaL._AC_UL400_.jpg"
                            title="FLOOR DECOR Indoor Outdoor Furniture Garden Patio Seating Set 2 Chairs and Table Set Balcony Furniture Coffee Table Set"
                            price={9999}
                            rating={3} ></Product>
                    </Link>
                </div>
            </div>

            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71M+5bajAxS._AC_UL400_.jpg"
                            title="Luxury furniture Square Foldable Storage Ottoman Coffee Cube Table Multipurpose Foot Rest Short Children Sofa Stool Bench for Bedroom"
                            price={1999}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/51dvVtWkPiL._AC_UL400_.jpg"
                            title="Cello Novelty Compact Plastic 2 Door Cupboard with Shelf(White and Grey)"
                            price={2399}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/41adylirSVL._AC_UL400_.jpg"
                            title="CASPIAN Furniture Super White Engineered Wood Single Door Wardrobe/Cupboard with 4 Shelves"
                            price={6800}
                            rating={3}></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/713VTIhCfOL._AC_UL400_.jpg"
                            title="uberlyfe 3 Seater Sofa Cum Bed - Jute Fabric Washable Cover - Dark Grey with 2 Cushions(Zigzag Pattern) | 6' X 6' Feet"
                            price={11499}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/61X1FRLYjDL._AC_UL400_.jpg"
                            title="Hexagon Furnitures Single Size Engineeredwood Leaf Textured Brownish Black Storage Bed"
                            price={7499}
                            rating={5}></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/71DQ1Uq8zeL._AC_UL400_.jpg"
                            title="SATTVA Wooden Stools for Living Room Sitting Chair for Home Handcrafted Antique Finish"
                            price={899}
                            rating={3} ></Product>
                    </Link>
                </div>
            </div>


            <div className='page'>
                <div className='page_row'>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/41Oqjvpm9gL._AC_UL400_.jpg"
                            title="JEANNERET Floating Armchair Office Chair is a Handcrafted Wooden Chair Solid Wood Living Room Chair (Finish Color - Brown, Pre-Assembled) (Walnut)"
                            price={8200}
                            rating={5}></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/615PtUEDk-S._AC_UL400_.jpg"
                            title="Nilkamal Freedom Mini Medium (FMM) Plastic Cabinet for Storage| Space & Clothes Organizer| Shelves"
                            price={5050}
                            rating={5} ></Product>
                    </Link>
                    <Link to="/ProductDetail">
                        <Product
                            id="123456"
                            image="https://m.media-amazon.com/images/I/91BFDLm-mtL._AC_UL400_.jpg"
                            title="JH Gallery Handcrafted and Emboss Painted Colorful Wood Elephant Shape Garden Table (8 Inches Height, Red)"
                            price={844}
                            rating={3} ></Product>
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

export default Page2