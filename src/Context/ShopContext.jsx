import { useState } from "react";
import axios from "axios";
import {  createContext } from "react";
import { PRODUCTS } from "../products";

const getDefaultCart = () =>{
    let cart = {};
    for(let i=1;i<PRODUCTS.length + 1;i++){
        cart[i] =0
    }
    return cart;
}

export const ShopContext = createContext(null);

 const ShopContextProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart())
    console.log(cartItems);

    

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] + 1}));
        console.log(itemId)
    }

    const contextValue = {cartItems, addToCart}
    return(
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
