"use strict";

const sum = (a, b) => {
  return a + b;
};

const multiplicar = (a, b) => {
  return a * b;
};

const esPar = (num) => {
  return num % 2 == 0;
};

const num1 = Number(prompt("Ingrese el num1"));
const num2 = Number(prompt("Ingrese el num2"));
console.log(sum(num1, num2));
console.log(multiplicar(num1, num2));
console.log(esPar(num1), esPar(num2));
