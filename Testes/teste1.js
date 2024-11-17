alert("Boas vindas ao nosso site!")

let nome = "Lua"
let idade = 25
let numeroDeVendas = 50
let saldoDisponivel = 1000

alert("Erro! Preencha todos os campos!", numeroDeVendas)

let mensagemDeErro = "Erro! Preencha todos os campos!"

alert(mensagemDeErro)

nome = prompt("Digite o nome do usuário")

alert(`Seu nome é: ${nome}`)

console.log("O nome é:",nome)

idade = prompt("Digite sua idade")

if (idade >= 18) {
    alert("Pode tirar sua habilitação!")
}
else {
    alert("Você não tem a idade mínima para tirar habilitação")
}