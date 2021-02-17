'use strict';

let edadHumano = Number(prompt("Ingrese su edad para calcular su edad perro: "));
let edadPerro = edadHumano / 7;
let edadPerroSinDecimal = edadPerro.toFixed(1);

alert(`Su edad perro es: ${edadPerroSinDecimal} años`);