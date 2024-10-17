"use strict";

export const obtenerNumeroAleatorio = () =>{
    return Math.floor(Math.random() * 1000) + 1;
};

export function generarColorAleatorio() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};

export function cambiarColorAleatoriamente(referencia) {
    //Seleccionar todos los párrafos dentro de la función
    const parrafo = referencia.current;

    //Restablecer el color de fondo de todos los párrafos
    parrafo.forEach(p => p.style.backgroundColor = "rgb(222, 222, 222)");

  
    //Cambiar el color de fondo del párrafo seleccionado
    parrafo.style.backgroundColor = getRandomColor();
  };