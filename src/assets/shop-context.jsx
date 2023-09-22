import React from "react";
import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

function getDefaultCart() {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length; i++) {
        cart[i] = 0
    }
    return cart;
}

export default function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };
    const contextValue = { cartItems, addToCart, removeFromCart }
    console.log(cartItems)
    return (
        <>

            <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
        </>
    )
};