"use strict";

let letra = prompt("Ingrese una letra");

/* if (
  letra == "a" ||
  letra == "e" ||
  letra == "i" ||
  letra == "o" ||
  letra == "u"
) {
  console.log("Es vocal");
} else {
  console.log("No es vocal");
} */

const esVocal = (letra) => {
  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  ) {
    return true
  } else {
    return false
  }
};

const validar = esVocal(letra);

if (validar){
    console.log("Es vocal");
}else{
    console.log("No es vocal");
}
