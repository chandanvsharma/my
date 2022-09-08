import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    INCREASE_CART_ITEM,
    DECREASE_CART_ITEM,
    GET_CART_DATA
} from '../action_type'

export const addItemToCart = item => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})

export const removeItemFromCart = item => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
})
export const increaseCartData = item => ({
    type: INCREASE_CART_ITEM,
    payload: item
})
export const decreaseCartItem = item => ({
    type: DECREASE_CART_ITEM,
    payload: item
})

export const getCartData = () => ({
    type: GET_CART_DATA
})