"use strict";
const button = document.getElementById("button");
const inputText = document.getElementById("inputText");
const checkBox = document.getElementById("checkbox");
const title = document.getElementById("titulo");
const form = document.getElementById("form");
const option =document.getElementById("option");

//event -> me da información del evento ejecutado, además tiene sus propias funciones, como preventDefault
button.addEventListener("click", (event) => {
  //preventDefault evita que se ejecute la acción por defecto
  event.preventDefault();
  console.log(event);
  console.log(inputText.value, checkBox.checked, option.value);

  if (checkBox.checked) {
    alert("Hola como estás?");
  }

  //Modifica el valor ingresado en el Input Text box
  inputText.value = "Ada";
});

//Cada vez que clickeo el objeto que tiene el evento focus, se ejecuta la acción
inputText.addEventListener("focus", () => {
  console.log("Hola ¿Cómo estás?");
});

//Cada vez que clickeo otro objeto o parte del documento diferente al objeto que tiene el evento blur, se ejecuta la acción
inputText.addEventListener("blur", () => {
  console.log("Me despido");
});

//Cada vez que modificas el valor del objeto input se ejecuta la acción
inputText.addEventListener("input", () => {
  console.log(inputText.value);
  title.textContent = inputText.value;
});

inputText.addEventListener("change", () => {
  //console.log("change", inputText.value);
});

//Se ejecuta una vez se acciona el submit del button
form.addEventListener("submit", () => {
  alert("Formulario enviado exitosamente");
});
