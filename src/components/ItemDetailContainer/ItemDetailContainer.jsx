import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    // const itemDetailStyles={ 
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "orange",
    //     color: "white",
    //     height: 20,
    //     width: 20,
    //     borderRadius: "50%",
    //     padding: 10,
    //     fontWeight: "bold",
    //   }
  return (
    <div>
        <ItemDetail key ={1}
                          title={'NICARAGUA'}
                          price={200}
                          detail= {"Este café de origen proveniente de la región de Huila conlleva un proceso lavado en donde como resultado nos brinda un café con acidez prolongada. Presenta un aroma frutal y notas a nueces y melaza."}
                          img={'/images/Cafe/1.jpeg'}
                          stock={20}
                          categoria={'cafe'}
                        //   style={itemDetailStyles}
                        />
    </div>
  )
}

export default ItemDetailContainer