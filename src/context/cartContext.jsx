import React, { useState, createContext } from "react";

const CartCtx = createContext();

export default function CartContextProvider ({children}){
    let[cart, setCart]= useState([]); 
     
    function addItem(props, count,agregado){

        let stockDisponible =props.stock - count;
        const cartItem = props;
        console.log('hola desde context',cartItem,stockDisponible)
        cart.push(cartItem);
        setCart(cart)
        console.log(cart)
        console.log(count)
        console.log(props.agregado)
    }

    function removeItem ({props}){
        let cartItems = cart;
        cartItems = cartItems.filter(function( obj ) {
            return obj.id !== props.id;
        });
        setCart(cartItems)
        console.log(cart)
    }
    return(
        <CartCtx.Provider value={{ cart, addItem, removeItem}}>
            {children}
        </CartCtx.Provider>
    )
}

export {CartCtx}