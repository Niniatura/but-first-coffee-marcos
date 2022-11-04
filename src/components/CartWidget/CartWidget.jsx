import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <>
      <div className="sign-in">
        <div>
            <p className='cant-items tablet:flex-row tablet:justify-around inline-flex'>0</p>
            <FontAwesomeIcon icon={faShoppingCart} className='cart'  />
        </div>
      </div>
    </>
  )
}

export default CartWidget