import { Link } from "react-router-dom";
import "../../css/menu.css"

const SubmenuGaleria = () => {
  return (
    <>
      <nav className="nav">
        <Link className="menu-link" to="/galeria/titulo">Título</Link>
        <Link className="menu-link" to="/galeria/interprete">Intérpretes</Link>
        <Link className="menu-link" to="/galeria/director">Director</Link>
      </nav>
    </>
  )
};

export default SubmenuGaleria;