"use strict";
let resultadoVisor = '';
function addNum(numero) {
    resultadoVisor += numero;
    const visor = document.getElementById('visor');
    visor.value = resultadoVisor;
}
function addOp(operator) {
    resultadoVisor += operator;
    const visor = document.getElementById('visor');
    visor.value = resultadoVisor;
}
function clearScreen() {
    resultadoVisor = '';
    const visor = document.getElementById('visor');
    visor.value = '';
}
function calculate() {
    try {
        resultadoVisor = eval(resultadoVisor).toString();
        const visor = document.getElementById('visor');
        visor.value = resultadoVisor;
    }
    catch (e) {
        const visor = document.getElementById('visor');
        visor.value = 'Expressão inválida';
        resultadoVisor = '';
    }
}
function deleteLastCharacter() {
    resultadoVisor = resultadoVisor.slice(0, -1);
    const visor = document.getElementById('visor');
    visor.value = resultadoVisor;
}
