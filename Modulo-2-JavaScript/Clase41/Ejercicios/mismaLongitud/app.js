"use strict";

/* Crear una función tienenMismaLongitud que tome como argumentos dos strings a y b y devuelva true si tienen la misma longitud o false de lo contrario */

//Cuando la función contiene una sola linea de código, podemos omitir el return, además podemos optimizar omitiendo el condicional if y else
const tienenMismaLongitud = (a, b) => a.length == b.length;

console.log(tienenMismaLongitud("javascript", "java")); // false
console.log(tienenMismaLongitud("manzana", "cerveza")); // true
