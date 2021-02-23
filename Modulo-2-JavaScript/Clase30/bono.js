"use strict";

let antiguedad = Number(prompt("Ingrese su antiguedad en años"));
let bono = 0;

if (antiguedad >= 5) {
  bono = 1000;
} else if (antiguedad == 4) {
  bono = 400;
} else if (antiguedad == 3) {
  bono = 300;
} else if (antiguedad == 2) {
  bono = 200;
} else if (antiguedad == 1) {
  bono = 100;
} else {
  bono = 0;
}
alert("Tu bono es: " + bono);
