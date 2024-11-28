import "../../css/menu.css"
import { Link } from "react-router-dom";

const SubmenuPeliculas = () => {
  return (
    <>
      <nav className="nav">
        <Link className="menu-link" to="/peliculas/titulo">Título</Link>
        <Link className="menu-link" to="/peliculas/interprete">Intérpretes</Link>
        <Link className="menu-link" to="/peliculas/director">Director</Link>
      </nav>
    </>
  )
};

export default SubmenuPeliculas;