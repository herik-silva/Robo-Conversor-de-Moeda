const puppeteer = require('puppeteer');

async function getMoedaFinal(pagina){
    const valor_moeda_final = await pagina.evaluate(()=>{
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });
    return valor_moeda_final;
}

async function pesquisar(moedaBase, moedaFinal,navegador){
    if(navegador.browser == null){
        console.log("Não tem navegador aberto!");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57.3363j0j7&sourceid=chrome&ie=UTF-8`);
        const navegador_aberto = {
            browser: browser,
            page: page
        }
        const valor_moeda_final = await getMoedaFinal(page);
        return [valor_moeda_final,navegador_aberto];
    }
    else{
        console.log("Tem navegador aberto!");
        await navegador.page.goto(`https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57.3363j0j7&sourceid=chrome&ie=UTF-8`);
        const valor_moeda_final = await getMoedaFinal(navegador.page);
        return [valor_moeda_final,navegador];
    }
}

module.exports = pesquisar;