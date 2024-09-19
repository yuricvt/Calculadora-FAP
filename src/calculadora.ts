let resultadoVisor: string = '';

function addNum(numero:string): void {
    resultadoVisor += numero;
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = resultadoVisor;
}

function addOp(operator:string): void {
    resultadoVisor += operator;
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = resultadoVisor;
}

function clearScreen(): void {
    resultadoVisor = '';
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = '';
}

function calculate(): void {
    try {
        resultadoVisor = eval(resultadoVisor).toString();
        const visor = document.getElementById('visor') as HTMLInputElement;
        visor.value = resultadoVisor;
    } catch (e) {
        const visor = document.getElementById('visor') as HTMLInputElement;
        visor.value = 'Expressão inválida';
        resultadoVisor = '';
    }
    
}

function deleteLastCharacter(): void {
    resultadoVisor = resultadoVisor.slice(0, -1);
    const visor = document.getElementById('visor') as HTMLInputElement;
    visor.value = resultadoVisor;
}