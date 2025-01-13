/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const arFat = require ('./objExercicio3.json');

let minVal = {dia : 0, valor : 0};
let maxVal = {dia : 0, valor : 0};
let medVal = 0;
let calMed = 0;
let resMed = 0

// calculando a média
for (let med of arFat) { 
    calMed = med.valor + calMed;
}
medVal = calMed / arFat.length;

arFat.map( fat => {
    
    if ((minVal.valor > fat.valor || minVal.valor == 0) && fat.valor > 0 ) minVal = {dia : fat.dia, valor: fat.valor};

    if ((maxVal.valor < fat.valor || maxVal.valor == 0) && fat.valor > 0 ) maxVal = {dia : fat.dia, valor: fat.valor};

    if (fat.valor > 0 && fat.valor > medVal) resMed++;
});




console.log(` O menor valor de faturamento ocorrido foi de R$ ${minVal.valor.toFixed(2)} no dia ${minVal.dia} deste mês `);
console.log(` O maior valor de faturamento ocorrido foi de R$ ${maxVal.valor.toFixed(2)} no dia ${maxVal.dia} deste mês `);
console.log(` Tiveram ${resMed} dias de faturamente maior que a média mensal deste mÊs `);

/* 
DUVIDAS - Eu fiquei com duvida no seguinte o menor e o maior valor de faturamento sem contar com o zero, em nenhum dos casos não contei com o zero, pois ficaria muito obvio 
a conta do menor valor de faturamento ser zero, então nessa caso eu fiz a definição de não contar com zero, caso tenha enterpretado errado me desculpe. 
*/


