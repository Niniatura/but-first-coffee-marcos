import React, {useState, useEffect} from 'react';
import Item from '../Products/Item';
import { useParams} from 'react-router-dom';
import getItemsByCategory from '../../services/MockAPI';
import getItems from '../../services/MockAPI';

function ItemList(props) {
  let [data, setData] =useState([]);
  const { cat }= useParams();
  
  useEffect(() => {
    if(cat === undefined){
        getItems().then((respuesta) => setData(respuesta));
    } else{
      getItemsByCategory(cat).then((respuesta) => setData(respuesta));
    }
  }, [cat]);
  return (
    <div>
         <div className='grid laptop:grid-cols-4 tablet:grid-cols-3 place-items-center mobile:grid-cols-1'>
            {
              data.map( (item) =>{
                return(
                        <Item key ={item.id}
                         props={props}
                        />
                      )
              })
            }
        </div>
    </div>
  )
}

export default ItemList