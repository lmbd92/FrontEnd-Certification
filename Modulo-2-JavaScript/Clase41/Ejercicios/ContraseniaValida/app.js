"use strict";

/* Crear una función esValida que tome como argumento una contrasenia (string) y devuelva true si tiene 8 caracteres o más o false si tienen menos de 8 caracteres*/

const esValida = (contrasenia) => contrasenia.length >= 8;

console.log(esValida("contraseniaMuySegura")); // true
console.log(esValida("abc123")); // false
