function k(m, fnComp, n, o) {
    if(o <= n) return
    const p = o
    let q = n - 1
    for(let i = n; i < o; i++) {
        //if(m[i] < m[p]) {
        if(fnComp(m[p], m[i])) { //parâmetros invertidos
            q++
            if(i !== q) [ m[i], m[q] ] = [ m[q], m[i] ]
        }
    }
    q++

    if(fnComp(m[q], m[p])) [ m[p], m[q] ] = [ m[q], m[p] ] //parâmetros invertidos
    k(m, fnComp, n, q - 1)
    k(m, fnComp, q + 1, o)
}

/*
    Em **cada um dos arquivos de algoritmos**, você deverá:

    1. Fazer o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas); e
    2. Introduzir a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.    

    No arquivo do algoritmo de ordenação, você deverá:

    1. Identificar a qual algoritmo de ordenação corresponde o código; e
    2. Importar o vetor contido em `countries.mjs` e ordená-lo primeiro pelo campo `continent` e depois pelo campo `country`.
*/

/*
    MAPEAMENTO DAS VARIÁVEIS - QUICK SORT
    m -> vetor a ser ordenado
    n -> início do vetor e parâmetro para a condição de saída das chamadas recursivas
    o -> final do vetor e parâmetro para a condição de saída das chamadas recursivas
    p -> pivot
    q -> parâmetro que divide o vetor em duas partes (à direita e à esquerda do pivot)
    i -> contador do loop for que vai até a penúltima posição do vetor
*/

import { countries } from './testes-prova1/countries.mjs'

// Ordenação por `continent`, depois por `country`:
let countriesOrd = k(countries, (a, b) => {
    if(a.CONTINENT === b.CONTINENT) {    
        return a.COUNTRY > b.COUNTRY
    }
    else return a.CONTINENT > b.CONTINENT     
})

console.timeEnd('Ordenando countries...')
console.log('DEPOIS:', countriesOrd)
