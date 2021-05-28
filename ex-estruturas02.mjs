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

function verificarPalin(palin) {

    if(palin === undefined || palin === null || (palin !== null && palin.length === 0)){
        return false
    }

    const deque = new Deque()
    const letrasMin = palin.toLocaleLowerCase().split(' ').join('') // transforma todas as letras em minúsculas e retira espaços
    let iguais = true
    let letra_inicio
    let letra_fim
    

    for(let i = 0; i < letrasMin.length; i++) {
        deque.insertBack(letrasMin.charAt(i))
    }
    
    // Verificando se o texto é um palíndromo
    while(! deque.empty && iguais) {
        letra_inicio = deque.removeFront()
        letra_fim = deque.removeBack()
        if(letra_inicio !== letra_fim) {
            iguais = false
        }
    } 
    return iguais
} 
console.log(verificarPalin('level'))
