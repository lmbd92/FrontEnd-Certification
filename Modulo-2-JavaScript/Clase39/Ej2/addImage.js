"use strict";

const srcImage = document.querySelector("#srcImg");
const addImage = document.querySelector("#addImg");
const img = document.querySelector("#img");
console.log(addImage);

addImage.addEventListener("click", () => {
  if (srcImage.value != "") {
    img.src = srcImage.value;
    srcImage.value = "";
  } else {
    console.log("Ingresó Un Src vacío");
  }
});

img.addEventListener("click", () => {
  img.src = "";
});
