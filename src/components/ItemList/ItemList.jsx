import React from 'react'
import Item from '../Products/Item'


function ItemList() {
  return (
    <div>
         <div className='grid laptop:grid-cols-4 tablet:grid-cols-3 place-items-center mobile:grid-cols-1'>
            <Item title="ETHIOPIA"/>
            <Item title="COLOMBIA"/>
            <Item title="RWANDA"/>
            <Item title="NICARAGUA"/>
            <Item title="GUATEMALA"/>
            <Item title="PERU"/>

        </div>
    </div>
  )
}

export default ItemList