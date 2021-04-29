let totTrocas, pass, comps

function bubbleSort(vetor, fnComp) {
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do {
        trocas = 0      // Iniciando uma nova passada
        pass++

        // Percurso do vetor, da primeira até a PENÚLTIMA posição
        for(let i = 0; i <= vetor.length - 2; i++) {
            //if(vetor[i] > vetor[i + 1]) {
            if(fnComp(vetor[i], vetor[i + 1])) {
                // Troca direta em JS via desestruturação de vetor
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocas++
            }
            comps++
        }
        totTrocas += trocas

    } while (trocas > 0)
}

import { gastos } from './massa-testes/cota-parlamentar-282-mil.mjs'

console.time('Ordenando gastos...')

bubbleSort(gastos, (a, b) => {
    if(a.partido === b.partido) { //Empate no partido
        //Empate no nome_parlamentar, desempate no id_documento
        if(a.nome_parlamentar === b.nome_parlamentar) return a.id_documento > b.id_documento
        //partido igual, nome_parlamentar diferentes, diferencia por id_documento
        else return a.nome_parlamentar > b.nome_parlamentar
    }
    //partidos diferentes, diferencia por partidos
    else return a.partido > b.partido
})

console.timeEnd('Ordenando gastos...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Depois:', gastos)
console.log({totTrocas, pass, comps, memoria})