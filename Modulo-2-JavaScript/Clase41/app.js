'use strict';
const texto = "Hola cómo estás?";

//el metodo length cuenta el largo de un string almacenado en una variable o estructura de datos.
console.log(texto.length);

//toUpperCase = Convierte todos los caracteres alfabeticos de un string en mayuscula
console.log(texto.toUpperCase());

//toLowerCase = Convierte todos los caracteres alfabeticos de un string en minuscula
console.log(texto.toLowerCase());

//El método slice(iniTrozo, [finTrozo]) extrae una sección de una cadena y devuelve una cadena nueva, cuando finTrozo es negativo, se trata como longCadena + finTrozo donde longCadena es la longitud de la cadena (por ejemplo, si finTrozo es -3 se trata como longCadena - 3).
console.log(texto.slice(1,3));

//El método includes(searchString, [position]) determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda. position indica la posición desde donde iniciaría la busqueda
console.log(texto.includes("Hola"));

//El método indexOf(valorBusqueda, [indiceDesde])devuelve el índice de la cadena buscada, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.
console.log(texto.indexOf("cómo", 5));

//El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo. El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función que será llamada para cada coincidencia. Si el patrón es una cadena, sólo la primera coincidencia será reemplazada. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace
console.log(texto.replace("Hola", "Hi"));