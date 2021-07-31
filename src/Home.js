import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className="home__image"/>
            
                <div className="home__row">
                    <Product id="12321341"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Bussines" 
                    price={470} 
                    image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg" 
                    rating={5} />
                    {/* Product */}
                    <Product id="49538094"
                    title="Fire TV Stick (3rd Gen, 2021) with all-new Alexa Voice Remote (includes TV and app controls) | HD streaming device | 2021 release" 
                    price={2399.00} 
                    image="https://m.media-amazon.com/images/I/51CgKGfMelL._AC_UY218_.jpg" 
                    rating={4} />
                </div>
                <div className="home__row">
                    {/* Product */}
                    <Product id="4903850"
                    title="Spigen TPU and PC/Poly Carbonate Ultra Hybrid Back Cover Case Compatible with iPhone 12 Pro Max - Navy Blue" 
                    price={1359.00} 
                    image="https://m.media-amazon.com/images/I/61eivltvyFL._AC_UY218_.jpg" 
                    rating={4} />
                    {/* Product */}
                    <Product id="90829332"
                    title="Echo Dot (4th Gen, 2020 release)| #1 smart speaker brand in India with Alexa (Blue)" 
                    price={2259.00} 
                    image="https://images-eu.ssl-images-amazon.com/images/I/61MbLLagiVL._AC_UL100_SR100,100_.jpg" 
                    rating={4} />
                    {/* Product */}
                    <Product id="23445930"
                    title="New Apple Watch SE (GPS, 40mm) - Space Grey Aluminium Case with Black Sport Band" 
                    price={26900.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/71bUKrOPzYL._SL1500_.jpg" 
                    rating={2} />
                </div> 

                <div className="home__row">
                    <Product id="3254354345"
                    title="Samsung 163 cm (65 inches) 4K Ultra HD Smart LED TV UA65TU8570UXXL (Black) (2020 Model)" 
                    price={117999.00} 
                    image="https://images-na.ssl-images-amazon.com/images/I/91wKQnyG%2BLL._SL1500_.jpg" 
                    rating={2} />   
                </div>        
            </div>
        </div>
    )
}

export default Home
