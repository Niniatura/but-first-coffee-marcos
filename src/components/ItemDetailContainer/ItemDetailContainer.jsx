import React, { useState, useEffect } from 'react'
import {getSingleItem} from '../../services/MockAPI';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams} from 'react-router-dom';

function ItemDetailContainer() {
    let [data, setData] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        getSingleItem(id).then((respuesta) => setData(respuesta));
      }, [id]);
      return (
    <div>
        <ItemDetail key ={data.id}
                          props={data}
                        />
    </div>
  )
}

export default ItemDetailContainer