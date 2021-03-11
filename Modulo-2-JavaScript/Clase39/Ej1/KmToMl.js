"use strict";
//1. Obtenemos los elementos del DOM involucrados
const InputKm = document.getElementById("InputKm");
const InputMillas = document.getElementById("InputMll");

//2. Cuando haya un input se ejecuta la acción
InputKm.addEventListener("input", () => {
  //console.log(typeof InputMillas.value);
  InputMillas.value = Number(InputKm.value)*0.62;
});

InputMillas.addEventListener("input", () => {
    //console.log(typeof InputMillas.value);
    InputKm.value = Number(InputMillas.value)*1.61;
  });
