"use strict";
let precioHelado = 0;
const promo = prompt("Ingrese el numero de la promo de helado que desea pedir");

if (1 == promo) {
  precioHelado = 100;
} else if (2 == promo) {
  precioHelado = 180;
} else if (3 == promo) {
  precioHelado = 350;
} else {
  alert("La promo es incorrecta, ingrese 1 2 o 3");
}

console.log(promo);

let cantidad = 0;
if (1 == promo) {
  cantidad = 1 / 2;
} else if (2 == promo) {
  cantidad = 1;
} else {
  cantidad = 2;
}
console.log(cantidad);

const nombre = prompt("Desea indicarnos su nombre?");
console.log(nombre);

let cucuruchos = prompt("Cuantos cucuruchos desea agregar a su pedido?");
let precioCucurucho = 20;

console.log(cucuruchos * precioCucurucho);

let toppings = prompt("Desea agregarle toppings?");

let preciotoppings = 0;
if (toppings == "si") {
  preciotoppings = 50;
} else {
  preciotoppings = 0;
}

console.log(preciotoppings);

let envio = prompt("Desea que se lo enviemos a su domicilio?");
let precioenvio = 0;
if (envio == "si") {
  precioenvio = 50;
} else {
  precioenvio = 0;
}

console.log(precioenvio);

let gustos = prompt("Indique los 3 gustos que desea pedir:");
console.log(gustos);

let precioFinal;
precioFinal = precioHelado + preciotoppings + precioCucurucho + precioenvio;

let formaDePago = prompt(
  "Ingrese la palabra debito si desea esa forma de pago y  obtenga un 10%? De lo contrario ingrese Efectivo"
);
let descDebito = 0;

if (formaDePago == "debito") {
  descDebito = precioFinal * 0.9;
} else {
  descDebito = precioFinal;
}

console.log(
  "El cliente " +
    nombre +
    " pidió " +
    cantidad +
    " kg. de helado. Los gustos son " +
    gustos +
    " . Y el precio a abonar es " +
    precioFinal +
    " y su forma de pago es " +
    formaDePago +
    "."
);
