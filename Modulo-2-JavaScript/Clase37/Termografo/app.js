"use strict";

const temp = Number(prompt("Ingrese un valor de temperatura en °C:"));
const tituloTemp = document.querySelector("#titulo");

tituloTemp.textContent = `Temperatura actual: ${temp} °C`;

if (temp < 0) {
  tituloTemp.className = "azul";
} else if (temp >= 0 && temp < 15) {
  tituloTemp.className = "celeste";
} else if (temp >= 15 && temp < 25) {
  tituloTemp.className = "verde";
} else if (temp >= 25 && temp < 30) {
  tituloTemp.className = "amarillo";
} else if (temp >= 30 && temp < 35) {
  tituloTemp.className = "naranja";
} else {
  tituloTemp.className = "rojo";
}
