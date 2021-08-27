function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random () * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([120,10])) 
console.log(rand([992])) 
console.log(rand([, 10])) // valores menores que 10
console.log(rand([])) // assume os valores de 0 à 1000
