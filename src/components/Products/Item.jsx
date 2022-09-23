import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'

function Item (props) {
    let { title, price, img, categoria } = props;
    return (
        <div className="my-10 tablet:w-64 mobile:w-80 h-auto">
            <div className="pt-7 w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col min-h-min">
                <a href="#">
                    <img className="foto m-2 w-48 rounded-lg object-scale-down flex mt-3" src={img} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white text-center h-10 mt-3 mb-3">{title}</h5>
                    <div className="grid mr-2 justify-items-start">
                        <button className="flex mb-1 text-gray-200 dark:text-gray-200 text-xs bg-gray-500 p-2 rounded-md mt-2">Ver detalle</button>
                    </div>
                    <div className="grid justify-items-end mr-2 mb-4">
                        <span className="flex font-bold text-gray-900 dark:text-white justify-around text-sm">$ {price}</span>
                    </div>
                    <ItemCount stock={20} initial={1}/>
                </div>
            </div>
        </div>
  )
}

export default Item