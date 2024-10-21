import './App.css'
import {Routes, Route} from "react-router-dom";
import Menu from "./componentes/Menu.jsx";
import Contenedor from "./componentes/Contenedor.jsx";

function App() {

  return (
    <>
      <Menu/>
      <Contenedor>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/acerca-de" element={<AcercaDe/>}></Route>
          <Route path="/productos" element={<Productos/>}></Route>
        </Routes>
      </Contenedor>
    </>
  )
}

export default App
