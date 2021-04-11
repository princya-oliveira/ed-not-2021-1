let comps, divisoes, juncoes

function mergeSort(vetor, fnComp) {
    
    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            //if(vetEsq[pEsq] < vetDir[pDir]) {
            if(fnComp(vetDir[pDir], vetEsq[pEsq])) {    // Parâmetros invertidos
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps++
        }
        // Descobrir de qual lado sobrou
        let sobra

        // Sobra à esquerda
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)
        // Sobra à direita
        else sobra = vetDir.slice(pDir)

        // Retorna vetor de resultados + sobra
        return [...vetRes, ...sobra]
    }
    
    // Para ser "desmontado", um vetor deve ter, pelo menos, 2 elementos
    if(vetor.length > 1) {
        const meio = Math.floor(vetor.length / 2)
        // slice() fatia um vetor, copiando os elementos desde a posição inicial informada
        // (inclusive) até a posição final (exclusive - a posição final NÃO entra)
        let vetEsq = vetor.slice(0, meio)
        // Caso o segundo parâmetro de slice() seja omitido, serão copiados os elementos
        // desde a posição informada até a posição final
        let vetDir = vetor.slice(meio)
        divisoes++

        //console.log({vetEsq, vetDir})

        // Chamadas recursivas à função
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)

        const vetFinal = mesclar(vetEsq, vetDir)
        juncoes++
        //console.log({vetFinal})
        
        return vetFinal
    }
    return vetor    // Vetor de 1 elemento, não modificado, condição de saída
}

import { gastos } from './massa-testes/cota-parlamentar-8.5-mil.mjs'

comps = 0, divisoes = 0, juncoes = 0
console.time('Ordenando gastos...')

let gastosOrd = mergeSort(gastos, (a, b) => {
    if(a.partido === b.partido) { //Empate no partido
        //Empate no nome_parlamentar, desempate no id_documento
        if(a.nome_parlamentar === b.nome_parlamentar) return a.id_documento > b.id_documento
        //partido igual, nome_parlamentar diferentes, diferencia por id_documento
        else return a.nome_parlamentar > b.nome_parlamentar
    }
    //partidos diferentes, diferencia por partidos
    else return a.partido > b.partido
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando gastos...')
console.log('DEPOIS:', gastosOrd)
console.log({comps, divisoes, juncoes, memoria})
