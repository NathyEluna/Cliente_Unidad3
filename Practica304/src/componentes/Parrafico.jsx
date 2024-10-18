"use strict";
import {useRef} from "react";
import {cambiarColorAleatoriamente} from "../biblioteca/biblioteca.js";
import "../css/estilos.css";

const Parrafico = () => {
    const refe = useRef(null);

  return (
    <>
        <div className="contenedor">
            <h2>Ejercicio 2</h2>
            <p ref={refe} className="parrafo">Contenido del párrafo</p>
            <button onClick={() =>{
                (cambiarColorAleatoriamente(refe))
            }}>Cambiar colorico</button>
        </div>
    </>
  )
};

export default Parrafico