export const CartReducer = (state, action) => {
    switch (action.type){
        case "ADD":
            return {...state, cart: [{...action.payload}, ...state.cart]};
        case "REMOVE":
            return {
                ...state,
                cart: state.cart.filter((c) => !(
                    c.name === action.payload.name
                    && c.color === action.payload.color
                    && c.size === action.payload.size
                    && c.quantity === action.payload.quantity) )
                };
        default:
            return state;
    }
}