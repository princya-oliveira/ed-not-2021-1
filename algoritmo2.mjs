function k(m, fnComp, n) {
    let o = 0, p = m.length - 1, q
    while(p >= o) {
        q = Math.floor((p + o) / 2)
        if(fnComp(m[q] === n)) return q
        else if(n > m[q]) o = q + 1
        else p = q - 1
    }
    return -1  // Não existe
}

/*
    Em **cada um dos arquivos de algoritmos**, você deverá:

    1. Fazer o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas); e
    2. Introduzir a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.    

    No **arquivo do algoritmo de busca**, você deverá:

    1. Identificar a qual algoritmo de busca corresponde o código; e
    2. Importar o vetor contido em `countries.mjs` e fazer uma busca pelo valor `Brazil` no campo `country`.
*/

/*
    MAPEAMENTO DAS VARIÁVEIS - BUSCA BINÁRIA
    m -> vetor para busca
    n -> valor da busca
    o -> ponteiro de início
    p -> ponteiro de fim
    q -> ponteiro de meio 
*/

import { countries } from './testes-prova1/countries.mjs'

console.log(k(countries, (obj, busca = 'BRAZIL') => {
    if(busca === obj.country) return 0
    else if(busca < obj.country) return -1
    else return 1
}))


