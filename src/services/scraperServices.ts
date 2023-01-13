import { IScraper } from "../interfaces/scraper.interface";

async function dataScraper(data: IScraper) {
  return data;
}

const scraperServices = {
  dataScraper,
};

export default scraperServices;
