import { createStore } from "redux";
import cartReducer from "../reducer";

const initialState = {
    cartItems: [],
    totalPrice: 0,
    cartItemCount: 0,

};

const store = (state = initialState) => {
    return createStore(cartReducer, state)
}

export default store