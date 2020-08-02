const readline = require('readline-sync');

const moedas = [
    "Dolar Americano",
    "Real",
    "Euro","Afegane afegão",
    "Ariary malgaxe",
    "Baht tailandês",
    "Balboa panamenho",
    "Birr etíope",
    "Bitcoin",
    "Bitcoin Cash",
    "Boliviano da Bolívia",
    "Bolívar venezuelano",
    "Cedi ganês"
];

function input(){
    var moedaBase, moedaFinal;

    console.log("Robo Conversor de Moeda");
    for(let i=0; i<moedas.length; i++){
        console.log(`${i+1}-${moedas[i]}`);
    }
    console.log("0-Fechar programa");

    moedaBase = Number.parseInt(readline.question("Escolha a moeda base: "));
    if(moedaBase != 0){
        do{
            moedaFinal = Number.parseInt(readline.question("Escolha a moeda final: "));
        }while(moedaBase == moedaFinal);
        
        if(moedaFinal >= 0){
            return [moedas[moedaBase-1],moedas[moedaFinal-1]];
        }
        else{
            return null;
        }
    }
    else{
        return null;
    }
}

module.exports = input;