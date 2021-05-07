/*
    ESTRUTURA DE DADOS DEQUE

    - Deque = DOuble-Ended Queue (fila de duas pontas)
    - deque é uma lista linear de acesso restrito, que permite operações
    de enfileiramneto (insertFront/insertBack) e desenfileiramento (removeFront/removeBack), a primeira ocorrendo no final
    e asegunda no inicio da estrutura.
    - Como consequência, o deque NÃO SEGUE o princípio FIFO (First In, First Out-primeiro a entrar, primeiro a sair).
    - A principal aplicação dos deques são situações em que filas precisam aceitar
    a inserção de itens prioritários e desistências do último item.
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
