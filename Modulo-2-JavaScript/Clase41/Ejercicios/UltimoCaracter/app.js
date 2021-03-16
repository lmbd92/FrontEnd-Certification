'use strict';
/* Crear una función esUltimoCaracter que tome como argumentos una palabra y un caracter y devuelva true si la palabra termina con el caracter o false de lo contrario */

const esUltimoCaracter = (palabra, caracter) => palabra.slice(-1)== caracter;

console.log(esUltimoCaracter('lovelace', 'e')); //True
console.log(esUltimoCaracter('lovelace', 'f')); //False
