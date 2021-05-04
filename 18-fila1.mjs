import { Queue } from './lib/queue2.mjs'

let fila = new Queue()
console.log(fila.print())

fila.enqueue('Creusdete')
console.log(fila.print())

fila.enqueue('Jubinaldo')
console.log(fila.print())

fila.enqueue('Neuruvânia')
console.log(fila.print())

let proximo = fila.peek()
console.log({proximo})
console.log(fila.print())

let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())

fila.enqueue('Leniwander')
console.log(fila.print())
