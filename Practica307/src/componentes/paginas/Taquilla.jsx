import "../../css/pelicula.css";

const Taquilla = (props) => {
    const {recaudacion} = props;
  return (
    <>
        <p className="pelicula-recaudacion">{recaudacion}</p>
    </>
  )
};

export default Taquilla