function pegarVisor() {
    const visor = document.querySelector(".visor");
    return visor;
}


function imprimirTeclas() {
    const teclas = document.querySelector(".parte-numerica");
    for(let i = 9; i >= 0; i --) {
        teclas.innerHTML += `<button onclick="colocarVisor(this)">${i}</button>`;
    }
}

function colocarVisor(elemento) {
    pegarVisor().innerHTML += elemento.innerHTML;
}

function pegarSinal(op) {
    for(let i = 0; i < op.length; i ++) {
        if(op[i] === "+" || op[i] === "-" || op[i] === "*" || op[i] === "/") {
            return op[i];
        }
    }
}

function pegarValor() {
    let operacaoMat = pegarVisor().innerHTML;
    let v1 = operacaoMat.slice(0, operacaoMat.indexOf(pegarSinal(operacaoMat)));
    let v2 = operacaoMat.slice(operacaoMat.indexOf(pegarSinal(operacaoMat)) + 1, operacaoMat.length);
    operarExpressao(v1, v2, operacaoMat);
}

function operarExpressao(v1, v2, op) {
    if(pegarSinal(op) === "+") {
        pegarVisor().innerHTML = Number(v1) + Number(v2);
    }
    else {
        if(pegarSinal(op) === "-") {
            pegarVisor().innerHTML = Number(v1) - Number(v2);
        }
        else {    
            if(pegarSinal(op) === "*") {
                pegarVisor().innerHTML = Number(v1) * Number(v2);
            }
            else {
                pegarVisor().innerHTML = Number(v1) / Number(v2);
            }
        }
    }
}

function limparVisor() {
    pegarVisor().innerHTML = "";
}

imprimirTeclas();
