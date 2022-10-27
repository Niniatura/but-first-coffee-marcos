import React, { useContext } from 'react'
import './cartItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan }  from "@fortawesome/free-solid-svg-icons";

function CartItem({props}) {

    return (
        <>
            <div className="cart-item mobile:w-80 h-auto flex items-center bg-gray-600 rounded-md">
                {/* <div className=''> */}
                <img className="m-2 w-20 rounded-lg object-scale-down flex mt-3 justify-start" src={props.img} alt="product image" />
                <div>
                    <div className='grid grid-rows-2 grid-flow-col gap-x-32 gap-10 ml-10 mb-10'>
               
                    <span>Producto</span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{props.title}</span>
                {/* <div className="px-5 pb-5"> */}
                    {/* <div className="grid justify-items-end mr-2 mb-4"> */}
                    <span>Precio unitario</span>
                        <span className="flex font-bold text-gray-900 dark:text-white justify-around text-sm">$ {props.price}</span>
                    {/* </div> */}
                    <span>Cantidad</span>
                    <span>{props.count}</span>
                    <span>Total</span>
                    <span>$ {props.price * props.count}</span>
                    <span></span>
                    <FontAwesomeIcon icon={faTrashCan} /> 
                {/* </div> */}
                {/* </div> */}
                </div>
                </div>
            </div>
        </>
    )
}

export default CartItem