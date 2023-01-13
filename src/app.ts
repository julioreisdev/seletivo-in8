import express from "express";
import cors from "cors";
import scraperRoutes from "./routes/scraperRoutes";

const app = express();
app.use(cors(), express.json());
app.use(scraperRoutes);

export default app;
