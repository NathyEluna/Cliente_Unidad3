import "../../css/cabecera_pie.css";

const Cabecera = (props) => {
    const { children } = props;
  return (
    <>
        <div id="cabecera">
            {children}
        </div>
    </>
  )
};

export default Cabecera;