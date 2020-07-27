const readline = require('readline-sync');

function input(){
    console.log("Robo Conversor de Moeda");
    console.log("1-Real para Dolar");
    console.log("2-Dolar para Real");
    console.log("0-Fechar Programa");
    return readline.question("Selecione uma das opcoes acima: ");
}

module.exports = input;