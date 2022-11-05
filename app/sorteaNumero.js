const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()
const box = document.querySelector(".box")
const elementoMenorValor = document.querySelector("#menor-valor")
const elementoMaiorValor = document.querySelector("#maior-valor")

function gerarNumeroAleatorio (){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

