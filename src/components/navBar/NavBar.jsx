import "./NavBar.css"

const NavBar = () => {
  return (
    
        /* <nav className="flex flex-row">
            <img src="./images/Logo/26.jpeg" alt="Logo" className="w-20 m-2"/>
            <div className="flex list-none ml-20 items-center space-x-20">
                <li>Inicio</li>
                <li>Todos los productos</li>
                <li>Cafe</li>
                <li>Cold Brew</li>
                <li>Cafeteras</li>
                <li>Contacto</li>
                <li>Login</li>
            </div>
        </nav> */
        <>
        <nav className="flex items-center list-none mobile:flex-col tablet:flex-row">
            <div className="logo inline">
                <img src="images/Logo/26.jpeg" alt="Logo" className="w-100 m-2"/>
            </div>
            <div className="flex items-center space-x-20 space-between m-11 mobile:flex-col tablet:flex-row mobile:text-center">
                    <a href="#">Todos los productos</a>
                    <a href="#">Café</a>
                    <a href="#">Cold Brew</a>
                    <a href="#">Cafeteras</a>
                    <a href="#">Contacto</a>
                    <a href="#">Login</a>
                </div>
        </nav>
        </>
    
    )
}

export default NavBar