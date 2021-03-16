"use strict";

//Capturo el elemento del DOM mediante el tag
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  alert("Botón accionado");
});

const myAlert = () => {
  alert("Presionó una letra");
};

input.addEventListener("keypress", myAlert);
input.addEventListener("keydown", myAlert);
input.addEventListener("keyup", myAlert);
