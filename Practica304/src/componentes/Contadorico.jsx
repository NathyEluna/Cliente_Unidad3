"use strict";
import {useRef} from 'react';
import {incrementar, decrementar} from "../biblioteca/biblioteca.js";

const Contadorico = () => {
    const refe = useRef(null);
  return (
    <>
        <div className="contenedor">
        <h2>Ejercicio 3</h2>
            <p ref={refe}>0</p>
            <button className="cont-button" onClick={() =>{
                incrementar(refe)
            }}>Incrementar contador</button>
            <button className="cont-button" onClick={() =>{
                decrementar(refe)
            }}>Decrementar contador</button>
        </div>
    </>
  )
};

export default Contadorico