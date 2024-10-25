import "../../css/menu.css"

const SubmenuPeliculas = () => {
  return (
    <>
      <nav id="nav">
            <Link className="menu-link" to="/peliculas/titulo">Título</Link>
            <Link className="menu-link" to="/peliculas/interprete">Intérpretes</Link>
            <Link className="menu-link" to="/peliculas/director">Director</Link>
        </nav>
    </>
  )
};

export default SubmenuPeliculas;