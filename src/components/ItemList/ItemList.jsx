import React, {useState, useEffect} from 'react'
import Item from '../Products/Item'
import  getItems  from '../../services/MockAPI';

function ItemList() {
  let [data, setData] =useState([]);
  
  useEffect(() => {
    getItems().then((respuestaDatos) => setData(respuestaDatos));
  }, []);
  return (
    <div>
         <div className='grid laptop:grid-cols-4 tablet:grid-cols-3 place-items-center mobile:grid-cols-1'>
            {
              data.map( (item) =>{
                console.log("item" + item)
                return(
                        <Item key ={item.id}
                          title={item.title}
                          price={item.price}
                          detail={item.detail}
                          img={item.img}
                          stock={item.stock}
                          categoria={item.category}
                        />
                      )
              })
            }
        </div>
    </div>
  )
}

export default ItemList