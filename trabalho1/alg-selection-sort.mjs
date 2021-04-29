let trocas, pass, comps

function selectionSort(vetor, fnComp) {

    trocas = 0, pass = 0, comps = 0

    function encontrarMenor(inicio) {
        let menor = inicio
        // Este loop vai até a última posição
        for(let j = inicio + 1; j < vetor.length; j++) {
            //if(vetor[j] < vetor[menor]) menor = j
            // Na passagem para função de comparação, a ordem dos
            // objetos precisa ser invertida
            if(fnComp(vetor[menor], vetor[j])) menor = j
            comps++
        }
        return menor
    }

    // Percurso do vetor até a PENÚLTIMA posição
    for(let i = 0; i <= vetor.length - 2; i++) {
        pass++
        let menor = encontrarMenor(i + 1)
        
        //if(vetor[menor] < vetor[i]) {
        // Parâmetros em ordem invertida
        if(fnComp(vetor[i], vetor[menor])) {
            [ vetor[menor], vetor[i] ] = [ vetor[i], vetor[menor] ]
            trocas++
        }
        comps++
    }
}

import { gastos } from './massa-testes/cota-parlamentar-282-mil.mjs'

console.time('Ordenando gastos...')
selectionSort(gastos, (a, b) => {
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
console.log('DEPOIS:', gastos)
console.log({trocas, pass, comps, memoria})
