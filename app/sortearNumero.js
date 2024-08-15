const menorValor = 1;
const maiorvalor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorvalor + 1);
}

const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");
elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorvalor;