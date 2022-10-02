import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn }  from "@fortawesome/free-solid-svg-icons";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  return (
    <>
        <nav className="flex flex-row items-center mobile:flex-col tablet:flex-row bg-gray-500">
            <Link to="/">
                <img src="/images/Logo/26.jpeg" alt="Logo" className="logo w-10 m-2"/>
            </Link>
            <ul className="lista flex tablet:flex-row tablet:justify-around mobile:flex-col mobile:text-center">
                <Link to="/" className="hover:text-gray-300">Inicio</Link>
                <Link to="/categoria/cafe" className="hover:text-gray-300">Cafe</Link>
                <Link to="/categoria/cold-brew" className="hover:text-gray-300">Cold Brew</Link>
                <Link to="/categoria/cafeteras" className="hover:text-gray-300">Cafeteras</Link>
                <Link to="/contacto" className="hover:text-gray-300">Contacto</Link>
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