import React, { useState, useContext }from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css';
import {CartCtx} from '../../context/cartContext';


function ItemDetail(props) {
    const [enCarrito, setEnCarrito]=useState(false); 
    const { addItem} = useContext(CartCtx);

    function handleAddToCart(props,count){
        addItem(props,count)
        setEnCarrito(true)

    }
    // function removeFromCart(count, props){
    //     removeItem(count,props)
        
    // }
    return (
        <div className='flex justify-around'>
            <div className="my-2 mx-auto min-h-fit w-5/6">
                <div className='flex flex-row rounded-lg bg-gray-500 mt-10 p-10'>
                    <div id="carouselExampleControls" className="carousel slide relative flex items-center" props-bs-ride="carousel">
                        <div className="carousel-inner relative w-full overflow-hidden">
                            <div className="carousel-item active float-left w-40">
                                <img src={props.img} className="imagen-carousel block h-full rounded-lg" alt="Coffee" />
                            </div>
                        </div>
                    </div>
                    <div>
                            <h3 className="text-lg text-start font-semibold text-gray-900 dark:text-white h-10 mt-3 mb-3 ml-4">{props.title}</h3>
                        <div className="grid mr-2 justify-items-start">
                            <p className='text-gray-200 text-sm ml-4'>{props.detail}</p>                        
                        </div>
                       
                        <div className="grid grid-cols-3 mt-10">
                            <div className='medios-pago ml-4'>
                                <span className="flex font-bold text-gray-900 dark:text-white text-xs text-left mb-3">Medios de pago: </span>
                                <img className="flex rounded-lg h-16" src='/images/Varios/medios-pago.jpeg' alt="medios de pago" />
                            </div>
                            <div className='medios-pago ml-4'>
                            <span className="flex font-bold text-gray-900 dark:text-white text-xs text-left mb-3">Precio unitario: </span>
                            {/* <div className="grid grid-cols-2 justify-items-stretch align-middle mr-2 ml-4 mt-10"> */}
                            <span className="font-bold text-gray-900 dark:text-white text-lg">$ {props.price}</span>
                            </div>
                        {/* </div> */}
                            <div className='agregar-al-carrito'>
                            <span className="flex font-bold text-gray-900 dark:text-white text-xs text-left mb-3">Cantidad: </span>
                            {/* <div> */}
                                {!enCarrito ? <ItemCount item={props}
                                                onAddToCart={handleAddToCart}/>
                                            :
                                                <Link to="/cart" className="bg-gray-700 rounded-md p-2 hover:bg-gray-400 text-sm text-gray-100">
                                                    Finalizar compra
                                                </Link>
                                }
                            {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail