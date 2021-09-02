Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
       if (nota.entre(9, 10)) {
        console.log("Parabéns!")
    }  else if (nota.entre (7, 8.99)) {
        console.log ("Aprovado")
    }  else  {
        console.log ("Você está reprovado")
    }

}
imprimirResultado (10)
imprimirResultado (9)
imprimirResultado (8)
imprimirResultado (7)
imprimirResultado (6)
imprimirResultado (5)
imprimirResultado (4)
imprimirResultado (3)
imprimirResultado (2)
imprimirResultado (1)
imprimirResultado (0)