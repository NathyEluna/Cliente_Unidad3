import "../../css/general.css";

//Componente genérico de Interpretes para no haber conflicto con Interpretes de Peliculas.
const Interpretes2 = (props) => {
    const {} = props;
    return(
        <>
            <div className="general-div">
                <h3>Listado de Interpretes</h3>
                <p>Estamos en la página del listado de interpretes.</p>
            </div>
        </>
    );
};

export default Interpretes2;