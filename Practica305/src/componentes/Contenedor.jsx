import "./Contenedor.css";

const Contenedor = (props) => {
    const {children} = props;

    return(
        <>
            <div id="contenedor-contenedor">
                {children}
            </div>
        </>
    )
};

export default Contenedor;