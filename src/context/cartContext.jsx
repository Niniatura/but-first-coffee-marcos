import React, { useState, createContext } from "react";

const CartCtx = createContext();

export default function CartContextProvider ({children}){
    const[cart, setCart]= useState([]);
    const [agregado, setAgregado]=useState(false);  
    
    function addItem(props,count){
        let stockDisponible =props.stock - count;
        const cartItem = [props,count,stockDisponible]
        console.log('hola desde context',cartItem)
        setCart([cartItem]);
        const cartItems = cart.push([cartItem]);
        console.log([cart])

        
    }
    return(
        <CartCtx.Provider value={{ cart, addItem, agregado, cart }}>
            {children}
        </CartCtx.Provider>
    )
}

export {CartCtx}