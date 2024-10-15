"use strict";

export function censurarPalabra(){
    let texto = document.body.innerHTML;
    texto = texto.replaceAll("sexo", "<span class='censurado'>Contenido Bloqueado</span>");

   return texto;
};