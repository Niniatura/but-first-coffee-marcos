import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <>
        <div className='cart-widget flex mobile:flex-row mobile:text-center'>
            <FontAwesomeIcon icon={faShoppingCart} className='cart mt-4'  />
            <span className='cant-items my-3 mx-1 flex tablet:flex-row tablet:justify-around'>0</span>
        </div>
    </>
  )
}

export default CartWidget