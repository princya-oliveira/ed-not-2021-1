class Node {
    constructor(val) {
        this.data = val
        this.left = null // ponteiro para sub-árvore à esquerda
        this.right = null // ponteiro para sub-árvore à direita
    }
}

export class BinarySearchTree {

    #root // raiz da árvore

    constructor() {
        this.#root = null
    }

    insert(val) {

        const node = new Node(val)

        // 1º caso: árvore vazia
        if(this.#root === null) this.#root = node
        
        // 2º caso: inserção recursiva -> percorre a árvore recursivamente
        // para encontrar a posição do novo nodo
        else this.#insertNode(node, this.#root)
    }

    // Parâmetros:
    // node -> nodo a ser inserido
    // root -> a raiz da subárvore onde será feita a inserção
    #insertNode(node, root) {
        // 1º caso: valor do nodo é menor que o valor da raiz
        if(node.data < root.data) {
            // verifica se o nodo à esquerda da raiz está desocupado
            // e, se for o caso, insere aí o nodo
            if(root.left === null) root.left = node
            // caso o nodo à esquerda da raiz jé exista, reiniciamos
            // o processo considerando este como raiz da subárvore
            else this.#insertNode(node, root.left)
        }
        // 2º caso: valor do nodo é maior que o valor da raiz -> vai para a direita
        else if(node.data > root.data) {
            // acontece a mesma coisa que no caso anterios, mas do lado direito
            if(root.right === null) root.right = node
            else this.#insertNode(node, root.right)
        }
        // note que, se o valor do nodo for igual ao valor da raiz, nada acontece:
        // o pedido de inserção é ignorado para evitar valores duplicados na árvore

    }

    /****************** PERCURSOS ****************/

    // Percurso em ordem
    // 1º: visita em-ordem a subárvore esquerda
    // 2º: visita a raiz
    // 3º: visita em-ordem a subárvore direita
    inOrderTraversal(fnCallback, root = this.#root) {
        if(root !== null) {
            this.inOrderTraversal(fnCallback, root.left) // 1º
            fnCallback(root.data)                        // 2º
            this.inOrderTraversal(fnCallback, root.right)// 3º
        }
    }

    // Percurso pré-ordem
    // 1º: visita a raiz
    // 2º: visita pré-ordem a subárvore esquerda
    // 3º: visita pré-ordem a subárvore direita
    // fnCallback: função externa que será chamada toda vez que o percurso passar por um nodo
    preOrderTraversal(fnCallback, root = this.#root) {
        if(root != null) {
            fnCallback(root.data)                           // 1º
            this.preOrderTraversal(fnCallback, root.left)   // 2º
            this.preOrderTraversal(fnCallback, root.right)  // 3º
        }
    }

    // Percurso pós-ordem
    // 1º: visita pós-ordem a subárvore esquerda
    // 2º: visita pós ordem a subárvore direita
    // 3º: visita a raiz
    // fnCallback: função externa que será chamada toda vez que o percurso passar por um nodo
    postOrderTraversal(fnCallback, root = this.#root) {
        if(root !== null) {
            this.postOrderTraversal(fnCallback, root.left)  // 1º
            this.postOrderTraversal(fnCallback, root.right) // 2º
            fnCallback(root.data)                           // 3º
        }
    }

    // Retorna o menor valor da árvore
    min() {
        let min = this.#minNode(this.#root)
        return min !== null ? min.data : null
    }

