import './App.css';
import Contenedor from "./componentes/contenedores/Contenedor.jsx";
import Cabecera from './componentes/contenedores/Cabecera.jsx';
import Menu from './componentes/menus/Menu.jsx';
import Contenido from "./componentes/contenedores/Contenido.jsx";
import Rutas from "./componentes/Rutas.jsx";
import Pie from './componentes/contenedores/Pie.jsx';


function App() {

  return (
    <>
      <Contenedor>
        <Cabecera>
          <Menu/>
        </Cabecera>
        <Contenido>
          <Rutas/>
        </Contenido>
        <Pie/>
      </Contenedor>
    </>
  )
};

export default App;
