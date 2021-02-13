"use strict";
const valorArticulo = Number(prompt("Ingrese valor del articulo"));
const DESCUENTO = 0.2;
const IVA = 1.15;
let valorFinal = valorArticulo - valorArticulo * DESCUENTO;
let valorConIva = valorFinal * IVA;
alert(`El valor con descuento es: COP $${valorFinal} y el valor final con IVA es: COP $${valorConIva}`);

/* https://7ma-frontend-online.adaitw.org/docs/modulo-3/clase-38 */
