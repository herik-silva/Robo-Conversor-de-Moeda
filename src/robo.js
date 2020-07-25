const puppeter = require('puppeteer');
const readline = require('readline-sync');

async function conversao(){
    console.log("Robo Conversor de Moeda V0.1");
    console.log("1-Real para Dolar");
    console.log("2-Dolar para Real");
    console.log("0-Fechar Programa");
    return readline.question("Selecione uma das opcoes acima: ");
}

async function getMoedaFinal(pagina){
    const valor_moeda_final = await pagina.evaluate(()=>{
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });
    return valor_moeda_final;
}

async function robo(moedaBase, moedaFinal){
    const browser = await puppeter.launch();
    const pagina = await browser.newPage();

    await pagina.goto(`https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57.3363j0j7&sourceid=chrome&ie=UTF-8`);

    let moeda_final = await getMoedaFinal(pagina);

    console.log(`\n-----Cotação do ${moedaBase} para o ${moedaFinal}-----`);
    console.log(`Atualmente 1 ${moedaBase} vale ${moeda_final} em ${moedaFinal}`);
    console.log('---------------------------------------\n');
   
    browser.close();
    await start();
}

 async function start(){
    var opcao = await conversao();
    switch(opcao){
        case "0":
            console.log("Obrigado por utilizar o Robo Conversor de Moeda V0.1");
            break;
        case "1":
            await robo("real","dolar");
            break;
        case "2":
            await robo("dolar","real");
            break;
        default:
            await start();
            break;
    }
}

start();