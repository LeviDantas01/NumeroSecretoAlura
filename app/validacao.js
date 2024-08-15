function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>';
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorvalor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O númeor secreto é menor<i class="fa-solid fa-arrow-down-long"></i></div>`;
    } else {
        elementoChute.innerHTML += `<div>O númeor secreto é maior<i class="fa-solid fa-arrow-up-long"></i></div>`;

    }
}

function chteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorvalor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});