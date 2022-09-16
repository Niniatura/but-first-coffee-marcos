import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Card from '../Products/Card';

const ItemListContainer = () => {
    // const stock = 20;
    // const [quantity,setQuantity]=React.useState(stock)
    return (
        <div className='grid laptop:grid-cols-4 laptop:grid-rows-4 tablet:grid-cols-3 tablet:grid-rows-3 place-items-center mobile:grid-cols-1'>
            <Card title="ETHIOPIA"/>
            <Card title="COLOMBIA"/>
            <Card title="RWANDA"/>
            <Card title="NICARAGUA"/>
            <Card title="GUATEMALA"/>
            <Card title="PERU"/>

        </div>
    )
}

export default ItemListContainer