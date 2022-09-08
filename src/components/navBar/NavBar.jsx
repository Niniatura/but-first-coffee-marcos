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
                <li className="hover:text-white">Login</li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar