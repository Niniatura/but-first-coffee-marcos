import React from 'react'

const ItemCount = ({stock,initial, handleAdd, handleSubstract, onAdd}) => {
    const [count,setCount]=React.useState(initial)

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
        <div className='item-count text-center m-10 bg-gray-400 w-40 flex justify-around'>
            <button onClick={() => handleAdd(stock)}>+</button>
            <span>{count}</span>
            <button onClick={() => handleSubstract(stock)}>-</button>
        </div>
        <div>
            <button onClick={() => onAdd(stock)}>Agregar al carrito</button>
        </div>
    </>
  )
}

export default ItemCount