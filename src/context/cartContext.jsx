import React, { useState, createContext } from "react";

const CartCtx = createContext();

export default function CartContextProvider ({children}){
    const[cart, setCart]= useState([]);
    
    const [agregado, setAgregado]=useState(false);  
    
    function addItem(props,count){
        
        console.log('hola desde context',props,count)
        

        
    }
    return(
        <CartCtx.Provider value={{ cart, addItem, agregado }}>
            {children}
        </CartCtx.Provider>
    )
}

export {CartCtx}