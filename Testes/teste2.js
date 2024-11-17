let fimDeSemana = ["sábado","domingo"]
let diasUteis = ["segunda","terça","quarta","quinta","sexta"]
let diaAtual = prompt("Qual dia da semana você está?").toLowerCase()

if (fimDeSemana.includes(diaAtual)) {
    alert("Bom fim de semana!")
} else if (diasUteis.includes(diaAtual)) {
    alert("Bom dia!")
} else {
    alert("Você não digitou um dia válido")
}