function imprimirTeclas() {
    const teclas = document.querySelector(".teclas");
    for(let i = 0; i < 17; i ++) {
        teclas.innerHTML += `<button onclick="colocarVisor(this)">${i}</button>`;
    }
}

function colocarVisor(elemento) {
    const visor = document.querySelector(".visor");
    visor.innerHTML += elemento.innerHTML;
}

imprimirTeclas()
