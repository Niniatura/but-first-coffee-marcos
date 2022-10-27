import React, { useState, useEffect,useContext } from 'react';
import {getSingleItem} from '../../services/MockAPI';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams} from 'react-router-dom';
import {CartCtx} from '../../context/cartContext';

function ItemDetailContainer() {
    let [data, setData] = useState({});

    const {agregado} = useContext(CartCtx);
    
    const { id } = useParams();
    
    useEffect(() => {
        getSingleItem(id).then((respuesta) => setData(respuesta));
      }, [id]);
      return (
    <div>
        <ItemDetail key ={data.id}
                          title={data.title}
                          price={data.price}
                          detail={data.detail}
                          img={data.img}
                          stock={data.stock}
                          categoria={data.category}
                          id={data.id}
                          agregado = {agregado}
                        />
    </div>
  )
}

export default ItemDetailContainer