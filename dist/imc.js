"use strict";
let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let result = document.querySelector("#result");
function calcImc() {
    let resultado = document.querySelector();
    let imc = (weight.value / (height.value * height.value)).toFixed(2);
    console.log(imc);
}
