import Interpretes from './Interpretes.jsx';
import Taquilla from './Taquilla.jsx';
import "./Pelicula.css";
import {mostrarElenco, mostrarTaquilla} from "../biblioteca/biblioteca.js";
import {useRef} from "react";

//Función para formatear la manera que la película aparece en la página.
const Pelicula = (props) => {
    const {nombre, director, cartelera, actores, recaudacion, children} = props;
    const refe1 = useRef();
    const refe2 = useRef();

    return(
        <>
            <section className="pelicula-contenedor">
                <h1 className="pelicula-titulo">{nombre}</h1>
                <h2 className="pelicula-subtitulo">{director}</h2>
                <section className="pelicula-info">
                    <div className="pelicula-cartela">
                        <img src={cartelera}/>
                    </div>
                    <div className="pelicula-resumen">
                        <h3>Resumen</h3>
                        <p>{children}</p>
                    </div>
                </section>
                <section className="pelicula-botones">
                    <button className="pelicula-boton1" onClick={() => {
                        mostrarElenco(refe1);
                    }}>Elenco</button>
                    <button className="pelicula-boton2" onClick={() => {
                        mostrarTaquilla(refe2);
                    }}>Taquilla</button>
                    <div className="pelicula-taquilla hidden" ref={refe2}>
                        <Taquilla recaudacion={recaudacion}/>
                    </div>
                </section>
                <div className="pelicula-elenco hidden" ref={refe1}>
                    <Interpretes actores={actores}/>
                </div>
            </section>
        </>
    );
};

export default Pelicula;