import {React, useContext} from 'react'
import {CartCtx} from '../../context/cartContext'

function CartView() {
    const context = useContext(CartCtx);
    const {cart} = context;
    let emptyCart = false;
    if(emptyCart){
        return(
            <div>
                Carrito vacio!
            </div>
        )
    }
    return (
        <div>
            {cart.map((item)=>(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.count}</p>
                    {/* <strong>{item.price * item.count}</strong> */}
                </div>

            ))}
        </div>
    )
}

export default CartView