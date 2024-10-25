import "../../css/contenedor.css";

const Contenido = (props) => {
    const { children } = props;

  return (
    <>
      <div className="contenedor-contenido">
        {children}
      </div>
    </>
  )
};

export default Contenido