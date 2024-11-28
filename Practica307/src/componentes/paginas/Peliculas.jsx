import { Outlet } from "react-router-dom";
import SubmenuPeliculas from "../menus/SubmenuPeliculas.jsx";
import Pelicula from "./Pelicula.jsx";
import "../../css/general.css";

const Peliculas = (props) => {
    const {peliculas} = props;
    return(
        <>
            <div className="submenu">
                <SubmenuPeliculas/>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                {peliculas.length
                    ? peliculas.map((pelicula) => {
                        return (
                            <Pelicula
                            key={pelicula.id}
                            nombre={pelicula.nombre}
                            director={pelicula.director}
                            cartelera={pelicula.cartelera}
                            recaudacion={pelicula.recaudacion}
                            actores={pelicula.actores}
                            taquilla={pelicula.recaudacion}>
                                {pelicula.resumen}
                            </Pelicula>
                        );
                    })
                : "No se han encontrado películas."}
            </div>
        </>
    );
};

export default Peliculas;