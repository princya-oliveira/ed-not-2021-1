let frutas = ["maçã", "laranja", "pera", "uva", "mamão", "banana"]

// Vetor original
console.log(frutas)

// Retirar o último elemento de um vetor
let ultimaFruta = frutas.pop()

// Vetor alterado
console.log(frutas)
console.log(ultimaFruta)

// Remoção do primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Remoção em posição intermediária
// 1º parâmetro -> posição de remoção (contagem começa em 0)
// 2º parâmetro -> quantidade de elementos a remover
let terceiraFruta = frutas.splice(2, 1) // SEMPRE retornará um vetor

console.log(frutas)
console.log(terceiraFruta)

// Inserindo no final do vetor
frutas.push('amora') // pode inserir mais de um elemento ao mesmo tempo
// p. ex.:
// frutas.push('amora', 'jaca')
console.log(frutas)

// Inserir no início do vetor
frutas.unshift('jaboticaba') // também pode inserir mais de um elemento ao mesmo tempo
console.log(frutas)

// Inserção no meio do vetor
// Parâmetros do splice() para inserção:
// 1º posição para inserção
// 2º nº de elementos a serem excluídos
// 3º elementos a ser incluído
frutas.splice(2,0,'pêssego') // inserindo na 3ª posição
// Tembém funciona para inserir vários elementos ao mesmo tempo, p. ex.:
// frutas.splice(2,0,'pessego','jaca')
console.log(frutas)

// Usando splice() para substituição
frutas.splice(4, 1, 'ameixa') // substituição na 5ª posição
console.log(frutas)

// Inserção multipla com splice()
frutas.splice(1,0, 'nectarina', 'jaca')
console.table(frutas)

/*** PERCURSOS DE VETOR ***/

console.log('-----------------------------------')

// 1º método: for() tradicional
// a. a contagem começa em 0
// b. ocorre enquanto o contador for menor que o nº de elementos do vetor
// c. é o método mais flexivel, pois, se necessário, é possível fazer um 
// percurso parcial (começa em algum elemento que não é o 1º e termina antes do final)
for(let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}

// 2º método: for() tradicional em ordem inversa
// a. o contador inicia-se em length - 1
// b. a condição é contador > ou = a 0(primeiro elemento)
for(let i = frutas.length - 1; i >= 0; i--) {
    console.log(i, frutas[i])
}

// 3º método: for..of()
// a. sempre percorre o vetor inteiro, na ordem natural, sem necessidade de
// uma variável contadora
// Variáveis:
// f -> variável receberá cada elemento do vetor (pode ser qualquer nome válido)
// frutas -> é o vetor a ser percorrido
for(let f of frutas) {
    console.log(f)
}

// 4º método: percurso com forEach()
// forEach() recebe como parâmetro uma função que recebe como parâmetro
// cada elemento do vetor
// O nome do parâmetro da função pode ser qualquer nome válido de identificador
frutas.forEach(function(elemento) {
    console.log(elemento)
})

// O mesmo forEach(), usando uma arrow function como parâmetro
frutas.forEach(elemento => console.log(elemento))


