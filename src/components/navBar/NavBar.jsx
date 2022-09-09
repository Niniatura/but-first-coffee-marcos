import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn }  from "@fortawesome/free-solid-svg-icons";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
        <nav className="flex flex-row items-center mobile:flex-col tablet:flex-row">
            <img src="./images/Logo/26.jpeg" alt="Logo" className="logo w-20 m-2"/>
            <ul className="lista flex tablet:flex-row tablet:justify-around mobile:flex-col mobile:text-center">
                <li className="hover:text-white">Inicio</li>
                <li className="hover:text-white">Todos los productos</li>
                <li className="hover:text-white">Cafe</li>
                <li className="hover:text-white">Cold Brew</li>
                <li className="hover:text-white">Cafeteras</li>
                <li className="hover:text-white">Contacto</li>
            </ul>
            <div className="flex tablet:flex-row tablet:justify-around mobile:flex-col mobile:text-center mobile:ml-0 items-center">
                <div className="sign-in tablet:ml-10 mb-2 flex tablet:flex-row tablet:justify-around mobile:flex-col mobile:text-center mobile:mt-3">
                    <FontAwesomeIcon icon={faSignIn} />    
                </div>
                <div className="cart tablet:ml-20 flex tablet:flex-row tablet:justify-around mobile:flex-col mobile:text-center">
                    <CartWidget />
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar