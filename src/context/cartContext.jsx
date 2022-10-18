import React, { useState, createContext } from "react";

const CartCtx = createContext();

export default function CartContextProvider ({children}){
    let[cart, setCart]= useState([]); 
     
    function addItem(props, count){

        // let stockDisponible =props.stock - count;
        let newCart = cart.map((item) => item);
        newCart.push({ ...props, count: count });
        setCart(newCart);
        
    }

    function removeItem ({props}){
        let cartItems = cart;
        cartItems = cartItems.filter(function( obj ) {
            return obj.id !== props.id;
        });
        setCart(cartItems)
    }

    function enCarrito(id) {
        let found = cart.some((item) => item.id === id);
        return found;
    }

    return(
        <CartCtx.Provider value={{ cart, addItem, removeItem, enCarrito}}>
            {children}
        </CartCtx.Provider>
    )
}

export {CartCtx}