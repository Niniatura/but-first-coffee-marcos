import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'

function ItemDetail({ title, price, img, detail, itemDetailStyles }) {
    
    return (
        <div className='flex justify-around'>
            <div className="my-10 mx-auto h-auto w-5/6">
                <div className='flex flex-row rounded-lg bg-gray-500 mt-10 p-10'>
                <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img
        src="/images/Cafe/1.jpeg"
        className="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="/images/Cafe/2.jpeg"
        className="block w-full"
        alt="Camera"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="/images/Cafe/3.jpeg"
        className="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                    {/* <div className="pt-7 w-full max-w-sm bg-white shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col"> */}
                        <div className="px-5 pb-5">
                                <h5 className="text-lg text-start font-semibold tracking-tight text-gray-900 dark:text-white h-10 mt-3 mb-3">{title}</h5>
                            <div className="grid mr-2 justify-items-start">
                                <p className='text-gray-200 text-lg'>{detail}</p>                        
                            </div>
                            <div className="grid justify-items-end mr-2 mb-4">
                                <span className="flex font-bold text-gray-900 dark:text-white justify-around text-lg">$ {price}</span>
                            </div>
                        {/* </div> */}
                <div className="grid grid-cols-2">
                    <img className="flex rounded-lg h-20" src='/images/Varios/medios-pago.jpeg' alt="product image" />
                    <ItemCount />
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail