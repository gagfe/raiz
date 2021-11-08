"use strict";
var forma = document.getElementById ("forma"),
resultado = document.getElementById("resultado");
forma.addEventListener("submit",procesa,false);
function procesa(){
var base =parseInt( forma["base"].value);
var res=Math.sqrt(base);
forma["resultado"].value=res.toFixed(3);
}




