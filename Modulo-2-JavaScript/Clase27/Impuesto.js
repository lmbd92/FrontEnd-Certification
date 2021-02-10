"use strict";
const libros = 100;
const pizarra = 120;
const revistas = 50;
const IMPUESTO = 1.3;
const DESCUENTO = 0.9;

/* console.log(`El producto sale ${libros * DESCUENTO * IMPUESTO}`);
console.log(`El producto sale ${pizarra * DESCUENTO * IMPUESTO}`);
console.log(`El producto sale ${revistas * DESCUENTO * IMPUESTO}`); */

const imprimirPrecio = (item, producto) => {
    let mensajePrecioFinal = `El producto ${producto} cuesta ${(item * DESCUENTO) * IMPUESTO}`
    console.log(mensajePrecioFinal);
    alert(mensajePrecioFinal);
  
};

imprimirPrecio(libros, "Libros");
imprimirPrecio(pizarra, "Pizarras");
imprimirPrecio(revistas, "Revistas");
