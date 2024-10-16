"use strict";

//Ejercicio 01
//Función para censurar cualquier palabra de la página.
export function censurarPalabra(palabra){
    // Reemplazar todas las ocurrencias de la palabra por "Contenido BLoqueado".
    let texto = document.body.innerHTML.replaceAll(palabra, "<span class='censurado'>Contenido Bloqueado</span>")

    //Actualizamos el contenido del body.
    document.body.innerHTML = texto;

    //La función no necesita de un return porque modifica directamente el contenido del sítio web y no hay nada que devolver.
};

//Ejercicio 02
//Función para crear la tabla con cualquier cantidad de filas y columnas.
export function crearTabla(filas, columnas) {
    //Creando la tabla
    const tabla = document.createElement('table');

    //Empezamos la numeración en 1 y no 0.
    let contador = 1;

    //Crear las filas y columnas
    for (let i = 0; i < filas; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement('td');

            //Asignar el número a la celda.
            celda.textContent = contador;
            contador++;

            //Añadir la celda a la fila.
            fila.appendChild(celda); 
        };

        //Añadir la fila a la tabla.
        tabla.appendChild(fila); 
    };

    // Añadir la tabla al div creado en el HTML.
    document.getElementById("container").appendChild(tabla);
};

//Función para ver se un número es primo.
function esPrimo(numero) {
    if (numero < 2) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i === 0) return false;
    };

    return true;
};

//Función para buscar los números primos en la tabla y poner una clase en cada celda si el número es primo.
export function aplicarEstiloPrimos(){
    //Seleccionamos todas las celdas
    const celdas = document.querySelectorAll('td');

    celdas.forEach(celda => {
        //Obtener el número de la celda
        const numero = parseInt(celda.textContent);

        if (esPrimo(numero)) {
            // Añadir clase si el número es primo
            celda.classList.add('primo');
        };
    });
};

//Ejercicio 03
// Función para generar colores aleatorios
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };

    return color;
};
  
// Función para cambiar aleatoriamente el color de fondo de un párrafo
export function cambiarColorAleatoriamente() {
    //Seleccionar todos los párrafos dentro de la función
    const parrafos = document.querySelectorAll("p");

    //Restablecer el color de fondo de todos los párrafos
    parrafos.forEach(p => p.style.backgroundColor = "rgb(222, 222, 222)");
  
    //Seleccionar un párrafo aleatoriamente
    const indexAleatorio = Math.floor(Math.random() * parrafos.length);
    const parrafoAleatorio = parrafos[indexAleatorio];
  
    //Cambiar el color de fondo del párrafo seleccionado
    parrafoAleatorio.style.backgroundColor = getRandomColor();
  };
  
//Ejercicio 04
//Función para mostrar la imagen.
export function mostrarImagen(indice) {
    var imagenes = document.getElementById("carrusel").getElementsByTagName("img");
    
    for (var i = 0; i < imagenes.length; i++) {
        //Ocultamos todas las imágenes.
        imagenes[i].style.opacity = 0;
    };

    var opacidad = 0;
    var intervaloAparecer = setInterval(() => {
        //Incrementar la opacidad poco a poco.
        opacidad += 0.05;  
        imagenes[indice].style.opacity = opacidad;

        if (opacidad >= 1) {
            //Detener incremento de opacidad al llegar a 1(máximo).
            clearInterval(intervaloAparecer);
        };
    }, 500 / 20);  //Ajustar el tiempo de la transición
};

//Función para iniciar a cambiar las imagenes.
export function iniciarCarrusel() {
    let imagenes = ["./img/doom1.jpg", "./img/doom2.jpg", "./img/doom3.jpg", "./img/doom4.jpg"];
    //Para que la imagen inicial sea la primera.
    let imagenActual = 0;
    //Mostrar la primera imagen.
    mostrarImagen(imagenActual);

    setInterval(() => {
        //Cambiamos a la siguiente imagen. Esa parte tuve que buscar como hacer.
        imagenActual = (imagenActual + 1) % imagenes.length;
        //Mostrar la imagen.
        mostrarImagen(imagenActual);
    }, 2000);
};
