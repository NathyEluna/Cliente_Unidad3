import {Routes, Route} from "react-router-dom";
import Inicio from "./paginas/Inicio.jsx";
import Peliculas from "./paginas/Peliculas.jsx";
import Interpretes2 from "./paginas/Interpretes2.jsx";
import Galeria from "./paginas/Galeria.jsx";
import AcercaDe from "./paginas/AcercaDe.jsx";
import Error from "./paginas/Error.jsx";
import lista from "../objetos/peliculas.json";

const Rutas = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/peliculas" element={<Peliculas peliculas={lista.peliculas}/>}>
            <Route path="titulo" element={""}/>
            <Route path="interprete" element={""}/>
            <Route path="director" element={""}/>
          </Route>
          <Route path="/interpretes" element={<Interpretes2/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
          <Route path="/acerca-de" element={<AcercaDe/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </>
  )
};

export default Rutas;