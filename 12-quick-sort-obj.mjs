let trocas, comps, pass

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
    if(fim > ini) {
        pass++
        const pivot = fim
        let div = ini - 1
        //Loop for vai até a penúltima posição
        for(let i = ini; i < fim; i++) {
            //if(vetor[i] < vetor[pivot]) {
            if(fnComp(vetor[pivot], vetor[i])) {  // Parâmetros invertidos
                comps++
                div++
                if(i !== div) {
                    [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                    trocas++
                }
            }
        }
        div++
        //Colocamos o pivô no seu lugar definitivo
        //if(vetor[pivot] < vetor[div]) {
        if(fnComp(vetor[div], vetor[pivot])) { // Parâmetros invertidos
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++

        //Ordena o subvetor à esquerda do pivô
        quickSort(vetor, fnComp, ini, div - 1)

        //Ordena o subvetor à direita do pivô
        quickSort(vetor, fnComp, div + 1, fim)
    }
}

import { candidatos } from './includes/candidatos-2018.mjs'

comps = 0, trocas = 0, pass = 0
console.time('Ordenando candidatos...')
//quickSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

//Ordenação por SG_UE, depois por DS_CARGO e, finalemente, por NR_CANDIDATO
quickSort(candidatos, (a, b) => {
//Caso queira filtrar candidatos apenas de um estado, por exemplo:
//const candidatosSP = candidatos.filter(obj => obj.SG_UE === 'SP')
//quickSort(candidatosSP.filter(obj => obj.SG_UE === 'SP'))
    if(a.SG_UE === b.SG_UE) { //Empate na UF
        //Empate no cargo, desempate no número do candidato
        if(a.DS_CARGO === b.DS_CARGO) return a.NR_CANDIDATO > b.NR_CANDIDATO
        //UF igual, cargos diferentes, diferencia por cargo
        else return a.DS_CARGO > b.DS_CARGO
    }
    //UFs diferentes, diferencia por UF
    else return a.SG_UE > b.SG_UE
})

console.timeEnd('Ordenando candidatos...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Depois:', candidatos) //para exibir o filter substituir candidatos por candidatosSP
console.log({trocas, pass, comps, memoria})