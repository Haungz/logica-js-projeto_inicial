alert("Bem vindo ao jogo do número secreto!")
let numeroSecreto = 8
let chute = 0
let tentativas  = 0

while (chute != numeroSecreto){
    chute = prompt("Escolha um número entre 1 e 10")
    tentativas ++
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você acertou o número secreto!: ${numeroSecreto}`)
    } else if (chute > numeroSecreto) {
        alert(`Você errou! O número é menor que ${chute}!`)
    } else {
        alert(`Você errou! O número é maior que ${chute}!`)
    }
}

alert(`Você acertou o número secreto "${numeroSecreto}" com ${tentativas} tentativas`)