import { useState}from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'


function ItemDetail(props) {
    
    const [agregado,setAgregado]=useState(false)  

    function handleAddToCart(count){

        alert(`Agregaste ${count} productos al carrito`)
        setAgregado(true)
        console.log(count)
        console.log(props.stock)

    }
    
    return (
        <div className='flex justify-around'>
            <div className="my-2 mx-auto min-h-fit w-5/6">
                <div className='flex flex-row rounded-lg bg-gray-500 mt-10 p-10'>
                    <div id="carouselExampleControls" className="carousel slide relative flex items-center" data-bs-ride="carousel">
                       
                        <button
                            className="carousel-control-prev z-10 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <div className="carousel-inner relative w-full overflow-hidden">
                            <div className="carousel-item active float-left w-full">
                                <img src="/images/Backgrounds/4.jpeg" className="imagen-carousel block h-full" alt="Coffee" />
                            </div>
                            <div className="carousel-item float-left w-full">
                                <img src="/images/Backgrounds/2.jpeg" className="imagen-carousel block h-full" alt="Coffee" />
                            </div>
                            <div className="carousel-item float-left w-full">
                                <img src="/images/Backgrounds/3.jpeg" className="imagen-carousel block w-full"alt="Coffee" />
                            </div>
                        </div>
                        <button
                            className="carousel-control-next z-10 absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div>
                            <h3 className="text-lg text-start font-semibold text-gray-900 dark:text-white h-10 mt-3 mb-3 ml-4">{props.title}</h3>
                        <div className="grid mr-2 justify-items-start">
                            <p className='text-gray-200 text-sm ml-4'>{props.detail}</p>                        
                        </div>
                        <div className="grid grid-cols-2 justify-items-stretch align-middle mr-2 ml-4 mt-10">
                            <div className='balance rounded-lg w-72'>
                                <img src="/images/Varios/cafeChart.jpeg" alt="" />
                            </div>
                            <span className="grid font-bold text-gray-900 dark:text-white justify-end content-end text-lg">$ {props.price}</span>
                        </div>
                        <div className="grid grid-cols-2 mt-10">
                            <div className='medios-pago ml-4'>
                                <span className="flex font-bold text-gray-900 dark:text-white text-xs text-left mb-3">Medios de pago: </span>
                                <img className="flex rounded-lg h-16" src='/images/Varios/medios-pago.jpeg' alt="product image" />
                            </div>
                            <div className='agregar-al-carrito'>
                            {!agregado ?<ItemCount stock={props.stock} initial={1} onAddToCart={handleAddToCart}/>:
                                    <Link to="/cart">
                                        <button className="bg-gray-700 rounded-md p-2 hover:bg-gray-400 text-sm text-gray-100">Finalizar compra</button>
                                    </Link>}
                                    
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail