import { Router } from "express";
import scraperController from "../controllers/scraperController";
import validateSchema from "../middlewares/validateSchema.ts";
import scraperSchema from "../schemas/scraperSchema";

const router = Router();

router.get(
  "/scraper",
  validateSchema(scraperSchema),
  scraperController.getScraper
);

export default router;
