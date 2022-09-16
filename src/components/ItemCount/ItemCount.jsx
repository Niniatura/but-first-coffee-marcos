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
     <div className='flex flex-row justify-around'>
        <div className="flex flex-row justify-between items-center bg-gray-100 rounded-md">
            <button className='p-2' onClick={() => handleAdd(stock)}>+</button>
            <span>{count}</span>
            <button  className='p-2'onClick={() => handleSubstract(stock)}>-</button>
        </div>
        <button className="bg-gray-500 rounded-md p-2 hover:bg-gray-400" onClick={() => onAdd(stock)}>Agregar al carrito</button>
    </div>   
    </>
  )
}

export default ItemCount