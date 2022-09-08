import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    INCREASE_CART_ITEM,
    DECREASE_CART_ITEM,
    GET_CART_DATA
} from '../action_type'



const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case ADD_ITEM_TO_CART:
            state.cartItems.push({ name: payload.name, quantity: 1 })
            state.totalPrice += payload.price
            state.cartItemCount += 1
            return state;
        case REMOVE_ITEM_FROM_CART:
            let filteredCartItems = state.cartItems.filter(item => item.name !== payload.name)
            state.cartItems = filteredCartItems
            state.totalPrice -= payload.price
            state.cartItemCount -= 1
            return state;
        case INCREASE_CART_ITEM:
            state.cartItems.map(cartItem => {
                if (cartItem.name === payload.name) {
                    cartItem.quantity++
                }
            })
            state.totalPrice += payload.price
            return state;
        case DECREASE_CART_ITEM:
            state.cartItems.map(cartItem => {
                if (cartItem.name === payload.name) {
                    cartItem.quantity--
                }
            })
            state.totalPrice -= payload.price
            return state;
        case GET_CART_DATA:
            return state;
        default:
            return state;

    }
}

export default cartReducer
