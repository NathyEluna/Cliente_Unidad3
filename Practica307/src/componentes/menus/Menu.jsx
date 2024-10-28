import {Link} from "react-router-dom";
import "../../css/menu.css";

const Menu = () => {
  return (
    <>
        <nav className="nav">
            <Link className="menu-link" to="/">Inicio</Link>
            <Link className="menu-link" to="/peliculas">Películas</Link>
            <Link className="menu-link" to="/interpretes">Intérpretes</Link>
            <Link className="menu-link" to="/galeria">Galería</Link>
            <Link className="menu-link" to="/acerca-de">Acerca De</Link>
        </nav>
    </>
  )
};

export default Menu;