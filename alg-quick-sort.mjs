let trocas, comps, pass

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
    if(fim > ini) {
        pass++
        const pivot = fim
        let div = ini - 1
        
        for(let i = ini; i < fim; i++) {
            if(fnComp(vetor[pivot], vetor[i])) {  
                comps++
                div++
                if(i !== div) {
                    [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                    trocas++
                }
            }
        }
        div++
        
        if(fnComp(vetor[div], vetor[pivot])) { 
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++

        quickSort(vetor, fnComp, ini, div - 1)
        quickSort(vetor, fnComp, div + 1, fim)
    }
}

import { gastos } from './massa-testes/cota-parlamentar-282-mil.mjs'

comps = 0, trocas = 0, pass = 0
console.time('Ordenando gastos...')

quickSort(gastos, (a, b) => {
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
console.log({trocas, pass, comps, memoria})
