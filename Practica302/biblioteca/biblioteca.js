"use strict";

export const censurarPalabra = (palabra) => {
    let frase = document.createElement("span");
    frase.className = "censurado";
    frase.innerHTML = "Contenido Bloqueado";

   return document.body.innerHTML.replaceAll("sexo", "Contenido Bloqueado");
};