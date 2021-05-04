export class Queue {

    #data
    #head
    #tail

    constructor() {
        this.#data = {} //objeto vazio
        this.#head = 0  //início da fila 
        this.#tail = -1 //final da fila
        //console.log(this.#data, this.#head, this.#tail)
    }

    enqueue(val) {
        this.#tail++
        this.#data[this.#tail] = val
    }

    dequeue() {
        //se a fila já estiver vazia, retorna undefined para não
        //afetar o posicionamento de #head
        if(this.empty) return undefined

        let temp = this.#data[this.#head] //salva o elemento no início da fila
        delete this.#data[this.#head]     //apaga o elemento no início da fila
        this.#head++                      //chega o início da fila para a frente
        //console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    peek() {
        return this.#data[this.#head]
    }

    get empty() {
        return this.#tail - this.#head + 1 === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }
}

/*
let fila = new Queue()

fila.enqueue('Leila')
fila.enqueue('Adalberto')
fila.enqueue('Cléber')
fila.enqueue('Paula')

let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

let atendido = fila.dequeue()
console.log({atendido})

fila.dequeue()
fila.dequeue()
fila.dequeue()*/