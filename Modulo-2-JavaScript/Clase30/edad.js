'use strict';

let edadVotante = Number(prompt("Ingrese su edad"));

if (edadVotante >= 18){
    alert("Debes Votar");
}else if (edadVotante>=16){
    alert("Podes votar");
}
else{
    alert("No debes votar");
}
