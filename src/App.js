import React, { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import SignInPage from './SignInPage';
import RegistrationForm from './RegistrationForm';
import Cart from './Cart';
import Home from './Home';
import Page from './Page';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';
import Page11 from './Page11';
import Page12 from './Page12';
import Page13 from './Page13';
import Page14 from './Page14';
import Page15 from './Page15';
import Checkout from './Checkout';
import './App.css';
import ProductDetail from "./ProductDetail";
import ProductDetail1 from "./ProductDetail1";
import ProductDetail2 from "./ProductDetail2";
import ProductDetail3 from "./ProductDetail3";
import ProductDetail4 from "./ProductDetail4";

import ProductDetail11 from "./ProductDetail11";
import ProductDetail12 from "./ProductDetail12";
import ProductDetail13 from "./ProductDetail13";
import ProductDetail14 from "./ProductDetail14";
import ProductDetail15 from "./ProductDetail15";

import ProductDetail21 from "./ProductDetail21";
import ProductDetail22 from "./ProductDetail22";
import ProductDetail23 from "./ProductDetail23";
import ProductDetail24 from "./ProductDetail24";
import ProductDetail25 from "./ProductDetail25";

import ProductDetail31 from "./ProductDetail31";
import ProductDetail32 from "./ProductDetail32";
import ProductDetail33 from "./ProductDetail33";
import ProductDetail34 from "./ProductDetail34";
import ProductDetail35 from "./ProductDetail35";

import ProductDetail41 from "./ProductDetail41";
import ProductDetail42 from "./ProductDetail42";
import ProductDetail43 from "./ProductDetail43";
import ProductDetail44 from "./ProductDetail44";
import ProductDetail45 from "./ProductDetail45";

import ProductDetail51 from "./ProductDetail51";
import ProductDetail52 from "./ProductDetail52";
import ProductDetail53 from "./ProductDetail53";
import ProductDetail54 from "./ProductDetail54";
import ProductDetail55 from "./ProductDetail55";

import ProductDetail61 from "./ProductDetail61";
import ProductDetail62 from "./ProductDetail62";
import ProductDetail63 from "./ProductDetail63";
import ProductDetail64 from "./ProductDetail64";
import ProductDetail65 from "./ProductDetail65";



import ProductDetail71 from "./ProductDetail71";
import ProductDetail72 from "./ProductDetail72";
import ProductDetail73 from "./ProductDetail73";
import ProductDetail74 from "./ProductDetail74";
import ProductDetail75 from "./ProductDetail75";

import ProductDetail81 from "./ProductDetail81";
import ProductDetail82 from "./ProductDetail82";
import ProductDetail83 from "./ProductDetail83";
import ProductDetail84 from "./ProductDetail84";
import ProductDetail85 from "./ProductDetail85";

import ProductDetail91 from "./ProductDetail91";
import ProductDetail92 from "./ProductDetail92";
import ProductDetail93 from "./ProductDetail93";
import ProductDetail94 from "./ProductDetail94";
import ProductDetail95 from "./ProductDetail95";

import ProductDetail101 from "./ProductDetail101";
import ProductDetail102 from "./ProductDetail102";
import ProductDetail103 from "./ProductDetail103";
import ProductDetail104 from "./ProductDetail104";
import ProductDetail105 from "./ProductDetail105";

import ProductDetail201 from "./ProductDetail201";
import ProductDetail202 from "./ProductDetail202";
import ProductDetail203 from "./ProductDetail203";
import ProductDetail204 from "./ProductDetail204";
import ProductDetail205 from "./ProductDetail205";

import ProductDetail301 from "./ProductDetail301";
import ProductDetail302 from "./ProductDetail302";
import ProductDetail303 from "./ProductDetail303";
import ProductDetail304 from "./ProductDetail304";
import ProductDetail305 from "./ProductDetail305";

import ProductDetail401 from "./ProductDetail401";
import ProductDetail402 from "./ProductDetail402";
import ProductDetail403 from "./ProductDetail403";
import ProductDetail404 from "./ProductDetail404";
import ProductDetail405 from "./ProductDetail405";

import ProductDetail501 from "./ProductDetail501";
import ProductDetail502 from "./ProductDetail502";
import ProductDetail503 from "./ProductDetail503";
import ProductDetail504 from "./ProductDetail504";
import ProductDetail505 from "./ProductDetail505";
import Payment from './Payment';


function App() {
    return (
        
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/payment" element={<Payment/>} />
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/page" element={<Page />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                    <Route path="/page5" element={<Page5 />} />
                    <Route path="/page6" element={<Page6 />} />
                    <Route path="/page7" element={<Page7 />} />
                    <Route path="/page8" element={<Page8 />} />
                    <Route path="/page9" element={<Page9 />} />
                    <Route path="/page10" element={<Page10 />} />
                    <Route path="/page11" element={<Page11 />} />
                    <Route path="/page12" element={<Page12 />} />
                    <Route path="/page13" element={<Page13 />} />
                    <Route path="/page14" element={<Page14 />} />
                    <Route path="/page15" element={<Page15 />} />
                    <Route path="/ProductDetail" element={<ProductDetail />} />
                    <Route path="/ProductDetail1" element={<ProductDetail1 />} />
                    <Route path="/ProductDetail2" element={<ProductDetail2 />} />
                    <Route path="/ProductDetail3" element={<ProductDetail3 />} />
                    <Route path="/ProductDetail4" element={<ProductDetail4 />} />

                    <Route path="/ProductDetail11" element={<ProductDetail11 />} />
                    <Route path="/ProductDetail12" element={<ProductDetail12 />} />
                    <Route path="/ProductDetail13" element={<ProductDetail13 />} />
                    <Route path="/ProductDetail14" element={<ProductDetail14 />} />
                    <Route path="/ProductDetail15" element={<ProductDetail15 />} />

                    <Route path="/ProductDetail21" element={<ProductDetail21 />} />
                    <Route path="/ProductDetail22" element={<ProductDetail22 />} />
                    <Route path="/ProductDetail23" element={<ProductDetail23 />} />
                    <Route path="/ProductDetail24" element={<ProductDetail24 />} />
                    <Route path="/ProductDetail25" element={<ProductDetail25 />} />

                    <Route path="/ProductDetail31" element={<ProductDetail31 />} />
                    <Route path="/ProductDetail32" element={<ProductDetail32 />} />
                    <Route path="/ProductDetail33" element={<ProductDetail33 />} />
                    <Route path="/ProductDetail34" element={<ProductDetail34 />} />
                    <Route path="/ProductDetail35" element={<ProductDetail35 />} />

                    <Route path="/ProductDetail41" element={<ProductDetail41 />} />
                    <Route path="/ProductDetail42" element={<ProductDetail42 />} />
                    <Route path="/ProductDetail43" element={<ProductDetail43 />} />
                    <Route path="/ProductDetail44" element={<ProductDetail44 />} />
                    <Route path="/ProductDetail45" element={<ProductDetail45 />} />

                    <Route path="/ProductDetail51" element={<ProductDetail51 />} />
                    <Route path="/ProductDetail52" element={<ProductDetail52 />} />
                    <Route path="/ProductDetail53" element={<ProductDetail53 />} />
                    <Route path="/ProductDetail54" element={<ProductDetail54 />} />
                    <Route path="/ProductDetail55" element={<ProductDetail55 />} />

                    <Route path="/ProductDetail61" element={<ProductDetail61 />} />
                    <Route path="/ProductDetail62" element={<ProductDetail62 />} />
                    <Route path="/ProductDetail63" element={<ProductDetail63 />} />
                    <Route path="/ProductDetail64" element={<ProductDetail64 />} />
                    <Route path="/ProductDetail65" element={<ProductDetail65 />} />

                    <Route path="/ProductDetail71" element={<ProductDetail71 />} />
                    <Route path="/ProductDetail72" element={<ProductDetail72 />} />
                    <Route path="/ProductDetail73" element={<ProductDetail73 />} />
                    <Route path="/ProductDetail74" element={<ProductDetail74 />} />
                    <Route path="/ProductDetail75" element={<ProductDetail75 />} />

                    <Route path="/ProductDetail81" element={<ProductDetail81 />} />
                    <Route path="/ProductDetail82" element={<ProductDetail82 />} />
                    <Route path="/ProductDetail83" element={<ProductDetail83 />} />
                    <Route path="/ProductDetail84" element={<ProductDetail84 />} />
                    <Route path="/ProductDetail85" element={<ProductDetail85 />} />

                    <Route path="/ProductDetail91" element={<ProductDetail91 />} />
                    <Route path="/ProductDetail92" element={<ProductDetail92 />} />
                    <Route path="/ProductDetail93" element={<ProductDetail93 />} />
                    <Route path="/ProductDetail94" element={<ProductDetail94 />} />
                    <Route path="/ProductDetail95" element={<ProductDetail95 />} />

                    <Route path="/ProductDetail101" element={<ProductDetail101 />} />
                    <Route path="/ProductDetail102" element={<ProductDetail102 />} />
                    <Route path="/ProductDetail103" element={<ProductDetail103 />} />
                    <Route path="/ProductDetail104" element={<ProductDetail104 />} />
                    <Route path="/ProductDetail105" element={<ProductDetail105 />} />

                    <Route path="/ProductDetail201" element={<ProductDetail201 />} />
                    <Route path="/ProductDetail202" element={<ProductDetail202 />} />
                    <Route path="/ProductDetail203" element={<ProductDetail203 />} />
                    <Route path="/ProductDetail204" element={<ProductDetail204 />} />
                    <Route path="/ProductDetail205" element={<ProductDetail205 />} />

                    <Route path="/ProductDetail301" element={<ProductDetail301 />} />
                    <Route path="/ProductDetail302" element={<ProductDetail302 />} />
                    <Route path="/ProductDetail303" element={<ProductDetail303 />} />
                    <Route path="/ProductDetail304" element={<ProductDetail304 />} />
                    <Route path="/ProductDetail305" element={<ProductDetail305 />} />


                    <Route path="/ProductDetail401" element={<ProductDetail401 />} />
                    <Route path="/ProductDetail402" element={<ProductDetail402 />} />
                    <Route path="/ProductDetail403" element={<ProductDetail403 />} />
                    <Route path="/ProductDetail404" element={<ProductDetail404 />} />
                    <Route path="/ProductDetail405" element={<ProductDetail405 />} />

                    <Route path="/ProductDetail501" element={<ProductDetail501 />} />
                    <Route path="/ProductDetail502" element={<ProductDetail502 />} />
                    <Route path="/ProductDetail503" element={<ProductDetail503 />} />
                    <Route path="/ProductDetail504" element={<ProductDetail504 />} />
                    <Route path="/ProductDetail505" element={<ProductDetail505 />} />
                    <Route
                        path="/*"
                        element={
                            <> 
                                <Home />
                            </>
                        }
                    />
                </Routes>
            </div>
    
    );
}

export default App;
