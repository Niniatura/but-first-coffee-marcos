import "./NavBar.css"

const NavBar = () => {
  return (
    <>
        <nav className="flex flex-row items-center mobile:flex-col tablet:flex-row">
            <img src="./images/Logo/26.jpeg" alt="Logo" className="logo w-20 m-2"/>
            <ul className="lista flex tablet:flex-row tablet:justify-around mobile:flex-col mobile:text-center">
                <li>Inicio</li>
                <li>Todos los productos</li>
                <li>Cafe</li>
                <li>Cold Brew</li>
                <li>Cafeteras</li>
                <li>Contacto</li>
                <li>Login</li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar