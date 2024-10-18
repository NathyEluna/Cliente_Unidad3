"use strict";

//Ejercicio 01
export const obtenerNumeroAleatorio = () =>{
    return Math.floor(Math.random() * 1000) + 1;
};

//Ejercicio 02
export function generarColorAleatorio() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};

export function cambiarColorAleatoriamente(referencia) {
  const color = generarColorAleatorio();

  referencia.current.style.background = color;
};

//Ejercicio 03
export function incrementar(referencia){
  let valorInicial = parseInt(referencia.current.innerHTML);

  if(valorInicial >= 0){
    valorInicial++;
    referencia.current.innerHTML = valorInicial;
  };
};

export function decrementar(referencia){
  let valorInicial = parseInt(referencia.current.innerHTML);

  if(valorInicial > 0){
    valorInicial--;
    referencia.current.innerHTML = valorInicial;
  };
};
