import React, { useState, useEffect } from 'react'
import {getSingleItem} from '../../services/MockAPI';
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    let [data, setData] = useState([]);

    useEffect(() => {
        getSingleItem(3).then((respuesta) => setData(respuesta));
      }, []);
      return (
    <div>
        <ItemDetail key ={data.id}
                          title={data.title}
                          price={data.price}
                          detail={data.detail}
                          img={data.img}
                          stock={data.stock}
                          categoria={data.category}
                        />
    </div>
  )
}

export default ItemDetailContainer