import React, { useContext } from 'react'
import './itemCount.css'
import { Link } from 'react-router-dom';
import {CartCtx} from '../../context/cartContext'

const ItemCount = ({props}) => {
     
    const { addItem, removeItem } = useContext(CartCtx);
    const [count,setCount]=React.useState(1)
    const [agregado, setAgregado] = React.useState(false);
    // let {stock} =props;
    function handleAdd () {

        if(props.stock > count) {
            setCount(count+1)
            
            // console.log(`Stock disponible: ${props.stock - count +1}`)
        }
    }
    
    function handleSubstract(){
        
        if(props.stock >=count) {
            setCount(count-1)
            console.log(`Stock disponible: ${props.stock - count +1}`)
        }if(count <= 1){
             setCount(1)
        }

    }
    
    function onAddToCart(count,props){
        
        addItem(props)
        setAgregado(true)
       
    }

    function removeFromCart(props){
        removeItem(props)
        setAgregado(false)
    }
    

  return (
    <>
     <div className='item-count h-20'>
        <div className="flex flex-row justify-between items-center mb-3">
            <span className="font-bold text-gray-900 dark:text-white justify-around text-xs">Cantidad: </span>
            <div className="flex flex-row justify-between items-center bg-gray-100 rounded-md p-1 w-30">
                <button  className='px-4 text-lg'onClick={() => handleSubstract()}>-</button>
                <span className='text-sm'>{count}</span>
                <button className='px-4 text-lg' onClick={() => handleAdd()}>+</button>
            </div>
            {!agregado ? <button className="bg-gray-700 rounded-md p-2 hover:bg-gray-400 text-sm text-gray-100" onClick={ ()=>onAddToCart(count, props)}>Agregar al carrito</button>:
                                    <>
                                    <Link to="/cart">
                                        <button className="bg-gray-700 rounded-md p-2 hover:bg-gray-400 text-sm text-gray-100">Finalizar compra</button>
                                    </Link>
                                    <button className="bg-gray-700 rounded-md p-2 hover:bg-gray-400 text-sm text-gray-100" onClick={ ()=>removeFromCart({props})}>Eliminar del carrito</button> 
                                    </>}
        </div>
        
    </div>   
    </>
  )
}

export default ItemCount