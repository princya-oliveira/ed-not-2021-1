import { doublylinkedlist } from './lib/doublylinkedlist.mjs'

const lista = new DoublyLinkedList()
console.log(lista.print())

lista.insert(0, 'Odorico')  // Primeiro nodo (lista vazia)
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(1, 'Gercina')  // Inserção no final
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(0, 'Temístocles')  // Inserção no início
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(1, 'Deusdete')  // Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(2, 'Alípio')  // Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())

lista.insert(2, 'Cremilda')  // Inserção intermediária
console.log(lista.print())
console.log(lista.printReverse())

let removed = lista.removeHead() // Remoção do início
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

removed = lista.removeTail() // Remoção do final
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

removed = lista.remove(2) // Remoção em posição intermediária
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

lista.insert('Pierina')
lista.insert('Ildefonso')
console.log(lista.print())
console.log(lista.printReverse())

let peekHead = lista.peekHead()
let peekTail = lista.peekTail()
let peek3 = lista.peek(3)
console.log({peekHead, peekTail, peek3})

let idxDeusdete = lista.indexOf('Desdete')
let idxPierina = lista.indexOf('Pierina')
let idxCremilda = lista.indexOf('Cremilda')
let idxIldefonso = lista.indexOf('Ildefonso')
let idxCatifunda = lista.indexOf('Catifunda')
console.log({idxDeusdete, idxPierina, idxCremilda, idxIldefonso, idxCatifunda})