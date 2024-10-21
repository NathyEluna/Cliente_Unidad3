//Devuelve un UUID aleatorio para identificar elementos.
export const generarUuidAleatorio = () => {
    return crypto.randomUUID();
  };

//Ejercicio 1
//Función para mostrar el componente Interpretes
export const mostrarElenco = (referencia) => {
  referencia.current.classList.toggle("hidden");
};

//Función para mostrar el componente 
export const mostrarTaquilla = (referencia) => {
  referencia.current.classList.toggle("hidden");
};