/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
*/

const arFat = require ('./objExercicio4.json');

let arRepres = []
let totFat   = 0;

for (let fat of arFat) { 
    totFat = fat.valor + totFat;
}

arFat.map( fat => {
    arRepres.push({
        estado  : fat.estado,
        porcent : (fat.valor / totFat) * 100 
    })
});

for (let key in arRepres){
    if (arRepres[key].estado.length == 2){
        console.log(` O estado de ${arRepres[key].estado} teve um percentual mensal de faturamento de ${arRepres[key].porcent.toFixed(2)}%`);
    } else {
        console.log(` Os ${arRepres[key].estado} estados tiveram um percentual mensal de faturamento de ${arRepres[key].porcent.toFixed(2)}%`);
    }
}
