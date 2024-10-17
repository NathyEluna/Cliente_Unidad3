"use strict";
import {useRef} from "react";
import {generarColorAleatorio} from "../biblioteca/biblioteca.js";

const Parrafico = () => {
    const refe = useRef(null);

  return (
    <>
        <div className="contenedor">
            <p ref={refe} className="parrafo"></p>
            <button onClick={() =>{
                (cambiarColorAleatoriamente(refe))
            }}>Cambiar colorico</button>
        </div>
    </>
  )
};

export default Parrafico