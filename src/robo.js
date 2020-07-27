const robo = {
    input: require('./robos/input.js'),
    pesquisar: require('./robos/pesquisar.js')
}

async function inciarRobo(){
    var opcao =  robo.input();
    
    switch(opcao){
        case "0":
            console.log("Obrigado por utilizar o Robo Conversor de Moeda");
            break;
        case "1":
            await iniciarConversao("real","dolar").catch("Erro!");
            break;
        case "2":
            await iniciarConversao("dolar","real");
            break;
        default:
            await start();
            break;
    }
}

async function iniciarConversao(moedaBase, moedaFinal){
    const valor_moeda_final = await robo.pesquisar(moedaBase,moedaFinal);
    console.log("------ Conversão de Moeda ------");
    console.log(`Atualmente 1 ${moedaBase} vale ${valor_moeda_final} em ${moedaFinal}`);
    console.log("--------------------------------");
    await start();
}

async function start(){
    await inciarRobo();
}

start();