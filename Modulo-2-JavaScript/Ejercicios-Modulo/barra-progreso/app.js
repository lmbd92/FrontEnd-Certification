'use strict';
/* Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora) */

const porcentajeAvance = Number(prompt("Ingrese el porcentaje de avance, sin el simbolo %"));
const progreso = document.querySelector(".progreso");
progreso.style = `width: ${porcentajeAvance}%;`;