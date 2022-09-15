import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = () => {
    const stock = 20;

    const [quantity,setQuantity]=React.useState(stock)
    return (
        <div>
            <p className='text-center mt-20'>Hola!</p>
            <ItemCount stock={quantity} initial={1}/>
        </div>
    )
}

export default ItemListContainer