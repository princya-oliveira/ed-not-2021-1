/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

export class Stack {

    #data // pilha resto
    #resto

    constructor() {
        this.#data = []      // Inicializa o vetor vazio
        this.#resto          // variável resto
        this.stringBin = '' // string p/ incluir número binário
    }

    // Inserção
    push(val) {
        while(val > 1) {
            this.#resto = Math.floor(val % 2)
            this.#data.push(this.#resto)
            val = Math.floor(val / 2)
        }
        this.#data.push(val)
    }

    // Retirada
    pop() {
        while(this.#data.length > 0) {
            this.stringBin += this.#data.pop().toString()
        }
        return this.#data.pop()
    }

    // "Espiadinha": retorna o valor que está no topo da pilha (último valor), mas
    // sem retirá-lo de lá
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // A pilha está vazia (true/false) - PROPRIEDADE CALCULADA (só getter)
    get empty() {
        return this.#data.length === 0
    }

    print() {
        return JSON.stringify(this.stringBin)
    }

}

let pilha = new Stack()
pilha.push(25)
let binario = pilha.pop()
console.log("O número binário correspondente é:", pilha.print(binario))

let pilha2 = new Stack()
pilha.push(255)
let binario2 = pilha.pop()
console.log("O número binário correspondente é:", pilha.print(binario))
