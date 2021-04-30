export class stack {

    #data
    #tail //cauda, fim da estrutura (topo)
    constructor() {
        this.#data = {} //objeto vazio
        this.#tail = -1 //pilha vazia
        console.log(this.#data, this.#tail)
    }

    push(val) {
        this.#tail++
        this.#data[this.#tail] = val
        console.log(this.#data, this.#tail)
    }

    pop() {

        //se a pilha estiver vazia, já retorna undefined no início p/
        //evitar que #tail caia abaixo de -1
        if(this.empty) return undefined

        let temp = this.#data[this.#tail]
        delete this.#data[this.#tail]
        this.#tail--
        return temp
        console.log(this.#data, this.#tail)
    }

    peek() {
        return this.#data[this.#tail]
    }

    get empty() {
        return this.#tail === -1
    }

    print() {
        return JSON.stringify(this.#data)
    }

}

let pilha = new stack()

pilha.push('banana')
pilha.push('maçã')
pilha.push('uva')
let x = pilha.pop()
console.log({x})
pilha.pop()
pilha.pop()
pilha.pop()