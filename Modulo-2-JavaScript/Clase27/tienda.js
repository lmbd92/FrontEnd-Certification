"use strict";

/* Declarar variables */
let nombre = prompt("Ingrese su nombre"),
  apellido = prompt("Ingrese su apellido");

/* Función flecha */
const saludar = (nom, ape) => {
  /* alert(`hola ${nom} ${ape}, bienvenida a Ada`); */
  return `hola ${nom} ${ape}, bienvenida a Ada`;
};

/* Llamar la función e imprimir en pantalla*/
let textoAlert = saludar(nombre, apellido);
alert(textoAlert);

/* Llamar la función e imprimir en consola*/
let textoConsole = saludar("Gloria", "Durango");
console.log(textoConsole);

/* BUENAS PRACTICAS PARA FUNCIONES EN JS
    * Los nombres de las funciones deben ser        descriptivos y cortos.

    * Las funciones deben ejecutar una unica tarea

*/
