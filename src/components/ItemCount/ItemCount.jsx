import React from 'react'
import './itemCount.css'

const ItemCount = ({stock,initial, handleAdd, handleSubstract, onAdd, categoria, itemDetailStyles}) => {
    const [count,setCount]=React.useState(initial)
    const [agregado,setAgregado]=React.useState(false)

    function handleAdd () {

        if(stock > count) {
            setCount(count+1)
            console.log(`Stock disponible: ${stock - count - 1}`)
        }
    }
    
    function handleSubstract(){
        
        if(stock >=count) {
            setCount(count-1)
            console.log(`Stock disponible: ${stock - count + 1}`)
        }if(count <= initial){
             setCount(initial)
        }

    }

    function onAdd(stock){
        
        if(stock >=count) {
            stock = stock - count
            alert("Producto agregado!")
            setCount(initial)
            setAgregado(true)
        }if(stock >  0){
            setCount(initial)
        }
        console.log(count)
        console.log(stock)
    }
  return (
    <>
     <div className='item-count'>
        <div className="flex flex-row justify-between items-center mb-3">
            <span className="font-bold text-gray-900 dark:text-white justify-around text-xs">Cantidad: </span>
            <div className="flex flex-row justify-between items-center bg-gray-100 rounded-md p-1 w-30">
                <button className='px-4 text-lg' onClick={() => handleAdd(stock)}>+</button>
                <span className='text-sm'>{count}</span>
                <button  className='px-4 text-lg'onClick={() => handleSubstract(stock)}>-</button>
            </div>
        </div>
        { categoria === "cafe" ? 
        <div className="flex flex-row justify-between items-center mb-3">
            <span className="font-bold text-gray-900 dark:text-white justify-around text-xs mr-2">Molienda: </span>
            <div className="flex flex-row justify-between items-center bg-gray-100 rounded-md p-2">
                <select className="bg-gray-100 text-sm">
                    <option value="grano">En grano</option>
                    <option value="grano">Volturno</option>
                    <option value="grano">Prensa francesa</option>
                    <option value="grano">Capsulas</option>
                </select>
            </div>
        </div>
        : <div></div>
        }
        {!agregado ?<button className="bg-gray-700 rounded-md p-2 hover:bg-gray-400 text-sm text-gray-100" onClick={() => onAdd(stock)}>Agregar al carrito</button> :
        <button className="bg-gray-700 rounded-md p-2 hover:bg-gray-400 text-sm text-gray-100">Producto en carrito</button> }
    </div>   
    </>
  )
}

export default ItemCount