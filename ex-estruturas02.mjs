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

const palin = 'A base do teto desaba' // texto/palíndromo a ser verificado

const fila = new Deque()

// Enfileirando o texto
for(let i = 0; i < palin.length; i++) {
    fila.insertBack(palin.charAt(i))
}
console.log(fila.print())

let palinRev = ''

// Desenfileirando/Verificando o texto
while(! fila.empty) {
    palinRev += fila.removeBack()
}
console.log(palinRev)