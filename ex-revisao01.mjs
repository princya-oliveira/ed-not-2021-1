/*
    1. Identifique o algoritmo abaixo.
    2. Comente o que faz cada uma das linhas.
    3. Introduza a função de comparação e faça os ajustes necessários para o
       respectivo funcionamento.
    4. Teste o algoritmo no arquivo dados/candidatos-2018.mjs, ordenando primeiramente
       por SG_UE e depois por NR_CANDIDATO.
*/

let comps

//Selection Sort
const a = (b, fnComp) => {

    comps = 0

    const c = (d, e) => {
        let f = e //let menor = inicio
        //Loop até a última posição
        for(let g = e + 1; g < d.length; g++) if(fnComp(d[g] < d[f])) f = g 
        comps++
        return f //menor valor
    }
    //Percurso do vetor até a penúltima posição
    for(let h = 0; h < b.length - 1; h++) {
        let i = c(b, h + 1)
        if(fnComp(b[h] > b[i])) [b[h], b[i]] = [b[i], b[h]]
        comps++
    }
}

import { candidatos } from './includes/candidatos-2018.mjs'

//console.log('ANTES:', candidatos)
console.time('Ordenando candidatos...')
// Ordenando pelo nome de urna (SG_UE)
a(candidatos, (obj1, obj2) => obj1.SG_UE > obj2.SG_UE)
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatos)
console.log({comps})

