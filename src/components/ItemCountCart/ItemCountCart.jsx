import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {CartCtx} from '../../context/cartContext'

const ItemCountCart = ({props}) => {
    const [count,setCount]=React.useState(props.count)

    function handleAdd ({props}) {
        let cantidadItems = props.count + 1;
        if(props.stock > cantidadItems) {
            setCount(cantidadItems+1)
            
            // console.log(`Stock disponible: ${props.stock - count +1}`)
        }
    }
    
    function handleSubstract({props}){
        
        if(props.stock >=props.count) {
            setCount(count-1)
            // console.log(`Stock disponible: ${props.stock - props.count +1}`)
        }if(props.count <= 1){
             setCount(1)
        }

    }
    
  

  return (

    <div>
        <div className='item-count h-20'>
            <div className="flex flex-row justify-between items-center mb-3">   
                    <span className="font-bold text-gray-900 dark:text-white justify-around text-xs">Cantidad: </span>
                        <span className='text-sm'>{props.count}</span>     
            </div>
        </div>
    </div>
  )
}

export default ItemCountCart