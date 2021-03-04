"use strict";

const NOMBRE = prompt("Ingrese su nombre");

const TITULO = document.querySelector("h1");
TITULO.innerHTML = `Hola ${NOMBRE}`;
TITULO.style = "color: red; background-color: gray;";
