import "./Interprete.css";

//Función para formatear la manera que cada actor aparece en la página.
const Interprete = (props) => {
    const {nombre, imagen, biografia} = props;
    return( 
        <>
            <div className="interprete-contenedor">
                <img className="interprete-imagen" alt="profile" src={imagen} />
                <h1>{nombre}</h1>
                <p>{biografia}</p>
            </div>
        </>
    );
};

export default Interprete;