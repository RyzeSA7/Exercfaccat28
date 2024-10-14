function verificarVencedor() {
    // Lendo os nomes dos times
    let time1 = prompt("Digite o nome do primeiro time:")
    let time2 = prompt("Digite o nome do segundo time:")

    // Lendo o número de gols marcados por cada time
    let golsTime1 = parseInt(prompt(`Digite o número de gols marcados pelo ${time1}:`))
    let golsTime2 = parseInt(prompt(`Digite o número de gols marcados pelo ${time2}:`))

    // Verificando o vencedor
    if (golsTime1 > golsTime2) {
        console.log(`O vencedor é: ${time1}`)
    } else if (golsTime2 > golsTime1) {
        console.log(`O vencedor é: ${time2}`)
    } else {
        console.log("EMPATE")
    }
}

// Chamando a função
verificarVencedor()