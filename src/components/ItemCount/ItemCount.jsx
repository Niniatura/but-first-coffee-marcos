import React from 'react'

const ItemCount = ({stock,initial, handleAdd, handleSubstract, onAdd}) => {
    const [count,setCount]=React.useState(initial)
    // const [quantity,setQuantity]=React.useState(stock)

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
            console.log("Producto agregado!")
            setCount(initial)
            // setQuantity(stock)
        }if(stock >  0){
            setCount(initial)
        }
        console.log(count)
        console.log(stock)
    }
  return (
    <>
     <div className='flex flex-col justify-around'>
        <div className="flex flex-row justify-between items-center mb-3">
            <span className="font-bold text-gray-900 dark:text-white justify-around text-xs">Cantidad: </span>
            <div className="flex flex-row justify-between items-center bg-gray-100 rounded-md p-2 w-30">
                <button className='px-4 text-xs' onClick={() => handleAdd(stock)}>+</button>
                <span className='text-xs'>{count}</span>
                <button  className='px-4 text-xs'onClick={() => handleSubstract(stock)}>-</button>
            </div>
        </div>
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
        
        <button className="bg-gray-500 rounded-md p-2 hover:bg-gray-400 text-sm" onClick={() => onAdd(stock)}>Agregar al carrito</button>
    </div>   
    </>
  )
}

export default ItemCount