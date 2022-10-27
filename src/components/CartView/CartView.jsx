import {React, useContext} from 'react'
import {CartCtx} from '../../context/cartContext'
import CartItem from '../CartItem/CartItem';

function CartView() {
    const context = useContext(CartCtx);
    const {cart, totalPriceInCart} = context;
    let emptyCart = false;
    if(emptyCart){
        return(
            <div>
                Carrito vacio!
            </div>
        )
    }
    return (
        <>
                <div>
                    {cart.map((item)=>(
                        <CartItem props={item} key={item.id} />
                    ))}
                </div>
                <p className='text-right mr-60'><strong>Precio total a pagar $: ${totalPriceInCart()}</strong></p>
                 
        </>
    
)
}

export default CartView