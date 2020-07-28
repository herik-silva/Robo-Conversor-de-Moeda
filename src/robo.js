const robo = {
    input: require('./robos/input.js'),
    pesquisar: require('./robos/pesquisar.js'),
    calcular: require('./robos/calcular.js'),
    conversao: require('./robos/conversao.js')
}

async function inciarRobo(){
    var opcao =  robo.input();
    
    switch(opcao){
        case "0":
            console.log("Obrigado por utilizar o Robo Conversor de Moeda");
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
    const valor_moeda_final = await robo.pesquisar(moedaBase,moedaFinal);

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
