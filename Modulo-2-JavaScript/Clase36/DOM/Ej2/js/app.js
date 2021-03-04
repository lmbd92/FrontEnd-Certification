'use strict';

/* const fondo = prompt("Ingrese un color de fondo en hexadecimal" + "\n" + "No olvide incluir el # al inicio del color"); */

//Capturo el elemento DOM basado en el id "ini"
const id = document.getElementById("ini");
//Modifico el texto del DOM (h1)
id.innerHTML = "Este es el elegido";


//Remuevo la clase aplicada en el HTML
id.classList.remove("red");
//Le aplico una nueva clase del CSS
id.classList.add("green");

//Capturo el elemento DOM basado en la etiqueta "body"
const body = document.querySelector("body");

//Modifico el style de la etiqueta body con ayuda del metodo style
body.style = `background-color: ${fondo}`;
