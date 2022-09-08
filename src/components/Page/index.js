import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../NavBar';
import Login from '../Login';
import SignUp from '../SignUp';
import Menu from '../Menu';
import Checkout from '../CheckOut';
import KitchenMenu from '../KitchenMenu';

const initBasket = {
    cartItems: [],
    totalPrice: 0,
    cartItemCount: 0,

};
const Page = () => {
    const [basket, setBasket] = useState(initBasket)
    function onchangeHandler(item, type) {
        // if (type === "addnew") {
        //     console.log("hi");
        // }
        let tmpBasket
        console.log(basket);
        switch (type) {
            case "addnew":
                tmpBasket = basket
                tmpBasket.cartItems.push({ name: item.name, quantity: 1, price: item.price })
                tmpBasket.totalPrice += item.price
                tmpBasket.cartItemCount += 1
                setBasket({ ...tmpBasket })
                break;
            case "removeFromCart":
                tmpBasket = basket
                tmpBasket.cartItems = tmpBasket.cartItems.filter(cartItem => cartItem.name !== item.name)
                console.log("hi", tmpBasket);
                tmpBasket.totalPrice -= item.price
                tmpBasket.cartItemCount -= 1
                console.log(tmpBasket);
                setBasket({ ...tmpBasket })
                break;
            case "addExisting":
                tmpBasket = basket
                tmpBasket.cartItems.map(cartItem => {
                    if (cartItem.name === item.name) {
                        cartItem.quantity++
                    }
                })
                tmpBasket.totalPrice += item.price
                setBasket({ ...tmpBasket })
                break;
            case "removeQuantity":
                tmpBasket = basket
                tmpBasket.cartItems.map(cartItem => {
                    if (cartItem.name === item.name) {
                        cartItem.quantity--
                    }
                })
                tmpBasket.totalPrice -= item.price
                setBasket({ ...tmpBasket })
                break;
            case "clearBasket":
                setBasket({
                    cartItems: [],
                    totalPrice: 0,
                    cartItemCount: 0,
                });
                break;

            default:
                setBasket(basket);

        }

    }
    return (
        <>
            <Router>
                <NavBar basket={basket} onchange={onchangeHandler} />

                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route exact path="/" element={<Login />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/kitchenmenu" element={<KitchenMenu />} />
                    <Route path="/menu" element={<Menu onchange={onchangeHandler} basket={basket} />} />

                </Routes>
            </Router>
        </>
    )
}

export default Page