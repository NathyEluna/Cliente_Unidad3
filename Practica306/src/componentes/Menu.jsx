import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <>
        <nav>
            <Link className="menu-link" to="/">Inicio</Link>
            <Link className="menu-link" to="/contacto">Contacto</Link>
            <Link className="menu-link" to="/acerca-de">Acerca De</Link>
            <Link className="menu-link" to="/productos">Productos</Link>
        </nav>
    </>
  )
};

export default Menu;