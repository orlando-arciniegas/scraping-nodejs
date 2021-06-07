const puppeteer = require('puppeteer');

async function getPrice() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    let url = 'https://www.bna.com.ar/Personas';

    await page.goto(url, {
        waitUntil:['load', 'domcontentloaded', 'networkidle0', 'networkidle2']
    });

    let priceDollar = await page.$eval('.table.cotizacion > tbody > tr > td:nth-child(3)', el => el.innerHTML);
    let priceEuro = await page.$eval('.table.cotizacion > tbody > tr:nth-child(2) > td:nth-child(3)', el => el.innerHTML);
    let priceReal = await page.$eval('.table.cotizacion > tbody > tr:nth-child(3) > td:nth-child(3)', el => el.innerHTML);
    
    await browser.close();

    let prices = [{
        "Dollar": priceDollar, 
        "Euro": priceEuro, 
        "Brazil Real": priceReal
    }]
    return prices
}

module.exports = getPrice;

