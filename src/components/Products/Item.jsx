import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

function Item (props) {
    let { title, price, img, id } = props;
    const urlDetalle = `/detalle/${id}`
    return (
        <div className="mt-5 w-60">
            <div className="pt-7 w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col min-h-min">
                    <img className="foto m-2 rounded-lg object-scale-down flex mt-3 h-30" src={img} alt="product" />
                <div className="px-5 pb-5">
                        <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white text-center pt-2">{title}</h5>
                    <div className="grid justify-items-end mr-2 mb-4 mt-10">
                        <span className="flex font-bold text-gray-900 dark:text-white justify-around text-sm">$ {price}</span>
                    </div>
                    <div className="grid mr-2 justify-items-start">
                        <Link to={urlDetalle}>
                            <button className="mb-1 text-gray-200 dark:text-gray-200 text-xs bg-gray-500 p-2 rounded-md mt-2 w-52">Ver detalle</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Item