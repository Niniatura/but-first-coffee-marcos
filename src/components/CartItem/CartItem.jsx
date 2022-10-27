import React from 'react';
import './cartItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan }  from "@fortawesome/free-solid-svg-icons";

function CartItem({props}) {

    return (
        <>
            {/* <div className="cart-item mobile:w-80 h-auto flex items-center bg-gray-600 rounded-md">
                <img className="m-2 w-20 rounded-lg object-scale-down flex mt-3 justify-start" src={props.img} alt="product" />
                <div className='grilla-contenido space-y-4'>
                    <div className='grilla grid grid-rows-2 grid-flow-col gap-x-28 ml-10 mb-10'>
                        <span className=' text-gray-900 dark:text-gray-200 max-h-10'>Producto</span>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white w-20">{props.title}</span>
                        <span className=" text-gray-900 dark:text-gray-200 max-h-10">Precio unitario</span>
                            <span className="flex font-bold text-gray-900 dark:text-white justify-around text-sm">$ {props.price}</span>
                        <span className=" text-gray-900 dark:text-gray-200 max-h-10">Cantidad</span>
                            <span className=" text-gray-900 dark:text-white">{props.count}</span>
                        <span className=" text-gray-900 dark:text-gray-200 max-h-10">Total</span>
                            <span className=" text-gray-900 dark:text-white">$ {props.price * props.count}</span>
                        <span></span>
                            <FontAwesomeIcon icon={faTrashCan} className="trash"/> 
                    </div>
                </div>
            </div> */}
            <table className="cart-item mobile:w-80 h-auto bg-gray-600 rounded-md">
                <tr>
                    <th></th>
                       
                    <th className='w-20'>Producto</th>
                    <th>Precio unitario</th>
                    <th>Cantidad</th>
                    <th>Precio total</th>
                    <th></th>
                </tr>
                <tr>
                    <td>
                        <img className="m-2 w-20 rounded-lg object-scale-down flex mt-3 justify-start" src={props.img} alt="product" />
                    </td>
                    <td className='w-20'>{props.title}</td>
                    <td>$ {props.price}</td>
                    <td>{props.count}</td>
                    <td>$ {props.price * props.count}</td>
                    <td><FontAwesomeIcon icon={faTrashCan} className="trash"/> </td>
                </tr>
            </table>
        </>
    )
}

export default CartItem