"use strict";

let num1 = Number(prompt("Ingrese el 1er número"));
let num2 = Number(prompt("Ingrese el 2do número"));

let resultado = restar(num1, num2);

function restar(a, b) {
  let resultado = a - b;
  return resultado;
}

console.log("El resultado es: " + resultado);
