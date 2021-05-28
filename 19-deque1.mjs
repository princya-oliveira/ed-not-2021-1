import { Deque } from './lib/Deque.mjs'

let deque = new Deque()

deque.insertBack('Margarida')
deque.insertBack('Pateta')
deque.insertBack('Gastão')
deque.insertBack('Donald')

console.log(deque.print())

deque.insertFront('Tio Patinhas')
console.log(deque.print())

deque.insertFront('Minie')
console.log(deque.print())

let primeiro = deque.peekFront()
let ultimo = deque.peekBack()
console.log({primeiro, ultimo})
console.log(deque.print())

let atendido = deque.removeFront()
console.log({atendido})
console.log(deque.print())

let desistente = deque.removeBack()
console.log({desistente})
console.log(deque.print())

deque.insertBack('Mickey')
console.log(deque.print())




