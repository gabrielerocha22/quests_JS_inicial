function getInteiroAleatorioEntre ( min, max) {
    const valor = Math.random () * ( max - min) + min
    return Math.floor (valor)
}

let opcao = 0 

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log (`Opçãoo escolhida foi ${opcao}.`)
}

console.log ('Fim!')