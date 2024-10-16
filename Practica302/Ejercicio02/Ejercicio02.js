"use strict";
import {crearTabla, aplicarEstiloPrimos} from "../biblioteca/biblioteca.js";

//Llamada a la función para crear la tabla.
crearTabla(10, 10);

//Aplicar estilo a los números primos después de 2 segundos.
setTimeout(() => {
    //Llamada a la función de pintar las celdas con números primos.
    aplicarEstiloPrimos();
}, 2000)
