"use strict";

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const cualBtn = (event) => {
    console.log(event);
  alert(`Presionó el botón ${event.target}`);
};

btn1.addEventListener("click", cualBtn);
btn2.addEventListener("click", cualBtn);
btn3.addEventListener("click", cualBtn);
