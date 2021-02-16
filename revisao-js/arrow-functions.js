// Função que eleva um nº ao quadrado
// Se precisar disso em situação real, use Math.pow()
// ou o operador **
function quadrado(n) {
    return n * n
}

console.log(quadrado(9))

// Características da função acima:
// 1. Apenas um parâmetro
// 2. Apenas uma linha de código, com return
// 3. Cadidata perfeita a virar arrow function

// Transformando em arrow function
// a. não precisa de parênteses envolvendo o parâmetro
// b. a palavra function é substituída pelo sinal =>, depois do parâmetro
// c. não são necessárias as chaves, nem a palavra return
const quadrado2 = n => n * n
console.log(quadrado2(9))