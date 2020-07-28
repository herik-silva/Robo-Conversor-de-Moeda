const readline = require('readline-sync');

function conversao(){
    var valor = readline.question("Insira o valor da moeda base para realizar a conversao: ");
    return parseInt(valor);
}

module.exports = conversao;