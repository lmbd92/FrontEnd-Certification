'use strict';

const colorFondo = document.querySelector("body");

const color1 = prompt("Ingrese el valor del 1er color");
const color2 = prompt("Ingrese el valor del 2do color");
const color3 = prompt("Ingrese el valor del 3er color");

//Forma 1 style
//colorFondo.style = `background-color: rgb(${color1}, ${color2}, ${color3})`;

//forma 2 innerHTML
//colorFondo.innerHTML = `<style> body{background-color: rgb(${color1}, ${color2}, ${color3})};</style>`

//Forma 3 asignando el estilo a una constante
/* const estilos = `background-color: rgb(${color1}, ${color2}, ${color3})`;
colorFondo.style= estilos; */