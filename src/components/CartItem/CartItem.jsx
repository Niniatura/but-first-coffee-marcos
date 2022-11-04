import React from 'react';
import './cartItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan }  from "@fortawesome/free-solid-svg-icons";

function CartItem({props}) {

    return (
        <>
            <div className='cart-item h-auto bg-gray-600 rounded-md p-1 mt-5 flex ml-10'>
                <div className='grilla mt-4'>
                    <table>
                        <thead>
                        <tr className=''> 
                        <th></th> 
                            <th scope="col"
                                        className="px-4 text-xs font-bold text-gray-500 uppercase  text-center w-72">Producto</th>
                            <th scope="col"
                                        className="px-4 text-xs font-bold text-gray-500 uppercase  text-center">Precio unitario</th>
                            <th scope="col"
                                        className="px-4 text-xs font-bold text-gray-500 uppercase  text-center">Cantidad</th>
                            <th scope="col"
                                        className="px-4 text-xs font-bold text-gray-500 uppercase  text-center">Precio total</th>
                            <th scope="col"
                                        className="px-4 text-xs font-bold text-gray-500 uppercase  text-center">Eliminar</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="text-sm font-medium text-right whitespace-wrap w-20"><img className="m-2 rounded-sm object-scale-down mt-3 justify-start w-20" src={props.img} alt="product" /></td>
                            <td className="px-4 text-sm font-medium whitespace-wrap shrink text-center">{props.title}</td>
                            <td className="px-4 text-sm font-medium whitespace-nowrap text-center">$ {props.price}</td>
                            <td className="px-4 text-sm font-medium whitespace-nowrap text-center">{props.count}</td>
                            <td className="px-4 text-sm font-medium whitespace-nowrap text-center">$ {props.price * props.count}</td>
                            <td className="px-4 text-sm font-medium whitespace-nowrap text-center w-24"><FontAwesomeIcon icon={faTrashCan} className="trash"/> </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CartItem;