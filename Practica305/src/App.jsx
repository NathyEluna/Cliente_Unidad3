import './App.css'
import Contenedor from './componentes/Contenedor.jsx';
import Peliculas from "./componentes/Peliculas.jsx";
import movies from "./objeto/peliculas.json";

function App() {
  return (
    <>
      <section>
      <h1>Ejercício 1</h1>
        <Contenedor>
          <Peliculas peliculas={movies.peliculas}/>
        </Contenedor>
      </section>
    </>
  )
};

export default App;

