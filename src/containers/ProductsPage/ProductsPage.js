import './ProductsPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import shirts from '../../shared/shirts';
import appRoutes from '../../shared/appRoutes';
import { CartState } from '../../context/ShopContext';


const ProductsPage = () => {
    console.log(shirts);
    const {state: {cart}} = CartState();
    return(
        <div className="products-container">
            <h1>Our T-shirts</h1>
            <div className="info-container" id="info-container">
                <div className="test-styling">

                {shirts.map((shirt, index) => {
                    //console.log(index);
                    const routeName = appRoutes.products + "/" + index;
                    return (
                        <div className="item-info-box" key={shirt.name}>
                            <img src={shirt.colors.white.front}/>
                            <div className="item-title">{shirt.name}</div>
                            <div className="item-available-colors">
                                Available in {Object.keys(shirt.colors).length} colors
                            </div>
                            <div className="item-button-panel">
                                <Link to={routeName}>
                                    <button className="item-button" id="see-page">
                                        See Page 
                                    </button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
        
    );
}

export default ProductsPage;