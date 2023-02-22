import './ProductPage.css';
import { Switch, Route, Redirect, useParams, Link } from 'react-router-dom';
import { React, useState } from 'react';
import shirts from '../../../shared/shirts';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import DefaultMaleFront from "../../../assets/shirt_images/default-m-front.png";
import { CartState } from '../../../context/ShopContext';
import appRoutes from '../../../shared/appRoutes';

const setDefaultImg = () => {
    {/**this.src='shirt_images/not-found.png'; */}
    console.log('setDefaultImg');
    document.getElementById('details-shirt-image').src = DefaultMaleFront;
}

const enableCartBtn = () => {
    document.getElementById("item-cart-button").disabled = false; 
}

const disableCartBtn = () => {
    document.getElementById("item-cart-button").disabled = true; 
}


const ProductPage = () => {
    const sId = useParams();
    const shirtDetails = shirts[sId.id];
    const { name, description, price, colors} = shirtDetails;
    // number 1 to 20
    const quant = Array.from({length: 20}, (v, k) => k + 1); 
    // all sizes
    const itemSizes = ["Women's XS", "Women's S", "Women's M", "Women's L", "Women's XL", "Women's 2XL",
    "Men's XS", "Men's S", "Men's M", "Men's L", "Men's XL", "Men's 2XL"];

    const [shirtFileName, setShirtFileName] = useState(shirtDetails.colors.white.front);
    const [shirtSize, setShirtSize] = useState("Size");
    const [shirtQuant, setShirtQuant] = useState(1);
    const [side, setSide] = useState("front");
    const [color, setColor] = useState("white");

    const {state: {cart}, dispatch} = CartState();
    
    const setFrontSide = () => {
        setSide("front");
        if(color === "red"){
            setShirtFileName(shirtDetails.colors.red.front);
        }else if (color === "blue"){
            setShirtFileName(shirtDetails.colors.blue.front);
        }else if (color === "green"){
            setShirtFileName(shirtDetails.colors.green.front);
        }else if (color === "yellow"){
            setShirtFileName(shirtDetails.colors.yellow.front);
        }else if (color === "white"){
            setShirtFileName(shirtDetails.colors.white.front);
        }else if (color === "pink"){
            setShirtFileName(shirtDetails.colors.pink.front);
        }
    }

    const setBackSide = () => {
        setSide("back");
        if(color === "red"){
            setShirtFileName(shirtDetails.colors.red.back);
        }else if (color === "blue"){
            setShirtFileName(shirtDetails.colors.blue.back);
        }else if (color === "green"){
            setShirtFileName(shirtDetails.colors.green.back);
        }else if (color === "yellow"){
            setShirtFileName(shirtDetails.colors.yellow.back);
        }else if (color === "white"){
            setShirtFileName(shirtDetails.colors.white.back);
        }else if (color === "pink"){
            setShirtFileName(shirtDetails.colors.pink.back);
        }
    }
    
    const changeImg = (clr) => {
        setColor(clr);
        if(side === "front"){
            if(clr === "red"){
                setShirtFileName(shirtDetails.colors.red.front);
            }else if (clr === "blue"){
                setShirtFileName(shirtDetails.colors.blue.front);
            }else if (clr === "green"){
                setShirtFileName(shirtDetails.colors.green.front);
            }else if (clr === "yellow"){
                setShirtFileName(shirtDetails.colors.yellow.front);
            }else if (clr === "white"){
                setShirtFileName(shirtDetails.colors.white.front);
            }else if (clr === "pink"){
                setShirtFileName(shirtDetails.colors.pink.front);
            }
        }else{
            if(clr === "red"){
                setShirtFileName(shirtDetails.colors.red.back);
            }else if (clr === "blue"){
                setShirtFileName(shirtDetails.colors.blue.back);
            }else if (clr === "green"){
                setShirtFileName(shirtDetails.colors.green.back);
            }else if (clr === "yellow"){
                setShirtFileName(shirtDetails.colors.yellow.back);
            }else if (clr === "white"){
                setShirtFileName(shirtDetails.colors.white.back);
            }else if (clr === "pink"){
                setShirtFileName(shirtDetails.colors.pink.back);
            }
        }
    }
    const clickShirtSize = (s) => {
        enableCartBtn();
        setShirtSize(s);
    }

    const clickDefaultSize = () => {
        setShirtSize("Size");
        disableCartBtn();
    }

    return(
        <div className="products-container" id="products-container">
            <h1 id="shirt-name">{name}</h1>
            <div className="info-container" id="info-container">
                <div className="details-container">
                    <div className="details-image-panel">
                        <img src={shirtFileName}
                        id="details-shirt-image"
                        onError={setDefaultImg}/>
                    </div>
                    <div className="details-info-panel">
                        <div className="details-price">{price}</div>
                        <div className="details-description">{description}</div>
                        <div className="details-fb">Side: 
                            <button className="item-button" id="toggle-front" onClick={setFrontSide}>
                            Front
                            </button>
                            <button className="item-button" id="toggle-back" onClick={setBackSide}>
                            Back
                            </button>
                        </div>
                        <div className="details-colors">Color:
                            <div>
                            {Object.entries(colors).map((clr) => {
                                //console.log(clr);
                                return(
                                    <button className="details-button-color"
                                    id="toggle-color"
                                    style={{backgroundColor: clr[0]}}
                                    onClick={() => changeImg(clr[0])}>
                                    {clr[0]}
                                    </button>
                                );
                            })}
                            </div>
                        </div>
                        <div className="details-quantity">
                            Quantity:<br></br>
                            <select id="details-sel-quant" name="details-sel-quant">
                            {quant.map((q) => {
                                return(
                                    <option value={q} onClick={() => setShirtQuant(q)}>{q}</option>
                                );
                            })}
                            </select>
                        </div>
                        <div className="details-size">
                            Size:<br></br>
                            <select id="details-sel-size" name="details-sel-size" defaultValue={shirtSize}>
                                <option value="Size" onClick={clickDefaultSize}>Size</option>
                                {itemSizes.map((s) => {
                                return(
                                    <option value={s} onClick={() => clickShirtSize(s)}>{s}</option>
                                );
                                })}
                            </select>
                        </div>

                        <div className="details-cart">
                            <Link id="header-navbar-a" to={appRoutes.cart}>
                                <button className="item-cart-button"
                                    id="item-cart-button"
                                    style={{padding: 15}}
                                    onClick={() => {
                                        dispatch({
                                            type: "ADD",
                                            payload: {
                                                name: name,
                                                image: shirtFileName,
                                                quantity: shirtQuant,
                                                color: color,
                                                size: shirtSize,
                                                price: price
                                            }
                                        });
                                    }}>Add to cart
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductPage.propTypes = {
    direction: PropTypes.string,
};

export default ProductPage;