    // Encontra o nodo com o menor valor da árvore ou subárvore
    #minNode(root) {
        let min = root
        while(min !== null && min.left !== null) min = min.left
        return min
    }

    // Retorna o maior valor da árvore
    max() {
        let max = this.#maxNode(this.#root)
        return max !== null ? max.data : null
    }

    // Encontra o nodo com o maior valor da árvore ou subárvore
    #maxNode(root) {
        let max = root
        while(max !== null && max.right !== null) max = max.right
        return max
    }

    // Procura pelo valor especificado e retorna true caso exista 
    // ou false caso contrário
    search(key) {
        let node = this.#searchNode(this.#root, key)
        // se for retornar um node válido (diferente de null),
        // é porque o valor existe na árvore
        return node !== null
    }

    // Procura pelo nodo que armazena key
    #searchNode(root, key) {

        // 1º caso: a árvore está vazia
        if(root === null) return null

        // 2º caso: o valor de key é menor que o valor da raiz
        // continua a busca pela subárvore esquerda
        if(key < root.data) return this.#searchNode(root.left, key)

        // 3º caso: o valor de key é maior que o valor da raiz
        if(key > root.data) return this.#searchNode(root.right, key)

        // 4º caso: o valor de key é igual ao valor da raiz
        // o nodo que contém o valor foi encontrado e é root
        return root
    }

    remove(key) {
        this.#root = this.#removeNode(this.#root, key)
    }

    // Remove o nodo com o key especificado a partir do root
    #removeNode(root, key) {

        // 1º caso: árvore vazia
        if(root === null) return null

        // 2º caso: o valor de key é menor que o valor da raiz
        if(key < root.data) {
            root.left = this.#removeNode(root.left, key)
            return root
        }

        // 3º caso: o valor de key é maior que o valor da raiz
        if(key > root.data) {
            root.right = this.#removeNode(root.right, key)
            return root
        }

        // 4º caso: o valor de key é igual ao valor da raiz
        // (encontrou o nodo a ser removido)

        // caso 4.1: remoção de nodo folha (grau 0)
        if(root.left === null && root.right === null) {
            root = null
            return root
        }

        // caso 4.2: remoção de nodo grau 1 com descendentes à esquerda
        if(root.left !== null && root.right === null) {
            root = root.left
            return root
        }

        // caso 4.3: remoção de nodo grau 1 com descendentes à direita
        if(root.left === null && root.right !== null) {
            root = root.right
            return root
        }

        // caso 4.4: remoção de nodo de grau 2

        // Precisamos encontrar:
        // a) o maior nodo da subárvore esquerada *ou*
        // b) o menor nodo da subárvore direita
        const newRoot = this.#maxNode(root.left)
        // ou: const newRoot = this.#minNode(root.right)

        // Leva o valor do novo root para o root original
        root.data = newRoot.data

        // Excluímos o valor duplicado que ficou na subárvore do root
        // (de onde veio o maior valor)
        root.left - this.#removeNode(root.left, newRoot.data)
        // ou: root.right = this.#removeNode(root.right, newRoot.data)

        return root
    }

}


// 1) Observe a árvore binária representada na figura "arvore.png". Responda:
    // a) Quantos níveis essa árvore possui?
    // A árvore possui 5 níveis

    // b) Qual a altura da subárvore cuja raiz é 16?
    // A altura da é = 4.

    // c) Qual a profundidade do nodo de valor 29?
    // A profundidade é = 1

// 2) Monte em código, neste arquivo, a árvore representada na figura.

const arvore = new BinarySearchTree()
arvore.insert(51)
arvore.insert(87)
arvore.insert(16)
arvore.insert(9)
arvore.insert(44)
arvore.insert(72)
arvore.insert(99)
arvore.insert(1)
arvore.insert(14)
arvore.insert(35)
arvore.insert(58)
arvore.insert(79)
arvore.insert(92)
arvore.insert(29)
arvore.insert(43)
arvore.insert(60)
arvore.insert(86)
arvore.insert(20)

// 3) No código, remova os seguintes nodos: 58, 35, 87 e 51.

let percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log({percursoEm})

let percursoPre = []
arvore.preOrderTraversal(val => percursoPre.push(val))
console.log({percursoPre})

let percursoPos = []
arvore.postOrderTraversal(val => percursoPos.push(val))
console.log({percursoPos})

// Remoção do 58 - nodo grau 1 com direita:
arvore.remove(58)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 58:',{percursoEm})

// Remoção do 35 - nodo grau 2:
arvore.remove(35)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 35:',{percursoEm})

// Remoção do 87 - nodo grau 2:
arvore.remove(87)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 87:',{percursoEm})

// Remoção do 51 - remoção do nodo raiz:
arvore.remove(51)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 51:',{percursoEm})


// 4) Execute os métodos de percurso da árvore e anote, abaixo, os respectivos resultados após as remoções:

console.log({percursoEm})

console.log({percursoPre})

console.log({percursoPos})

        // a) Percurso em-ordem:
        /*
            1,  9, 14, 16, 20, 29,
            43, 44, 60, 72, 79,
            86, 92, 99
        */

        // b) Percurso pré-ordem:
        /*
            51, 16,  9,  1, 14, 44, 35,
            29, 20, 43, 87, 72, 58, 60,
            79, 86, 99, 92
        */

        // c) Percurso pós-ordem:
        /*
            1, 14,  9, 20, 29, 43, 35,
            44, 16, 60, 58, 86, 79, 72,
            92, 99, 87, 51
        */

//        5) Anexe este arquivo, com o código da árvore binária de busca, ao
//        entregar a prova.

