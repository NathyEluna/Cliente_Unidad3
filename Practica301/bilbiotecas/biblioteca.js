"use strict";

//Ejercicio 1
//El número de párrafos de la página
const parrafos = document.getElementsByTagName("p");
const cantidadParrafos = parrafos.length;
//Texto del segundo párrafo
const parrafo2 = document.body.firstElementChild.nextElementSibling;
//Cantidad de enlaces
const enlaces = document.getElementsByTagName("a");
const cantidadEnlaces = enlaces.length;
//La dirección del primer enlace
const direccionEnlace = enlaces.firstElementChild.getAttribute(href);
console.log(direccionEnlace);
//La dirección del penúltimo enlace



const idTimeOut = setTimeout(() => {
    const info = document.getElementById("info");
    info.innerHTML = `<p>Se han encontrado ${cantidadParrafos} párrafos en la página.</p>`;
    info.innerHTML += `<p>El contenido del segundo párrafo es:${parrafo2?.innerHTML ? parrafo2.innerHTML : "No existe el párrafo"}.</p>`;
    info.innerHTML += `<p>Se han encontrado ${cantidadEnlaces} enlaces en la página.</p>`;
    info.innerHTML += `<p>La dirección del primer enlace es: ${d}</p>`
}, 2000);

/*
*Hay que utilizar esa manera de buscar por otras etiquetas que no sean la primera o última.
*Otra manera de conseguir el texto del segundo parrafo
* El ? después de þarrafos[1]? es para que si el párrafo no existe, salte directamente a false ya que si el párrafo no existe no puedo utilizar .innerHTML
* info.innerHTML = `El contenido del segundo párrafo es:${parrafos[1]?.innerHTML ? parrafos[1].innerHTML : "No existe el párrafo"}.`
*
*Ya que lo que devuelve el getElementsByTagName es un 
*/