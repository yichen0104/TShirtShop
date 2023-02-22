import './CartPage.css';
import {React, useState, useContext, createContext} from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { CartState } from '../../context/ShopContext';
import appRoutes from '../../shared/appRoutes';
//import HeaderNavBar from './containers/HeaderNavBar/HeaderNavBar';

const CartPage = () => {
    const {state: {cart}, dispatch} = CartState();
    const quant = Array.from({length: 20}, (v, k) => k + 1); 
    const getCartItemCount = (CS) => {
        let count = 0;
        CS.forEach(e => {
          count = count + e.quantity;
        });
        const retCount = count;
        console.log(retCount);
        return retCount;
      }
      const getCartTotalPrice = (CS) => {
        let price = 0.00;
        CS.forEach(e => {
            let numPrice = parseFloat(e.price.substring(1));
            price = price + (numPrice * parseInt(e.quantity));
        });
        const retPrice = price;
        return retPrice;
      }

      const changeQuant = (newQuant, cItem) => {
        dispatch({
            type: "REMOVE",
            payload: cItem
        });
        dispatch({
            type: "ADD",
            payload: {
                name: cItem.name,
                image: cItem.image,
                quantity: newQuant,
                color: cItem.color,
                size: cItem.size,
                price: cItem.price
            }
        });
        
      }

    //const [shirtQuant, setShirtQuant] = useState(0);
    return(
        <div className="products-container">
            <h1>My Cart ({getCartItemCount(cart)})</h1>
            <div className="cart-container">
                <div className="cart-left-container">
                    {cart.length === 0?(
                        <div className="cart-left-container" style={{fontSize: 30}}>
                            Your cart is empty         
                        </div>
                        ):(
                            <div className="cart-left-container">
                                {cart.map((cartItem) => {
                                    return(
                                        <div className="cart-item-container">
                                            <div className="cart-item-name">{cartItem.name}</div>
                                            <div className="cart-item-details">
                                                <div className="cart-item-image">
                                                    <img src={cartItem.image} alt="item" style={{width: 300}}></img>
                                                </div>
                                                <div className='cart-item-info'>
                                                    <div className='cart-item-quantity'>Quantity:
                                                    <select
                                                    className="cart-item-quant-sel"
                                                    id="details-sel-quant"
                                                    name="details-sel-quant"
                                                    defaultValue={cartItem.quantity}>
                                                    {quant.map((q) => {
                                                        return(
                                                            <option
                                                            value={q}
                                                            onClick={() => changeQuant(q, cartItem)}
                                                            >{q}
                                                            </option>
                                                        );
                                                    })}
                                                    </select>
                                                    </div>
                                                    
                                                    <div className='cart-item-color'>Color: {cartItem.color}</div>
                                                    <div className='cart-item-size'>Size: {cartItem.size}</div>
                                                    <div className='cart-item-price'>Price (each):{cartItem.price}</div>
                                                    <button
                                                    className="cart-button"
                                                    onClick={() => {
                                                        console.log("REMOVE");
                                                        dispatch({
                                                            type: "REMOVE",
                                                            payload: cartItem
                                                        });
                                                    }}>Remove</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    );
                                    
                                })}       
                            </div>
                            
                        )}
                    
                </div>
                <div className="cart-right-container">
                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="cart-summary-subtotal">
                            <div>Subtotal:</div>
                            <div className="subtotal-number">${getCartTotalPrice(cart).toFixed(2)}</div>
                        </div>
                        <div className="cart-summary-shipping">
                            <div>Est. Shipping:</div>
                            <div className="shipping-number">$6.95</div>
                        </div>
                        <div className="cart-summary-total">
                            <div>Total:</div>
                            <div className="total-number">${(getCartTotalPrice(cart) + 6.95).toFixed(2)}</div>
                        </div>
                        <div className="cart-summary-context">
                            {/** */}
                            <Link id="header-navbar-a" to={appRoutes.notImplemented}>
                            <button className="cart-button">Log in and Checkout</button>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="cart-continue-shopping">
                        <Link id="header-navbar-a" to={appRoutes.products}>
                        <button className="cart-button">Continue Shopping</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;