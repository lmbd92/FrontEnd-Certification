"use strict";
/*imagen
Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

Opción elegida	Ancho de imagen
chica	200px
mediana	500px
grande	800px

0. crear las clases en el html
1. con un promp pedir al usuario los 3 tamaños posible de la img
2. seleccionar la imagen del html por id
3. con un condicional indicar que clase aplicarle al elemento img que corresponde segun lo ingresado por el usuario
*/

const imagen = document.getElementById("imagen");

const tamanioImagen = prompt(
  "Ingrese el tamaño que quiere para su imagen: pequeño, mediano,grande"
);

if (tamanioImagen == "pequeño") {
  imagen.classList.add("chico");
} else if (tamanioImagen == "mediano") {
  imagen.classList.add("mediano");
} else if (tamanioImagen == "grande") {
  imagen.classList.add("grande");
} else {
  alert("opción no valida");
}
