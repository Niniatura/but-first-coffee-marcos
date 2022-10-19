import React, { useState, createContext } from "react";

const CartCtx = createContext();

export default function CartContextProvider ({children}){

    let[cart, setCart]= useState([]); 
    const [enCarrito, setEnCarrito]=useState(false);

    function addItem(item, count){
        if (inCart(item.id)) {
            let newCart = cart.map((itemMapeo) => {
              if (itemMapeo.id === item.id) {
                itemMapeo.count += count;
                return itemMapeo;
              } else return itemMapeo;
            });
      
            setCart(newCart);
          } else {
        console.log(count)
        // let stockDisponible =props.stock - count;
        let newCart = cart.map((item) => item);
        newCart.push({ ...item, count: count });
        setCart(newCart);
        setEnCarrito(true)
        
    }
    }

    function removeItem ({props}){
        let cartItems = cart;
        cartItems = cartItems.filter(function( obj ) {
            return obj.id !== props.id;
        });
        setCart(cartItems)
    }

    function inCart(id) {
        let found = cart.some((item) => item.id === id);
        return found;
    }

    return(
        <CartCtx.Provider value={{ cart, addItem, removeItem, inCart}}>
            {children}
        </CartCtx.Provider>
    )
}

export {CartCtx}