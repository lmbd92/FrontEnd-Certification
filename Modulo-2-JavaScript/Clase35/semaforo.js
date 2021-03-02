"use strict";
let colorInput = prompt("Ingrese un color");

/* function puedeAvanzar(color) {
  if (color == "amarillo" || color == "rojo") {
    return false;
  } else if (color == "verde") {
    return true;
  }
  return false;
} */

const puedeAvanzar = (color) => {
  if (color == "amarillo" || color == "rojo") {
    return false;
  } else if (color == "verde") {
    return true;
  }
  return false;
};

let avanzar = puedeAvanzar(colorInput);
if (avanzar === true) {
  console.log("Puede avanzar");
} else {
  console.log("No puede avanzar");
}
