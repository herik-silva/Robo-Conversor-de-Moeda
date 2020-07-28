const puppeteer = require('puppeteer');

const robo = {
    input: require('./robos/input.js'),
    pesquisar: require('./robos/pesquisar.js'),
    calcular: require('./robos/calcular.js'),
    conversao: require('./robos/conversao.js')
}

var navegador={
    browser: null,
    page: null
};

async function inciarRobo(){
    var opcao =  robo.input();
    
    switch(opcao){
        case "0":
            console.log("Obrigado por utilizar o Robo Conversor de Moeda");
            if(navegador.browser != null){
                console.log(typeof navegador.browser);
                navegador.browser.close();
            }
            break;
        case "1":
            await iniciarConversao("real","dolar").catch("Tempo limite expirado!");
            break;
        case "2":
            await iniciarConversao("dolar","real").catch("Tempo limite expirado!");
            break;
        default:
            console.log("Opcao invalida!");
            await iniciarRobo();
            break;
    }
}

async function iniciarConversao(moedaBase, moedaFinal){
    const pesquisa = await robo.pesquisar(moedaBase,moedaFinal,navegador);
    const valor_moeda_final = pesquisa[0];
    navegador = pesquisa[1];
    console.log("------ Conversão de Moeda ------");
    console.log(`Atualmente 1 ${moedaBase} vale ${valor_moeda_final} em ${moedaFinal}`);
    console.log("--------------------------------");
    const valor_conversao = robo.conversao();
    const valor_convertido = robo.calcular(valor_conversao, valor_moeda_final);
    console.log(`${valor_conversao} ${moedaBase} -> ${valor_convertido} ${moedaFinal}`);
    await start();
}

start();

async function start(){
    await inciarRobo();
}
