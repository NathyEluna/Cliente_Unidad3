"use strict";
import {censurarPalabra} from "../biblioteca/biblioteca.js";

setTimeout(()=>{
    //console.log(document.body.innerHTML.replaceAll('sexo', '<span class="censurado">Contenido Bloqueado</span>'));
    censurarPalabra();
}, 2000)

