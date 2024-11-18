alert("Bem vindo ao jogo do número secreto!")
let numeroSecreto = parseInt(Math.random() * 100 + 1)
let chute = 0
let tentativas  = 0

while (chute != numeroSecreto){
    chute = prompt("Escolha um número entre 1 e 100")
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
