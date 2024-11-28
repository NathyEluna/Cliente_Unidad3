import { Outlet } from "react-router-dom";
import "../../css/general.css";
import SubmenuGaleria from "../menus/SubmenuGaleria";

const Galeria = () => {
  return (
    <>
      <div className="submenu">
        <SubmenuGaleria/>
      </div>
      <div>
        <Outlet/>
      </div>
      <div className="general-div">
        <h3>Galería de cartelas</h3>
        <p>Estamos en la página de la galería de las cartelas de las películas.</p>
      </div>
    </>
  )
};

export default Galeria;