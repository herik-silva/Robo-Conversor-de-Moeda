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

async function iniciarRobo(){
    const moedas =  robo.input();
    if(moedas!=null){
        await iniciarConversao(moedas[0],moedas[1]);
        await iniciarRobo();
    }
    else{
        console.log("Obrigado por utilizar o Robo Conversor de Moedas!");
        if(navegador.browser != null){
            navegador.browser.close();
        }
        return 0;
    }
}

async function iniciarConversao(moedaBase, moedaFinal){
    const pesquisa = await robo.pesquisar(moedaBase,moedaFinal,navegador);
    const valor_moeda_final = pesquisa[0];
    navegador = pesquisa[1];
    console.log("\n------ Conversão de Moeda ------");
    console.log(`Atualmente 1 ${moedaBase} vale ${valor_moeda_final} em ${moedaFinal}`);
    console.log("--------------------------------\n");
    const valor_conversao = robo.conversao();
    const valor_convertido = robo.calcular(valor_conversao, valor_moeda_final);
    console.log(`${valor_conversao} ${moedaBase} -> ${valor_convertido} ${moedaFinal}\n`);
}

iniciarRobo();