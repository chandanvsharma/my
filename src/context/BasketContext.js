import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export function useBasket() {
    return useContext(BasketContext);
}

export function BasketProvider({ children }) {
    const [basket, setBasket] = useState({})

    function updateBasket(item, quantity) {
        let tempBasket = basket;
        tempBasket[item.name] = quantity;
        setBasket(tempBasket);
        console.log("hello", basket);

    }

    const value = {
        basket,
        updateBasket
    }

    return (
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    )


}