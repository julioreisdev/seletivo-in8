import { IScraper } from "../interfaces/scraper.interface";
import puppeteer from "puppeteer";

async function dataScraper(data: IScraper) {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(data.url);

    const filter = data.filter ? data.filter.toLowerCase() : "";
    const scraperParam = data.scraperParam;
    await page.waitForSelector(scraperParam);

    const content = await page.evaluate((scraperParam) => {
      return [...document.querySelectorAll(scraperParam)].map(
        (item) => `${item.textContent}`
      );
    }, scraperParam);

    const values = content.filter((item) =>
      item?.toLowerCase()?.includes(filter)
    );

    return values;
  } catch (error) {
    throw "Data Scraper Failed";
  }
}

const scraperServices = {
  dataScraper,
};

export default scraperServices;
