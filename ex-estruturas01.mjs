/*
    Utilize a estrutura de dados adequada e implemente um programa que converta
    um número decimal em um número binário.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

export class Stack {

    #data

    constructor() {
        this.#data = []      // Inicializa o vetor vazio
    }

    // Inserção
    push(val) {
        this.#data.push(val)
    }

    // Retirada
    pop() {
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
        return JSON.stringify(this.#data)
    }

}

let val = 25 // número a ser convertido em binário 
const pilha = new Stack()
let resto

while(val > 0) {
    resto = Math.floor(val % 2)
    pilha.push(resto)
    val = Math.floor(val / 2)
}

let stringBin = ''

while(! pilha.empty) {
    stringBin += pilha.pop().toString()
}
console.log(`O número correspondente convertido em binário é: ${stringBin}`)