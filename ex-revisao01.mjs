/*
    1. Identifique o algoritmo abaixo.
    2. Comente o que faz cada uma das linhas.
    3. Introduza a função de comparação e faça os ajustes necessários para o
       respectivo funcionamento.
    4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
       por SG_UE e depois por NR_CANDIDATO.
*/

/*
    MAPEAMENTO DAS VARIÁVEIS
    a -> função de ordenação
    b -> vetor a ser ordenado
    c -> subfunção que encontra o menor valor no restante do vetor
    d -> parâmetro da subfunção (vetor)
    e -> parâmetro da subfunção (posição inicial do subvetor)
    f -> valor inicial igual a e, posição do menor valor no subvetor
    g -> contador do for da subfunção, começa no e + 1 e vai até o penúltimo valor de d
    h -> contador do for da função principal inicia em 0 e vai até a penúltima posição
    i -> o resultado da chamada à subfunção c (menor do resto do vetor)
*/

// SELECTION SORT
const a = (b, fnComp) => {

    const c = (d, e) => {
        let f = e //let menor = inicio
        //Loop até a última posição
        //for(let g = e + 1; g < d.length; g++) if(fnComp(d[g] < d[f])) f = g
        for(let g = e + 1; g < d.length; g++) if(fnComp(d[f], d[g])) f = g //quando o sinal for de < tem que inverter o sinal
        return f //menor valor
    }
    //Percurso do vetor até a penúltima posição
    for(let h = 0; h < b.length - 1; h++) {
        let i = c(b, h + 1)
        //if(fnComp(b[h] > b[i])) [b[h], b[i]] = [b[i], b[h]]
        if(fnComp(b[h], b[i])) [b[h], b[i]] = [b[i], b[h]] //quando o sinal for > é só trocá-lo pela virgula
    }
}

import { candidatos } from './includes/candidatos-2018.mjs'

a(candidatos, (a, b) => {
    if(a.SG_UE === b.SG_UE) {
        return a.NR_CANDIDATO > b.NR_CANDIDATO
    }
    else return a.SG_UE > b.SG_UE
})

console.log(candidatos)

