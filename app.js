alert("Bem vindo ao jogo do número secreto!")
let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
let chute = 0
let tentativas  = 0

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
    tentativas ++
    if (chute == numeroSecreto) {
        break
    } else if (chute > numeroSecreto) {
        alert(`Você errou! O número é menor que ${chute}!`)
    } else {
        alert(`Você errou! O número é maior que ${chute}!`)
    }
}

let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Você acertou o número secreto "${numeroSecreto}" com ${tentativas} ${palavraTentativas}`)