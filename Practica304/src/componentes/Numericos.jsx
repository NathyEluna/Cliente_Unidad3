import {useRef} from "react";
import {obtenerNumeroAleatorio} from "../biblioteca/biblioteca";

const Numericos = () => {
    const refe = useRef(null);

    const anadirNumerico = (referencia) =>{
        referencia.current.innerHTML += `<li>Número: ${obtenerNumeroAleatorio()}.</li>`;
    }; 

    return (
    <>
        <div>
            <ol ref={refe}></ol>
            <button onClick={() =>{
               anadirNumerico(refe);
            }}>Añadir numerico</button>
        </div>
    </>
  )
};

export default Numericos;