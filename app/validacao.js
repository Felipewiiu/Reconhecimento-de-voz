function verificaChuteValido (chute){
    const numero = +chute

    if(Number.isNaN(numero)){ // extrair para uma função global
        elementoChute.innerHTML += "Isso não é um valor válido" // += significa o própio elemento mais alguma coisa
        return
    }


    if(numeroForMaiorQueValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1 class='acerto'>UAUU você acertou!!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</buton>
        `
        tocaSom2()
    
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-wide-short"></i></div>`

    }else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-wide-short"></i></div>`
    }
}

function numeroForMaiorQueValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click", e =>{
    if(e.target.id == "jogar-novamente"){
        window.location.reload()
    }
})

