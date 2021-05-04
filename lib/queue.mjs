/*
    ESTRUTURAS DE DADOS - FILA

    - Fila é uma estrutura de dados linear de acesso restrito, que permite apenas as operações
    de enfileiramento (enqueue) e desenfileiramento (dequeue), a 1ª ocorrendo no final da estrutura
    e a 2ª no início da estrutura.
    - Como consequência a fila funciona pelo princípio FIFO (first in, first out - 1º a entrar, 1º a sair).
    - A principal aplicação das filas são as tarefas que envolvem o processamento de tarefas por
    ordem de chegada.
*/

export class Queue {
    #data

    constructor() {
        this.#data = [] //vetor vazio
    }

    //inserção na fila (enfileiramento)
    enqueue(val) {
        this.#data.push(val)
    }

    //remoção da fila (desenfileiramento)
    dequeue() {
        return this.#data.shift()
    }

    //"espiadinha" (no início)
    peek() {
        return this.#data[0]
    }

    //verificar se a fila está vazia
    get empty() {
        return this.#data.length === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }
}