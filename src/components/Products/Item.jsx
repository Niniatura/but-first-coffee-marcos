import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function Item (props) {
    let { title, price, img, detail } = props;
    return (
        <div className="my-10 tablet:w-64 mobile:w-80 h-auto">
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
                <a href="#">
                    <img className="m-2 w-48 rounded-lg" src={img} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">{title}</h5>
                    <div className="flex items-center mt-2.5">
                        <p>{detail.length > 100 ? `${detail.substring(0, 100)}...` : detail}</p>
                    </div>
                    <div className="grid mr-2 justify-items-start">
                        <a href='#' className="flex mb-1 text-gray-200 dark:text-gray-200 text-xs">+ Info</a>
                    </div>
                    <div className="grid justify-items-end mr-2 mb-4">
                        <span className="flex font-bold text-gray-900 dark:text-white justify-around text-sm">$ {price}</span>
                    </div>
                    <ItemCount stock={20} initial={1} />
                </div>
            </div>
        </div>
  )
}

export default Item