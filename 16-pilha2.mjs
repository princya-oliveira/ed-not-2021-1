import { stack } from './lib/stack.mjs'

const texto = 'Socorram-me, subi no ônibus em Marrocos'

const pilha = new stack()

// Empilhamento
for(let i = 0; i < texto.length; i++) {
    pilha.push(texto.charAt(i))
}

console.log(pilha.print())

let textoRev = ''

// Desempilhamento
while(! pilha.empty) { 
    textoRev += pilha.pop()
}
console.log(textoRev)