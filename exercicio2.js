/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 
valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

let arCalc    = [];
let objValida = 0;
let resCalc   = false;

// VARIAVEL DEFINIDA PELO USUARIO MANUALMENTE
let nrCalc = 35;

for (let i = 0; objValida <= nrCalc; i++){

    if (i < 2) { 
        arCalc.push(i);
    } else {
        arCalc.push(arCalc[i - 2] + arCalc[i - 1]);
        objValida = arCalc[i - 2] + arCalc[i - 1];
    }
}

arCalc.map( calc => { if (calc == nrCalc) resCalc = true });
 

console.log(` O número ${resCalc ? nrCalc : nrCalc + ' não'} pertence a sequência de Fibonacci! `);




