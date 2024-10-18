import Interprete from "./Interprete.jsx";
import {generarUuidAleatorio} from "../biblioteca/biblioteca.js";

//Función para buscar la información de cada actor el el fichero pelicula.json y mostrar en la página.
const Interpretes = (props) => {
    const {actores} = props;

    return(
        <>
            <div>
                {actores.map((actor) => {
                    return(
                        <Interprete
                        key={generarUuidAleatorio()}
                        nombre={actor.nombre}
                        imagen={actor.imagen}
                        biografia={actor.biografia}/>
                    )
                })}
            </div>
        </>
    );
};

export default Interpretes;