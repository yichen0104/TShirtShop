import React from 'react';
import './NotImplemented.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Scotty from '../../assets/images/scotty.png'
//import HeaderNavBar from './containers/HeaderNavBar/HeaderNavBar';

const NotImplemented = () => {
    return(
        <div className="ni-container">
            <div className="ni-image">
            <img src={Scotty} alt="NotImplemented"/>
            </div>
            <br/>
            <div className="ni-text">
            <p>
                Opps, this page doesn't exist yet... how about a shirt from last page?
            </p>
            </div>
        </div>
    );
}

export default NotImplemented;