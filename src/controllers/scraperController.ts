import { Request, Response } from "express";
import { IScraper } from "../interfaces/scraper.interface";
import scraperServices from "../services/scraperServices";

async function getScraper(req: Request, res: Response) {
  const data: IScraper = res.locals.body;
  try {
    const result = await scraperServices.dataScraper(data);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
  return res.send(data);
}

const scraperController = {
  getScraper,
};

export default scraperController;
