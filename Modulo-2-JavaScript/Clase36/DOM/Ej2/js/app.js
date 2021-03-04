'use strict';

const fondo = prompt("Ingrese un color de fondo en hexadecimal" + "\n" + "No olvide incluir el # al inicio del color");

const body = document.querySelector("body");
body.style = `background-color: ${fondo}`;
