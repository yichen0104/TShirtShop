import React from 'react';
import './HomePage.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Banner from '../../assets/images/banner.png'
import { CartState } from '../../context/ShopContext';
//import HeaderNavBar from './containers/HeaderNavBar/HeaderNavBar';

const HomePage = () => {
    const {state: {cart}} = CartState();
    console.log(cart);
    return(
        <div className="content-container" id="contents">
            <div className="image-container">
            <img src={Banner} alt="Banner"/>
            </div>
            <div className="info-container">
            <div className="index-info-box">
                <p>We don't ship. We are not real.</p>
                We sell shirts. We are passionate about selling shirts. But keep in mind we have no infrastructure, supply chain, or mechanism to actually produce these shirts or fulfill the orders. But the shirts will always be real in your imagination.
            </div>
            <div className="index-info-box">
                <p>Design your own shirt! But help us do that...</p>
                Not only do we not sell shirts, but we let you design your own! Eventually. We actually kinda need your help implementing that. If you could build an actual paint-style inferface that you can make designs in that would be great :)
            </div>
            </div>
        </div>
    );
}

export default HomePage;