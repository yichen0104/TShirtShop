import React, { useContext, useReducer } from "react";
import { CartReducer } from "./Reducer";

const ShopCart = React.createContext();

const ShopContext = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, {
        cart: []
    });
    return(
        <ShopCart.Provider value={{state, dispatch}}>
            {children}
        </ShopCart.Provider>
    )
}

export default ShopContext;

export const CartState = () => {
    return useContext(ShopCart);
}

