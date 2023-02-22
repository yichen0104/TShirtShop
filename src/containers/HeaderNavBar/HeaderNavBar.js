import './HeaderNavBar.css';
import React from 'react';
import { Link} from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import SeventhMist from '../../assets/images/seventh_mist.png'
import Cart from '../../assets/images/cart.png'
import appRoutes from '../../shared/appRoutes';
import { CartState } from '../../context/ShopContext';

const toggleNarrowNav = () => {
  var nb = document.getElementById("header-navbar");
    if (nb.style.display === "flex") {
        nb.style.display = "none";
    } else {
        nb.style.display = "flex";
    }
}

const HeaderNavBar = () => {
  const {state: {cart}} = CartState();
  const getCartItemCount = (CS) => {
    let count = 0;
    CS.forEach(e => {
      count = count + e.quantity;
    });
    const retCount = count;
    console.log(retCount);
    return retCount;
  }
  return (
      <div className="header">
      <div className="header-top"></div>
      <div className="header-bar">
        <div className="header-bar-logo">
          <Link to={appRoutes.home}>
            <img src={SeventhMist} height="75"/>
          </Link>
        </div>
        <div className="header-bar-title">
          <h1>A Certain Scientific Apparel</h1>
        </div>
        <Link to={appRoutes.cart} className="cart-btn">
          <img src={Cart} alt="cart" height="35"/>
          <div className="cart-number">{getCartItemCount(cart)}</div>
        </Link>
        
        <button
        className="toggle-nav"
        onClick={toggleNarrowNav}
        >
        MENU
        </button>
      </div>
    
      <div className="header-navbar" id="header-navbar">
        <Link id="header-navbar-a" to={appRoutes.products}>T-SHIRTS</Link>
        <Link id="header-navbar-a" to={appRoutes.notImplemented}>CREATE FROM PICTURE</Link>
        <Link id="header-navbar-a" to={appRoutes.notImplemented}>CREATE YOUR OWN</Link>
        <Link id="header-navbar-a" to={appRoutes.notImplemented}>ABOUT US</Link>
        <Link id="header-navbar-a" to={appRoutes.notImplemented}>LOGIN</Link>
      </div>
      
    </div>
  );
}

export default HeaderNavBar;
