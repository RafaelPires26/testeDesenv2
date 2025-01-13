/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

// Variavel definida pelo usuário manualmente
let strObj = 'CAMISETA';

let resObj = []
strObj = strObj.split('');

strObj.map( obj => { resObj.unshift(obj); })

console.log(resObj.join(''));
