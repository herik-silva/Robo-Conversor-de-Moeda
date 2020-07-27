const puppeteer = require('puppeteer');

async function getMoedaFinal(pagina){
    const valor_moeda_final = await pagina.evaluate(()=>{
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    });
    return valor_moeda_final;
}

async function pesquisar(moedaBase, moedaFinal){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57.3363j0j7&sourceid=chrome&ie=UTF-8`);
    const valor_moeda_final = await getMoedaFinal(page);
    browser.close();
    return valor_moeda_final;
}

module.exports = pesquisar;