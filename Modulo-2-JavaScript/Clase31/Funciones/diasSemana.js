"use strict";

function dia_de_la_semana(numDia) {
  if (numDia == 1) {
    return "Lunes";
  } else if (numDia == 2) {
    return "Martes";
  } else if (numDia == 3) {
    return "Miércoles";
  } else if (numDia == 4) {
    return "Jueves";
  } else if (numDia == 5) {
    return "Viernes";
  } else if (numDia == 6) {
    return "Sábado";
  } else if (numDia == 7) {
    return "Domingo";
  } else {
    return "Opción invalida";
  }
}

let dia = Number(prompt("Ingrese un numero del 1 al 7 para retornarle el día de la semana:"));
console.log("El día de la semana es: " + dia_de_la_semana(dia));
