/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/
export class Deque {

    #data

    constructor() {
        this.#data = []
    }

    insertFront(val) {
        this.#data.unshift(val)
    }

    insertBack(val) {
        this.#data.push(val)
    }

    get empty() {
        return this.#data.length === 0
    }

    get count() {
        return this.#data.length
    }

    removeFront() {
        return this.#data.shift()
    }

    removeBack() {
        return this.#data.pop()
    }

    peekFront() {
        return this.#data[0]
    }

    peekBack() {
        return this.#data[this.#data.length - 1]
    }

    print() {
        return JSON.stringify(this.#data)
    }
}

let deque = new Deque()
// texto a ser analisado
let texto = "A base do teto desaba"
// transformar todas as letras do texto em minúsculas e retirar espaços
const textoMin = texto.toLocaleLowerCase().split(' ').join('')

// inserindo as letras no deque
for(let i = 0; i < textoMin.length; i++) {
    deque.insertFront(textoMin.charAt(i))
}

let letraInicio
let letraFim
let count = 0
// analisando se o texto é um palíndromo ou não
while(deque.count > 1) {
    letraInicio = deque.removeFront()
    letraFim = deque.removeBack()

    if(letraInicio !== letraFim){ // comparando letra do início
       count += 1 // variável para contar diferença de letras inicio-fim
    }
} 

if(count >= 1) {
    console.log(`O texto "${texto}" NÃO É um palíndromo.`)
}
else {
    console.log(`O texto "${texto}" É um palíndromo.`)
}
