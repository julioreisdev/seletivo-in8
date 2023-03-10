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
        (item) => `${item.textContent?.trim()}`
      );
    }, scraperParam);

    const values = content
      .filter((item) => item?.toLowerCase()?.includes(filter))
      .map((item) =>
        item
          .replace("\n\t\t\t\n\t\t\t\t\t\t\t\t\t", "")
          .replace("\n\t\t\t\t\t\t\t\n\t\t\t", "")
          .replace("\n\n\t\t\n\t\t\n\t\t\t", "")
          .replace('"', "")
      )
      .map((item) => Object.assign({}, item.split(" ")));

    const formatedValues = values.map((value, index) => {
      return {
        price: Number(value["0"].replace(/[^0-9\.]+/g, "")),
        description: value,
      };
    });

    return formatedValues.sort();
  } catch (error) {
    throw "Data Scraper Failed";
  }
}

const scraperServices = {
  dataScraper,
};

export default scraperServices;
