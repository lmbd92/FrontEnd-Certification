"use strict";

let base = Number(prompt("Ingrese la base del triangulo"));
let altura = Number(prompt("Ingrese la altura del triangulo"));

function calcularAreaTriangulo(b, h) {
  let areaTriangulo = (b * h) / 2;
  return areaTriangulo;
}

function compararNumeros (a, b){
    if (a == b){
        return 1;
    }else{
        return -1;
    }
}

let resultado= calcularAreaTriangulo(base, altura);
let comparar = compararNumeros (base, altura);

console.log(`El área del triangulo es: ${resultado}`);
console.log(comparar);
