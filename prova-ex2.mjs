/*
    O código abaixo representa um trecho de uma das estruturas de dados estudadas.

    1. Identifique a estrutura de dados e o método (função) representado no código abaixo.
    // O código é uma Linked list.

    2. Faça o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas).
    Mapeamento das variáveis:
    i = nome do método, neste caso para remoção de itens da linked list
    j = parâmetro do método i, representa a posição/item a ser removido
    k = variável que recebe item removido
    l = variável que identifica o item anterior ao que será removido
    c = usada para encontrar o próximo item em uma linked list
    m = variável que identifica  o item após ao que será removido
    b = é o data, onde estão armazenados os itens da linkedlist

    Propriedades da linked list:
    this.#h = contador 
    this.#f = início da linked list
    this.#g = cauda/fim da linked list

    3. Comente os principais trechos do código, explicando seu objetivo.
*/

class E {

    /* Código omitido */

    i(j) { // método para remoção de itens da lista

        // A lista está vazia || a posição informada é menor que zero || maior que h - 1
        if(this.empty || j < 0 || j > this.#h - 1) return undefined
        let k
        // este é o caso para remoção de itens do início da lista
        if(j === 0) {
            k = this.#f
            this.#f = this.#f.c 
            // Atualizando o #g em caso de remoção do último nodo
            if(this.#h === 1) this.#g = this.#f.c
        }
        // remoção de itens que estejam em posição intermediária na lista
        else {
            let l = this.#f
            for(let i = 0; i < j - 1; i++) l = l.c
            k = l.c
            let m = k.c
            l.c = m
            // Atualizando o #g em caso de remoção do último nodo
            if(j === this.#h - 1) this.#g = l
        }
        this.#h--
        return k.b
    }

    /* Código omitido */

}