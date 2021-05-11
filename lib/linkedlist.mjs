/*
ESTRUTURA DE DADOS LISTA ENCADEADA

- A lista encadeada é uma estrutura de dados formada por unidades
de informação chamadas nodos ou nós.
- Cada nodo da lista encadeada tem duas partes: uma, que armazena a
informação e outra que guarda o endereço do próximo nodo da sequência
- A qualquer momento, temos um conhecimento apenas limitado de onde
se encontram todos os nodos da lista. Sabemos apenas onde está o
primeiro e o último nodo da sequência. Os nodos intermediários precisam
ser encontrados partindo-se do primeiro e percorrendo a sequência
*/

class Node {
    constructor(val) {
        this.data = val //armazenamento de valor
        this.next = null //ponteiro para o próximo nodo
    }
}

export class LinkedList {

    #head //nodo inicial da lista
    #tail //nodo final da lista
    #count //quantidade de nodos na lista

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
        //console.log({head: this.#head, tail: this.#tail, count: this.#count})
    }

    get empty() {
        return this.#count === 0
    }

    //inserção em uma posição arbitrária
    insert(pos, val) {
        
       //criar nodo para abrigar o valor e o endereço do próximo nodo
       let inserted = new Node(val)

       //1º caso: inserção em lista vazia
       if(this.empty) {
           this.#head = inserted
           this.#tail = inserted
       }

       //2º caso: inserção no início da lista
       else if(pos === 0) {
           //o sucessor do nodo inserido é o atual head
           inserted.next = this.#head
           //o novo head passa a ser o nodo inserido
           this.#head = inserted
       }
       
       //3º caso: inserção no final da lista
       else if(pos >= this.#count) {
           //o sucessor do tail atual passa a ser o nodo inserido
           this.#tail.next = inserted
           //o nodo inserido passa a ser o tail
           this.#tail = inserted
       }

       //4º caso: posição intermediária
       else {
           /*
           Vertex pre = head
           for (k = 0; k < i; k++)
           pre = pre.next
           Vertex aft = pre.next
           Vertex vtx = new Vertex(v)
           vtx.next = aft
           pre.next = vtx
           */

           //nodo anterior à posição de inserção
           let before = this.#head
           //percorre a lista até encontrar o nodo da posição anterior à inserção
           for(let i = 0; i < pos - 1; i++) before = before.next
           
           //nodo que irá ficar depois do inserido
           let after = before.next

           //o próximo do nodo inserido passa a ser o nodo after
           inserted.next = after

           //o próximo do nodo before passa a ser o nodo inserido
           before.next = inserted
       }

       this.#count++

       //console.log({head: this.#head, tail: this.#tail, count: this.#count})
    }

    print() {
        let output = '( '
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}]: ${node.data}`
            if(node.next) output += ' -> '
            node = node.next
        } 
        return output + ` ) count: ${this.#count}`
    }
}

let lista = new LinkedList()
console.log(lista.print())

lista.insert(0, 76)
console.log(lista.print())

lista.insert(0, 22)
console.log(lista.print())

lista.insert(2, 8)
console.log(lista.print())

lista.insert(1, 47)
console.log(lista.print())

lista.insert(2, 29)
console.log(lista.print())